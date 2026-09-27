// Built people: a jointed body (hips, knees, shoulders, elbows, neck) dressed from a spec in
// cast.js, and posed every frame from a small library of actions - walk, talk, point, strike,
// shoot, kneel, cheer, and so on. No model files: every body is primitives, merged per joint into
// one vertex-coloured mesh, so a whole person is about a dozen draw calls.
//
// A rig's userData:
//   walk(dt)        walking this frame (dt > 0), or coming to rest (0) - the old figures' API
//   act(name)       what it's doing when not walking ('idle', 'talk', 'strike', ... see ACTIONS);
//                   calling it again with the same name carries on rather than restarting
//   pose            extra offsets added to every pose (a stoop, a crouch)
// updateRigs(dt) runs every live rig; call it once per frame after the scenes have moved them.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// --- Bodies -------------------------------------------------------------------------------------

// Proportions, as fractions of height: heads tall, leg length (hip joint to sole), shoulder width,
// girth (torso thickness), arm length, foot length. Hobbits and dwarves have bigger heads and
// shorter legs than Men; dwarves are nearly as broad as they are tall.
export const BODIES = {
  man: { heads: 7.4, legs: 0.48, shoulders: 0.25, girth: 1, arms: 0.37, foot: 0.14 },
  elf: { heads: 7.9, legs: 0.5, shoulders: 0.23, girth: 0.86, arms: 0.37, foot: 0.13 },
  woman: { heads: 7.4, legs: 0.49, shoulders: 0.21, girth: 0.82, arms: 0.36, foot: 0.12 },
  hobbit: { heads: 5, legs: 0.41, shoulders: 0.27, girth: 1.2, arms: 0.37, foot: 0.22 },
  dwarf: { heads: 4.5, legs: 0.34, shoulders: 0.4, girth: 1.65, arms: 0.38, foot: 0.17 },
  uruk: { heads: 7, legs: 0.46, shoulders: 0.32, girth: 1.3, arms: 0.41, foot: 0.15 },
  goblin: { heads: 5.2, legs: 0.38, shoulders: 0.26, girth: 0.95, arms: 0.45, foot: 0.17 },
  gollum: { heads: 4.2, legs: 0.44, shoulders: 0.19, girth: 0.58, arms: 0.47, foot: 0.2 },
  ent: { heads: 6, legs: 0.44, shoulders: 0.3, girth: 1.15, arms: 0.46, foot: 0.16 },
};

function measure(spec) {
  const b = { ...BODIES[spec.body || 'man'], ...spec.shape };
  const H = spec.height || 1;
  const head = H / b.heads;
  const legs = H * b.legs;
  const neck = head * 0.22;
  const torso = H - legs - head - neck;       // hip joint to the base of the neck
  const arm = H * b.arms;
  return {
    H, head, headR: head * 0.46, legs, thigh: legs * 0.5, shin: legs * 0.5, neck, torso,
    upper: arm * 0.47, fore: arm * 0.53, sh: H * b.shoulders / 2, hip: H * b.shoulders * 0.2 * (b.girth > 1.3 ? 1.3 : 1),
    waist: H * 0.075 * b.girth, chest: H * b.shoulders * 0.36 * Math.min(1.3, b.girth ** 0.5), limb: H * 0.034 * Math.max(0.8, b.girth ** 0.5),
    foot: H * b.foot, girth: b.girth,
  };
}

// --- Geometry: parts are baked per joint into one vertex-coloured geometry --------------------

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();

class Tailor {
  constructor() { this.parts = {}; }
  /** Adds geo to joint, moved to p, turned by r (Euler xyz), scaled by s, painted color. */
  add(joint, geo, color, p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1]) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    for (const name of Object.keys(g.attributes)) if (name !== 'position') g.deleteAttribute(name);
    g.clearGroups();
    _m.compose(_p.set(...p), _q.setFromEuler(_e.set(...r)), _s.set(...s));
    g.applyMatrix4(_m);
    const c = new THREE.Color(color);
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    (this.parts[joint] ||= []).push(g);
    return this;
  }
  done() {
    const out = {};
    for (const [joint, list] of Object.entries(this.parts)) {
      const g = mergeGeometries(list);
      g.computeVertexNormals();
      g.computeBoundingSphere();
      g.userData.shared = true;   // held by the template cache: never dispose
      out[joint] = g;
    }
    return out;
  }
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, n = 7) => new THREE.CylinderGeometry(rt, rb, h, n);
const cone = (r, h, n = 7) => new THREE.ConeGeometry(r, h, n);
const ball = (r, w = 8, h = 6) => new THREE.SphereGeometry(r, w, h);
const cap = (r, arc = 0.5, w = 9) => new THREE.SphereGeometry(r, w, 5, 0, Math.PI * 2, 0, Math.PI * arc);
const skirtGeo = (rTop, rBottom, h, n = 9) => new THREE.CylinderGeometry(rTop, rBottom, h, n, 1, true);

// --- Dressing a body ------------------------------------------------------------------------------

const SKIN = 0xe2b58e;

