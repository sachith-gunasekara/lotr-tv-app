// Keeps only the animation clips the app uses, prunes what's left unreferenced, and dedups.
import { NodeIO } from '@gltf-transform/core';
import { prune, dedup, quantize, weld } from '@gltf-transform/functions';
const KEEP = /(^|\|)(Walk|Idle|Run|Death|Gallop|Dragon_Flying|Dragon_Attack|Fly|Spell1|Staff_Attack|Weapon|Punch)$/;
const io = new NodeIO();
for (const f of process.argv.slice(2)) {
  const doc = await io.read(f);
  const seen = new Set();
  for (const a of doc.getRoot().listAnimations()) {
    const short = a.getName().replace(/^.*\|/, '');
    // Several packs carry each clip twice (with and without the armature prefix); keep one.
    if (!KEEP.test(a.getName()) || seen.has(short)) a.dispose(); else seen.add(short);
  }
  await doc.transform(prune(), dedup(), weld(), quantize());
  await io.write(`out/${f}`, doc);
  console.log(f, doc.getRoot().listAnimations().map((a) => a.getName()).join(','));
}
