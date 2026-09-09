// Measures the pole shaft direction (world, relative to heading) at cruise
// and in a full tuck: dz > 0 means the tip trails BACKWARD (correct).
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4187, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 500, height: 400 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4187/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => {
  const hud = window.__fp.menu.hud;
  hud.gearIndex = 0; // skis
  hud._refreshGear(true);
});
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

const sample = () => page.evaluate(() => {
  const p = window.__fp.race.player;
  p.obj.updateMatrixWorld(true);
  const V = p.pos.constructor;
  const out = [];
  for (const poleG of p.rider.parts.poles) {
    const grip = poleG.localToWorld(new V(0, 0, 0));
    const tip = poleG.localToWorld(new V(0, -0.9, 0));
    // into heading frame: forward = -z at yaw 0
    const yaw = p.yaw;
    const dx = tip.x - grip.x, dz = tip.z - grip.z;
    const fwd = -(dx * Math.sin(yaw) - dz * Math.cos(yaw)); // + = tip ahead of grip
    out.push({ fwd: +(-fwd).toFixed(2), down: +(tip.y - grip.y).toFixed(2) });
  }
  return { tuck: +p.rider._s.tuck.toFixed(2), poles: out };
});

const gameWait = async (sec) => {
  const t0 = await page.evaluate(() => window.__fp.race.player.t);
  await page.waitForFunction((te) => window.__fp.race.player.t >= te, t0 + sec, { timeout: 120000 });
};
await gameWait(1.5);
console.log('cruise:', JSON.stringify(await sample()));
await page.keyboard.down('w');
await page.waitForFunction(() => window.__fp.race.player.rider._s.tuck > 0.9, undefined, { timeout: 90000 });
console.log('tuck:  ', JSON.stringify(await sample()));
await page.keyboard.up('w');
await gameWait(1.0);

// trigger a plant with a steer press and trace the pole angle through it
await page.keyboard.down('d');
const trace = await page.evaluate(async () => {
  const p = window.__fp.race.player;
  const pts = [];
  const t0 = p.t;
  p.rider._plant.t[0] = 0; p.rider._plant.t[1] = 0;
  await new Promise((res) => {
    const iv = setInterval(() => {
      const pg = p.rider.parts.poles[1];
      p.obj.updateMatrixWorld(true);
      const V = p.pos.constructor;
      const g = pg.localToWorld(new V(0,0,0)), tp = pg.localToWorld(new V(0,-0.9,0));
      pts.push({ t: +(p.t - t0).toFixed(2), rx: +pg.rotation.x.toFixed(2), latX: +(tp.x - g.x).toFixed(2), rem: +(p.rider._plant.t[1]).toFixed(2) });
      if (p.t - t0 > 1.6) { clearInterval(iv); res(); }
    }, 120);
  });
  return pts;
});
console.log('plant trace (pole rx over game time):');
console.log(JSON.stringify(trace));
await browser.close(); await server.close(); process.exit(0);
