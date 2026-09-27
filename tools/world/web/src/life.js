// The life of each place in the open world: who you'd find there and what they're doing - hobbits
// dancing and gardening in Hobbiton, drinkers at the Prancing Pony, smiths at Erebor, Ents in
// Fangorn, orcs on the walls of Mordor. Each place's folk are a group at the place, shown (and
// animated) only while the camera is near it, so a TV only ever draws a few places' worth.
//
// An entry in LIFE[placeId]:
//   who      a character id ('gandalf'), folk ('hobbit:2'), or a thing ('rider:rohan', 'cart',
//            'pony', 'eagle', 'fellbeast', 'troll', 'spider', 'ship', 'barrel', 'boat')
//   at       [x, z] km from the place (east, south); face: [x, z] to face, or path: a loop to walk
//   act      what they do while standing (or acts: a list they take turns at, every few seconds)
//   speed    km/s along the path (people ~1.2, riders ~3)
//   fly      height above the ground (km), for eagles and fell beasts
//   prop     'fire', 'table', 'bench', 'anvil', 'barrels', 'tent', 'stall', 'boat', 'target'
import * as THREE from 'three';
import { makeCharacter } from './characters.js';
import { makeRider, makeCart, makePony, makeHorse } from './figures.js';
import { makeEagle, makeFellBeast, makeTroll, makeSpider, makeShip, makeBarrel } from './creatures.js';
import { makeFire, makeEmitter } from './effects.js';

const FIGURE_SCALE = 2.2;   // figure units -> km, as for the journeys' travellers (a little smaller)

