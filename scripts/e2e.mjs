// End-to-end determinism check: run a race in the built app, teleport the
// player near the line (to keep headless runtime sane), and assert that the
// finishing order + payout match the outcome drawn from the paytable.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4175, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

const fail = (msg) => { console.error('E2E FAILED:', msg); process.exit(1); };

await page.goto('http://localhost:4175/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, { timeout: 20000 });

const balanceBefore = await page.evaluate(() => JSON.parse(localStorage.getItem('freshpow_save_v1'))?.balance ?? 1000);
await page.click('#start-btn');
await page.waitForFunction(() => !!window.__fp, { timeout: 5000 });

const outcome = await page.evaluate(() => window.__fp.race.outcome);
console.log('drawn outcome:', JSON.stringify(outcome));

// let the countdown finish and the race breathe a little
await page.waitForTimeout(6000);
await page.keyboard.down('w');
await page.waitForTimeout(4000);

// teleport near the line to keep headless runtime sane (skip with FULL=1)
if (process.env.FULL !== '1') {
  await page.evaluate(() => {
    const r = window.__fp.race;
    const z = -(1800 - 160);
    r.player.pos.set(r.terrain.centerAt(1640), r.terrain.heightAt(r.terrain.centerAt(1640), z), z);
  });
}

// wait for results (finish + 1.6s panel delay)
await page.waitForSelector('#results', { timeout: process.env.FULL === '1' ? 420000 : 90000 });
await page.keyboard.up('w');

const res = await page.evaluate(() => {
  const r = window.__fp.race;
  const rankByName = Object.fromEntries(r.bots.map((b) => [b.identity.name, b.rank]));
  return {
    bigPos: document.querySelector('.big-pos')?.textContent,
    standings: [...document.querySelectorAll('.standings li')].map((li) => li.textContent.replace(/\s+/g, ' ').trim()),
    balance: JSON.parse(localStorage.getItem('freshpow_save_v1'))?.balance,
    // line-crossing order in crossing time — the ground truth for the result
    finishOrder: r.finishOrder.map((f) => ({ name: f.name, me: !!f.me, rank: f.me ? null : rankByName[f.name] })),
  };
});
console.log('results big pos:', res.bigPos);
console.log('standings:', res.standings.join(' | '));
console.log('crossing order:', JSON.stringify(res.finishOrder));
console.log(`balance: ${balanceBefore} -> ${res.balance} (bet ${outcome.bet}, payout ${outcome.payout})`);

// 1. shown position matches the draw
if (!res.bigPos.startsWith(String(outcome.playerPos))) fail(`shown ${res.bigPos} != drawn ${outcome.playerPos}`);
// 2. the player physically crossed the line in the drawn position
const crossedAhead = res.finishOrder.findIndex((r) => r.me);
if (crossedAhead + 1 !== outcome.playerPos) fail(`crossing position ${crossedAhead + 1} != drawn ${outcome.playerPos}`);
// 2b. bots that crossed ahead did so in their drawn order
const aheadRanks = res.finishOrder.slice(0, crossedAhead).map((r) => r.rank);
if (JSON.stringify(aheadRanks) !== JSON.stringify([...aheadRanks].sort((a, b) => a - b))) {
  fail(`ahead bots crossed out of drawn order: ${aheadRanks.join(',')}`);
}
// 3. wallet math
const expected = Math.round((balanceBefore - outcome.bet + outcome.payout) * 100) / 100;
if (res.balance !== expected) fail(`balance ${res.balance} != expected ${expected}`);

if (errors.length) fail('console errors:\n' + errors.join('\n'));
console.log('E2E OK');
await browser.close();
await server.close();
process.exit(0);
