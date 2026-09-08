// Close-ups of the powder spray during a hard carve and a brake roost.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4184, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4184/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.click('#start-btn');
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

// pin a close side camera on the player
await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = (dt) => {
    orig(dt);
    const p = r.player.pos;
    r.camera.position.set(p.x + 3.4, p.y + 1.7, p.z + 1.2);
    r.camera.lookAt(p.x, p.y + 0.5, p.z - 1.5);
  };
});

const gameWait = async (sec) => {
  const t0 = await page.evaluate(() => window.__fp.race.player.t);
  await page.waitForFunction((tEnd) => window.__fp.race.player.t >= tEnd, t0 + sec, { timeout: 120000 });
};
// clear snow, away from the bots, at speed
const settle = (s) => page.evaluate((s0) => {
  const r = window.__fp.race;
  r.player.pos.set(r.terrain.centerAt(s0), r.terrain.heightAt(r.terrain.centerAt(s0), -s0), -s0);
  r.player.speed = 20;
  r.player.airborne = false;
  r.player.knockT = 0;
  r.player.stumbleT = 0;
  r.player.vy = 0;
}, s);

await settle(400);
await page.keyboard.down('d');
await gameWait(0.9);
await page.screenshot({ path: 'scratch-spray-carve.png' });
console.log('shot spray-carve');
await page.keyboard.up('d');

await settle(480);
await page.keyboard.down('s');
await page.keyboard.down('a');
await gameWait(0.3);
await page.screenshot({ path: 'scratch-spray-brake.png' });
console.log('shot spray-brake');
await browser.close();
await server.close();
process.exit(0);
