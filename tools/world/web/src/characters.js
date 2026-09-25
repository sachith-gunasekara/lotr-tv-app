// Who's who in 3D. Each character is a real 3D model when one is bundled (see models.js), and
// otherwise a figure built from primitives with the right colours, hair, beard, hat and weapons.
// Every character's userData.walk(dt) animates its walk; walk(0) lets it come to rest.
import * as THREE from 'three';
import { makeFigure, makePony, makeRider } from './figures.js';
import { modelFor } from './models.js';
import { makeFlash } from './effects.js';

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, flatShading: true, emissive: color, emissiveIntensity: 0.22, ...extra });

// Heights are in figure units: a Man is about 1, a hobbit about 0.6.
export const CHARACTERS = {
  frodo: { name: 'Frodo', cloak: 0x46553a, body: 0x6b4a2a, hair: 0x2a1a10, height: 0.6 },
  sam: { name: 'Sam', cloak: 0x5a4b36, body: 0x7a6040, hair: 0x8a6030, height: 0.62, pack: true },
  merry: { name: 'Merry', cloak: 0x42552f, body: 0x6f5a30, hair: 0x6a4020, height: 0.61 },
  pippin: { name: 'Pippin', cloak: 0x4a4f3a, body: 0x7a3a28, hair: 0x8a5a28, height: 0.6 },
  bilbo: { name: 'Bilbo', cloak: 0x3c5a2c, body: 0x9a2a1e, hair: 0x6a4a2a, height: 0.6, pack: true },
  gandalf: { name: 'Gandalf', cloak: 0x7c7c78, body: 0x66665f, hair: 0xd8d8d0, height: 1.08, hat: true, staff: true, beard: true },
  gandalf_white: { name: 'Gandalf the White', cloak: 0xf2f0ea, body: 0xe4e0d6, hair: 0xf4f4f0, height: 1.08, staff: true, beard: true, glow: 0xffffff },
  aragorn: { name: 'Aragorn', cloak: 0x2e3a2a, body: 0x3a2c22, hair: 0x2a1c14, height: 1.0, sword: true },
  legolas: { name: 'Legolas', cloak: 0x4f5e3a, body: 0x8a8a60, hair: 0xe8d9a0, height: 0.98, bow: true },
  gimli: { name: 'Gimli', cloak: 0x6a3320, body: 0x5a4a38, hair: 0x9a3a1a, height: 0.7, beard: true, stout: true, axe: true, helm: 0x8a8070 },
  boromir: { name: 'Boromir', cloak: 0x6a2a20, body: 0x4a3a30, hair: 0x6a4020, height: 1.02, sword: true, shield: 0x8a6a3a },
  gollum: { name: 'Gollum', gollum: true },
  theoden: { name: 'Théoden', cloak: 0x2f4a2a, body: 0x9a8040, hair: 0xd8d0c0, height: 1.0, sword: true, beard: true, crown: true },
  eomer: { name: 'Éomer', cloak: 0x2f4a2a, body: 0x7a7a70, hair: 0xa07a40, height: 1.0, sword: true, helm: 0xb0a890 },
  eowyn: { name: 'Éowyn', cloak: 0xe8e2d0, body: 0x8a8a80, hair: 0xe0c880, height: 0.95, sword: true, shield: 0x6a5a3a },
  thorin: { name: 'Thorin', cloak: 0x2a3550, body: 0x3a3a48, hair: 0x201818, height: 0.72, beard: true, stout: true, sword: true },
  balin: { name: 'Balin', cloak: 0x7a2a22, body: 0x5a3020, hair: 0xecece4, height: 0.7, beard: true, stout: true },
  dwalin: { name: 'Dwalin', cloak: 0x3a4a3a, body: 0x4a3a2a, hair: 0x4a3a30, height: 0.74, beard: true, stout: true, axe: true },
  bombur: { name: 'Bombur', cloak: 0x5a6a2a, body: 0x6a4a20, hair: 0xc06a2a, height: 0.68, beard: true, stout: true },
  kili: { name: 'Kíli', cloak: 0x4a3a50, body: 0x3a3030, hair: 0x2a2018, height: 0.72, beard: true, stout: true, bow: true },
  fili: { name: 'Fíli', cloak: 0x5a4a30, body: 0x4a3a28, hair: 0xd0a050, height: 0.72, beard: true, stout: true, sword: true },
  treebeard: { name: 'Treebeard', ent: true },
  nazgul: { name: 'Nazgûl', nazgul: true },
  witch_king: { name: 'Witch-king', nazgul: true, crown: true },
  uruk: { name: 'Uruk-hai', orc: true },
  ghost: { name: 'Dead', ghost: true },
  rohirrim: { name: 'Rider', rider: true },
};

