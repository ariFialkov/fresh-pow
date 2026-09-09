// Brakes while steering each way; verifies the input-picked brake edge:
// A (left) = heelside (lean +x, rig roll negative), D = toeside (positive).
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
for (const key of ['a', 'd']) {
  await page.evaluate(() => {
    const r = window.__fp.race, s = 430;
    const x = r.terrain.centerAt(s);
    r.player.pos.set(x, r.terrain.heightAt(x, -s), -s);
    r.player.speed = 16; r.player.airborne = false; r.player.vy = 0;
    r.player.yaw = 0; r.player.travelYaw = 0; r.player.knockT = 0; r.player.stumbleT = 0;
  });
  await page.waitForFunction(() => !window.__fp.race.player.airborne && window.__fp.race.player.speed > 6, undefined, { timeout: 60000 });
  await page.keyboard.down(key);
  const t0 = await page.evaluate(() => window.__fp.race.player.t);
  await page.waitForFunction((te) => window.__fp.race.player.t >= te, t0 + 0.3, { timeout: 60000 });
  await page.keyboard.down('s');
  await page.waitForFunction(() => {
    const p = window.__fp.race.player;
    return !p.airborne && Math.abs(p.rider.gearGroup.rotation.y) > 1.2 && p.speed > 3;
  }, undefined, { timeout: 90000 });
  const r = await page.evaluate(() => {
    const rc = window.__fp.race;
    const p = rc.player;
    p.obj.updateMatrixWorld(true);
    const g = p.rider.gearGroup;
    const V = p.pos.constructor;
    const nose = g.localToWorld(new V(0, 0.04, -0.65));
    const tail = g.localToWorld(new V(0, 0.04, 0.65));
    const gNose = rc.terrain.heightAt(nose.x, nose.z);
    const gTail = rc.terrain.heightAt(tail.x, tail.z);
    const tr = rc.playerTrail.tracks[0];
    return {
      edgeLean: p.rider._edgeLean,
      trailW: +(tr.trail.head?.w ?? 0).toFixed(3),
      baseW: tr.w,
      maxW: tr.wMax,
      gearYaw: +p.rider.gearGroup.rotation.y.toFixed(2),
      tipDy: +(nose.y - tail.y).toFixed(3),
      groundDy: +(gNose - gTail).toFixed(3),
      noseGap: +(nose.y - gNose).toFixed(3),
      tailGap: +(tail.y - gTail).toFixed(3),
    };
  });
  console.log(`brake while holding ${key.toUpperCase()}:`, JSON.stringify(r));
  await page.keyboard.up('s');
  await page.keyboard.up(key);
  const t2 = await page.evaluate(() => window.__fp.race.player.t);
  await page.waitForFunction((te) => window.__fp.race.player.t >= te, t2 + 0.6, { timeout: 60000 });
}
await browser.close(); await server.close(); process.exit(0);
