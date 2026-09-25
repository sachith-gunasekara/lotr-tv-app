#!/usr/bin/env python3
"""
Builds the 3D Middle-earth's data (app/src/main/assets/world/) from the Arda project
(https://github.com/bburns/Arda): its 10k digital elevation model and GIS vectors.

  height.png   heightmap, 16-bit packed into R (high byte) and G (low byte)
  terrain.jpg  the ground's colours: relief shading and height tints, forests, rivers,
               lakes, roads and snow - painted from the elevation and the vectors
  preview.jpg  a small copy of the terrain, for cards
  places.json  the Atlas places in terrain coordinates (0..1), and the crop's size in km

Needs Python 3 with Pillow and numpy. Run from the repo root: python3 tools/world/build_world.py
"""
import json, math, os, sqlite3, struct, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "app/src/main/assets/world")
CACHE = os.path.join(ROOT, "build/arda")
ARDA = "https://raw.githubusercontent.com/bburns/Arda/main/"

# The DEM's world file: 200.1 m per pixel, top-left corner at (-900 m, 2001100 m).
PX_M, X0, Y0 = 200.1, -900.0, 2001100.0
# The heartlands, in DEM pixels: the Blue Mountains to Mordor, the Grey Mountains to Pelargir.
CROP = (1300, 3300, 7000, 8000)
TEX_W = 4096
HEIGHT_W = 1024

# Atlas place id -> Arda feature position in metres: from Cities, Towns and Citadels, else the
# feature itself - Mount Doom is the crater polygon in the Vulcanism layer, Amon Hen the hill on
# Nen Hithoel's west shore (place-name labels sit beside their features, not on them).
PLACES = {
    "grey_havens": (367917, 1042100), "hobbiton": (518241, 1045233), "bree": (598318, 1045197),
    "weathertop": (673193, 1049127), "trollshaws": (805000, 1068000), "rivendell": (881105, 1054420),
    "high_pass": (981446, 1103117), "carrock": (1038060, 1087479), "elvenking": (1228092, 1152580),
    "esgaroth": (1272744, 1129148), "erebor": (1259345, 1184848), "moria": (847291, 920986),
    "lorien": (969296, 921786), "dol_guldur": (1071014, 929617), "fangorn": (889434, 832120),
    "isengard": (805979, 812497), "helms_deep": (805415, 748074), "edoras": (863747, 723402),
    "erech": (876213, 681290), "amon_hen": (1070500, 748500), "dead_marshes": (1138789, 759159),
    "black_gate": (1181537, 723163), "minas_tirith": (1120738, 618877), "osgiliath": (1138600, 629458),
    "minas_morgul": (1169735, 637427), "mount_doom": (1235057, 662888), "barad_dur": (1253267, 671171),
    "pelargir": (1076325, 529883),
}


def fetch(path):
    os.makedirs(CACHE, exist_ok=True)
    local = os.path.join(CACHE, os.path.basename(path))
    if not os.path.exists(local):
        urllib.request.urlretrieve(ARDA + path, local)
    return local


