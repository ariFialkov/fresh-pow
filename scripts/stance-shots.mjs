// Stance diagnostic: the boarder in a given pose from four compass angles
// (nose-on, tail-on, toe side, heel side) in the white kit, so the facing
// of hips, chest and head can be read against the board and the feet.
// POSE=tuck picks the pose (default idle).
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4331, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 520, height: 520 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4331/');
await page.waitForFunction(() => !!window.__fp?.menu, undefined, { timeout: 30000 });
const poses = { idle: { idle: true }, tuck: { tuck: 1, speedNorm: 1 }, riding: { steer: 0.5, speedNorm: 0.6 } };
const pose = poses[process.env.POSE || 'idle'];
await page.evaluate((pose) => {
  const m = window.__fp.menu;
  document.getElementById('ui').style.visibility = 'hidden';
  m.resize = () => {};
  m.camera.clearViewOffset();
  m.camera.fov = 40;
  m.camera.updateProjectionMatrix();
  m.hud._pickType('board');
  window.__fpState?.();
  m.update = (dt) => {
    m.t += dt;
    const r = m.playerRider;
    window.__fp.setPose(r, { ...pose, t: m.t, dt });
    const p = r.root.position;
    const a = window.__fp.az ?? 0;
    m.camera.position.set(p.x + Math.sin(a) * 3.2, p.y + 1.1, p.z + Math.cos(a) * 3.2);
    m.camera.lookAt(p.x, p.y + 0.8, p.z);
  };
}, pose);
// the white kit: light pants make the pelvis readable
await page.evaluate(() => {
  const m = window.__fp.menu;
  m.hud.outfit = m.hud.constructor && null;
});
await page.evaluate(async () => {
  const { state } = await import('/src/game/state.js').catch(() => ({ state: null }));
});
await page.evaluate(() => {
  const m = window.__fp.menu;
  // cycle the outfit arrows until the whiteout kit is up (unowned is fine for the hero)
  for (let i = 0; i < 10 && !document.querySelector('#fit-name').textContent.includes('Arctic'); i++) m.hud._cycleFit(1);
});
const label = process.env.POSE || 'idle';
for (const [name, az] of [['tailon', 0], ['toeside', -Math.PI / 2], ['noseon', Math.PI], ['heelside', Math.PI / 2]]) {
  await page.evaluate((a) => { window.__fp.az = a; }, az);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `scratch-stance-${label}-${name}.png` });
}
console.log('stance shots', label);
await browser.close(); await server.close(); process.exit(0);
