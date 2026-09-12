// Race formats: what tonight's event is scored on, rolled alongside the
// venue. The finishing draw (rtp.js) stays the single source of truth for
// the result and the payout — a format only changes which numbers the
// riders appear to be ranked on, and the bots' numbers are dealt so that
// those numbers rank in the drawn order.
//
//   race      first across the line, full course, everyone on the hill
//   combined  race time points plus style points, everyone on the hill
//   glade     a short race threaded through a forested run — solo, the
//             others' times posted at the end
//   bigair    one kicker, judged on style alone — solo, posted at the end
//   halfpipe  a pipe with room for five or six hits, style — solo, posted
//
// All five are equally likely.

export const FORMATS = [
  { id: 'race', name: 'Downhill Race', short: 'RACE', p: 0.2, scored: 'time', length: 1800, tag: 'First to the line. The full mountain.' },
  { id: 'combined', name: 'Combined', short: 'COMBINED', p: 0.2, scored: 'both', length: 1800, tag: 'Race time plus style points — both count.' },
  { id: 'glade', name: 'Glade Sprint', short: 'GLADE', p: 0.2, scored: 'time', length: 950, solo: true, tag: 'Short and fast through the trees. Solo runs, times posted at the end.' },
  { id: 'bigair', name: 'Big Air', short: 'BIG AIR', p: 0.2, scored: 'style', length: 420, solo: true, tag: 'One kicker. Judged on style alone, scores posted at the end.' },
  { id: 'halfpipe', name: 'Halfpipe', short: 'PIPE', p: 0.2, scored: 'style', length: 575, solo: true, tag: 'Five or six hits, all style. Scores posted at the end.' },
];

export function formatById(id) {
  return FORMATS.find((f) => f.id === id) ?? null;
}

/** Weighted roll of tonight's format. */
export function rollFormat(r = Math.random()) {
  let acc = 0;
  for (const f of FORMATS) {
    acc += f.p;
    if (r < acc) return f;
  }
  return FORMATS[0];
}

/** Race-time points for the combined format: faster is more, floored at 0. */
export function timePoints(seconds) {
  return Math.max(0, Math.round(3000 - 15 * seconds));
}

/** m:ss.xx for the posted sheet. */
export function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

/**
 * A bot's trick tally as the run unfolds, dealt around the player's own.
 * Bots never score a trick until the player has: if the player ends on
 * zero, every bot ends on zero too, and the judges' sheet is ordered by
 * the draw alone — the result stays deterministic.
 * @param rankGap playerPos - botRank: positive when the bot finishes ahead
 */
export function liveBotStyle(playerStyle, rankGap, prog) {
  if (playerStyle <= 0) return 0;
  const ramp = 0.35 + 0.65 * Math.min(1, Math.max(0, prog));
  return Math.max(0, Math.round(playerStyle * ramp * (1 + 0.12 * rankGap) - (rankGap < 0 ? 10 : 0)));
}

/**
 * Final numbers. The player's are real; each bot's are dealt so the
 * format's totals rank exactly in the drawn order, with a small seeded
 * spread so the sheet reads as judged rather than computed. A bot with no
 * finish time (a solo format — it never ran alongside) gets one posted
 * around the player's, faster if it finishes ahead, slower if behind.
 * @param bots [{ rank, time }] finish times on the race clock, or null
 */
export function settleScores(format, { playerPos, playerStyle, playerTime, bots, rng }) {
  const scored = format.scored;
  const pTime = timePoints(playerTime);
  const pTotal = scored === 'style' ? playerStyle : scored === 'both' ? pTime + playerStyle : pTime;
  const gap = Math.max(35, 0.1 * pTotal);
  const rows = bots.map((b) => {
    const k = playerPos - b.rank; // + = finishes ahead of the player
    let time = b.time;
    if (time == null) {
      // posted run: a rank's worth of seconds each way, jitter under half a
      // step so the order can never cross
      const step = 1.4 + rng() * 1.2;
      time = Math.max(5, playerTime - k * step + (rng() - 0.5) * 0.6 * step);
    }
    const bTime = timePoints(time);
    let style = 0;
    if (playerStyle > 0 && scored !== 'time') {
      const jitter = (rng() - 0.5) * 0.5 * gap;
      const target = pTotal + k * gap + jitter;
      style = Math.max(0, Math.round(scored === 'both' ? target - bTime : target));
    }
    const total = scored === 'style' ? style : scored === 'both' ? bTime + style : bTime;
    return { rank: b.rank, time, timePts: bTime, style, total };
  });
  return { player: { time: playerTime, timePts: pTime, style: playerStyle, total: pTotal }, bots: rows };
}
