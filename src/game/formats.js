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

/**
 * Race-time points for the combined format, by finishing position: 5000
 * for the win down to 1000 for last, plus 500 a second for every second
 * clear of the next rider across the line (nothing extra for last place).
 * A tenth either way is a photo finish, not a swing in the standings; a
 * rider who cleared the field by three seconds is paid for it.
 * @param times finish times in seconds, one per rider
 * @returns points in the same order
 */
export function timePointsFor(times) {
  const order = times.map((t, i) => ({ t, i })).sort((a, b) => a.t - b.t);
  const pts = new Array(times.length).fill(0);
  order.forEach((r, pos) => {
    const base = Math.max(1, 6 - (pos + 1)) * 1000;
    const next = order[pos + 1];
    const lead = next && pos < 4 ? Math.max(0, next.t - r.t) : 0;
    // the lead bonus stops just short of a placing, so a big gap can never
    // lift a rider over the one who beat them across the line
    pts[r.i] = base + Math.min(999, Math.round(lead * 500));
  });
  return pts;
}

// what a judged run the player never scored on still posts for the riders
// drawn ahead: a step per placing, so only the back of the sheet reads zero
const ZERO_STEP = { bigair: 260, halfpipe: 420 };

/** m:ss.xx for the posted sheet. */
export function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

/**
 * A bot's trick tally as the run unfolds, dealt around the player's own.
 * Bots never score a trick until the player has: if the player ends on
 * zero, every bot on the hill ends on zero too, and the sheet is ordered by
 * the draw alone — the result stays deterministic. (The solo judged
 * formats post the riders drawn ahead a run of their own at settlement.)
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
  // every rider's time first: the position-based time points need the
  // whole field across the line
  const times = bots.map((b) => {
    const k = playerPos - b.rank; // + = finishes ahead of the player
    if (b.time != null) return b.time;
    // posted run: a rank's worth of seconds each way, jitter under half a
    // step so the order can never cross
    const step = 1.4 + rng() * 1.2;
    return Math.max(5, playerTime - k * step + (rng() - 0.5) * 0.6 * step);
  });
  // in the time formats the clock must agree with the draw: riders still
  // on course when the player crossed have their finish projected at their
  // current pace, and two projections can land a hair out of order — walk
  // the field away from the player in both directions, keeping every rider
  // a beat behind the one drawn ahead. (The combined ranks on the total,
  // and its line order is deliberately not the sheet order.)
  if (scored !== 'both') {
    const byRank = bots.map((b, i) => ({ rank: b.rank, i })).sort((a, b) => a.rank - b.rank);
    let prev = playerTime;
    for (const r of byRank.filter((r) => r.rank > playerPos)) {
      times[r.i] = Math.max(times[r.i], prev + 0.12);
      prev = times[r.i];
    }
    let next = playerTime;
    for (const r of byRank.filter((r) => r.rank < playerPos).reverse()) {
      times[r.i] = Math.max(5, Math.min(times[r.i], next - 0.12));
      next = times[r.i];
    }
  }
  const timePts = scored === 'both' ? timePointsFor([playerTime, ...times]) : [playerTime, ...times].map(() => 0);
  const pTime = timePts[0];
  const pTotal = scored === 'style' ? playerStyle : scored === 'both' ? pTime + playerStyle : pTime;
  const gap = Math.max(35, 0.1 * pTotal);
  const zeroStep = ZERO_STEP[format.id] ?? 0;
  const rows = bots.map((b, i) => {
    const k = playerPos - b.rank;
    const time = times[i];
    const bTime = timePts[i + 1];
    let style = 0;
    if (playerStyle > 0 && scored === 'both') {
      // a trick tally in the player's league, a shade better for the riders
      // drawn ahead; the time points carry the order, the pass below makes
      // sure of it
      style = Math.max(0, Math.round(playerStyle * (1 + 0.1 * k) + (rng() - 0.5) * 0.16 * playerStyle));
    } else if (playerStyle > 0 && scored === 'style') {
      const jitter = (rng() - 0.5) * 0.5 * gap;
      style = Math.max(0, Math.round(pTotal + k * gap + jitter));
    } else if (scored === 'style' && k > 0 && zeroStep) {
      // the player never scored: the riders drawn ahead still post a run,
      // stepping up from the zero line, so only the back of the field is
      // blank — the draw decides who those riders are
      style = Math.round(k * zeroStep + (rng() - 0.5) * 0.5 * zeroStep);
    }
    const total = scored === 'style' ? style : scored === 'both' ? bTime + style : bTime;
    return { rank: b.rank, time, timePts: bTime, style, total };
  });
  if (scored === 'both') {
    // the combined sheet must rank in the drawn order, and the line order
    // need not match it: a rider drawn ahead of another may have crossed
    // well behind them, so style has to carry the difference. Behind the
    // player: raise from the back so each rider beats the one drawn behind
    // (style is unbounded above), then cap from the player down so nobody
    // reaches the player's total (style never below zero). Ahead of the
    // player: lift each rider clear of the one drawn behind.
    const step = Math.max(20, Math.round(0.03 * pTotal));
    const ranked = [...rows].sort((a, b) => a.rank - b.rank);
    const behind = ranked.filter((r) => r.rank > playerPos);
    for (let i = behind.length - 2; i >= 0; i--) {
      const need = behind[i + 1].total + step;
      if (behind[i].total < need) {
        behind[i].style = need - behind[i].timePts;
        behind[i].total = need;
      }
    }
    let ceiling = pTotal;
    for (const r of behind) {
      if (r.total > ceiling - step) {
        r.style = Math.max(0, ceiling - step - r.timePts);
        r.total = r.timePts + r.style;
      }
      ceiling = r.total;
    }
    let floor = pTotal;
    for (const r of ranked.filter((r) => r.rank < playerPos).reverse()) {
      if (r.total < floor + step) {
        r.style = floor + step - r.timePts;
        r.total = r.timePts + r.style;
      }
      floor = r.total;
    }
  }
  return { player: { time: playerTime, timePts: pTime, style: playerStyle, total: pTotal }, bots: rows };
}
