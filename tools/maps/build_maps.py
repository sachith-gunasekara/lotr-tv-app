#!/usr/bin/env python3
"""
Builds the Vault's map assets (app/src/main/assets/maps/<id>/) from CC BY-SA SVGs:

  1. downloads each SVG (Wikimedia Commons; the Middle-earth map is k1tesurfen's mapome),
  2. re-inks it in the app's palette and re-letters it in Cormorant Garamond,
  3. renders it with headless Google Chrome,
  4. cuts a tile pyramid (512 px WebP tiles, level 0 = full size, each level half the last)
     plus meta.json and a small preview.webp.

Needs Python 3 with Pillow and Google Chrome. Run from the repo root:  python3 tools/maps/build_maps.py
"""
import colorsys, json, math, os, re, subprocess, sys, tempfile, urllib.parse, urllib.request
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FONTS = os.path.join(ROOT, "app/src/main/res/font")
OUT = os.path.join(ROOT, "app/src/main/assets/maps")
CHROME = os.environ.get("CHROME", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
TILE = 512

BG = (26, 20, 13)          # umber page
INK = (230, 214, 172)      # parchment
GOLD = (212, 175, 55)

# id -> (source URL, long side in px, recolour style)
MAPS = {
    "middle_earth": ("https://raw.githubusercontent.com/k1tesurfen/mapome/master/preview-mapome.svg", 6144, "mapome"),
    "the_shire": ("https://upload.wikimedia.org/wikipedia/commons/6/65/Sketch_Map_of_The_Shire.svg", 3072, "sketch"),
    "pelennor": ("https://upload.wikimedia.org/wikipedia/commons/6/69/Battle_of_the_Pelennor_Fields.svg", 3072, "sketch"),
    "beleriand": ("https://upload.wikimedia.org/wikipedia/commons/4/46/Sketch_Map_of_Beleriand.svg", 3072, "sketch"),
    "numenor": ("https://upload.wikimedia.org/wikipedia/commons/a/ae/N%C3%BAmenor_Sketch_Map.svg", 3072, "sketch"),
}


def rgb_css(c):
    return "rgb(%d,%d,%d)" % c


def recolour_mapome(s):
    """mapome is single-ink line art: ink -> parchment, region names (display font) -> gold."""
    s = s.replace("rgb(35,31,32)", rgb_css(INK))
    s = s.replace("<svg ", '<svg fill="%s" ' % rgb_css(INK), 1)
    s = re.sub(r"font-family:'Mirza-(Medium|Regular)', 'Mirza';(font-weight:500;)?", "font-family:'Cormorant';font-weight:600;", s)
    s = re.sub(r"font-family:'PlayfairDisplay-(Regular|Bold)', 'Playfair Display';(font-weight:700;)?", "font-family:'Cormorant';font-weight:600;", s)
    i, j = s.index('<g id="display-font"'), s.index('<g id="other-font"')
    return s[:i] + s[i:j].replace("fill:" + rgb_css(INK), "fill:" + rgb_css(GOLD)) + s[j:]


NAMED = {"black": (0, 0, 0), "white": (255, 255, 255), "blue": (0, 0, 255), "red": (255, 0, 0), "green": (0, 128, 0),
         "brown": (165, 42, 42), "grey": (128, 128, 128), "gray": (128, 128, 128), "navy": (0, 0, 128)}


def target(rgb, kind):
    """Maps a colour from the Wikipedia-style sketch maps into the palette, by hue."""
    h, l, sat = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
    h *= 360
    area = kind == "fill"  # big filled shapes take the dark tone, so labels on them stay readable
    if l > 0.93: return BG
    if l < 0.3 and sat < 0.35: return INK
    if sat < 0.2: return (200, 188, 160) if l > 0.5 else INK
    if 190 <= h <= 265: return (38, 62, 66) if area else (134, 169, 176)   # water -> river teal
    if 70 <= h < 190: return (52, 60, 34) if area else (157, 170, 106)     # forest, grass -> moss
    if l > 0.7: return (70, 54, 34)                                        # pale land -> lit umber
    if sat > 0.75 and (h < 15 or h > 340) and l > 0.45: return (217, 119, 74)  # armies -> ember
    return (201, 164, 92)                                                  # mountains, roads -> gold


def recolour_sketch(s):
    colour = r"(#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|rgb\([^)]*\)|black|white|blue|red|green|brown|grey|gray|navy)"
    prop = re.compile(r'(fill|stroke|stop-color)(\s*[:=]\s*"?\s*)' + colour)

    def parse(tok):
        if tok.startswith("#"):
            tok = tok.lstrip("#")
            tok = "".join(ch * 2 for ch in tok) if len(tok) == 3 else tok
            return tuple(int(tok[i:i + 2], 16) for i in (0, 2, 4))
        if tok.startswith("rgb"):
            return tuple(int(float(v)) for v in re.findall(r"[\d.]+", tok)[:3])
        return NAMED[tok.lower()]

    def chunk(text, in_text):
        return prop.sub(lambda m: m.group(1) + m.group(2) + "#%02x%02x%02x" % target(parse(m.group(3)), "text" if in_text else m.group(1)), text)

    parts = re.split(r"(<text\b.*?</text>)", s, flags=re.S)
    return "".join(chunk(p, p.startswith("<text")) for p in parts)


def render(svg, longside, png):
    vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', svg).group(1).replace(",", " ").split()]
    w, h = vb[2], vb[3]
    W, H = (longside, round(longside * h / w)) if w >= h else (round(longside * w / h), longside)
    svg = svg[svg.index("<svg"):]
    svg = re.sub(r'(<svg[^>]*?)\s(width|height)="[^"]*"', r"\1", svg, count=2)
    svg = svg.replace("<svg", '<svg width="%d" height="%d" preserveAspectRatio="xMidYMid meet"' % (W, H), 1)
    html = """<html><head><meta charset="utf-8"><style>
@font-face{font-family:'Cormorant';src:url('file://%s/cormorant_garamond.ttf');}
html,body{margin:0;background:%s;}
text,tspan{font-family:'Cormorant' !important;font-weight:600 !important;}
</style></head><body>%s</body></html>""" % (FONTS, rgb_css(BG), svg)
    page = png + ".html"
    open(page, "w", encoding="utf-8").write(html)
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
                    "--virtual-time-budget=5000", "--screenshot=" + png, "--window-size=%d,%d" % (W, H), "file://" + page],
                   check=True, stderr=subprocess.DEVNULL)


