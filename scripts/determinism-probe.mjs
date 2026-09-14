// Determinism under adversarial riding: a ghost player on extreme pace
// scripts — flat out at the physics ceiling, a crawl, a long stop just
// short of the line — in the race and combined formats, several draws
// each. Every run must cross in the planned position, show the drawn
// placing, pay the drawn payout, and settle a sheet ranked in the drawn
// order. Also reports the largest single-tick bot jump (the visible cost
// of a floor clamp) so snaps stay small.
import { chromium } from 'playwright';
import { preview } from 'vite';
const port = 4371;
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 480, height: 320 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

const SCRIPTS = {
  flatout: (s) => 46,
  crawl: (s) => 11,
  stopLate: (s) => (s > 1690 && s < 1700 ? 0 : 27),
  stopLateThenSprint: (s) => (s > 1650 && s < 1660 ? 0 : s > 1660 ? 46 : 22),
};
const formats = (process.env.FORMATS || 'race,combined').split(',');
const scripts = (process.env.SCRIPTS || Object.keys(SCRIPTS).join(',')).split(',');
const draws = Number(process.env.DRAWS || 2);
let fails = 0;

for (const format of formats) {
  for (const name of scripts) {
    for (let k = 0; k < draws; k++) {
      await page.goto(`http://localhost:${port}/?event=utah&format=${format}`);
      await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
      const before = await page.evaluate(() => JSON.parse(localStorage.getItem('freshpow_save_v1'))?.balance ?? 1000);
      await page.evaluate(() => document.querySelector('#start-btn').click());
      await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
      const res = await page.evaluate(async ([fn, style]) => {
        const r = window.__fp.race;
        const P = r.player;
        const t = r.terrain;
        const L = t.length;
        const want = new Function('s', `return (${fn})(s)`);
        let stopT = 0;
        P.update = (dt) => {
          if (P.finished) return;
          const s = P.progress;
          let w = want(s);
          if (w === 0) { stopT += dt; if (stopT > 20) w = 27; } // a stop lasts 20 s, then on
          P.speed += (w - P.speed) * Math.min(1, dt * (w < P.speed ? 4 : 2));
          const ns = s + P.speed * dt;
          const x = t.centerAt(ns);
          P.pos.set(x, t.groundAt(x, -ns), -ns);
          P.airborne = false;
          if (style && ns > L * 0.4) P.style = style;
          P._sync(dt);
        };
        // fixed ticks, and the biggest jump any bot makes in one tick
        let maxJump = 0;
        let jumpWho = '';
        const prevD = r.bots.map((b) => b.d);
        const orig = r.update.bind(r);
        const t0 = performance.now();
        while (!document.querySelector('#results') && performance.now() - t0 < 240000) {
          for (let i = 0; i < 10; i++) {
            orig(0.05);
            r.bots.forEach((b, j) => {
              const j1 = b.d - prevD[j];
              if (j1 > maxJump) { maxJump = j1; jumpWho = `${b.identity.name}@${Math.round(b.d)}`; }
              prevD[j] = b.d;
            });
          }
          await new Promise((k) => requestAnimationFrame(k));
        }
        await new Promise((k) => setTimeout(k, 300));
        const rows = [...document.querySelectorAll('.standings li')].map((li) => li.textContent.replace(/\s+/g, ' ').trim());
        // the total per row (the combined breakdown sits in a <small> before it)
        const totals = [...document.querySelectorAll('.standings li')].map((li) => Number(li.querySelector('.sc')?.lastChild?.textContent.replace(/,/g, '') ?? NaN));
        return {
          drawn: r.outcome.playerPos, payout: r.outcome.payout, bet: r.outcome.bet,
          planned: r.playerCross, crossed: r.finishOrder.findIndex((f) => f.me) + 1,
          crossing: r.finishOrder.map((f) => (f.me ? 'You' : `${f.name}(${r.bots.find((b) => b.identity.name === f.name).rank})`)),
          bigPos: document.querySelector('.big-pos')?.textContent, rows, totals,
          balance: JSON.parse(localStorage.getItem('freshpow_save_v1'))?.balance,
          maxJump: +maxJump.toFixed(1), jumpWho, style: P.style, time: +(r.playerClock ?? 0).toFixed(1),
        };
      }, [SCRIPTS[name].toString(), format === 'combined' && k % 2 ? 1200 : 0]);
      const totals = res.totals;
      const ordered = format === 'race' ? true : totals.every((v, i) => i === 0 || totals[i - 1] > v);
      const crossOrderOk = res.crossing.filter((c) => c !== 'You').map((c) => Number(c.match(/\((\d)\)/)[1])).every((r, i, a) => i === 0 || a[i - 1] < r);
      const ok = res.crossed === res.planned && res.bigPos.startsWith(String(res.drawn)) && ordered && crossOrderOk
        && Math.abs(res.balance - (before - res.bet + res.payout)) < 0.01;
      if (!ok) fails++;
      console.log(`${ok ? 'OK  ' : 'FAIL'} ${format}/${name}#${k}: drawn ${res.drawn} planned ${res.planned} crossed ${res.crossed} shown ${res.bigPos} time ${res.time}s style ${res.style} maxJump ${res.maxJump} m (${res.jumpWho}) | ${res.crossing.join(' ')}${format === 'combined' ? ` | ${res.rows.join(' | ')}` : ''}`);
    }
  }
}
console.log(fails ? `DETERMINISM FAILED (${fails})` : 'DETERMINISM OK');
await browser.close(); await server.close(); process.exit(fails ? 1 : 0);
