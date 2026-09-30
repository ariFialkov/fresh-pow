// Two things at once:
//   1. the speed change — top speed on a sustained tuck, and how hard the
//      rider still pulls off the mark (the acceleration was to stay put)
//   2. the manual jump — SPACE on a keyboard and a single tap on a
//      touchscreen both pop the rider off flat ground, while a hold, a
//      swipe and a mid-air press do not
import { chromium } from 'playwright';
import { preview } from 'vite';
const port = 4396;
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
let fails = 0;
const check = (ok, msg) => { console.log(`${ok ? 'OK  ' : 'FAIL'} ${msg}`); if (!ok) fails++; };

await page.goto(`http://localhost:${port}/?event=utah&format=race`);
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

// step the race by hand
await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = () => {};
  window.__step = (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) orig(dt); };
});

// ---- 1. speed ----
const speed = await page.evaluate(() => {
  const r = window.__fp.race, P = r.player, t = r.terrain;
  const put = (s) => {
    const x = t.centerAt(s);
    P.pos.set(x, t.groundAt(x, -s), -s);
    P.speed = 0; P.yaw = P.travelYaw = 0; P.airborne = false; P.stumbleT = 0; P.immuneT = 1e9;
  };
  // the pull off the mark, measured in one clean run with no repositioning
  put(200);
  r.input.tuck = true; r.input.brake = false; r.input.steer = 0;
  const marks = {};
  for (let i = 0; i < 300; i++) {
    window.__step(1);
    const s = Math.round((i + 1) / 60 * 10) / 10;
    if ([1, 2, 3, 5].includes(s) && marks[`t${s}`] === undefined) marks[`t${s}`] = +P.speed.toFixed(2);
  }
  // then the top end, given room to reach it
  put(200);
  let top = 0;
  for (let i = 0; i < 3600; i++) {
    window.__step(1);
    if (P.speed > top) top = P.speed;
    if (P.progress > t.length - 200) { const x = t.centerAt(200); const keep = P.speed; P.pos.set(x, t.groundAt(x, -200), -200); P.speed = keep; }
  }
  // and the pace with no tuck, which is the ordinary cruising top end
  r.input.tuck = false;
  put(300);
  let cruise = 0;
  for (let i = 0; i < 3600; i++) { window.__step(1); cruise = Math.max(cruise, P.speed); if (P.progress > t.length - 200) { const x = t.centerAt(200); const keep = P.speed; P.pos.set(x, t.groundAt(x, -200), -200); P.speed = keep; } }
  r.input.tuck = false;
  return { top: +top.toFixed(2), cruise: +cruise.toFixed(2), ...marks };
});
console.log(`     tuck top ${speed.top} m/s (${Math.round(speed.top * 3.6)} km/h) · open ${speed.cruise} m/s (${Math.round(speed.cruise * 3.6)} km/h)`);
console.log(`     from a standstill: 1s ${speed.t1} · 2s ${speed.t2} · 3s ${speed.t3} · 5s ${speed.t5} m/s`);

