// Playability checks: riders stay on the start ramp to its lip, the trick
// hook survives a re-race, the notch pipe pops and comes back down inside,
// and a screenshot of the bridge log resting in its banks.
import { chromium } from 'playwright';
import { createServer } from 'vite';
const server = await createServer({ server: { port: 4267, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

const startRace = async () => {
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
};
await page.goto('http://localhost:4267/?event=vermont');
await startRace();

// 1) ramp: sample the surface the rider stands on vs. the raw snow from the
// rider line to past the lip
const ramp = await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const g = r.gate;
  const x = t.gateLanes[2].x;
  const z0 = t.gateLanes[2].z;
  const rows = [];
  for (let d = -0.5; d <= 3.0; d += 0.5) {
    const z = z0 - d;
    rows.push({ dz: d, ramp: +(t.surface(x, z)).toFixed(2), snow: +t.heightAt(x, z).toFixed(2), stand: +t.groundAt(x, z).toFixed(2) });
  }
  return { hideZ: +g.hideZ.toFixed(2), z0: +z0.toFixed(2), rows };
});
console.log('ramp:', JSON.stringify(ramp));

// 2) trick hook after a re-race: finish this race fast, hit "again", check
const hook = await page.evaluate(async () => {
  const r = window.__fp.race;
  const before = r.input.onSwipe === r.player._onSwipe;
  window.__prevRace = r;
  r.cb.onExit('again');
  return { before };
});
// a re-race skips the lodge: wait for the fresh race object to be running
await page.waitForFunction(() => window.__fp?.race && window.__fp.race !== window.__prevRace && window.__fp.race.stateName === 'racing', undefined, { timeout: 120000 });
const hook2 = await page.evaluate(() => {
  const r = window.__fp.race;
  return { afterAgain: r.input.onSwipe === r.player._onSwipe, hookSet: !!r.input.onSwipe };
});
console.log('trick hook:', JSON.stringify({ ...hook, ...hook2 }));

// 3) notch pipe: run up the notch wall and see the pop land back inside
const notch = await page.evaluate(async () => {
  const r = window.__fp.race;
  const t = r.terrain;
  const b = t.bridges[0];
  if (!b) return null;
  const P = r.player;
  // start in the notch a little above the ridge line, angled so the wall
  // is met right where it is tallest
  const s0 = b.s - 16;
  const x0 = b.gapX - 3;
  P.pos.set(x0, t.groundAt(x0, -s0), -s0);
  P.speed = 17;
  P.airborne = false;
  P.stumbleT = 0;
  const yaw = 0.5; // drift right across the notch toward the wall
  P.yaw = P.travelYaw = yaw;
  const rec = { launched: false, maxQ: 0, landQ: null, maxRise: 0, stumbles: 0, trace: [] };
  const orig = r.update.bind(r);
  let wasAir = false;
  r.update = (dt) => {
    const pre = P.stumbleT;
    orig(dt);
    if (P.stumbleT > pre + 0.1) rec.stumbles++;
    const q = (P.pos.x - b.gapX) / (b.gapW / 2);
    // frame trace around the wall: what the launch trigger actually saw
    const pp = t.pipeAt(P.pos.x, P.progress);
    if (rec.trace.length < 60 && Math.abs(q) > 0.3) {
      rec.trace.push([+dt.toFixed(3), +q.toFixed(2), pp ? +pp.env.toFixed(2) : null, +P.groundVy.toFixed(1), P.airborne ? 1 : 0, +P.speed.toFixed(1), +(P.progress - b.s).toFixed(1)]);
    }
    if (!P.airborne) P.yaw = yaw;
    if (P.airborne && !wasAir) rec.launched = true;
    if (P.airborne) rec.maxRise = Math.max(rec.maxRise, P.pos.y - t.heightAt(P.pos.x, P.pos.z));
    if (!P.airborne && wasAir && rec.landQ == null) rec.landQ = +q.toFixed(2);
    rec.maxQ = Math.max(rec.maxQ, Math.abs(q));
    wasAir = P.airborne;
  };
  // headless frames are slow and the sim clamps dt, so budget by run
  // distance, with a generous wall-clock cap
  const t0 = performance.now();
  while (performance.now() - t0 < 40000 && P.progress < b.s + 25) await new Promise((k) => requestAnimationFrame(k));
  r.update = orig;
  rec.maxRise = +rec.maxRise.toFixed(2);
  rec.maxQ = +rec.maxQ.toFixed(2);
  return rec;
});
console.log('notch:', JSON.stringify(notch));

// 4) screenshot the bridge log from downhill, looking up through the notch
await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const b = t.bridges[0];
  const orig = r.update.bind(r);
  r.update = (dt) => {
    r.player.pos.set(b.gapX, t.heightAt(b.gapX, -(b.s - 60)), -(b.s - 60));
    r.player.speed = 0;
    orig(dt);
    const y = t.heightAt(b.gapX, -b.s);
    r.camera.position.set(b.gapX + 14, y + b.h + 6, -(b.s + 34));
    r.camera.lookAt(b.gapX, y + b.h * 0.6, -b.s);
  };
});
await page.waitForTimeout(700);
await page.screenshot({ path: 'scratch-bridge.png' });
await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const b = t.bridges[0];
  const y = t.heightAt(b.gapX, -b.s);
  r.update = (dt) => {
    r.camera.position.set(b.gapX - 3, y + 1.8, -(b.s - 22));
    r.camera.lookAt(b.gapX, y + b.h + 1, -b.s);
  };
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'scratch-bridge2.png' });
console.log('shots done');
await browser.close(); await server.close(); process.exit(0);