function tailor(spec, d) {
  const t = new Tailor();
  const skin = spec.skin ?? SKIN;
  const top = spec.top ?? 0x7a6a50;
  const sleeves = spec.sleeves ?? top;
  const legsC = spec.legs ?? 0x4a3a2a;
  const { H, head, headR, torso, sh, waist, chest, limb } = d;
  const hair = spec.hair || {};
  const beard = spec.beard;
  d.shieldColor = spec.shield;
  d.banner = spec.banner;

  // Torso (joint 'torso', pivot at the hips): belly, chest tapering to the shoulders, neck.
  t.add('torso', cyl(chest, waist * 1.05, torso * 0.62, 8), top, [0, torso * 0.62, 0], [0, 0, 0], [1, 1, 0.72]);
  t.add('torso', cyl(waist * 1.08, waist * 1.12, torso * 0.4, 8), spec.belly ?? top, [0, torso * 0.2, 0], [0, 0, 0], [1, 1, 0.8]);
  t.add('torso', box(sh * 2 * 0.92, torso * 0.12, chest * 1.4), top, [0, torso * 0.92, 0]);
  t.add('torso', cyl(limb * 1.1, limb * 1.3, d.neck * 1.6, 6), spec.void ? 0x050505 : skin, [0, torso + d.neck * 0.5, 0]);
  if (spec.belt) t.add('torso', cyl(waist * 1.15, waist * 1.15, torso * 0.07, 8), spec.belt, [0, torso * 0.1, 0], [0, 0, 0], [1, 1, 0.84]);
  if (spec.vest) {
    // A waistcoat: a shell over the chest and belly, open at the throat, with brass buttons.
    t.add('torso', cyl(chest * 1.04, waist * 1.16, torso * 0.8, 8), spec.vest, [0, torso * 0.45, 0.004], [0, 0, 0], [1.02, 1, 0.78]);
    t.add('torso', box(chest * 0.5, torso * 0.3, 0.01), spec.top ?? 0xe8e0cc, [0, torso * 0.78, chest * 0.73]);
    for (let i = 0; i < 3; i++) t.add('torso', ball(H * 0.007, 4, 3), spec.buttons ?? 0xc8a040, [0, torso * (0.55 - i * 0.14), waist * 0.9]);
  }
  if (spec.mail) t.add('torso', cyl(chest * 1.05, waist * 1.2, torso * 0.75, 8), spec.mail, [0, torso * 0.42, 0], [0, 0, 0], [1.03, 1, 0.8]);
  if (spec.plate) {
    t.add('torso', cyl(chest * 1.08, waist * 1.1, torso * 0.55, 8), spec.plate, [0, torso * 0.68, 0.01], [0, 0, 0], [1.04, 1, 0.82]);
    t.add('upperL', cap(limb * 2.1), spec.plate, [0, 0, 0]);
    t.add('upperR', cap(limb * 2.1), spec.plate, [0, 0, 0]);
  }
  if (spec.emblem) t.add('torso', box(chest * 0.55, chest * 0.55, 0.01), spec.emblem, [0, torso * 0.68, chest * 0.78]);
  if (spec.scarf) t.add('torso', cyl(limb * 2.2, limb * 2.5, head * 0.28, 7), spec.scarf, [0, torso * 0.98, 0]);
  if (spec.brooch) t.add('torso', box(H * 0.022, H * 0.03, 0.01), spec.brooch, [sh * 0.35, torso * 0.9, chest * 0.75]);
  if (spec.whiteHand) t.add('torso', box(chest * 0.35, chest * 0.4, 0.01), 0xf0f0f0, [0, torso * 0.68, chest * 0.8]);

  // A coat or robe hangs from the waist over the legs (joint 'skirt').
  const coat = spec.coat;
  if (coat) {
    const len = { hip: 0.2, thigh: 0.45, knee: 0.72, calf: 0.85, ankle: 0.97 }[coat.len || 'knee'] * d.legs;
    t.add('skirt', skirtGeo(waist * 1.12, waist * 1.12 + len * (coat.flare ?? 0.45), len, 10), coat.color, [0, -len / 2, 0], [0, 0, 0], [1, 1, 0.85]);
    // The coat's body too, over the shirt.
    if (!coat.skirtOnly) t.add('torso', cyl(chest * 1.06, waist * 1.14, torso * 0.9, 8), coat.color, [0, torso * 0.46, -0.003], [0, 0, 0], [1.03, 1, 0.8]);
  }

  // Head (joint 'head', pivot at the top of the neck).
  const hy = headR * 1.05;
  if (spec.void) {
    // A Ringwraith: nothing under the hood but darkness.
    t.add('head', ball(headR, 8, 6), 0x030303, [0, hy, 0]);
  } else {
    t.add('head', ball(headR, 9, 7), skin, [0, hy, 0], [0, 0, 0], [0.92, 1.08, 0.98]);
    t.add('head', box(headR * 0.2, headR * 0.35, headR * 0.3), skin, [0, hy - headR * 0.08, headR * 0.93]);   // nose
    const eyes = spec.eyes ?? 0x241a14;
    const eyeR = spec.bigEyes ? headR * 0.26 : headR * 0.09;
    for (const x of [-1, 1]) {
      t.add('head', ball(eyeR, 5, 4), eyes, [x * headR * 0.36, hy + headR * 0.12, headR * (spec.bigEyes ? 0.78 : 0.88)]);
      if (spec.ears) {
        const tall = spec.ears === 'elf' ? 1.5 : spec.ears === 'big' ? 1.6 : 1.1;
        t.add('head', cone(headR * 0.2, headR * 0.55 * tall, 4), skin, [x * headR * 0.95, hy + headR * 0.2, -headR * 0.05], [0, 0, -x * (spec.ears === 'big' ? 1.2 : 0.55)]);
      }
    }
    if (spec.warpaint) t.add('head', box(headR * 0.9, headR * 0.5, 0.01), spec.warpaint, [0, hy + headR * 0.1, headR * 0.92]);
  }
  dressHair(t, hair, d, hy, spec);
  if (beard) dressBeard(t, beard, d, hy);
  if (spec.hat) dressHat(t, spec.hat, d, hy);

  // Arms: upper arm (joint 'upperL/R' at the shoulder), forearm (joint 'foreL/R' at the elbow).
  for (const [side, x] of [['L', -1], ['R', 1]]) {
    t.add('upper' + side, cyl(limb * 1.1, limb, d.upper, 6), sleeves, [0, -d.upper / 2, 0]);
    t.add('upper' + side, ball(limb * 1.25, 6, 4), sleeves, [0, 0, 0]);
    t.add('fore' + side, cyl(limb, limb * 0.85, d.fore * 0.8, 6), spec.cuffs ?? sleeves, [0, -d.fore * 0.4, 0]);
    t.add('fore' + side, box(limb * 1.7, d.fore * 0.24, limb * 1.2), spec.gloves ?? skin, [0, -d.fore * 0.88, 0]);
    if (spec.bracers) t.add('fore' + side, cyl(limb * 1.2, limb * 1.1, d.fore * 0.4, 6), spec.bracers, [0, -d.fore * 0.5, 0]);
    void x;
  }

  // Legs: thigh (joint 'thighL/R' at the hip), shin and foot (joint 'shinL/R' at the knee).
  for (const side of ['L', 'R']) {
    t.add('thigh' + side, cyl(limb * 1.45, limb * 1.15, d.thigh, 6), legsC, [0, -d.thigh / 2, 0]);
    const feet = spec.feet || 'boots';
    const bootC = spec.boots ?? 0x2e2218;
    t.add('shin' + side, cyl(limb * 1.15, limb * 0.95, d.shin * 0.9, 6), feet === 'boots' ? bootC : legsC, [0, -d.shin * 0.45, 0]);
    if (feet === 'bare') {
      // Hobbit feet: big, bare, with a tuft of curly hair on top.
      t.add('shin' + side, box(d.foot * 0.5, d.shin * 0.12, d.foot), skin, [0, -d.shin * 0.94, d.foot * 0.3]);
      t.add('shin' + side, box(d.foot * 0.46, d.shin * 0.06, d.foot * 0.55), hair.color ?? 0x4a2a14, [0, -d.shin * 0.86, d.foot * 0.25]);
    } else {
      t.add('shin' + side, box(d.foot * 0.45, d.shin * 0.12, d.foot), feet === 'boots' ? bootC : skin, [0, -d.shin * 0.94, d.foot * 0.28]);
    }
  }

  // A cloak from the shoulders (joint 'cloak', so it can stream out behind a walker).
  if (spec.cloak) {
    const c = spec.cloak;
    const len = (c.len ?? 0.78) * H;
    t.add('cloak', skirtGeo(sh * 0.95, sh * 1.35, len, 10), c.color, [0, -len / 2, 0], [0, 0, 0], [1, 1, 0.55]);
    if (c.hood === 'down') t.add('cloak', cyl(sh * 0.8, sh * 0.95, head * 0.35, 8), c.color, [0, 0.02 * H, -chest * 0.25], [0, 0, 0], [1, 1, 0.6]);
    if (c.fur) t.add('cloak', cyl(sh * 0.9, sh * 1.05, head * 0.35, 8), c.fur, [0, 0.01 * H, 0], [0, 0, 0], [1.05, 1, 0.8]);
  }
  if (spec.cloak?.hood === 'up' || spec.hood) {
    const hc = spec.hood ?? spec.cloak.color;
    t.add('head', cap(headR * 1.28, 0.62, 10), hc, [0, hy + headR * 0.05, -headR * 0.12], [-0.25, 0, 0]);
    // The drape falls round the back and sides only, leaving the face open.
    t.add('head', new THREE.CylinderGeometry(headR * 1.15, headR * 1.4, headR * 1.4, 9, 1, true, Math.PI * 0.3, Math.PI * 1.4), hc, [0, hy - headR * 0.5, -headR * 0.15], [0.15, 0, 0], [1, 1, 0.9]);
  }

  // Things carried on the back and at the hip (on the torso), and in the hands.
  for (const item of spec.back || []) backItem(t, item, d, spec);
  for (const item of spec.hip || []) hipItem(t, item, d);
  const held = {};
  for (const side of ['L', 'R']) {
    const h = spec[side === 'L' ? 'left' : 'right'];
    if (!h) continue;
    const joint = 'hand' + side + (h.drawn ? 'X' : '');
    held[side] = { grip: handItem(t, joint, h.item, d, side), drawn: !!h.drawn };
  }
  return { geos: t.done(), held };
}