export const LIFE = {
  hobbiton: [
    // A party under the Party Tree: dancing, a fiddler's jig, drinking; a gardener at his rows.
    { who: 'hobbit:0', at: [3.2, 2.6], act: 'dance' },
    { who: 'hobbit:3', at: [4.4, 2.2], act: 'dance' },
    { who: 'hobbit:1', at: [3.8, 3.6], act: 'cheer' },
    { who: 'hobbit:4', at: [2.4, 3.8], face: [3.6, 2.6], acts: ['drink', 'talk'], right: 'mug' },
    { who: 'hobbit:2', at: [-3.4, 3.2], face: [-3.4, 9], act: 'dig' },
    { who: 'hobbit:5', at: [-4.6, -1.6], face: [0, 0], act: 'smoke', seat: true, prop: 'bench' },
    { who: 'bilbo', at: [0.4, -3.2], face: [0, 3], acts: ['wave', 'smoke', 'talk'] },
    { who: 'hobbit:6', path: [[-3, 3], [3, 6], [5, 1]], speed: 0.9 },
    { who: 'cart', path: [[-6, -2], [8, 1], [20, 0], [8, 5]], speed: 1.6 },
    { who: 'hobbit:7', path: [[0, 0], ['bree']], speed: 0.9 },
  ],
  bree: [
    // Outside the Prancing Pony: drinkers at a table, Butterbur bustling, a Ranger in the shadows.
    { prop: 'table', at: [2.8, 2.2] },
    { who: 'bree:0', at: [2.2, 2.2], face: [2.8, 2.2], acts: ['drink', 'talk', 'drink'], right: 'mug' },
    { who: 'bree:1', at: [3.4, 2.2], face: [2.8, 2.2], acts: ['talk', 'drink', 'listen'], right: 'mug' },
    { who: 'hobbit:2', at: [2.8, 3.0], face: [2.8, 2.2], acts: ['listen', 'drink', 'cheer'], right: 'mug' },
    { who: 'bree:3', path: [[1.5, 1], [4, 1.2], [4, 3.4], [1.5, 3.2]], speed: 0.8 },
    { who: 'ranger:1', at: [-2.6, 2.4], face: [2.8, 2.2], act: 'smoke', seat: true, prop: 'bench' },
    { who: 'pony', at: [-1.6, -2.6], face: [3, -2.6] },
    { who: 'bree:4', path: [[-8, 2], [0, 4], [8, 3]], speed: 1 },
  ],
  weathertop: [
    // Rangers of the North keeping watch by a fire in the ruins.
    { prop: 'fire', at: [1.4, 1.6] },
    { who: 'ranger:0', at: [0.6, 1.6], face: [1.4, 1.6], act: 'sitGround' },
    { who: 'ranger:2', at: [2.2, 1.9], face: [1.4, 1.6], acts: ['talk', 'smoke'], seat: true },
    { who: 'ranger:1', at: [-1.2, -0.6], face: [-6, -3], act: 'sentry' },
  ],
  trollshaws: [
    // Bert, Tom and William, stone for ever in the dawn; a Ranger passing by.
    { who: 'troll', at: [-1.2, 0.4], face: [0, 2], stone: true },
    { who: 'troll', at: [1.4, 0.2], face: [0, 2], stone: true },
    { who: 'troll', at: [0.2, -1.4], face: [0, 0], stone: true },
    { who: 'ranger:0', path: [[-6, 3], [6, 2], [2, -5]], speed: 1 },
  ],
  rivendell: [
    // The Last Homely House: Elrond in counsel, Elves singing, Bilbo writing his book.
    { who: 'elrond', at: [2.2, 2.2], face: [3.4, 3.4], acts: ['talk', 'listen'] },
    { who: 'elf:1', at: [3.4, 3.4], face: [2.2, 2.2], acts: ['listen', 'talk'] },
    { who: 'bilbo', at: [-2.4, 2.6], face: [-2.4, 5], act: 'hold', seat: true, prop: 'bench' },
    { who: 'elf:0', at: [-0.4, 3.6], face: [-2.4, 2.6], act: 'talk' },
    { who: 'elf:2', path: [[-3, -3], [3, -3.5], [4, 1], [-2, 1]], speed: 0.7 },
    { who: 'elf:3', path: [[4, -1], [5, 3], [1, 4.5]], speed: 0.6 },
  ],
  grey_havens: [
    // Círdan's Elves at the quays, and a ship making ready to sail West.
    { who: 'havens:0', at: [-1, 1.2], face: [0, 0], act: 'sentry' },
    { who: 'havens:1', path: [[2.6, 1.5], [-0.6, 0.6], [-2.4, 2]], speed: 0.5 },
    { who: 'elf:1', at: [1.6, 1.8], face: [0, 0], act: 'wave' },
    { who: 'havens:2', at: [2.4, -1.8], face: [0, 0], act: 'mourn' },
  ],
  high_pass: [
    // Goblins of Goblin-town out on the pass with torches.
    { who: 'goblin:0', path: [[-3, -1], [3, 1], [1, 4], [-4, 2]], speed: 1.1, right: 'torch' },
    { who: 'goblin:1', path: [[3, 1], [1, 4], [-4, 2], [-3, -1]], speed: 1.1 },
    { who: 'goblin:2', at: [0, 1.8], face: [0, 6], act: 'gloat' },
    { who: 'goblin:3', at: [1, 1.2], face: [0, 6], act: 'sentry', right: 'torch' },
  ],
  carrock: [
    // Beorn at his hall, and the Eagles circling the Carrock.
    { who: 'beorn', path: [[-3, 2], [3, 3], [2, -2]], speed: 0.9 },
    { who: 'eagle', path: [[-8, -4], [0, -9], [8, -4], [0, 4]], speed: 4, fly: 9 },
    { who: 'eagle', path: [[6, 3], [-2, 8], [-8, 0], [0, -6]], speed: 3.6, fly: 12 },
  ],
  elvenking: [
    // The Wood-elves: archers at their marks, guards at the gate, barrels on the river.
    { prop: 'target', at: [0, 6] },
    { who: 'woodelf:0', at: [-0.8, 1.5], face: [0, 6], act: 'shoot' },
    { who: 'woodelf:2', at: [0.8, 1.2], face: [0, 6], act: 'shoot' },
    { who: 'woodelf:1', at: [-2.4, -1.8], face: [-2.4, -6], act: 'sentry' },
    { who: 'thranduil', at: [2.6, -1.2], face: [0, 3], acts: ['idle', 'talk'] },
    { who: 'barrel', path: [[4, -4], [5.5, 0], [4.5, 5], [6, 10]], speed: 1.4 },
    { who: 'barrel', path: [[5.5, 0], [4.5, 5], [6, 10], [4, -4]], speed: 1.4 },
  ],
  esgaroth: [
    // Lake-town: fishermen on the jetties, a boat rowing out, Bard at the market.
    { who: 'laketown:0', at: [2.6, 2.4], face: [5, 5], act: 'fish', right: 'rod', seat: true },
    { who: 'laketown:1', at: [-2.6, 2.6], face: [-5, 5], act: 'fish', right: 'rod' },
    { who: 'laketown:2', at: [0.8, -2.4], face: [0, 0], acts: ['talk', 'point'] },
    { who: 'bard', at: [-0.4, -1.6], face: [0.8, -2.4], acts: ['listen', 'talk'] },
    { who: 'boat', path: [[3, 4], [7, 6], [5, 9], [1, 6]], speed: 0.8 },
    { prop: 'stall', at: [1.8, -1.2] },
  ],
  erebor: [
    // The Dwarves of the Lonely Mountain at their forges, and guards at the Front Gate.
    { prop: 'anvil', at: [-1.6, 2.2] },
    { prop: 'fire', at: [-2.4, 3] },
    { who: 'dwarf:0', at: [-1.6, 2.9], face: [-1.6, 2.2], act: 'hammer', right: 'hammer' },
    { who: 'dwarf:3', at: [-0.9, 2.2], face: [-1.6, 2.2], act: 'hammer', right: 'hammer' },
    { who: 'dwarf:1', at: [1.2, 1.6], face: [1.2, 8], act: 'sentry', right: 'spear' },
    { who: 'dwarf:4', at: [-1.2, 1.6], face: [-1.2, 8], act: 'sentry', right: 'spear' },
    { who: 'dwarf:2', path: [[2, 3], [6, 5], [4, 8], [0, 5]], speed: 0.8 },
  ],
  moria: [
    // Goblins at the West-gate of Moria.
    { who: 'goblin:4', path: [[-2, 2], [2, 2.5], [2, 5], [-2, 4]], speed: 1 },
    { who: 'goblin:0', at: [0.6, 1.5], face: [0, 6], act: 'sentry', right: 'torch' },
    { who: 'goblin:1', at: [-0.8, 1.2], face: [0, 6], act: 'gloat' },
  ],
  lorien: [
    // Galadriel walking among the mallorns; the Galadhrim on watch.
    { who: 'galadriel', path: [[-2, 2], [2, 2.5], [2.5, -1.5], [-2, -2]], speed: 0.35 },
    { who: 'woodelf:0', at: [3, 3.4], face: [8, 8], act: 'sentry', left: 'longbow' },
    { who: 'elf:0', at: [-3.2, 2.8], face: [-8, 8], act: 'sentry' },
    { who: 'elf:3', at: [0.6, -3], face: [0, 0], act: 'talk' },
    { who: 'elf:1', at: [1.2, -3.6], face: [0, 0], act: 'listen' },
  ],
  dol_guldur: [
    // The Necromancer's hold: orcs, a Ringwraith, spiders in the dark wood.
    { who: 'nazgul', at: [0, 2.2], face: [0, 8], act: 'idle' },
    { who: 'orc:1', path: [[-3, 2], [3, 3], [3, -2], [-3, -2]], speed: 1 },
    { who: 'orc:2', at: [1.4, 2.4], face: [1.4, 8], act: 'sentry' },
    { who: 'spider', path: [[-6, 4], [-2, 7], [-7, 8]], speed: 1.4 },
  ],
  fangorn: [
    // Ents walking slowly under the old trees; Treebeard humming to himself.
    { who: 'treebeard', path: [[-3, 1], [2, 4], [4, -2], [-1, -4]], speed: 0.35 },
    { who: 'ent:1', path: [[4, -2], [-1, -4], [-3, 1], [2, 4]], speed: 0.3 },
    { who: 'ent:2', at: [-4, 3], face: [0, 0], act: 'idle' },
  ],
  isengard: [
    // Saruman's industry: Uruk-hai felling trees and forging, a column marching out.
    { who: 'saruman', at: [0, 1.4], face: [0, 6], acts: ['cast', 'point', 'idle'] },
    { who: 'uruk:0', at: [-3, 2.4], face: [-3, 5], act: 'chop', right: 'axe' },
    { who: 'uruk:1', at: [3.4, 2.6], face: [3.4, 5], act: 'chop', right: 'axe' },
    { prop: 'anvil', at: [2, -2.4] },
    { prop: 'fire', at: [2.8, -3] },
    { who: 'orc:0', at: [2, -1.7], face: [2, -2.4], act: 'hammer', right: 'hammer' },
    { who: 'uruk:2', path: [[-4, -3], [0, -2], [4, 0], [2, 4], [-3, 3]], speed: 1.2 },
    { who: 'uruk:3', path: [[0, -2], [4, 0], [2, 4], [-3, 3], [-4, -3]], speed: 1.2 },
  ],
  helms_deep: [
    // The Hornburg's garrison on the Deeping Wall, and a smith at work.
    { who: 'rohan:0', at: [-1.4, 2.2], face: [-1.4, 8], act: 'sentry' },
    { who: 'rohan:1', at: [1.4, 2.2], face: [1.4, 8], act: 'sentry' },
    { who: 'rohan:2', path: [[-2.6, 1.6], [2.6, 1.6]], speed: 0.6 },
    { prop: 'anvil', at: [-2.2, -1.6] },
    { who: 'rohan:3', at: [-2.2, -0.9], face: [-2.2, -1.6], act: 'hammer', right: 'hammer' },
  ],
  edoras: [
    // Riders of Rohan on the plains, guards at the doors of Meduseld, Éowyn on the steps.
    { who: 'rider:rohan', path: [[6, -8], [22, -14], [30, -2], [14, 4]], speed: 3 },
    { who: 'rider:rohan', path: [[7, -8], [22, -16], [30, -2], [14, 4]], speed: 3.2 },
    { who: 'rider:rohan', path: [[8, -8], [22, -18], [30, -2], [14, 4]], speed: 3.4 },
    { who: 'rohan:0', at: [-0.8, 1.6], face: [-0.8, 8], act: 'sentry' },
    { who: 'rohan:2', at: [0.8, 1.6], face: [0.8, 8], act: 'sentry' },
    { who: 'eowyn', at: [0, 2.8], face: [0, 9], acts: ['idle', 'look'] },
  ],
  erech: [
    // The Dead, drifting round the Stone of Erech.
    { who: 'dead:0', path: [[-2, 0], [0, 2], [2, 0], [0, -2]], speed: 0.4 },
    { who: 'dead:1', path: [[0, 2], [2, 0], [0, -2], [-2, 0]], speed: 0.4 },
    { who: 'dead:2', path: [[2, 0], [0, -2], [-2, 0], [0, 2]], speed: 0.4 },
    { who: 'king_of_the_dead', at: [0, 0.8], face: [0, 6], act: 'idle' },
  ],
  amon_hen: [
    // Elven boats drawn up on Parth Galen, and Uruk scouts in the trees.
    { who: 'boat', at: [-2, 2.6], face: [-2, 8] },
    { who: 'boat', at: [-3, 2], face: [-3, 8] },
    { who: 'uruk:1', path: [[2, -3], [4, 2], [1, 4]], speed: 1 },
    { who: 'uruk:4', at: [3.4, -1], face: [0, 0], act: 'sentry' },
  ],
  dead_marshes: [
    // Candles of the dead over the pools, and Gollum picking his way through.
    { prop: 'wisps', at: [0, 1] },
    { prop: 'wisps', at: [-3, -1] },
    { who: 'gollum', path: [[-4, 3], [0, 1], [4, 3], [2, -2]], speed: 0.8, act: 'crawl' },
  ],
  black_gate: [
    // The Morannon: sentries on the gate, a host marching in.
    { who: 'mordor:0', at: [-1.2, 1.8], face: [-1.2, 8], act: 'sentry' },
    { who: 'mordor:1', at: [1.2, 1.8], face: [1.2, 8], act: 'sentry' },
    { who: 'mordor:2', at: [0, 2.4], face: [0, 8], act: 'sentry' },
    { who: 'orc:0', path: [[-2, 9], [0, 3], [2, 9]], speed: 1 },
    { who: 'orc:1', path: [[0, 3], [2, 9], [-2, 9]], speed: 1 },
    { who: 'orc:2', path: [[2, 9], [-2, 9], [0, 3]], speed: 1 },
  ],
  minas_tirith: [
    // The Guard of the Citadel, soldiers on the walls, Gandalf riding Shadowfax up the city.
    { who: 'gondor:0', at: [-1, 2.8], face: [-1, 9], act: 'sentry' },
    { who: 'gondor:1', at: [1, 2.8], face: [1, 9], act: 'sentry' },
    { who: 'gondor:2', path: [[-3, 3.4], [3, 3.4]], speed: 0.6 },
    { who: 'pippin', at: [0, 1.8], face: [0, 9], act: 'sentry' },
    { who: 'rider:gandalf_white', path: [[-6, 6], [6, 5], [4, -3], [-5, -3]], speed: 3.2, horse: 0xf4f4f0 },
  ],
  osgiliath: [
    // Faramir's men holding the ruins.
    { who: 'faramir', at: [0, 1.6], face: [3, 4], acts: ['talk', 'point'] },
    { who: 'gondor:3', at: [1.2, 1.9], face: [0, 1.6], act: 'listen' },
    { who: 'gondor:4', at: [-1.6, 2.4], face: [-2, 8], act: 'guard', right: 'sword' },
    { who: 'ranger:3', path: [[-3, -2], [3, -2], [3, 3]], speed: 0.8 },
  ],
  minas_morgul: [
    // Black Riders going out from the dead city; orcs at its gate.
    { who: 'rider:nazgul', path: [[-2, 3], [4, 8], [10, 2], [4, -3]], speed: 2.4, black: true },
    { who: 'rider:nazgul', path: [[4, 8], [10, 2], [4, -3], [-2, 3]], speed: 2.4, black: true },
    { who: 'orc:3', at: [-1.2, 2], face: [-1.2, 8], act: 'sentry' },
    { who: 'orc:4', at: [1.2, 2], face: [1.2, 8], act: 'sentry' },
  ],
  mount_doom: [
    // Slaves of Mordor toiling on the ash-slopes.
    { who: 'mordor:3', path: [[-5, 4], [0, 6], [5, 4]], speed: 0.8 },
    { who: 'mordor:4', path: [[0, 6], [5, 4], [-5, 4]], speed: 0.8 },
    { who: 'orc:2', at: [3, 2.6], face: [0, 6], act: 'dig', right: 'hoe' },
  ],
  barad_dur: [
    // The Dark Tower: a fell beast circling, sentries at its foot.
    { who: 'fellbeast', path: [[-8, 0], [0, -8], [8, 0], [0, 8]], speed: 4, fly: 16 },
    { who: 'mordor:0', at: [-1.6, 2], face: [-1.6, 8], act: 'sentry' },
    { who: 'mordor:2', at: [1.6, 2], face: [1.6, 8], act: 'sentry' },
  ],
  pelargir: [
    // The Corsairs of Umbar in the harbour.
    { who: 'ship', at: [-3, 3], face: [-3, 9] },
    { who: 'ship', at: [2, 4], face: [4, 9] },
    { who: 'corsair:0', path: [[-2, 1], [2, 1.5], [1, -1]], speed: 0.8 },
    { who: 'corsair:1', at: [0, 2], face: [-3, 3], acts: ['talk', 'point'] },
    { who: 'corsair:2', at: [0.8, 2.4], face: [0, 2], act: 'listen' },
  ],
};

