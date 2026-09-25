// What happens at each stop of each journey, as a short looping scene played by the travellers
// and whoever they meet there - stylised, like a diorama coming to life, not a film.
//
// A scene is { period, dist, run(ctx) }: run() builds it and returns update(t, dt), called every
// frame with t looping 0..period. Everything is placed in the travellers' local space (figure
// units: a Man is ~1 tall; +z is the way they were walking). The ctx gives:
//   cast(id)         a character: a member of the company (held for the scene), or a new one
//   add(obj)         adds a prop or creature; obj.userData.update(dt, t) runs every frame
//   at(placeId)      another place's position in local space (for things seen in the distance)
//   stage(r)         a flat floor height (local y) above the ground within radius r
// Objects sit on the ground unless obj.userData.ground = false (then y is local, from the stop).
import * as THREE from 'three';
import { makeEmitter, makeFire, makeFirework, makeFlash, makeBeam } from './effects.js';
import { makeBalrog, makeDragon, makeEagle, makeFellBeast, makeTroll, makeBarrel, makeShip, makeMumak } from './creatures.js';
import { makeCharacter, makeNazgul, makeOrc, makeGhost } from './characters.js';
import { makeHorse } from './figures.js';
import { modelFor } from './models.js';

const seg = (t, a, b) => Math.min(1, Math.max(0, (t - a) / (b - a)));
const ease = (x) => x * x * (3 - 2 * x);
const lerp = (a, b, k) => a + (b - a) * k;
const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, flatShading: true, ...extra });

function put(obj, x, z, faceX, faceZ) {
  obj.position.x = x;
  obj.position.z = z;
  if (faceX !== undefined) obj.rotation.y = Math.atan2(faceX - x, faceZ - z);
}

/** Moves obj from a to b as k goes 0..1, facing the way it goes and walking while it moves. */
function travel(obj, a, b, k, dt) {
  const kk = ease(k);
  obj.position.x = lerp(a[0], b[0], kk);
  obj.position.z = lerp(a[1], b[1], kk);
  if (k > 0 && k < 1) obj.rotation.y = Math.atan2(b[0] - a[0], b[1] - a[1]);
  obj.userData.walk?.(k > 0 && k < 1 ? dt : 0);
}

/** A ring of figures around (cx, cz), all facing the middle. */
function ring(objs, r, cx = 0, cz = 0, start = 0) {
  objs.forEach((o, i) => {
    const a = start + (i / objs.length) * Math.PI * 2;
    put(o, cx + Math.sin(a) * r, cz + Math.cos(a) * r, cx, cz);
  });
}

function fall(obj, k, backwards = true) {
  obj.rotation.x = (backwards ? -1 : 1) * ease(k) * 1.45;
}

function blackRider() {
  const g = new THREE.Group();
  const horse = makeHorse(0x0c0b0a, true);
  const rider = makeNazgul();
  rider.position.y = 0.7;
  rider.scale.setScalar(0.85);
  g.add(horse, rider);
  g.userData.walk = horse.userData.walk;
  return g;
}

function ringOfPower() {
  const r = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.025, 8, 20), new THREE.MeshStandardMaterial({ color: 0xffd060, emissive: 0xffa020, emissiveIntensity: 0.9, metalness: 1, roughness: 0.2 }));
  const g = new THREE.Group();
  g.add(r);
  const glow = makeFlash(0xffc040, 0.35, 4);
  glow.userData.set(0.8);
  g.add(glow);
  g.userData.ring = r;
  return g;
}

// --- The scenes ---------------------------------------------------------------------------

const partyAtHobbiton = {
  period: 12, dist: 24,
  run(ctx) {
    const gandalf = ctx.cast('gandalf');
    put(gandalf, 1.6, 1.2, 0, 3);
    const works = [0xffd070, 0x9ad0ff, 0xff8ab0, 0xb0ff9a].map((c, i) => {
      const f = ctx.add(makeFirework(c, 5 + i, i * 0.8));
      put(f, -2 + i * 1.3, 3.5);
      return f;
    });
    // Gandalf's dragon firework: a little dragon of sparks roaring over the Party Field.
    const dragon = ctx.add(makeDragon({ color: 0xff7a20, belly: 0xffd060, scale: 0.28, model: false }));
    dragon.userData.ground = false;
    return (t, dt) => {
      const a = t * 0.8;
      dragon.position.set(Math.sin(a) * 3, 3.5 + Math.sin(t * 1.7) * 0.4, 3 + Math.cos(a) * 2);
      dragon.rotation.y = a + Math.PI / 2;
      dragon.userData.breathe(t % 4 < 1.2);
      gandalf.rotation.y = Math.atan2(dragon.position.x - gandalf.position.x, dragon.position.z - gandalf.position.z);
      void works;
    };
  },
};

