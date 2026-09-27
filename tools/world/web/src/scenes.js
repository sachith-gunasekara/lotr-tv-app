// What happens at each stop of each journey, as a short looping scene played by the travellers
// and whoever they meet there - stylised, like a diorama coming to life, not a film. Everyone
// acts: they talk, point, draw swords, shoot, cower, kneel (see ACTIONS in rig.js).
//
// A scene is { period, dist, run(ctx) }: run() builds it and returns update(t, dt), called every
// frame with t looping 0..period. Everything is placed in the travellers' local space (figure
// units: a Man is ~1 tall; +z is the way they were walking). The ctx gives:
//   cast(id)         a character: a member of the company (held for the scene), or a new one
//   hide(...ids)     keeps company members out of the scene (they're elsewhere in the story)
//   add(obj)         adds a prop or creature; obj.userData.update(dt, t) runs every frame
//   at(placeId)      another place's position in local space (for things seen in the distance)
//   stage(r)         a flat floor height (local y) above the ground within radius r
//   joint(obj, name) where a figure's joint is ('handR', 'upperL', 'head'), in local space
//   focus(x, y, z)   where the camera looks
// Objects sit on the ground unless obj.userData.ground = false (then y is local, from the stop).
import * as THREE from 'three';
import { makeEmitter, makeFire, makeFirework, makeFlash, makeBeam } from './effects.js';
import { makeBalrog, makeDragon, makeEagle, makeFellBeast, makeTroll, makeBarrel, makeShip, makeMumak, makeSpider } from './creatures.js';
import { makeCharacter, makeNazgul, makeOrc, makeGhost, makeRider } from './characters.js';

const seg = (t, a, b) => Math.min(1, Math.max(0, (t - a) / (b - a)));
const ease = (x) => x * x * (3 - 2 * x);
const lerp = (a, b, k) => a + (b - a) * k;
const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, flatShading: true, ...extra });

function put(obj, x, z, faceX, faceZ) {
  obj.position.x = x;
  obj.position.z = z;
  if (faceX !== undefined) obj.rotation.y = Math.atan2(faceX - x, faceZ - z);
}

function face(obj, x, z) {
  obj.rotation.y = Math.atan2(x - obj.position.x, z - obj.position.z);
}

/** Sets what a figure is doing (a no-op for creatures and props). */
const act = (obj, name) => obj.userData.act?.(name);

/** Plays a figure's lines: [[fromTime, action], ...] - the last one started by t. */
function script(obj, t, lines) {
  let now = lines[0][1];
  for (const [from, name] of lines) if (t >= from) now = name;
  act(obj, now);
}

/** Moves obj from a to b as k goes 0..1, facing the way it goes and walking (or running). */
function travel(obj, a, b, k, dt, run = false) {
  const kk = ease(k);
  obj.position.x = lerp(a[0], b[0], kk);
  obj.position.z = lerp(a[1], b[1], kk);
  const moving = k > 0 && k < 1;
  if (moving) obj.rotation.y = Math.atan2(b[0] - a[0], b[1] - a[1]);
  obj.userData.running?.(run && moving);
  obj.userData.walk?.(moving ? dt * (run ? 1.6 : 1) : 0);
}

/** A ring of figures around (cx, cz), all facing the middle. */
function ring(objs, r, cx = 0, cz = 0, start = 0, arc = Math.PI * 2) {
  objs.forEach((o, i) => {
    const a = start + (i / (arc >= Math.PI * 2 ? objs.length : Math.max(1, objs.length - 1))) * arc;
    put(o, cx + Math.sin(a) * r, cz + Math.cos(a) * r, cx, cz);
  });
}

/** Tips a figure over (forwards or backwards) as k goes 0..1. */
function fall(obj, k, backwards = true) {
  obj.rotation.x = (backwards ? -1 : 1) * ease(k) * 1.45;
}

/** Fades a figure out (k = 1 gone), for the Ring's invisibility and the dying Witch-king. */
function fade(obj, k) {
  obj.traverse((o) => {
    if (!o.material || o.isSprite) return;
    o.material.transparent = k > 0.01 || o.material.userData.wasTransparent;
    o.material.opacity = 1 - k * 0.92;
  });
  obj.visible = k < 0.99;
}

function blackRider() {
  const r = makeRider(0x0c0b0a, 'nazgul', { black: true });
  r.userData.gallop = true;
  return r;
}

function ringOfPower() {
  const r = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 8, 20), new THREE.MeshStandardMaterial({ color: 0xffd060, emissive: 0xffa020, emissiveIntensity: 0.9, metalness: 1, roughness: 0.2 }));
  const g = new THREE.Group();
  g.add(r);
  const glow = makeFlash(0xffc040, 0.3);
  glow.userData.set(0.8);
  g.add(glow);
  g.userData.ring = r;
  g.userData.ground = false;
  return g;
}

/** Keeps a small thing (a ring, a phial) in a figure's hand. */
function inHand(ctx, thing, obj, side = 'R', up = 0.04) {
  const p = ctx.joint(obj, side === 'R' ? 'handR' : 'handL');
  thing.position.set(p.x, p.y + up, p.z);
}

function prop(geo, color, extra) {
  return new THREE.Mesh(geo, mat(color, extra));
}

// --- The Ring-bearer --------------------------------------------------------------------------

const farewellParty = {
  // Bilbo's farewell: a speech, fireworks, the Ring - and he vanishes. Gandalf gives it to Frodo,
  // and Frodo and Sam set off.
  period: 15, dist: 22,
  run(ctx) {
    const bilbo = ctx.cast('bilbo');
    const gandalf = ctx.cast('gandalf');
    const frodo = ctx.cast('frodo');
    const sam = ctx.cast('sam');
    const folk = [0, 1, 3, 4].map((i) => ctx.cast(`hobbit:${i}`));
    const stump = ctx.add(prop(new THREE.CylinderGeometry(0.22, 0.26, 0.25, 8), 0x6a4a2a));
    put(stump, 0, 2);
    const works = [0xffd070, 0x9ad0ff, 0xff8ab0, 0xb0ff9a].map((c, i) => {
      const f = ctx.add(makeFirework(c, 5 + i, i * 0.8));
      put(f, -3 + i * 2, 6);
      return f;
    });
    // Gandalf's dragon firework, roaring over the Party Field.
    const dragon = ctx.add(makeDragon({ color: 0xff7a20, belly: 0xffd060, scale: 0.28 }));
    dragon.userData.ground = false;
    const theRing = ctx.add(ringOfPower());
    const base = ctx.stage(3);
    return (t, dt) => {
      const a = t * 0.8;
      dragon.position.set(Math.sin(a) * 4, base + 4.5 + Math.sin(t * 1.7) * 0.4, 5 + Math.cos(a) * 2);
      dragon.rotation.y = a + Math.PI / 2;
      dragon.userData.breathe(t % 4 < 1.2);
      // Bilbo on the stump: his speech, then the Ring - and he's gone.
      put(bilbo, 0, 2, 0, 0);
      bilbo.userData.lift = 0.25;
      script(bilbo, t, [[0, 'talk'], [3.2, 'wave'], [4.6, 'hold']]);
      fade(bilbo, seg(t, 5, 5.6) * (1 - seg(t, 14.5, 14.9)));
      folk.forEach((h, i) => {
        put(h, -1.6 + i * 1.05, 0.8 + (i % 2) * 0.4, 0, 2);
        script(h, t, [[0, i % 2 ? 'cheer' : 'dance'], [2.2, 'listen'], [5.3, 'cower'], [7, i % 2 ? 'talk' : 'drink']]);
      });
      // The Ring lies where he stood; Gandalf picks it up and gives it to Frodo.
      theRing.visible = t > 5.4 && t < 12.6;
      if (t < 8.5) theRing.position.set(0, base + 0.3, 2);
      travel(gandalf, [2.4, 1], [0.5, 1.9], seg(t, 6.2, 7.8), dt);
      if (t < 6.2) put(gandalf, 2.4, 1, 0, 2);
      script(gandalf, t, [[0, 'smoke'], [5.4, 'look'], [7.8, 'hold'], [9.2, 'talk'], [12.5, 'wave']]);
      if (t >= 8.5 && t < 9.4) inHand(ctx, theRing, gandalf);
      if (t >= 9.4) inHand(ctx, theRing, frodo);
      if (t > 7.8 && t < 12.5) face(gandalf, frodo.position.x, frodo.position.z);
      // Frodo takes it; then he and Sam shoulder their packs and go.
      travel(frodo, [-0.4, 0.6], [-0.6, 1.6], seg(t, 7.6, 8.8), dt);
      if (t < 7.6) put(frodo, -0.4, 0.6, 0, 2);
      script(frodo, t, [[0, 'listen'], [5.3, 'cower'], [7, 'idle'], [9.3, 'hold'], [12.2, 'idle']]);
      if (t > 8.8 && t < 12.2) face(frodo, gandalf.position.x, gandalf.position.z);
      put(sam, -1.2, 0.2, 0, 2);
      script(sam, t, [[0, 'cheer'], [5.3, 'cower'], [7, 'listen'], [12, 'idle']]);
      if (t > 12.2) {
        travel(frodo, [-0.6, 1.6], [-1.2, 6.5], seg(t, 12.2, 14.6), dt);
        travel(sam, [-1.2, 0.2], [-1.8, 6], seg(t, 12.2, 14.6), dt);
      }
      void works;
    };
  },
};

const prancingPony = {
  // Strider in the corner of the Prancing Pony; then the Black Riders ride into Bree.
  period: 13, dist: 20,
  run(ctx) {
    const riders = [0, 1, 2, 3].map(() => ctx.add(blackRider()));
    const hobbits = ['frodo', 'sam', 'merry', 'pippin'].map((id) => ctx.cast(id));
    const strider = ctx.cast('aragorn');
    const table = ctx.add(prop(new THREE.BoxGeometry(0.9, 0.05, 0.5), 0x6a4a2a));
    table.userData.lift = 0.3;
    put(table, -0.2, 0.2);
    const butterbur = ctx.cast('bree:0');
    return (t, dt) => {
      hobbits.forEach((h, i) => {
        const home = [-0.55 + i * 0.35, -0.25 + (i % 2) * 0.9];
        const hide = ease(seg(t, 4, 5.5)) * (1 - ease(seg(t, 10, 11.5)));
        put(h, lerp(home[0], 0.6 + i * 0.25, hide), lerp(home[1], -0.9, hide), 0, 2);
        if (hide < 0.05) face(h, -0.2, 0.2);
        script(h, t, [[0, i === 3 ? 'drink' : 'talk'], [2, 'listen'], [4, 'cower'], [11.5, 'talk']]);
      });
      // Strider watches from under his hood, beckons them over, then stands before them.
      travel(strider, [1.6, 1.2], [1.0, 0.1], seg(t, 3.6, 4.6), dt);
      if (t < 3.6) put(strider, 1.6, 1.2, 0, 0);
      script(strider, t, [[0, 'smoke'], [2.2, 'beckon'], [4.6, 'guard'], [10.5, 'talk']]);
      if (t > 4.6 && t < 10.5) face(strider, 0, 6);
      put(butterbur, -1.5, 1.2, -0.2, 0.2);
      script(butterbur, t, [[0, 'talk'], [4, 'cower'], [11, 'talk']]);
      riders.forEach((r, i) => {
        const a = i * 1.4 - 2;
        travel(r, [a * 2.2, 8], [a * 0.6, 3], seg(t, 3 + i * 0.4, 6.5 + i * 0.4), dt);
        if (t > 8.5) travel(r, [a * 0.6, 3], [a * 2.2, 8], seg(t, 8.5, 11.5), dt);
        r.userData.walk(t > 6.9 && t < 8.5 ? 0 : dt);
      });
    };
  },
};