function dressHair(t, hair, d, hy, spec) {
  const { headR, H } = d;
  const c = hair.color ?? 0x3a2616;
  switch (hair.style) {
    case 'bald':
      break;
    case 'curly':
      // Hobbit curls: a cap of little balls.
      t.add('head', cap(headR * 1.08, 0.5), c, [0, hy + headR * 0.08, -headR * 0.05], [-0.2, 0, 0]);
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2;
        t.add('head', ball(headR * 0.3, 5, 4), c, [Math.sin(a) * headR * 0.9, hy + headR * (0.35 + (i % 2) * 0.25), Math.cos(a) * headR * 0.85 - headR * 0.1]);
      }
      break;
    case 'long':
    case 'flowing': {
      // Shoulder-length (Aragorn, Boromir), or down the back (Legolas, Galadriel, Gandalf).
      const len = hair.style === 'flowing' ? H * 0.2 : H * 0.1;
      t.add('head', cap(headR * 1.1, 0.55), c, [0, hy + headR * 0.05, -headR * 0.08], [-0.25, 0, 0]);
      t.add('head', box(headR * 2, len, headR * 0.7), c, [0, hy - len / 2 + headR * 0.3, -headR * 0.6]);
      for (const x of [-1, 1]) t.add('head', box(headR * 0.4, len * 0.7, headR * 0.6), c, [x * headR * 0.9, hy - len * 0.3, -headR * 0.15]);
      break;
    }
    case 'wild':
      t.add('head', cap(headR * 1.2, 0.6), c, [0, hy, -headR * 0.1], [-0.3, 0, 0]);
      for (let i = 0; i < 7; i++) t.add('head', cone(headR * 0.3, headR * 0.9, 4), c, [(i - 3) * headR * 0.3, hy + headR * 0.6, -headR * 0.6], [-1 - (i % 2) * 0.4, 0, (i - 3) * 0.3]);
      break;
    case 'strands':
      // Gollum's last few hairs.
      for (let i = 0; i < 5; i++) t.add('head', box(headR * 0.05, headR * 0.9, headR * 0.05), c, [(i - 2) * headR * 0.25, hy + headR * 0.4, -headR * 0.7], [-0.7, 0, (i - 2) * 0.2]);
      break;
    case 'leaves':
      // An Ent's crown of twigs and leaves.
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        t.add('head', cone(headR * 0.2, headR * 1.4, 4), hair.twig ?? 0x4a3622, [Math.sin(a) * headR * 0.6, hy + headR * 1.1, Math.cos(a) * headR * 0.5 - headR * 0.3], [Math.cos(a) * 0.5 - 0.3, 0, -Math.sin(a) * 0.5]);
        t.add('head', new THREE.IcosahedronGeometry(headR * 0.45, 0), c, [Math.sin(a) * headR * 0.9, hy + headR * 1.7, Math.cos(a) * headR * 0.8 - headR * 0.3]);
      }
      break;
    default: // short
      t.add('head', cap(headR * 1.07, 0.52), c, [0, hy + headR * 0.08, -headR * 0.06], [-0.25, 0, 0]);
  }
  if (hair.braids) for (const x of [-1, 1]) t.add('head', cyl(headR * 0.12, headR * 0.08, H * 0.12, 5), c, [x * headR * 0.85, hy - H * 0.05, headR * 0.1]);
  void spec;
}

function dressBeard(t, beard, d, hy) {
  const { headR, H } = d;
  const c = beard.color ?? 0x5a3a20;
  const chin = [0, hy - headR * 0.55, headR * 0.55];
  switch (beard.style) {
    case 'stubble':
      t.add('head', cap(headR * 0.98, 0.5, 9), c, [0, hy - headR * 0.05, headR * 0.03], [Math.PI, 0, 0], [1, 0.75, 1]);
      break;
    case 'short':
      t.add('head', cap(headR * 1.0, 0.5, 9), c, [0, hy - headR * 0.08, headR * 0.05], [Math.PI, 0, 0], [1, 0.95, 1]);
      break;
    case 'long': {
      // A wizard's beard, down to the chest.
      const len = H * 0.16;
      t.add('head', cap(headR * 1.0, 0.5, 9), c, [0, hy - headR * 0.08, headR * 0.05], [Math.PI, 0, 0]);
      t.add('head', cone(headR * 0.75, len, 7), c, [0, chin[1] - len * 0.4, headR * 0.6], [Math.PI + 0.12, 0, 0], [1, 1, 0.6]);
      break;
    }
    case 'dwarf': {
      // Broad and braided, spreading over the chest.
      const len = H * 0.17;
      t.add('head', cap(headR * 1.08, 0.5, 9), c, [0, hy - headR * 0.08, headR * 0.05], [Math.PI, 0, 0]);
      t.add('head', cone(headR * 1.05, len, 8), c, [0, chin[1] - len * 0.35, headR * 0.65], [Math.PI + 0.2, 0, 0], [1.1, 1, 0.55]);
      if (beard.forked) for (const x of [-1, 1]) t.add('head', cyl(headR * 0.16, headR * 0.1, len * 0.7, 5), c, [x * headR * 0.45, chin[1] - len * 0.75, headR * 0.8], [0.25, 0, 0]);
      break;
    }
    case 'moss':
      t.add('head', cone(headR * 0.9, H * 0.14, 6), c, [0, chin[1] - H * 0.05, headR * 0.6], [Math.PI + 0.1, 0, 0], [1, 1, 0.6]);
      break;
    default:
      break;
  }
  if (beard.moustache) t.add('head', box(headR * 0.9, headR * 0.12, headR * 0.15), c, [0, hy - headR * 0.35, headR * 0.9]);
}