// ---- 2. the manual jump ----
const jump = await page.evaluate(() => {
  const r = window.__fp.race, P = r.player, t = r.terrain;
  const flat = () => {
    // a stretch with no kicker, so any air is the rider's own
    const s = 300;
    const x = t.centerAt(s);
    P.pos.set(x, t.groundAt(x, -s), -s);
    P.speed = 20; P.yaw = P.travelYaw = 0; P.airborne = false; P.stumbleT = 0; P.knockT = 0; P.immuneT = 1e9;
    r.input.tuck = false; r.input.brake = false; r.input.steer = 0;
    r.input.clearJump();
  };
  // the ollie in isolation: the kick it leaves the snow with, and the
  // rise and hang that kick is worth on level ground (the real hill falls
  // away underneath, which would flatter any arc measured against it)
  const AIR_G = 15;
  const arc = () => {
    const vy = P.vy;
    const scrub = 20 - P.speed;
    let air = 0;
    for (let i = 0; i < 600 && P.airborne; i++) { window.__step(1); air += 1 / 60; }
    return { vy: +vy.toFixed(2), rise: +((vy * vy) / (2 * AIR_G)).toFixed(2), hang: +((2 * vy) / AIR_G).toFixed(2), scrub: +scrub.toFixed(2) };
  };
  const out = {};
  // the press loads before it pops: step past the wind-up, sampling the
  // body as it goes so the animation can be measured, not just the arc
  const WIND_FRAMES = Math.ceil(0.11 * 60) + 4;
  const rideY = r.player.rider.parts.pelvis.position.y;
  const sample = (f) => ({
    f,
    pelvis: +P.rider.parts.pelvis.position.y.toFixed(3),
    shoulder: +P.rider.parts.arms[0].shoulder.rotation.x.toFixed(2),
    elbow: +P.rider.parts.arms[0].elbow.rotation.x.toFixed(2),
    air: P.airborne,
  });
  // step to the moment the rider leaves the snow
  const windUp = () => {
    for (let i = 0; i < WIND_FRAMES && !P.airborne; i++) window.__step(1);
  };
  // and the same thing sampling every frame right through the pop, so the
  // load, the extension and the arm swing can all be measured
  const windUpTrace = (n) => {
    const trace = [];
    let kick = 0;
    for (let i = 0; i < n; i++) {
      const wasAir = P.airborne;
      window.__step(1);
      if (P.airborne && !wasAir) kick = P.vy + 15 / 60; // undo the frame of gravity already applied
      trace.push(sample(i + 1));
    }
    trace.kick = kick;
    return trace;
  };

  // space bar
  flat();
  window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
  const spaceTrace = windUpTrace(26);
  out.spaceTrace = spaceTrace;
  const kick = spaceTrace.kick;
  out.space = { airborne: spaceTrace.some((f) => f.air), vy: +kick.toFixed(2), rise: +((kick * kick) / (2 * AIR_G)).toFixed(2), hang: +((2 * kick) / AIR_G).toFixed(2), scrub: +(20 - P.speed).toFixed(2) };
  arc();

  // a single tap: down and straight back up, going nowhere
  flat();
  const cv = document.querySelector('canvas');
  const tap = (dx = 0, dy = 0, ms = 0, kind = 'touch') => {
    const o = { pointerId: 7, pointerType: kind, clientX: 200, clientY: 200, bubbles: true, button: 0 };
    cv.dispatchEvent(new PointerEvent('pointerdown', o));
    if (dx || dy) window.dispatchEvent(new PointerEvent('pointermove', { ...o, clientX: 200 + dx, clientY: 200 + dy }));
    const up = () => window.dispatchEvent(new PointerEvent('pointerup', { ...o, clientX: 200 + dx, clientY: 200 + dy }));
    return ms ? new Promise((k) => setTimeout(() => { up(); k(); }, ms)) : (up(), Promise.resolve());
  };
  return tap().then(() => {
    windUp();
    out.tap = { airborne: P.airborne, ...arc() };
    // a HOLD is tuck/brake, not a jump
    flat();
    return tap(0, 90, 400);
  }).then(() => {
    windUp();
    out.hold = { airborne: P.airborne };
    // a SWIPE is a trick, not a jump
    flat();
    return tap(90, 0, 0);
  }).then(() => {
    windUp();
    out.swipe = { airborne: P.airborne };
    // pressed mid-flight: spent, not banked for the landing
    flat();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
    windUp();
    const wasAir = P.airborne;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
    arc();
    window.__step(WIND_FRAMES + 4);
    out.midair = { poppedFirst: wasAir, airborneAfterLanding: P.airborne };
    // down riders cannot jump
    flat();
    P.stumbleT = 1.0;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
    windUp();
    out.stumbled = { airborne: P.airborne };
    P.stumbleT = 0;
    // a mouse click is not a tap: on a desktop the jump is the space bar
    flat();
    return tap(0, 0, 0, 'mouse').then(() => {
      windUp();
      out.click = { airborne: P.airborne };
      out.rideY = +rideY.toFixed(3);
      return out;
    });
  });
});
console.log('     ', JSON.stringify(jump));
check(jump.space.airborne && jump.space.rise > 0.7 && jump.space.rise < 1.05 && jump.space.hang > 0.55, `SPACE jumps: kick ${jump.space.vy} m/s -> ${jump.space.rise} m up, ${jump.space.hang}s of hang on the level (cost ${jump.space.scrub} m/s of run)`);
// the wind-up: the pelvis sinks into the load, the arms come up and fold in,
// then the legs straighten and the arms sweep down as the rider leaves
const tr = jump.spaceTrace;
const liftOff = tr.findIndex((f) => f.air);
const load = tr.slice(0, liftOff < 0 ? tr.length : liftOff + 1);
const after = tr.slice(liftOff < 0 ? tr.length : liftOff);
const lowest = Math.min(...tr.map((f) => f.pelvis));
const armUp = Math.max(...load.map((f) => f.shoulder));
const elbowIn = Math.max(...load.map((f) => f.elbow));
const armDown = Math.min(...after.map((f) => f.shoulder));
const rebound = Math.max(...after.slice(0, 12).map((f) => f.pelvis)) - lowest;
console.log(`      pelvis ${jump.rideY} -> ${lowest.toFixed(3)} m over ${load.length} frames, then +${rebound.toFixed(3)} m`);
console.log(`      shoulder up to ${armUp} (elbow ${elbowIn}) then down to ${armDown}`);
check(lowest < jump.rideY - 0.12, `knees brace before the pop: pelvis drops ${(jump.rideY - lowest).toFixed(3)} m`);
check(rebound > 0.1, `legs extend through the takeoff: pelvis springs back ${rebound.toFixed(3)} m`);
check(armUp > 0.5 && elbowIn > 0.9, `arms come up and fold in over the load: shoulder ${armUp}, elbow ${elbowIn}`);
check(armDown < -0.6, `arms swing down and back through the pop: shoulder reaches ${armDown}`);
check(jump.tap.airborne && jump.tap.rise > 0.7 && jump.tap.rise < 1.05, `single tap jumps: kick ${jump.tap.vy} m/s -> ${jump.tap.rise} m up, ${jump.tap.hang}s of hang`);
check(!jump.hold.airborne, 'a held pull is tuck/brake, not a jump');
check(!jump.swipe.airborne, 'a swipe is a trick, not a jump');
check(!jump.midair.airborneAfterLanding, 'a press in the air is spent, not banked for the landing');
check(!jump.stumbled.airborne, 'a rider who is down cannot jump');
check(!jump.click.airborne, 'a mouse click on the canvas is not a jump');

console.log(fails ? `SPEED/JUMP FAILED (${fails})` : 'SPEED/JUMP OK');
await browser.close(); await server.close(); process.exit(fails ? 1 : 0);
