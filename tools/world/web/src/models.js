// Real 3D models for the characters and creatures, when bundled in assets/world/models/
// (listed in models.json, with their licences in third_party/models/NOTICE.md). Loaded once at
// start; modelFor(id) hands out a fresh, independently animated copy, or null if there's no model
// for that id, so the caller falls back to a built figure.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

const loaded = {};   // id -> { gltf, spec }
const mixers = [];   // every live model's AnimationMixer, stepped by updateModels(dt)

/** Loads the models listed in models/models.json; missing or broken ones are simply skipped. */
export async function loadModels() {
  let list = [];
  try {
    const res = await fetch('models/models.json');
    if (res.ok) list = await res.json();
  } catch (e) {
    return;
  }
  const loader = new GLTFLoader();
  await Promise.all(list.map(async (spec) => {
    try {
      const gltf = await loader.loadAsync(`models/${spec.file}`);
      for (const id of spec.ids || [spec.character]) loaded[id] = { gltf, spec };
    } catch (e) {
      console.warn('model failed', spec.file, e);
    }
  }));
}

export function modelFor(id) {
  const entry = loaded[id];
  if (!entry) return null;
  const { gltf, spec } = entry;
  const inner = cloneSkinned(gltf.scene);
  inner.rotation.y = spec.yaw || 0;
  inner.traverse((o) => {
    if (!o.isMesh) return;
    if (spec.hide?.includes(o.name) || spec.hide?.includes(o.parent?.name)) o.visible = false;
    // Every copy gets its own materials, so a recolour or a fade never leaks to another.
    o.material = Array.isArray(o.material) ? o.material.map(styled(spec)) : styled(spec)(o.material);
  });
  // Normalise: stand on the ground, centred, spec.height tall (or spec.length long, for fliers).
  inner.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(inner);
  const size = box.getSize(new THREE.Vector3());
  const scale = spec.length ? spec.length / Math.max(size.x, size.z, 1e-6) : (spec.height || 1) / (size.y || 1);
  inner.scale.multiplyScalar(scale);
  const centre = box.getCenter(new THREE.Vector3());
  inner.position.set(-centre.x * scale, -box.min.y * scale, -centre.z * scale);
  const g = new THREE.Group();
  g.add(inner);

  const mixer = new THREE.AnimationMixer(inner);
  mixers.push(mixer);
  const clip = (name) => name && THREE.AnimationClip.findByName(gltf.animations, name);
  const walk = clip(spec.walkClip);
  const idle = clip(spec.idleClip);
  const walkAction = walk ? mixer.clipAction(walk) : null;
  const idleAction = idle ? mixer.clipAction(idle) : null;
  if (idleAction) idleAction.play();
  const loop = clip(spec.loopClip);
  if (loop) mixer.clipAction(loop).play();
  if (walkAction) {
    walkAction.play();
    walkAction.setEffectiveWeight(0);
  }
  let walking = false;
  g.userData.walk = (dt) => {
    const now = dt > 0;
    if (now !== walking && walkAction) {
      walking = now;
      walkAction.setEffectiveWeight(now ? 1 : 0);
      if (idleAction) idleAction.setEffectiveWeight(now ? 0 : 1);
    }
  };
  g.userData.mixer = mixer;
  g.userData.actions = Object.fromEntries(gltf.animations.map((a) => [a.name, mixer.clipAction(a)]));
  g.userData.isModel = true;
  return g;
}

/** Material adjustments from models.json: recolour by material name, greyscale a texture, glow. */
function styled(spec) {
  return (m) => {
    const c = m.clone();
    const re = spec.recolor?.[c.name];
    if (re !== undefined) c.color = new THREE.Color(re);
    if (spec.grey !== undefined && c.map) {
      // Greyscale the texture, then tint: Gandalf's robe is blue in the model, grey (or white) here.
      const tint = new THREE.Color(spec.grey);
      c.onBeforeCompile = (shader) => {
        shader.uniforms.greyTint = { value: tint };
        shader.fragmentShader = 'uniform vec3 greyTint;\n' + shader.fragmentShader.replace(
          '#include <map_fragment>',
          '#include <map_fragment>\n float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));\n diffuseColor.rgb = vec3(pow(lum, 0.8)) * greyTint * 1.25;',
        );
      };
      c.customProgramCacheKey = () => `grey-${spec.grey}`;
    }
    // Like the built figures, a little self-light so they don't go black on their shaded side,
    // and a floor on how dark a colour can be (these low-poly packs use very dark bases).
    if ('emissive' in c && c.color && !spec.noLift) {
      const hsl = {};
      c.color.getHSL(hsl);
      if (hsl.l < 0.12) c.color.setHSL(hsl.h, hsl.s, 0.12 + hsl.l * 0.6);
      c.emissive = c.color.clone();
      c.emissiveIntensity = 0.3;
      if (c.map) c.emissiveMap = c.map;
    }
    if (spec.emissive !== undefined && 'emissive' in c) {
      c.emissive = new THREE.Color(spec.emissive);
      c.emissiveIntensity = 0.35;
    }
    if (spec.glow && 'emissive' in c) {
      c.emissive = new THREE.Color(0xffffff);
      c.emissiveIntensity = spec.glow;
    }
    return c;
  };
}

/** Plays a named clip once or looped on a model (no-op for built figures). */
export function playClip(obj, name, loop = true) {
  const a = obj.userData.actions?.[name];
  if (!a) return false;
  a.reset();
  a.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
  a.clampWhenFinished = !loop;
  a.setEffectiveWeight(1);
  a.play();
  return true;
}

export function updateModels(dt) {
  for (const m of mixers) m.update(dt);
}

export function hasModel(id) {
  return !!loaded[id];
}
