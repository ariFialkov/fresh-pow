// A real manual jump, frame by frame: the rider loading the knees with the
// arms pulled in tight, then the legs driving out and the arms sweeping down
// and back as it leaves the snow. Shot side-on from the race scene, stepping
// the game by hand so each frame is a known point in the animation.
// TYPE=ski|board|sled|saucer picks the gear.
import { chromium } from 'playwright';
import { preview } from 'vite';

const port = Number(process.env.PORT || 4188);
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 520, height: 520 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

const type = process.env.TYPE || 'ski';
await page.goto(`http://localhost:${port}/?event=utah&format=race`);
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate((t) => window.__fp.menu.hud._pickType(t), type);
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = () => {};
  r._updateCamera = () => {}; // the chase camera looks up the rider's back
  // step the race by hand, pinning the camera side-on so knees and arms read
  window.__step = (n) => {
    for (let i = 0; i < n; i++) {
      orig(1 / 60);
      const p = r.player.pos;
      r.camera.position.set(p.x + 3.2, p.y + 1.0, p.z + 0.6);
      r.camera.lookAt(p.x, p.y + 0.75, p.z);
      if (r.camera.fov !== 42) { r.camera.fov = 42; r.camera.updateProjectionMatrix(); }
    }
  };
  window.__flat = () => {
    const P = r.player, t = r.terrain, s = 300;
    const x = t.centerAt(s);
    P.pos.set(x, t.groundAt(x, -s), -s);
    P.speed = 18; P.yaw = P.travelYaw = 0; P.airborne = false;
    P.stumbleT = 0; P.knockT = 0; P.immuneT = 1e9; P._ollieT = -1;
    r.input.tuck = false; r.input.brake = false; r.input.steer = 0;
    r.input.clearJump();
    window.__step(2);
  };
});

// frames counted from the press: the load builds over the first seven, the
// rider leaves the snow around there, and the extension plays out after
const marks = [0, 3, 5, 7, 9, 12, 15, 20];
await page.evaluate(() => window.__flat());
let at = 0;
for (const f of marks) {
  // the press and the first step have to happen in one call: the jump
  // request expires on wall-clock time, and a screenshot between them takes
  // longer than the buffer it is held for
  if (f > 0) {
    await page.evaluate(([n, press]) => {
      if (press) window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
      window.__step(n);
    }, [f - at, at === 0]);
    at = f;
  }
  const state = await page.evaluate(() => {
    const P = window.__fp.race.player;
    return {
      air: P.airborne,
      pelvis: +P.rider.parts.pelvis.position.y.toFixed(3),
      shoulder: +P.rider.parts.arms[0].shoulder.rotation.x.toFixed(2),
    };
  });
  await page.waitForTimeout(160);
  const tag = String(f).padStart(2, '0');
  await page.screenshot({ path: `scratch-ollie-${type}-f${tag}.png` });
  console.log(`frame ${tag}: ${state.air ? 'airborne' : 'on the snow'} pelvis ${state.pelvis} shoulder ${state.shoulder}`);
}
await browser.close(); await server.close();