const stabbedOnWeathertop = {
  period: 12, dist: 17,
  run(ctx) {
    const frodo = ctx.cast('frodo');
    const others = ['sam', 'merry', 'pippin'].map((id) => ctx.cast(id));
    const strider = ctx.cast('aragorn');
    put(frodo, 0, 0.3, 0, 3);
    others.forEach((o, i) => put(o, -0.7 + i * 0.7, -0.5, 0, 2));
    const wraiths = [0, 1, 2, 3, 4].map((i) => ctx.add(makeNazgul(i === 2)));
    const witchKing = wraiths[2];
    const flash = ctx.add(makeFlash(0xf4f0ff, 2.5));
    flash.userData.ground = false;
    const torch = ctx.add(makeFire(0.35));
    torch.userData.ground = false;
    const base = ctx.stage(1);
    return (t, dt) => {
      // The Nine (five of them) close in from the dark, blades drawn.
      wraiths.forEach((w, i) => {
        const a = (i - 2) * 0.55;
        const r = lerp(4, 1.1, ease(seg(t, 0, 4))) + ease(seg(t, 8, 10.5)) * 4;
        put(w, Math.sin(a) * r, 0.3 + Math.cos(a) * r, 0, 0.3);
        w.userData.walk(t < 4 || (t > 8 && t < 10.5) ? dt : 0);
        act(w, t > 7.5 ? 'cower' : 'guard');
      });
      // The hobbits draw their swords - and fall back.
      others.forEach((o) => script(o, t, [[0, 'look'], [1.5, 'guard'], [3.6, 'cower'], [9.5, 'mourn']]));
      // Frodo puts on the Ring: the wraith-world flares white...
      script(frodo, t, [[0, 'look'], [3, 'hold'], [5.8, 'idle']]);
      flash.position.set(0, base + 0.6, 0.3);
      flash.userData.set(seg(t, 4.2, 4.6) * (1 - seg(t, 6.5, 7.5)) * 0.9);
      fade(frodo, seg(t, 4.2, 4.6) * (1 - seg(t, 6.2, 6.6)) * 0.7);
      // ...the Witch-king strikes, and Frodo falls.
      const lunge = ease(seg(t, 5.0, 5.6)) * (1 - seg(t, 7, 8));
      witchKing.position.z = lerp(witchKing.position.z, 0.9, lunge);
      if (t > 4.8 && t < 6) act(witchKing, 'strike');
      fall(frodo, seg(t, 5.8, 6.4) * (1 - seg(t, 11, 11.8)));
      // Strider leaps in with fire and sword.
      travel(strider, [1.6, -1.2], [0.7, 1.4], seg(t, 6.3, 7.3), dt, true);
      if (t < 6.3) put(strider, 1.6, -1.2, 0, 1);
      script(strider, t, [[0, 'sentry'], [6.3, 'idle'], [7.2, 'strike'], [10.5, 'kneel']]);
      if (t > 10.5) face(strider, frodo.position.x, frodo.position.z);
      const hand = ctx.joint(strider, 'handL');
      torch.position.set(hand.x, hand.y + 0.15, hand.z);
      torch.userData.set(t > 6.2 && t < 10.5);
    };
  },
};

const councilOfElrond = {
  // Elrond's council: Boromir wants the Ring, Gimli's axe shatters on it, and Frodo says he'll
  // take it. One by one the others pledge themselves.
  period: 14, dist: 15,
  run(ctx) {
    const nine = ['frodo', 'sam', 'merry', 'pippin', 'gandalf', 'aragorn', 'legolas', 'gimli', 'boromir'].map((id) => ctx.cast(id));
    const [frodo, sam, merry, pippin, gandalf, aragorn, legolas, gimli, boromir] = nine;
    const elrond = ctx.cast('elrond');
    ring([gandalf, aragorn, legolas, gimli, boromir, elrond], 1.7, 0, 0.9, Math.PI * 0.35, Math.PI * 1.3);
    put(frodo, -1.5, 0.1, 0, 0.9);
    const plinth = ctx.add(prop(new THREE.CylinderGeometry(0.25, 0.3, 0.5, 8), 0xd8d0c0));
    put(plinth, 0, 0.9);
    const theRing = ctx.add(ringOfPower());
    const sparks = ctx.add(makeEmitter({ count: 50, color: 0xffe0a0, endColor: 0x402000, size: 0.25, life: 0.6, spread: 0.05, velocity: [0, 1.5, 0], jitter: 3, gravity: 4, rate: 0 }));
    sparks.userData.ground = false;
    const base = ctx.stage(0.5);
    const gimliHome = gimli.position.clone();
    return (t, dt) => {
      theRing.position.set(0, base + 0.58 + Math.sin(t * 2) * 0.02, 0.9);
      theRing.userData.ring.rotation.y = t;
      script(elrond, t, [[0, 'talk'], [2, 'listen'], [9, 'point']]);
      script(boromir, t, [[0, 'listen'], [0.8, 'talk'], [2.2, 'idle']]);
      // Gimli strikes the Ring with his axe - which shatters.
      const toRing = ease(seg(t, 2.2, 3)) * (1 - ease(seg(t, 4.2, 5)));
      gimli.position.set(lerp(gimliHome.x, 0.35, toRing), gimli.position.y, lerp(gimliHome.z, 0.65, toRing));
      script(gimli, t, [[0, 'listen'], [3, 'chop'], [3.8, 'cower'], [5, 'idle'], [11.2, 'raise']]);
      sparks.position.set(0, base + 0.6, 0.9);
      sparks.userData.on = t > 3.5 && t < 3.65;
      // "I will take it." Frodo steps forward, and the others come to his side.
      travel(frodo, [-1.5, 0.1], [-0.7, 0.35], seg(t, 5.8, 6.8), dt);
      script(frodo, t, [[0, 'listen'], [6.8, 'volunteer'], [8.5, 'idle']]);
      travel(sam, [-3, -1.5], [-1.1, 0], seg(t, 8, 9), dt, true);
      travel(merry, [-3.3, -1.2], [-1.4, 0.3], seg(t, 9.2, 10.2), dt, true);
      travel(pippin, [-3.5, -0.9], [-1.1, 0.65], seg(t, 9.4, 10.4), dt, true);
      [sam, merry, pippin].forEach((h) => script(h, t, [[0, 'idle'], [10.4, 'cheer'], [12, 'idle']]));
      script(gandalf, t, [[0, 'listen'], [7.5, 'volunteer'], [9, 'smoke']]);
      script(aragorn, t, [[0, 'listen'], [9.8, 'guard'], [11, 'idle']]);
      script(legolas, t, [[0, 'listen'], [10.5, 'bowdown'], [11.6, 'idle']]);
    };
  },
};

const bridgeOfKhazadDum = {
  period: 13, dist: 17,
  run(ctx) {
    const y0 = ctx.stage(3.5) + 0.6;
    ctx.focus(0, y0 + 0.8, 1.2);
    const flat = (o, lift = 0) => { o.userData.ground = false; o.position.y = y0 + lift; return o; };
    const stone = mat(0x3a3632), dark = new THREE.MeshBasicMaterial({ color: 0x050302, side: THREE.BackSide });
    // The hall of Khazad-dûm: a floor of dark stone around a chasm with no bottom, and great pillars.
    const floor = flat(ctx.add(new THREE.Mesh(new THREE.RingGeometry(1.6, 5.5, 40), new THREE.MeshStandardMaterial({ color: 0x2a2622, side: THREE.DoubleSide }))), -0.01);
    floor.rotation.x = -Math.PI / 2;
    put(floor, 0, 1.5);
    const pit = flat(ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 12, 32, 1, true), dark)), -6);
    put(pit, 0, 1.5);
    const voidDisc = flat(ctx.add(new THREE.Mesh(new THREE.CircleGeometry(1.6, 32), new THREE.MeshBasicMaterial({ color: 0x030201 }))), -0.4);
    voidDisc.rotation.x = -Math.PI / 2;
    put(voidDisc, 0, 1.5);
    const depths = flat(ctx.add(makeEmitter({ count: 70, size: 1.1, life: 1.4, spread: 1.2, velocity: [0, 0.9, 0], jitter: 0.4 })), -0.35);
    put(depths, 0, 1.5);
    [-1.1, -0.5, 0.5, 1.1].forEach((a) => {
      const pillar = flat(ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 3.5, 8), stone)), 1.75);
      put(pillar, Math.sin(a) * 4, 1.5 + Math.cos(a) * 4);
    });
    const bridgeNear = flat(ctx.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.7), stone)));
    const bridgeFar = flat(ctx.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.7), stone)));
    put(bridgeNear, 0, 0.7);
    put(bridgeFar, 0, 2.3);
    const gandalf = flat(ctx.cast('gandalf'), 0.04);
    const ids = ['frodo', 'sam', 'merry', 'pippin', 'aragorn', 'legolas', 'gimli', 'boromir'];
    const company = ids.map((id) => flat(ctx.cast(id)));
    const [frodo, , , , aragorn, legolas, , boromir] = company;
    company.forEach((c, i) => put(c, -1.2 + (i % 4) * 0.8, -0.6 - Math.floor(i / 4) * 0.6, 0, 2));
    const balrog = flat(ctx.add(makeBalrog()), -6);
    balrog.scale.setScalar(0.55);
    const staff = flat(ctx.add(makeFlash(0xffffff, 1.2)), 1.1);
    return (t, dt) => {
      // The Balrog rises out of the dark on the far side and strides onto the bridge...
      const onBridge = ease(seg(t, 3.2, 4.6));
      balrog.position.set(0, y0 - 6 + ease(seg(t, 0, 3)) * 6.2, lerp(3.9, 3.1, onBridge));
      balrog.rotation.y = Math.PI;
      // ..."You shall not pass!" - the staff blazes, the bridge breaks under it, it falls...
      put(gandalf, 0, 1.2, 0, 3);
      script(gandalf, t, [[0, 'guard'], [3, 'cast'], [4.4, 'chop'], [5.2, 'raise'], [6.6, 'idle'], [7.4, 'reach']]);
      const staffAt = ctx.joint(gandalf, 'handR');
      staff.position.set(staffAt.x, staffAt.y + 0.8, staffAt.z);
      staff.userData.set(seg(t, 3.5, 4) * (1 - seg(t, 5.4, 6)));
      const breakK = ease(seg(t, 5, 6.5));
      bridgeFar.rotation.x = breakK * 1.2;
      bridgeFar.position.y = y0 - breakK * 5;
      balrog.position.y -= ease(seg(t, 5.2, 7.2)) * 9;
      // ...but the whip catches Gandalf, and he falls with it: "Fly, you fools!"
      gandalf.position.y = y0 + 0.04 - ease(seg(t, 7.4, 9)) * 7;
      gandalf.rotation.x = seg(t, 7, 7.6) * 0.5;
      if (t > 12.5 || t < 0.05) {
        bridgeFar.rotation.x = 0;
        bridgeFar.position.y = y0;
      }
      // The company: Legolas shoots, Aragorn and Boromir hold their ground, Frodo cries out.
      script(legolas, t, [[0, 'shoot'], [5, 'look'], [9, 'mourn']]);
      script(aragorn, t, [[0, 'guard'], [7.4, 'reach'], [9, 'mourn']]);
      script(boromir, t, [[0, 'guard'], [7.4, 'idle'], [8.5, 'hold']]);
      script(frodo, t, [[0, 'look'], [7.4, 'reach'], [9.3, 'mourn']]);
      company.slice(1, 4).concat(company[6]).forEach((c) => script(c, t, [[0, 'cower'], [7.4, 'look'], [9, 'mourn']]));
      void dt;
    };
  },
};

