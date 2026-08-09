// 12 rides. Purely cosmetic — every ride behaves identically on snow —
// but each has its own silhouette, colors and rider stance.

// Saturated decks and vivid shells — nothing here should ever blend into snow.
export const EQUIPMENT = [
  // --- skis ---
  { id: 'ski-powder', type: 'ski', name: 'Powder Rockets', deck: 0xe23b3b, accent: 0x1b1e26, suit: 0xd6452f },
  { id: 'ski-glacier', type: 'ski', name: 'Glacier GS', deck: 0x2464d0, accent: 0xf5a623, suit: 0x2456a8 },
  { id: 'ski-birch', type: 'ski', name: 'Birch Classics', deck: 0x6b4527, accent: 0xd6452f, suit: 0x3f6048 },
  { id: 'ski-neon', type: 'ski', name: 'Neon Slalom', deck: 0x2fc45c, accent: 0x14171d, suit: 0x22242a },
  // --- snowboards ---
  { id: 'board-midnight', type: 'board', name: 'Midnight Deck', deck: 0x1c1f2c, accent: 0x38bdf8, suit: 0x303648 },
  { id: 'board-sunset', type: 'board', name: 'Sunset Camber', deck: 0xe87f22, accent: 0xc03028, suit: 0x8a3458 },
  { id: 'board-split', type: 'board', name: 'Splitboard 9000', deck: 0x8a48c8, accent: 0x2bd9c8, suit: 0x503a80 },
  { id: 'board-mallow', type: 'board', name: 'Marshmallow', deck: 0xe0407e, accent: 0x1b1e26, suit: 0x384a94 },
  // --- sleds ---
  { id: 'sled-steel', type: 'sled', name: 'Steel Toboggan', deck: 0x46525f, accent: 0xe87f22, suit: 0x50607a },
  { id: 'sled-luge', type: 'sled', name: 'Rocket Luge', deck: 0xc03028, accent: 0xf5a623, suit: 0x8c2028 },
  { id: 'sled-wood', type: 'sled', name: 'Classic Wood Sled', deck: 0x8a5c30, accent: 0x3c2814, suit: 0x7a2438 },
  { id: 'sled-saucer', type: 'sled', name: 'Ice Saucer', deck: 0x1f7fa0, accent: 0xf5a623, suit: 0x28657a },
];

export function equipmentById(id) {
  return EQUIPMENT.find((e) => e.id === id) || EQUIPMENT[0];
}

export const TYPE_LABEL = { ski: 'Skis', board: 'Snowboard', sled: 'Sled' };