# --- GeoPackage geometry (standard GPKG header + WKB) -------------------------------------
def _wkb(buf, off=0):
    bo = "<" if buf[off] == 1 else ">"
    t = struct.unpack_from(bo + "I", buf, off + 1)[0]
    off += 5
    dims = 2
    if t > 1000: dims, t = (3 if t // 1000 in (1, 2) else 4), t % 1000

    def points(off):
        n = struct.unpack_from(bo + "I", buf, off)[0]; off += 4; pts = []
        for _ in range(n):
            pts.append(struct.unpack_from(bo + "dd", buf, off)); off += 8 * dims
        return pts, off

    if t == 1: return ("Point", struct.unpack_from(bo + "dd", buf, off)), off + 8 * dims
    if t == 2: p, off = points(off); return ("Line", p), off
    if t == 3:
        n = struct.unpack_from(bo + "I", buf, off)[0]; off += 4; rings = []
        for _ in range(n): r, off = points(off); rings.append(r)
        return ("Polygon", rings), off
    n = struct.unpack_from(bo + "I", buf, off)[0]; off += 4; parts = []
    for _ in range(n): g, off = _wkb(buf, off); parts.append(g)
    return ("Multi", parts), off


def geometries(db, table):
    for (blob,) in db.execute(f'select geom from "{table}"'):
        if blob:
            env = (blob[3] >> 1) & 7
            yield _wkb(blob, 8 + {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[env])[0]


def flatten(g, kind):
    if g[0] == "Multi":
        for part in g[1]: yield from flatten(part, kind)
    elif g[0] == kind:
        yield g[1]


def smooth(a, passes=1):
    """A few passes of a 3x3 box blur - enough to take the JPEG steps out of the heights."""
    for _ in range(passes):
        p = np.pad(a, 1, mode="edge")
        a = sum(p[dy:dy + a.shape[0], dx:dx + a.shape[1]] for dy in range(3) for dx in range(3)) / 9
    return a


def main():
    dem = np.asarray(Image.open(fetch("data/rasters/10k/dem.jpg")), dtype=np.float32)
    db = sqlite3.connect(fetch("data/vectors/vectors.gpkg"))
    cx0, cy0, cx1, cy1 = CROP
    crop = dem[cy0:cy1, cx0:cx1]
    cw, ch = cx1 - cx0, cy1 - cy0
    tex_h = round(TEX_W * ch / cw)
    scale = TEX_W / cw

    def to_tex(p):
        return ((p[0] - X0) / PX_M - cx0) * scale, ((Y0 - p[1]) / PX_M - cy0) * scale

    # Heights at texture size, gently smoothed (the DEM is an 8-bit JPEG).
    h = smooth(np.asarray(Image.fromarray(crop).resize((TEX_W, tex_h), Image.BICUBIC), dtype=np.float32), 2)
    sea = np.asarray(Image.fromarray((crop <= 0.5).astype(np.uint8) * 255).resize((TEX_W, tex_h), Image.BILINEAR)
                     .filter(ImageFilter.GaussianBlur(2)), dtype=np.float32) / 255

    # Relief shading, lit from the north-west like a painted map.
    gy, gx = np.gradient(h * 1.6)
    nx, ny, nz = -gx, -gy, np.ones_like(h)
    norm = np.sqrt(nx ** 2 + ny ** 2 + nz ** 2)
    lx, ly, lz = -0.55, -0.55, 0.63
    shade = np.clip((nx * lx + ny * ly + nz * lz) / norm, 0, 1)

    # Height tints: lowland greens, uplands ochre and brown, grey rock, then snow.
    stops = [(0, (74, 102, 52)), (14, (86, 112, 56)), (30, (112, 122, 66)), (50, (134, 120, 78)),
             (80, (118, 98, 72)), (120, (116, 108, 100)), (170, (170, 166, 160)), (215, (240, 238, 232)), (255, (252, 250, 246))]
    hv = np.clip(h, 0, 255)
    col = np.zeros(h.shape + (3,), np.float32)
    for (a, ca), (b, cb) in zip(stops, stops[1:]):
        m = (hv >= a) & (hv <= b)
        t = ((hv - a) / (b - a))[m][:, None]
        col[m] = np.array(ca) * (1 - t) + np.array(cb) * t

    def mask(draw_fn, blur=0.0):
        img = Image.new("L", (TEX_W, tex_h), 0)
        draw_fn(ImageDraw.Draw(img))
        if blur: img = img.filter(ImageFilter.GaussianBlur(blur))
        return np.asarray(img, dtype=np.float32) / 255

    def polys(table):
        def draw(d):
            for g in geometries(db, table):
                for rings in flatten(g, "Polygon"):
                    if len(rings[0]) > 2: d.polygon([to_tex(p) for p in rings[0]], fill=255)
        return draw

    def lines(table, width):
        def draw(d):
            for g in geometries(db, table):
                for pts in flatten(g, "Line"):
                    if len(pts) > 1: d.line([to_tex(p) for p in pts], fill=255, width=width, joint="curve")
        return draw

    rng = np.random.default_rng(7)
    grain = np.asarray(Image.fromarray((rng.random((tex_h // 4, TEX_W // 4)) * 255).astype(np.uint8))
                       .resize((TEX_W, tex_h), Image.BICUBIC), dtype=np.float32) / 255

    forest = mask(polys("forests"), 1.5) * np.clip(1.25 - hv / 120, 0, 1)
    col = col * (1 - forest[..., None] * 0.75) + np.array([46, 62, 34]) * (forest * (0.55 + 0.45 * grain))[..., None] * 0.75
    wet = mask(polys("Wetlands"), 2)
    col = col * (1 - wet[..., None] * 0.5) + np.array([78, 88, 62]) * wet[..., None] * 0.5

    lit = col * (0.42 + 0.78 * shade[..., None])

    water = np.clip(sea + mask(polys("lakes"), 1) + mask(lines("Rivers", 3), 0.8) * 0.9, 0, 1)
    deep = np.array([28, 52, 58]) * (1 - sea[..., None]) + np.array([20, 40, 48]) * sea[..., None]
    lit = lit * (1 - water[..., None]) + (deep + 22 * shade[..., None]) * water[..., None]

    road = mask(lines("Roads", 2), 0.6) * (1 - water)
    lit = lit * (1 - road[..., None] * 0.55) + np.array([196, 164, 104]) * road[..., None] * 0.55

    # A warm, late-afternoon grade to sit with the app's umber and gold.
    lit = lit * np.array([1.04, 1.0, 0.9])
    terrain = Image.fromarray(np.clip(lit, 0, 255).astype(np.uint8))
    os.makedirs(OUT, exist_ok=True)
    terrain.save(os.path.join(OUT, "terrain.jpg"), quality=86, optimize=True, progressive=True)
    terrain.resize((1280, round(1280 * tex_h / TEX_W)), Image.LANCZOS).save(os.path.join(OUT, "preview.jpg"), quality=84)

    # Heightmap for the mesh: 16 bits across R and G, sea pressed below zero-ish.
    hh = round(HEIGHT_W * ch / cw)
    # Smoothed a little more than the texture: the 8-bit DEM has steps that would stand up as cliffs.
    small = smooth(np.asarray(Image.fromarray(crop).resize((HEIGHT_W, hh), Image.BICUBIC), dtype=np.float32), 3)
    v = np.clip(small / 255 * 65535, 0, 65535).astype(np.uint16)
    rgb = np.stack([(v >> 8).astype(np.uint8), (v & 255).astype(np.uint8), np.zeros_like(v, np.uint8)], -1)
    Image.fromarray(rgb, "RGB").save(os.path.join(OUT, "height.png"), optimize=True)

    places = {pid: [round(to_tex(p)[0] / TEX_W, 5), round(to_tex(p)[1] / tex_h, 5)] for pid, p in PLACES.items()}
    json.dump({"widthKm": round(cw * PX_M / 1000, 1), "heightKm": round(ch * PX_M / 1000, 1), "places": places},
              open(os.path.join(OUT, "places.json"), "w"), indent=1)
    print(f"terrain {TEX_W}x{tex_h}, height {HEIGHT_W}x{hh}, {len(places)} places")


if __name__ == "__main__":
    main()