const mirrorOfGaladriel = {
  // Galadriel's mirror, her test - she shows what she would be with the Ring - and her gift of
  // the Phial to Frodo.
  period: 13, dist: 14,
  run(ctx) {
    const galadriel = ctx.cast('galadriel');
    const light = ctx.add(makeFlash(0xe8f0ff, 1.4));
    light.userData.ground = false;
    const basin = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.2, 0.4, 16), new THREE.MeshStandardMaterial({ color: 0xd8dde8, metalness: 0.9, roughness: 0.15 })));
    put(basin, 0, 0.9);
    const water = ctx.add(makeFlash(0x9ac0ff, 0.35));
    water.userData.ground = false;
    const frodo = ctx.cast('frodo');
    const phial = ctx.add(makeFlash(0xf0f8ff, 0.4));
    phial.userData.ground = false;
    const base = ctx.stage(1);
    return (t, dt) => {
      put(galadriel, 0, 1.6, 0, 0);
      put(frodo, 0, 0.35, 0, 1);
      script(galadriel, t, [[0, 'talk'], [3, 'point'], [5, 'cast'], [7.2, 'mourn'], [9, 'hold'], [10.5, 'reach']]);
      script(frodo, t, [[0, 'listen'], [2.8, 'mourn'], [5, 'cower'], [7.2, 'listen'], [10.8, 'hold']]);
      water.position.set(0, base + 0.42, 0.9);
      water.userData.set(0.3 + seg(t, 3, 4) * (1 - seg(t, 6, 7)) * 0.6);
      // Her test: she grows terrible and bright, then is herself again.
      light.position.set(0, base + 1.1, 1.6);
      light.userData.set(0.5 + Math.sin(t * 1.4) * 0.15 + seg(t, 5, 5.6) * (1 - seg(t, 6.8, 7.6)) * 0.8);
      galadriel.scale.setScalar(1 + seg(t, 5, 5.6) * (1 - seg(t, 6.8, 7.6)) * 0.35);
      // The gift: the light of Eärendil's star, in a phial.
      const give = seg(t, 9.6, 10.8);
      if (t > 9) {
        const from = ctx.joint(galadriel, 'handR'), to = ctx.joint(frodo, 'handR');
        phial.position.set(lerp(from.x, to.x, give), lerp(from.y, to.y, give) + 0.05, lerp(from.z, to.z, give));
      }
      phial.userData.set(t > 9 ? 0.8 : 0);
      void dt;
    };
  },
};

const breakingOfTheFellowship = {
  // Amon Hen: Boromir defends Merry and Pippin, three black arrows bring him down, the Uruk-hai
  // carry the hobbits off - and Frodo and Sam row away across the river alone.
  period: 13, dist: 20,
  run(ctx) {
    const boromir = ctx.cast('boromir');
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    const aragorn = ctx.cast('aragorn');
    const legolas = ctx.cast('legolas');
    const gimli = ctx.cast('gimli');
    const frodo = ctx.cast('frodo');
    const sam = ctx.cast('sam');
    const boat = ctx.add(prop(new THREE.CylinderGeometry(0.22, 0.22, 1.2, 8, 1, false, Math.PI / 2, Math.PI), 0x9a9a8a, { side: THREE.DoubleSide }));
    boat.rotation.set(Math.PI / 2, 0, Math.PI);
    boat.userData.lift = 0.2;
    const uruks = [0, 1, 2, 3, 4, 5].map(() => ctx.add(makeOrc()));
    const lurtz = uruks[5];
    const arrows = [0, 1, 2].map(() => {
      const a = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.45, 4), mat(0x1a1a1a)));
      a.userData.ground = false;
      return a;
    });
    const base = ctx.stage(3);
    return (t, dt) => {
      put(boromir, 0, 0.6, 0, 3);
      script(boromir, t, [[0, 'strike'], [3.4, 'guard'], [5.4, 'kneel'], [7, 'mourn']]);
      boromir.userData.pose.crouch = 0;
      fall(boromir, seg(t, 7.5, 8.5));
      uruks.forEach((u, i) => {
        if (i === 5) return;
        travel(u, [-2.5 + i, 7], [-1.2 + i * 0.5, 1.8], seg(t, 0, 2.5), dt, true);
        if (t > 2.5 && t < 6) act(u, 'strike');
      });
      // Lurtz draws his bow: three black arrows.
      put(lurtz, -1, 3.2, 0, 0.6);
      act(lurtz, t > 2.8 && t < 5.4 ? 'shoot' : 'guard');
      arrows.forEach((a, i) => {
        const hit = seg(t, 3.2 + i * 0.9, 3.5 + i * 0.9);
        a.visible = t > 3.2 + i * 0.9;
        a.position.set(lerp(-1, -0.05 + i * 0.05, hit), base + 0.55 + i * 0.08, lerp(3, 0.72, hit));
        a.rotation.x = Math.PI / 2;
      });
      // The Uruks carry off Merry and Pippin, struggling.
      const carry = seg(t, 6, 10);
      [merry, pippin].forEach((h, i) => {
        if (carry > 0) {
          travel(h, [i ? 0.4 : -0.4, 0.2], [(i ? 1 : -1) * 2, 7], carry, dt);
          h.userData.lift = 0.6 * Math.min(1, carry * 4);
          act(h, 'struggle');
        } else {
          h.userData.lift = 0;
          put(h, i ? 0.4 : -0.4, 0.2, 0, 3);
          act(h, t < 2.5 ? 'look' : 'guard');
        }
      });
      if (carry > 0) uruks.slice(0, 2).forEach((u, i) => travel(u, [-1.2 + i * 0.5, 1.8], [(i ? 1 : -1) * 2, 7.2], carry, dt, true));
      // Aragorn, Legolas and Gimli come running, too late.
      travel(aragorn, [2.5, -1.5], [0.5, 0.9], seg(t, 7.5, 9), dt, true);
      if (t < 7.5) put(aragorn, 2.5, -1.5, 0, 2);
      script(aragorn, t, [[0, 'idle'], [9, 'kneel']]);
      travel(legolas, [3.2, -1.2], [1.5, 1.4], seg(t, 8, 9.5), dt, true);
      if (t < 8) put(legolas, 3.2, -1.2, 0, 2);
      script(legolas, t, [[0, 'idle'], [9.5, 'shoot']]);
      travel(gimli, [3.4, -2], [1.6, 0.3], seg(t, 8.3, 10), dt, true);
      if (t < 8.3) put(gimli, 3.4, -2, 0, 2);
      script(gimli, t, [[0, 'idle'], [10, 'chop']]);
      // Far off, Frodo and Sam in a boat, rowing for the eastern shore.
      const row = seg(t, 0, 13);
      put(boat, lerp(-4.5, -6.5, row), lerp(3, 7, row));
      boat.rotation.y = -0.5;
      [frodo, sam].forEach((h, i) => {
        put(h, boat.position.x + (i ? 0.25 : -0.2) * Math.sin(-0.5), boat.position.z + (i ? 0.25 : -0.2) * Math.cos(-0.5), boat.position.x - 3, boat.position.z + 6);
        h.userData.lift = 0.12;
        act(h, i ? 'row' : 'look');
      });
    };
  },
};

const deadMarshes = {
  period: 10, dist: 13,
  run(ctx) {
    const faces = [0, 1, 2, 3, 4, 5].map((i) => {
      const g = ctx.add(makeGhost());
      g.rotation.x = -Math.PI / 2;
      g.userData.lift = -0.05;
      put(g, -2 + (i % 3) * 1.8, 1 + Math.floor(i / 3) * 1.6);
      return g;
    });
    [0, 1, 2, 3].forEach((i) => {
      const e = ctx.add(makeEmitter({ count: 20, color: 0xd8ffe8, endColor: 0x103020, size: 0.3, life: 2, spread: 0.1, velocity: [0, 0.15, 0], jitter: 0.1 }));
      put(e, -1.5 + i, 0.8 + (i % 2) * 1.5);
      e.userData.lift = 0.25;
    });
    const frodo = ctx.cast('frodo');
    const gollum = ctx.cast('gollum');
    const sam = ctx.cast('sam');
    return (t, dt) => {
      // "Don't follow the lights." Gollum leads, picking his way.
      travel(gollum, [1.4, 0.2], [0.6, 1.6], seg(t, 0, 2), dt);
      if (t > 2) put(gollum, 0.6, 1.6, frodo.position.x, frodo.position.z);
      script(gollum, t, [[0, 'crawl'], [2, 'gloat'], [5.2, 'crawl'], [7, 'gloat']]);
      put(sam, -0.6, -0.3, frodo.position.x, frodo.position.z);
      script(sam, t, [[0, 'look'], [4.5, 'reach'], [7.5, 'idle']]);
      // Frodo is drawn to the faces in the water - and falls in, until Gollum pulls him out.
      travel(frodo, [0, 0], [-0.9, 1.6], seg(t, 2, 5) * (1 - seg(t, 6.5, 8.5)), dt);
      script(frodo, t, [[0, 'idle'], [2, 'mourn'], [4, 'reach'], [6, 'cower'], [8.5, 'idle']]);
      frodo.rotation.x = seg(t, 4, 5) * (1 - seg(t, 6, 7)) * 0.6;
      faces.forEach((f, i) => { f.userData.material.opacity = 0.3 + Math.sin(t * 2 + i) * 0.15; });
    };
  },
};

const theBlackGate = {
  period: 10, dist: 21,
  run(ctx) {
    const march = [...Array(10)].map((_, i) => ctx.add(makeOrc(i % 3 ? 'orc' : 'uruk')));
    const frodo = ctx.cast('frodo');
    const sam = ctx.cast('sam');
    const gollum = ctx.cast('gollum');
    return (t, dt) => {
      march.forEach((o, i) => {
        const k = ((t / 10) + i / 10) % 1;
        travel(o, [4 - (i % 2) * 0.6, -3], [0 - (i % 2) * 0.6, 4], k, dt);
      });
      // Hidden in the rocks, watching the gate open for the host - "It's no good".
      put(frodo, -1.0, -0.9, 0.5, 0.5);
      put(sam, -0.65, -0.95, 0.5, 0.5);
      put(gollum, -0.3, -0.85, frodo.position.x, frodo.position.z);
      script(frodo, t, [[0, 'kneel'], [5, 'look'], [7, 'kneel']]);
      script(sam, t, [[0, 'kneel'], [2.5, 'point'], [4, 'kneel']]);
      script(gollum, t, [[0, 'crawl'], [5.5, 'gloat'], [8, 'crawl']]);
    };
  },
};

const faramirAtOsgiliath = {
  // Faramir's men hold Osgiliath; a fell beast comes over, Frodo lifts the Ring to it and Sam
  // pulls him down. Faramir lets them go.
  period: 12, dist: 18,
  run(ctx) {
    const beast = ctx.add(makeFellBeast(makeNazgul()));
    beast.userData.ground = false;
    const frodo = ctx.cast('frodo');
    const sam = ctx.cast('sam');
    const gollum = ctx.cast('gollum');
    const faramir = ctx.cast('faramir');
    const men = [0, 1, 2].map((i) => ctx.cast(`gondor:${i}`));
    const ringGlow = ctx.add(makeFlash(0xffc040, 0.3));
    ringGlow.userData.ground = false;
    const base = ctx.stage(2);
    return (t, dt) => {
      const a = t * 0.9;
      beast.position.set(Math.sin(a) * 3, base + 3.5 - seg(t, 3, 5) * 1.5 + seg(t, 6, 8) * 1.5, 1.5 + Math.cos(a) * 2.5);
      beast.rotation.y = a + Math.PI / 2;
      put(frodo, 0, 0.5, beast.position.x, beast.position.z);
      script(frodo, t, [[0, 'look'], [3, 'reach'], [5.4, 'idle'], [9, 'listen']]);
      // Frodo holds the Ring up to the Nazgûl - and Sam pulls him down.
      const hand = ctx.joint(frodo, 'handR');
      ringGlow.position.set(hand.x, hand.y + 0.05, hand.z);
      ringGlow.userData.set(seg(t, 3, 4) * (1 - seg(t, 5, 5.5)));
      travel(sam, [-0.8, -0.2], [-0.15, 0.4], seg(t, 4.8, 5.4), dt, true);
      if (t < 4.8) put(sam, -0.8, -0.2, 0, 1);
      script(sam, t, [[0, 'look'], [5.4, 'hold'], [7, 'mourn'], [9, 'listen']]);
      frodo.rotation.x = -seg(t, 5.4, 6) * (1 - seg(t, 8, 9)) * 1.3;
      // Faramir's men with bows and blades; then he sets them free.
      put(faramir, 1.8, 1.2, 0, 0.5);
      script(faramir, t, [[0, 'guard'], [6, 'look'], [8.5, 'talk'], [10.5, 'point']]);
      men.forEach((m, i) => {
        put(m, 1.4 + i * 0.6, 2.2 + (i % 2) * 0.4, 0, 6);
        act(m, t > 3 && t < 8 ? 'guard' : 'sentry');
      });
      put(gollum, 2.6, 0.2, 0, 0.5);
      act(gollum, 'cower');
    };
  },
};

