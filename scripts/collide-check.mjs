// Verifies rider collisions: faster bot flattens the player, faster player
// flattens the bot, and the race still completes with the drawn outcome.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: Number(process.env.PORT || 4179), strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
const fail = (m) => { console.error('COLLIDE FAILED:', m); process.exit(1); };

await page.goto(`http://localhost:${process.env.PORT || 4179}/?format=race`);

// need a draw with at least one destined-ahead bot (playerPos > 1) — only
// those can physically reach the player (behind-bots are clamped 4 m back)
let tries = 0;
for (;;) {
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.click('#start-btn');
  await page.waitForFunction(() => !!window.__fp?.race, undefined, { timeout: 10000 });
  const pos = await page.evaluate(() => window.__fp.race.outcome.playerPos);
  if (pos > 1) break;
  if (++tries > 6) fail('never drew playerPos > 1');
  console.log('drew 1st — redrawing for an ahead bot');
  await page.reload();
}
await page.waitForFunction(() => window.__fp.race.stateName === 'racing', undefined, { timeout: 120000 });
await page.keyboard.down('w');
await page.waitForTimeout(2500);

// place a destined-ahead bot right on the player's line, with speeds set in
// the SAME evaluate — the pair separates within a frame or two otherwise
const putBotOnPlayer = (mode) => page.evaluate((m) => {
  const race = window.__fp.race;
  const bot = race.bots.find((b) => b.ahead);
  bot.d = -race.player.pos.z;
  // put the PLAYER exactly where the bot will RENDER: its gate lane blended
  // onto its line over the first 85 m (same math as Bot.update)
  let u = Math.min(1, Math.max(0, (bot.d - 6) / 79));
  u = u * u * (3 - 2 * u);
  race.player.pos.x = bot.lane.x + (bot.lineAt(bot.d) - bot.lane.x) * u;
  bot._pushX = 0;
  bot._aggroBlend = 0;
  bot._collideCd = 0;
  if (m === 'botFast') bot.speed = race.player.speed + 14;
  else {
    bot.speed = 2;
    race.player.speed = Math.max(race.player.speed, 18);
  }
  return race.bots.indexOf(bot);
}, mode);

// 1. faster bot hits player -> player goes down
let botIdx = await putBotOnPlayer('botFast');
await page.waitForTimeout(700);
let r = await page.evaluate(() => ({
  knockT: window.__fp.race.player.knockT,
  knocks: window.__fp.race.playerKnocks,
}));
console.log('player after fast-bot hit:', JSON.stringify(r));
if (!(r.knockT > 0) || r.knocks !== 1) fail('player was not knocked down');

// wait out knockdown + collision cooldown
await page.waitForTimeout(5000);

// 2. faster player hits bot -> bot goes down
botIdx = await putBotOnPlayer('playerFast');
await page.waitForTimeout(700);
r = await page.evaluate((i) => ({ botKnockT: window.__fp.race.bots[i].knockT }), botIdx);
console.log('bot after fast-player hit:', JSON.stringify(r));
if (!(r.botKnockT > 0)) fail('bot was not knocked down');

// 3. race still resolves to the drawn outcome
const outcome = await page.evaluate(() => window.__fp.race.outcome);
await page.evaluate(() => {
  const race = window.__fp.race;
  const z = -(1800 - 140);
  race.player.pos.set(race.terrain.centerAt(1660), race.terrain.heightAt(race.terrain.centerAt(1660), z), z);
});
await page.waitForSelector('#results', { timeout: 120000 });
const shown = await page.evaluate(() => document.querySelector('.big-pos')?.textContent);
console.log(`drawn ${outcome.playerPos}, shown ${shown}`);
if (!shown.startsWith(String(outcome.playerPos))) fail('outcome mismatch after collisions');

if (errors.length) fail('console errors:\n' + errors.join('\n'));
console.log('COLLIDE OK');
await browser.close();
await server.close();
process.exit(0);
