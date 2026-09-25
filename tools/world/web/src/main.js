// The 3D Middle-earth: the Arda elevation model as terrain, the great places as small
// landmarks, and travellers walking the journeys. Driven entirely by the TV remote, whose keys
// the app forwards as World.key(...); state goes back through window.Android.onState(json).
import * as THREE from 'three';
import { makeFigure, makePony, makeCart, makeRider } from './figures.js';
import { buildLandmark } from './landmarks.js';

const HEIGHT_KM = 22;       // DEM 255 -> 22 km: several times real, so mountains read as mountains
const SEA_Y = 0.05;
const bridge = window.Android || { onState() {}, onReady() {} };

const World = {};
window.World = World;

let renderer, scene, camera, clock;
let terrainW, terrainH, heights, hmW, hmH;
let places = {};            // id -> { name, x, z, y, label }
const labels = [];
const animated = [];        // things with update(dt, t)

// Camera rig: looks at a target on the ground from a distance, yaw and pitch; all eased.
const rig = { x: 0, z: 0, dist: 140, yaw: 0, pitch: 0.95 };
const goal = { ...rig };

let journey = null;         // { stops: [...], curve, travellers, t, toT, stop }
let picked = null;

// --- Terrain -------------------------------------------------------------------------------

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadHeights() {
  const img = await loadImage('height.png');
  hmW = img.width; hmH = img.height;
  const c = document.createElement('canvas');
  c.width = hmW; c.height = hmH;
  const g = c.getContext('2d');
  g.drawImage(img, 0, 0);
  const px = g.getImageData(0, 0, hmW, hmH).data;
  heights = new Float32Array(hmW * hmH);
  for (let i = 0; i < hmW * hmH; i++) {
    const v = (px[i * 4] * 256 + px[i * 4 + 1]) / 65535;
    heights[i] = v <= 0.002 ? -0.6 : v * HEIGHT_KM;   // the sea sinks below the water
  }
}

/** Ground height (km) at world x, z, bilinear. */
function heightAt(x, z) {
  const u = (x / terrainW + 0.5) * (hmW - 1);
  const v = (z / terrainH + 0.5) * (hmH - 1);
  const x0 = Math.max(0, Math.min(hmW - 2, Math.floor(u)));
  const y0 = Math.max(0, Math.min(hmH - 2, Math.floor(v)));
  const fx = Math.min(1, Math.max(0, u - x0)), fy = Math.min(1, Math.max(0, v - y0));
  const h = (xx, yy) => heights[yy * hmW + xx];
  return (h(x0, y0) * (1 - fx) + h(x0 + 1, y0) * fx) * (1 - fy) + (h(x0, y0 + 1) * (1 - fx) + h(x0 + 1, y0 + 1) * fx) * fy;
}
World.heightAt = heightAt;

function toWorld(u, v) {
  return { x: (u - 0.5) * terrainW, z: (v - 0.5) * terrainH };
}

