// The math heart of Fresh Pow.
//
// The race LOOKS like a skill game, but the finishing position of the player is
// drawn from this paytable BEFORE the countdown ends. Bots then pace themselves
// around the player so that the drawn order is what crosses the line, no matter
// how the player rides. Expected return = sum(p * mult) = 0.96 (96% RTP).

export const RTP = 0.96;

export const PAYTABLE = [
  { pos: 1, p: 0.15, mult: 3.2 },
  { pos: 2, p: 0.2, mult: 1.4 },
  { pos: 3, p: 0.2, mult: 0.7 },
  { pos: 4, p: 0.2, mult: 0.3 },
  { pos: 5, p: 0.25, mult: 0.0 },
];

// sanity: keep the table honest if it's ever edited
const ev = PAYTABLE.reduce((s, r) => s + r.p * r.mult, 0);
if (Math.abs(ev - RTP) > 1e-9) {
  throw new Error(`Fresh Pow paytable EV ${ev} does not match RTP ${RTP}`);
}

export function multiplierFor(pos) {
  return PAYTABLE.find((r) => r.pos === pos).mult;
}

/**
 * Draw the player's finishing position (1..5) from the paytable and deal the
 * remaining positions to the 4 bots.
 * @param {() => number} rng seeded PRNG
 * @param {number} bet chips wagered
 */
export function drawOutcome(rng, bet) {
  let roll = rng();
  let playerPos = PAYTABLE[PAYTABLE.length - 1].pos;
  for (const row of PAYTABLE) {
    if (roll < row.p) {
      playerPos = row.pos;
      break;
    }
    roll -= row.p;
  }

  // deal remaining positions to bots in random order
  const rest = PAYTABLE.map((r) => r.pos).filter((p) => p !== playerPos);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }

  return {
    playerPos,
    botPositions: rest, // botPositions[i] = finishing position of bot i
    bet,
    payout: Math.round(bet * multiplierFor(playerPos) * 100) / 100,
  };
}
