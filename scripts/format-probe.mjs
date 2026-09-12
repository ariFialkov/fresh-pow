// Race formats check: every format builds its own course, wears its badge,
// and settles a sheet whose totals rank exactly in the drawn order — with
// every bot on zero whenever the player finishes without a trick.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4297, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

const load = async (format) => {
  await page.goto(`http://localhost:4297/?event=vermont&format=${format}`);
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
};

const course = () => page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  return {
    format: r.format.id,
    length: t.length,
    jumps: t.jumps.length, bigJump: t.jumps.some((j) => j.big),
    pipes: t.pipes.map((p) => [Math.round(p.s0), Math.round(p.s1)]),
    glades: t.glades.map((g) => [Math.round(g.s0), Math.round(g.s1), g.side]),
    drops: t.drops.length, bridges: t.bridges.length, ledges: t.ledges.length, logs: t.logs.length,
    animals: r.animals.events.length,
    badge: document.querySelector('#format-box')?.textContent,
    styleBox: getComputedStyle(document.querySelector('#style-box')).display,
    finishS: -r._finishPorts[0].z,
  };
});

// settle the sheet with a given player style and read the results table
const settle = (style) => page.evaluate((style) => {
  const r = window.__fp.race;
  r.player.style = style;
  r.time = 70;
  for (const b of r.bots) { b.finishTime = b.rank < r.outcome.playerPos ? 60 + b.rank * 2 : null; b.d = 400; b.speed = 20; }
  r._finish();
  const rows = [...document.querySelectorAll('#results .standings li')].map((li) => ({
    pos: li.querySelector('.p').textContent,
    name: li.querySelector('.nm').textContent,
    score: li.querySelector('.sc')?.textContent ?? null,
  }));
  const line = document.querySelector('#results .score-line, #results .style-line')?.textContent.trim();
  const fmtLine = document.querySelector('#results .fmt-line')?.textContent.trim();
  return { playerPos: r.outcome.playerPos, rows, line, fmtLine, botStyles: r.bots.map((b) => [b.rank, b.style]) };
}, style);

const ordered = (rows) => rows.every((r, i) => i === 0 || Number(rows[i - 1].score.replace(/,/g, '')) >= Number(r.score.replace(/,/g, '')));

// FMT=bigair,halfpipe narrows the run to the formats named
const list = process.env.FMT ? process.env.FMT.split(',') : ['race', 'combined', 'glade', 'bigair', 'halfpipe'];
for (const f of list) {
  await load(f);
  console.log(`\n=== ${f} ===`);
  console.log('course:', JSON.stringify(await course()));
  if (f === 'bigair') {
    // send it: run in at the table and measure the flight
    const air = await page.evaluate(async () => {
      const r = window.__fp.race;
      const t = r.terrain;
      const j = t.jumps[0];
      const P = r.player;
      P.pos.set(j.x, t.groundAt(j.x, -(j.s - 60)), -(j.s - 60));
      P.speed = 24; P.airborne = false; P.yaw = P.travelYaw = 0;
      const rec = { launched: false, maxH: 0, landS: null, vy: 0, launchS: null, launchSpeed: 0, airT: 0, maxAboveLaunch: 0, trace: [] };
      const orig = r.update.bind(r);
      let wasAir = false;
      let launchY = 0;
      r.update = (dt) => {
        orig(dt);
        if (!P.airborne) P.yaw = P.travelYaw = 0;
        if (P.airborne && !wasAir) { rec.launched = true; rec.vy = +P.vy.toFixed(1); rec.launchS = +(P.progress - j.s).toFixed(1); rec.launchSpeed = +P.speed.toFixed(1); launchY = P.pos.y; }
        if (P.airborne) {
          rec.airT += dt;
          rec.maxH = Math.max(rec.maxH, P.pos.y - t.heightAt(P.pos.x, P.pos.z));
          rec.maxAboveLaunch = Math.max(rec.maxAboveLaunch, P.pos.y - launchY);
          if (rec.trace.length < 40) rec.trace.push([+(P.progress - j.s).toFixed(0), +(P.pos.y - t.heightAt(P.pos.x, P.pos.z)).toFixed(1), +P.vy.toFixed(1)]);
        }
        if (!P.airborne && wasAir && rec.landS == null) rec.landS = +(P.progress - j.s).toFixed(1);
        wasAir = P.airborne;
      };
      const t0 = performance.now();
      while (performance.now() - t0 < 60000 && P.progress < j.s + 260 && rec.landS == null) await new Promise((k) => requestAnimationFrame(k));
      rec.airT = +rec.airT.toFixed(2);
      rec.maxAboveLaunch = +rec.maxAboveLaunch.toFixed(1);
      r.update = orig;
      rec.maxH = +rec.maxH.toFixed(1);
      return rec;
    });
    console.log('big air flight:', JSON.stringify(air));
  }
  const s1 = await settle(f === 'race' ? 0 : 420);
  console.log('settled(420):', JSON.stringify({ playerPos: s1.playerPos, line: s1.line, fmtLine: s1.fmtLine, rows: s1.rows, ordered: s1.rows[0].score == null || ordered(s1.rows) }));
  if (f !== 'race' && f !== 'glade') {
    await load(f);
    const s0 = await settle(0);
    console.log('settled(0):  ', JSON.stringify({ playerPos: s0.playerPos, line: s0.line, botStyles: s0.botStyles, rows: s0.rows }));
  }
}
await browser.close(); await server.close(); process.exit(0);