const blackRidersAtBree = {
  period: 12, dist: 21,
  run(ctx) {
    const riders = [0, 1, 2, 3].map(() => ctx.add(blackRider()));
    const hobbits = ['frodo', 'sam', 'merry', 'pippin'].map((id) => ctx.cast(id));
    const strider = ctx.cast('aragorn');
    hobbits.forEach((h, i) => put(h, -0.5 + i * 0.35, -0.6, 0, 3));
    put(strider, 0.9, -0.2, 0, 3);
    return (t, dt) => {
      riders.forEach((r, i) => {
        const a = i * 1.4 - 2;
        travel(r, [a * 2.2, 7], [a * 0.5, 2.2], seg(t, i * 0.6, 5 + i * 0.6), dt);
        if (t > 8) travel(r, [a * 0.5, 2.2], [a * 2.2, 7], seg(t, 8, 11), dt);
      });
      // The hobbits shrink back behind Strider as the riders come.
      hobbits.forEach((h, i) => { h.position.z = -0.6 - ease(seg(t, 3, 5)) * 0.6 + ease(seg(t, 9, 11)) * 0.6; });
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
    const flash = ctx.add(makeFlash(0xf4f0ff, 2.5, 12));
    flash.userData.ground = false;
    flash.position.y = 0.6;
    const torch = ctx.add(makeFire(0.35));
    torch.userData.ground = false;
    return (t, dt) => {
      // The Nine (five of them) close in from the dark.
      wraiths.forEach((w, i) => {
        const a = (i - 2) * 0.55;
        const r = lerp(4, 1.1, ease(seg(t, 0, 4))) + ease(seg(t, 8, 10.5)) * 4;
        put(w, Math.sin(a) * r, 0.3 + Math.cos(a) * r, 0, 0.3);
        w.userData.walk(t < 4 || (t > 8 && t < 10.5) ? dt : 0);
      });
      // Frodo puts on the Ring: the wraith-world flares white...
      flash.userData.set(seg(t, 4.2, 4.6) * (1 - seg(t, 6.5, 7.5)) * 0.9);
      // ...the Witch-king strikes, and Frodo falls.
      const lunge = ease(seg(t, 5.2, 5.8)) * (1 - seg(t, 7, 8));
      witchKing.position.z = lerp(witchKing.position.z, 0.9, lunge);
      witchKing.userData.blade.rotation.x = -0.4 - lunge * 1.2;
      fall(frodo, seg(t, 5.8, 6.4) * (1 - seg(t, 11, 11.8)));
      // Strider leaps in with fire.
      travel(strider, [1.6, -1.2], [0.7, 1.4], seg(t, 6.5, 7.5), dt);
      if (t < 6.5) put(strider, 1.6, -1.2, 0, 1);
      torch.position.set(strider.position.x + 0.2, 0.9, strider.position.z + 0.2);
      torch.userData.set(t > 6.4);
    };
  },
};

const councilOfElrond = {
  period: 10, dist: 15,
  run(ctx) {
    const nine = ['frodo', 'sam', 'merry', 'pippin', 'gandalf', 'aragorn', 'legolas', 'gimli', 'boromir'].map((id) => ctx.cast(id));
    ring(nine, 1.7, 0, 0.8);
    const plinth = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.5, 8), mat(0xd8d0c0)));
    put(plinth, 0, 0.8);
    const ring1 = ctx.add(ringOfPower());
    ring1.userData.ground = false;
    ring1.position.set(0, 0, 0.8);
    const base = ctx.stage(0.5);
    return (t) => {
      ring1.position.y = base + 0.65 + Math.sin(t * 2) * 0.04;
      ring1.userData.ring.rotation.y = t;
      // Frodo steps forward: "I will take it."
      const step = ease(seg(t, 4, 6)) * (1 - seg(t, 8.5, 9.8));
      const home = nine[0].userData.home ||= nine[0].position.clone();
      nine[0].position.x = lerp(home.x, home.x * 0.55, step);
      nine[0].position.z = lerp(home.z, 0.8 + (home.z - 0.8) * 0.55, step);
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
    // A void over the chasm, so no daylight shows through, and fire far below.
    const voidDisc = flat(ctx.add(new THREE.Mesh(new THREE.CircleGeometry(1.6, 32), new THREE.MeshBasicMaterial({ color: 0x030201 }))), -0.4);
    voidDisc.rotation.x = -Math.PI / 2;
    put(voidDisc, 0, 1.5);
    const depths = flat(ctx.add(makeEmitter({ count: 70, size: 1.1, life: 1.4, spread: 1.2, velocity: [0, 0.9, 0], jitter: 0.4 })), -0.35);
    put(depths, 0, 1.5);
    // Pillars of the Dwarrowdelf, beyond the chasm (none between it and the camera).
    [-1.1, -0.5, 0.5, 1.1].forEach((a) => {
      const pillar = flat(ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 3.5, 8), stone)), 1.75);
      put(pillar, Math.sin(a) * 4, 1.5 + Math.cos(a) * 4);
    });
    const bridgeNear = flat(ctx.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.7), stone)));
    const bridgeFar = flat(ctx.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.7), stone)));
    put(bridgeNear, 0, 0.7);
    put(bridgeFar, 0, 2.3);
    const gandalf = flat(ctx.cast('gandalf'), 0.04);
    const company = ['frodo', 'sam', 'merry', 'pippin', 'aragorn', 'legolas', 'gimli', 'boromir'].map((id) => flat(ctx.cast(id)));
    company.forEach((c, i) => put(c, -1.2 + (i % 4) * 0.8, -0.6 - Math.floor(i / 4) * 0.6, 0, 2));
    const balrog = flat(ctx.add(makeBalrog()), -6);
    balrog.scale.setScalar(0.55);
    const staff = flat(ctx.add(makeFlash(0xffffff, 1.2, 8)), 1.1);
    return (t) => {
      put(gandalf, 0, 1.2, 0, 3);
      // The Balrog rises out of the dark on the far side...
      balrog.position.set(0, y0 - 6 + ease(seg(t, 0, 3)) * 6.2 - ease(seg(t, 6, 8)) * 9, 3.7);
      balrog.rotation.y = Math.PI;
      // ..."You shall not pass!" - the staff blazes, the bridge breaks under it...
      staff.position.set(0, y0 + 1.2, 1.4);
      staff.userData.set(seg(t, 3.5, 4) * (1 - seg(t, 5, 6)));
      const breakK = ease(seg(t, 5, 7));
      bridgeFar.rotation.x = breakK * 1.2;
      bridgeFar.position.y = y0 - breakK * 5;
      // ...the whip catches Gandalf, and he falls: "Fly, you fools!"
      gandalf.position.y = y0 + 0.04 - ease(seg(t, 8, 10)) * 7;
      gandalf.rotation.x = seg(t, 7.5, 8.5) * 0.5;
      if (t > 12.5 || t < 0.05) {
        bridgeFar.rotation.x = 0;
        bridgeFar.position.y = y0;
      }
    };
  },
};