/** A character by id, as a model if one's bundled, else as a built figure. */
export function makeCharacter(id) {
  const spec = CHARACTERS[id];
  const model = modelFor(id);
  let obj;
  if (spec.nazgul) obj = makeNazgul(spec.crown);
  else if (model) obj = model;
  else if (spec.gollum) obj = makeGollum();
  else if (spec.ent) obj = makeEnt();
  else if (spec.orc) obj = makeOrc();
  else if (spec.ghost) obj = makeGhost();
  else if (spec.rider) obj = makeRider(0x6a4a30);
  else obj = decorate(makeFigure(spec), spec);
  obj.userData.id = id;
  obj.userData.name = spec.name;
  return obj;
}

/** Adds what makeFigure doesn't know about: shields, helms, crowns, a white wizard's glow. */
function decorate(fig, spec) {
  const s = spec.height || 1;
  const headY = 0.42 * s + 0.36 * s + 0.11 * s;
  if (spec.shield) {
    const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * s, 0.16 * s, 0.03 * s, 12), mat(spec.shield, { metalness: 0.3 }));
    sh.rotation.z = Math.PI / 2;
    sh.position.set(-0.22 * s, 0.55 * s, 0.02 * s);
    fig.add(sh);
  }
  if (spec.helm) {
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.115 * s, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(spec.helm, { metalness: 0.5, roughness: 0.4 }));
    h.position.y = headY + 0.02 * s;
    fig.add(h);
  }
  if (spec.crown) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.1 * s, 0.1 * s, 0.05 * s, 10, 1, true), mat(0xd4af37, { metalness: 0.7, roughness: 0.3, side: THREE.DoubleSide }));
    c.position.y = headY + 0.09 * s;
    fig.add(c);
  }
  if (spec.glow) {
    const l = makeFlash(spec.glow, 0.6);
    l.userData.set(0.5);
    l.position.y = headY;
    fig.add(l);
  }
  return fig;
}

/** Gollum: thin, pale, crouched, with big eyes - scuttling rather than walking. */
function makeGollum() {
  const g = new THREE.Group();
  const skin = 0xb8b09a;
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.22, 4, 8), mat(skin));
  body.position.set(0, 0.26, 0.04);
  body.rotation.x = 0.9;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), mat(skin));
  head.position.set(0, 0.36, 0.18);
  g.add(head);
  [-0.035, 0.035].forEach((x) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), new THREE.MeshBasicMaterial({ color: 0xcfe0ff }));
    eye.position.set(x, 0.38, 0.25);
    g.add(eye);
  });
  const limbs = [[-0.07, 0.14, 0.12], [0.07, 0.14, 0.12], [-0.07, 0.12, -0.06], [0.07, 0.12, -0.06]].map(([x, y, z]) => {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.26, 5), mat(skin));
    l.position.set(x, y, z);
    g.add(l);
    return l;
  });
  let phase = 0;
  g.userData.walk = (dt) => {
    if (dt > 0) phase += dt * 11;
    limbs.forEach((l, i) => { l.rotation.x = dt > 0 ? Math.sin(phase + i * Math.PI / 2) * 0.7 : 0; });
    head.position.y = 0.36 + (dt > 0 ? Math.sin(phase * 2) * 0.015 : 0);
  };
  return g;
}

