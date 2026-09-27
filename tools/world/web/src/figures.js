// Horses, ponies, riders and Gandalf's cart, built from primitives. Each has userData.walk(dt):
// the legs step in a four-beat walk (or gallop, when userData.gallop is set); walk(0) rests.
import * as THREE from 'three';
import { buildRig } from './rig.js';
import { CHARACTERS, folkSpec } from './characters.js';

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: true, emissive: color, emissiveIntensity: 0.2, ...extra });

/** A leg in two parts - forearm/gaskin and cannon with hoof - jointed at the knee or hock. */
function horseLeg(s, color, hind) {
  const hip = new THREE.Group();
  const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.055 * s, 0.04 * s, 0.3 * s, 6), mat(color));
  upper.position.y = -0.15 * s;
  hip.add(upper);
  const knee = new THREE.Group();
  knee.position.y = -0.3 * s;
  const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.028 * s, 0.025 * s, 0.27 * s, 5), mat(color));
  lower.position.y = -0.135 * s;
  const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.035 * s, 0.042 * s, 0.05 * s, 6), mat(0x2a221c));
  hoof.position.y = -0.285 * s;
  knee.add(lower, hoof);
  hip.add(knee);
  hip.userData.knee = knee;
  hip.userData.hind = hind;
  return hip;
}

/**
 * A horse, [size] its height at the withers (a horse ~0.9 beside a Man of 1, a pony ~0.55),
 * with an arched neck, a long head, mane and tail. [saddle] adds a saddle and bridle.
 */
export function makeHorse(color = 0x7a5a3a, black = false, { size = 0.9, saddle = true, mane = 0x2a1a10 } = {}) {
  const s = size / 0.9;
  const coat = black ? 0x0c0b0a : color;
  const hair = black ? 0x050505 : mane;
  const g = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 0.66 * s;
  g.add(body);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.19 * s, 0.78 * s, 9), mat(coat));
  barrel.rotation.x = Math.PI / 2;
  barrel.scale.set(0.9, 1, 1.08);
  body.add(barrel);
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.2 * s, 9, 7), mat(coat));
  chest.position.z = 0.36 * s;
  chest.scale.set(0.9, 1.05, 0.9);
  const rump = new THREE.Mesh(new THREE.SphereGeometry(0.2 * s, 9, 7), mat(coat));
  rump.position.set(0, 0.02 * s, -0.36 * s);
  body.add(chest, rump);
  // Neck and head, arched up and forward.
  const neck = new THREE.Group();
  neck.position.set(0, 0.1 * s, 0.4 * s);
  neck.rotation.x = 0.75;
  body.add(neck);
  const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09 * s, 0.15 * s, 0.46 * s, 7), mat(coat));
  neckMesh.position.y = 0.2 * s;
  neckMesh.scale.z = 1.25;
  neck.add(neckMesh);
  const maneMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04 * s, 0.46 * s, 0.1 * s), mat(hair));
  maneMesh.position.set(0, 0.22 * s, -0.12 * s);
  neck.add(maneMesh);
  const head = new THREE.Group();
  head.position.y = 0.44 * s;
  head.rotation.x = 1.34;
  neck.add(head);
  const skull = new THREE.Mesh(new THREE.CylinderGeometry(0.05 * s, 0.085 * s, 0.34 * s, 7), mat(coat));
  skull.position.y = 0.12 * s;
  skull.scale.z = 1.2;
  head.add(skull);
  for (const x of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.025 * s, 0.09 * s, 4), mat(coat));
    ear.position.set(x * 0.045 * s, -0.04 * s, -0.08 * s);
    ear.rotation.x = -1.2;
    head.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.014 * s, 5, 4), new THREE.MeshBasicMaterial({ color: black ? 0xff3010 : 0x0a0806 }));
    eye.position.set(x * 0.07 * s, 0.02 * s, -0.02 * s);
    head.add(eye);
  }
  if (saddle) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.34 * s, 0.06 * s, 0.34 * s), mat(black ? 0x1a1a1a : 0x4a2a18));
    seat.position.set(0, 0.2 * s, 0.02 * s);
    const cloth = new THREE.Mesh(new THREE.BoxGeometry(0.44 * s, 0.26 * s, 0.4 * s), mat(black ? 0x101010 : 0x2f4a2a));
    cloth.position.set(0, 0.08 * s, 0.02 * s);
    body.add(cloth, seat);
    const reins = new THREE.Mesh(new THREE.TorusGeometry(0.1 * s, 0.006 * s, 3, 8, Math.PI), mat(0x2a1a10));
    reins.position.set(0, 0.25 * s, 0.25 * s);
    reins.rotation.set(-0.4, 0, 0);
    body.add(reins);
  }
  // The tail, which swishes.
  const tail = new THREE.Group();
  tail.position.set(0, 0.1 * s, -0.52 * s);
  body.add(tail);
  const tailMesh = new THREE.Mesh(new THREE.ConeGeometry(0.06 * s, 0.5 * s, 5), mat(hair));
  tailMesh.position.y = -0.22 * s;
  tailMesh.rotation.x = Math.PI;
  tail.add(tailMesh);
  tail.rotation.x = 0.35;

  // Legs: fore at the shoulder, hind at the hip.
  const legs = [[-0.11, 0.3, false], [0.11, 0.3, false], [-0.11, -0.32, true], [0.11, -0.32, true]].map(([x, z, hind]) => {
    const l = horseLeg(s, coat, hind);
    l.position.set(x * s, -0.06 * s, z * s);
    body.add(l);
    return l;
  });
  // Walk: four beats, each leg a quarter out of step (LH, LF, RH, RF); gallop: pairs, bounding.
  const offsets = [0.25, 0.75, 0, 0.5];
  let phase = Math.random() * 6, moving = 0;
  const pose = (dt, t) => {
    const gallop = g.userData.gallop;
    if (dt > 0) phase += dt * (gallop ? 11 : 6.5);
    moving += ((dt > 0 ? 1 : 0) - moving) * Math.min(1, Math.max(dt, 0.016) * 6);
    legs.forEach((l, i) => {
      const p = phase + offsets[i] * Math.PI * 2 * (gallop ? 0.4 : 1);
      const swing = Math.sin(p) * (gallop ? 0.75 : 0.4) * moving;
      l.rotation.x = swing;
      const lift = Math.max(0, Math.cos(p)) * (gallop ? 1.2 : 0.7) * moving;
      l.userData.knee.rotation.x = l.userData.hind ? -lift * 0.8 : lift;
    });
    body.position.y = 0.66 * s + (gallop ? Math.abs(Math.sin(phase)) * 0.05 * s : Math.abs(Math.sin(phase * 2)) * 0.01 * s) * moving;
    body.rotation.x = gallop ? Math.sin(phase) * 0.06 * moving : 0;
    neck.rotation.x = 0.75 + Math.sin(phase * 2) * 0.06 * moving + (1 - moving) * Math.sin((t ?? phase) * 0.4) * 0.15;
    tail.rotation.z = Math.sin((t ?? phase) * 1.3) * 0.25;
  };
  // At rest the horse still shifts its head and swishes its tail.
  let clock = 0;
  g.userData.walk = (dt) => { clock += Math.max(dt, 0.016); pose(dt, clock); };
  g.userData.saddleY = 0.66 * s + 0.23 * s;
  return g;
}