const mirrorOfGaladriel = {
  period: 9, dist: 14,
  run(ctx) {
    const galadriel = ctx.add(makeCharacter('eowyn'));
    galadriel.traverse((o) => { if (o.material) { o.material = o.material.clone(); o.material.color.set(0xf4f2ea); o.material.emissive = new THREE.Color(0xffffff); o.material.emissiveIntensity = 0.5; } });
    put(galadriel, 0, 1.6, 0, 0);
    const light = ctx.add(makeFlash(0xe8f0ff, 1.4, 10));
    light.userData.ground = false;
    const basin = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.4, 16), new THREE.MeshStandardMaterial({ color: 0xd8dde8, metalness: 0.9, roughness: 0.15 })));
    put(basin, 0, 0.8);
    const frodo = ctx.cast('frodo');
    put(frodo, 0, 0.2, 0, 1);
    const base = ctx.stage(1);
    return (t) => {
      light.position.set(0, base + 1.1, 1.6);
      light.userData.set(0.55 + Math.sin(t * 1.4) * 0.25 + seg(t, 4, 4.6) * (1 - seg(t, 5.5, 7)) * 0.6);
    };
  },
};

const breakingOfTheFellowship = {
  period: 13, dist: 20,
  run(ctx) {
    const boromir = ctx.cast('boromir');
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    const aragorn = ctx.cast('aragorn');
    const uruks = [0, 1, 2, 3, 4, 5].map(() => ctx.add(makeOrc()));
    const arrows = [0, 1, 2].map(() => {
      const a = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.45, 4), mat(0x1a1a1a)));
      a.userData.ground = false;
      return a;
    });
    const base = ctx.stage(3);
    return (t, dt) => {
      put(boromir, 0, 0.6, 0, 3);
      put(merry, -0.4, 0.2, 0, 3);
      put(pippin, 0.4, 0.2, 0, 3);
      uruks.forEach((u, i) => travel(u, [-2.5 + i, 7], [-1.2 + i * 0.5, 1.8], seg(t, 0, 3), dt));
      // Three black arrows...
      arrows.forEach((a, i) => {
        const hit = seg(t, 3.2 + i * 0.9, 3.5 + i * 0.9);
        a.visible = t > 3.2 + i * 0.9;
        a.position.set(lerp(-1, -0.05 + i * 0.05, hit), base + 0.55 + i * 0.08, lerp(3, 0.72, hit));
        a.rotation.x = Math.PI / 2;
      });
      // ...and Boromir sinks to his knees, then falls.
      boromir.scale.y = 1 - ease(seg(t, 5.4, 6)) * 0.35;
      fall(boromir, seg(t, 7.5, 8.5));
      // The Uruks carry off Merry and Pippin.
      const carry = seg(t, 6, 10);
      [merry, pippin].forEach((h, i) => {
        if (carry > 0) {
          travel(h, [i ? 0.4 : -0.4, 0.2], [(i ? 1 : -1) * 2, 7], carry, dt);
          h.userData.lift = 0.6 * Math.min(1, carry * 4);
        } else h.userData.lift = 0;
      });
      if (carry > 0) uruks.slice(0, 2).forEach((u, i) => travel(u, [-1.2 + i * 0.5, 1.8], [(i ? 1 : -1) * 2, 7.2], carry, dt));
      travel(aragorn, [2.5, -1.5], [0.5, 0.9], seg(t, 8, 9.5), dt);
      if (t < 8) put(aragorn, 2.5, -1.5, 0, 2);
    };
  },
};

const deadMarshes = {
  period: 9, dist: 13,
  run(ctx) {
    const faces = [0, 1, 2, 3, 4, 5].map((i) => {
      const g = ctx.add(makeGhost());
      g.rotation.x = -Math.PI / 2;
      g.userData.lift = -0.05;
      put(g, -2 + (i % 3) * 1.8, 1 + Math.floor(i / 3) * 1.6);
      return g;
    });
    const lights = [0, 1, 2, 3].map((i) => {
      const e = ctx.add(makeEmitter({ count: 20, color: 0xd8ffe8, endColor: 0x103020, size: 0.3, life: 2, spread: 0.1, velocity: [0, 0.15, 0], jitter: 0.1 }));
      put(e, -1.5 + i, 0.8 + (i % 2) * 1.5);
      e.userData.lift = 0.25;
      return e;
    });
    const frodo = ctx.cast('frodo');
    const gollum = ctx.cast('gollum');
    const sam = ctx.cast('sam');
    return (t, dt) => {
      put(gollum, 0.6, 1.2 + Math.sin(t) * 0.1, 0, 4);
      put(sam, -0.6, -0.3, 0, 2);
      // Frodo is drawn towards the faces in the water.
      travel(frodo, [0, 0], [-0.9, 1.6], seg(t, 2, 5) * (1 - seg(t, 6.5, 8.5)), dt);
      frodo.rotation.x = seg(t, 4, 5) * (1 - seg(t, 6, 7)) * 0.6;
      faces.forEach((f, i) => f.children.forEach((c) => { if (c.material) c.material.opacity = 0.3 + Math.sin(t * 2 + i) * 0.15; }));
      void lights;
    };
  },
};

