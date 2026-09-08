// Brakes on a cross-slope and reports which edge/side the rider checks to.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4185, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 700, height: 500 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4185/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.click('#start-btn');
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
for (const off of [28, -28]) {
  await page.evaluate((o) => {
    const r = window.__fp.race, s = 430;
    const x = r.terrain.centerAt(s) + o;
    r.player.pos.set(x, r.terrain.heightAt(x, -s), -s);
    r.player.speed = 16; r.player.airborne = false; r.player.vy = 0; r.player.yaw = 0; r.player.travelYaw = 0;
  }, off);
  await page.keyboard.down('s');
  const t0 = await page.evaluate(() => window.__fp.race.player.t);
  await page.waitForFunction((te) => window.__fp.race.player.t >= te, t0 + 0.5, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const p = window.__fp.race.player;
    return {
      upLat: +p.rider._s.upLat.toFixed(2),
      brakeSide: p.rider._brakeSide,
      rigRoll: +p.rider.rig.rotation.z.toFixed(2),
      gearRoll: +p.rider.gearGroup.rotation.z.toFixed(2),
    };
  });
  console.log(`offset ${off} (uphill ${off > 0 ? 'right' : 'left'}):`, JSON.stringify(r));
  await page.keyboard.up('s');
  const t1 = await page.evaluate(() => window.__fp.race.player.t);
  await page.waitForFunction((te) => window.__fp.race.player.t >= te, t1 + 0.6, { timeout: 60000 });
}
await browser.close(); await server.close(); process.exit(0);
