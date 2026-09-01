"""Track the current transformation matrix through a PDF content stream.

Only what this file needs: q/Q/cm, and the position of every BT so a text block can
be mapped into page coordinates without guessing which cm applies to it.
"""
import re

NUM = r'[-+]?[\d.]+'
TOKEN = re.compile(
    (rf'(?P<cm>{NUM}\s+{NUM}\s+{NUM}\s+{NUM}\s+{NUM}\s+{NUM}\s+cm)'
     r'|(?P<q>\bq\b)|(?P<Q>\bQ\b)|(?P<bt>\bBT\b)').encode()
)


def mul(m, n):
    """m then n, both [a b c d e f]."""
    a, b, c, d, e, f = m
    A, B, C, D, E, F = n
    return [a * A + b * C, a * B + b * D,
            c * A + d * C, c * B + d * D,
            e * A + f * C + E, e * B + f * D + F]


def apply(m, x, y):
    a, b, c, d, e, f = m
    return (a * x + c * y + e, b * x + d * y + f)


def ctm_by_block(content):
    """{offset of each BT: CTM in effect there}."""
    ctm, stack, out = [1, 0, 0, 1, 0, 0], [], {}
    for t in TOKEN.finditer(content):
        if t.group('q'):
            stack.append(list(ctm))
        elif t.group('Q'):
            ctm = stack.pop() if stack else [1, 0, 0, 1, 0, 0]
        elif t.group('cm'):
            nums = [float(v) for v in t.group('cm').split()[:6]]
            ctm = mul(nums, ctm)
        elif t.group('bt'):
            out[t.start()] = list(ctm)
    return out