// --- Props --------------------------------------------------------------------------------------

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: true, emissive: color, emissiveIntensity: 0.15, ...extra });

function makeProp(kind) {
  const g = new THREE.Group();
  const add = (geo, color, x, y, z, ry = 0) => {
    const m = new THREE.Mesh(geo, mat(color));
    m.position.set(x, y, z);
    m.rotation.y = ry;
    g.add(m);
    return m;
  };
  switch (kind) {
    case 'table':
      add(new THREE.BoxGeometry(0.9, 0.06, 0.5), 0x6a4a2a, 0, 0.4, 0);
      for (const x of [-0.38, 0.38]) add(new THREE.BoxGeometry(0.06, 0.4, 0.4), 0x5a3a20, x, 0.2, 0);
      add(new THREE.CylinderGeometry(0.04, 0.035, 0.08, 6), 0x8a6a40, 0.2, 0.47, 0.05);
      break;
    case 'bench':
      add(new THREE.BoxGeometry(0.7, 0.05, 0.22), 0x6a4a2a, 0, 0.28, 0);
      for (const x of [-0.28, 0.28]) add(new THREE.BoxGeometry(0.05, 0.28, 0.2), 0x5a3a20, x, 0.14, 0);
      break;
    case 'anvil':
      add(new THREE.BoxGeometry(0.2, 0.25, 0.16), 0x3a3a3a, 0, 0.12, 0);
      add(new THREE.BoxGeometry(0.4, 0.1, 0.18), 0x4a4a4a, 0, 0.3, 0);
      break;
    case 'stall':
      add(new THREE.BoxGeometry(0.9, 0.4, 0.4), 0x6a5030, 0, 0.2, 0);
      add(new THREE.BoxGeometry(1, 0.04, 0.6), 0xa04a3a, 0, 0.9, 0);
      for (const x of [-0.45, 0.45]) add(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 4), 0x5a3a20, x, 0.45, 0.2);
      break;
    case 'target':
      add(new THREE.CylinderGeometry(0.25, 0.25, 0.05, 12), 0xe8d8b0, 0, 0.5, 0).rotation.x = Math.PI / 2;
      add(new THREE.CylinderGeometry(0.1, 0.1, 0.06, 10), 0xa02a1a, 0, 0.5, 0).rotation.x = Math.PI / 2;
      add(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 4), 0x5a3a20, 0, 0.25, -0.03);
      break;
    case 'boat': {
      // An Elven boat of Lórien (or a Lake-town skiff): grey, swan-prowed.
      const hull = add(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 8, 1, false, Math.PI / 2, Math.PI), 0x9a9a8a, 0, 0.18, 0);
      hull.rotation.set(Math.PI / 2, 0, Math.PI);
      add(new THREE.ConeGeometry(0.06, 0.4, 5), 0xd8d8c8, 0, 0.45, 0.72);
      break;
    }
    default:
      break;
  }
  return g;
}