function buildTerrain(texture) {
  const segX = 511, segY = Math.round(511 * terrainH / terrainW);
  const geo = new THREE.PlaneGeometry(terrainW, terrainH, segX, segY);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setY(i, heightAt(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.95, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(terrainW * 1.6, terrainH * 1.6),
    new THREE.MeshStandardMaterial({ color: 0x24444a, roughness: 0.35, metalness: 0.2, transparent: true, opacity: 0.88 }),
  );
  water.rotateX(-Math.PI / 2);
  water.position.y = SEA_Y;
  scene.add(water);
}

function skyTexture() {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#2c2418');
  grad.addColorStop(0.55, '#8a6f4a');
  grad.addColorStop(1, '#e2c790');
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// --- Places and labels -----------------------------------------------------------------

function addPlaces(names) {
  for (const [id, [u, v]] of Object.entries(World.data.places)) {
    const { x, z } = toWorld(u, v);
    const y = Math.max(heightAt(x, z), SEA_Y);
    const landmark = buildLandmark(id);
    if (landmark) {
      landmark.position.set(x, y, z);
      scene.add(landmark);
      if (landmark.userData.update) animated.push(landmark.userData);
    }
    const el = document.createElement('div');
    el.className = 'label';
    el.textContent = names[id] || id;
    document.getElementById('labels').appendChild(el);
    const place = { id, name: names[id] || id, x, y, z, el, top: (landmark?.userData.height || 1.5) + 0.8 };
    places[id] = place;
    labels.push(place);
  }
}

const v3 = new THREE.Vector3();

function updateLabels() {
  const w = renderer.domElement.clientWidth, h = renderer.domElement.clientHeight;
  let best = null, bestD = Infinity;
  for (const p of labels) {
    v3.set(p.x, p.y + p.top, p.z).project(camera);
    const onScreen = v3.z < 1 && Math.abs(v3.x) < 1.1 && Math.abs(v3.y) < 1.1;
    const dist = camera.position.distanceTo(new THREE.Vector3(p.x, p.y, p.z));
    const shown = onScreen && dist < rig.dist * 4.5 + 60;
    p.el.style.display = shown ? 'block' : 'none';
    if (!shown) continue;
    const sx = (v3.x * 0.5 + 0.5) * w, sy = (-v3.y * 0.5 + 0.5) * h;
    p.el.style.transform = `translate(-50%, -100%) translate(${sx}px, ${sy}px)`;
    p.el.style.opacity = String(Math.max(0.25, Math.min(1, 1.6 - dist / (rig.dist * 3.2 + 40))));
    const fromCentre = Math.hypot(sx - w / 2, sy - h / 2);
    if (fromCentre < bestD) { bestD = fromCentre; best = p; }
  }
  const pick = !journey && best && bestD < Math.min(w, h) * 0.12 ? best : null;
  for (const p of labels) p.el.classList.toggle('picked', p === pick || (journey && journey.stopIds[journey.stop] === p.id));
  if (!journey && pick?.id !== picked) {
    picked = pick?.id || null;
    report();
  }
}

// --- Journeys --------------------------------------------------------------------------

const TRAVELLERS = {
  ring_bearer: [
    { name: 'Frodo', cloak: 0x3b4a2c, body: 0x6b4a2a, height: 0.62 },
    { name: 'Sam', cloak: 0x5a4b36, body: 0x7a6040, height: 0.64, pack: true },
  ],
  three_hunters: [
    { name: 'Aragorn', cloak: 0x2e3a2a, body: 0x3a2c22, height: 1.0, sword: true },
    { name: 'Legolas', cloak: 0x4f5e3a, body: 0x8a8a60, hair: 0xe8d9a0, height: 0.98, bow: true },
    { name: 'Gimli', cloak: 0x6a3320, body: 0x5a3b28, hair: 0x8a3a1a, height: 0.7, beard: true, stout: true, axe: true },
  ],
  merry_and_pippin: [
    { name: 'Merry', cloak: 0x42552f, body: 0x6f5a30, height: 0.62 },
    { name: 'Pippin', cloak: 0x4a4f3a, body: 0x7a3a28, height: 0.6 },
  ],
  there_and_back_again: [
    { name: 'Gandalf', cloak: 0x8b8b88, body: 0x6f6f6c, height: 1.08, hat: true, staff: true, beard: true, hair: 0xd8d8d0 },
    { name: 'Bilbo', cloak: 0x3c5a2c, body: 0x9a2a1e, height: 0.6 },
    { name: 'Thorin', cloak: 0x2a3550, body: 0x3a3a48, height: 0.72, beard: true, stout: true, hair: 0x2a2020 },
    { name: 'Balin', cloak: 0x7a2a22, body: 0x5a3020, height: 0.7, beard: true, stout: true, hair: 0xe0e0d8 },
    { name: 'Bombur', cloak: 0x5a6a2a, body: 0x6a4a20, height: 0.7, beard: true, stout: true, hair: 0xc06a2a },
  ],
};

function startJourney(spec) {
  const pts = spec.stops.map((id) => {
    const p = places[id];
    return new THREE.Vector3(p.x, 0, p.z);
  });
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const samples = 900;
  const draped = [];
  for (let i = 0; i <= samples; i++) {
    const p = curve.getPoint(i / samples);
    draped.push(new THREE.Vector3(p.x, Math.max(heightAt(p.x, p.z), SEA_Y) + 0.12, p.z));
  }
  const road = new THREE.CatmullRomCurve3(draped);
  // The road ahead, faint; the road travelled, bright - revealed with drawRange as they walk.
  const ahead = new THREE.Mesh(new THREE.TubeGeometry(road, samples, 0.09, 5), new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.35 }));
  const doneGeo = new THREE.TubeGeometry(road, samples, 0.14, 6);
  const done = new THREE.Mesh(doneGeo, new THREE.MeshBasicMaterial({ color: 0xf0d97d }));
  scene.add(ahead, done);

  // Where each stop falls along the curve (Catmull-Rom passes through its points at i/(n-1)).
  const stopT = spec.stops.map((_, i) => i / (spec.stops.length - 1));
  const group = new THREE.Group();
  const company = TRAVELLERS[spec.id] || TRAVELLERS.ring_bearer;
  // Walking two abreast, the rest following on behind.
  const members = company.map((m, i) => {
    const f = makeFigure(m);
    f.position.set((i % 2 === 0 ? -0.3 : 0.3), 0, -Math.floor(i / 2) * 0.7);
    group.add(f);
    return f;
  });
  if (spec.id === 'there_and_back_again') {
    const pony = makePony(0x6a4a30);
    pony.position.set(1.4, 0, -1.6);
    group.add(pony);
    members.push(pony);
  }
  group.scale.setScalar(3.2);
  scene.add(group);
  journey = { spec, stopIds: spec.stops, road, curve, stopT, doneGeo, group, members, t: 0, toT: 0, stop: 0, walking: false, samples };
  placeTravellers(0, 0);
  setDone(0);
}