const cirithUngol = {
  // The Morgul host rides out under the green beam; up the stairs, Gollum slinks off - and
  // Shelob comes out of the dark, until Sam lifts the Phial.
  period: 14, dist: 21,
  run(ctx) {
    const beam = ctx.add(makeBeam(0x7dffb0, 40, 0.3));
    beam.userData.ground = false;
    const host = [0, 1, 2, 3, 4].map(() => ctx.add(blackRider()));
    const base = ctx.stage(1);
    const frodo = ctx.cast('frodo');
    const sam = ctx.cast('sam');
    const gollum = ctx.cast('gollum');
    const shelob = ctx.add(makeSpider(0.9));
    const phial = ctx.add(makeFlash(0xf0f8ff, 1.6));
    phial.userData.ground = false;
    ctx.focus(0, base + 1, 0);
    return (t, dt) => {
      beam.position.set(0, base + 20, 0);
      beam.material.opacity = 0.25 + seg(t, 1, 1.5) * (1 - seg(t, 3, 5)) * 0.6;
      host.forEach((r, i) => travel(r, [0, 0.4], [3 + i * 0.4, -4 - i * 0.8], seg(t, 3 + i * 0.4, 9), dt));
      put(frodo, -0.7, -0.9, 0, 0);
      put(sam, -0.35, -1.0, 0, 0);
      script(frodo, t, [[0, 'kneel'], [5, 'idle'], [8, 'cower']]);
      script(sam, t, [[0, 'kneel'], [5, 'idle'], [9, 'raise'], [12, 'guard']]);
      // Gollum slips away up the stairs.
      travel(gollum, [0, -0.85], [-2.5, -3.5], seg(t, 5.5, 7.5), dt);
      if (t < 5.5) put(gollum, 0, -0.85, 0, 0);
      act(gollum, t < 5.5 ? 'kneel' : 'crawl');
      gollum.visible = t < 7.4;
      // Shelob.
      travel(shelob, [-4.5, 1.5], [-1.9, 0.2], seg(t, 7, 9.5), dt);
      if (t > 10.2) travel(shelob, [-1.9, 0.2], [-4.8, 2], seg(t, 10.2, 12.5), dt);
      if (t < 7) put(shelob, -4.5, 1.5);
      if (t > 9.5 && t < 10.2) face(shelob, sam.position.x, sam.position.z);
      shelob.visible = t > 6.5 && t < 12.6;
      const hand = ctx.joint(sam, 'handR');
      phial.position.set(hand.x, hand.y + 0.1, hand.z);
      phial.userData.set(seg(t, 9, 9.5) * (1 - seg(t, 12, 12.8)));
    };
  },
};

const crackOfDoom = {
  period: 14, dist: 17,
  run(ctx) {
    const base = ctx.stage(2);
    // Orodruin: a dark cone of ash with fire in its throat; the hobbits on the rim.
    const top = base + 2;
    ctx.focus(0, top + 0.4, 0);
    const cone = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(1.6, 3.6, 2.2, 24, 1, true), mat(0x2a1e18, { side: THREE.DoubleSide, emissive: 0x3a1004, emissiveIntensity: 0.4 })));
    cone.userData.ground = false;
    cone.position.set(0, base + 0.9, 0);
    const rim = ctx.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1.6, 24), mat(0x2a1e18, { side: THREE.DoubleSide })));
    rim.userData.ground = false;
    rim.rotation.x = -Math.PI / 2;
    rim.position.set(0, top - 0.1, 0);
    const lava = ctx.add(new THREE.Mesh(new THREE.CircleGeometry(0.85, 24), new THREE.MeshBasicMaterial({ color: 0xff5a10 })));
    lava.userData.ground = false;
    lava.rotation.x = -Math.PI / 2;
    lava.position.set(0, top - 0.2, 0);
    const heat = ctx.add(makeFire(1.1));
    heat.userData.ground = false;
    heat.position.set(0, top - 0.25, 0);
    const onRim = (o) => { o.userData.ground = false; o.position.y = top - 0.1; return o; };
    const frodo = onRim(ctx.cast('frodo'));
    const sam = onRim(ctx.cast('sam'));
    const gollum = onRim(ctx.cast('gollum'));
    const theRing = ctx.add(ringOfPower());
    const eruption = ctx.add(makeEmitter({ count: 220, color: 0xff7a20, endColor: 0x301008, size: 1.1, life: 2.4, spread: 0.6, velocity: [0, 6, 0], jitter: 3, gravity: 2.5, rate: 1 }));
    eruption.userData.ground = false;
    eruption.position.set(0, top, 0);
    const eagles = [0, 1, 2].map(() => {
      const e = ctx.add(makeEagle(0.5));
      e.userData.ground = false;
      return e;
    });
    return (t, dt) => {
      put(frodo, 0, -1.08, 0, 0);
      put(sam, -0.75, -1.18, 0, 0);
      // "The Ring is mine." Frodo holds it over the fire - Gollum leaps and bites it away...
      script(frodo, t, [[0, 'hold'], [2, 'cower'], [3.2, 'reach'], [6, 'kneel'], [8.5, 'mourn']]);
      script(sam, t, [[0, 'reach'], [3, 'cower'], [6, 'hold'], [8.5, 'mourn']]);
      travel(gollum, [1.05, -0.9], [0.15, -0.95], seg(t, 2, 3), dt);
      if (t < 2) put(gollum, 1.05, -0.9, 0, 0);
      // ...dances with it on the brink, and topples into the fire.
      script(gollum, t, [[0, 'crawl'], [2, 'crawl'], [3, 'cheer'], [4.5, 'reach']]);
      const drop = ease(seg(t, 4.5, 6));
      if (t > 4.5) put(gollum, 0.15, lerp(-0.95, 0, drop));
      gollum.position.y = top - 0.1 - drop * 1.2;
      theRing.visible = t < 6.2;
      if (t < 2.2) inHand(ctx, theRing, frodo);
      else if (t < 4.5) inHand(ctx, theRing, gollum);
      else theRing.position.set(0.15, top + 0.35 - drop * 1.3, lerp(-0.95, 0, drop));
      eruption.userData.on = t > 6.3 && t < 9;
      // The Eagles are coming, and bear Frodo and Sam away.
      eagles.forEach((e, i) => {
        const k = ease(seg(t, 8.5 + i * 0.4, 12));
        e.position.set(lerp(-4 + i * 3, -0.8 + i * 0.8, k), top + lerp(7, 1.9, k), lerp(10, 0.6, k));
        e.rotation.y = Math.PI;
      });
      [frodo, sam].forEach((h) => { h.position.y = top - 0.1 + ease(seg(t, 12, 13.5)) * 3; });
    };
  },
};

// --- The Three Hunters -------------------------------------------------------------------------

const huntingTheUruks = {
  // Boromir's boat drifts down to the Falls; then the three set off after the Uruk-hai.
  period: 13, dist: 18,
  run(ctx) {
    ctx.hide('merry', 'pippin', 'boromir');
    const aragorn = ctx.cast('aragorn');
    const legolas = ctx.cast('legolas');
    const gimli = ctx.cast('gimli');
    const boat = ctx.add(prop(new THREE.CylinderGeometry(0.24, 0.24, 1.5, 8, 1, false, Math.PI / 2, Math.PI), 0x9a9a8a, { side: THREE.DoubleSide }));
    boat.rotation.set(Math.PI / 2, 0, Math.PI);
    boat.userData.lift = 0.15;
    const boromir = ctx.add(makeCharacter('boromir'));
    boromir.rotation.order = 'YXZ';
    return (t, dt) => {
      const drift = seg(t, 0, 7);
      put(boat, lerp(-1.8, -5, drift), lerp(1.8, 6, drift));
      boat.rotation.y = 0.6;
      boromir.position.copy(boat.position);
      boromir.rotation.set(-Math.PI / 2, 0.6, 0);
      boromir.userData.lift = 0.35;
      [aragorn, legolas, gimli].forEach((h, i) => {
        const home = [-0.6 + i * 0.7, 0];
        travel(h, home, [home[0] + 0.3, 6], seg(t, 8.5 + i * 0.2, 12.5 + i * 0.2), dt, true);
        if (t < 8.5) put(h, home[0], home[1], boat.position.x, boat.position.z);
      });
      // "Let's hunt some orc."
      script(aragorn, t, [[0, 'mourn'], [6.5, 'talk'], [8.5, 'idle']]);
      script(legolas, t, [[0, 'mourn'], [6.5, 'point'], [8.5, 'idle']]);
      script(gimli, t, [[0, 'mourn'], [7.2, 'cheer'], [8.5, 'idle']]);
    };
  },
};

const gandalfTheWhite = {
  period: 11, dist: 15,
  run(ctx) {
    const gandalf = ctx.cast('gandalf_white');
    const flash = ctx.add(makeFlash(0xffffff, 2.2));
    flash.userData.ground = false;
    const hunters = ['aragorn', 'legolas', 'gimli'].map((id) => ctx.cast(id));
    const [aragorn, legolas, gimli] = hunters;
    hunters.forEach((h, i) => put(h, -0.8 + i * 0.8, -0.2, 0, 2));
    const base = ctx.stage(1);
    return (t) => {
      put(gandalf, 0, 1.8, 0, 0);
      gandalf.visible = t > 1.5;
      script(gandalf, t, [[0, 'raise'], [3.5, 'talk'], [7.5, 'point']]);
      flash.position.set(0, base + 0.8, 1.8);
      flash.userData.set(seg(t, 1, 1.6) * (1 - seg(t, 3, 5)) + 0.15 * (t > 3));
      // They attack the white rider - an arrow, an axe - and are thrown back; then they kneel.
      script(legolas, t, [[0, 'shoot'], [1.2, 'cower'], [4, 'listen'], [6.5, 'bowdown']]);
      script(gimli, t, [[0, 'chop'], [1.2, 'cower'], [4, 'listen'], [6.5, 'kneel']]);
      script(aragorn, t, [[0, 'guard'], [1.2, 'cower'], [4, 'listen'], [6.5, 'kneel']]);
      hunters.forEach((h) => { h.rotation.x = -seg(t, 1, 1.5) * (1 - seg(t, 3, 4)) * 0.4; });
    };
  },
};

