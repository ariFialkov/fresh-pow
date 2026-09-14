// Hard-brake close-ups: the board and skis checked sideways on a
// cross-slope, shot low from the downhill side, plus a measure of how far
// the gear's tips sit above or below the snow while checked.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4381, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
for (const type of ['board', 'ski']) {
  await page.goto('http://localhost:4381/?event=utah&format=race');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate((t) => window.__fp.menu.hud._pickType(t), type);
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  const out = await page.evaluate(async () => {
    const r = window.__fp.race;
    const P = r.player;
    const t = r.terrain;
    // find a spot with real cross-slope on the course
    let best = null;
    for (let s = 300; s < 1500; s += 10) {
      for (let dx = -18; dx <= 18; dx += 6) {
        const x = t.centerAt(s) + dx;
        const n = t.groundNormalAt(x, -s);
        // the steepest ordinary bank, not a pipe wall or a ledge face
        if (Math.abs(n.x) > 0.42 || t.pipeAt?.(x, s)?.env > 0.1) continue;
        if (!best || Math.abs(n.x) > Math.abs(best.n.x)) best = { s, x, n };
      }
    }
    P.pos.set(best.x, t.groundAt(best.x, -best.s), -best.s);
    P.speed = 22; P.airborne = false; P.yaw = P.travelYaw = 0; P.stumbleT = 0; P.immuneT = 0;
    r.input.brake = true; r.input.steer = 0.4; r.input.tuck = false;
    const orig = r.update.bind(r);
    for (let i = 0; i < 24; i++) orig(0.05); // 1.2 s of checking
    r.update = () => {};
    // camera: low, from the downhill side of the rider
    const p = P.pos;
    r.camera.position.set(p.x - 4.5, p.y + 1.4, p.z - 3.5);
    r.camera.lookAt(p.x, p.y + 0.5, p.z);
    r.camera.fov = 40; r.camera.updateProjectionMatrix();
    // gear tips vs snow: world positions of the ends of the deck
    const gg = P.rider.gearGroup;
    P.obj.updateWorldMatrix(true, true);
    const V = p.constructor;
    const ends = [-0.85, 0.85].map((z) => {
      const w = new V(0, 0.03, z);
      gg.localToWorld(w);
      return +(w.y - t.groundAt(w.x, w.z)).toFixed(2);
    });
    return { s: best.s, crossSlope: +best.n.x.toFixed(2), gearYaw: +gg.rotation.y.toFixed(2), tipHeights: ends, speed: +P.speed.toFixed(1) };
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `scratch-brake-${type}.png` });
  console.log(type, JSON.stringify(out));
}
await browser.close(); await server.close(); process.exit(0);