function setDone(t) {
  // TubeGeometry indices run along the path: radialSegments * 6 per segment.
  journey.doneGeo.setDrawRange(0, Math.floor(t * journey.samples) * 6 * 6);
}

function placeTravellers(t, dt) {
  const p = journey.curve.getPoint(Math.min(1, Math.max(0, t)));
  const ahead = journey.curve.getPoint(Math.min(1, t + 0.002));
  const y = Math.max(heightAt(p.x, p.z), SEA_Y);
  journey.group.position.set(p.x, y, p.z);
  const heading = Math.atan2(ahead.x - p.x, ahead.z - p.z);
  if (Number.isFinite(heading) && (ahead.x !== p.x || ahead.z !== p.z)) journey.group.rotation.y = heading;
  for (const m of journey.members) m.userData.walk(journey.walking ? dt : 0);
  return heading;
}

function goToStop(i) {
  if (!journey) return;
  journey.stop = Math.max(0, Math.min(journey.stopIds.length - 1, i));
  journey.toT = journey.stopT[journey.stop];
  journey.walking = true;
  report();
}

// --- Input -------------------------------------------------------------------------------

World.key = (k) => {
  const step = rig.dist * 0.35;
  const fwd = { x: Math.sin(goal.yaw), z: -Math.cos(goal.yaw) };
  const right = { x: Math.cos(goal.yaw), z: Math.sin(goal.yaw) };
  if (journey) {
    if (k === 'right') goToStop(journey.stop + 1);
    else if (k === 'left') goToStop(journey.stop - 1);
    else if (k === 'up') goal.dist = Math.max(12, goal.dist / 1.5);
    else if (k === 'down') goal.dist = Math.min(700, goal.dist * 1.5);
    else if (k === 'ok') goal.dist = goal.dist > 150 ? 22 : 420;
    else if (k === 'ff') { goal.yaw += Math.PI / 6; journey.userYaw = true; }
    else if (k === 'rw') { goal.yaw -= Math.PI / 6; journey.userYaw = true; }
    else return false;
  } else {
    if (k === 'up') { goal.x += fwd.x * step; goal.z += fwd.z * step; }
    else if (k === 'down') { goal.x -= fwd.x * step; goal.z -= fwd.z * step; }
    else if (k === 'left') { goal.x -= right.x * step; goal.z -= right.z * step; }
    else if (k === 'right') { goal.x += right.x * step; goal.z += right.z * step; }
    else if (k === 'ok') {
      if (picked) { goal.x = places[picked].x; goal.z = places[picked].z; }
      goal.dist = Math.max(10, goal.dist / 1.7);
    } else if (k === 'back') goal.dist = Math.min(900, goal.dist * 1.7);
    else if (k === 'ff') goal.yaw += Math.PI / 6;
    else if (k === 'rw') goal.yaw -= Math.PI / 6;
    else return false;
    goal.x = Math.max(-terrainW / 2, Math.min(terrainW / 2, goal.x));
    goal.z = Math.max(-terrainH / 2, Math.min(terrainH / 2, goal.z));
  }
  report();
  return true;
};

