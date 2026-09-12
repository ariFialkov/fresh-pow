// Headless smoke test: boots the built app, waits for the lobby to fill,
// starts a race, simulates driving, and fails on any console error.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4173, strictPort: true } });
const shots = process.env.SHOTS === '1';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });

const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text());
});
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto('http://localhost:4173/?format=race');
await page.waitForSelector('#menu-ui', { timeout: 10000 });
console.log('menu mounted');

// wait for the lobby to fill and the start button to arm
await page.waitForFunction(() => {
  const b = document.querySelector('#start-btn');
  return b && !b.disabled;
}, undefined, { timeout: 120000 });
console.log('lobby full, start armed');

// cycle gear a few times (exercises all three ride builders)
for (let i = 0; i < 5; i++) await page.click('#gear-next');
await page.click('.chip'); // pick first bet chip
if (shots) await page.screenshot({ path: 'scratch-menu.png' });

await page.click('#start-btn');
await page.waitForSelector('#race-ui', { timeout: 40000 });
console.log('race scene mounted');

// countdown runs on game time, which crawls under software rendering
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 180000 });
console.log('gates open');
await page.keyboard.down('w');
await page.waitForTimeout(4000);
await page.keyboard.up('w');
await page.keyboard.down('a');
await page.waitForTimeout(800);
await page.keyboard.up('a');
await page.keyboard.down('d');
await page.waitForTimeout(800);
await page.keyboard.up('d');
await page.keyboard.down('s');
await page.waitForTimeout(1000);
await page.keyboard.up('s');
await page.keyboard.down('w');
await page.waitForTimeout(8000);
if (shots) await page.screenshot({ path: 'scratch-race.png' });

const hud = await page.evaluate(() => ({
  rank: document.querySelector('#rank-box .pos')?.textContent,
  speed: document.querySelector('#speed-box .spd')?.textContent,
  progress: document.querySelector('#progress-fill')?.style.width,
}));
console.log('HUD state:', JSON.stringify(hud));

if (Number(hud.speed) <= 0) errors.push('player never gained speed');

await browser.close();
await server.close();

if (errors.length) {
  console.error('SMOKE FAILED:\n' + errors.join('\n'));
  process.exit(1);
}
console.log('SMOKE OK');
process.exit(0);
