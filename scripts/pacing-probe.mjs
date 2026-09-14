// Pacing probe: a full race against a GHOST player on a scripted pace
// (steady cruise, a slow patch, a dead stop, then a sprint), stepped fast,
// sampling where every bot sits relative to the player, how each sheds or
// makes time (planned falls on obstacles, wash-outs), how far its line
// moves between samples, and whether the field crosses in its drawn order.
// FORMAT=combined also exercises the crossing shuffle and the settled sheet;
// STYLE=n gives the ghost that much banked style by mid-race.
import { chromium } from 'playwright';
import { preview } from 'vite';
const port = 4341;
const format = process.env.FORMAT || 'race';
const style = Number(process.env.STYLE || 0);
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto(`http://localhost:${port}/?event=utah&format=${format}`);
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
const setup = await page.evaluate(() => {
  const r = window.__fp.race;
  return { playerPos: r.outcome.playerPos, playerCross: r.playerCross, bots: r.bots.map((b) => ({ n: b.identity.name, overall: b.overall, cross: b.rank, script: b.script, vNat: +b.vNat.toFixed(1) })) };
});
console.log('draw:', JSON.stringify(setup));

// the ghost: rides the centre line on a pace script, and the race steps
// eight fixed ticks per frame so a whole run takes a minute
await page.evaluate((style) => {
  const r = window.__fp.race;
  const P = r.player;
  const t = r.terrain;
  const L = t.length;
  P.update = (dt) => {
    if (P.finished) return;
    const s = P.progress;
    let want = 25;
    if (s > 560 && s < 720) want = 9; // a slow, cautious stretch
    if (s > 1150 && s < 1160) want = 0.2; // parks briefly
    if (s > 1160 && s < 1400) want = 31; // sprints away
    P.speed += (want - P.speed) * Math.min(1, dt * (want < P.speed ? 3 : 1.2));
    if (want < 1 && P.speed < 1.5) { P._parkT = (P._parkT || 0) + dt; if (P._parkT < 4) P.speed = 0; else P.speed = 6; }
    const ns = s + P.speed * dt;
    const x = t.centerAt(ns);
    P.pos.set(x, t.groundAt(x, -ns), -ns);
    P.airborne = false;
    if (style && ns > L * 0.5) P.style = style;
    P._sync(dt);
  };
  const orig = r.update.bind(r);
  r.update = () => { for (let i = 0; i < 8; i++) orig(0.05); };
}, style);

const samples = [];
const events = [];
let lastX = {};
let lastPlan = {};
const t0 = Date.now();
while (Date.now() - t0 < 400000) {
  await page.waitForTimeout(250);
  const s = await page.evaluate(() => {
    const r = window.__fp.race;
    return {
      t: +(r.time - r.goTime).toFixed(1),
      pd: Math.round(r.player.progress), pv: +r.player.speed.toFixed(1), style: r.player.style,
      done: !!document.querySelector('#results'),
      // x is measured as the offset from the rider's own racing line, so a
      // jump means a cut across the hill, not the line following the course
      bots: r.bots.map((b) => ({ n: b.identity.name, rel: Math.round(b.d - r.player.progress), v: +b.speed.toFixed(1), x: +(b.obj.position.x - b.lineAt(b.d)).toFixed(1), down: b.stumbleT > 0, plan: b.plan ? { s: Math.round(b.plan.s), kind: b.plan.kind, hit: b.plan.hit, dev: +(b.plan.x - b.lineAt(b.plan.s)).toFixed(1) } : null, fin: b.finished, cross: b.rank })),
    };
  });
  if (samples.length && s.t - samples[samples.length - 1].t < 0.9) continue;
  samples.push(s);
  for (const b of s.bots) {
    const key = b.n;
    if (b.plan && (!lastPlan[key] || lastPlan[key] !== b.plan.s)) events.push(`t${s.t} ${b.n} lines up a ${b.plan.kind} at ${b.plan.s}m (line change ${b.plan.dev} m)`);
    lastPlan[key] = b.plan ? b.plan.s : null;
    if (lastX[key] != null && Math.abs(b.x - lastX[key]) > 6 && !b.fin) events.push(`t${s.t} ${b.n} LATERAL JUMP ${(b.x - lastX[key]).toFixed(1)} m off its line in one sample`);
    lastX[key] = b.x;
  }
  if (s.done) break;
}
for (const s of samples.filter((_, i) => i % 3 === 0)) {
  console.log(`t=${s.t}s pd=${s.pd} pv=${s.pv} | ` + s.bots.map((b) => `${b.n.slice(0, 6)}:${b.rel > 0 ? '+' : ''}${b.rel}${b.down ? '*' : ''}${b.plan && !b.plan.hit ? '>' : ''}`).join(' '));
}
console.log('events:\n  ' + events.join('\n  '));
const downSamples = samples.reduce((n, s) => n + s.bots.filter((b) => b.down).length, 0);
console.log('bot down-samples:', downSamples, 'of', samples.length * 4);
await page.waitForSelector('#results', { timeout: 60000 });
const res = await page.evaluate(() => {
  const r = window.__fp.race;
  return {
    crossing: r.finishOrder.map((f) => f.name),
    playerCross: r.playerCross,
    bots: r.bots.map((b) => ({ n: b.identity.name, overall: b.overall, cross: b.rank, style: b.style })),
    rows: [...document.querySelectorAll('.standings li')].map((li) => li.textContent.replace(/\s+/g, ' ').trim()),
    bigPos: document.querySelector('.big-pos')?.textContent,
  };
});
console.log('crossing:', JSON.stringify(res.crossing), 'player crossed', res.crossing.indexOf('You') + 1, 'planned', res.playerCross, 'drawn overall', setup.playerPos);
console.log('bots:', JSON.stringify(res.bots));
console.log('sheet:', res.rows.join(' | '));
const totals = res.rows.map((r) => Number((r.match(/([\d,]+) ×|([\d,]+)$/) || [])[1]?.replace(/,/g, '') ?? NaN));
const ok = res.crossing.indexOf('You') + 1 === res.playerCross && res.bigPos.startsWith(String(setup.playerPos));
console.log(ok ? 'PACING OK' : 'PACING MISMATCH');
await browser.close(); await server.close(); process.exit(ok ? 0 : 1);
