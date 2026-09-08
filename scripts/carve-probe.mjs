// Drives the player through carve / release / brake phases and samples the
// steering state, to verify the edge-resistance model: carving = small slip
// with the tip leading, braking = big slip slide, plus the edge load lag.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4182, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 500, height: 400 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4182/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.click('#start-btn');
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

// get up to speed on open snow, wait for solid ground contact
const settle = () => page.evaluate(() => {
  const r = window.__fp.race;
  const s = 420;
  r.player.pos.set(r.terrain.centerAt(s), r.terrain.heightAt(r.terrain.centerAt(s), -s), -s);
  r.player.speed = 24;
  r.player.airborne = false;
  r.player.vy = 0;
});
await settle();
await page.waitForFunction(() => !window.__fp.race.player.airborne, undefined, { timeout: 30000 });

const sample = () => page.evaluate(() => {
  const p = window.__fp.race.player;
  return {
    t: +p.t.toFixed(2), yaw: +p.yaw.toFixed(3), travel: +p.travelYaw.toFixed(3),
    slip: +p.slip.toFixed(3), edge: +p.edge.toFixed(3),
    spd: +p.speed.toFixed(1), air: p.airborne,
  };
});
// wait for a given amount of GAME time (headless wall time runs much slower)
const gameWait = async (sec) => {
  const t0 = (await sample()).t;
  await page.waitForFunction(
    (tEnd) => window.__fp.race.player.t >= tEnd, t0 + sec, { timeout: 120000 }
  );
};

await page.keyboard.down('d');
for (const label of ['carve+0.4s', 'carve+1.0s', 'carve+2.0s']) {
  await gameWait(label === 'carve+0.4s' ? 0.4 : label === 'carve+1.0s' ? 0.6 : 1.0);
  console.log(label, JSON.stringify(await sample()));
}
await page.keyboard.up('d');
await gameWait(1.2);
console.log('released+1.2s', JSON.stringify(await sample()));
await settle();
await page.keyboard.down('s');
await page.keyboard.down('a');
await gameWait(0.9);
console.log('brake+0.9s', JSON.stringify(await sample()));
await browser.close();
await server.close();
process.exit(0);