const theBlackGate = {
  period: 10, dist: 21,
  run(ctx) {
    const march = [...Array(10)].map(() => ctx.add(makeOrc()));
    ['frodo', 'sam', 'gollum'].forEach((id, i) => {
      const c = ctx.cast(id);
      put(c, -1.0 + i * 0.35, -0.9, 0, 0.5);
      c.scale.y = 0.75; // crouching, hidden
    });
    return (t, dt) => {
      march.forEach((o, i) => {
        const k = ((t / 10) + i / 10) % 1;
        travel(o, [4 - (i % 2) * 0.6, -3], [0 - (i % 2) * 0.6, 4], k, dt);
      });
    };
  },
};

const fellBeastOverOsgiliath = {
  period: 10, dist: 18,
  run(ctx) {
    const beast = ctx.add(makeFellBeast(makeNazgul()));
    beast.userData.ground = false;
    const frodo = ctx.cast('frodo');
    const sam = ctx.cast('sam');
    const ringGlow = ctx.add(makeFlash(0xffc040, 0.3, 3));
    ringGlow.userData.ground = false;
    const base = ctx.stage(2);
    return (t, dt) => {
      const a = t * 0.9;
      beast.position.set(Math.sin(a) * 3, base + 3.5 - seg(t, 3, 5) * 1.5 + seg(t, 6, 8) * 1.5, 1.5 + Math.cos(a) * 2.5);
      beast.rotation.y = a + Math.PI / 2;
      put(frodo, 0, 0.5, beast.position.x, beast.position.z);
      // Frodo holds the Ring up to the Nazgûl - and Sam pulls him down.
      ringGlow.position.set(0, base + 0.95 + seg(t, 3, 4.5) * 0.35, 0.6);
      ringGlow.userData.set(seg(t, 3, 4) * (1 - seg(t, 5, 5.5)));
      travel(sam, [-0.8, -0.2], [-0.15, 0.4], seg(t, 4.8, 5.4), dt);
      frodo.rotation.x = -seg(t, 5.4, 6) * (1 - seg(t, 8, 9)) * 1.3;
      if (t < 4.8) put(sam, -0.8, -0.2, 0, 1);
    };
  },
};

