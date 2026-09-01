#!/usr/bin/env python3
"""Prepare an exported CV for the website: drop the phone number, make links clickable.

    python3 tools/cv/prepare_cv.py ~/Desktop/CV_export.pdf public/cv/Timotei-Petre-CV.pdf

The CV exporter draws text one glyph at a time (`dx 0 Td <code> Tj`) with subsetted
fonts, so both jobs work on the content stream:

  * the phone number is removed by deleting its operators, which slides the rest of
    the line left by exactly the width taken out; the line is then re-centred by half
    of that. The digits end up absent from the file, not merely hidden.
  * the exporter ships no link annotations at all, so the blue URLs are only blue
    text. Every target run is located by decoding glyph codes through the font's
    /ToUnicode CMap, then covered with a real /Link.

Both steps assert what they expect to find and stop rather than damage the PDF, so a
CV exported from a different template fails loudly instead of silently.

Needs pypdf:  python3 -m venv .venv && .venv/bin/pip install pypdf
"""
import re
import sys

sys.path.insert(0, str(__import__('pathlib').Path(__file__).parent))
import cmap
import ctm
from pypdf import PdfWriter
from pypdf.annotations import Link
from pypdf.generic import DecodedStreamObject

LINKS = [
    ('timoteisorin.petre@gmail.com', 'mailto:timoteisorin.petre@gmail.com'),
    ('linkedin.com/in/timotei-sorin-petre', 'https://linkedin.com/in/timotei-sorin-petre'),
    ('long-covid-spa-frontend.onrender.com', 'https://long-covid-spa-frontend.onrender.com'),
    ("Noah's Story", 'https://apps.apple.com/ro/app/noahs-story/id1555074864'),
    ('AnimaLearn', 'https://apps.apple.com/ro/app/animalearn/id6803595406'),
]
# The template paints its one real URL in this blue; app names get it too, so that
# "blue means you can click it" holds across the page.
LINK_BLUE = b'0.172549019 0.372549019 0.658823529'
COLOUR = ["Noah's Story", 'AnimaLearn']

PHONE = re.compile(r'\d{9,12}')
GLYPH = re.compile(
    rb'/(F\w+)\s+([\d.]+)\s+Tf'
    rb'|([\d.\-]+)\s+(-[\d.]+)\s+Td'
    rb'|([\d.\-]+)\s+0\s+Td'
    rb'|<([0-9A-Fa-f]+)>\s*Tj'
)


def read_runs(content, fonts, mats):
    """Every text block as (text, [(char, x, advance, op start, op end)], ...)."""
    runs = []
    for bm in re.finditer(rb'BT(.*?)ET', content, re.S):
        body, base = bm.group(1), bm.start(1)
        font, size, x, y, chars = None, None, None, None, []
        for tm in GLYPH.finditer(body):
            if tm.group(1):
                font, size = fonts.get(tm.group(1).decode(), {}), float(tm.group(2))
            elif tm.group(3) is not None:
                x, y = float(tm.group(3)), float(tm.group(4))
            elif tm.group(5) is not None:
                if chars:
                    c, cx, _, s0, e0 = chars[-1]
                    chars[-1] = (c, cx, float(tm.group(5)), s0, e0)
                    x = cx + float(tm.group(5))
            else:
                chars.append(((font or {}).get(int(tm.group(6), 16), '?'), x, 0.0,
                              base + tm.start(), base + tm.end()))
        if chars:
            runs.append((''.join(c[0] for c in chars), chars, y, size or 11,
                         mats[bm.start()], (bm.start(), bm.end())))
    return runs


