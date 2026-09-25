// The great creatures of the story, stylised: the Balrog, Smaug, the Eagles, fell beasts, trolls.
// Each uses a bundled model when there is one (models.js), otherwise a built stand-in.
// userData.update(dt, t) animates wings, flames and breathing.
import * as THREE from 'three';
import { makeEmitter, makeFlash } from './effects.js';
import { modelFor } from './models.js';

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.75, flatShading: true, emissive: color, emissiveIntensity: 0.15, ...extra });

/** A bat-like wing on a pivot at its root; rotate .rotation.z to flap. */
function wing(span, chord, color, side) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(span * 0.35, chord * 0.55);
  shape.lineTo(span, chord * 0.35);
  shape.lineTo(span * 0.8, -chord * 0.05);
  shape.lineTo(span * 0.62, -chord * 0.28);
  shape.lineTo(span * 0.42, -chord * 0.12);
  shape.lineTo(span * 0.22, -chord * 0.4);
  shape.lineTo(0, -chord * 0.2);
  const m = new THREE.Mesh(new THREE.ShapeGeometry(shape), mat(color, { side: THREE.DoubleSide }));
  m.rotation.x = -Math.PI / 2;
  const pivot = new THREE.Group();
  pivot.add(m);
  pivot.scale.x = side;
  return pivot;
}

/** A stand-in for a point light: a glow sprite with an 'intensity' that sets its brightness. */
function glowLight(color) {
  const f = makeFlash(color, 1.6);
  let v = 0;
  Object.defineProperty(f, 'intensity', {
    get: () => v,
    set: (x) => { v = x; f.userData.set(Math.min(1, x / 30)); },
  });
  return f;
}

function withModel(id, build) {
  const model = modelFor(id);
  if (!model) return build();
  model.userData.update = () => {};
  return model;
}

/** The Balrog of Moria: a huge shadow wreathed in flame, horned and winged, with a fiery whip. */
export function makeBalrog() {
  const model = modelFor('balrog');
  if (model) {
    const g = new THREE.Group();
    g.add(model);
    const flames = makeEmitter({ count: 160, size: 0.9, life: 1.1, spread: 0.9, velocity: [0, 2.2, 0], jitter: 0.9 });
    flames.position.y = 2.2;
    const mane = makeEmitter({ count: 70, size: 0.8, life: 0.8, spread: 0.4, velocity: [0, 1.6, -0.3], jitter: 0.5 });
    mane.position.y = 3.9;
    const light = glowLight(0xff5a10);
    light.position.y = 3;
    g.add(flames, mane, light);
    g.userData.update = (dt, t) => {
      flames.userData.update(dt);
      mane.userData.update(dt);
      light.intensity = 26 + Math.sin(t * 9) * 6;
    };
    return g;
  }
  return withModel('none', () => {
    const g = new THREE.Group();
    const ember = mat(0x1a0906, { emissive: 0xff4a10, emissiveIntensity: 0.25 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.8, 2.2, 8), ember);
    body.position.y = 1.9;
    g.add(body);
    const chest = new THREE.Mesh(new THREE.SphereGeometry(0.75, 10, 8), ember);
    chest.position.y = 3.1;
    chest.scale.set(1.2, 0.9, 0.9);
    g.add(chest);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), ember);
    head.position.set(0, 3.9, 0.2);
    g.add(head);
    [-1, 1].forEach((s) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.9, 6), mat(0x2a1a14));
      horn.position.set(s * 0.32, 4.25, 0.1);
      horn.rotation.set(-0.5, 0, -s * 0.9);
      g.add(horn);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffc040 }));
      eye.position.set(s * 0.15, 3.95, 0.58);
      g.add(eye);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 1.4, 6), ember);
      leg.position.set(s * 0.4, 0.7, 0);
      g.add(leg);
    });
    const wings = [-1, 1].map((s) => {
      const w = wing(3.2, 2.2, 0x120806, s);
      w.position.set(s * 0.5, 3.4, -0.4);
      g.add(w);
      return w;
    });
    const flames = makeEmitter({ count: 160, size: 0.9, life: 1.1, spread: 0.9, velocity: [0, 2.2, 0], jitter: 0.9 });
    flames.position.y = 2.2;
    g.add(flames);
    const mane = makeEmitter({ count: 60, size: 0.7, life: 0.7, spread: 0.35, velocity: [0, 1.6, -0.3], jitter: 0.5 });
    mane.position.set(0, 4.2, 0);
    g.add(mane);
    // The whip: a curve of fire trailing from the right hand.
    const whipPts = [];
    for (let i = 0; i < 12; i++) whipPts.push(new THREE.Vector3(1.1 + i * 0.25, 2.8 - i * 0.18, 0.6 + Math.sin(i * 0.7) * 0.3));
    const whip = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(whipPts), 24, 0.05, 5), new THREE.MeshBasicMaterial({ color: 0xff7a20 }));
    g.add(whip);
    const light = glowLight(0xff5a10);
    light.position.y = 3;
    g.add(light);
    g.userData.update = (dt, t) => {
      flames.userData.update(dt);
      mane.userData.update(dt);
      wings.forEach((w, i) => { w.rotation.z = (i ? -1 : 1) * (0.3 + Math.sin(t * 1.6) * 0.25); });
      whip.rotation.y = Math.sin(t * 2.3) * 0.5;
      light.intensity = 26 + Math.sin(t * 9) * 6;
    };
    return g;
  });
}