function dressHat(t, hat, d, hy) {
  const { headR, H } = d;
  const c = hat.color ?? 0x6a6a70;
  switch (hat.style) {
    case 'wizard': {
      // Gandalf's hat: a wide, drooping brim and a tall point, bent back at the tip.
      t.add('head', cyl(headR * 2.3, headR * 2.4, H * 0.012, 14), c, [0, hy + headR * 0.55, 0], [-0.08, 0, 0]);
      t.add('head', cyl(headR * 0.55, headR * 1.05, H * 0.13, 10), c, [0, hy + headR * 0.55 + H * 0.065, -headR * 0.05], [-0.1, 0, 0]);
      t.add('head', cone(headR * 0.55, H * 0.12, 9), c, [0, hy + headR * 0.55 + H * 0.17, -headR * 0.35], [-0.5, 0, 0]);
      break;
    }
    case 'helm':
      t.add('head', cap(headR * 1.18, 0.5, 10), c, [0, hy + headR * 0.05, 0]);
      t.add('head', box(headR * 0.18, headR * 0.7, headR * 0.12), c, [0, hy - headR * 0.1, headR * 1.08]);   // nose guard
      if (hat.crest) t.add('head', box(headR * 0.18, headR * 0.5, headR * 1.8), hat.crest, [0, hy + headR * 1.1, -headR * 0.3]);
      if (hat.plume) t.add('head', box(headR * 0.25, H * 0.12, headR * 0.3), hat.plume, [0, hy + headR * 0.4, -headR * 1.3], [0.4, 0, 0]);
      if (hat.wings) for (const x of [-1, 1]) t.add('head', box(headR * 0.08, headR * 0.9, headR * 0.6), hat.wings, [x * headR * 1.15, hy + headR * 0.6, -headR * 0.1], [0, 0, -x * 0.35]);
      if (hat.tall) t.add('head', cone(headR * 1.15, headR * 1.3, 10), c, [0, hy + headR * 0.95, 0]);
      break;
    case 'dwarfhelm':
      t.add('head', cap(headR * 1.2, 0.5, 10), c, [0, hy + headR * 0.08, 0]);
      t.add('head', cyl(headR * 1.22, headR * 1.24, headR * 0.25, 10), hat.band ?? 0x8a6a30, [0, hy + headR * 0.12, 0]);
      break;
    case 'crown':
      t.add('head', cyl(headR * 1.02, headR * 1.02, headR * 0.3, 10), c, [0, hy + headR * 0.72, 0]);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        t.add('head', cone(headR * 0.12, headR * 0.35, 4), c, [Math.sin(a) * headR, hy + headR * 1.0, Math.cos(a) * headR]);
      }
      break;
    case 'circlet':
      t.add('head', cyl(headR * 1.05, headR * 1.05, headR * 0.08, 10), c, [0, hy + headR * 0.62, 0]);
      break;
    case 'spikes':
      // The Witch-king's helm: a crown of iron spikes over the empty hood.
      t.add('head', cyl(headR * 1.25, headR * 1.3, headR * 0.5, 10), c, [0, hy + headR * 0.75, 0]);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        t.add('head', cone(headR * 0.14, headR * 1.3, 4), c, [Math.sin(a) * headR * 1.2, hy + headR * 1.55, Math.cos(a) * headR * 1.2], [Math.cos(a) * 0.2, 0, -Math.sin(a) * 0.2]);
      }
      break;
    case 'cap':
      t.add('head', cap(headR * 1.12, 0.45, 9), c, [0, hy + headR * 0.2, 0]);
      t.add('head', cone(headR * 0.4, headR * 1.1, 6), c, [0, hy + headR * 1.0, -headR * 0.4], [-0.9, 0, 0]);
      break;
    default:
      break;
  }
}

function backItem(t, item, d, spec) {
  const { H, torso, chest } = d;
  const z = -chest * 0.8;
  switch (item) {
    case 'pack':
      // Sam's pack, with the pans and the rope from Lórien.
      t.add('torso', box(chest * 1.7, torso * 0.75, chest * 1.1), 0x6a4a28, [0, torso * 0.55, z - chest * 0.4]);
      t.add('torso', box(chest * 1.8, torso * 0.2, chest * 1.2), 0x8a7a5a, [0, torso * 1.0, z - chest * 0.4]);
      t.add('torso', cyl(chest * 0.45, chest * 0.45, chest * 0.08, 9), 0x3a3a3a, [chest * 0.4, torso * 0.4, z - chest * 1.0], [Math.PI / 2, 0, 0]);
      t.add('torso', new THREE.TorusGeometry(chest * 0.4, chest * 0.1, 4, 8), 0xc8b890, [-chest * 0.9, torso * 0.45, z - chest * 0.4], [0, Math.PI / 2, 0]);
      break;
    case 'satchel':
      t.add('torso', box(chest * 0.9, torso * 0.35, chest * 0.4), 0x6a4a28, [-chest * 0.9, torso * 0.2, 0]);
      break;
    case 'quiver':
      t.add('torso', cyl(H * 0.03, H * 0.025, torso * 0.9, 6), 0x5a3a20, [chest * 0.3, torso * 0.65, z], [0, 0, -0.35]);
      for (let i = 0; i < 4; i++) t.add('torso', box(H * 0.012, H * 0.05, H * 0.004), 0xe0e0d0, [chest * 0.3 + H * 0.05 + i * H * 0.008, torso * 1.1 + i * H * 0.004, z], [0, 0, -0.35]);
      break;
    case 'shield':
      // Boromir's round shield, slung on his back.
      t.add('torso', cyl(chest * 1.35, chest * 1.35, H * 0.02, 12), spec.shield ?? 0x7a5a30, [0, torso * 0.6, z - H * 0.02], [Math.PI / 2, 0, 0]);
      t.add('torso', cyl(chest * 0.3, chest * 0.3, H * 0.03, 8), 0xb8a060, [0, torso * 0.6, z - H * 0.035], [Math.PI / 2, 0, 0]);
      break;
    case 'axes':
      for (const x of [-1, 1]) {
        t.add('torso', cyl(H * 0.012, H * 0.012, torso * 0.9, 5), 0x4a2a14, [x * chest * 0.4, torso * 0.65, z], [0, 0, x * 0.4]);
        t.add('torso', box(H * 0.08, H * 0.06, H * 0.01), 0xa8a8a8, [x * chest * 0.8, torso * 1.02, z], [0, 0, x * 0.4]);
      }
      break;
    case 'sword':
      t.add('torso', box(H * 0.02, torso * 1.1, H * 0.01), 0x3a2a1a, [0, torso * 0.6, z], [0, 0, 0.5]);
      break;
    case 'bow':
      t.add('torso', new THREE.TorusGeometry(torso * 0.55, H * 0.008, 4, 12, Math.PI), 0x8a6a3a, [0, torso * 0.6, z - H * 0.01], [0, 0, Math.PI / 2 - 0.4]);
      break;
    default:
      break;
  }
}

function hipItem(t, item, d) {
  const { H, waist, torso } = d;
  switch (item) {
    case 'sword':
      // A sheathed sword at the left hip.
      t.add('torso', box(H * 0.02, H * 0.36, H * 0.03), 0x2a1c12, [-waist * 1.2, torso * 0.02 - H * 0.12, waist * 0.3], [0.35, 0, 0.1]);
      t.add('torso', box(H * 0.07, H * 0.012, H * 0.02), 0xb8a060, [-waist * 1.2, torso * 0.1 + H * 0.04, waist * 0.25]);
      break;
    case 'dagger':
      t.add('torso', box(H * 0.018, H * 0.14, H * 0.025), 0x3a2a1a, [waist * 1.15, torso * 0.02 - H * 0.03, 0], [0, 0, -0.2]);
      break;
    case 'horn':
      // The horn of Gondor.
      t.add('torso', cone(H * 0.025, H * 0.16, 6), 0xe8dcc0, [waist * 1.2, torso * 0.05, -waist * 0.2], [0, 0, 1.3]);
      break;
    case 'pouch':
      t.add('torso', box(H * 0.05, H * 0.05, H * 0.03), 0x5a3a20, [waist * 0.8, torso * 0.02, waist * 0.7]);
      break;
    default:
      break;
  }
}

