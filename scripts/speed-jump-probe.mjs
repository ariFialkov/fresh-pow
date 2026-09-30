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

  // space bar
  flat();
  window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
  window.__step(1);
  out.space = { airborne: P.airborne, ...arc() };

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
    window.__step(1);
    out.tap = { airborne: P.airborne, ...arc() };
    // a HOLD is tuck/brake, not a jump
    flat();
    return tap(0, 90, 400);
  }).then(() => {
    window.__step(1);
    out.hold = { airborne: P.airborne };
    // a SWIPE is a trick, not a jump
    flat();
    return tap(90, 0, 0);
  }).then(() => {
    window.__step(1);
    out.swipe = { airborne: P.airborne };
    // pressed mid-flight: spent, not banked for the landing
    flat();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
    window.__step(1);
    const wasAir = P.airborne;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
    arc();
    window.__step(2);
    out.midair = { poppedFirst: wasAir, airborneAfterLanding: P.airborne };
    // down riders cannot jump
    flat();
    P.stumbleT = 1.0;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space' }));
    window.__step(1);
    out.stumbled = { airborne: P.airborne };
    P.stumbleT = 0;
    // a mouse click is not a tap: on a desktop the jump is the space bar
    flat();
    return tap(0, 0, 0, 'mouse').then(() => {
      window.__step(1);
      out.click = { airborne: P.airborne };
      return out;
    });
  });
});
console.log('     ', JSON.stringify(jump));
check(jump.space.airborne && jump.space.rise > 1.2 && jump.space.hang > 0.8, `SPACE jumps: kick ${jump.space.vy} m/s -> ${jump.space.rise} m up, ${jump.space.hang}s of hang on the level (cost ${jump.space.scrub} m/s of run)`);
check(jump.tap.airborne && jump.tap.rise > 1.2, `single tap jumps: kick ${jump.tap.vy} m/s -> ${jump.tap.rise} m up, ${jump.tap.hang}s of hang`);
check(!jump.hold.airborne, 'a held pull is tuck/brake, not a jump');
check(!jump.swipe.airborne, 'a swipe is a trick, not a jump');
check(!jump.midair.airborneAfterLanding, 'a press in the air is spent, not banked for the landing');
check(!jump.stumbled.airborne, 'a rider who is down cannot jump');
check(!jump.click.airborne, 'a mouse click on the canvas is not a jump');

console.log(fails ? `SPEED/JUMP FAILED (${fails})` : 'SPEED/JUMP OK');
await browser.close(); await server.close(); process.exit(fails ? 1 : 0);
