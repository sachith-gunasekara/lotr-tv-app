// Who's who in 3D: every character is a built body (rig.js) dressed from the spec here - their
// proportions (hobbits ~0.58 tall and five heads high, dwarves broad as a door, Men ~1), hair,
// beard, clothes and what they carry. The specs are the stored models: a character's geometry is
// built once from its spec and shared by every copy.
//
// Every character's userData.walk(dt) walks it (walk(0) lets it come to rest) and
// userData.act(name) sets what it's doing (see ACTIONS in rig.js).
import * as THREE from 'three';
import { buildRig } from './rig.js';
import { makeFlash } from './effects.js';
import { makeRider, makeHorse, makePony } from './figures.js';

const ELVEN_CLOAK = { color: 0x5c6a58, len: 0.44, hood: 'down' };
const LEAF = 0x7ac070;

// --- The named characters -------------------------------------------------------------------

export const CHARACTERS = {
  // Hobbits: bare hairy feet, curly hair, waistcoats; the Elven cloaks of Lórien.
  frodo: {
    name: 'Frodo', body: 'hobbit', height: 0.58, skin: 0xefcaa6, eyes: 0x3a6ab0, hair: { style: 'curly', color: 0x2a1a10 }, ears: 'hobbit',
    top: 0xe8dec8, vest: 0x5a4a30, legs: 0x5a4a36, feet: 'bare', cloak: ELVEN_CLOAK, brooch: LEAF, right: { item: 'sting', drawn: true },
  },
  sam: {
    name: 'Sam', body: 'hobbit', height: 0.6, shape: { girth: 1.35 }, skin: 0xeec09a, hair: { style: 'curly', color: 0x9a6a34 }, ears: 'hobbit',
    top: 0xe2d6ba, vest: 0x8a6a3a, legs: 0x6a5436, feet: 'bare', cloak: ELVEN_CLOAK, brooch: LEAF, back: ['pack'], hip: ['pouch'],
    right: { item: 'shortsword', drawn: true },
  },
  merry: {
    name: 'Merry', body: 'hobbit', height: 0.6, skin: 0xefc6a0, hair: { style: 'curly', color: 0x7a4a24 }, ears: 'hobbit',
    top: 0xe8dcc0, vest: 0xa0782e, legs: 0x4a4a30, feet: 'bare', cloak: ELVEN_CLOAK, brooch: LEAF, right: { item: 'shortsword', drawn: true },
  },
  pippin: {
    name: 'Pippin', body: 'hobbit', height: 0.58, skin: 0xf0caa6, hair: { style: 'curly', color: 0xa6703c }, ears: 'hobbit',
    top: 0xe8e0cc, vest: 0x7a3a2a, scarf: 0xd0a040, legs: 0x5a5a40, feet: 'bare', cloak: ELVEN_CLOAK, brooch: LEAF, right: { item: 'shortsword', drawn: true },
  },
  bilbo: {
    name: 'Bilbo', body: 'hobbit', height: 0.58, skin: 0xefc6a0, hair: { style: 'curly', color: 0x6a4a2a }, ears: 'hobbit',
    top: 0xf2ead4, vest: 0xb8362a, coat: { color: 0x6a3226, len: 'hip', flare: 0.2 }, legs: 0x6a5436, feet: 'bare', hip: ['pouch'],
    right: { item: 'sting', drawn: true },
  },
  // The Istari.
  gandalf: {
    name: 'Gandalf', height: 1.02, skin: 0xe2c0a0, hair: { style: 'flowing', color: 0xb8b8b0 }, beard: { style: 'long', color: 0xc4c4bc },
    hat: { style: 'wizard', color: 0x6c727a }, top: 0x7c7c7a, coat: { color: 0x858580, len: 'ankle', flare: 0.5 }, scarf: 0x5f6672, belt: 0x5a4a3a,
    cloak: { color: 0x6e7070, len: 0.82 }, boots: 0x3a3028, right: { item: 'staff' }, left: { item: 'glamdring', drawn: true }, pose: { lean: 0.07 },
  },
  gandalf_white: {
    name: 'Gandalf the White', height: 1.02, skin: 0xe8c8aa, hair: { style: 'flowing', color: 0xf4f4f0 }, beard: { style: 'long', color: 0xf4f4f0 },
    top: 0xf2f0ea, coat: { color: 0xf4f2ec, len: 'ankle', flare: 0.5 }, belt: 0xd8d0c0, cloak: { color: 0xe8e6e0, len: 0.85 }, boots: 0xc8c0b0,
    right: { item: 'whiteStaff' }, left: { item: 'glamdring', drawn: true }, glow: 0xffffff, selfLight: 0.32,
  },
  saruman: {
    name: 'Saruman', height: 1.03, skin: 0xe2c4a8, hair: { style: 'flowing', color: 0xeeeeea }, beard: { style: 'long', color: 0xe6e6e2 },
    top: 0xeeece6, coat: { color: 0xf0eee8, len: 'ankle', flare: 0.45 }, belt: 0x8a8a88, cloak: { color: 0xe4e2dc, len: 0.85 }, right: { item: 'darkStaff' },
  },
  // Men.
  aragorn: {
    name: 'Aragorn', height: 1.0, skin: 0xd2a07c, hair: { style: 'long', color: 0x2a1a12 }, beard: { style: 'stubble', color: 0x2a1a12 },
    top: 0x3a3a34, coat: { color: 0x4a3526, len: 'knee', flare: 0.35 }, belt: 0x2a1c12, legs: 0x2e2a26, boots: 0x3a2a1c, bracers: 0x3a2616,
    cloak: { color: 0x34402e, len: 0.72, hood: 'down' }, hip: ['sword', 'dagger'], right: { item: 'sword', drawn: true },
  },
  boromir: {
    name: 'Boromir', height: 1.02, shape: { shoulders: 0.27, girth: 1.1 }, skin: 0xdca884, hair: { style: 'long', color: 0x7a4a26 }, beard: { style: 'short', color: 0x6a3e20 },
    top: 0x6a2420, coat: { color: 0x5a2a24, len: 'knee', flare: 0.35 }, belt: 0x2a1c12, legs: 0x3a2a24, bracers: 0x4a3424, shield: 0x7a5a30,
    cloak: { color: 0x3a2a24, len: 0.7, fur: 0x6a5a48 }, hip: ['sword', 'horn'], back: ['shield'], right: { item: 'sword', drawn: true },
  },
  faramir: {
    name: 'Faramir', height: 1.0, skin: 0xdcac88, hair: { style: 'long', color: 0x8a6a40 }, beard: { style: 'stubble', color: 0x7a5a36 },
    top: 0x3a4a30, coat: { color: 0x4a5a3a, len: 'knee', flare: 0.3 }, belt: 0x2a1c12, legs: 0x3a3a2a, cloak: { color: 0x3a4a30, len: 0.7, hood: 'down' },
    back: ['quiver'], hip: ['sword'], left: { item: 'bow' },
  },
  theoden: {
    name: 'Théoden', height: 1.0, skin: 0xdcb094, hair: { style: 'long', color: 0xd8ccb0 }, beard: { style: 'short', color: 0xd0c8b0 },
    hat: { style: 'circlet', color: 0xd4af37 }, top: 0x3a5030, plate: 0xb89a50, coat: { color: 0x2f4a2a, len: 'knee' }, legs: 0x3a3a2a,
    cloak: { color: 0x2f5a2a, len: 0.75, fur: 0x6a5a40 }, hip: ['sword'], right: { item: 'sword', drawn: true },
  },
  eomer: {
    name: 'Éomer', height: 1.02, skin: 0xdcb094, hair: { style: 'long', color: 0xa07a40 }, beard: { style: 'short', color: 0x9a7038 },
    hat: { style: 'helm', color: 0xb0a890, plume: 0xf0ece0 }, top: 0x3a4a30, plate: 0x8a8a80, coat: { color: 0x4a3a2a, len: 'knee' },
    cloak: { color: 0x2f4a2a, len: 0.72 }, shield: 0x2f5a2a, right: { item: 'sword', drawn: true }, left: { item: 'shield' },
  },
  eowyn: {
    name: 'Éowyn', body: 'woman', height: 0.95, skin: 0xf0d4bc, hair: { style: 'flowing', color: 0xe8d08a }, top: 0xe8e4d8,
    coat: { color: 0xe0dcd0, len: 'ankle', flare: 0.55 }, belt: 0x8a7a50, cloak: { color: 0x3a5a3a, len: 0.8 }, shield: 0x5a6a4a,
    right: { item: 'sword', drawn: true }, left: { item: 'shield', drawn: true },
  },
  bard: {
    name: 'Bard', height: 1.0, skin: 0xd8aa86, hair: { style: 'long', color: 0x2a2018 }, beard: { style: 'stubble', color: 0x2a2018 },
    top: 0x3a3a3a, coat: { color: 0x4a3a2a, len: 'knee' }, legs: 0x2e2a26, cloak: { color: 0x3a3028, len: 0.6, hood: 'down' }, back: ['quiver'], left: { item: 'bow' },
  },
  beorn: {
    name: 'Beorn', height: 1.3, shape: { shoulders: 0.3, girth: 1.4 }, skin: 0xc89a70, hair: { style: 'wild', color: 0x2a1a10 }, beard: { style: 'short', color: 0x2a1a10 },
    top: 0x5a3a24, coat: { color: 0x4a3020, len: 'knee', flare: 0.3 }, legs: 0x3a2a1a,
  },
  grima: {
    name: 'Gríma', height: 0.95, shape: { girth: 0.85 }, skin: 0xe8d8c8, hair: { style: 'long', color: 0x141414 }, top: 0x1a1a1a,
    coat: { color: 0x121212, len: 'ankle', flare: 0.4 }, cloak: { color: 0x1a1a1a, len: 0.8, fur: 0x2a2a2a }, pose: { lean: 0.14, headX: 0.1 },
  },
  // Elves.
  legolas: {
    name: 'Legolas', body: 'elf', height: 1.0, skin: 0xf2dcc8, eyes: 0x5a8ac0, ears: 'elf', hair: { style: 'flowing', color: 0xf0e0a8, braids: true },
    top: 0x6a7a4a, coat: { color: 0x7a8058, len: 'thigh', flare: 0.3 }, belt: 0x5a4a30, legs: 0x5a5a48, boots: 0x5a4a30, bracers: 0x6a5a3a,
    back: ['quiver'], left: { item: 'longbow' },
  },
  galadriel: {
    name: 'Galadriel', body: 'woman', shape: { heads: 8 }, height: 1.06, skin: 0xf6e4d4, ears: 'elf', hair: { style: 'flowing', color: 0xf0dca0 },
    hat: { style: 'circlet', color: 0xe8e0c8 }, top: 0xf6f4ee, coat: { color: 0xf4f2ec, len: 'ankle', flare: 0.75 }, glow: 0xe8f0ff, selfLight: 0.5,
  },
  elrond: {
    name: 'Elrond', body: 'elf', height: 1.03, skin: 0xe8ccb4, ears: 'elf', hair: { style: 'long', color: 0x2a1c14 }, hat: { style: 'circlet', color: 0xc8b070 },
    top: 0x6a2a3a, coat: { color: 0x5a2034, len: 'ankle', flare: 0.45 }, cloak: { color: 0x3a2a3a, len: 0.85 },
  },
  thranduil: {
    name: 'Thranduil', body: 'elf', height: 1.04, skin: 0xf2e0d0, ears: 'elf', hair: { style: 'flowing', color: 0xf2e6c0 }, hat: { style: 'crown', color: 0xa86a2a },
    top: 0x8a7a8a, coat: { color: 0x6a5a6a, len: 'ankle', flare: 0.5 }, cloak: { color: 0x7a2a2a, len: 0.85 },
  },
  // Dwarves: short, broad, bearded; Thorin and his company.
  gimli: {
    name: 'Gimli', body: 'dwarf', height: 0.72, skin: 0xd8a484, hair: { style: 'wild', color: 0xa0461e, braids: true }, beard: { style: 'dwarf', color: 0xa0461e, forked: true, moustache: true },
    hat: { style: 'dwarfhelm', color: 0x8a8478, band: 0x9a7a3a }, top: 0x6a4a2c, mail: 0x8a8a88, coat: { color: 0x5a3a24, len: 'thigh' }, belt: 0x3a2614,
    legs: 0x4a3a2a, bracers: 0x5a4a38, back: ['axes'], right: { item: 'bigAxe' },
  },
  thorin: {
    name: 'Thorin', body: 'dwarf', shape: { girth: 1.35, heads: 5 }, height: 0.75, skin: 0xd8a888, hair: { style: 'long', color: 0x201818, braids: true }, beard: { style: 'short', color: 0x202020 },
    top: 0x2a3550, coat: { color: 0x2a3040, len: 'knee' }, cloak: { color: 0x2a2a3a, len: 0.45, fur: 0x6a5a48 }, belt: 0x5a4a30, hip: ['sword'],
    right: { item: 'sword', drawn: true },
  },
  balin: {
    name: 'Balin', body: 'dwarf', height: 0.7, skin: 0xe0b498, hair: { style: 'short', color: 0xf0f0e8 }, beard: { style: 'dwarf', color: 0xf2f2ea, moustache: true },
    top: 0x8a2a24, coat: { color: 0x7a2a22, len: 'knee' }, belt: 0x4a3020,
  },
  dwalin: {
    name: 'Dwalin', body: 'dwarf', height: 0.77, skin: 0xd09c7c, hair: { style: 'bald' }, beard: { style: 'dwarf', color: 0x4a3a30 },
    top: 0x3a4a3a, coat: { color: 0x3a3024, len: 'thigh' }, bracers: 0x5a4a38, right: { item: 'axe' },
  },
  bombur: {
    name: 'Bombur', body: 'dwarf', shape: { girth: 2.3 }, height: 0.7, skin: 0xe8b494, hair: { style: 'short', color: 0xc0602a, braids: true }, beard: { style: 'dwarf', color: 0xc0602a, forked: true },
    top: 0x6a6a2a, coat: { color: 0x5a5a2a, len: 'thigh' }, belt: 0x4a3020,
  },
  kili: {
    name: 'Kíli', body: 'dwarf', shape: { girth: 1.2, heads: 5.2 }, height: 0.75, skin: 0xe0b090, hair: { style: 'long', color: 0x2a2018 }, beard: { style: 'stubble', color: 0x2a2018 },
    top: 0x4a3a50, coat: { color: 0x3a3040, len: 'knee' }, back: ['quiver'], left: { item: 'bow' },
  },
  fili: {
    name: 'Fíli', body: 'dwarf', shape: { girth: 1.25, heads: 5 }, height: 0.75, skin: 0xe4b494, hair: { style: 'long', color: 0xd0a050, braids: true }, beard: { style: 'short', color: 0xd0a050, moustache: true },
    top: 0x5a4a30, coat: { color: 0x6a5030, len: 'knee' }, right: { item: 'sword', drawn: true },
  },
  oin: { name: 'Óin', body: 'dwarf', height: 0.7, hair: { style: 'wild', color: 0x9a9a92 }, beard: { style: 'dwarf', color: 0x8a8a84, forked: true }, top: 0x5a4a3a, coat: { color: 0x4a3a2a, len: 'knee' } },
  gloin: { name: 'Glóin', body: 'dwarf', shape: { girth: 1.8 }, height: 0.71, hair: { style: 'wild', color: 0xb04a20 }, beard: { style: 'dwarf', color: 0xb04a20, forked: true }, top: 0x6a3a2a, coat: { color: 0x5a3020, len: 'knee' }, right: { item: 'axe' } },
  ori: { name: 'Ori', body: 'dwarf', shape: { girth: 1.2, heads: 5 }, height: 0.72, hair: { style: 'short', color: 0x7a5030 }, beard: { style: 'short', color: 0x7a5030 }, top: 0x8a7a5a, scarf: 0x9a8a6a, coat: { color: 0x7a6a4a, len: 'knee' } },
  nori: { name: 'Nori', body: 'dwarf', height: 0.72, hair: { style: 'wild', color: 0x6a3a2a }, beard: { style: 'dwarf', color: 0x6a3a2a }, top: 0x5a5a4a, coat: { color: 0x4a4a3a, len: 'knee' } },
  dori: { name: 'Dori', body: 'dwarf', height: 0.73, hair: { style: 'long', color: 0xb8b0a8, braids: true }, beard: { style: 'dwarf', color: 0xb8b0a8 }, top: 0x6a4a5a, coat: { color: 0x5a3a4a, len: 'knee' } },
  bifur: { name: 'Bifur', body: 'dwarf', height: 0.72, hair: { style: 'wild', color: 0x5a4a3a }, beard: { style: 'dwarf', color: 0x5a4a3a }, top: 0x4a5a4a, coat: { color: 0x3a4a3a, len: 'knee' }, right: { item: 'spear' } },
  bofur: { name: 'Bofur', body: 'dwarf', height: 0.72, hair: { style: 'short', color: 0x3a2a1a, braids: true }, beard: { style: 'short', color: 0x3a2a1a, moustache: true }, hat: { style: 'cap', color: 0x6a5a3a }, top: 0x5a5030, coat: { color: 0x6a5a40, len: 'knee' }, right: { item: 'hammer' } },
  // Others.
  gollum: {
    name: 'Gollum', body: 'gollum', height: 0.62, skin: 0xb8ae94, eyes: 0xbfe0f0, bigEyes: true, ears: 'big', hair: { style: 'strands', color: 0x4a4638 },
    top: 0xb8ae94, legs: 0xb8ae94, sleeves: 0xb8ae94, feet: 'barefoot', coat: { color: 0x6a6050, len: 'hip', flare: 0.1, skirtOnly: true }, selfLight: 0.3, pace: 11,
    pose: { crouch: 0.28, lean: 0.55, headX: -0.3, lArmX: -0.6, rArmX: -0.6, lElbow: 0.9, rElbow: 0.9, lLegX: -0.5, rLegX: -0.5, lKnee: 0.8, rKnee: 0.8 },
  },
  treebeard: {
    name: 'Treebeard', body: 'ent', height: 2.4, skin: 0x5a4430, top: 0x4e3a28, sleeves: 0x4e3a28, legs: 0x4a3624, boots: 0x3a2a1c, gloves: 0x4a3624,
    eyes: 0xc8a040, hair: { style: 'leaves', color: 0x4a6a2a }, beard: { style: 'moss', color: 0x6a7a4a }, pace: 2.6, selfLight: 0.18,
  },
  nazgul: {
    name: 'Nazgûl', height: 1.1, void: true, top: 0x0e0d0c, sleeves: 0x0e0d0c, legs: 0x0e0d0c, coat: { color: 0x0e0d0c, len: 'ankle', flare: 0.6 },
    cloak: { color: 0x121110, len: 0.95, hood: 'up' }, gloves: 0x2a2a2a, boots: 0x151515, right: { item: 'sword', drawn: true }, selfLight: 0.06,
  },
  witch_king: {
    name: 'Witch-king', height: 1.14, void: true, top: 0x0e0d0c, sleeves: 0x0e0d0c, legs: 0x0e0d0c, coat: { color: 0x0e0d0c, len: 'ankle', flare: 0.6 },
    cloak: { color: 0x121110, len: 0.95, hood: 'up' }, hat: { style: 'spikes', color: 0x3a3a3a }, gloves: 0x3a3a3a, boots: 0x151515, right: { item: 'sword', drawn: true }, selfLight: 0.06,
  },
  // Stand-ins for crowds.
  uruk: { name: 'Uruk-hai', folk: 'uruk' },
  orc: { name: 'Orc', folk: 'orc' },
  goblin: { name: 'Goblin', folk: 'goblin' },
  ghost: { name: 'Dead', folk: 'dead' },
  king_of_the_dead: { name: 'King of the Dead', folk: 'dead', variant: 99 },
  rohirrim: { name: 'Rider', rider: true },
};