function report() {
  bridge.onState(JSON.stringify({
    place: journey ? null : picked,
    stop: journey ? journey.stop : -1,
    canZoomOut: !journey && goal.dist < 700,
    walking: journey ? journey.walking : false,
  }));
}

// --- Loop --------------------------------------------------------------------------------

function frame() {
  const dt = Math.min(0.05, clock.getDelta());
  const t = clock.elapsedTime;

  if (journey) {
    if (journey.walking) {
      const dir = Math.sign(journey.toT - journey.t);
      // Walk at a steady pace along the road, whatever the distance between stops.
      const speed = 0.028;
      journey.t += dir * speed * dt;
      if ((dir > 0 && journey.t >= journey.toT) || (dir < 0 && journey.t <= journey.toT) || dir === 0) {
        journey.t = journey.toT;
        journey.walking = false;
        report();
      }
    }
    const heading = placeTravellers(journey.t, dt);
    setDone(Math.max(journey.t, journey.done || 0));
    journey.done = Math.max(journey.t, journey.done || 0);
    goal.x = journey.group.position.x;
    goal.z = journey.group.position.z;
    // Follow from behind while walking; the viewer can still swing round with ⏪ ⏩.
    if (journey.walking && Number.isFinite(heading) && !journey.userYaw) goal.yaw += angleDiff(goal.yaw, heading + Math.PI) * Math.min(1, dt * 1.2);
  }

  const k = 1 - Math.exp(-dt * 3.2);
  rig.x += (goal.x - rig.x) * k;
  rig.z += (goal.z - rig.z) * k;
  rig.dist += (goal.dist - rig.dist) * k;
  rig.yaw += angleDiff(rig.yaw, goal.yaw) * k;
  // Look down from high up; lean towards the horizon when close, so mountains stand up.
  rig.pitch = 0.42 + 0.62 * Math.min(1, Math.max(0, Math.log(rig.dist / 12) / Math.log(60)));

  const groundY = Math.max(heightAt(rig.x, rig.z), SEA_Y);
  const horiz = Math.cos(rig.pitch) * rig.dist;
  camera.position.set(
    rig.x - Math.sin(rig.yaw) * horiz,
    groundY + Math.sin(rig.pitch) * rig.dist,
    rig.z + Math.cos(rig.yaw) * horiz,
  );
  // Never dip under a hillside.
  const under = heightAt(camera.position.x, camera.position.z) + 1.5;
  if (camera.position.y < under) camera.position.y = under;
  camera.lookAt(rig.x, groundY, rig.z);
  scene.fog.near = rig.dist * 2.2;
  scene.fog.far = rig.dist * 10 + 700;

  for (const a of animated) a.update(dt, t);
  renderer.render(scene, camera);
  updateLabels();
  requestAnimationFrame(frame);
}