/** Builds a held item on a hand joint (pivot at the palm). Returns its grip: 'upright' or 'fist'. */
function handItem(t, joint, item, d, side) {
  const { H } = d;
  const steel = 0xc8ccd2, wood = 0x6a4a2a;
  switch (item) {
    case 'staff':
      // Gandalf the Grey's staff: gnarled, taller than he is, with a knot at the top.
      t.add(joint, cyl(H * 0.014, H * 0.018, H * 1.2, 5), 0x5a3a1c, [0, H * 0.18, 0]);
      t.add(joint, new THREE.IcosahedronGeometry(H * 0.04, 0), 0x4a2e14, [0, H * 0.8, 0]);
      t.add(joint, cone(H * 0.03, H * 0.12, 4), 0x4a2e14, [H * 0.03, H * 0.83, 0], [0, 0, -0.6]);
      return 'upright';
    case 'darkStaff':
      // Saruman's black staff, with its claw at the top.
      t.add(joint, cyl(H * 0.013, H * 0.016, H * 1.2, 6), 0x1a1a1c, [0, H * 0.18, 0]);
      for (let i = 0; i < 4; i++) t.add(joint, cone(H * 0.012, H * 0.1, 4), 0x1a1a1c, [Math.sin(i * 1.57) * H * 0.03, H * 0.82, Math.cos(i * 1.57) * H * 0.03], [Math.cos(i * 1.57) * 0.4, 0, -Math.sin(i * 1.57) * 0.4]);
      return 'upright';
    case 'whiteStaff':
      t.add(joint, cyl(H * 0.014, H * 0.016, H * 1.2, 6), 0xf2f0ea, [0, H * 0.18, 0]);
      t.add(joint, new THREE.OctahedronGeometry(H * 0.045, 0), 0xffffff, [0, H * 0.81, 0]);
      return 'upright';
    case 'spear':
      t.add(joint, cyl(H * 0.01, H * 0.01, H * 1.5, 5), wood, [0, H * 0.3, 0]);
      t.add(joint, cone(H * 0.025, H * 0.12, 4), steel, [0, H * 1.1, 0]);
      return 'upright';
    case 'banner':
      t.add(joint, cyl(H * 0.01, H * 0.01, H * 1.6, 5), wood, [0, H * 0.35, 0]);
      t.add(joint, box(H * 0.005, H * 0.3, H * 0.28), d.banner ?? 0x2f5a2a, [0, H * 1.0, H * 0.14]);
      return 'upright';
    case 'torch':
      t.add(joint, cyl(H * 0.015, H * 0.012, H * 0.35, 5), wood, [0, H * 0.1, 0]);
      t.add(joint, cone(H * 0.035, H * 0.1, 5), 0xffa030, [0, H * 0.32, 0]);
      return 'upright';
    case 'lantern':
      t.add(joint, box(H * 0.05, H * 0.07, H * 0.05), 0xffd080, [0, -H * 0.07, 0]);
      return 'upright';
    case 'mug':
      t.add(joint, cyl(H * 0.03, H * 0.028, H * 0.07, 6), 0x8a6a40, [0, 0, H * 0.02]);
      return 'upright';
    case 'pipe':
      t.add(joint, cyl(H * 0.004, H * 0.004, H * 0.12, 4), 0x4a3020, [0, 0, H * 0.05], [Math.PI / 2, 0, 0]);
      t.add(joint, cyl(H * 0.012, H * 0.01, H * 0.025, 5), 0x4a3020, [0, H * 0.012, H * 0.11]);
      return 'upright';
    case 'hoe':
    case 'rake':
      t.add(joint, cyl(H * 0.01, H * 0.01, H * 0.7, 5), wood, [0, 0, H * 0.18], [Math.PI / 2, 0, 0]);
      t.add(joint, box(H * 0.1, H * 0.05, H * 0.015), item === 'hoe' ? 0x7a7a7a : wood, [0, -H * 0.02, H * 0.52]);
      return 'fist';
    case 'hammer':
      t.add(joint, cyl(H * 0.01, H * 0.01, H * 0.25, 5), wood, [0, 0, H * 0.1], [Math.PI / 2, 0, 0]);
      t.add(joint, box(H * 0.08, H * 0.05, H * 0.05), 0x5a5a5a, [0, 0, H * 0.22]);
      return 'fist';
    case 'rod':
      t.add(joint, cyl(H * 0.006, H * 0.01, H * 0.9, 4), wood, [0, H * 0.25, H * 0.3], [0.8, 0, 0]);
      return 'fist';
    case 'sword':
    case 'sting':
    case 'shortsword':
    case 'glamdring':
    case 'scimitar': {
      // A blade coming out of the fist, forward - the strike swings it overhead and down.
      const len = item === 'sting' || item === 'shortsword' ? H * 0.3 : H * 0.55;
      const glow = item === 'sting' ? 0xa8d0ff : steel;
      t.add(joint, box(H * 0.03, H * 0.1, H * 0.02), 0x3a2a1a, [0, 0, 0], [Math.PI / 2, 0, 0]);
      t.add(joint, box(H * 0.1, H * 0.015, H * 0.02), 0xb8a060, [0, 0, H * 0.05]);
      t.add(joint, box(H * 0.035, H * 0.012, len), glow, [0, 0, H * 0.06 + len / 2], item === 'scimitar' ? [0.2, 0, 0] : [0, 0, 0]);
      return 'fist';
    }
    case 'axe':
    case 'bigAxe': {
      const big = item === 'bigAxe';
      t.add(joint, cyl(H * 0.014, H * 0.014, big ? H * 0.55 : H * 0.4, 5), 0x4a2a14, [0, 0, big ? H * 0.2 : H * 0.14], [Math.PI / 2, 0, 0]);
      for (const x of big ? [-1, 1] : [1]) t.add(joint, box(H * 0.012, H * 0.14, H * 0.1), steel, [0, x * H * 0.07, big ? H * 0.42 : H * 0.3]);
      return 'fist';
    }
    case 'mace':
      t.add(joint, cyl(H * 0.014, H * 0.014, H * 0.45, 5), 0x1a1a1a, [0, 0, H * 0.18], [Math.PI / 2, 0, 0]);
      t.add(joint, new THREE.DodecahedronGeometry(H * 0.07, 0), 0x2a2a2a, [0, 0, H * 0.42]);
      return 'fist';
    case 'bow':
    case 'longbow': {
      // Held upright in the left hand: an arc with its string.
      const r = item === 'longbow' ? H * 0.5 : H * 0.34;
      // The arc bulges forward (+z) from the grip; the string runs behind it.
      t.add(joint, new THREE.TorusGeometry(r, H * 0.009, 4, 14, Math.PI * 0.7), item === 'longbow' ? 0xc8b890 : 0x7a5a30, [0, 0, -r * 0.85], [0, -Math.PI / 2, -Math.PI * 0.35]);
      t.add(joint, cyl(H * 0.002, H * 0.002, r * 1.78, 3), 0xe8e8e0, [0, 0, -r * 0.4]);
      return 'upright';
    }
    case 'shield':
      t.add(joint, cyl(H * 0.15, H * 0.15, H * 0.025, 12), d.shieldColor ?? 0x6a5030, [(side === 'L' ? -1 : 1) * H * 0.04, H * 0.12, 0], [0, 0, Math.PI / 2]);
      return 'fist';
    case 'ring':
      t.add(joint, new THREE.TorusGeometry(H * 0.025, H * 0.008, 5, 10), 0xffd060, [0, H * 0.04, H * 0.02]);
      return 'upright';
    case 'phial':
      t.add(joint, ball(H * 0.035, 6, 5), 0xf0f8ff, [0, H * 0.05, 0]);
      return 'upright';
    default:
      return 'fist';
  }
}

// --- Actions: a pose for each thing a person can be doing, from its time τ ---------------------

