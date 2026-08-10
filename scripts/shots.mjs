// Grabs gameplay screenshots at interesting points on the mountain.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4176, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

await page.goto('http://localhost:4176/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.click('#start-btn');
await page.waitForFunction(() => !!window.__fp, { timeout: 5000 });
// countdown runs on game time, which is slower than wall time headless
await page.waitForFunction(() => window.__fp.race.stateName === 'racing', undefined, { timeout: 120000 });
await page.keyboard.down('w');
await page.waitForTimeout(3000);

// carving shot: steer hard on the ground so spray + trail are visible
await page.evaluate(() => {
  const r = window.__fp.race;
  const s = 500;
  const x = r.terrain.centerAt(s);
  r.player.pos.set(x, r.terrain.heightAt(x, -s), -s);
  r.player.speed = 26;
});
await page.keyboard.up('w');
await page.keyboard.down('d');
await page.waitForTimeout(1800);
await page.screenshot({ path: 'scratch-carve.png' });
console.log('shot carve');
await page.keyboard.up('d');
await page.keyboard.down('w');

for (const [label, s] of [['mid', 700], ['jump', null], ['bridge', 'bridge'], ['finish', 1740]]) {
  const target = await page.evaluate((want) => {
    const r = window.__fp.race;
    let s;
    if (want === 'bridge') {
      const b = r.terrain.bridges[0];
      if (!b) return null;
      s = b.s - 45;
      const x = b.gapX;
      r.player.pos.set(x, r.terrain.heightAt(x, -s), -s);
    } else {
      s = want ?? r.terrain.jumps[2]?.s - 40 ?? 500;
      const x = r.terrain.centerAt(s);
      r.player.pos.set(x, r.terrain.heightAt(x, -s), -s);
    }
    r.player.speed = 24;
    return s;
  }, s);
  if (target === null) { console.log(`skip ${label} (none on this seed)`); continue; }
  await page.waitForTimeout(label === 'bridge' ? 1400 : 2500);
  await page.screenshot({ path: `scratch-${label}.png` });
  console.log(`shot ${label} at s=${target}`);
}
await browser.close();
await server.close();
process.exit(0);