const theodenKing = {
  // Meduseld: Théoden, withered on his throne under Saruman's spell; Gandalf breaks it, and the
  // king stands and takes up his sword. Gríma slinks away.
  period: 12, dist: 15,
  run(ctx) {
    const theoden = ctx.cast('theoden');
    const gandalf = ctx.cast('gandalf_white');
    const eowyn = ctx.cast('eowyn');
    const eomer = ctx.cast('eomer');
    const grima = ctx.cast('grima');
    const throne = ctx.add(new THREE.Group());
    const seat = prop(new THREE.BoxGeometry(0.5, 0.26, 0.4), 0x8a6a30);
    seat.position.y = 0.13;
    const back = prop(new THREE.BoxGeometry(0.55, 1.0, 0.08), 0x8a6a30);
    back.position.set(0, 0.5, -0.2);
    throne.add(seat, back);
    const light = ctx.add(makeFlash(0xfff0c0, 1.5));
    light.userData.ground = false;
    const hunters = ['aragorn', 'legolas', 'gimli'].map((id) => ctx.cast(id));
    const base = ctx.stage(1);
    return (t, dt) => {
      hunters.forEach((h, i) => { put(h, -1 + i * 0.5, -0.6, 0, 1); act(h, i === 2 ? 'guard' : 'look'); });
      put(throne, 0, 1.62, 0, -1);
      const freed = ease(seg(t, 3, 5));
      // Old and bent on the throne; then he rises, young again, and grips his sword.
      put(theoden, 0, lerp(1.6, 1.3, seg(t, 5, 6.5)), 0, 0);
      theoden.userData.pose.crouch = (1 - seg(t, 4.5, 5.5)) * 0.45;
      theoden.userData.pose.lLegX = theoden.userData.pose.rLegX = -(1 - seg(t, 4.5, 5.5)) * 1.5;
      theoden.userData.pose.lKnee = theoden.userData.pose.rKnee = (1 - seg(t, 4.5, 5.5)) * 1.45;
      theoden.userData.pose.lean = (1 - freed) * 0.45;
      script(theoden, t, [[0, 'mourn'], [5, 'look'], [7.5, 'raise'], [9.5, 'talk']]);
      put(gandalf, 0.3, 0.5, 0, 1.6);
      script(gandalf, t, [[0, 'talk'], [2.4, 'cast'], [5.5, 'listen']]);
      light.position.set(0, base + 1, 1.5);
      light.userData.set(seg(t, 2.5, 3.1) * (1 - seg(t, 4.5, 6)));
      put(eowyn, -0.9, 1.2, 0, 1.4);
      script(eowyn, t, [[0, 'mourn'], [5, 'look'], [7, 'idle']]);
      put(eomer, 1.2, 0.6, 0, 1.4);
      script(eomer, t, [[0, 'idle'], [8, 'kneel'], [10, 'guard']]);
      travel(grima, [0.8, 1.6], [2.6, 3.5], seg(t, 6, 8), dt, true);
      if (t < 6) put(grima, 0.8, 1.6, 0, 1.4);
      act(grima, t < 3 ? 'talk' : 'cower');
      grima.visible = t < 7.9;
    };
  },
};

const helmsDeep = {
  period: 15, dist: 24,
  run(ctx) {
    const [aragorn, legolas, gimli, theoden] = ['aragorn', 'legolas', 'gimli', 'theoden'].map((id) => ctx.cast(id));
    [aragorn, legolas, gimli, theoden].forEach((d, i) => { put(d, -1.2 + i * 0.8, -0.3, 0, 4); d.userData.lift = 0.9; });
    const wall = ctx.add(prop(new THREE.BoxGeometry(4.2, 0.9, 0.6), 0x8a8478));
    put(wall, -0.1, 0.2);
    wall.userData.lift = 0.45;
    const horde = [...Array(14)].map(() => ctx.add(makeOrc()));
    const blast = ctx.add(makeEmitter({ count: 160, color: 0xffb060, endColor: 0x201008, size: 1, life: 1.5, spread: 0.3, velocity: [0, 3, 0], jitter: 4, gravity: 3, rate: 0 }));
    const riders = [0, 1, 2, 3].map(() => ctx.add(makeRider(0x6a4a30)));
    riders.push(ctx.add(makeRider(0x5a4030, 'eomer')));
    ctx.hide('eomer');
    // Gandalf on Shadowfax at the head of the charge.
    ctx.hide('gandalf_white');
    const white = ctx.add(makeRider(0xf4f4f0, 'gandalf_white'));
    const dawn = ctx.add(makeFlash(0xfff4d0, 3));
    dawn.userData.ground = false;
    const base = ctx.stage(4);
    return (t, dt) => {
      horde.forEach((o, i) => {
        const row = Math.floor(i / 7), col = i % 7;
        travel(o, [-3 + col, 7 + row], [-3 + col, 1.4 + row * 0.6], seg(t, 0, 5), dt, true);
        if (t > 5 && t < 10) act(o, 'strike');
        if (t > 10) act(o, 'cower');
        fall(o, seg(t, 10 + col * 0.15, 11 + col * 0.15), false);
      });
      script(legolas, t, [[0, 'shoot'], [10, 'cheer']]);
      script(gimli, t, [[0, 'guard'], [5, 'chop'], [10, 'cheer']]);
      script(aragorn, t, [[0, 'guard'], [5, 'strike'], [8.5, 'point'], [10, 'cheer']]);
      script(theoden, t, [[0, 'guard'], [5, 'strike'], [8.3, 'raise']]);
      // The Deeping Wall is blown open.
      put(blast, 0, 0.6);
      blast.userData.on = t > 5.5 && t < 6;
      // Dawn on the fifth day: Gandalf and the Rohirrim ride down.
      dawn.position.set(-6, base + 4, 3);
      dawn.userData.set(seg(t, 8, 9) * (1 - seg(t, 13, 14.5)));
      riders.forEach((r, i) => {
        r.userData.gallop = true;
        travel(r, [-7, 1 + i * 0.7], [4, 2 + i * 0.7], seg(t, 8.5 + i * 0.2, 12.5 + i * 0.2), dt);
        act(r.userData.rider, t > 9 ? 'raise' : 'ride');
      });
      white.userData.gallop = true;
      travel(white, [-7.5, 3.5], [3.5, 3.5], seg(t, 8.3, 12.3), dt);
      act(white.userData.rider, t > 9 && t < 12 ? 'cast' : 'ride');
      white.visible = t > 8;
    };
  },
};

const floodingOfIsengard = {
  // The Ents break the dam and drown Isengard; Merry and Pippin sit on the rubble among the
  // spoils, smoking Longbottom Leaf.
  period: 11, dist: 21,
  run(ctx) {
    const base = ctx.stage(3);
    const water = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 0.05, 32), new THREE.MeshStandardMaterial({ color: 0x3a6a78, transparent: true, opacity: 0.8, roughness: 0.2, metalness: 0.3 })));
    water.userData.ground = false;
    const foam = ctx.add(makeEmitter({ count: 90, color: 0xe8f4ff, endColor: 0x305060, size: 0.5, life: 1, spread: 1.2, velocity: [0, 1.2, 1.5], jitter: 0.8, additive: false }));
    foam.userData.ground = false;
    const treebeard = ctx.cast('treebeard');
    const ents = [treebeard, ctx.cast('ent:1'), ctx.cast('ent:2')];
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    const rubble = ctx.add(prop(new THREE.DodecahedronGeometry(0.35, 0), 0x6a645a));
    put(rubble, 2.4, -0.8);
    rubble.userData.lift = 0.05;
    return (t, dt) => {
      water.position.set(0, base - 0.4 + ease(seg(t, 2, 7)) * 0.8 * (1 - seg(t, 10, 11)), 2.5);
      foam.position.set(-2.5, base + 0.2, 1);
      foam.userData.on = t > 2 && t < 7;
      ents.forEach((e, i) => {
        travel(e, [-4 + i * 1.5, -2], [-2.5 + i * 1.5, 0.2], seg(t, 0, 3), dt);
        script(e, t, [[0, 'idle'], [3, 'chop'], [6, 'lift'], [8.5, 'idle']]);
      });
      put(merry, 2.2, -0.8, 0, 2);
      put(pippin, 2.6, -0.8, 0, 2);
      [merry, pippin].forEach((h) => { h.userData.lift = 0.3; });
      script(merry, t, [[0, 'smoke'], [5, 'wave'], [6.5, 'smoke']]);
      script(pippin, t, [[0, 'drink'], [5.4, 'cheer'], [6.5, 'smoke']]);
      merry.userData.pose.crouch = pippin.userData.pose.crouch = 0.45;
      merry.userData.pose.lLegX = merry.userData.pose.rLegX = pippin.userData.pose.lLegX = pippin.userData.pose.rLegX = -1.5;
      merry.userData.pose.lKnee = merry.userData.pose.rKnee = pippin.userData.pose.lKnee = pippin.userData.pose.rKnee = 1.45;
    };
  },
};

const pathsOfTheDead = {
  period: 10, dist: 18,
  run(ctx) {
    const dead = [...Array(12)].map(() => ctx.add(makeGhost()));
    const king = ctx.add(makeCharacter('king_of_the_dead'));
    const mist = ctx.add(makeEmitter({ count: 80, color: 0x90ffc0, endColor: 0x051008, size: 1.2, life: 3, spread: 2, velocity: [0, 0.2, 0], jitter: 0.3 }));
    put(mist, 0, 2.2);
    const [aragorn, legolas, gimli] = ['aragorn', 'legolas', 'gimli'].map((id, i) => { const c = ctx.cast(id); put(c, -0.6 + i * 0.6, -0.2, 0, 3); return c; });
    return (t) => {
      dead.forEach((d, i) => {
        put(d, -2.5 + (i % 6), 2.4 + Math.floor(i / 6) * 0.9, 0, 0);
        d.userData.lift = -1.3 + ease(seg(t, 0.5 + (i % 6) * 0.25, 3 + (i % 6) * 0.25)) * 1.3;
        act(d, t > 6 ? 'bowdown' : 'guard');
      });
      put(king, 0, 1.4, 0, 0);
      king.userData.lift = -1.5 + ease(seg(t, 0, 2.5)) * 1.5;
      script(king, t, [[0, 'idle'], [3, 'point'], [5.5, 'idle'], [6.5, 'bowdown']]);
      // "Fight for us, and regain your honour."
      script(aragorn, t, [[0, 'guard'], [3.5, 'raise'], [5.5, 'talk']]);
      script(legolas, t, [[0, 'look'], [3, 'shoot'], [6, 'look']]);
      script(gimli, t, [[0, 'cower'], [7, 'look']]);
    };
  },
};

const shipsAtPelargir = {
  period: 11, dist: 22,
  run(ctx) {
    const ships = [0, 1, 2].map(() => ctx.add(makeShip()));
    ships.forEach((s, i) => put(s, -2.5 + i * 2.5, 3.5, -2.5 + i * 2.5, 10));
    const corsairs = [0, 1, 2, 3].map((i) => ctx.cast(`corsair:${i}`));
    const dead = [...Array(10)].map(() => ctx.add(makeGhost()));
    const [aragorn, legolas, gimli] = ['aragorn', 'legolas', 'gimli'].map((id, i) => { const c = ctx.cast(id); put(c, -0.5 + i * 0.5, 0, 0, 3); return c; });
    return (t, dt) => {
      dead.forEach((d, i) => {
        travel(d, [-3 + i * 0.6, -1.5], [-3 + i * 0.66, 3.6], seg(t, 1 + (i % 5) * 0.2, 5 + (i % 5) * 0.2), dt, true);
        act(d, t > 3 ? 'strike' : 'guard');
      });
      ships.forEach((s, i) => { s.rotation.z = Math.sin(t * 1.2 + i) * 0.05; });
      corsairs.forEach((c, i) => {
        put(c, -2.5 + i * 1.6, 3.4, 0, 0);
        c.userData.lift = 0.35;
        act(c, t < 3.5 ? 'guard' : 'cower');
        fall(c, seg(t, 5 + i * 0.3, 6 + i * 0.3));
      });
      script(aragorn, t, [[0, 'raise'], [2, 'point'], [5, 'guard']]);
      script(legolas, t, [[0, 'shoot'], [6, 'look']]);
      script(gimli, t, [[0, 'chop'], [6, 'cheer']]);
    };
  },
};