const S = Math.sin, C = Math.cos;
const pulse = (τ, period, a, b) => { const k = (τ % period) / period; return k < a ? k / a : k < b ? 1 - (k - a) / (b - a) : 0; };

/** Idle: breathing, a slow look around, arms loose. */
function idle(τ, seed) {
  return {
    lean: 0.02 + S(τ * 1.6 + seed) * 0.012,
    headY: S(τ * 0.35 + seed) * 0.35,
    headX: S(τ * 0.5 + seed * 2) * 0.05,
    lArmX: 0.02 + S(τ * 1.6 + seed) * 0.03, lArmZ: -0.1, lElbow: 0.18,
    rArmX: 0.02 - S(τ * 1.6 + seed) * 0.03, rArmZ: 0.1, rElbow: 0.18,
  };
}

export const ACTIONS = {
  idle,
  talk: (τ, s) => ({
    ...idle(τ, s), headY: S(τ * 0.6 + s) * 0.25, headX: S(τ * 3.1) * 0.06,
    rArmX: -0.45 + S(τ * 2.6) * 0.25, rArmZ: 0.2, rElbow: 1.1 + S(τ * 2.6 + 1) * 0.35,
    lArmX: -0.2 + S(τ * 1.9 + 2) * 0.18, lArmZ: -0.15, lElbow: 0.7,
  }),
  listen: (τ, s) => ({ ...idle(τ, s), headX: 0.08 + S(τ * 0.9) * 0.05, headY: 0, lArmX: -0.12, lElbow: 0.75, rArmX: -0.12, rElbow: 0.75, lArmZ: 0.22, rArmZ: -0.22 }),
  volunteer: (τ, s) => ({ ...idle(τ, s), headY: 0, headX: -0.15, rArmX: -2.5, rArmZ: 0.2, rElbow: 0.35 }),
  beckon: (τ, s) => ({ ...idle(τ, s), headY: 0, rArmX: -1.2, rArmZ: 0.1, rElbow: 0.6 + Math.max(0, S(τ * 5)) * 1.2 }),
  point: (τ, s) => ({ ...idle(τ, s), headY: 0, rArmX: -1.45, rArmZ: 0.08, rElbow: 0.05 }),
  wave: (τ, s) => ({ ...idle(τ, s), headY: 0, rArmX: -0.2, rArmZ: 2.5 + S(τ * 7) * 0.35, rElbow: 0.5 }),
  raise: (τ, s) => ({ ...idle(τ, s), headY: 0, headX: -0.3, lean: -0.1, rArmX: -2.9, rArmZ: 0.15, rElbow: 0.1, lArmX: -0.3, lElbow: 0.5 }),
  cast: (τ, s) => ({ ...idle(τ, s), headY: 0, headX: -0.1, lean: -0.05, rArmX: -2.7, rArmZ: 0.2, rElbow: 0.15, lArmX: -1.4, lArmZ: -0.1, lElbow: 0.1 + S(τ * 5) * 0.1 }),
  strike: (τ) => {
    // Wind up overhead, cut down, recover.
    const k = (τ % 1.1) / 1.1;
    const arm = k < 0.45 ? -0.6 - (k / 0.45) * 2.2 : k < 0.62 ? -2.8 + ((k - 0.45) / 0.17) * 2.4 : -0.4 - ((k - 0.62) / 0.38) * 0.2;
    const cut = k > 0.45 && k < 0.62 ? 1 : 0;
    return { lean: 0.1 + cut * 0.15, twist: k < 0.45 ? -0.3 : 0.25, rArmX: arm, rArmZ: 0.2, rElbow: 0.25, lArmX: -0.7, lArmZ: -0.2, lElbow: 0.9, lLegX: -0.35, lKnee: 0.3, rLegX: 0.3, rKnee: 0.15, crouch: 0.05 };
  },
  guard: (τ) => ({ lean: 0.1, crouch: 0.07, rArmX: -1.1, rArmZ: 0.1, rElbow: 0.9, lArmX: -0.8, lArmZ: -0.2, lElbow: 1.2, lLegX: -0.3, lKnee: 0.25, rLegX: 0.3, rKnee: 0.2, headY: S(τ * 0.8) * 0.2 }),
  shoot: (τ) => {
    // Nock, draw to the cheek, loose.
    const k = (τ % 2.2) / 2.2;
    const draw = k < 0.55 ? k / 0.55 : k < 0.62 ? 1 : 0;
    return { twist: -0.25, headY: 0.3, lArmX: -1.5, lArmZ: -0.05, lElbow: 0, rArmX: -1.45, rArmZ: 0.25, rElbow: 0.4 + draw * 1.9, lLegX: -0.2, rLegX: 0.25 };
  },
  chop: (τ) => {
    const k = (τ % 1) / 1;
    const up = k < 0.55 ? k / 0.55 : 1 - (k - 0.55) / 0.45;
    const arm = -0.5 - up * 2.4;
    return { lean: 0.35 - up * 0.4, rArmX: arm, lArmX: arm, rArmZ: -0.1, lArmZ: 0.1, rElbow: 0.2, lElbow: 0.2, crouch: 0.06, lLegX: -0.3, rLegX: 0.3, lKnee: 0.3, rKnee: 0.3 };
  },
  hammer: (τ) => {
    const k = (τ % 0.8) / 0.8;
    const up = k < 0.6 ? k / 0.6 : 1 - (k - 0.6) / 0.4;
    return { lean: 0.3, headX: 0.35, rArmX: -0.6 - up * 1.6, rArmZ: 0.1, rElbow: 1.0 - up * 0.6, lArmX: -0.8, lArmZ: 0.2, lElbow: 1.1 };
  },
  dig: (τ) => {
    const k = (τ % 1.6) / 1.6;
    const up = k < 0.5 ? k / 0.5 : 1 - (k - 0.5) / 0.5;
    return { lean: 0.4 - up * 0.25, headX: 0.3, rArmX: -0.9 - up * 1.1, lArmX: -0.8 - up * 1.1, rElbow: 0.4, lElbow: 0.5, lArmZ: 0.15, rArmZ: -0.1, crouch: 0.05 };
  },
  kneel: (τ, s) => ({ ...idle(τ, s), headY: 0, crouch: 0.46, lLegX: -1.5, lKnee: 1.5, rLegX: 0.35, rKnee: 1.95, lean: 0.12, headX: 0.35 }),
  sit: (τ, s) => ({ ...idle(τ, s), crouch: 0.5, lLegX: -1.5, lKnee: 1.45, rLegX: -1.5, rKnee: 1.45, lArmX: -0.5, rArmX: -0.5, lElbow: 0.6, rElbow: 0.6 }),
  sitGround: (τ, s) => ({ ...idle(τ, s), crouch: 0.88, lLegX: -1.4, lKnee: 0.5, rLegX: -1.3, rKnee: 0.9, lean: -0.05, lArmX: 0.4, rArmX: 0.4, lArmZ: -0.4, rArmZ: 0.4 }),
  cheer: (τ) => ({ bob: Math.abs(S(τ * 6)) * 0.05, lArmX: -2.6 + S(τ * 6) * 0.2, rArmX: -2.6 - S(τ * 6) * 0.2, lArmZ: -0.45, rArmZ: 0.45, lElbow: 0.2, rElbow: 0.2, headX: -0.25 }),
  dance: (τ) => {
    const a = S(τ * 5.5);
    return {
      bob: Math.abs(a) * 0.05, twist: S(τ * 2.75) * 0.3, lean: 0.05,
      lLegX: -Math.max(0, a) * 0.7, lKnee: Math.max(0, a) * 1.1, rLegX: -Math.max(0, -a) * 0.7, rKnee: Math.max(0, -a) * 1.1,
      lArmX: -0.4, rArmX: -0.4, lArmZ: -0.7, rArmZ: 0.7, lElbow: 1.8, rElbow: 1.8, headY: S(τ * 2.75) * 0.3,
    };
  },
  cower: (τ) => ({ crouch: 0.22, lean: 0.35, headX: 0.35, lArmX: -1.8, rArmX: -1.8, lElbow: 1.9, rElbow: 1.9, lArmZ: 0.3, rArmZ: -0.3, lKnee: 0.5, rKnee: 0.5, lLegX: -0.25, rLegX: -0.25, twist: S(τ * 9) * 0.03 }),
  drink: (τ, s) => {
    const up = Math.min(1, pulse(τ + s, 4.5, 0.2, 0.45) * 2);
    return { ...idle(τ, s), headX: -up * 0.35, rArmX: -0.7 - up * 0.9, rArmZ: 0.15, rElbow: 1.3 + up * 0.9 };
  },
  smoke: (τ, s) => {
    const up = Math.min(1, pulse(τ + s, 6, 0.15, 0.4) * 2);
    return { ...idle(τ, s), headX: -up * 0.1, rArmX: -0.55 - up * 0.5, rArmZ: 0.2, rElbow: 1.7 + up * 0.5, lArmX: -0.3, lElbow: 1.4, lArmZ: 0.35 };
  },
  hold: (τ, s) => ({ ...idle(τ, s), headY: 0, headX: 0.35, lArmX: -0.95, rArmX: -0.95, lElbow: 0.85, rElbow: 0.85, lArmZ: 0.28, rArmZ: -0.28 }),
  reach: (τ) => ({ headX: -0.5, lean: -0.05, rArmX: -2.4 + S(τ * 1.4) * 0.12, rArmZ: 0.1, rElbow: 0.1, lArmX: -0.2, lElbow: 0.4 }),
  look: (τ, s) => ({ ...idle(τ, s), headY: S(τ * 0.4) * 0.15, headX: -0.55, lean: -0.08 }),
  mourn: (τ, s) => ({ ...idle(τ, s), headY: 0, headX: 0.55, lean: 0.15, lArmX: -0.4, rArmX: -0.4, lElbow: 0.5, rElbow: 0.5, lArmZ: 0.25, rArmZ: -0.25 }),
  bowdown: (τ) => ({ lean: 0.45 + S(τ) * 0.02, headX: 0.3, lArmX: -0.1, rArmX: -0.9, rArmZ: -0.2, rElbow: 1.4, lElbow: 0.2 }),
  sentry: (τ, s) => ({ lean: -0.02, headY: S(τ * 0.3 + s) * 0.5, rArmX: -0.3, rArmZ: 0.05, rElbow: 1.15, lArmZ: -0.06, lElbow: 0.1 }),
  fish: (τ, s) => ({ ...idle(τ, s), headY: 0, headX: 0.25, rArmX: -0.9 + S(τ * 0.7) * 0.05, rElbow: 0.6, lArmX: -0.6, lElbow: 0.9, lArmZ: 0.2 }),
  row: (τ) => {
    const k = S(τ * 2.2);
    return { crouch: 0.5, lLegX: -1.4, lKnee: 1.2, rLegX: -1.4, rKnee: 1.2, lean: 0.2 + k * 0.25, lArmX: -1.2 - k * 0.4, rArmX: -1.2 - k * 0.4, lElbow: 0.6 - k * 0.4, rElbow: 0.6 - k * 0.4 };
  },
  ride: (τ) => ({ lLegX: -1.15, rLegX: -1.15, lKnee: 1.4, rKnee: 1.4, lLegZ: -0.45, rLegZ: 0.45, lArmX: -0.6, rArmX: -0.6, lElbow: 1.0, rElbow: 1.0, lean: 0.08, bob: Math.abs(S(τ * 4)) * 0.015 }),
  struggle: (τ) => ({ lArmX: -1.4 + S(τ * 8) * 0.8, rArmX: -1.4 + S(τ * 8 + 2) * 0.8, lLegX: S(τ * 7) * 0.6, rLegX: -S(τ * 7) * 0.6, lKnee: 0.6, rKnee: 0.6, headY: S(τ * 4) * 0.4 }),
  lift: (τ) => ({ lean: -0.05, lArmX: -2.4, rArmX: -2.4, lArmZ: -0.5, rArmZ: 0.5, lElbow: 0.5, rElbow: 0.5, headX: -0.3 + S(τ) * 0.05 }),
  crawl: (τ) => ({ crouch: 0.35, lean: 0.9, headX: -0.8, lArmX: -1.2 + S(τ * 4) * 0.5, rArmX: -1.2 - S(τ * 4) * 0.5, lElbow: 0.4, rElbow: 0.4, lLegX: -0.9 - S(τ * 4) * 0.3, rLegX: -0.9 + S(τ * 4) * 0.3, lKnee: 1.6, rKnee: 1.6 }),
  gloat: (τ) => ({ crouch: 0.3, lean: 0.55, headX: -0.55, headY: S(τ * 2) * 0.4, lArmX: -1.0, rArmX: -1.0, lElbow: 1.5 + S(τ * 6) * 0.2, rElbow: 1.5 - S(τ * 6) * 0.2, lArmZ: 0.3, rArmZ: -0.3, lLegX: -0.8, rLegX: -0.8, lKnee: 1.4, rKnee: 1.4 }),
};

