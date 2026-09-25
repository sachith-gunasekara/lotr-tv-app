// Low-poly travellers, built from primitives so no model files (or licences) are needed.
// Each figure's userData.walk(dt) swings its legs and arms; walk(0) lets them come to rest.
import * as THREE from 'three';

// A little self-light, so the figures stay readable on their shaded side.
const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: true, emissive: color, emissiveIntensity: 0.22, ...extra });
const SKIN = 0xd9b08c;

function limb(w, h, color) {
  // Pivot at the top, so rotating swings it from the hip or shoulder.
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), mat(color));
  m.position.y = -h / 2;
  g.add(m);
  return g;
}

/**
 * A person: legs, body, cloak, head and hair, with optional pack, beard, wizard's hat, staff,
 * sword, bow or axe. [height] is roughly their height in the world (hobbits ~0.6, men ~1).
 */
export function makeFigure({ cloak = 0x445533, body = 0x6b4a2a, hair = 0x3a2616, height = 1, pack, beard, hat, staff, sword, bow, axe, stout } = {}) {
  const fig = new THREE.Group();
  const s = height;
  const wide = stout ? 1.35 : 1;
  const legH = 0.42 * s, torsoH = 0.36 * s;

  const legL = limb(0.1 * s * wide, legH, 0x3a2c20), legR = limb(0.1 * s * wide, legH, 0x3a2c20);
  legL.position.set(-0.07 * s * wide, legH, 0);
  legR.position.set(0.07 * s * wide, legH, 0);
  fig.add(legL, legR);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s * wide, 0.15 * s * wide, torsoH, 7), mat(body));
  torso.position.y = legH + torsoH / 2;
  fig.add(torso);

  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.24 * s * wide, legH + torsoH * 0.95, 8, 1, true), mat(cloak, { side: THREE.DoubleSide }));
  cape.position.set(0, (legH + torsoH) / 2 + 0.06 * s, -0.03 * s);
  fig.add(cape);

  const armL = limb(0.07 * s, 0.34 * s, cloak), armR = limb(0.07 * s, 0.34 * s, cloak);
  armL.position.set(-0.17 * s * wide, legH + torsoH * 0.95, 0);
  armR.position.set(0.17 * s * wide, legH + torsoH * 0.95, 0);
  fig.add(armL, armR);

  const headY = legH + torsoH + 0.11 * s;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.1 * s, 10, 8), mat(SKIN));
  head.position.y = headY;
  fig.add(head);
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.105 * s, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(hair));
  hairCap.position.y = headY + 0.01 * s;
  hairCap.rotation.x = -0.25;
  fig.add(hairCap);

  if (beard) {
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.08 * s, 0.22 * s, 7), mat(hair));
    b.rotation.x = Math.PI;
    b.position.set(0, headY - 0.12 * s, 0.06 * s);
    fig.add(b);
  }
  if (hat) {
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.2 * s, 0.02 * s, 12), mat(cloak));
    brim.position.y = headY + 0.07 * s;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.1 * s, 0.34 * s, 10), mat(cloak));
    cone.position.y = headY + 0.24 * s;
    cone.rotation.z = 0.2;
    fig.add(brim, cone);
  }
  if (pack) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.22 * s, 0.26 * s, 0.14 * s), mat(0x5a4028));
    p.position.set(0, legH + torsoH * 0.7, -0.17 * s);
    fig.add(p);
  }
  if (staff) {
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.018 * s, 0.018 * s, 1.1 * s, 5), mat(0x6a4a2a));
    st.position.set(0.1 * s, -0.3 * s, 0.05 * s);
    armR.add(st);
  }
  if (sword) {
    const sw = new THREE.Mesh(new THREE.BoxGeometry(0.03 * s, 0.5 * s, 0.03 * s), mat(0xc8c8c8, { metalness: 0.6, roughness: 0.3 }));
    sw.position.set(-0.2 * s, legH + 0.05 * s, 0.02 * s);
    sw.rotation.z = 0.25;
    fig.add(sw);
  }
  if (bow) {
    const bw = new THREE.Mesh(new THREE.TorusGeometry(0.28 * s, 0.012 * s, 4, 12, Math.PI), mat(0x8a6a3a));
    bw.position.set(0, legH + torsoH * 0.7, -0.16 * s);
    bw.rotation.set(0, Math.PI / 2, Math.PI / 2);
    fig.add(bw);
  }
  if (axe) {
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02 * s, 0.02 * s, 0.5 * s, 5), mat(0x5a3a1a));
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.16 * s, 0.12 * s, 0.02 * s), mat(0xb0b0b0, { metalness: 0.6, roughness: 0.3 }));
    blade.position.set(0.07 * s, 0.2 * s, 0);
    handle.add(blade);
    handle.position.set(0.02 * s, -0.25 * s, 0.05 * s);
    armR.add(handle);
  }

  let phase = Math.random() * 6;
  fig.userData.walk = (dt) => {
    if (dt > 0) phase += dt * 7;
    const swing = dt > 0 ? Math.sin(phase) * 0.6 : 0;
    legL.rotation.x += (swing - legL.rotation.x) * 0.3;
    legR.rotation.x += (-swing - legR.rotation.x) * 0.3;
    armL.rotation.x += (-swing * 0.7 - armL.rotation.x) * 0.3;
    armR.rotation.x += (swing * 0.7 - armR.rotation.x) * 0.3;
    torso.position.y = legH + torsoH / 2 + (dt > 0 ? Math.abs(Math.cos(phase)) * 0.02 * s : 0);
  };
  return fig;
}