def strip_phone(content, runs):
    """Delete the phone number's glyphs and re-centre the line it sat on."""
    edits, hits = [], 0
    for text, chars, y, size, mat, span in runs:
        m = PHONE.search(text)
        if not m:
            continue
        hits += 1
        a, b = m.start(), m.end() - 1
        while a > 0 and chars[a - 1][0].isspace():
            a -= 1
        assert a > 0, 'the phone number starts its line; nothing to re-centre against'
        removed = sum(c[2] for c in chars[a:b + 1])
        edits.append((chars[a][3], chars[b][4], b''))
        td = re.search(rb'([\d.\-]+)\s+(-[\d.]+)\s+Td', content[span[0]:span[1]])
        at = span[0] + td.start(1)
        new_x = round(float(td.group(1)) + removed / 2, 6)
        edits.append((at, at + len(td.group(1)), f'{new_x:.6f}'.encode()))
        print(f'  removed {text[a:b + 1]!r}, line re-centred by {removed / 2:.2f}')
    assert hits == 1, f'expected exactly one phone number, found {hits}'
    return edits


def colour_links(content, runs):
    """Repaint the app names in the template's link blue.

    Each of these names is drawn in its own text object, and every text object sets
    its own fill colour just before BT, so recolouring one leaves the rest alone.
    """
    flat = lambda t: re.sub(r'\s', ' ', t)
    edits = []
    for needle in COLOUR:
        for text, chars, y, size, mat, span in runs:
            if flat(needle) not in flat(text):
                continue
            head = content[max(0, span[0] - 240):span[0]]
            m = None
            for m in re.finditer(rb'([\d.]+ [\d.]+ [\d.]+) scn', head):
                pass
            assert m, f'no fill colour found before the block holding {needle!r}'
            at = max(0, span[0] - 240) + m.start(1)
            edits.append((at, at + len(m.group(1)), LINK_BLUE))
            print(f'  {needle!r} painted in link blue')
            break
        else:
            raise AssertionError(f'could not find a block to recolour for {needle!r}')
    return edits


def link_rects(runs):
    """A page rectangle for every target phrase."""
    flat = lambda t: re.sub(r'\s', ' ', t)
    out = []
    for needle, url in LINKS:
        for text, chars, y, size, mat, _ in runs:
            i = flat(text).find(flat(needle))
            if i < 0:
                continue
            run = chars[i:i + len(needle)]
            x1 = run[-1][1] + (run[-1][2] or size * 0.5)
            # the text matrix flips y, so the baseline sits at -y
            X0, Y = ctm.apply(mat, run[0][1], -y)
            X1, _ = ctm.apply(mat, x1, -y)
            fs = size * abs(mat[0])
            out.append((url, (X0 - 1, Y - 0.25 * fs, X1 + 1, Y + 0.85 * fs)))
            break
        else:
            raise AssertionError(f'could not place a link on {needle!r}')
    return out


def main(src, out_path):
    content, fonts = cmap.load(src)
    runs = read_runs(content, fonts, ctm.ctm_by_block(content))

    writer = PdfWriter(clone_from=src)
    page = writer.pages[0]
    assert page.get_contents().get_data() == content, 'content stream mismatch'

    edits = strip_phone(content, runs) + colour_links(content, runs)
    edited = content
    for s, e, rep in sorted(edits, reverse=True):
        edited = edited[:s] + rep + edited[e:]

    stream = DecodedStreamObject()
    stream.set_data(edited)
    page.replace_contents(stream)
    page.compress_content_streams()

    # rects must come from the edited stream: re-centring moved the header line
    edited_runs = read_runs(edited, fonts, ctm.ctm_by_block(edited))
    for url, rect in link_rects(edited_runs):
        writer.add_annotation(page_number=0,
                              annotation=Link(rect=rect, url=url, border=[0, 0, 0]))
        print(f'  link {tuple(round(v, 1) for v in rect)} -> {url}')

    writer.add_metadata({'/Title': 'Timotei Petre - CV', '/Author': 'Timotei Petre',
                         '/Subject': 'IT Support Engineer, Identity & Access Management'})
    with open(out_path, 'wb') as f:
        writer.write(f)
    print('written', out_path)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