// Actions a weapon is drawn for; the rest of the time it stays sheathed (hidden in the hand).
const DRAWN = new Set(['strike', 'guard', 'raise', 'cast', 'shoot', 'chop', 'hammer']);

/** Walking or running, as a pose: a stride with knee lift, counter-swinging arms, a bob. */
function stride(phase, run, amp) {
  const a = amp * (run ? 1.35 : 1);
  const s = S(phase), c = C(phase);
  return {
    bob: (1 - Math.abs(s)) * (run ? 0.045 : 0.022),
    lean: run ? 0.22 : 0.05,
    twist: s * 0.08,
    lLegX: -s * 0.55 * a, rLegX: s * 0.55 * a,
    lKnee: 0.1 + Math.max(0, c) * 0.85 * a, rKnee: 0.1 + Math.max(0, -c) * 0.85 * a,
    lArmX: s * 0.5 * a, rArmX: -s * 0.5 * a, lArmZ: -0.08, rArmZ: 0.08,
    lElbow: run ? 1.4 : 0.35, rElbow: run ? 1.4 : 0.35, headY: 0, headX: 0,
  };
}

const KEYS = ['bob', 'crouch', 'lean', 'twist', 'side', 'headX', 'headY', 'lArmX', 'lArmZ', 'lElbow', 'rArmX', 'rArmZ', 'rElbow', 'lLegX', 'lLegZ', 'lKnee', 'rLegX', 'rLegZ', 'rKnee'];

// --- Building and running a rig ---------------------------------------------------------------

const templates = new Map();   // spec key -> { d, geos, held }
const live = new Set();

