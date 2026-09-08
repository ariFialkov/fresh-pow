// Prints where the character's feet actually land in rig space, per gear,
// so bindings and decks can be aligned to the pose instead of eyeballed.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4180, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4180/');
await page.waitForFunction(() => !!window.__fp?.menu, undefined, { timeout: 60000 });

for (const [label, idx, yaw] of [['ski', 0, null], ['board', 4, null], ['board-y0', 4, 0], ['board-y06', 4, 0.6]]) {
  const out = await page.evaluate(async ({ gearIdx, yawOverride }) => {
    const m = window.__fp.menu;
    const hud = m.hud;
    hud.gearIndex = gearIdx;
    hud._refreshGear(true);
    const r = m.playerRider;
    if (yawOverride !== null) r.baseBodyYaw = yawOverride;
    // converge the springs on a settled idle pose
    for (let i = 0; i < 200; i++) window.__fp.setPose(r, { idle: true, t: i * 0.02, dt: 0.02 });
    r.root.updateMatrixWorld(true);
    const inv = r.rig.matrixWorld.clone().invert();
    const res = { feet: {}, toes: {} };
    for (const [side, foot] of Object.entries(r.char.sided.feet)) {
      const v = foot.getWorldPosition(new foot.position.constructor());
      v.applyMatrix4(inv);
      res.feet[side] = { x: +v.x.toFixed(3), y: +v.y.toFixed(3), z: +v.z.toFixed(3) };
      const toe = foot.children.find((c) => c.isBone);
      if (toe) {
        const tv = toe.getWorldPosition(new foot.position.constructor());
        tv.applyMatrix4(inv);
        res.toes[side] = { x: +tv.x.toFixed(3), y: +tv.y.toFixed(3), z: +tv.z.toFixed(3) };
      }
    }
    res.gearYaw = +r.gearGroup.rotation.y.toFixed(3);
    res.gearPos = { x: +r.gearGroup.position.x.toFixed(3), y: +r.gearGroup.position.y.toFixed(3), z: +r.gearGroup.position.z.toFixed(3) };
    return res;
  }, { gearIdx: idx, yawOverride: yaw });
  console.log(label, JSON.stringify(out));
}
await browser.close();
await server.close();
process.exit(0);