function angleDiff(from, to) {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

// --- Ambient life in the open world -----------------------------------------------------------

function addWanderer(obj, pathIds, speed) {
  const pts = pathIds.map((p) => (typeof p === 'string' ? new THREE.Vector3(places[p].x, 0, places[p].z) : new THREE.Vector3(p[0], 0, p[1])));
  const curve = new THREE.CatmullRomCurve3(pts, true);
  obj.scale.setScalar(2.2);
  scene.add(obj);
  let u = Math.random();
  animated.push({
    update(dt) {
      u = (u + speed * dt) % 1;
      const p = curve.getPoint(u), q = curve.getPoint((u + 0.002) % 1);
      obj.position.set(p.x, Math.max(heightAt(p.x, p.z), SEA_Y), p.z);
      obj.rotation.y = Math.atan2(q.x - p.x, q.z - p.z);
      obj.userData.walk?.(dt);
    },
  });
}

function addLife() {
  const h = places.hobbiton, b = places.bree, e = places.edoras;
  // Gandalf's cart, coming into Hobbiton along the road.
  addWanderer(makeCart(), [[h.x - 6, h.z - 2], [h.x + 8, h.z + 1], [h.x + 20, h.z], [h.x + 8, h.z + 5]], 0.012);
  // Hobbits out walking in the Shire, and on the road to Bree.
  addWanderer(makeFigure({ cloak: 0x4a5a30, body: 0x8a5a2a, height: 0.6 }), [[h.x - 3, h.z + 3], [h.x + 3, h.z + 6], [h.x + 5, h.z + 1]], 0.02);
  addWanderer(makeFigure({ cloak: 0x5a4a30, body: 0x6a6a3a, height: 0.62, pack: true }), [[h.x, h.z], [b.x, b.z]], 0.004);
  // Riders of Rohan on the plains below Edoras.
  for (let i = 0; i < 3; i++) {
    addWanderer(makeRider(0x6a4a30 + i * 0x101008), [[e.x + 6 + i, e.z - 8], [e.x + 22, e.z - 14 - i * 2], [e.x + 30, e.z - 2], [e.x + 14, e.z + 4]], 0.006 + i * 0.001);
  }
}

// --- Start --------------------------------------------------------------------------------

World.start = async (config) => {
  World.data = await (await fetch('places.json')).json();
  terrainW = World.data.widthKm;
  terrainH = World.data.heightKm;
  await loadHeights();

  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  document.getElementById('stage').appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = skyTexture();
  scene.fog = new THREE.Fog(0x8f7f62, 200, 1200);
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.3, 4000);
  scene.add(new THREE.HemisphereLight(0xfff0d8, 0x2a2418, 0.55));
  const sun = new THREE.DirectionalLight(0xffe2b8, 2.6);
  sun.position.set(-600, 500, -400);
  scene.add(sun);

  const texture = await new THREE.TextureLoader().loadAsync('terrain.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  buildTerrain(texture);
  addPlaces(config.names || {});

  if (config.journey) {
    startJourney(config.journey);
    goal.dist = rig.dist = 22;
    if (config.startStop) {
      journey.stop = config.startStop;
      journey.t = journey.toT = journey.done = journey.stopT[config.startStop];
      placeTravellers(journey.t, 0);
      goal.x = rig.x = journey.group.position.x;
      goal.z = rig.z = journey.group.position.z;
    }
  } else {
    addLife();
    const start = places[config.startAt || 'hobbiton'];
    goal.x = rig.x = start.x;
    goal.z = rig.z = start.z;
    goal.dist = rig.dist = 90;
  }
  clock = new THREE.Clock();
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  document.getElementById('loading').classList.add('gone');
  requestAnimationFrame(frame);
  report();
  bridge.onReady();
};

// Keys also work straight from a keyboard, for testing in a desktop browser.
window.addEventListener('keydown', (e) => {
  const map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', Enter: 'ok', Backspace: 'back', ']': 'ff', '[': 'rw' };
  if (map[e.key]) { World.key(map[e.key]); e.preventDefault(); }
});

// Outside the app (no Android bridge), ?demo or ?demo=<journey> starts it for testing in a browser.
if (!window.Android && /[?&]demo/.test(location.search)) {
  const which = new URLSearchParams(location.search).get('demo');
  const demo = {
    ring_bearer: ['hobbiton', 'bree', 'weathertop', 'rivendell', 'moria', 'lorien', 'amon_hen', 'dead_marshes', 'black_gate', 'osgiliath', 'minas_morgul', 'mount_doom'],
    there_and_back_again: ['hobbiton', 'trollshaws', 'rivendell', 'high_pass', 'carrock', 'elvenking', 'esgaroth', 'erebor'],
  };
  window.addEventListener('load', () => World.start(which && demo[which]
    ? { journey: { id: which, stops: demo[which] }, startStop: Number(new URLSearchParams(location.search).get('stop') || 0) }
    : { startAt: new URLSearchParams(location.search).get('at') || 'hobbiton' }));
}
