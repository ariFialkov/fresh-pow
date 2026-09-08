// Rides downhill with some carving, then inspects the player trail's real
// state (points, draw range, ribbon heights vs terrain) and grabs a
// bird's-eye screenshot looking down at the track.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4183, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4183/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate((idx) => {
  const hud = window.__fp.menu.hud;
  hud.gearIndex = idx; // 4 = snowboard, 0 = ski, 11 = saucer
  hud._refreshGear(true);
}, Number(process.env.GEAR ?? 4));
await page.click('#start-btn');
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

// ride: tuck with alternating carves for ~8 game seconds
await page.keyboard.down('w');
const t0 = await page.evaluate(() => window.__fp.race.player.t);
for (const key of ['a', 'd', 'a', 'd']) {
  await page.keyboard.down(key);
  await page.waitForFunction(
    (args) => window.__fp.race.player.t >= args, (await page.evaluate(() => window.__fp.race.player.t)) + 1.6,
    { timeout: 120000 }
  );
  await page.keyboard.up(key);
}
await page.keyboard.up('w');

const info = await page.evaluate(() => {
  const r = window.__fp.race;
  const tr = r.playerTrail?.tracks?.[0]?.trail ?? r.playerTrail;
  const pts = tr.points.filter(Boolean);
  const out = {
    trackCount: r.playerTrail?.tracks?.length,
    points: tr.points.length,
    live: pts.length,
    drawRange: tr.geo.drawRange.count,
    meshInScene: !!tr.mesh.parent,
    meshVisible: tr.mesh.visible,
    playerY: +r.player.pos.y.toFixed(2),
  };
  if (pts.length) {
    const p = pts[pts.length - 2] ?? pts[pts.length - 1];
    out.samplePoint = { x: +p.x.toFixed(1), z: +p.z.toFixed(1), age: +p.age.toFixed(2) };
    out.terrainH = +r.terrain.heightAt(p.x, p.z).toFixed(2);
    // ribbon vertex heights near the end of the buffer
    const a = tr.aPos.array;
    const n = Math.min(tr.geo.drawRange.count / 6 * 2, pts.length) * 6;
    out.ribbonYs = [a[n - 12 + 1], a[n - 12 + 4], a[n - 6 + 1], a[n - 6 + 4]].map((y) => +(+y).toFixed(2));
  }
  return out;
});
console.log('trail state:', JSON.stringify(info, null, 1));

// what the player actually sees: the untouched chase camera, grounded
await page.waitForFunction(() => !window.__fp.race.player.airborne, undefined, { timeout: 60000 });
await page.screenshot({ path: 'scratch-trail-chase.png' });
console.log('shot chase');

// close-up on the gear's tail at LOW speed: verifies the ribbon hugs the
// snow and pours continuously out of the vehicle
await page.keyboard.down('s');
await page.waitForFunction(() => window.__fp.race.player.speed < 8 && !window.__fp.race.player.airborne, undefined, { timeout: 60000 });
await page.keyboard.up('s');
await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = (dt) => {
    orig(dt);
    const p = r.player.pos;
    r.camera.position.set(p.x + 2.6, p.y + 1.6, p.z - 2.4);
    r.camera.lookAt(p.x, p.y + 0.2, p.z + 1.6);
  };
});
await page.waitForTimeout(1400);
await page.screenshot({ path: 'scratch-trail-close.png' });
console.log('shot close');

// bird's-eye: hover above the player looking straight down the back-trail
await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = (dt) => {
    orig(dt);
    const p = r.player.pos;
    r.camera.position.set(p.x + 6, p.y + 22, p.z + 26);
    r.camera.lookAt(p.x, p.y, p.z + 14);
  };
});
await page.waitForTimeout(900);
await page.screenshot({ path: 'scratch-trail-birdseye.png' });
console.log('shot birdseye');
await browser.close();
await server.close();
process.exit(0);
