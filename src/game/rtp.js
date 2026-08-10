// The math heart of Fresh Pow.
//
// Every race is held as an EVENT at a themed venue, and each event carries its
// own paytable — bigger events pay bigger top prizes at longer odds. Every
// table satisfies sum(p * mult) = 0.96 exactly, so the game's RTP is identical
// no matter which event the roller lands on. The player's finishing position
// is drawn from the event's table BEFORE the countdown ends; bots then pace
// themselves so that the drawn order is what crosses the line.

export const RTP = 0.96;

const T = (rows) => rows.map(([pos, p, mult]) => ({ pos, p, mult }));

// Ordered low hype -> maximum hype. Venues are invented; regions are real.
export const EVENTS = [
  {
    id: 'vermont', theme: 'vermont', flag: '🍁',
    name: 'Maple Ridge Classic', place: 'Stowe Valley, Vermont',
    tag: 'Hometown corduroy under the hardwoods',
    table: T([[1, 0.2, 2.0], [2, 0.2, 1.4], [3, 0.2, 0.8], [4, 0.2, 0.5], [5, 0.2, 0.1]]),
  },
  {
    id: 'quebec', theme: 'quebec', flag: '⚜️',
    name: 'Coupe Cap Boréal', place: 'Laurentides, Québec',
    tag: 'Boreal spruce and boilerplate ice',
    table: T([[1, 0.2, 2.5], [2, 0.2, 1.3], [3, 0.2, 0.6], [4, 0.2, 0.35], [5, 0.2, 0.05]]),
  },
  {
    id: 'colorado', theme: 'colorado', flag: '🏔️',
    name: 'Ironpeak Open', place: 'Roaring Fork, Colorado',
    tag: 'High-altitude bluebird racing',
    table: T([[1, 0.15, 3.2], [2, 0.2, 1.4], [3, 0.2, 0.7], [4, 0.2, 0.3], [5, 0.25, 0]]),
  },
  {
    id: 'utah', theme: 'utah', flag: '🎿',
    name: 'Powder Crown Invitational', place: 'Little Cloud Canyon, Utah',
    tag: 'The greatest snow on earth, allegedly',
    table: T([[1, 0.12, 4.0], [2, 0.18, 1.5], [3, 0.2, 0.75], [4, 0.2, 0.3], [5, 0.3, 0]]),
  },
  {
    id: 'bc', theme: 'bc', flag: '🌲',
    name: 'Ravenspire Backcountry Cup', place: 'Coast Range, British Columbia',
    tag: 'Cedar giants and coastal mist',
    table: T([[1, 0.1, 5.0], [2, 0.15, 1.6], [3, 0.2, 0.85], [4, 0.25, 0.2], [5, 0.3, 0]]),
  },
  {
    id: 'chile', theme: 'chile', flag: '🌋',
    name: 'Volcán Blanco Grand Prix', place: 'Andes Centrales, Chile',
    tag: 'Treeless, ruthless, above the clouds',
    table: T([[1, 0.08, 6.5], [2, 0.15, 1.6], [3, 0.2, 0.65], [4, 0.25, 0.28], [5, 0.32, 0]]),
  },
  {
    id: 'nz', theme: 'nz', flag: '🥝',
    name: 'Black Range Masters', place: 'Southern Alps, New Zealand',
    tag: 'Tussock, schist and southern speed',
    table: T([[1, 0.06, 8.4], [2, 0.14, 1.8], [3, 0.2, 0.75], [4, 0.27, 0.2], [5, 0.33, 0]]),
  },
  {
    id: 'swiss', theme: 'swiss', flag: '🇨🇭',
    name: 'Silberhorn Super-G', place: 'Wallis, Switzerland',
    tag: 'Glacier ice and world-tour prestige',
    table: T([[1, 0.05, 10.0], [2, 0.12, 2.0], [3, 0.2, 0.82], [4, 0.28, 0.2], [5, 0.35, 0]]),
  },
  {
    id: 'japan', theme: 'japan', flag: '🏮',
    name: 'Yukiakari Night Session', place: 'Hokkaidō, Japan',
    tag: 'Midnight powder under the lanterns — the big one',
    table: T([[1, 0.04, 12.0], [2, 0.1, 2.4], [3, 0.18, 1.0], [4, 0.3, 0.2], [5, 0.38, 0]]),
  },
];

// sanity: every event must pay exactly the game RTP and its odds must sum to 1
for (const ev of EVENTS) {
  const rtp = ev.table.reduce((s, r) => s + r.p * r.mult, 0);
  const psum = ev.table.reduce((s, r) => s + r.p, 0);
  if (Math.abs(rtp - RTP) > 1e-9 || Math.abs(psum - 1) > 1e-9) {
    throw new Error(`Fresh Pow event ${ev.id}: RTP ${rtp} / psum ${psum} out of spec`);
  }
}

export function topPrize(ev) {
  return ev.table[0].mult;
}

export function multiplierFor(pos, table) {
  return table.find((r) => r.pos === pos).mult;
}

/**
 * Draw the player's finishing position (1..5) from an event's paytable and
 * deal the remaining positions to the 4 bots.
 */
export function drawOutcome(rng, bet, table) {
  let roll = rng();
  let playerPos = table[table.length - 1].pos;
  for (const row of table) {
    if (roll < row.p) {
      playerPos = row.pos;
      break;
    }
    roll -= row.p;
  }

  const rest = table.map((r) => r.pos).filter((p) => p !== playerPos);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }

  return {
    playerPos,
    botPositions: rest,
    bet,
    payout: Math.round(bet * multiplierFor(playerPos, table) * 100) / 100,
  };
}
