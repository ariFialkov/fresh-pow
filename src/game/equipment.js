// 12 rides. Purely cosmetic — every ride behaves identically on snow —
// but each has its own silhouette, colors and rider stance.

export const EQUIPMENT = [
  // --- skis ---
  { id: 'ski-powder', type: 'ski', name: 'Powder Rockets', deck: 0xe23b3b, accent: 0xffffff, suit: 0xd6452f },
  { id: 'ski-glacier', type: 'ski', name: 'Glacier GS', deck: 0x2f6fd6, accent: 0xbfe3ff, suit: 0x1d3f75 },
  { id: 'ski-birch', type: 'ski', name: 'Birch Classics', deck: 0xb9884f, accent: 0x6e4a24, suit: 0x476042 },
  { id: 'ski-neon', type: 'ski', name: 'Neon Slalom', deck: 0x3ee06b, accent: 0x0b1c2c, suit: 0x22242a },
  // --- snowboards ---
  { id: 'board-midnight', type: 'board', name: 'Midnight Deck', deck: 0x22242e, accent: 0x38bdf8, suit: 0x2c2f3a },
  { id: 'board-sunset', type: 'board', name: 'Sunset Camber', deck: 0xf08c2e, accent: 0xd6452f, suit: 0x7a3050 },
  { id: 'board-split', type: 'board', name: 'Splitboard 9000', deck: 0x9b59d0, accent: 0xf4f9ff, suit: 0x3f2f52 },
  { id: 'board-mallow', type: 'board', name: 'Marshmallow', deck: 0xf4f0e6, accent: 0xf0a8c0, suit: 0xb0d8e8 },
  // --- sleds ---
  { id: 'sled-steel', type: 'sled', name: 'Steel Toboggan', deck: 0x8a99a8, accent: 0x38414d, suit: 0x4a5568 },
  { id: 'sled-luge', type: 'sled', name: 'Rocket Luge', deck: 0xd6452f, accent: 0xfbbf24, suit: 0x8c1f1f },
  { id: 'sled-wood', type: 'sled', name: 'Classic Wood Sled', deck: 0xa8763e, accent: 0x5c3a1a, suit: 0x7a1f2e },
  { id: 'sled-saucer', type: 'sled', name: 'Ice Saucer', deck: 0x7fd4e8, accent: 0xf4f9ff, suit: 0x2a7a8c },
];

export function equipmentById(id) {
  return EQUIPMENT.find((e) => e.id === id) || EQUIPMENT[0];
}

export const TYPE_LABEL = { ski: 'Skis', board: 'Snowboard', sled: 'Sled' };