const morgulBeam = {
  period: 10, dist: 21,
  run(ctx) {
    const beam = ctx.add(makeBeam(0x7dffb0, 40, 0.3));
    beam.userData.ground = false;
    const host = [0, 1, 2, 3, 4].map(() => ctx.add(blackRider()));
    const base = ctx.stage(1);
    ['frodo', 'sam', 'gollum'].forEach((id, i) => put(ctx.cast(id), -0.7 + i * 0.35, -0.9, 0, 0));
    ctx.focus(0, base + 1, 0);
    return (t, dt) => {
      beam.position.set(0, base + 20, 0);
      beam.material.opacity = 0.25 + seg(t, 1, 1.5) * (1 - seg(t, 3, 5)) * 0.6;
      host.forEach((r, i) => travel(r, [0, 0.4], [3 + i * 0.4, -4 - i * 0.8], seg(t, 3 + i * 0.4, 9), dt));
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
    theRing.userData.ground = false;
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
      // Gollum leaps, bites the Ring away...
      travel(gollum, [1.05, -0.9], [0.15, -0.95], seg(t, 2, 3), dt);
      if (t < 2) put(gollum, 1.05, -0.9, 0, 0);
      // ...and topples into the fire with it.
      const drop = ease(seg(t, 4.5, 6));
      if (t > 4.5) put(gollum, 0.15, lerp(-0.95, 0, drop));
      gollum.position.y = top - 0.1 - drop * 1.2;
      theRing.visible = t > 2.5 && t < 6.2;
      theRing.position.set(0.15, top + 0.35 - drop * 1.3, lerp(-0.95, 0, drop));
      // The mountain erupts.
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

const gandalfTheWhite = {
  period: 9, dist: 15,
  run(ctx) {
    const gandalf = ctx.cast('gandalf_white');
    const flash = ctx.add(makeFlash(0xffffff, 2.2, 14));
    flash.userData.ground = false;
    const hunters = ['aragorn', 'legolas', 'gimli'].map((id) => ctx.cast(id));
    hunters.forEach((h, i) => put(h, -0.8 + i * 0.8, -0.2, 0, 2));
    const base = ctx.stage(1);
    return (t) => {
      put(gandalf, 0, 1.8, 0, 0);
      gandalf.visible = t > 1.5;
      flash.position.set(0, base + 0.8, 1.8);
      flash.userData.set(seg(t, 1, 1.6) * (1 - seg(t, 3, 5)) + 0.15 * (t > 3));
      hunters.forEach((h) => { h.rotation.x = -seg(t, 1, 1.5) * (1 - seg(t, 3, 4)) * 0.4; });
    };
  },
};

const theodenKing = {
  period: 9, dist: 15,
  run(ctx) {
    const theoden = ctx.cast('theoden');
    const gandalf = ctx.cast('gandalf_white');
    const light = ctx.add(makeFlash(0xfff0c0, 1.5, 10));
    light.userData.ground = false;
    ['aragorn', 'legolas', 'gimli'].forEach((id, i) => put(ctx.cast(id), -1 + i * 0.5, -0.6, 0, 1));
    const base = ctx.stage(1);
    return (t) => {
      put(theoden, 0, 1.5, 0, 0);
      put(gandalf, 0.2, 0.4, 0, 1.5);
      // Saruman's hold breaks: the old king straightens and grows young.
      theoden.rotation.x = (1 - ease(seg(t, 2.5, 4.5))) * 0.5;
      theoden.scale.setScalar(0.85 + ease(seg(t, 2.5, 4.5)) * 0.15);
      light.position.set(0, base + 1, 1.5);
      light.userData.set(seg(t, 2, 2.6) * (1 - seg(t, 4, 6)));
    };
  },
};

const helmsDeep = {
  period: 15, dist: 24,
  run(ctx) {
    const defenders = ['aragorn', 'legolas', 'gimli', 'theoden'].map((id) => ctx.cast(id));
    defenders.forEach((d, i) => { put(d, -1.2 + i * 0.8, -0.3, 0, 4); d.userData.lift = 0.9; });
    const horde = [...Array(14)].map(() => ctx.add(makeOrc()));
    const blast = ctx.add(makeEmitter({ count: 160, color: 0xffb060, endColor: 0x201008, size: 1, life: 1.5, spread: 0.3, velocity: [0, 3, 0], jitter: 4, gravity: 3, rate: 0 }));
    const riders = [0, 1, 2, 3, 4].map(() => ctx.add(makeCharacter('rohirrim')));
    const white = ctx.cast('gandalf_white');
    const dawn = ctx.add(makeFlash(0xfff4d0, 3, 30));
    dawn.userData.ground = false;
    const base = ctx.stage(4);
    return (t, dt) => {
      horde.forEach((o, i) => {
        const row = Math.floor(i / 7), col = i % 7;
        travel(o, [-3 + col, 7 + row], [-3 + col, 1.4 + row * 0.6], seg(t, 0, 5), dt);
        fall(o, seg(t, 10 + col * 0.15, 11 + col * 0.15), false);
      });
      // The Deeping Wall is blown open.
      put(blast, 0, 0.6);
      blast.userData.on = t > 5.5 && t < 6;
      // Dawn on the fifth day: Gandalf and the Rohirrim ride down.
      dawn.position.set(-6, base + 4, 3);
      dawn.userData.set(seg(t, 8, 9) * (1 - seg(t, 13, 14.5)));
      riders.forEach((r, i) => travel(r, [-7, 1 + i * 0.7], [4, 2 + i * 0.7], seg(t, 8.5 + i * 0.2, 12.5 + i * 0.2), dt));
      travel(white, [-7.5, 3.5], [3.5, 3.5], seg(t, 8.3, 12.3), dt);
      if (t < 8.3) put(white, -7.5, 3.5);
      white.visible = t > 8;
    };
  },
};

const floodingOfIsengard = {
  period: 11, dist: 21,
  run(ctx) {
    const base = ctx.stage(3);
    const water = ctx.add(new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 0.05, 32), new THREE.MeshStandardMaterial({ color: 0x3a6a78, transparent: true, opacity: 0.8, roughness: 0.2, metalness: 0.3 })));
    water.userData.ground = false;
    const foam = ctx.add(makeEmitter({ count: 90, color: 0xe8f4ff, endColor: 0x305060, size: 0.5, life: 1, spread: 1.2, velocity: [0, 1.2, 1.5], jitter: 0.8, additive: false }));
    foam.userData.ground = false;
    const ents = [0, 1, 2].map(() => ctx.add(makeCharacter('treebeard')));
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    return (t, dt) => {
      water.position.set(0, base - 0.4 + ease(seg(t, 2, 7)) * 0.8 * (1 - seg(t, 10, 11)), 2.5);
      foam.position.set(-2.5, base + 0.2, 1);
      foam.userData.on = t > 2 && t < 7;
      ents.forEach((e, i) => travel(e, [-4 + i * 1.5, -2], [-2.5 + i * 1.5, 0.2], seg(t, 0, 3), dt));
      put(merry, 2.2, -0.8, 0, 2);
      put(pippin, 2.6, -0.8, 0, 2);
    };
  },
};

const pathsOfTheDead = {
  period: 10, dist: 18,
  run(ctx) {
    const dead = [...Array(12)].map(() => ctx.add(makeGhost()));
    const king = ctx.add(makeCharacter('ghost'));
    king.scale.setScalar(1.25);
    const mist = ctx.add(makeEmitter({ count: 80, color: 0x90ffc0, endColor: 0x051008, size: 1.2, life: 3, spread: 2, velocity: [0, 0.2, 0], jitter: 0.3 }));
    put(mist, 0, 2.2);
    ['aragorn', 'legolas', 'gimli'].forEach((id, i) => put(ctx.cast(id), -0.6 + i * 0.6, -0.2, 0, 3));
    return (t) => {
      dead.forEach((d, i) => {
        put(d, -2.5 + (i % 6), 2.4 + Math.floor(i / 6) * 0.9, 0, 0);
        d.userData.lift = -1.3 + ease(seg(t, 0.5 + (i % 6) * 0.25, 3 + (i % 6) * 0.25)) * 1.3;
      });
      put(king, 0, 1.4, 0, 0);
      king.userData.lift = -1.5 + ease(seg(t, 0, 2.5)) * 1.5;
    };
  },
};

const shipsAtPelargir = {
  period: 11, dist: 22,
  run(ctx) {
    const ships = [0, 1, 2].map(() => ctx.add(makeShip()));
    ships.forEach((s, i) => put(s, -2.5 + i * 2.5, 3.5, -2.5 + i * 2.5, 10));
    const dead = [...Array(10)].map(() => ctx.add(makeGhost()));
    ['aragorn', 'legolas', 'gimli'].forEach((id, i) => put(ctx.cast(id), -0.5 + i * 0.5, 0, 0, 3));
    return (t, dt) => {
      dead.forEach((d, i) => travel(d, [-3 + i * 0.6, -1.5], [-3 + i * 0.66, 3.6], seg(t, 1 + (i % 5) * 0.2, 5 + (i % 5) * 0.2), dt));
      ships.forEach((s, i) => { s.rotation.z = Math.sin(t * 1.2 + i) * 0.05; });
    };
  },
};

const pelennorFields = {
  period: 14, dist: 28,
  run(ctx) {
    const mumakil = [0, 1].map(() => ctx.add(makeMumak()));
    const riders = [...Array(6)].map(() => ctx.add(makeCharacter('rohirrim')));
    const beast = ctx.add(makeFellBeast(makeNazgul(true)));
    beast.userData.ground = false;
    const fires = [0, 1, 2].map((i) => {
      const f = ctx.add(makeFire(0.8));
      put(f, -3 + i * 3, 5);
      return f;
    });
    ['aragorn', 'legolas', 'gimli'].forEach((id, i) => put(ctx.cast(id), 2.5 + i * 0.5, -1, 0, 3));
    const base = ctx.stage(3);
    return (t, dt) => {
      mumakil.forEach((m, i) => travel(m, [-5 + i * 3, 7], [-2 + i * 3, 1], seg(t, 0, 10), dt));
      riders.forEach((r, i) => travel(r, [-7, 0 + (i % 3) * 0.8], [5, 3 + (i % 3) * 0.8], seg(t, 3 + i * 0.3, 8 + i * 0.3), dt));
      const a = t * 0.7;
      beast.position.set(Math.sin(a) * 4, base + 4, 2 + Math.cos(a) * 3);
      beast.rotation.y = a + Math.PI / 2;
      void fires;
    };
  },
};

const eaglesAtTheBlackGate = {
  period: 12, dist: 24,
  run(ctx) {
    const hosts = [...Array(12)].map(() => ctx.add(makeOrc()));
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
    ['aragorn', 'legolas', 'gimli', 'gandalf_white', 'pippin', 'merry'].forEach((id, i) => put(ctx.cast(id), -1.5 + i * 0.6, -0.5, 0, 3));
    return (t) => {
      eagles.forEach((e, i) => {
        const k = seg(t, 2 + i * 0.5, 9 + i * 0.5);
        e.position.set(lerp(-10, 10, k), base + 3 + Math.sin(k * Math.PI) * 1.5 + i * 0.4, 2 + i * 0.8);
        e.rotation.y = Math.PI / 2;
      });
      eruption.userData.on = t > 6 && t < 10;
      hosts.forEach((o, i) => { o.rotation.y = t > 7 ? Math.PI : 0; });
    };
  },
};

const carriedByUruks = {
  period: 8, dist: 17,
  run(ctx) {
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    const uruks = [0, 1, 2, 3, 4].map(() => ctx.add(makeOrc()));
    return (t, dt) => {
      uruks.forEach((u, i) => { put(u, -1 + (i % 3) * 1, 0.5 + Math.floor(i / 3) * 0.8, 0, 5); u.userData.walk(dt); });
      put(merry, -1, 0.5, 0, 5);
      put(pippin, 0, 0.5, 0, 5);
      merry.userData.lift = pippin.userData.lift = 0.65;
      merry.rotation.z = pippin.rotation.z = Math.PI / 2;
    };
  },
};

const treebeard = {
  period: 9, dist: 15,
  run(ctx) {
    const tb = ctx.cast('treebeard');
    const merry = ctx.cast('merry');
    const pippin = ctx.cast('pippin');
    return (t, dt) => {
      const k = seg(t, 2, 4);
      put(tb, 0, 1.2, 0, 0);
      tb.rotation.y = Math.PI * (1 - ease(seg(t, 0.5, 2)));
      // Hoom, hom: he picks the hobbits up and sets them on his shoulders.
      [merry, pippin].forEach((h, i) => {
        put(h, lerp(i ? 0.5 : -0.5, i ? 0.3 : -0.3, k), lerp(0.2, 1.2, k), 0, 3);
        h.userData.lift = ease(k) * 2.2;
      });
      tb.userData.walk(t > 5 ? dt : 0);
    };
  },
};

const palantir = {
  period: 9, dist: 14,
  run(ctx) {
    const pippin = ctx.cast('pippin');
    const orb = ctx.add(new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), new THREE.MeshStandardMaterial({ color: 0x0a0a10, emissive: 0x401000, metalness: 0.6, roughness: 0.2 })));
    orb.userData.ground = false;
    const eye = ctx.add(makeFlash(0xff6a10, 0.9, 8));
    eye.userData.ground = false;
    const gandalf = ctx.cast('gandalf_white');
    const base = ctx.stage(1);
    return (t, dt) => {
      put(pippin, 0, 0.4, 0, 1);
      orb.position.set(0, base + 0.42, 0.7);
      eye.position.copy(orb.position);
      const look = seg(t, 2, 3) * (1 - seg(t, 5, 6));
      eye.userData.set(look);
      orb.material.emissiveIntensity = 0.5 + look * 3;
      fall(pippin, seg(t, 4.5, 5.2) * (1 - seg(t, 8, 8.8)));
      travel(gandalf, [2.5, 2], [0.6, 0.9], seg(t, 5, 6.5), dt);
    };
  },
};

