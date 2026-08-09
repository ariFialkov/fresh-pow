// Samples the live rank while tucked to verify mid-race position volatility.
// Reloads until the draw puts the player 1st or 2nd — the case where the old
// clamp made the race a procession.
import { chromium } from 'playwright';
import { preview } from 'vite';
const port = Number(process.env.PORT || 4189);
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
await page.goto(`http://localhost:${port}/`);
for (let tries = 0; ; tries++) {
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.click('#start-btn');
  await page.waitForFunction(() => !!window.__fp?.race, undefined, { timeout: 10000 });
  const pos = await page.evaluate(() => window.__fp.race.outcome.playerPos);
  if (pos <= 2) break;
  if (tries > 8) { console.error('no low draw'); process.exit(1); }
  console.log(`drew ${pos}, reloading`);
  await page.reload();
}
await page.waitForFunction(() => window.__fp.race.stateName === 'racing', undefined, { timeout: 180000 });
await page.keyboard.down('w');
const seen = [];
let changes = 0;
for (let i = 0; i < 95; i++) {
  await page.waitForTimeout(2000);
  const r = await page.evaluate(() => {
    const race = window.__fp.race;
    const live = [
      { me: true, d: race.player.progress },
      ...race.bots.map((b) => ({ me: false, d: b.d })),
    ].sort((a, b) => b.d - a.d);
    return { rank: live.findIndex((x) => x.me) + 1, prog: race.player.progress / 1800, drawn: race.outcome.playerPos };
  });
  if (seen.length && seen[seen.length - 1].rank !== r.rank) changes++;
  seen.push(r);
  if (r.prog > 0.75) break;
}
const ranks = seen.map((s) => s.rank);
console.log('drawn position:', seen[0].drawn);
console.log('rank timeline:', ranks.join(''));
console.log('lead changes seen:', changes, '| distinct ranks:', new Set(ranks).size);
process.exit(changes >= 3 && new Set(ranks).size >= 2 ? 0 : 1);