const pelennorFields = {
  // The black ships come up the Anduin - and out come Aragorn and the Dead. Mûmakil, riders of
  // Rohan, and the Witch-king on his fell beast over the field.
  period: 14, dist: 28,
  run(ctx) {
    const mumakil = [0, 1].map(() => ctx.add(makeMumak()));
    const riders = [...Array(5)].map(() => ctx.add(makeRider(0x6a4a30)));
    riders.push(ctx.add(makeRider(0x5a4030, 'eomer')));
    ctx.hide('eomer');
    const beast = ctx.add(makeFellBeast(makeNazgul(true)));
    beast.userData.ground = false;
    [0, 1, 2].forEach((i) => {
      const f = ctx.add(makeFire(0.8));
      put(f, -3 + i * 3, 5);
    });
    const ship = ctx.add(makeShip());
    put(ship, 3.5, -1.5, 3.5, 5);
    const [aragorn, legolas, gimli, gandalf] = ['aragorn', 'legolas', 'gimli', 'gandalf_white'].map((id, i) => { const c = ctx.cast(id); put(c, 2.5 + i * 0.5, -1, 0, 3); return c; });
    const base = ctx.stage(3);
    return (t, dt) => {
      mumakil.forEach((m, i) => travel(m, [-5 + i * 3, 7], [-2 + i * 3, 1], seg(t, 0, 10), dt));
      riders.forEach((r, i) => {
        r.userData.gallop = true;
        travel(r, [-7, 0 + (i % 3) * 0.8], [5, 3 + (i % 3) * 0.8], seg(t, 3 + i * 0.3, 8 + i * 0.3), dt);
        act(r.userData.rider, 'raise');
      });
      const a = t * 0.7;
      beast.position.set(Math.sin(a) * 4, base + 4, 2 + Math.cos(a) * 3);
      beast.rotation.y = a + Math.PI / 2;
      // Down the gangway and into the fight.
      travel(aragorn, [3.5, -1], [1.8, 2], seg(t, 1, 3), dt, true);
      travel(gimli, [4.1, -1.2], [2.6, 1.6], seg(t, 1.4, 3.4), dt, true);
      travel(legolas, [3.8, -0.4], [1.2, 1.2], seg(t, 1.8, 3.8), dt, true);
      script(aragorn, t, [[0, 'raise'], [3, 'strike']]);
      script(gimli, t, [[0, 'cheer'], [3.4, 'chop']]);
      script(legolas, t, [[0, 'idle'], [3.8, 'shoot']]);
      put(gandalf, -1.5, 0.2, beast.position.x, beast.position.z);
      script(gandalf, t, [[0, 'cast'], [7, 'raise']]);
    };
  },
};

const eaglesAtTheBlackGate = {
  period: 12, dist: 24,
  run(ctx) {
    const hosts = [...Array(12)].map((_, i) => ctx.add(makeOrc(i % 2 ? 'orc' : 'mordor')));
    hosts.forEach((o, i) => put(o, -3 + (i % 6) * 1.2, 3 + Math.floor(i / 6), 0, 0));
    const eagles = [0, 1, 2, 3, 4].map(() => {
      const e = ctx.add(makeEagle(1.1));
      e.userData.ground = false;
      return e;
    });
    const base = ctx.stage(3);
    // Far away over Mordor, the mountain erupts as the Ring is unmade.
    const doom = ctx.at('mount_doom');
    const eruption = ctx.add(makeEmitter({ count: 200, color: 0xff7a20, endColor: 0x301008, size: 6, life: 3, spread: 2, velocity: [0, 20, 0], jitter: 10, gravity: 6, rate: 1 }));
    eruption.userData.ground = false;
    eruption.position.set(doom.x, doom.y + 1, doom.z);
    // Merry stayed wounded in Minas Tirith; Pippin marched with the Captains of the West.
    const army = ['aragorn', 'legolas', 'gimli', 'gandalf_white', 'pippin', 'eomer'].map((id, i) => { const c = ctx.cast(id); put(c, -1.5 + i * 0.6, -0.5, 0, 3); return c; });
    const [aragorn, legolas, gimli, gandalf, pippin, eomer] = army;
    return (t, dt) => {
      eagles.forEach((e, i) => {
        const k = seg(t, 2 + i * 0.5, 9 + i * 0.5);
        e.position.set(lerp(-10, 10, k), base + 3 + Math.sin(k * Math.PI) * 1.5 + i * 0.4, 2 + i * 0.8);
        e.rotation.y = Math.PI / 2;
      });
      eruption.userData.on = t > 6 && t < 10;
      hosts.forEach((o) => {
        o.rotation.y = t > 7 ? Math.PI : 0;
        act(o, t > 7 ? 'cower' : 'guard');
        o.userData.walk(t > 7 ? dt : 0);
      });
      // "For Frodo." Aragorn turns to them - and charges.
      script(aragorn, t, [[0, 'talk'], [1.8, 'raise'], [2.6, 'strike'], [7, 'look']]);
      [legolas, gimli, pippin, eomer].forEach((c) => script(c, t, [[0, 'listen'], [2.6, c === legolas ? 'shoot' : 'guard'], [7, 'look'], [9, 'cheer']]));
      script(gandalf, t, [[0, 'listen'], [3, 'point'], [4, 'look'], [7, 'raise']]);
      army.forEach((c, i) => { c.position.z = -0.5 + ease(seg(t, 2.6, 5)) * 1.2 - (i % 2) * 0.2; });
    };
  },
};

// --- Merry and Pippin --------------------------------------------------------------------------

const carriedByUruks = {
  // Slung over the Uruks' shoulders across Rohan; Pippin lets fall his Elven brooch.
  period: 8, dist: 17,
  run(ctx) {
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    const uruks = [0, 1, 2, 3, 4].map(() => ctx.add(makeOrc()));
    const brooch = ctx.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.04, 0), new THREE.MeshBasicMaterial({ color: 0x7ac070 })));
    brooch.userData.ground = false;
    const base = ctx.stage(2);
    return (t, dt) => {
      const run = (t * 0.6) % 1.5;
      uruks.forEach((u, i) => {
        put(u, -1 + (i % 3) * 1, 0.5 + Math.floor(i / 3) * 0.8 + run, 0, 5);
        u.userData.running(true);
        u.userData.walk(dt * 1.6);
      });
      // Carried across the shoulders of the first two.
      [merry, pippin].forEach((h, i) => {
        const bearer = uruks[i];
        const at = ctx.joint(bearer, 'upperR');
        put(h, bearer.position.x, bearer.position.z + 0.05);
        h.userData.ground = false;
        h.position.y = at.y - 0.1;
        h.rotation.set(0, Math.PI / 2, Math.PI / 2);
        act(h, 'struggle');
      });
      brooch.visible = t > 3 && t < 7;
      brooch.position.set(pippin.position.x, lerp(pippin.position.y, base + 0.02, ease(seg(t, 3, 3.6))), lerp(pippin.position.z, 1.6, seg(t, 3, 3.6)));
    };
  },
};

const treebeard = {
  // Treebeard finds them, sets them on his shoulders, and strides off through Fangorn.
  period: 11, dist: 20,
  run(ctx) {
    const tb = ctx.cast('treebeard');
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    ctx.focus(0, ctx.stage(2) + 1.4, 1.4);
    return (t, dt) => {
      const k = ease(seg(t, 3, 5));
      if (t < 6) put(tb, 0, 1.2);
      tb.rotation.y = Math.PI * (1 - ease(seg(t, 0.5, 2)));
      script(tb, t, [[0, 'idle'], [2, 'talk'], [3, 'lift'], [5, 'idle']]);
      travel(tb, [0, 1.2], [1.2, 2.6], seg(t, 6, 10.5), dt);
      // Hoom, hom: he lifts them up and sets them on his shoulders.
      [merry, pippin].forEach((h, i) => {
        if (t < 3) {
          put(h, i ? 0.5 : -0.5, 0.2, tb.position.x, tb.position.z);
          h.userData.ground = true;
          h.userData.lift = 0;
          script(h, t, [[0, 'cower'], [2, 'look']]);
          return;
        }
        const sh = ctx.joint(tb, i ? 'upperR' : 'upperL');
        const from = [i ? 0.5 : -0.5, 0.2];
        h.userData.ground = false;
        h.position.set(lerp(from[0], sh.x, k), lerp(tb.position.y, sh.y + 0.02, k), lerp(from[1], sh.z, k));
        h.rotation.y = tb.rotation.y;
        act(h, k < 1 ? 'struggle' : i ? 'cheer' : 'sitGround');
      });
    };
  },
};

const palantir = {
  // Pippin steals the palantír and looks into it - the Eye - and Merry swears himself to Théoden.
  period: 12, dist: 14,
  run(ctx) {
    const pippin = ctx.cast('pippin');
    const merry = ctx.cast('merry');
    const theoden = ctx.cast('theoden');
    const orb = ctx.add(new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 12), new THREE.MeshStandardMaterial({ color: 0x0a0a10, emissive: 0x401000, metalness: 0.6, roughness: 0.2 })));
    orb.userData.ground = false;
    const eye = ctx.add(makeFlash(0xff6a10, 0.9));
    eye.userData.ground = false;
    const gandalf = ctx.cast('gandalf_white');
    return (t, dt) => {
      put(pippin, 0, 0.4, 0, 1);
      script(pippin, t, [[0, 'hold'], [4.5, 'cower'], [8.8, 'idle']]);
      const hand = ctx.joint(pippin, 'handR');
      orb.position.set(hand.x - 0.05, hand.y + 0.08, hand.z);
      eye.position.copy(orb.position);
      const look = seg(t, 2, 3) * (1 - seg(t, 5, 6));
      eye.userData.set(look);
      orb.material.emissiveIntensity = 0.5 + look * 3;
      fall(pippin, seg(t, 4.5, 5.2) * (1 - seg(t, 8, 8.8)));
      travel(gandalf, [2.5, 2], [0.6, 0.9], seg(t, 5, 6.5), dt, true);
      if (t < 5) put(gandalf, 2.5, 2, 0, 0);
      script(gandalf, t, [[0, 'idle'], [6.5, 'kneel'], [8.5, 'talk']]);
      // Merry kneels and offers his sword to the king.
      put(theoden, -2, 1.8, -1.6, 0.8);
      put(merry, -1.6, 0.9, -2, 1.8);
      script(merry, t, [[0, 'look'], [6.5, 'kneel'], [9.5, 'guard']]);
      script(theoden, t, [[0, 'look'], [6.5, 'listen'], [8, 'talk']]);
    };
  },
};