/** The self-light every built body gets, per vertex colour, so its shaded side stays readable. */
function bodyMaterial(spec) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, flatShading: true });
  const lift = spec.selfLight ?? 0.22;
  m.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>\n totalEmissiveRadiance += vColor.rgb * ${lift.toFixed(3)};`,
    );
  };
  m.customProgramCacheKey = () => `rig-${lift.toFixed(3)}`;
  return m;
}

/**
 * A person from a spec (see cast.js). [key] names the template, so every copy of the same
 * character shares its geometry; the joints and material are its own.
 */
export function buildRig(spec, key) {
  let tpl = key && templates.get(key);
  if (!tpl) {
    const d = measure(spec);
    tpl = { d, ...tailor(spec, d) };
    if (key) templates.set(key, tpl);
  }
  const { d, geos, held } = tpl;
  const material = bodyMaterial(spec);
  const mesh = (joint) => {
    if (!geos[joint]) return null;
    const m = new THREE.Mesh(geos[joint], material);
    return m;
  };
  const joint = (name, parent, x = 0, y = 0, z = 0) => {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    const m = mesh(name);
    if (m) g.add(m);
    parent.add(g);
    return g;
  };

  const root = new THREE.Group();
  const pelvis = joint('pelvis', root, 0, d.legs, 0);
  const torso = joint('torso', pelvis);
  const head = joint('head', torso, 0, d.torso + d.neck, 0);
  const cloak = joint('cloak', torso, 0, d.torso * 0.97, -d.chest * 0.55);
  const skirt = joint('skirt', pelvis, 0, d.torso * 0.12, 0);
  const upperL = joint('upperL', torso, -d.sh, d.torso * 0.9, 0);
  const upperR = joint('upperR', torso, d.sh, d.torso * 0.9, 0);
  const foreL = joint('foreL', upperL, 0, -d.upper, 0);
  const foreR = joint('foreR', upperR, 0, -d.upper, 0);
  const handL = joint('handL', foreL, 0, -d.fore * 0.88, 0);
  const handR = joint('handR', foreR, 0, -d.fore * 0.88, 0);
  const drawnL = joint('handLX', handL);
  const drawnR = joint('handRX', handR);
  const thighL = joint('thighL', pelvis, -d.hip, 0, 0);
  const thighR = joint('thighR', pelvis, d.hip, 0, 0);
  const shinL = joint('shinL', thighL, 0, -d.thigh, 0);
  const shinR = joint('shinR', thighR, 0, -d.thigh, 0);
  if (!geos.cloak) cloak.visible = false;

  const base = spec.pose || {};
  const rig = {
    root, d, action: 'idle', since: 0, prev: null, prevSince: 0, blend: 1, walkW: 0, walking: false, phase: Math.random() * 6,
    seed: Math.random() * 10, pose: {}, run: false, amp: spec.coat?.len === 'ankle' ? 0.6 : 1, pace: spec.pace ?? (d.H < 0.8 ? 9 : 7),
  };
  const now = Object.fromEntries(KEYS.map((k) => [k, 0]));

  root.userData.walk = (dt) => {
    if (dt > 0) {
      rig.phase += dt * rig.pace;
      rig.walking = true;
    }
  };
  root.userData.act = (name = 'idle', { run = false } = {}) => {
    if (name === 'walk' || name === 'run') { rig.run = name === 'run'; return; }
    if (name === rig.action) return;
    rig.prev = rig.action;
    rig.prevSince = rig.since;
    rig.action = ACTIONS[name] ? name : 'idle';
    rig.since = 0;
    rig.blend = 0;
    void run;
  };
  root.userData.running = (on) => { rig.run = on; };
  Object.defineProperty(root.userData, 'action', { get: () => rig.action, enumerable: false });
  root.userData.pose = rig.pose;

  rig.tick = (dt) => {
    rig.since += dt;
    rig.prevSince += dt;
    rig.blend = Math.min(1, rig.blend + dt * 4);
    rig.walkW += ((rig.walking ? 1 : 0) - rig.walkW) * Math.min(1, dt * 8);
    const moving = rig.walkW > 0.02;
    const cur = ACTIONS[rig.action](rig.since, rig.seed);
    const prev = rig.blend < 1 ? ACTIONS[rig.prev](rig.prevSince, rig.seed) : null;
    const walkPose = moving ? stride(rig.phase, rig.run, rig.amp) : null;
    // While walking, an action keeps only its arms (a wizard walks with his staff raised).
    const armsOnly = rig.action !== 'idle';
    for (const k of KEYS) {
      let v = cur[k] ?? 0;
      if (prev) v = (prev[k] ?? 0) + (v - (prev[k] ?? 0)) * rig.blend;
      if (walkPose) {
        const w = armsOnly && k.includes('Arm') || armsOnly && k.includes('Elbow') ? 0 : rig.walkW;
        v += ((walkPose[k] ?? 0) - v) * w;
      }
      now[k] = v + (base[k] ?? 0) + (rig.pose[k] ?? 0);
    }
    apply(now);
    rig.walking = false;
  };

  function apply(p) {
    pelvis.position.y = d.legs * (1 - p.crouch) + p.bob * d.H;
    torso.rotation.set(p.lean, p.twist, p.side);
    head.rotation.set(p.headX - p.lean * 0.6, p.headY, 0);
    upperL.rotation.set(p.lArmX, 0, p.lArmZ);
    upperR.rotation.set(p.rArmX, 0, p.rArmZ);
    foreL.rotation.x = -p.lElbow;
    foreR.rotation.x = -p.rElbow;
    // Staffs, spears and bows stay upright in the hand however the arm moves.
    if (held.L?.grip === 'upright') handL.rotation.x = -(p.lArmX + p.lean) + p.lElbow;
    else handL.rotation.x = 0;
    if (held.R?.grip === 'upright') handR.rotation.x = -(p.rArmX + p.lean) + p.rElbow;
    else handR.rotation.x = 0;
    thighL.rotation.set(p.lLegX, 0, p.lLegZ);
    thighR.rotation.set(p.rLegX, 0, p.rLegZ);
    shinL.rotation.x = p.lKnee;
    shinR.rotation.x = p.rKnee;
    // A long coat swings with the legs; a cloak streams out behind a walker.
    skirt.rotation.x = (p.lLegX + p.rLegX) * 0.35;
    skirt.scale.x = 1 + Math.abs(p.lLegX - p.rLegX) * 0.12;
    cloak.rotation.x = -p.lean * 0.8 + rig.walkW * (rig.run ? 0.5 : 0.18) + S(rig.phase * 2) * 0.03 * rig.walkW;
    const drawn = DRAWN.has(rig.action) && rig.blend > 0.3;
    drawnL.visible = drawn;
    drawnR.visible = drawn;
  }

  apply(Object.fromEntries(KEYS.map((k) => [k, (base[k] ?? 0)])));
  root.userData.rig = rig;
  root.userData.material = material;
  // Where things are, for scenes that put something in a hand or a hobbit on a shoulder.
  root.userData.joints = { head, pelvis, upperL, upperR, handL, handR };
  live.add(rig);
  return root;
}

function shown(o) {
  for (let p = o; p; p = p.parent) if (!p.visible) return false;
  return true;
}

/** Poses every live rig for this frame; rigs no longer in a scene are dropped. */
export function updateRigs(dt) {
  for (const rig of live) {
    if (!rig.root.parent) {
      if (rig.root.userData.disposed) live.delete(rig);
      continue;
    }
    if (shown(rig.root)) rig.tick(dt);
    else rig.walking = false;
  }
}

/** Removes a rig (or anything holding rigs) from the per-frame update. */
export function retire(obj) {
  obj.traverse((o) => { if (o.userData.rig) { o.userData.disposed = true; live.delete(o.userData.rig); } });
}