function makeThing(e) {
  const [kind, which] = e.who.split(':');
  switch (kind) {
    case 'rider': {
      const r = makeRider(e.horse ?? 0x6a4a30, which, { black: e.black });
      r.userData.gallop = e.speed > 2.8;
      return r;
    }
    case 'cart': return makeCart();
    case 'pony': return makePony(0x7a5a3a);
    case 'horse': return makeHorse(e.horse ?? 0x7a5a3a, false, { saddle: false });
    case 'eagle': return makeEagle(1.2);
    case 'fellbeast': return makeFellBeast(makeCharacter('nazgul'));
    case 'troll': {
      const t = makeTroll();
      if (e.stone) t.userData.turnToStone(1);
      return t;
    }
    case 'spider': return makeSpider(0.6);
    case 'ship': return makeShip();
    case 'barrel': return makeBarrel();
    case 'boat': return makeProp('boat');
    default:
      return makeCharacter(e.who, { right: e.right, left: e.left });
  }
}

// --- Running it ---------------------------------------------------------------------------------

/**
 * Builds every place's life. [world] gives places (id -> {x, y, z}), heightAt(x, z) and seaY.
 * Returns update(dt, t, focus) where focus = {x, z, dist} is what the camera is looking at.
 */
export function buildLife(scene, world) {
  const groups = [];
  for (const [id, entries] of Object.entries(LIFE)) {
    const place = world.places[id];
    if (!place) continue;
    const group = new THREE.Group();
    group.position.set(place.x, place.y, place.z);
    group.visible = false;
    scene.add(group);
    const actors = [];
    const ground = (x, z) => Math.max(world.heightAt(place.x + x, place.z + z), world.seaY) - place.y;
    for (const e of entries) {
      if (e.prop && !e.who) {
        const p = e.prop === 'fire' ? makeFire(1.6) : e.prop === 'wisps'
          ? makeEmitter({ count: 24, color: 0xd8ffe8, endColor: 0x103020, size: 1.2, life: 2.5, spread: 3, velocity: [0, 0.3, 0], jitter: 0.2 })
          : makeProp(e.prop);
        if (!p.userData.update) p.scale.setScalar(FIGURE_SCALE);
        p.position.set(e.at[0], ground(e.at[0], e.at[1]) + (e.prop === 'wisps' ? 0.5 : 0), e.at[1]);
        group.add(p);
        if (p.userData.update) actors.push({ obj: p, update: p.userData.update });
        continue;
      }
      const obj = makeThing(e);
      obj.rotation.order = 'YXZ';
      obj.scale.multiplyScalar(FIGURE_SCALE);
      group.add(obj);
      const legs = obj.userData.rig?.d.legs ?? 0.48;
      if (e.prop) {
        // A seat is made to fit its sitter: a hobbit's bench is lower than a Man's.
        const p = makeProp(e.prop);
        p.scale.setScalar(FIGURE_SCALE * (e.seat ? (legs * 0.5) / 0.3 : 1));
        p.position.set(e.at[0], ground(e.at[0], e.at[1]), e.at[1]);
        if (e.face) p.rotation.y = Math.atan2(e.face[0] - e.at[0], e.face[1] - e.at[1]);
        group.add(p);
      }
      const a = { obj, e, fly: e.fly || 0, t: Math.random() * 10 };
      if (e.path) {
        const pts = e.path.map((p) => (typeof p[0] === 'string'
          ? new THREE.Vector3(world.places[p[0]].x - place.x, 0, world.places[p[0]].z - place.z)
          : new THREE.Vector3(p[0], 0, p[1])));
        a.curve = new THREE.CatmullRomCurve3(pts, true);
        a.len = a.curve.getLength();
        a.u = Math.random();
        if (e.act) obj.userData.act?.(e.act);
      } else {
        obj.position.set(e.at[0], ground(e.at[0], e.at[1]) + a.fly, e.at[1]);
        if (e.face) obj.rotation.y = Math.atan2(e.face[0] - e.at[0], e.face[1] - e.at[1]);
        if (e.seat && obj.userData.pose) Object.assign(obj.userData.pose, { crouch: 0.45, lLegX: -1.5, lKnee: 1.45, rLegX: -1.5, rKnee: 1.45 });
        obj.userData.act?.(e.act || e.acts?.[0] || 'idle');
      }
      actors.push(a);
    }
    groups.push({ id, group, place, actors, ground });
  }

  return (dt, t, focus) => {
    for (const g of groups) {
      // Only the places near what the camera's looking at, and only when it's close enough to see people.
      const d = Math.hypot(g.place.x - focus.x, g.place.z - focus.z);
      const show = focus.dist < 160 && d < Math.max(45, focus.dist * 1.25);
      g.group.visible = show;
      if (!show) continue;
      for (const a of g.actors) {
        if (a.update) { a.update(dt, t); continue; }
        const { obj, e } = a;
        obj.userData.update?.(dt, t);
        if (a.curve) {
          a.u = (a.u + (e.speed || 1) * dt / a.len) % 1;
          const p = a.curve.getPointAt(a.u), q = a.curve.getPointAt((a.u + 0.003) % 1);
          obj.position.set(p.x, g.ground(p.x, p.z) + a.fly, p.z);
          obj.rotation.y = Math.atan2(q.x - p.x, q.z - p.z);
          // Legs keep pace with the ground: a slow stroll steps slower than a quick walk.
          obj.userData.walk?.(dt * Math.min(1.6, Math.max(0.6, (e.speed || 1) / 1.1)));
        } else if (e.acts) {
          a.t += dt;
          const every = e.every || 5;
          obj.userData.act?.(e.acts[Math.floor(a.t / every) % e.acts.length]);
        }
      }
    }
  };
}
