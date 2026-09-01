import re, zlib

def load(pdf_path):
    """Return (page content stream, {font resource name: {glyph code: char}})."""
    raw = open(pdf_path, 'rb').read()
    cmaps = {}
    for m in re.finditer(rb'(\d+) 0 obj\s*<<[^>]*?>>\s*stream\r?\n(.*?)endstream', raw, re.S):
        obj, body = int(m.group(1)), m.group(2)
        if b'begincmap' not in body:
            continue
        mapping = {}
        for sec in re.finditer(rb'beginbfchar(.*?)endbfchar', body, re.S):
            toks = re.findall(rb'<([0-9A-Fa-f]+)>', sec.group(1))
            for a, b in zip(toks[0::2], toks[1::2]):
                mapping[int(a, 16)] = chr(int(b[:4], 16))
        for sec in re.finditer(rb'beginbfrange(.*?)endbfrange', body, re.S):
            for e in re.finditer(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(?:\[(.*?)\]|<([0-9A-Fa-f]+)>)', sec.group(1), re.S):
                lo, hi = int(e.group(1), 16), int(e.group(2), 16)
                if e.group(3) is not None:
                    for i, v in enumerate(re.findall(rb'<([0-9A-Fa-f]+)>', e.group(3))):
                        mapping[lo + i] = chr(int(v[:4], 16))
                else:
                    dst = int(e.group(4)[:4], 16)
                    for i in range(hi - lo + 1):
                        mapping[lo + i] = chr(dst + i)
        cmaps[obj] = mapping

    fonts = {}
    for m in re.finditer(rb'/Font\s*<<(.*?)>>', raw, re.S):
        for f in re.finditer(rb'/(F\w+)\s+(\d+) 0 R', m.group(1)):
            fm = re.search(rb'\n%d 0 obj(.*?)endobj' % int(f.group(2)), raw, re.S)
            if not fm:
                continue
            tu = re.search(rb'/ToUnicode (\d+) 0 R', fm.group(1))
            if tu:
                fonts[f.group(1).decode()] = cmaps.get(int(tu.group(1)), {})
    content = zlib.decompress(re.search(rb'stream\r?\n(.*?)endstream', raw, re.S).group(1))
    return content, fonts