/** A pony for hobbits and dwarves: small, shaggy, no saddle-cloth. */
export function makePony(color = 0x6a4a30, size = 0.55) {
  return makeHorse(color, false, { size, saddle: false, mane: 0x3a2a1a });
}

/**
 * A horse and its rider. [who] is a character id or folk kind ('rohan' by default); the rider
 * sits astride with the reins, and walk(dt) moves the horse under them.
 */
export function makeRider(color = 0x6a4a30, who = 'rohan', { black = false } = {}) {
  const g = new THREE.Group();
  const horse = makeHorse(color, black);
  g.add(horse);
  const named = CHARACTERS[who] && !CHARACTERS[who].folk;
  const v = Math.floor(Math.random() * 4);
  const spec = named ? CHARACTERS[who] : folkSpec(CHARACTERS[who]?.folk || who, v);
  const rider = buildRig(spec, named ? who : `${who}:${v}`);
  rider.userData.act('ride');
  const d = rider.userData.rig.d;
  rider.position.set(0, horse.userData.saddleY - d.legs, 0.02);
  g.add(rider);
  g.userData.rider = rider;
  g.userData.horse = horse;
  g.userData.walk = (dt) => {
    horse.userData.walk(dt);
    horse.userData.gallop = g.userData.gallop;
  };
  return g;
}

/** Gandalf's cart: a pony, a wooden cart with turning wheels, and the grey wizard at the reins. */
export function makeCart() {
  const g = new THREE.Group();
  const pony = makePony(0x8a8a82, 0.55);
  pony.position.z = 0.85;
  g.add(pony);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.18, 0.9), mat(0x7a5530));
  bed.position.y = 0.48;
  g.add(bed);
  const load = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.4), mat(0xa08050));
  load.position.set(0, 0.7, -0.2);
  g.add(load);
  const wheels = [-0.4, 0.4].map((x) => {
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.04, 5, 12), mat(0x4a3420));
    w.rotation.y = Math.PI / 2;
    w.position.set(x, 0.26, 0);
    g.add(w);
    return w;
  });
  const wizard = buildRig(CHARACTERS.gandalf, 'gandalf');
  wizard.userData.act('sit');
  wizard.position.set(0, 0.57 - wizard.userData.rig.d.legs * 0.5, 0.2);
  g.add(wizard);
  g.userData.walk = (dt) => {
    pony.userData.walk(dt);
    wheels.forEach((w) => { w.rotation.x -= dt * 3; });
  };
  return g;
}
