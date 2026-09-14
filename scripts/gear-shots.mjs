// Gear close-ups: the skis (tip and topsheet) and the tube from above and
// from below, on the hero in the lodge.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4361, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 520, height: 520 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4361/');
await page.waitForFunction(() => !!window.__fp?.menu, undefined, { timeout: 30000 });
await page.evaluate(() => {
  const m = window.__fp.menu;
  document.getElementById('ui').style.visibility = 'hidden';
  m.resize = () => {};
  m.camera.clearViewOffset();
  m.camera.fov = 35;
  m.camera.updateProjectionMatrix();
  m.update = (dt) => {
    m.t += dt;
    const r = m.playerRider;
    window.__fp.setPose(r, { idle: true, t: m.t, dt });
    const p = r.root.position;
    const c = window.__fp.cam || [2.5, 1.2, -2.5, 0.3];
    m.camera.position.set(p.x + c[0], p.y + c[1], p.z + c[2]);
    m.camera.lookAt(p.x, p.y + c[3], p.z);
  };
});
const shots = [
  ['ski', 'ski', [2.2, 1.0, -2.6, 0.2]],
  ['ski-front', 'ski', [0.4, 0.5, -3.2, 0.1]],
  ['tube-above', 'sled', [1.6, 2.4, -1.2, 0.3]],
  ['tube-below', 'sled', [1.6, -1.6, -1.6, 0.2]],
];
for (const [name, type, cam] of shots) {
  await page.evaluate(([type, cam]) => {
    const m = window.__fp.menu;
    m.hud._pickType(type);
    if (type === 'sled') for (let i = 0; i < 6 && !document.querySelector('#gear-name').textContent.includes('Saucer'); i++) m.hud._cycleGear(1);
    window.__fp.cam = cam;
  }, [type, cam]);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `scratch-gear-${name}.png` });
}
console.log('gear shots');
await browser.close(); await server.close(); process.exit(0);