const witchKingOnThePelennor = {
  // The beacons are lit along the White Mountains; and on the Pelennor, Éowyn and Merry face the
  // Witch-king: "I am no man!"
  period: 14, dist: 20,
  run(ctx) {
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    const eowyn = ctx.cast('eowyn');
    const theoden = ctx.cast('theoden');
    const wk = ctx.add(makeNazgul(true));
    const beast = ctx.add(makeFellBeast());
    beast.userData.ground = false;
    const base = ctx.stage(2);
    // The beacons, burning along the White Mountains from Minas Tirith to Edoras.
    const from = ctx.at('minas_tirith'), to = ctx.at('edoras');
    [...Array(7)].forEach((_, i) => {
      const k = (i + 1) / 7;
      const f = ctx.add(makeFire(9));
      f.position.set(lerp(from.x, to.x, k), 0, lerp(from.z, to.z, k));
      f.userData.lift = 1.5;
      const glow = ctx.add(makeFlash(0xffa040, 6));
      glow.position.copy(f.position);
      glow.userData.lift = 3;
      glow.userData.set(0.7);
    });
    return (t, dt) => {
      // Théoden lies where Snowmane fell on him.
      put(theoden, -1.2, 1.2, -1.6, 1.8);
      theoden.rotation.x = -1.45;
      // The fell beast lands, the Witch-king steps down with his mace.
      beast.position.set(lerp(-2, 1.8, seg(t, 0, 2)), base + lerp(3, 0.3, ease(seg(t, 0, 2))), lerp(6, 3.2, seg(t, 0, 2)));
      beast.rotation.y = Math.PI * 0.9;
      put(wk, 0.7, 2.2, eowyn.position.x, eowyn.position.z);
      wk.visible = t > 2;
      script(wk, t, [[0, 'idle'], [3, 'strike'], [6.2, 'kneel']]);
      put(eowyn, 0, 1, wk.position.x, wk.position.z);
      script(eowyn, t, [[0, 'guard'], [4.4, 'cower'], [7, 'strike'], [8.3, 'guard'], [10, 'mourn']]);
      // Merry, unseen, stabs him behind the knee...
      travel(merry, [1.8, 3.4], [1.0, 2.6], seg(t, 4.8, 5.8), dt, true);
      if (t < 4.8) put(merry, 1.8, 3.4, wk.position.x, wk.position.z);
      script(merry, t, [[0, 'look'], [5.8, 'strike'], [6.8, 'cower'], [10, 'mourn']]);
      // ...and Éowyn drives her sword under his crown. He shrivels and is gone.
      fade(wk, seg(t, 8, 9.5) * (1 - seg(t, 13.6, 13.9)));
      wk.scale.setScalar(1 - seg(t, 8, 9.5) * 0.4);
      // Pippin, far behind on the walls, lit the beacon that brought them.
      put(pippin, -3.5, -1.5, 0, 3);
      act(pippin, 'look');
    };
  },
};

// --- There and Back Again ----------------------------------------------------------------------

const DWARVES = ['thorin', 'balin', 'dwalin', 'kili', 'fili', 'oin', 'gloin', 'ori', 'nori', 'dori', 'bifur', 'bofur', 'bombur'];

const unexpectedParty = {
  // Thirteen dwarves and a wizard come to tea at Bag End: they eat Bilbo's larder bare, sing,
  // and Thorin arrives last. Bilbo is not pleased - and then, somehow, he is.
  period: 15, dist: 18,
  run(ctx) {
    const bilbo = ctx.cast('bilbo');
    const gandalf = ctx.cast('gandalf');
    const dwarves = DWARVES.map((id) => ctx.cast(id));
    const thorin = dwarves[0];
    const table = ctx.add(prop(new THREE.BoxGeometry(3.4, 0.06, 0.8), 0x6a4a2a));
    table.userData.lift = 0.3;
    put(table, 0, 1.4);
    const food = [...Array(8)].map((_, i) => {
      const f = ctx.add(prop(new THREE.SphereGeometry(0.07, 6, 4), [0xc08a3a, 0xd04a2a, 0xe8d8a0, 0x8a5a2a][i % 4]));
      f.userData.lift = 0.38;
      put(f, -1.4 + i * 0.4, 1.4 + (i % 2) * 0.15);
      return f;
    });
    const fire = ctx.add(makeFire(0.5));
    put(fire, 2.6, 2.8);
    return (t, dt) => {
      // Twelve round the table, eating, drinking and singing.
      dwarves.slice(1).forEach((d, i) => {
        const side = i % 2 ? 1 : -1;
        put(d, -1.5 + Math.floor(i / 2) * 0.55, 1.4 + side * 0.65, -1.5 + Math.floor(i / 2) * 0.55, 1.4);
        const song = t > 9;
        script(d, t + i * 0.37, [[0, i % 3 ? 'drink' : 'talk'], [4 + (i % 4), i % 3 ? 'cheer' : 'drink'], [9, 'mourn']]);
        if (song) act(d, 'mourn');   // the song of the Misty Mountains, low and solemn
      });
      // Bilbo protests, and hurries about after the plates.
      if (t < 4.5) travel(bilbo, [-2.2, 0.2], [1.8, 0.4], seg(t, 1, 4), dt, true);
      else travel(bilbo, [1.8, 0.4], [-1.9, 0.4], seg(t, 4.5, 7), dt, true);
      script(bilbo, t, [[0, 'talk'], [1, 'idle'], [7, 'cower'], [9, 'listen'], [12.5, 'hold']]);
      if (t > 7) face(bilbo, 0, 1.4);
      // Thorin, last, knocks and comes in; everyone rises.
      travel(thorin, [-3.5, -1.5], [-2.2, 1.4], seg(t, 5.5, 7.5), dt);
      if (t < 5.5) put(thorin, -3.5, -1.5, 0, 1.4);
      script(thorin, t, [[0, 'idle'], [7.5, 'talk'], [9, 'smoke']]);
      if (t > 7.5) face(thorin, 0, 1.4);
      put(gandalf, 2.2, 1.9, 0, 1.4);
      script(gandalf, t, [[0, 'smoke'], [7.5, 'listen'], [11, 'talk']]);
      food.forEach((f, i) => { f.visible = t < 3 + i * 0.5 || t > 14.5; });
    };
  },
};

const trollsTurnToStone = {
  // Dwarves in sacks by the trolls' fire; Bilbo keeps them arguing until Gandalf splits the rock
  // and lets in the dawn: "Dawn take you all, and be stone to you!"
  period: 13, dist: 17,
  run(ctx) {
    const trolls = [0, 1, 2].map(() => ctx.add(makeTroll()));
    trolls.forEach((tr, i) => { put(tr, -1.8 + i * 1.8, 2.2, 0, 1.3); tr.scale.setScalar(0.85); });
    const fire = ctx.add(makeFire(0.9));
    put(fire, 0, 1.3);
    const sun = ctx.add(makeFlash(0xffe8b0, 4));
    sun.userData.ground = false;
    const gandalf = ctx.cast('gandalf');
    const bilbo = ctx.cast('bilbo');
    const sacks = DWARVES.slice(0, 6).map((id, i) => {
      const d = ctx.cast(id);
      const sack = ctx.add(prop(new THREE.CylinderGeometry(0.2, 0.22, 0.55, 8), 0x8a7050));
      return { d, sack, i };
    });
    ctx.hide(...DWARVES.slice(6));
    const base = ctx.stage(2);
    return (t) => {
      put(gandalf, 3, 0.2, 0, 2);
      script(gandalf, t, [[0, 'idle'], [5.5, 'raise'], [6.5, 'cast'], [9, 'smoke']]);
      put(bilbo, 1.2, 0.2, 0, 2);
      script(bilbo, t, [[0, 'talk'], [3, 'point'], [5, 'talk'], [8.5, 'cheer']]);
      sun.position.set(6, base + 2, 4);
      sun.userData.set(seg(t, 6, 7) * (1 - seg(t, 10.5, 11.8)));
      trolls.forEach((tr) => tr.userData.turnToStone(seg(t, 6.5, 8) * (1 - seg(t, 12.5, 12.9))));
      fire.userData.set(t < 7.5);
      // Tied in sacks on the ground, wriggling; free at the end.
      const free = seg(t, 9, 9.5);
      sacks.forEach(({ d, sack, i }) => {
        put(d, -1.9 + i * 0.5, 0.5, 0, 1.3);
        put(sack, d.position.x, d.position.z);
        sack.visible = free < 1;
        sack.rotation.z = free < 1 ? Math.PI / 2 : 0;
        sack.userData.lift = 0.18;
        d.rotation.z = free < 1 ? Math.PI / 2 : 0;
        d.userData.lift = free < 1 ? 0.12 : 0;
        act(d, free < 1 ? 'struggle' : 'cheer');
      });
    };
  },
};

const moonLetters = {
  // Elrond reads the moon-letters on Thorin's map by the light of a midsummer moon.
  period: 10, dist: 13,
  run(ctx) {
    const table = ctx.add(prop(new THREE.BoxGeometry(1, 0.4, 0.6), 0xd8d0c0));
    put(table, 0, 0.9);
    const map = ctx.add(new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), new THREE.MeshStandardMaterial({ color: 0xe8d8b0, emissive: 0x3060ff, emissiveIntensity: 0 })));
    map.userData.ground = false;
    map.rotation.x = -Math.PI / 2;
    const moon = ctx.add(makeFlash(0xc8d8ff, 1.2));
    moon.userData.ground = false;
    const elrond = ctx.cast('elrond');
    const cast = ['thorin', 'bilbo', 'gandalf', 'balin'].map((id) => ctx.cast(id));
    cast.forEach((c, i) => ring([c], 1, 0, 0.9, i * 1.1 - 2.2));
    put(elrond, 0, 1.7, 0, 0.9);
    const base = ctx.stage(1);
    return (t) => {
      map.position.set(0, base + 0.42, 0.9);
      const k = seg(t, 2, 3.5) * (1 - seg(t, 7, 8.5));
      map.material.emissiveIntensity = k * 1.5;
      moon.position.set(0, base + 3, 1.5);
      moon.userData.set(0.3 + k * 0.5);
      script(elrond, t, [[0, 'hold'], [3.5, 'point'], [5, 'talk'], [8.5, 'idle']]);
      script(cast[0], t, [[0, 'listen'], [5.5, 'talk'], [7, 'listen']]);
      script(cast[1], t, [[0, 'look'], [3, 'listen']]);
      script(cast[2], t, [[0, 'smoke'], [6, 'listen']]);
      script(cast[3], t, [[0, 'listen'], [7.5, 'talk']]);
    };
  },
};

const riddlesInTheDark = {
  period: 12, dist: 11,
  run(ctx) {
    ctx.hide(...DWARVES, 'gandalf');
    const bilbo = ctx.cast('bilbo');
    const gollum = ctx.cast('gollum');
    const theRing = ctx.add(ringOfPower());
    const lake = ctx.add(new THREE.Mesh(new THREE.CircleGeometry(1.4, 20), new THREE.MeshStandardMaterial({ color: 0x0a1418, roughness: 0.1, metalness: 0.5 })));
    lake.userData.lift = 0.02;
    lake.rotation.x = -Math.PI / 2;
    put(lake, 0.5, 2.6);
    const base = ctx.stage(1);
    return (t, dt) => {
      put(gollum, 0.2, 1.4, bilbo.position.x, bilbo.position.z);
      script(gollum, t, [[0, 'crawl'], [5.5, 'gloat'], [8, 'talk'], [9.5, 'cower']]);
      travel(bilbo, [-1.2, -0.2], [0, 0.4], seg(t, 0, 2), dt);
      // He finds the Ring in the dark...
      script(bilbo, t, [[0, 'idle'], [2, 'kneel'], [3.5, 'hold'], [5, 'guard'], [7.5, 'talk'], [9, 'hold']]);
      theRing.visible = t < 9.7;
      if (t < 3.3) theRing.position.set(0, base + 0.03, 0.6);
      else inHand(ctx, theRing, bilbo);
      // ...riddles with Gollum, sword drawn - then slips it on and vanishes.
      fade(bilbo, seg(t, 9.5, 10.1) * (1 - seg(t, 11.5, 11.9)));
    };
  },
};

