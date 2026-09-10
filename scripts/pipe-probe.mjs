// Physics probe: half-pipe lip launch + cliffside ledge wall block.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4194, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

for (let attempt = 0; attempt < 8; attempt++) {
  await page.goto('http://localhost:4194/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  const ok = await page.evaluate(() => {
    const t = window.__fp.race.terrain;
    return !!t.pipes[0] && !!t.ledges[0];
  });
  if (ok) break;
  console.log('reroll: no pipe/ledge');
}

// ---- pipe: ride from center toward a wall, expect a lip launch ----
const pipeRes = await page.evaluate(async () => {
  const r = window.__fp.race;
  const t = r.terrain;
  const p = t.pipes[0];
  const s = (p.s0 + p.s1) / 2 - 15;
  const cx = t.centerAt(s) + p.off;
  const P = r.player;
  P.pos.set(cx, t.heightAt(cx, -s), -s);
  P.speed = 17;
  P.airborne = false;
  P.vy = 0;
  // aim diagonally at the right wall: mostly across, some downhill
  P.yaw = P.travelYaw = Math.atan2(0.9, 0.45);
  const log = [];
  let launched = null;
  await new Promise((res) => {
    const iv = setInterval(() => {
      const pp = t.pipeAt(P.pos.x, -P.pos.z);
      log.push({ q: pp ? +pp.q.toFixed(2) : null, air: P.airborne, vy: +P.vy.toFixed(1), y: +P.pos.y.toFixed(1) });
      if (P.airborne && !launched) launched = { q: pp ? +pp.q.toFixed(2) : null, vy: +P.vy.toFixed(1) };
      if (!P.airborne && !launched) {
        // keep charging the right wall until the lip throws us
        P.yaw = P.travelYaw = Math.atan2(0.92, 0.4);
        P.speed = Math.max(P.speed, 16);
      }
      if (launched && !P.airborne) { clearInterval(iv); res(); } // landed
      if (log.length > 90) { clearInterval(iv); res(); }
    }, 80);
  });
  const land = t.pipeAt(P.pos.x, -P.pos.z);
  return { launched, landQ: land ? +land.q.toFixed(2) : null, frames: log.length, tail: log.slice(-4) };
});
console.log('PIPE:', JSON.stringify(pipeRes));

// ---- ledge: ride into the face from below, expect a hard stop ----
const ledgeRes = await page.evaluate(async () => {
  const r = window.__fp.race;
  const t = r.terrain;
  const L = t.ledges[0];
  const s = (L.s0 + L.s1) / 2;
  const walls = t.ledgeWallsAt(s);
  const w = walls[0];
  const P = r.player;
  const x0 = w.x - w.side * 6;
  P.pos.set(x0, t.heightAt(x0, -s), -s);
  P.speed = 15;
  P.airborne = false;
  P.vy = 0;
  // straight at the wall
  P.yaw = P.travelYaw = Math.atan2(w.side * 1, 0.15);
  let maxUs = -99;
  await new Promise((res) => {
    let n = 0;
    const iv = setInterval(() => {
      const cur = t.ledgeWallsAt(-P.pos.z)[0];
      if (cur) maxUs = Math.max(maxUs, (P.pos.x - cur.x) * cur.side);
      // keep pressing into the wall
      P.yaw = P.travelYaw = Math.atan2(cur ? cur.side : w.side, 0.15);
      P.speed = Math.max(P.speed, 8);
      if (++n > 32) { clearInterval(iv); res(); }
    }, 80);
  });
  return { maxUs: +maxUs.toFixed(2), speed: +P.speed.toFixed(1), air: P.airborne };
});
console.log('LEDGE:', JSON.stringify(ledgeRes));
await browser.close(); await server.close(); process.exit(0);
