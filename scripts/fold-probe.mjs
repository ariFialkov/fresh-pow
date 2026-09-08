// Measures the board rider's tuck fold direction (head/chest displacement)
// and verifies the IK foot lock (ankles vs binding anchors) across poses.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4181, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 300, height: 300 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4181/');
await page.waitForFunction(() => !!window.__fp?.menu, undefined, { timeout: 60000 });

const out = await page.evaluate(() => {
  const m = window.__fp.menu;
  m.hud.gearIndex = 4; // board
  m.hud._refreshGear(true);
  const r = m.playerRider;
  const res = {};
  const settle = (pose) => {
    for (let i = 0; i < 260; i++) window.__fp.setPose(r, { ...pose, t: i * 0.02, dt: 0.02 });
    r.root.updateMatrixWorld(true);
    const inv = r.rig.matrixWorld.clone().invert();
    const p = (bone) => {
      const v = bone.getWorldPosition(new bone.position.constructor());
      v.applyMatrix4(inv);
      return [+v.x.toFixed(3), +v.y.toFixed(3), +v.z.toFixed(3)];
    };
    return {
      head: p(r.char.bones.Head),
      chest: p(r.char.bones.Spine02),
      footF: p(r.char.sided.feet[1]),
      footB: p(r.char.sided.feet[-1]),
    };
  };
  res.idle = settle({ idle: true });
  res.tuck = settle({ tuck: 1, speedNorm: 1 });
  res.carve = settle({ steer: 0.9, speedNorm: 0.7 });
  res.riding = settle({ steer: 0.3, speedNorm: 0.5 });
  return res;
});
for (const [k, v] of Object.entries(out)) console.log(k, JSON.stringify(v));
await browser.close();
await server.close();
process.exit(0);
