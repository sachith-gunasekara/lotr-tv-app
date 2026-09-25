// Fire, sparks, fireworks, ghost-light and flashes: small particle effects cheap enough for a TV.
import * as THREE from 'three';

let softTexture;
function soft() {
  if (softTexture) return softTexture;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.6)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  softTexture = new THREE.CanvasTexture(c);
  return softTexture;
}

/**
 * A particle emitter. Particles are born at the emitter (within [spread]), move along [velocity]
 * (+ jitter), fade from [color] to [endColor] over [life] seconds. Set emitter.userData.on = false
 * to stop emitting (live particles finish). Use for fire, smoke, dragon breath, ghost-light, sparks.
 */
export function makeEmitter({
  count = 120, color = 0xffa040, endColor = 0x401000, size = 0.35, life = 1.2,
  spread = 0.2, velocity = [0, 1.2, 0], jitter = 0.4, gravity = 0, rate = 1, additive = true,
} = {}) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const matl = new THREE.PointsMaterial({
    size, map: soft(), vertexColors: true, transparent: true, depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, matl);
  points.frustumCulled = false;
  const age = new Float32Array(count).fill(Infinity);
  const vel = new Float32Array(count * 3);
  const c0 = new THREE.Color(color), c1 = new THREE.Color(endColor), c = new THREE.Color();
  let toSpawn = 0;
  points.userData.on = true;
  points.userData.velocity = velocity;
  points.userData.update = (dt) => {
    const v = points.userData.velocity;
    if (points.userData.on) toSpawn += (count / life) * rate * dt;
    for (let i = 0; i < count; i++) {
      if (age[i] >= life) {
        if (toSpawn >= 1) {
          toSpawn -= 1;
          age[i] = 0;
          pos[i * 3] = (Math.random() - 0.5) * spread * 2;
          pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
          pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 2;
          vel[i * 3] = v[0] + (Math.random() - 0.5) * jitter;
          vel[i * 3 + 1] = v[1] + (Math.random() - 0.5) * jitter;
          vel[i * 3 + 2] = v[2] + (Math.random() - 0.5) * jitter;
        } else {
          pos[i * 3 + 1] = -9999;
          continue;
        }
      }
      age[i] += dt;
      vel[i * 3 + 1] -= gravity * dt;
      pos[i * 3] += vel[i * 3] * dt;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      const f = Math.min(1, age[i] / life);
      c.copy(c0).lerp(c1, f).multiplyScalar(1 - f * f);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
  };
  return points;
}

/** A flickering fire: flames, a little smoke and a warm light. */
export function makeFire(scale = 1, { light = false } = {}) {
  const g = new THREE.Group();
  const flames = makeEmitter({ count: 70, size: 0.45 * scale, life: 0.9, spread: 0.18 * scale, velocity: [0, 1.1 * scale, 0], jitter: 0.35 * scale });
  const smoke = makeEmitter({ count: 25, color: 0x3a3028, endColor: 0x100c08, size: 0.7 * scale, life: 2.2, spread: 0.1 * scale, velocity: [0, 0.8 * scale, 0], jitter: 0.25 * scale, additive: false });
  smoke.position.y = 0.5 * scale;
  g.add(flames, smoke);
  let l;
  if (light) {
    l = new THREE.PointLight(0xff8a30, 6 * scale, 8 * scale, 1.6);
    l.position.y = 0.4 * scale;
    g.add(l);
  }
  g.userData.update = (dt, t) => {
    flames.userData.update(dt);
    smoke.userData.update(dt);
    if (l) l.intensity = (5 + Math.sin(t * 13) + Math.sin(t * 7.3)) * scale;
  };
  g.userData.set = (on) => { flames.userData.on = on; smoke.userData.on = on; if (l) l.visible = on; };
  return g;
}

/** One firework: a rocket climbs, then bursts into a coloured sphere of sparks. Loops. */
export function makeFirework(color = 0xffd070, height = 5, delay = 0) {
  const g = new THREE.Group();
  const trail = makeEmitter({ count: 30, color: 0xffe0a0, endColor: 0x402000, size: 0.2, life: 0.5, spread: 0.02, velocity: [0, -0.4, 0], jitter: 0.1 });
  const burst = makeEmitter({ count: 140, color, endColor: 0x100500, size: 0.35, life: 1.6, spread: 0.05, velocity: [0, 0, 0], jitter: 5.5, gravity: 1.2, rate: 0 });
  g.add(trail, burst);
  const light = { intensity: 0, position: new THREE.Vector3() }; // no real light: see makeFlash
  let t0 = -delay;
  g.userData.update = (dt) => {
    t0 += dt;
    const cycle = 3.2;
    const tt = ((t0 % cycle) + cycle) % cycle;
    const climbing = t0 >= 0 && tt < 1;
    trail.userData.on = climbing;
    trail.position.y = climbing ? tt * height : trail.position.y;
    if (t0 >= 0 && tt >= 1 && tt < 1 + dt * 1.5) {
      burst.position.y = height;
      burst.userData.on = true;
      burst.userData.velocity = [0, 0, 0];
      // A single-frame burst: spawn them all at once.
      for (let i = 0; i < 6; i++) burst.userData.update(0.05);
      burst.userData.on = false;
      light.position.y = height;
      light.intensity = 25;
    }
    light.intensity *= Math.pow(0.02, dt);
    trail.userData.update(dt);
    burst.userData.update(dt);
  };
  return g;
}

/**
 * A ring of light that flares and fades - Gandalf's staff, the Phial, Galadriel. A glowing
 * sprite, not a real light: adding and removing lights makes three.js recompile every material,
 * which would stutter on a TV each time a scene starts.
 */
export function makeFlash(color = 0xffffff, radius = 1) {
  const g = new THREE.Group();
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: soft(), color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  sprite.scale.setScalar(radius * 2);
  g.add(sprite);
  g.userData.set = (k) => {
    sprite.material.opacity = k;
    sprite.scale.setScalar(radius * 2 * (0.6 + 0.4 * k));
    g.visible = k > 0.01;
  };
  g.userData.set(0);
  return g;
}

/** A column of light into the sky - Minas Morgul's beam. */
export function makeBeam(color = 0x7dffb0, height = 30, radius = 0.25) {
  const m = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius * 1.6, height, 12, 1, true),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  );
  m.position.y = height / 2;
  return m;
}
