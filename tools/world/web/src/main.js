// The 3D Middle-earth: the Arda elevation model as terrain, the great places as small
// landmarks, and travellers walking the journeys. Driven entirely by the TV remote, whose keys
// the app forwards as World.key(...); state goes back through window.Android.onState(json).
import * as THREE from 'three';
import { makeFigure, makePony, makeCart, makeRider } from './figures.js';
import { makeCharacter } from './characters.js';
import { SCENES, COMPANIES } from './scenes.js';
import { loadModels, updateModels, modelFor } from './models.js';
import { buildLandmark } from './landmarks.js';

const HEIGHT_KM = 22;       // DEM 255 -> 22 km: several times real, so mountains read as mountains
const SEA_Y = 0.05;
const bridge = window.Android || { onState() {}, onReady() {} };

const World = {};
window.World = World;
// Surface script errors on the page itself (and to the app's log), so a broken scene is visible.
window.addEventListener('error', (e) => {
  const el = document.getElementById('loading');
  if (el) el.textContent = 'Error: ' + e.message;
  window.__lastError = e.message + ' @' + e.lineno + ':' + e.colno;
  if (!window.Android) document.title = 'Error: ' + window.__lastError;
  console.error(e.message, e.filename, e.lineno);
});
window.addEventListener('unhandledrejection', (e) => {
  const el = document.getElementById('loading');
  if (el) el.textContent = 'Error: ' + (e.reason?.stack || e.reason);
});

let renderer, scene, camera, clock;
let terrainW, terrainH, heights, hmW, hmH;
let places = {};            // id -> { name, x, z, y, label }
const labels = [];
const animated = [];        // things with update(dt, t)

// Camera rig: looks at a target on the ground from a distance, yaw and pitch; all eased.
const rig = { x: 0, z: 0, dist: 140, yaw: 0, pitch: 0.95 };
const goal = { ...rig };

let journey = null;
let sceneLook = null;       // world point the camera frames while a scene plays         // { stops: [...], curve, travellers, t, toT, stop }
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
  const segX = 383, segY = Math.round(383 * terrainH / terrainW);
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
  const visible = [];
  for (const p of labels) {
    v3.set(p.x, p.y + p.top, p.z).project(camera);
    const onScreen = v3.z < 1 && Math.abs(v3.x) < 1.1 && Math.abs(v3.y) < 1.1;
    const dist = camera.position.distanceTo(new THREE.Vector3(p.x, p.y, p.z));
    if (!onScreen || dist > rig.dist * 4.5 + 60) {
      p.el.style.display = 'none';
      continue;
    }
    p.sx = (v3.x * 0.5 + 0.5) * w;
    p.sy = (-v3.y * 0.5 + 0.5) * h;
    p.dist = dist;
    p.fromCentre = Math.hypot(p.sx - w / 2, p.sy - h / 2);
    if (p.fromCentre < bestD) { bestD = p.fromCentre; best = p; }
    visible.push(p);
  }
  const pick = !journey && best && bestD < Math.min(w, h) * 0.12 ? best : null;
  const current = journey ? journey.stopIds[journey.stop] : null;
  // Place labels most important first (the picked place, the journey's stop, then nearest the
  // middle); any label that would overlap one already placed is left out, so they never pile up.
  visible.sort((a, b) => ((b === pick || b.id === current) - (a === pick || a.id === current)) || a.fromCentre - b.fromCentre);
  const placed = [];
  for (const p of visible) {
    // While a stop's scene plays, the story card already names it.
    if (journey?.scene && p.id === current) { p.el.style.display = 'none'; continue; }
    const bw = p.name.length * 9 + 12, bh = 24;
    const r = { l: p.sx - bw / 2, r: p.sx + bw / 2, t: p.sy - bh, b: p.sy };
    const clash = placed.some((q) => r.l < q.r && r.r > q.l && r.t < q.b && r.b > q.t);
    p.el.style.display = clash ? 'none' : 'block';
    if (clash) continue;
    placed.push(r);
    p.el.style.transform = `translate(-50%, -100%) translate(${p.sx}px, ${p.sy}px)`;
    p.el.style.opacity = String(Math.max(0.25, Math.min(1, 1.6 - p.dist / (rig.dist * 3.2 + 40))));
    p.el.classList.toggle('picked', p === pick || p.id === current);
  }
  if (!journey && pick?.id !== picked) {
    picked = pick?.id || null;
    report();
  }
}