/** A great dragon - Smaug, red-gold - with flapping wings and fire on demand (userData.breathe). */
export function makeDragon({ color = 0x8a2a14, belly = 0xc08a3a, scale = 1, model = true } = {}) {
  const m = model && modelFor('smaug');
  if (m) {
    const g = new THREE.Group();
    g.add(m);
    const fire = makeEmitter({ count: 180, size: 0.8, life: 0.9, spread: 0.12, velocity: [0, -1.2, 7], jitter: 1.4, rate: 1 });
    fire.position.set(0, 0.6, 3);
    fire.userData.on = false;
    const light = glowLight(0xff6a20);
    light.position.set(0, -0.5, 4.5);
    g.add(fire, light);
    g.scale.setScalar(scale);
    g.userData.breathe = (on) => { fire.userData.on = on; };
    g.userData.update = (dt) => {
      fire.userData.update(dt);
      light.intensity = fire.userData.on ? 18 : Math.max(0, light.intensity - dt * 40);
    };
    return g;
  }
  return withModel('none', () => {
    const g = new THREE.Group();
    const skin = mat(color, { roughness: 0.5, metalness: 0.2 });
    // A spine of tapering segments, head to tail, along +z to -z.
    const segs = [];
    for (let i = 0; i < 14; i++) {
      const r = i < 3 ? 0.28 : 0.55 * Math.max(0.12, 1 - Math.abs(i - 5) / 9);
      const s = new THREE.Mesh(new THREE.SphereGeometry(r, 9, 7), i === 5 ? mat(belly) : skin);
      s.position.set(0, 0, 2.2 - i * 0.42);
      g.add(s);
      segs.push(s);
    }
    const head = new THREE.Group();
    const skull = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.8), skin);
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.1, 0.7), skin);
    jaw.position.set(0, -0.18, 0.05);
    head.add(skull, jaw);
    [-1, 1].forEach((s) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.5, 5), mat(0x3a2a1a));
      horn.position.set(s * 0.14, 0.2, -0.35);
      horn.rotation.x = -1.1;
      head.add(horn);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffd040 }));
      eye.position.set(s * 0.16, 0.08, 0.25);
      head.add(eye);
    });
    head.position.set(0, 0.25, 2.9);
    g.add(head);
    const wings = [-1, 1].map((s) => {
      const w = wing(3.6, 2.4, color, s);
      w.position.set(s * 0.35, 0.25, 1.1);
      g.add(w);
      return w;
    });
    const fire = makeEmitter({ count: 180, size: 0.8, life: 0.9, spread: 0.12, velocity: [0, -1.2, 7], jitter: 1.4, rate: 1 });
    fire.position.set(0, 0.1, 3.3);
    fire.userData.on = false;
    g.add(fire);
    const light = glowLight(0xff6a20);
    light.position.set(0, -0.5, 4.5);
    g.add(light);
    g.scale.setScalar(scale);
    g.userData.breathe = (on) => { fire.userData.on = on; };
    g.userData.update = (dt, t) => {
      wings.forEach((w, i) => { w.rotation.z = (i ? -1 : 1) * Math.sin(t * 3.2) * 0.7; });
      segs.forEach((s, i) => { s.position.x = Math.sin(t * 2 - i * 0.5) * 0.12 * (i / 14); });
      jaw.rotation.x = fire.userData.on ? 0.35 : 0.05;
      fire.userData.update(dt);
      light.intensity = fire.userData.on ? 18 : Math.max(0, light.intensity - dt * 40);
    };
    return g;
  });
}

/** One of the Great Eagles: brown, gold-headed, wings beating slowly. */
export function makeEagle(scale = 1) {
  return withModel('eagle', () => {
    const g = new THREE.Group();
    const brown = mat(0x5a3a1e);
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 10, 8), brown);
    body.scale.set(0.8, 0.7, 1.6);
    g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), mat(0xc8a060));
    head.position.set(0, 0.15, 0.65);
    g.add(head);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.22, 5), mat(0xe0b040));
    beak.rotation.x = Math.PI / 2;
    beak.position.set(0, 0.1, 0.86);
    g.add(beak);
    const wings = [-1, 1].map((s) => {
      const w = wing(2.6, 1.2, 0x4a2e16, s);
      w.position.set(s * 0.25, 0.1, 0.1);
      g.add(w);
      return w;
    });
    g.scale.setScalar(scale);
    const off = Math.random() * 6;
    g.userData.update = (dt, t) => { wings.forEach((w, i) => { w.rotation.z = (i ? -1 : 1) * Math.sin(t * 2.4 + off) * 0.55; }); };
    return g;
  });
}