/** A pony (or, bigger, a horse), trotting with the same walk(dt). */
export function makePony(color = 0x6a4a30, size = 0.8) {
  const g = new THREE.Group();
  const s = size;
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.34 * s, 0.34 * s, 0.8 * s), mat(color));
  body.position.y = 0.62 * s;
  g.add(body);
  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.16 * s, 0.4 * s, 0.18 * s), mat(color));
  neck.position.set(0, 0.88 * s, 0.4 * s);
  neck.rotation.x = 0.5;
  g.add(neck);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.15 * s, 0.16 * s, 0.34 * s), mat(color));
  head.position.set(0, 1.04 * s, 0.56 * s);
  g.add(head);
  const mane = new THREE.Mesh(new THREE.BoxGeometry(0.05 * s, 0.34 * s, 0.14 * s), mat(0x2a1a10));
  mane.position.set(0, 0.95 * s, 0.34 * s);
  mane.rotation.x = 0.5;
  g.add(mane);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.06 * s, 0.4 * s, 5), mat(0x2a1a10));
  tail.position.set(0, 0.56 * s, -0.48 * s);
  tail.rotation.x = -0.5;
  g.add(tail);
  const legs = [[-0.11, 0.3], [0.11, 0.3], [-0.11, -0.3], [0.11, -0.3]].map(([x, z]) => {
    const l = limb(0.08 * s, 0.46 * s, color);
    l.position.set(x * s, 0.46 * s, z * s);
    g.add(l);
    return l;
  });
  let phase = Math.random() * 6;
  g.userData.walk = (dt) => {
    if (dt > 0) phase += dt * 8;
    legs.forEach((l, i) => {
      const target = dt > 0 ? Math.sin(phase + (i % 3 === 0 ? 0 : Math.PI)) * 0.5 : 0;
      l.rotation.x += (target - l.rotation.x) * 0.3;
    });
  };
  return g;
}

/** A horse with a rider of Rohan: green cloak, helm and spear. */
export function makeRider(color = 0x7a5a3a) {
  const g = new THREE.Group();
  const horse = makePony(color, 1.2);
  g.add(horse);
  const rider = makeFigure({ cloak: 0x2f4a2a, body: 0x6a6a60, height: 0.9, hair: 0x9a9a90 });
  rider.position.set(0, 0.62, 0);
  rider.scale.setScalar(0.95);
  g.add(rider);
  const spear = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.6, 5), mat(0x6a4a2a));
  spear.position.set(0.25, 1.4, 0.1);
  spear.rotation.x = 0.35;
  g.add(spear);
  g.userData.walk = horse.userData.walk;
  return g;
}

/** Gandalf's cart: a pony, a wooden cart with turning wheels, and the grey wizard at the reins. */
export function makeCart() {
  const g = new THREE.Group();
  const pony = makePony(0x8a8a82, 0.85);
  pony.position.z = 0.9;
  g.add(pony);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, 0.9), mat(0x7a5530));
  bed.position.y = 0.5;
  g.add(bed);
  const load = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.5), mat(0xa08050));
  load.position.set(0, 0.72, -0.15);
  g.add(load);
  const wheels = [-0.4, 0.4].map((x) => {
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.04, 5, 12), mat(0x4a3420));
    w.rotation.y = Math.PI / 2;
    w.position.set(x, 0.26, 0);
    g.add(w);
    return w;
  });
  const wizard = makeFigure({ cloak: 0x8b8b88, body: 0x6f6f6c, height: 0.9, hat: true, beard: true, hair: 0xd8d8d0 });
  wizard.position.set(0, 0.45, 0.2);
  g.add(wizard);
  g.userData.walk = (dt) => {
    pony.userData.walk(dt);
    wheels.forEach((w) => { w.rotation.x -= dt * 3; });
  };
  return g;
}
