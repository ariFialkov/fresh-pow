// Close-up portraits of the rider rig per gear type, across the key poses,
// for visual QA of joints and stances. TYPES=ski,board and POSES=tuck,landing
// narrow the run.
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
  // the lodge UI would cover the legs — hide it; the hero framing offset
  // is undone too so the rider sits in the middle of the frame
  document.getElementById('ui').style.visibility = 'hidden';
  m.resize = () => {};
  m.camera.clearViewOffset();
  m.camera.fov = 48;
  m.camera.updateProjectionMatrix();
  m.update = (dt) => {
    m.t += dt;
    const r = m.playerRider;
    window.__fp.setPose(r, { ...(window.__fp.pose || { idle: true }), t: m.t, dt });
    const p = r.root.position;
    if (window.__fp.camFront) m.camera.position.set(p.x - 2.4, p.y + 1.2, p.z - 2.2);
    else m.camera.position.set(p.x + 2.2, p.y + 1.4, p.z + 2.6);
    m.camera.lookAt(p.x, p.y + 0.8, p.z);
  };
});

const allPoses = {
  idle: { idle: true },
  riding: { steer: 0.4, speedNorm: 0.6 },
  tuck: { tuck: 1, speedNorm: 1 },
  brake: { brake: 1, steer: 0.3, speedNorm: 0.5 },
  carvefs: { steer: 0.95, speedNorm: 0.75 },
  carvebs: { steer: -0.95, speedNorm: 0.75 },
  landing: { crouch: 0.8, speedNorm: 0.7 },
  knocked: { knocked: 1 },
};
const types = (process.env.TYPES || 'ski,board,sled').split(',');
const poseNames = (process.env.POSES || Object.keys(allPoses).join(',')).split(',');

for (const type of types) {
  await page.evaluate((t) => window.__fp.menu.hud._pickType(t), type);
  for (const poseName of poseNames) {
    await page.evaluate((p) => {
      window.__fp.pose = p;
      window.__fp.camFront = false;
    }, allPoses[poseName]);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `scratch-rig-${type}-${poseName}.png` });
    // second angle from the front-side: knee/fold direction is invisible
    // from behind, which is how a backwards-knee bug once slipped through
    await page.evaluate(() => {
      window.__fp.camFront = true;
    });
    await page.waitForTimeout(250);
    await page.screenshot({ path: `scratch-rig-${type}-${poseName}-front.png` });
    console.log(`shot ${type}/${poseName}`);
  }
}

await browser.close();
await server.close();
process.exit(0);