const beaconsAreLit = {
  period: 16, dist: 240,
  run(ctx) {
    const pippin = ctx.cast('pippin');
    put(pippin, 0.3, 0.3, 0, 2);
    // Along the White Mountains from Minas Tirith to Edoras, each beacon catches the last.
    const from = ctx.at('minas_tirith'), to = ctx.at('edoras');
    ctx.focus((from.x + to.x) / 2, from.y, (from.z + to.z) / 2);
    const beacons = [...Array(8)].map((_, i) => {
      const k = i / 7;
      const f = ctx.add(makeFire(9));
      f.position.set(lerp(from.x, to.x, k), 0, lerp(from.z, to.z, k));
      f.userData.lift = 1.5;
      const glow = ctx.add(makeFlash(0xffa040, 6));
      glow.position.copy(f.position);
      glow.userData.lift = 3;
      return [f, glow];
    });
    return (t) => {
      beacons.forEach(([f, glow], i) => {
        const lit = t > 1.5 + i * 1.4 && t < 15;
        f.userData.set(lit);
        glow.userData.set(lit ? 0.7 + Math.sin(t * 7 + i) * 0.15 : 0);
      });
    };
  },
};

const trollsTurnToStone = {
  period: 12, dist: 17,
  run(ctx) {
    const trolls = [0, 1, 2].map(() => ctx.add(makeTroll()));
    trolls.forEach((tr, i) => { put(tr, -1.8 + i * 1.8, 2.2, 0, 1.3); tr.scale.setScalar(0.85); });
    const fire = ctx.add(makeFire(0.9));
    put(fire, 0, 1.3);
    const sun = ctx.add(makeFlash(0xffe8b0, 4, 40));
    sun.userData.ground = false;
    const gandalf = ctx.cast('gandalf');
    const base = ctx.stage(2);
    return (t) => {
      put(gandalf, 3, 0, 0, 2);
      // "Dawn take you all, and be stone to you!"
      sun.position.set(6, base + 2, 4);
      sun.userData.set(seg(t, 6, 7) * (1 - seg(t, 10.5, 11.8)));
      trolls.forEach((tr) => tr.userData.turnToStone(seg(t, 6.5, 8) * (1 - seg(t, 11.5, 11.9))));
      fire.userData.set(t < 7.5);
    };
  },
};

