// Grind rail check: brake onto the rail before the lip, ride it to the end,
// pop off over the drop. Reports grind time and the exit flight.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4203, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

for (let i = 0; i < 10; i++) {
  await page.goto('http://localhost:4203/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  const ok = await page.evaluate(() => window.__fp.race.terrain.grindLogs.length > 0 && window.__fp.race.terrain.theme.sunI > 1.2);
  if (ok) break;
  console.log('reroll: no grind log');
}
console.log('grindLogs:', await page.evaluate(() => JSON.stringify(window.__fp.race.terrain.grindLogs.map((g) => ({ s0: Math.round(g.s0), len: Math.round(g.len) })))));

await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const g = t.grindLogs[0];
  const yaw = Math.atan2(g.ax, g.az);
  const ex = g.x - g.ax * 3.5;
  const es = g.s0 - g.az * 3.5;
  const P = r.player;
  P.pos.set(ex, t.heightAt(ex, -es), -es);
  P.speed = 13.5;
  P.airborne = false;
  P.yaw = P.travelYaw = yaw;
  window.__grind = { max: 0, exitAir: false, midShot: false };
  const orig = r.update.bind(r);
  r.update = (dt) => {
    if (!(P._grindT > 0) && !P.airborne && window.__grind.max === 0) {
      P.yaw = P.travelYaw = yaw; // hold the line into the rail
    }
    orig(dt);
    window.__grind.max = Math.max(window.__grind.max, P._grindT || 0);
    if (window.__grind.max > 0 && P.airborne) window.__grind.exitAir = true;
    // side camera on the rail
    const mid = { x: g.x + g.ax * g.len * 0.5, z: -(g.s0 + g.az * g.len * 0.5) };
    r.camera.position.set(mid.x + 9, g.topY + 2.5, mid.z + 2);
    r.camera.lookAt(mid.x, g.topY, mid.z - 2);
  };
});
await page.keyboard.down('s');
await page.waitForFunction(() => window.__fp.race.player._grindT > 0.3, undefined, { timeout: 30000 }).catch(() => {});
await page.screenshot({ path: 'scratch-grind.png' });
await page.waitForTimeout(3500);
console.log('result:', await page.evaluate(() => JSON.stringify({
  maxGrind: +window.__grind.max.toFixed(2),
  exitAir: window.__grind.exitAir,
  style: Math.round(window.__fp.race.player.style),
})));
await browser.close(); await server.close(); process.exit(0);