/** Treebeard: a tall, bark-brown shepherd of the trees with a leafy crown. */
function makeEnt() {
  const g = new THREE.Group();
  const bark = 0x5a4430;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 1.6, 7), mat(bark));
  trunk.position.y = 1.5;
  g.add(trunk);
  const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45, 0), mat(0x4a6a2a));
  crown.position.y = 2.5;
  g.add(crown);
  const legs = [-0.14, 0.14].map((x) => {
    const leg = new THREE.Group();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.8, 6), mat(bark));
    m.position.y = -0.4;
    leg.add(m);
    leg.position.set(x, 0.8, 0);
    g.add(leg);
    return leg;
  });
  [-1, 1].forEach((side) => {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 1, 5), mat(bark));
    arm.position.set(side * 0.34, 1.7, 0);
    arm.rotation.z = side * 0.5;
    g.add(arm);
  });
  const beard = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.5, 6), mat(0x6a7a4a));
  beard.rotation.x = Math.PI;
  beard.position.set(0, 1.95, 0.2);
  g.add(beard);
  let phase = 0;
  g.userData.walk = (dt) => {
    if (dt > 0) phase += dt * 2.5;
    legs[0].rotation.x = dt > 0 ? Math.sin(phase) * 0.35 : 0;
    legs[1].rotation.x = dt > 0 ? -Math.sin(phase) * 0.35 : 0;
  };
  return g;
}

/** A Ringwraith: tall, black-robed, hooded with nothing inside; the Witch-king wears a crown. */
export function makeNazgul(crown = false) {
  const model = modelFor(crown ? 'witch_king' : 'nazgul');
  if (model) {
    model.userData.blade = new THREE.Object3D(); // the model carries its own blade
    if (crown) {
      for (let i = 0; i < 7; i++) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.18, 4), mat(0x3a3a3a, { metalness: 0.8 }));
        const a = (i / 7) * Math.PI * 2;
        spike.position.set(Math.cos(a) * 0.12, 1.36, Math.sin(a) * 0.12);
        model.add(spike);
      }
    }
    return model;
  }
  const g = new THREE.Group();
  const robe = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.25, 9, 1, true), mat(0x0e0d0c, { side: THREE.DoubleSide, emissiveIntensity: 0.05 }));
  robe.position.y = 0.62;
  g.add(robe);
  const hood = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), mat(0x0e0d0c, { side: THREE.DoubleSide, emissiveIntensity: 0.05 }));
  hood.position.set(0, 1.28, -0.02);
  hood.rotation.x = -0.3;
  g.add(hood);
  const void_ = new THREE.Mesh(new THREE.CircleGeometry(0.1, 12), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  void_.position.set(0, 1.25, 0.1);
  g.add(void_);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.6, 0.02), mat(0xb8c8d8, { metalness: 0.8, roughness: 0.2, emissiveIntensity: 0.5 }));
  blade.position.set(0.25, 0.7, 0.15);
  blade.rotation.x = -0.4;
  g.add(blade);
  g.userData.blade = blade;
  if (crown) {
    for (let i = 0; i < 7; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.16, 4), mat(0x3a3a3a, { metalness: 0.8 }));
      const a = (i / 7) * Math.PI * 2;
      spike.position.set(Math.cos(a) * 0.12, 1.42, Math.sin(a) * 0.12);
      g.add(spike);
    }
  }
  let phase = Math.random() * 6;
  g.userData.walk = (dt) => {
    if (dt > 0) phase += dt * 3;
    robe.rotation.y = Math.sin(phase) * 0.08;
  };
  return g;
}

/** An Uruk-hai: broad, dark, with the White Hand on its shield. */
export function makeOrc() {
  const fig = makeFigure({ cloak: 0x2a2420, body: 0x1e1c1a, hair: 0x101010, height: 0.95, stout: true, sword: true });
  const sh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.45, 0.03), mat(0x1a1a1a));
  sh.position.set(-0.24, 0.55, 0.05);
  fig.add(sh);
  const hand = new THREE.Mesh(new THREE.CircleGeometry(0.07, 8), new THREE.MeshBasicMaterial({ color: 0xf0f0f0 }));
  hand.position.set(-0.24, 0.58, 0.07);
  fig.add(hand);
  return fig;
}

/** One of the Dead of Dunharrow: a pale green, see-through warrior. */
export function makeGhost() {
  const fig = makeFigure({ cloak: 0x7affb8, body: 0x5ae0a0, hair: 0x9affd0, height: 1, sword: true });
  fig.traverse((o) => {
    if (o.material) {
      o.material = o.material.clone();
      o.material.transparent = true;
      o.material.opacity = 0.45;
      o.material.emissive = new THREE.Color(0x40ff90);
      o.material.emissiveIntensity = 0.9;
      o.material.depthWrite = false;
    }
  });
  return fig;
}

export { makePony, makeRider };
