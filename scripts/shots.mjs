// Grabs gameplay screenshots at interesting points on the mountain.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4176, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

await page.goto('http://localhost:4176/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, { timeout: 20000 });
await page.click('#start-btn');
await page.waitForFunction(() => !!window.__fp, { timeout: 5000 });
await page.waitForTimeout(5500);
await page.keyboard.down('w');
await page.waitForTimeout(3000);

for (const [label, s] of [['mid', 700], ['jump', null], ['finish', 1740]]) {
  const target = await page.evaluate((want) => {
    const r = window.__fp.race;
    const s = want ?? r.terrain.jumps[2]?.s - 40 ?? 500;
    const x = r.terrain.centerAt(s);
    r.player.pos.set(x, r.terrain.heightAt(x, -s), -s);
    r.player.speed = 24;
    return s;
  }, s);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `scratch-${label}.png` });
  console.log(`shot ${label} at s=${target}`);
}
await browser.close();
await server.close();
process.exit(0);