/** A fell beast with a Nazgûl on its back. */
export function makeFellBeast(rider) {
  const g = new THREE.Group();
  const d = makeDragon({ color: 0x1c1a18, belly: 0x2a2622, scale: 0.55, model: false });
  g.add(d);
  if (rider) {
    rider.position.set(0, 0.25, 0.3);
    rider.scale.setScalar(0.8);
    g.add(rider);
  }
  g.userData.update = (dt, t) => d.userData.update(dt, t);
  return g;
}

/** A hill-troll: huge, grey-green and lumpy. Call turnToStone() at dawn. */
export function makeTroll() {
  return withModel('troll', () => {
    const g = new THREE.Group();
    const skin = mat(0x5a6048);
    const parts = [];
    const add = (geo, x, y, z, sx = 1, sy = 1, sz = 1) => {
      const m = new THREE.Mesh(geo, skin);
      m.position.set(x, y, z);
      m.scale.set(sx, sy, sz);
      g.add(m);
      parts.push(m);
      return m;
    };
    add(new THREE.SphereGeometry(0.7, 9, 7), 0, 1.6, 0, 1, 1.1, 0.8);
    add(new THREE.SphereGeometry(0.35, 8, 6), 0, 2.5, 0.15);
    add(new THREE.CylinderGeometry(0.22, 0.28, 1, 6), -0.35, 0.5, 0);
    add(new THREE.CylinderGeometry(0.22, 0.28, 1, 6), 0.35, 0.5, 0);
    add(new THREE.CylinderGeometry(0.15, 0.2, 1.2, 6), -0.8, 1.5, 0.1).rotation.z = 0.4;
    add(new THREE.CylinderGeometry(0.15, 0.2, 1.2, 6), 0.8, 1.5, 0.1).rotation.z = -0.4;
    let stone = 0;
    const grey = new THREE.Color(0x8a8a86), green = new THREE.Color(0x5a6048);
    g.userData.turnToStone = (k) => { stone = k; };
    g.userData.update = (dt, t) => {
      skin.color.copy(green).lerp(grey, stone);
      skin.emissive.copy(skin.color);
      if (stone < 0.5) g.rotation.y = Math.sin(t * 0.8 + g.position.x) * 0.3;
    };
    return g;
  });
}

/** A barrel, for the escape from the Elvenking's halls. */
export function makeBarrel() {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.36, 10), mat(0x7a5530));
  m.rotation.z = Math.PI / 2;
  const g = new THREE.Group();
  g.add(m);
  return g;
}

/** A black-sailed Corsair ship. */
export function makeShip(sail = 0x121212) {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 2.4), mat(0x2a2018));
  hull.position.y = 0.18;
  g.add(hull);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.8, 5), mat(0x3a2a1a));
  mast.position.y = 1.2;
  g.add(mast);
  const s = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.2), mat(sail, { side: THREE.DoubleSide }));
  s.position.set(0, 1.35, 0.05);
  g.add(s);
  return g;
}

/** A mûmak: a war-elephant with a tower on its back. */
export function makeMumak() {
  const g = new THREE.Group();
  const skin = mat(0x5a5048);
  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), skin);
  body.scale.set(1, 0.9, 1.5);
  body.position.y = 2.2;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 9, 7), skin);
  head.position.set(0, 2.5, 1.5);
  g.add(head);
  const legs = [[-0.6, 0.7], [0.6, 0.7], [-0.6, -0.8], [0.6, -0.8]].map(([x, z]) => {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 1.6, 7), skin);
    l.position.set(x, 0.8, z);
    g.add(l);
    return l;
  });
  [-1, 1].forEach((s) => {
    const tusk = new THREE.Mesh(new THREE.ConeGeometry(0.08, 1.4, 6), mat(0xe8e0c8));
    tusk.position.set(s * 0.35, 2.0, 2.1);
    tusk.rotation.x = 1.9;
    g.add(tusk);
  });
  const tower = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 1.1), mat(0x6a2a1a));
  tower.position.y = 3.4;
  g.add(tower);
  let phase = 0;
  g.userData.update = (dt) => {
    phase += dt * 2;
    legs.forEach((l, i) => { l.rotation.x = Math.sin(phase + (i % 3 ? Math.PI : 0)) * 0.25; });
  };
  return g;
}
