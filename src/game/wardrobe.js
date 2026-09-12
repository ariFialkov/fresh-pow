// Wardrobe and the pro shop: what the rider wears, what they ride, what it
// costs in chips. Purely cosmetic — nothing here changes how a run goes.
// Ownership lives in the save (state.owned); a starter ride of each type and
// the classic outfit come free.
import { EQUIPMENT } from './equipment.js';
import { state, save } from './state.js';

// whole outfits: jacket / jacket trim / pants / hat / accessory
export const OUTFITS = [
  { id: 'fit-classic', name: 'Lodge Classic', jacket: 0xfbbf24, jacket2: 0x1b1e24, pants: 0x16181c, hat: 0x1b1e24, accessory: 0xf5a623, price: 0, tag: 'The house colours' },
  { id: 'fit-glacier', name: 'Glacier Shell', jacket: 0x38bdf8, jacket2: 0xf4f4f4, pants: 0x243447, hat: 0xf4f4f4, accessory: 0x38bdf8, price: 220, tag: 'Ice-blue technical shell' },
  { id: 'fit-ember', name: 'Ember Kit', jacket: 0xd6452f, jacket2: 0xffd94a, pants: 0x2b2f38, hat: 0xd6452f, accessory: 0xf5a623, price: 260, tag: 'Warm as a lodge fire' },
  { id: 'fit-midnight', name: 'Midnight Stealth', jacket: 0x1b1e24, jacket2: 0x2b2f3a, pants: 0x16181c, hat: 0x1b1e24, accessory: 0x7a4fd0, price: 340, tag: 'All black, purple hits' },
  { id: 'fit-retro', name: 'Retro Neon', jacket: 0xe0407e, jacket2: 0x7ae0d8, pants: 0x4a2430, hat: 0x3ec66b, accessory: 0xffd94a, price: 420, tag: 'Straight out of 1989' },
  { id: 'fit-forest', name: 'Backcountry Forest', jacket: 0x3f6048, jacket2: 0xf08c2e, pants: 0x3c3428, hat: 0xf08c2e, accessory: 0xf4f4f4, price: 300, tag: 'Earth tones, orange trim' },
  { id: 'fit-arctic', name: 'Arctic Whiteout', jacket: 0xf4f4f4, jacket2: 0x88b7e8, pants: 0xe8eef4, hat: 0xf4f4f4, accessory: 0x38bdf8, price: 520, tag: 'Vanishes into the powder' },
  { id: 'fit-gold', name: 'Champion Gold', jacket: 0xf5a623, jacket2: 0x1b1e24, pants: 0x1b1e24, hat: 0xffd94a, accessory: 0xffd94a, price: 900, tag: 'For the podium regular' },
];

// ride prices: the starter of each type is free, the rest climb with flash
const RIDE_PRICE = {
  'ski-powder': 0, 'ski-glacier': 180, 'ski-birch': 240, 'ski-neon': 360,
  'board-midnight': 0, 'board-sunset': 200, 'board-split': 380, 'board-mallow': 300,
  'sled-steel': 0, 'sled-luge': 220, 'sled-wood': 160, 'sled-saucer': 280,
};

export const FREE = new Set(['ski-powder', 'board-midnight', 'sled-steel', 'fit-classic']);

export function priceOf(id) {
  return RIDE_PRICE[id] ?? OUTFITS.find((o) => o.id === id)?.price ?? 0;
}

export function outfitById(id) {
  return OUTFITS.find((o) => o.id === id) ?? OUTFITS[0];
}

export function owns(id) {
  return FREE.has(id) || (state.owned ?? []).includes(id);
}

/** Buy with chips. Returns false if broke or already owned. */
export function buy(id) {
  if (owns(id)) return false;
  const price = priceOf(id);
  if (state.balance < price) return false;
  state.balance = Math.round((state.balance - price) * 100) / 100;
  state.owned = [...(state.owned ?? []), id];
  save();
  return true;
}

/** The shop's shelves, by tab. */
export const SHOP_TABS = [
  { id: 'featured', label: 'Featured' },
  { id: 'ski', label: 'Skis' },
  { id: 'board', label: 'Snowboards' },
  { id: 'sled', label: 'Sleds' },
  { id: 'outfit', label: 'Outfits' },
];

export function shelf(tab) {
  const rides = EQUIPMENT.map((e) => ({ kind: 'ride', id: e.id, type: e.type, name: e.name, price: priceOf(e.id), colors: [e.deck, e.accent], tag: e.type === 'ski' ? 'Skis' : e.type === 'board' ? 'Snowboard' : 'Sled' }));
  const fits = OUTFITS.map((o) => ({ kind: 'outfit', id: o.id, type: 'outfit', name: o.name, price: o.price, colors: [o.jacket, o.jacket2, o.pants], tag: o.tag }));
  if (tab === 'outfit') return fits;
  if (tab === 'featured') {
    // the flashiest of each shelf, priciest first
    const pick = (arr) => [...arr].sort((a, b) => b.price - a.price).slice(0, 2);
    return [...pick(fits), ...pick(rides.filter((r) => r.type === 'board')), ...pick(rides.filter((r) => r.type === 'ski')), ...pick(rides.filter((r) => r.type === 'sled'))];
  }
  return rides.filter((r) => r.type === tab);
}