const moonLetters = {
  period: 8, dist: 13,
  run(ctx) {
    const table = ctx.add(new THREE.Mesh(new THREE.BoxGeometry(1, 0.4, 0.6), mat(0xd8d0c0)));
    put(table, 0, 0.9);
    const map = ctx.add(new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), new THREE.MeshStandardMaterial({ color: 0xe8d8b0, emissive: 0x3060ff, emissiveIntensity: 0 })));
    map.userData.ground = false;
    map.rotation.x = -Math.PI / 2;
    const moon = ctx.add(makeFlash(0xc8d8ff, 1.2, 8));
    moon.userData.ground = false;
    ['thorin', 'bilbo', 'gandalf', 'balin'].forEach((id, i) => { const c = ctx.cast(id); ring([c], 1, 0, 0.9, i * 1.2 - 1.8); });
    const base = ctx.stage(1);
    return (t) => {
      map.position.set(0, base + 0.42, 0.9);
      const k = seg(t, 2, 3.5) * (1 - seg(t, 6, 7.5));
      map.material.emissiveIntensity = k * 1.5;
      moon.position.set(0, base + 3, 1.5);
      moon.userData.set(0.3 + k * 0.5);
    };
  },
};

const riddlesInTheDark = {
  period: 11, dist: 11,
  run(ctx) {
    const bilbo = ctx.cast('bilbo');
    const gollum = ctx.cast('gollum');
    const theRing = ctx.add(ringOfPower());
    theRing.userData.ground = false;
    const base = ctx.stage(1);
    return (t, dt) => {
      put(gollum, 0, 1.4, 0, 0);
      travel(bilbo, [-1.2, -0.2], [0, 0.4], seg(t, 0, 2), dt);
      // He finds the Ring in the dark, puts it on - and vanishes.
      theRing.visible = t < 5;
      theRing.position.set(0, base + 0.05 + seg(t, 3, 4) * 0.4, 0.55);
      const vanish = seg(t, 5, 5.6) * (1 - seg(t, 9.5, 10.5));
      bilbo.traverse((o) => { if (o.material) { o.material.transparent = true; o.material.opacity = 1 - vanish * 0.85; } });
    };
  },
};

const eaglesAtTheCarrock = {
  period: 10, dist: 20,
  run(ctx) {
    const eagles = [0, 1, 2, 3].map(() => {
      const e = ctx.add(makeEagle(1));
      e.userData.ground = false;
      return e;
    });
    const base = ctx.stage(2);
    return (t) => {
      eagles.forEach((e, i) => {
        const k = ease(seg(t, i * 0.5, 5 + i * 0.5));
        e.position.set(lerp(-8 + i * 2, -1.5 + i, k), base + lerp(8, 1.2, k), lerp(-5, 1.5, k));
        e.rotation.y = 0.8;
      });
    };
  },
};

