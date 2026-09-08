// Close-up portraits of the rider rig per gear type (ski / board / sled),
// across the key poses, for visual QA of joints and stances.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: Number(process.env.PORT || 4178), strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 700, height: 700 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

await page.goto(`http://localhost:${process.env.PORT || 4178}/`);
await page.waitForFunction(() => !!window.__fp?.menu, undefined, { timeout: 30000 });

// freeze the cinematic drift: pin the camera on the player rider and drive
// the pose from window.__fp.pose instead of the idle loop
await page.evaluate(() => {
  const m = window.__fp.menu;
  m.update = (dt) => {
    m.t += dt;
    const r = m.playerRider;
    window.__fp.setPose(r, { ...(window.__fp.pose || { idle: true }), t: m.t, dt });
    const p = r.root.position;
    if (window.__fp.camFront) m.camera.position.set(p.x - 2.4, p.y + 1.3, p.z - 2.2);
    else m.camera.position.set(p.x + 2.2, p.y + 1.5, p.z + 2.6);
    m.camera.lookAt(p.x, p.y + 0.75, p.z);
  };
});

const poses = [
  ['idle', { idle: true }],
  ['riding', { steer: 0.4, speedNorm: 0.6 }],
  ['tuck', { tuck: 1, speedNorm: 1 }],
  ['brake', { brake: 1, steer: 0.3, speedNorm: 0.5 }],
  ['carvefs', { steer: 0.95, speedNorm: 0.75 }],
  ['carvebs', { steer: -0.95, speedNorm: 0.75 }],
  ['knocked', { knocked: 1 }],
];

for (const [label, index] of [['ski', 0], ['board', 4], ['sled', 8], ['saucer', 11]]) {
  await page.evaluate((idx) => {
    const hud = window.__fp.menu.hud;
    hud.gearIndex = idx;
    hud._refreshGear(true);
  }, index);
  for (const [poseName, pose] of poses) {
    await page.evaluate((p) => {
      window.__fp.pose = p;
      window.__fp.camFront = false;
    }, pose);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `scratch-rig-${label}-${poseName}.png` });
    // second angle from the front-side: knee/fold direction is invisible
    // from behind, which is how a backwards-knee bug once slipped through
    await page.evaluate(() => {
      window.__fp.camFront = true;
    });
    await page.waitForTimeout(250);
    await page.screenshot({ path: `scratch-rig-${label}-${poseName}-front.png` });
    console.log(`shot ${label}/${poseName}`);
  }
}

await browser.close();
await server.close();
process.exit(0);