const eaglesAtTheCarrock = {
  // The Eagles carry the company out of the burning trees and set them down on the Carrock,
  // where Beorn comes striding.
  period: 12, dist: 20,
  run(ctx) {
    const eagles = [0, 1, 2, 3].map(() => {
      const e = ctx.add(makeEagle(1));
      e.userData.ground = false;
      return e;
    });
    const riders = ['bilbo', 'thorin', 'gandalf', 'balin'].map((id) => ctx.cast(id));
    const beorn = ctx.cast('beorn');
    const base = ctx.stage(2);
    return (t, dt) => {
      eagles.forEach((e, i) => {
        const k = ease(seg(t, i * 0.5, 5 + i * 0.5));
        const leave = ease(seg(t, 7, 11));
        e.position.set(lerp(-8 + i * 2, -1.5 + i, k) + leave * 6, base + lerp(8, 1.4, k) + leave * 8, lerp(-5, 1.5, k) + leave * 4);
        e.rotation.y = 0.8;
        // Each carries one of the company, set down when it lands.
        const r = riders[i];
        const landed = k >= 1;
        if (!landed) {
          r.userData.ground = false;
          r.position.set(e.position.x, e.position.y - 0.7, e.position.z);
          act(r, 'struggle');
        } else {
          r.userData.ground = true;
          put(r, -1.5 + i, 1.5, 0, 0);
          script(r, t, [[0, 'look'], [6, i === 0 ? 'cheer' : 'wave'], [8.5, 'look']]);
        }
      });
      travel(beorn, [5, 5], [1.6, 2.6], seg(t, 7.5, 11), dt);
      if (t < 7.5) put(beorn, 5, 5);
      act(beorn, t > 11 ? 'talk' : 'idle');
    };
  },
};

const barrelsOutOfBond = {
  // Down the Forest River in barrels, Bilbo clinging to one, Wood-elves shooting from the bank.
  period: 10, dist: 17,
  run(ctx) {
    const inside = ['thorin', 'balin', 'dwalin', 'kili', 'fili', 'bombur'].map((id) => ctx.cast(id));
    ctx.hide(...DWARVES.slice(6), 'gandalf');
    const barrels = inside.map(() => {
      const b = ctx.add(prop(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 10), 0x7a5530));
      b.userData.ground = false;
      return b;
    });
    const bilbo = ctx.cast('bilbo');
    const elves = [0, 1, 2].map((i) => ctx.cast(`woodelf:${i}`));
    const river = ctx.add(new THREE.Mesh(new THREE.PlaneGeometry(2.4, 14), new THREE.MeshStandardMaterial({ color: 0x3a6a78, transparent: true, opacity: 0.75, roughness: 0.2 })));
    river.rotation.x = -Math.PI / 2;
    river.userData.ground = false;
    const base = ctx.stage(3);
    return (t, dt) => {
      river.position.set(0, base + 0.05, 1);
      inside.forEach((d, i) => {
        const k = ((t / 10) + i / inside.length) % 1;
        const x = Math.sin(k * 6 + i) * 0.5, z = lerp(-4, 6, k);
        const bob = Math.sin(t * 3 + i) * 0.04;
        barrels[i].position.set(x, base + 0.2 + bob, z);
        barrels[i].rotation.z = Math.sin(t * 2 + i) * 0.1;
        d.userData.ground = false;
        put(d, x, z, x, z + 1);
        d.position.y = base + 0.25 + bob - d.userData.rig.d.legs;
        act(d, i % 2 ? 'cheer' : 'look');
      });
      // Bilbo on top of the last barrel, hanging on.
      const last = barrels[barrels.length - 1];
      bilbo.userData.ground = false;
      put(bilbo, last.position.x + 0.3, last.position.z);
      bilbo.position.y = last.position.y + 0.1;
      bilbo.rotation.set(0, 0, -1.2);
      act(bilbo, 'struggle');
      elves.forEach((e, i) => { put(e, 2 + i * 0.3, -1 + i * 1.6, 0, e.position.z + 1); act(e, 'shoot'); });
    };
  },
};

const smaugAtLakeTown = {
  period: 14, dist: 31,
  run(ctx) {
    // Thorin's company is up on the Mountain; this is the Lake-men's fight.
    ctx.hide('bilbo', 'gandalf', ...DWARVES);
    const base = ctx.stage(4);
    ctx.focus(0, base + 2.2, 3.5);
    const smaug = ctx.add(makeDragon({ scale: 1.7 }));
    smaug.userData.ground = false;
    const fires = [...Array(5)].map((_, i) => {
      const f = ctx.add(makeFire(1));
      put(f, -2 + i, 3 + (i % 2) * 0.8);
      f.userData.set(false);
      return f;
    });
    const arrow = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 5), mat(0x0a0a0a)));
    arrow.userData.ground = false;
    const splash = ctx.add(makeEmitter({ count: 150, color: 0xe8f4ff, endColor: 0x305060, size: 0.9, life: 1.6, spread: 1, velocity: [0, 4, 0], jitter: 3, gravity: 5, rate: 0, additive: false }));
    splash.userData.ground = false;
    const bard = ctx.cast('bard');
    put(bard, 1.8, 1.2, 0, 3);
    const folk = [0, 1, 2, 3].map((i) => ctx.cast(`laketown:${i}`));
    return (t, dt) => {
      const a = t * 0.6;
      const falling = ease(seg(t, 9, 11.5));
      smaug.position.set(Math.sin(a) * 3.5, base + 4.5 - falling * 5, 3.5 + Math.cos(a) * 2.5);
      smaug.rotation.y = a + Math.PI / 2;
      smaug.rotation.z = falling * 1.2;
      smaug.userData.breathe(t > 2 && t < 7);
      fires.forEach((f, i) => f.userData.set(t > 2.5 + i * 0.6 && t < 13.5));
      // Bard takes aim with the black arrow.
      face(bard, smaug.position.x, smaug.position.z);
      script(bard, t, [[0, 'point'], [2.5, 'talk'], [6.5, 'shoot'], [9.2, 'look'], [11.5, 'cheer']]);
      const fly = seg(t, 8, 9);
      arrow.visible = t > 8 && t < 9.1;
      arrow.position.set(lerp(1.8, smaug.position.x, fly), lerp(base + 1, smaug.position.y, fly), lerp(1.2, smaug.position.z, fly));
      arrow.lookAt(smaug.position);
      arrow.rotateX(Math.PI / 2);
      splash.position.set(smaug.position.x, base, smaug.position.z);
      splash.userData.on = t > 11.2 && t < 11.6;
      // The townsfolk flee the fire.
      folk.forEach((f, i) => {
        travel(f, [-2 + i * 0.6, 2.5], [-3 + i * 0.3, -2.5], seg(t, 2.5 + i * 0.3, 6 + i * 0.3), dt, true);
        if (t < 2.5) put(f, -2 + i * 0.6, 2.5, 0, 0);
        script(f, t, [[0, 'talk'], [2, 'point'], [2.5, 'idle'], [6.5, 'cower'], [11.5, 'cheer']]);
      });
    };
  },
};

const battleOfFiveArmies = {
  // Before the Lonely Mountain: goblins pour in; Thorin's company charges out, the Elves shoot,
  // the Eagles come - and Beorn.
  period: 13, dist: 24,
  run(ctx) {
    const goblins = [...Array(10)].map(() => ctx.add(makeOrc('goblin')));
    const eagles = [0, 1, 2].map(() => { const e = ctx.add(makeEagle(1)); e.userData.ground = false; return e; });
    const gold = ctx.add(makeEmitter({ count: 50, color: 0xffd060, endColor: 0x402000, size: 0.3, life: 1.5, spread: 0.8, velocity: [0, 0.8, 0], jitter: 0.5 }));
    put(gold, 0, -1);
    const company = DWARVES.slice(0, 6).map((id) => ctx.cast(id));
    ctx.hide(...DWARVES.slice(6));
    const elves = [0, 1].map((i) => ctx.cast(`woodelf:${i}`));
    const bard = ctx.cast('bard');
    const bilbo = ctx.cast('bilbo');
    const gandalf = ctx.cast('gandalf');
    const beorn = ctx.cast('beorn');
    const base = ctx.stage(3);
    return (t, dt) => {
      goblins.forEach((g, i) => {
        travel(g, [-4 + i * 0.8, 7], [-4 + i * 0.8, 2.5], seg(t, 0, 6), dt, true);
        act(g, t > 5 && t < 8 ? 'strike' : t > 8 ? 'cower' : 'idle');
        fall(g, seg(t, 8 + i * 0.1, 9 + i * 0.1), false);
      });
      company.forEach((d, i) => {
        travel(d, [-2.4 + i * 0.9, 0], [-2.6 + i * 0.95, 1.8], seg(t, 3, 5), dt, true);
        script(d, t, [[0, 'guard'], [5, d === company[2] ? 'chop' : 'strike'], [9.5, 'cheer']]);
      });
      elves.forEach((e, i) => { put(e, 3.2 + i * 0.6, 0.4, 0, 4); act(e, t < 9 ? 'shoot' : 'look'); });
      put(bard, 2.4, -0.4, 0, 4);
      act(bard, t < 9 ? 'shoot' : 'cheer');
      put(bilbo, -0.5, -1.4, 0, 4);
      script(bilbo, t, [[0, 'look'], [4, 'cower'], [9.5, 'point']]);
      put(gandalf, 0.8, -1.2, 0, 4);
      script(gandalf, t, [[0, 'cast'], [4, 'strike'], [9.5, 'look']]);
      eagles.forEach((e, i) => {
        const k = seg(t, 5 + i * 0.6, 11);
        e.position.set(lerp(-9, 9, k), base + 3.5 + i * 0.5, 3 + i);
        e.rotation.y = Math.PI / 2;
      });
      travel(beorn, [-6, 4], [-2.5, 3.5], seg(t, 7, 9), dt, true);
      if (t < 7) put(beorn, -6, 4);
      act(beorn, t > 9 && t < 12 ? 'strike' : 'idle');
      beorn.visible = t > 6.5;
    };
  },
};

/** journey id -> stop index -> scene (stops as listed in Atlas.kt). */
export const SCENES = {
  ring_bearer: [farewellParty, prancingPony, stabbedOnWeathertop, councilOfElrond, bridgeOfKhazadDum,
    mirrorOfGaladriel, breakingOfTheFellowship, deadMarshes, theBlackGate, faramirAtOsgiliath, cirithUngol, crackOfDoom],
  three_hunters: [huntingTheUruks, gandalfTheWhite, theodenKing, helmsDeep, floodingOfIsengard,
    pathsOfTheDead, shipsAtPelargir, pelennorFields, eaglesAtTheBlackGate],
  merry_and_pippin: [carriedByUruks, treebeard, floodingOfIsengard, palantir, witchKingOnThePelennor],
  there_and_back_again: [unexpectedParty, trollsTurnToStone, moonLetters, riddlesInTheDark, eaglesAtTheCarrock,
    barrelsOutOfBond, smaugAtLakeTown, battleOfFiveArmies],
};

/**
 * Who walks each journey, and between which stops (inclusive; a member is there while the
 * travellers are anywhere from stop `from` to stop `to`). The company grows and shrinks as in the
 * story: the Fellowship forms at Rivendell, Gandalf falls in Moria and comes back white, Frodo
 * and Sam go on alone with Gollum; Merry rides with the Rohirrim and Pippin with Gandalf.
 */
export const COMPANIES = {
  ring_bearer: [
    ['frodo', 0, 11], ['sam', 0, 11], ['merry', 0, 6], ['pippin', 0, 6], ['aragorn', 1, 6],
    ['gandalf', 3, 4], ['legolas', 3, 6], ['gimli', 3, 6], ['boromir', 3, 6], ['gollum', 6.5, 11],
  ],
  three_hunters: [
    ['aragorn', 0, 8], ['legolas', 0, 8], ['gimli', 0, 8], ['gandalf_white', 1, 4], ['theoden', 2, 4],
    ['eomer', 2, 3], ['merry', 4, 4], ['pippin', 4, 4], ['gandalf_white', 7, 8], ['eomer', 7, 8], ['pippin', 8, 8],
  ],
  merry_and_pippin: [
    ['merry', 0, 4], ['pippin', 0, 4], ['treebeard', 1, 2], ['gandalf_white', 3, 4], ['theoden', 3, 4], ['eowyn', 4, 4],
  ],
  there_and_back_again: [
    ['bilbo', 0, 7], ['gandalf', 0, 4], ...DWARVES.map((id) => [id, 0, 7]), ['gandalf', 7, 7],
  ],
};