const barrelsOutOfBond = {
  period: 9, dist: 17,
  run(ctx) {
    const barrels = [...Array(8)].map(() => ctx.add(makeBarrel()));
    return (t) => {
      barrels.forEach((b, i) => {
        const k = ((t / 9) + i / 8) % 1;
        put(b, Math.sin(k * 6 + i) * 0.4, lerp(-4, 5, k));
        b.userData.lift = 0.1 + Math.sin(t * 3 + i) * 0.05;
        b.rotation.x = t * 2 + i;
      });
    };
  },
};

const smaugAtLakeTown = {
  period: 14, dist: 31,
  run(ctx) {
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
    const bard = ctx.add(makeCharacter('aragorn'));
    put(bard, 1.8, 1.2, 0, 3);
    ['bilbo', 'thorin', 'balin'].forEach((id, i) => put(ctx.cast(id), -3 - i * 0.4, -2, 0, 3));
    return (t, dt) => {
      const a = t * 0.6;
      const falling = ease(seg(t, 9, 11.5));
      smaug.position.set(Math.sin(a) * 3.5, base + 4.5 - falling * 5, 3.5 + Math.cos(a) * 2.5);
      smaug.rotation.y = a + Math.PI / 2;
      smaug.rotation.z = falling * 1.2;
      smaug.userData.breathe(t > 2 && t < 7);
      fires.forEach((f, i) => f.userData.set(t > 2.5 + i * 0.6 && t < 13.5));
      // The black arrow.
      const fly = seg(t, 8, 9);
      arrow.visible = t > 8 && t < 9.1;
      arrow.position.set(lerp(1.8, smaug.position.x, fly), lerp(base + 1, smaug.position.y, fly), lerp(1.2, smaug.position.z, fly));
      arrow.lookAt(smaug.position);
      arrow.rotateX(Math.PI / 2);
      splash.position.set(smaug.position.x, base, smaug.position.z);
      splash.userData.on = t > 11.2 && t < 11.6;
    };
  },
};

const battleOfFiveArmies = {
  period: 12, dist: 24,
  run(ctx) {
    const goblins = [...Array(10)].map(() => ctx.add(modelFor('goblin') || makeOrc()));
    const eagles = [0, 1, 2].map(() => { const e = ctx.add(makeEagle(1)); e.userData.ground = false; return e; });
    const gold = ctx.add(makeEmitter({ count: 50, color: 0xffd060, endColor: 0x402000, size: 0.3, life: 1.5, spread: 0.8, velocity: [0, 0.8, 0], jitter: 0.5 }));
    put(gold, 0, -1);
    const base = ctx.stage(3);
    return (t, dt) => {
      goblins.forEach((g, i) => travel(g, [-4 + i * 0.8, 7], [-4 + i * 0.8, 2.5], seg(t, 0, 6), dt));
      eagles.forEach((e, i) => {
        const k = seg(t, 5 + i * 0.6, 11);
        e.position.set(lerp(-9, 9, k), base + 3.5 + i * 0.5, 3 + i);
        e.rotation.y = Math.PI / 2;
      });
      goblins.forEach((g, i) => fall(g, seg(t, 8 + i * 0.1, 9 + i * 0.1), false));
    };
  },
};

/** journey id -> stop index -> scene (stops as listed in Atlas.kt). */
export const SCENES = {
  ring_bearer: [partyAtHobbiton, blackRidersAtBree, stabbedOnWeathertop, councilOfElrond, bridgeOfKhazadDum,
    mirrorOfGaladriel, breakingOfTheFellowship, deadMarshes, theBlackGate, fellBeastOverOsgiliath, morgulBeam, crackOfDoom],
  three_hunters: [breakingOfTheFellowship, gandalfTheWhite, theodenKing, helmsDeep, floodingOfIsengard,
    pathsOfTheDead, shipsAtPelargir, pelennorFields, eaglesAtTheBlackGate],
  merry_and_pippin: [carriedByUruks, treebeard, floodingOfIsengard, palantir, beaconsAreLit],
  there_and_back_again: [partyAtHobbiton, trollsTurnToStone, moonLetters, riddlesInTheDark, eaglesAtTheCarrock,
    barrelsOutOfBond, smaugAtLakeTown, battleOfFiveArmies],
};

/**
 * Who walks each journey, and between which stops (inclusive; a member is there while the
 * travellers are anywhere from stop `from` to stop `to`). The company grows and shrinks as in the
 * story: the Fellowship forms at Rivendell, Gandalf falls in Moria, Frodo and Sam go on alone.
 */
export const COMPANIES = {
  ring_bearer: [
    ['frodo', 0, 11], ['sam', 0, 11], ['merry', 0, 6], ['pippin', 0, 6], ['aragorn', 1, 6],
    ['gandalf', 3, 4], ['legolas', 3, 6], ['gimli', 3, 6], ['boromir', 3, 6], ['gollum', 6.5, 11],
  ],
  three_hunters: [
    ['aragorn', 0, 8], ['legolas', 0, 8], ['gimli', 0, 8], ['gandalf_white', 1, 4], ['theoden', 2, 4],
    ['eomer', 3, 3], ['merry', 4, 4], ['pippin', 4, 4], ['gandalf_white', 7, 8], ['eomer', 7, 8],
  ],
  merry_and_pippin: [
    ['merry', 0, 4], ['pippin', 0, 4], ['treebeard', 1, 2], ['gandalf_white', 3, 4], ['theoden', 3, 3],
  ],
  there_and_back_again: [
    ['bilbo', 0, 7], ['gandalf', 0, 4], ['thorin', 0, 7], ['balin', 0, 7], ['dwalin', 0, 7], ['kili', 0, 7],
    ['fili', 0, 7], ['bombur', 0, 7], ['gandalf', 7, 7],
  ],
};
