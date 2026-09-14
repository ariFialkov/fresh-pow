// Trick layer checks on the Big Air kicker (one clean lip, long flight):
//   1. two directions together read as one special; one after the other stay two tricks
//   2. braking into the lip knuckles: lower, longer, floatier flight, tricks pay more
//   3. a spin landed half a turn round lands switch (+points), the rider rides backwards,
//      the next spin is a 180 back to forward; a crash while switch stands up forward
// Also shoots the specials mid-flight and the switch rider for a look.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4391, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
let fails = 0;
const check = (ok, msg) => { console.log(`${ok ? 'OK  ' : 'FAIL'} ${msg}`); if (!ok) fails++; };

const type = process.env.TYPE || 'ski';
await page.goto('http://localhost:4391/?event=utah&format=bigair');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate((t) => window.__fp.menu.hud._pickType(t), type);
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

// run the race by fixed ticks from the page; a helper sends the player at
// the kicker and returns once airborne / landed
await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = () => {}; // we step by hand
  window.__step = (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) orig(dt); };
  window.__launch = (brake = false) => {
    const t = r.terrain, P = r.player, j = t.jumps[0];
    P.pos.set(j.x, t.groundAt(j.x, -(j.s - 60)), -(j.s - 60));
    P.speed = 24; P.airborne = false; P.yaw = P.travelYaw = 0; P.stumbleT = 0; P.immuneT = 0; P.switchRide = false;
    P.style = 0; P.pending = 0; P.combo = []; P.trickSpin = P.spinDone = P.trickFlip = P.flipDone = 0;
    r.input.brake = false; r.input.tuck = false; r.input.steer = 0;
    for (let i = 0; i < 600 && !P.airborne; i++) {
      if (brake && P.progress > j.s - 2.5) r.input.brake = true; // a dab of brake right at the lip
      window.__step(1);
      if (!P.airborne) { P.yaw = P.travelYaw = 0; }
    }
    r.input.brake = false;
    return { vy: +P.vy.toFixed(2), speed: +P.speed.toFixed(1), knuckle: P._knuckle };
  };
  window.__fly = () => {
    const P = r.player;
    let maxH = 0, airT = 0, peak = 0;
    const s0 = P.progress, y0 = P.pos.y;
    for (let i = 0; i < 900 && P.airborne; i++) { window.__step(1); airT += 1 / 60; maxH = Math.max(maxH, P.pos.y - r.terrain.heightAt(P.pos.x, P.pos.z)); peak = Math.max(peak, P.pos.y - y0); }
    return { maxH: +maxH.toFixed(1), peak: +peak.toFixed(1), airT: +airT.toFixed(2), dist: +(P.progress - s0).toFixed(0), style: P.style, switch: P.switchRide, stumble: P.stumbleT > 0, combo: P._lastCombo };
  };
  // a single direction waits 120 ms of wall time for a partner; the probe
  // steps game time by hand, so it closes the window itself
  window.__tap = (dir) => { r.player._trick(dir); r.player._flushTrick(true); };
  // remember each landing's combo for the report
  const P = r.player;
  const origStomp = r.hud.trickToast.bind(r.hud);
  r.hud.trickToast = (a, b) => { if (String(a).startsWith('STOMPED')) P._lastCombo = b; origStomp(a, b); };
});

// 1. special vs sequential
let res = await page.evaluate(() => {
  const r = window.__fp.race, P = r.player;
  const a = window.__launch();
  window.__step(6);
  P._trick('left'); P._trick('up'); // together
  window.__step(6);
  const combo = [...P.combo], pend = P.pending, special = P._special?.kind;
  const f = window.__fly();
  return { launch: a, combo, pend, special, land: f };
});
check(res.combo.length === 1 && res.combo[0] === 'Backside Rodeo' && res.special === 'grab', `together = special: ${JSON.stringify(res.combo)} ${res.pend} pts (${res.special}), landed style ${res.land.style} switch ${res.land.switch} stumble ${res.land.stumble}`);
res = await page.evaluate(async () => {
  const r = window.__fp.race, P = r.player;
  window.__launch();
  window.__step(6);
  P._trick('left');
  await new Promise((k) => setTimeout(k, 200)); // well past the window
  window.__step(3);
  P._trick('up');
  await new Promise((k) => setTimeout(k, 200)); // the second one's window passes too
  window.__step(6);
  const combo = [...P.combo], pend = P.pending;
  const f = window.__fly();
  return { combo, pend, land: f };
});
check(res.combo.length === 2 && res.combo[0] === 'Backside 360' && res.combo[1] === 'Front Flip', `apart = two tricks: ${JSON.stringify(res.combo)} ${res.pend} pts, landed style ${res.land.style} stumble ${res.land.stumble}`);