def tile(png, out):
    im = Image.open(png).convert("RGB")
    width, height = im.size
    os.makedirs(out, exist_ok=True)
    preview_w = 1600 if width > 4000 else 1280
    im.resize((preview_w, round(height * preview_w / width)), Image.LANCZOS).save(os.path.join(out, "preview.webp"), "WEBP", quality=80, method=6)
    level = 0
    while True:
        lw, lh = im.size
        os.makedirs(os.path.join(out, str(level)), exist_ok=True)
        for ty in range(math.ceil(lh / TILE)):
            for tx in range(math.ceil(lw / TILE)):
                im.crop((tx * TILE, ty * TILE, min((tx + 1) * TILE, lw), min((ty + 1) * TILE, lh))) \
                    .save(os.path.join(out, str(level), f"{tx}_{ty}.webp"), "WEBP", quality=82, method=6)
        if lw <= 1024 and lh <= 1024:
            break
        im = im.resize((max(1, lw // 2), max(1, lh // 2)), Image.LANCZOS)
        level += 1
    json.dump({"width": width, "height": height, "tileSize": TILE, "levels": level + 1}, open(os.path.join(out, "meta.json"), "w"))
    print(f"{os.path.basename(out)}: {width}x{height}, {level + 1} levels")


def main():
    only = set(sys.argv[1:])
    with tempfile.TemporaryDirectory() as tmp:
        for map_id, (url, longside, style) in MAPS.items():
            if only and map_id not in only:
                continue
            req = urllib.request.Request(url, headers={"User-Agent": "lotr-tv-app map build (personal project)"})
            svg = urllib.request.urlopen(req).read().decode("utf-8")
            svg = recolour_mapome(svg) if style == "mapome" else recolour_sketch(svg)
            png = os.path.join(tmp, map_id + ".png")
            render(svg, longside, png)
            out = os.path.join(OUT, map_id)
            subprocess.run(["rm", "-rf", out], check=True)
            tile(png, out)


if __name__ == "__main__":
    main()