// --- Journeys --------------------------------------------------------------------------

const TRAVELLER_SCALE = 3.2;   // figure units -> km, so a company is visible from afar

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
  group.scale.setScalar(TRAVELLER_SCALE);
  scene.add(group);

  // Everyone who walks this journey at some point; shown only on their part of the road.
  const legs = COMPANIES[spec.id] || [];
  const members = {};
  for (const [id] of legs) {
    if (members[id]) continue;
    const c = makeCharacter(id);
    c.rotation.order = 'YXZ';
    c.visible = false;
    group.add(c);
    members[id] = c;
  }
  if (spec.id === 'there_and_back_again') {
    const pony = modelFor('pony') || makePony(0x6a4a30);
    pony.visible = false;
    group.add(pony);
    members.pony = pony;
    legs.push(['pony', 0, 2]);
  }
  journey = { spec, stopIds: spec.stops, road, curve, stopT, doneGeo, group, members, legs, t: 0, toT: 0, stop: 0, walking: false, samples, scene: null };
  placeTravellers(0, 0);
  setDone(0);
}

function setDone(t) {
  // TubeGeometry indices run along the path: radialSegments * 6 per segment.
  journey.doneGeo.setDrawRange(0, Math.floor(t * journey.samples) * 6 * 6);
}

/** Who's walking at this point of the road: stops are 0..n-1 along it. */
function presentAt(stopF) {
  const ids = [];
  for (const [id, from, to] of journey.legs) {
    if (stopF >= from - 0.05 && stopF <= to + 0.05 && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

function placeTravellers(t, dt) {
  const p = journey.curve.getPoint(Math.min(1, Math.max(0, t)));
  const ahead = journey.curve.getPoint(Math.min(1, t + 0.002));
  const y = Math.max(heightAt(p.x, p.z), SEA_Y);
  journey.group.position.set(p.x, y, p.z);
  const heading = Math.atan2(ahead.x - p.x, ahead.z - p.z);
  if (!journey.scene && Number.isFinite(heading) && (ahead.x !== p.x || ahead.z !== p.z)) journey.group.rotation.y = heading;

  // The company, two abreast (bigger folk take more room), in story order.
  const here = presentAt(t * (journey.stopIds.length - 1));
  let row = 0, col = 0;
  for (const [id, m] of Object.entries(journey.members)) {
    const present = here.includes(id);
    if (m.userData.held) continue;
    m.visible = present;
    if (!present) continue;
    const big = id === 'treebeard' || id === 'pony';
    const tx = big ? 1.1 : (col === 0 ? -0.32 : 0.32);
    const tz = -row * 0.75 - (big ? 0.6 : 0);
    const k = Math.min(1, dt * 4);
    m.position.x += (tx - m.position.x) * (m.userData.placed ? k : 1);
    m.position.z += (tz - m.position.z) * (m.userData.placed ? k : 1);
    m.userData.placed = true;
    m.rotation.y = 0;
    if (!big) {
      col = 1 - col;
      if (col === 0) row++;
    }
    m.userData.walk(journey.walking ? dt : 0);
  }
  return heading;
}

/** Stands everything in the travellers' group on the ground (unless flagged as flying). */
const tmp = new THREE.Vector3();
function groundGroup() {
  const g = journey.group;
  g.updateMatrixWorld(true);
  for (const c of g.children) {
    if (c.userData.ground === false) continue;
    tmp.set(c.position.x, 0, c.position.z);
    g.localToWorld(tmp);
    const h = Math.max(heightAt(tmp.x, tmp.z), SEA_Y);
    c.position.y = (h - g.position.y) / TRAVELLER_SCALE + (c.userData.lift || 0);
  }
}

// --- Scenes at the stops ----------------------------------------------------------------------

function startScene(index) {
  const def = SCENES[journey.spec.id]?.[index];
  if (!def) return;
  const g = journey.group;
  // Stage the scene facing away from the camera: the company in front, what they meet beyond.
  g.rotation.y = Math.atan2(g.position.x - camera.position.x, g.position.z - camera.position.z);
  const added = [], held = [], updates = [];
  const ctx = {
    add(obj) {
      if (obj.userData.ground === undefined) obj.userData.ground = true;
      g.add(obj);
      added.push(obj);
      if (obj.userData.update) updates.push(obj);
      return obj;
    },
    cast(id) {
      const m = journey.members[id];
      if (m && m.visible) {
        m.userData.held = true;
        held.push({ m, opacity: [] });
        m.traverse((o) => { if (o.material) held[held.length - 1].opacity.push([o.material, o.material.opacity, o.material.transparent]); });
        return m;
      }
      const c = makeCharacter(id);
      c.rotation.order = 'YXZ';
      return ctx.add(c);
    },
    at(placeId) {
      const p = places[placeId];
      g.updateMatrixWorld(true);
      return g.worldToLocal(new THREE.Vector3(p.x, Math.max(heightAt(p.x, p.z), SEA_Y), p.z));
    },
    stage(r) {
      g.updateMatrixWorld(true);
      let top = -Infinity;
      for (let a = 0; a < 12; a++) {
        for (const rr of [0, r * 0.5, r]) {
          tmp.set(Math.sin(a) * rr, 0, Math.cos(a) * rr + r * 0.3);
          g.localToWorld(tmp);
          top = Math.max(top, heightAt(tmp.x, tmp.z), SEA_Y);
        }
      }
      return (top - g.position.y) / TRAVELLER_SCALE;
    },
    /** Where the camera looks during the scene (local space). */
    focus(x, y, z) { focus.set(x, y, z); },
  };
  const focus = new THREE.Vector3(0, ctx.stage(2) + 0.5, 1.2);
  const update = def.run(ctx);
  journey.scene = { def, update, added, held, updates, t: 0, focus };
  goal.dist = def.dist || 30;
}

function stopScene() {
  const s = journey.scene;
  if (!s) return;
  for (const o of s.added) {
    journey.group.remove(o);
    o.traverse((c) => { c.geometry?.dispose?.(); });
  }
  for (const { m, opacity } of s.held) {
    m.userData.held = false;
    m.userData.lift = 0;
    m.rotation.set(0, 0, 0);
    m.scale.setScalar(1);
    m.visible = true;
    for (const [mat, o, tr] of opacity) { mat.opacity = o; mat.transparent = tr; }
  }
  journey.scene = null;
  goal.dist = Math.min(goal.dist, 30);
}

function updateScene(dt) {
  const s = journey.scene;
  if (!s) return;
  if (!s.frozen) s.t += dt;
  const t = s.t % s.def.period;
  s.update(t, dt);
  for (const o of s.updates) o.userData.update(dt, s.t);
}

function goToStop(i) {
  if (!journey) return;
  stopScene();
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

let frames = 0, fpsSince = 0;
function frame() {
  // Up to 0.2 s per step, so a slow device still walks at the right pace (just less smoothly).
  const dt = Math.min(0.2, clock.getDelta());
  frames++;
  if (clock.elapsedTime - fpsSince > 4) {
    const fps = frames / (clock.elapsedTime - fpsSince);
    // Too slow for this device: render fewer pixels (down to a quarter), the UI stays sharp.
    const ratio = renderer.getPixelRatio();
    if (fps < 24 && ratio > 0.5) {
      renderer.setPixelRatio(Math.max(0.5, ratio * 0.75));
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    console.log(`fps ${fps.toFixed(1)} at pixel ratio ${renderer.getPixelRatio().toFixed(2)}, ${renderer.info.render.calls} draw calls, ${renderer.info.render.triangles} triangles`);
    frames = 0;
    fpsSince = clock.elapsedTime;
  }
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
        startScene(journey.stop);
        report();
      }
    }
    const heading = placeTravellers(journey.t, dt);
    updateScene(dt);
    groundGroup();
    if (journey.scene) {
      journey.group.updateMatrixWorld(true);
      const f = journey.group.localToWorld(journey.scene.focus.clone());
      sceneLook = f;
    } else sceneLook = null;
    setDone(Math.max(journey.t, journey.done || 0));
    journey.done = Math.max(journey.t, journey.done || 0);
    goal.x = sceneLook ? sceneLook.x : journey.group.position.x;
    goal.z = sceneLook ? sceneLook.z : journey.group.position.z;
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

  const groundY = sceneLook ? rig.lookY = lerpTo(rig.lookY ?? sceneLook.y, sceneLook.y, k) : (rig.lookY = Math.max(heightAt(rig.x, rig.z), SEA_Y));
  const horiz = Math.cos(rig.pitch) * rig.dist;
  camera.position.set(
    rig.x - Math.sin(rig.yaw) * horiz,
    groundY + Math.sin(rig.pitch) * rig.dist,
    rig.z + Math.cos(rig.yaw) * horiz,
  );
  // Never dip under a hillside.
  const under = heightAt(camera.position.x, camera.position.z) + 1.5;
  if (camera.position.y < under) camera.position.y = under;
  // In journeys the story card covers the bottom of the screen, so aim a little below the
  // travellers: that lifts them into the open upper part of the picture.
  camera.lookAt(rig.x, groundY - (journey ? rig.dist * 0.22 : 0), rig.z);
  scene.fog.near = rig.dist * 2.2;
  scene.fog.far = rig.dist * 10 + 700;

  for (const a of animated) a.update(dt, t);
  updateModels(dt);
  renderer.render(scene, camera);
  updateLabels();
  requestAnimationFrame(frame);
}

function lerpTo(a, b, k) { return a + (b - a) * k; }

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
  await loadModels();
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
    startScene(journey.stop);
    // For testing: start the scene part-way through (?t=seconds), and freeze it there (?freeze).
    if (journey.scene && config.sceneTime) journey.scene.t = config.sceneTime;
    if (journey.scene && config.freeze) journey.scene.frozen = true;
    if (config.go !== undefined) setTimeout(() => goToStop(config.go), 800);
    if (config.go !== undefined) setInterval(() => { document.title = JSON.stringify({ t: journey.t, toT: journey.toT, walking: journey.walking, stop: journey.stop, scene: !!journey.scene, err: window.__lastError }); }, 1000);
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
    three_hunters: ['amon_hen', 'fangorn', 'edoras', 'helms_deep', 'isengard', 'erech', 'pelargir', 'minas_tirith', 'black_gate'],
    merry_and_pippin: ['amon_hen', 'fangorn', 'isengard', 'edoras', 'minas_tirith'],
    there_and_back_again: ['hobbiton', 'trollshaws', 'rivendell', 'high_pass', 'carrock', 'elvenking', 'esgaroth', 'erebor'],
  };
  window.addEventListener('load', () => World.start(which && demo[which]
    ? {
      journey: { id: which, stops: demo[which] },
      startStop: Number(new URLSearchParams(location.search).get('stop') || 0),
      sceneTime: Number(new URLSearchParams(location.search).get('t') || 0),
      freeze: new URLSearchParams(location.search).has('freeze'),
      go: new URLSearchParams(location.search).has('go') ? Number(new URLSearchParams(location.search).get('go')) : undefined,
    }
    : { startAt: new URLSearchParams(location.search).get('at') || 'hobbiton' }));
}