// 2. knuckle huck
res = await page.evaluate(() => {
  const plain = { launch: window.__launch(false) };
  plain.fly = window.__fly();
  const kn = { launch: window.__launch(true) };
  const P = window.__fp.race.player;
  window.__step(6); window.__tap('left'); window.__step(6);
  kn.pend = P.pending;
  kn.fly = window.__fly();
  return { plain, kn };
});
check(res.kn.launch.knuckle && res.kn.fly.peak < res.plain.fly.peak * 0.5 && res.kn.fly.dist > res.plain.fly.dist * 0.85 && res.kn.pend === 150, `knuckle: plain peak ${res.plain.fly.peak} m above the lip / ${res.plain.fly.dist} m / ${res.plain.fly.airT}s vs knuckle peak ${res.kn.fly.peak} m / ${res.kn.fly.dist} m / ${res.kn.fly.airT}s, 360 worth ${res.kn.pend} pts, landed ${res.kn.fly.stumble ? 'crashed' : 'clean'} style ${res.kn.fly.style}`);

// 3. switch landing: throw a 360 late so the rider comes down half way round
res = await page.evaluate(() => {
  const r = window.__fp.race, P = r.player;
  window.__launch();
  // fly until the last ~0.5 s, then throw the spin: it gets to ~180 at touchdown
  const out = {};
  let tries = 0;
  // how long the flight is, then throw the spin so it is half way round at touchdown
  let airTicks = 0;
  while (P.airborne && airTicks < 900) { window.__step(1); airTicks++; }
  for (let k = 36; k >= 22 && !out.done; k--) {
    window.__launch();
    let i = 0;
    while (P.airborne && i < 900) { window.__step(1); i++; if (i === airTicks - k) window.__tap('left'); }
    tries++;
    if (P.switchRide) { out.done = true; out.delayTicks = airTicks - k; }
  }
  out.tries = tries; out.switch = P.switchRide; out.style = P.style; out.combo = P._lastCombo; out.rigY = +P.rider.rig.rotation.y.toFixed(2);
  // ride backwards a bit, then the next spin should be a half back to forward
  for (let i = 0; i < 40; i++) window.__step(1);
  out.rideSwitch = P.switchRide;
  // a second jump from switch: a left spin = 180 back to forward
  const j = r.terrain.jumps[0];
  P.pos.set(j.x, r.terrain.groundAt(j.x, -(j.s - 60)), -(j.s - 60)); P.speed = 24; P.airborne = false; P.yaw = P.travelYaw = 0; P.style = 0;
  for (let i = 0; i < 600 && !P.airborne; i++) { window.__step(1); if (!P.airborne) P.yaw = P.travelYaw = 0; }
  window.__step(6); window.__tap('left');
  out.halfSpin = +P.trickSpin.toFixed(2); out.halfName = P.combo[0];
  const f = window.__fly();
  out.backForward = !P.switchRide; out.style2 = f.style; out.crash2 = f.stumble;
  // crash while switch stands up forward
  P.switchRide = true; P.stumble('test'); out.afterCrash = P.switchRide;
  return out;
});
check(res.switch && res.style >= 150, `switch landing (spin thrown ${res.delayTicks} ticks in, ${res.tries} tries): combo "${res.combo}", style ${res.style}, rig yaw ${res.rigY}, still switch after riding ${res.rideSwitch}`);
check(Math.abs(Math.abs(res.halfSpin) - Math.PI) < 0.01 && res.halfName === 'Backside 180' && res.backForward, `half spin from switch: ${res.halfName} ${res.halfSpin} rad, back to forward ${res.backForward}, style ${res.style2} (crash ${res.crash2})`);
check(res.afterCrash === false, `crash while switch stands up forward: switch=${res.afterCrash}`);

// shots: each special mid-flight, and riding switch
for (const [a, b, name] of [['left', 'up', 'rodeo'], ['left', 'down', 'jackknife'], ['right', 'down', 'superman']]) {
  await page.evaluate(([a, b]) => {
    const r = window.__fp.race, P = r.player;
    window.__launch(); window.__step(6); P._trick(a); P._trick(b);
    for (let i = 0; i < 24; i++) window.__step(1);
    const p = P.pos; r.camera.position.set(p.x + 5, p.y + 1.5, p.z + 2); r.camera.lookAt(p.x, p.y + 0.6, p.z);
    r.camera.fov = 40; r.camera.updateProjectionMatrix();
  }, [a, b]);
  await page.waitForTimeout(250);
  await page.screenshot({ path: `scratch-trick-${type}-${name}.png` });
}
await page.evaluate(() => {
  const r = window.__fp.race, P = r.player;
  window.__launch(); window.__fly();
  P.switchRide = true; P._lookSide = 1;
  r.input.steer = 0.5;
  for (let i = 0; i < 60; i++) window.__step(1);
  const p = P.pos; r.camera.position.set(p.x + 2.5, p.y + 1.6, p.z - 3.5); r.camera.lookAt(p.x, p.y + 0.8, p.z);
});
await page.waitForTimeout(250);
await page.screenshot({ path: `scratch-trick-${type}-switch.png` });
console.log(fails ? `TRICKS FAILED (${fails})` : 'TRICKS OK');
await browser.close(); await server.close(); process.exit(fails ? 1 : 0);