// --- Folk: generic people for crowds and for the life of each place ------------------------------

const pick = (list, i) => list[((i % list.length) + list.length) % list.length];

/** A spec for one of a kind of folk; [i] picks a variation (hair, clothes, tools). */
export function folkSpec(kind, i = 0) {
  switch (kind) {
    case 'hobbit': return {
      body: 'hobbit', height: 0.56 + (i % 3) * 0.02, shape: { girth: 1.1 + (i % 4) * 0.12 }, skin: pick([0xefc6a0, 0xf2cfae, 0xe8bc94], i), ears: 'hobbit',
      hair: { style: 'curly', color: pick([0x6a4020, 0x9a6a34, 0x3a2414, 0xb0783c, 0x5a3a20], i) }, top: pick([0xece2cc, 0xe0d0b0, 0xd8c8a8], i),
      vest: pick([0x7a8a3a, 0xa0482a, 0x5a6a8a, 0xb89040, 0x6a4a2a], i), legs: pick([0x6a5436, 0x4a5a3a, 0x7a6040], i), feet: 'bare',
      coat: i % 5 === 3 ? { color: 0xc07a3a, len: 'knee', skirtOnly: true, flare: 0.5 } : undefined,
    };
    case 'bree': return {
      height: 0.97 + (i % 3) * 0.03, skin: pick([0xdcac88, 0xe4b898, 0xc89a78], i), hair: { style: pick(['short', 'long', 'short', 'bald'], i), color: pick([0x3a2a1a, 0x6a4a2a, 0x8a8a80], i) },
      beard: i % 2 ? { style: 'short', color: pick([0x3a2a1a, 0x6a4a2a, 0x8a8a80], i) } : undefined, top: pick([0x8a6a4a, 0x6a6a5a, 0x7a4a3a, 0x5a5a6a], i),
      coat: { color: pick([0x5a4a3a, 0x4a4a3a, 0x6a5a4a], i), len: 'knee' }, legs: 0x4a3a2a, belly: i % 3 === 0 ? 0x8a6a4a : undefined, shape: { girth: 1 + (i % 3) * 0.15 },
    };
    case 'ranger': return {
      height: 1.0, skin: 0xd0a07c, hair: { style: 'long', color: pick([0x2a1a12, 0x3a2a1a], i) }, beard: { style: 'stubble', color: 0x2a1a12 },
      top: 0x3a3a34, coat: { color: 0x3a3226, len: 'knee' }, cloak: { color: 0x2e3a2a, len: 0.72, hood: i % 2 ? 'up' : 'down' }, hip: ['sword'], right: { item: 'sword', drawn: true },
    };
    case 'elf': return {
      body: i % 2 ? 'woman' : 'elf', height: i % 2 ? 0.98 : 1.02, skin: 0xf2dcc8, ears: 'elf', hair: { style: 'flowing', color: pick([0xf0e0a8, 0x2a1c14, 0xd8c8a0, 0x4a3020], i) },
      top: pick([0xe8e0c8, 0x9aa87a, 0xc8b88a, 0xd8d0e0], i), coat: { color: pick([0xe0d8c0, 0x8a9a6a, 0xb8a878, 0xc8c0d8], i), len: 'ankle', flare: 0.5 },
      hat: i % 3 === 0 ? { style: 'circlet', color: 0xd8c890 } : undefined,
    };
    case 'woodelf': return {
      body: 'elf', height: 1.0, skin: 0xf0dcc8, ears: 'elf', hair: { style: 'flowing', color: pick([0xe8d8a0, 0x6a4a2a, 0xc8a870], i) },
      top: 0x6a5a3a, coat: { color: pick([0x7a5a30, 0x5a6a3a], i), len: 'knee' }, cloak: { color: 0x5a4a2a, len: 0.6 }, back: ['quiver'],
      right: i % 2 ? { item: 'spear' } : undefined, left: i % 2 ? undefined : { item: 'bow' },
    };
    case 'rohan': return {
      height: 1.0, skin: 0xe0b494, hair: { style: 'long', color: pick([0xd8b870, 0xa07a40, 0xc8a060], i) }, beard: i % 2 ? { style: 'short', color: 0xa07a40 } : undefined,
      hat: { style: 'helm', color: 0xa8a088, plume: i % 3 === 0 ? 0xf0ece0 : undefined }, top: 0x3a4a30, plate: 0x8a8a80, coat: { color: 0x4a3a2a, len: 'knee' },
      cloak: { color: 0x2f4a2a, len: 0.7 }, shield: 0x2f5a2a, right: { item: 'spear' }, left: i % 2 ? { item: 'shield' } : undefined,
    };
    case 'gondor': return {
      height: 1.0, skin: 0xdcac88, hair: { style: 'short', color: 0x2a1a12 }, hat: { style: 'helm', color: 0xc8ccd0, tall: true, wings: 0xe8e8e8 },
      top: 0x1a1a1e, plate: 0x2a2a30, emblem: 0xf0f0f0, coat: { color: 0x1a1a1e, len: 'knee' }, legs: 0x1a1a1e, shield: 0x1a1a1e,
      right: { item: 'spear' }, left: { item: 'shield' },
    };
    case 'laketown': return {
      height: 0.97 + (i % 3) * 0.03, skin: pick([0xdcac88, 0xe4b898], i), hair: { style: pick(['short', 'long', 'bald'], i), color: pick([0x3a2a1a, 0x6a4a2a, 0x2a1a12], i) },
      beard: i % 2 ? { style: 'short', color: 0x3a2a1a } : undefined, top: pick([0x5a6a7a, 0x6a5a4a, 0x4a5a5a], i), coat: { color: pick([0x3a4a5a, 0x5a4a3a], i), len: 'knee' },
    };
    case 'dwarf': return {
      body: 'dwarf', height: 0.7 + (i % 3) * 0.02, shape: { girth: 1.5 + (i % 3) * 0.2 }, skin: 0xd8a888,
      hair: { style: pick(['wild', 'bald', 'short'], i), color: pick([0x3a2a1a, 0x8a4a20, 0x9a9a92, 0x5a3a20], i) },
      beard: { style: 'dwarf', color: pick([0x3a2a1a, 0x8a4a20, 0x9a9a92, 0x5a3a20], i), forked: i % 2 === 0 }, top: pick([0x5a3a2a, 0x3a4a5a, 0x6a5a3a], i),
      mail: i % 2 ? 0x8a8a88 : undefined, coat: { color: pick([0x4a3a2a, 0x3a3a4a], i), len: 'thigh' }, right: { item: pick(['hammer', 'axe', 'bigAxe'], i) },
      hat: i % 3 === 0 ? { style: 'dwarfhelm', color: 0x8a8478 } : undefined,
    };
    case 'uruk': return {
      body: 'uruk', height: 1.0, skin: 0x4a3a30, eyes: 0xc03010, hair: { style: 'long', color: 0x101010 }, warpaint: 0xe8e8e8, top: 0x1e1c1a, plate: 0x2a2826,
      legs: 0x2a2420, boots: 0x1a1614, shield: 0x1a1a1a, left: { item: 'shield' }, right: { item: 'scimitar' }, selfLight: 0.16, pose: { lean: 0.1 },
    };
    case 'orc': return {
      body: 'goblin', height: 0.88, skin: pick([0x5a5040, 0x6a5a48, 0x4a4a3a], i), eyes: 0xd0a020, ears: 'big', hair: { style: 'strands', color: 0x1a1a1a },
      top: 0x3a3228, plate: 0x3a3430, hat: { style: 'helm', color: 0x3a3a38 }, legs: 0x2a2420, right: { item: 'scimitar' }, pose: { lean: 0.2 }, selfLight: 0.16,
    };
    case 'goblin': return {
      body: 'goblin', height: 0.72, skin: pick([0x8a8870, 0x9a9278, 0x7a7a62], i), eyes: 0xe0c040, ears: 'big', hair: { style: 'strands', color: 0x2a2a2a },
      top: 0x4a4034, legs: 0x3a3228, feet: 'barefoot', coat: { color: 0x3a3228, len: 'thigh', skirtOnly: true, flare: 0.2 }, right: { item: 'scimitar' }, pose: { lean: 0.28, headX: -0.2 },
    };
    case 'dead': return {
      height: i === 99 ? 1.25 : 1.0, skin: 0x9affd0, hair: { style: 'long', color: 0x9affd0 }, beard: { style: 'short', color: 0x9affd0 },
      top: 0x7affb8, coat: { color: 0x6ae8a8, len: 'knee' }, hat: i === 99 ? { style: 'crown', color: 0xc8ffe0 } : { style: 'helm', color: 0x8affc8 },
      cloak: { color: 0x5ad098, len: 0.7 }, right: { item: 'sword' }, ghost: true,
    };
    case 'corsair': return {
      height: 1.0, skin: 0xb0805a, hair: { style: 'long', color: 0x1a1210 }, beard: { style: 'short', color: 0x1a1210 }, hat: i % 2 ? { style: 'cap', color: 0x5a1a1a } : undefined,
      top: 0x2a2a2a, coat: { color: pick([0x5a1a1a, 0x2a2a3a], i), len: 'knee' }, right: { item: 'scimitar' },
    };
    case 'ent': return {
      body: 'ent', height: 2.1 + (i % 3) * 0.25, skin: pick([0x5a4430, 0x6a5a40, 0x4a3a2a], i), top: pick([0x4e3a28, 0x5a4a30, 0x3e3a26], i), sleeves: pick([0x4e3a28, 0x5a4a30], i),
      legs: 0x4a3624, boots: 0x3a2a1c, gloves: 0x4a3624, eyes: 0xc8a040, hair: { style: 'leaves', color: pick([0x4a6a2a, 0x8a6a2a, 0x3a5a3a], i) }, beard: { style: 'moss', color: 0x6a7a4a }, pace: 2.6, selfLight: 0.18,
    };
    case 'mordor': return {
      body: 'uruk', height: 0.95, skin: 0x3a3028, eyes: 0xe06020, hair: { style: 'bald' }, top: 0x1a1816, plate: 0x2a2624, hat: { style: 'helm', color: 0x2a2a28 },
      legs: 0x1a1816, right: { item: pick(['spear', 'scimitar', 'banner'], i) }, banner: 0x3a0a0a, selfLight: 0.14,
    };
    case 'havens': return {
      body: 'elf', height: 1.02, skin: 0xf2e0d0, ears: 'elf', hair: { style: 'flowing', color: pick([0xc8c0b0, 0x2a1c14], i) }, top: 0xe8ecf0,
      coat: { color: pick([0xdce4ec, 0xc8d0dc], i), len: 'ankle', flare: 0.5 }, cloak: { color: 0x9aa8b8, len: 0.8 },
    };
    default: return folkSpec('bree', i);
  }
}

