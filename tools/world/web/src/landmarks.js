// Small landmarks for the great places, built from primitives - miniatures on a tabletop world.
// Each is a Group standing on the ground at its origin; userData.height is how tall it is, and
// userData.update(dt, t) animates it (Mordor's glow, the Eye).
import * as THREE from 'three';

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, flatShading: true, ...extra });

function tower(r, h, color, roof) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.85, r, h, 8), mat(color));
  body.position.y = h / 2;
  g.add(body);
  if (roof) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r * 1.15, r * 2.2, 8), mat(roof));
    cone.position.y = h + r * 1.1;
    g.add(cone);
  }
  return g;
}

function house(w, color = 0xcfc2a0, roof = 0x7a3a22) {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, w * 0.7, w * 0.8), mat(color));
  b.position.y = w * 0.35;
  const r = new THREE.Mesh(new THREE.ConeGeometry(w * 0.75, w * 0.6, 4), mat(roof));
  r.position.y = w * 0.7 + w * 0.3;
  r.rotation.y = Math.PI / 4;
  g.add(b, r);
  return g;
}

function cluster(n, radius, make) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + i;
    const d = radius * (0.35 + 0.65 * ((i * 37) % 10) / 10);
    const m = make(i);
    m.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
    g.add(m);
  }
  return g;
}

function glow(color, intensity, distance) {
  const l = new THREE.PointLight(color, intensity, distance, 1.5);
  return l;
}