// --- Making them -------------------------------------------------------------------------------

/**
 * A character by id (or 'kind:variant' for folk), built and ready to walk and act. [hands]
 * can give them something else to hold: { right: 'mug', left: 'lantern' }.
 */
export function makeCharacter(id, hands = {}) {
  const [base, variant] = id.split(':');
  const named = CHARACTERS[base];
  if (named?.rider) {
    const r = makeRider();
    r.userData.id = id;
    return r;
  }
  let spec, key;
  if (named?.folk) {
    const v = named.variant ?? Math.floor(Math.random() * 5);
    spec = folkSpec(named.folk, v);
    key = `${named.folk}:${v}`;
  } else if (named) {
    spec = named;
    key = base;
  } else {
    spec = folkSpec(base, Number(variant) || 0);
    key = `${base}:${Number(variant) || 0}`;
  }
  if (hands.right || hands.left) {
    spec = { ...spec };
    if (hands.right) spec.right = { item: hands.right };
    if (hands.left) spec.left = { item: hands.left };
    key += `+${hands.right || ''}+${hands.left || ''}`;
  }
  const obj = person(spec, key);
  obj.userData.id = id;
  obj.userData.name = named?.name || base;
  return obj;
}

/** Builds a spec: a rig plus what it can't bake (a wizard's glow, the see-through Dead). */
export function person(spec, key) {
  const fig = buildRig(spec, key);
  if (spec.glow) {
    const l = makeFlash(spec.glow, 0.6 * (spec.height || 1));
    l.userData.set(0.5);
    l.position.y = (spec.height || 1) * 0.85;
    fig.add(l);
  }
  if (spec.ghost) {
    const m = fig.userData.material;
    m.transparent = true;
    m.opacity = 0.5;
    m.depthWrite = false;
    m.emissive = new THREE.Color(0x40ff90);
    m.emissiveIntensity = 0.7;
  }
  return fig;
}

export const makeNazgul = (crown = false) => makeCharacter(crown ? 'witch_king' : 'nazgul');
export const makeOrc = (kind = 'uruk') => makeCharacter(`${kind}:${Math.floor(Math.random() * 5)}`);
export const makeGhost = () => makeCharacter(`dead:${Math.floor(Math.random() * 5)}`);

export { makePony, makeRider, makeHorse };