const BUILDERS = {
  minas_tirith() {
    // Seven white tiers against the mountain, and the tower of Ecthelion on top.
    const g = new THREE.Group();
    for (let i = 0; i < 7; i++) {
      const tier = new THREE.Mesh(new THREE.CylinderGeometry(2.6 - i * 0.3, 2.7 - i * 0.3, 0.45, 20), mat(0xeeeae0));
      tier.position.y = 0.22 + i * 0.45;
      g.add(tier);
    }
    const t = tower(0.22, 2.2, 0xffffff, 0xd8d0c0);
    t.position.y = 3.1;
    g.add(t);
    g.userData.height = 6;
    return g;
  },
  osgiliath() {
    const g = cluster(5, 1.8, (i) => tower(0.3, 0.6 + (i % 3) * 0.4, 0x9a968a));
    g.userData.height = 2;
    return g;
  },
  minas_morgul() {
    const g = tower(0.45, 3.4, 0x2a3a30, 0x1a2a20);
    const l = glow(0x7dffb0, 6, 18);
    l.position.y = 4;
    g.add(l);
    const t0 = Math.random() * 6;
    g.userData = { height: 4.6, update: (dt, t) => { l.intensity = 4 + Math.sin(t * 1.3 + t0) * 2; } };
    return g;
  },
  barad_dur() {
    // The Dark Tower, and the Eye burning at its summit.
    const g = new THREE.Group();
    const base = tower(1.1, 2, 0x1b1714);
    g.add(base);
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.8, 6, 6), mat(0x16120f));
    spire.position.y = 5;
    g.add(spire);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 10), new THREE.MeshBasicMaterial({ color: 0xff8a2a }));
    eye.scale.set(1.6, 0.8, 0.5);
    eye.position.y = 8.4;
    g.add(eye);
    const l = glow(0xff6a1a, 30, 60);
    l.position.y = 8.4;
    g.add(l);
    g.userData = { height: 9, update: (dt, t) => { l.intensity = 24 + Math.sin(t * 2.2) * 8; eye.rotation.y = Math.sin(t * 0.4) * 1.2; } };
    return g;
  },
  mount_doom() {
    const g = new THREE.Group();
    const crater = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.9, 0.4, 10), new THREE.MeshBasicMaterial({ color: 0xff5a14 }));
    crater.position.y = 0.2;
    g.add(crater);
    const l = glow(0xff4a10, 40, 70);
    l.position.y = 2;
    g.add(l);
    g.userData = { height: 1.5, update: (dt, t) => { l.intensity = 30 + Math.sin(t * 3.1) * 10 + Math.sin(t * 7.3) * 4; } };
    return g;
  },
  isengard() {
    // Orthanc in its ring of stone.
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.18, 6, 32), mat(0x3a3834));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.15;
    g.add(ring);
    const orthanc = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.6, 5, 6), mat(0x121212, { roughness: 0.3, metalness: 0.4 }));
    orthanc.position.y = 2.5;
    g.add(orthanc);
    for (let i = 0; i < 4; i++) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.9, 4), mat(0x121212));
      horn.position.set(Math.cos(i * Math.PI / 2) * 0.28, 5.4, Math.sin(i * Math.PI / 2) * 0.28);
      g.add(horn);
    }
    g.userData.height = 6;
    return g;
  },
  black_gate() {
    const g = new THREE.Group();
    const wall = new THREE.Mesh(new THREE.BoxGeometry(6, 1.6, 0.6), mat(0x1c1a18));
    wall.position.y = 0.8;
    g.add(wall);
    [-2.2, 2.2].forEach((x) => {
      const t = tower(0.55, 3, 0x1c1a18);
      t.position.x = x;
      g.add(t);
    });
    g.userData.height = 3.4;
    return g;
  },
  helms_deep() {
    const g = new THREE.Group();
    const wall = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.9, 0.4), mat(0x8a8474));
    wall.position.y = 0.45;
    g.add(wall);
    const keep = tower(0.6, 2, 0x8a8474, 0x5a5448);
    keep.position.set(1.4, 0, -0.8);
    g.add(keep);
    g.userData.height = 3.2;
    return g;
  },
  edoras() {
    // Meduseld, the golden hall, on its hill among the houses.
    const g = cluster(7, 1.8, () => house(0.45, 0xa08a60, 0x6a5020));
    const hall = house(1.1, 0xb8904a, 0xd4af37);
    hall.position.y = 0.5;
    g.add(hall);
    g.userData.height = 2.2;
    return g;
  },
  rivendell() {
    const g = cluster(4, 1.3, (i) => tower(0.22, 1 + i * 0.35, 0xe6dcc6, 0x9a7a4a));
    g.userData.height = 2.6;
    return g;
  },
  hobbiton() {
    // Round-doored smials under the Hill, and the Party Tree.
    const g = cluster(8, 2.2, () => {
      const s = new THREE.Group();
      const hill = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x5f7a38));
      const door = new THREE.Mesh(new THREE.CircleGeometry(0.14, 12), mat(0x2f6a2a));
      door.position.set(0, 0.16, 0.49);
      s.add(hill, door);
      return s;
    });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.8, 6), mat(0x5a3a1a));
    trunk.position.set(0.3, 0.4, 0.2);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 0), mat(0x3f6a2a));
    crown.position.set(0.3, 1.1, 0.2);
    g.add(trunk, crown);
    g.userData.height = 1.6;
    return g;
  },
  bree() {
    const g = cluster(7, 1.4, () => house(0.5));
    g.userData.height = 1.4;
    return g;
  },
  weathertop() {
    const g = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const stone = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.4 + (i % 3) * 0.2, 0.25), mat(0x8a8478));
      stone.position.set(Math.cos(i) * 0.9, 0.25, Math.sin(i) * 0.9);
      g.add(stone);
    }
    g.userData.height = 1;
    return g;
  },
  esgaroth() {
    const g = cluster(8, 1.4, () => {
      const h = house(0.4, 0x8a6a40, 0x5a3a20);
      h.position.y = 0.3;
      return h;
    });
    g.userData.height = 1.4;
    return g;
  },
  erebor() {
    const g = new THREE.Group();
    const gate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.4), mat(0x5a5048));
    gate.position.y = 0.8;
    g.add(gate);
    g.userData.height = 2;
    return g;
  },
  grey_havens() {
    const g = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.2, 6, 1, false, 0, Math.PI), mat(0xe8e2d4));
    hull.rotation.z = Math.PI / 2;
    hull.position.y = 0.3;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.8, 4), mat(0xe8e2d4));
    mast.position.y = 1.2;
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.1), mat(0xfaf6ec, { side: THREE.DoubleSide }));
    sail.position.set(0, 1.3, 0.05);
    sail.rotation.y = Math.PI / 2;
    g.add(hull, mast, sail);
    const t = tower(0.2, 1.8, 0xf0ece0, 0xc8c0b0);
    t.position.set(1.4, 0, -1);
    g.add(t);
    g.userData.height = 2.2;
    return g;
  },
  dol_guldur() {
    const g = tower(0.5, 2.2, 0x2a2622, 0x1a1614);
    g.userData.height = 3;
    return g;
  },
  lorien() {
    // A mallorn, silver-trunked and golden-leaved.
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.35, 3, 7), mat(0xd8d4c8));
    trunk.position.y = 1.5;
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 1), mat(0xd4af37, { roughness: 0.6 }));
    crown.position.y = 3.4;
    g.add(trunk, crown);
    g.userData.height = 4.6;
    return g;
  },
};

export function buildLandmark(id) {
  const b = BUILDERS[id];
  if (!b) return null;
  const g = b();
  g.userData.height ??= 2;
  return g;
}
