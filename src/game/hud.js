// All DOM overlays: lodge menu + pro shop, race HUD, event roller, results.
// One class or function per screen, mounted into the fixed #ui layer.
import { EQUIPMENT, TYPE_LABEL } from './equipment.js';
import { BET_CHIPS, state, save } from './state.js';
import { topPrize } from './rtp.js';
import { fmtTime } from './formats.js';
import { OUTFITS, outfitById, owns, buy, priceOf, SHOP_TABS, shelf } from './wardrobe.js';
import { RIDE_ICON, FORMAT_ICON, CUP_CREST, CHIP_ICON, LOCK_ICON, CHECK_ICON, SHOP_ICON } from './icons.js';
import { itemArt, releaseItemArt } from './itemArt.js';

const ui = () => document.getElementById('ui');

const fmt = (n) => (Math.round(n * 100) / 100).toLocaleString();
const hex = (c) => `#${c.toString(16).padStart(6, '0')}`;
const ORD = ['st', 'nd', 'rd', 'th', 'th'];
const podium = (pos) => (pos === 1 ? 'p1' : pos === 2 ? 'p2' : pos === 3 ? 'p3' : 'pn');
const SPONSORS = ['POWDR', 'ALPINEX', 'FROSTBITE', 'YETI OIL', 'GLACIÈRE'];

// ---------------------------------------------------------------- menu ----
export class MenuHud {
  /**
   * @param {object} cb { onGearChange(gear), onOutfitChange(outfit), onBetChange(bet), onStart() }
   */
  constructor(cb) {
    this.cb = cb;
    this.gear = EQUIPMENT.find((e) => e.id === state.gearId) ?? EQUIPMENT[0];
    this.outfit = outfitById(state.outfitId);
    this.type = this.gear.type;
    this.bet = BET_CHIPS.includes(state.bet) ? state.bet : BET_CHIPS[1];
    this.riders = [];

    const el = document.createElement('div');
    el.id = 'menu-ui';
    el.innerHTML = `
      <div class="menu-top">
        <div class="title-block">
          <h1><span class="crest">${CUP_CREST}</span>FRESH <span>POW</span></h1>
          <p>place your chips &middot; drop in</p>
        </div>
        <div class="top-right">
          <div class="panel balance-pill">${CHIP_ICON}<span class="amt" id="balance-amt"></span><small>chips</small></div>
          <button id="shop-btn" class="pill-btn">${SHOP_ICON} Pro Shop</button>
        </div>
      </div>
      <div class="panel lobby">
        <h3 id="lobby-status">Finding riders&hellip;</h3>
        <ul id="lobby-list"></ul>
      </div>
      <div class="menu-bottom">
        <div class="panel customize">
          <div class="cust-row">
            <div class="type-tabs" id="type-tabs">
              ${['ski', 'board', 'sled'].map((t) => `<button class="ttab" data-type="${t}" title="${TYPE_LABEL[t]}">${RIDE_ICON[t]}</button>`).join('')}
            </div>
            <button class="arrow" id="gear-prev" aria-label="previous ride">&#8249;</button>
            <div class="cust-value">
              <div class="cname" id="gear-name"></div>
              <div class="csub" id="gear-sub"></div>
            </div>
            <button class="arrow" id="gear-next" aria-label="next ride">&#8250;</button>
          </div>
          <div class="cust-row">
            <div class="cust-label">Outfit</div>
            <button class="arrow" id="fit-prev" aria-label="previous outfit">&#8249;</button>
            <div class="cust-value">
              <div class="cname" id="fit-name"></div>
              <div class="csub" id="fit-sub"></div>
            </div>
            <button class="arrow" id="fit-next" aria-label="next outfit">&#8250;</button>
          </div>
        </div>
        <div class="panel bet-row" id="bet-row"><span class="lbl">Bet</span></div>
        <button id="start-btn" disabled>Waiting&hellip;</button>
        <div class="paytable-hint">
          Five formats, nine venues &mdash; top prizes up to <b>&times;12</b> &nbsp;&middot;&nbsp; 96% RTP
        </div>
      </div>`;
    ui().appendChild(el);
    this.el = el;

    el.querySelector('#gear-prev').addEventListener('click', () => this._cycleGear(-1));
    el.querySelector('#gear-next').addEventListener('click', () => this._cycleGear(1));
    el.querySelector('#fit-prev').addEventListener('click', () => this._cycleFit(-1));
    el.querySelector('#fit-next').addEventListener('click', () => this._cycleFit(1));
    for (const b of el.querySelectorAll('.ttab')) {
      b.addEventListener('click', () => this._pickType(b.dataset.type));
    }
    el.querySelector('#shop-btn').addEventListener('click', () => {
      openShop({
        onEquip: () => {
          this.gear = EQUIPMENT.find((e) => e.id === state.gearId) ?? this.gear;
          this.outfit = outfitById(state.outfitId);
          this.type = this.gear.type;
          this._refreshGear(true);
          this._refreshFit(true);
          this.refreshBalance();
        },
        onClose: () => this.refreshBalance(),
      });
    });

    const betRow = el.querySelector('#bet-row');
    for (const chips of BET_CHIPS) {
      const b = document.createElement('button');
      b.className = 'chip';
      b.innerHTML = `<i>${chips}</i>`;
      b.dataset.v = chips;
      b.addEventListener('click', () => {
        this.bet = chips;
        state.bet = chips;
        this._refreshBets();
        this.cb.onBetChange?.(chips);
      });
      betRow.appendChild(b);
    }

    this.startBtn = el.querySelector('#start-btn');
    this.startBtn.addEventListener('click', () => this.cb.onStart?.());

    this._lobbyFull = false;
    this._refreshGear(false);
    this._refreshFit(false);
    this._refreshBets();
    this.refreshBalance();

    // player is always first into the lobby
    this.addRider({ name: 'You', color: 0xfbbf24, me: true });
  }

  _ridesOfType() {
    return EQUIPMENT.filter((e) => e.type === this.type);
  }

  _pickType(type) {
    if (type === this.type) return;
    this.type = type;
    const rides = this._ridesOfType();
    this.gear = rides.find((r) => owns(r.id)) ?? rides[0];
    this._refreshGear(true);
  }

  _cycleGear(dir) {
    const rides = this._ridesOfType();
    const i = Math.max(0, rides.indexOf(this.gear));
    this.gear = rides[(i + dir + rides.length) % rides.length];
    this._refreshGear(true);
  }

  _cycleFit(dir) {
    const i = Math.max(0, OUTFITS.indexOf(this.outfit));
    this.outfit = OUTFITS[(i + dir + OUTFITS.length) % OUTFITS.length];
    this._refreshFit(true);
  }

  _lockLine(id) {
    const price = priceOf(id);
    return `<span class="lock">${LOCK_ICON} ${fmt(price)} chips</span><button class="buy-inline" data-buy="${id}">Buy</button>`;
  }

  _refreshGear(notify) {
    const g = this.gear;
    for (const b of this.el.querySelectorAll('.ttab')) b.classList.toggle('sel', b.dataset.type === this.type);
    this.el.querySelector('#gear-name').textContent = g.name;
    const sub = this.el.querySelector('#gear-sub');
    sub.innerHTML = owns(g.id) ? `${TYPE_LABEL[g.type]}` : this._lockLine(g.id);
    sub.querySelector('[data-buy]')?.addEventListener('click', () => this._buy(g.id));
    const mine = this.riders.find((r) => r.me);
    if (mine) mine.el.querySelector('.ride').textContent = g.name;
    if (notify) this.cb.onGearChange?.(g);
    this._refreshStart();
  }

  _refreshFit(notify) {
    const o = this.outfit;
    this.el.querySelector('#fit-name').textContent = o.name;
    const sub = this.el.querySelector('#fit-sub');
    sub.innerHTML = owns(o.id) ? o.tag : this._lockLine(o.id);
    sub.querySelector('[data-buy]')?.addEventListener('click', () => this._buy(o.id));
    if (notify) this.cb.onOutfitChange?.(o);
    this._refreshStart();
  }

  _buy(id) {
    if (!buy(id)) {
      this.el.querySelector('#balance-amt').classList.add('shake');
      setTimeout(() => this.el.querySelector('#balance-amt')?.classList.remove('shake'), 500);
      return;
    }
    this.refreshBalance();
    this._refreshGear(true);
    this._refreshFit(true);
  }

  _refreshBets() {
    for (const b of this.el.querySelectorAll('.chip')) {
      const v = Number(b.dataset.v);
      b.classList.toggle('sel', v === this.bet);
      b.disabled = v > state.balance;
    }
    if (this.bet > state.balance) {
      const affordable = BET_CHIPS.filter((c) => c <= state.balance);
      if (affordable.length) {
        this.bet = affordable[affordable.length - 1];
        state.bet = this.bet;
        this._refreshBets();
        return;
      }
    }
    this._refreshStart();
  }

  refreshBalance() {
    this.el.querySelector('#balance-amt').textContent = fmt(state.balance);
    this._refreshBets();
  }

  addRider({ name, color, me = false, gearName = null }) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="dot" style="background:${hex(color)}"></span>
      <span class="who">${name}${me ? ' (you)' : ''}</span>
      <span class="ride">${gearName ?? ''}</span>`;
    this.el.querySelector('#lobby-list').appendChild(li);
    this.riders.push({ name, me, el: li });
    if (me) this._refreshGear(false);
    const n = this.riders.length;
    this.el.querySelector('#lobby-status').textContent = n < 5 ? `Riders ${n}/5 — waiting…` : 'Field set — race ready';
    if (n >= 5) {
      this._lobbyFull = true;
      this._refreshStart();
    }
  }

  _refreshStart() {
    const canAfford = state.balance >= BET_CHIPS[0];
    const locked = !owns(this.gear.id) || !owns(this.outfit.id);
    const ready = this._lobbyFull && canAfford && this.bet <= state.balance && !locked;
    this.startBtn.disabled = !ready;
    this.startBtn.textContent = !this._lobbyFull ? 'Waiting…' : !canAfford ? 'No chips!' : locked ? 'Buy to ride' : 'Drop In';
  }

  destroy() {
    this.el.remove();
    document.getElementById('shop')?.remove();
  }
}

// ------------------------------------------------------------ pro shop ----
/** The pro shop overlay: rides and outfits by shelf, bought with chips. */
export function openShop({ onEquip, onClose }) {
  document.getElementById('shop')?.remove();
  const el = document.createElement('div');
  el.id = 'shop';
  el.innerHTML = `
    <div class="panel shop-card">
      <div class="shop-head">
        <div class="shop-title">${SHOP_ICON} <b>Pro Shop</b></div>
        <div class="shop-bal">${CHIP_ICON}<span id="shop-bal"></span></div>
        <button class="shop-close" id="shop-close" aria-label="close">&times;</button>
      </div>
      <div class="shop-tabs" id="shop-tabs">
        ${SHOP_TABS.map((t) => `<button class="stab" data-tab="${t.id}">${RIDE_ICON[t.id] ?? ''}${t.label}</button>`).join('')}
      </div>
      <div class="shop-grid" id="shop-grid"></div>
    </div>`;
  ui().appendChild(el);
  let tab = 'featured';
  const bal = () => (el.querySelector('#shop-bal').textContent = fmt(state.balance));
  const render = () => {
    for (const b of el.querySelectorAll('.stab')) b.classList.toggle('sel', b.dataset.tab === tab);
    const grid = el.querySelector('#shop-grid');
    grid.innerHTML = shelf(tab)
      .map((it) => {
        const owned = owns(it.id);
        const equipped = it.kind === 'ride' ? state.gearId === it.id : state.outfitId === it.id;
        const swatch = it.colors.map((c) => `<i style="background:${hex(c)}"></i>`).join('');
        const btn = equipped
          ? `<button class="item-btn equipped" disabled>${CHECK_ICON} Equipped</button>`
          : owned
            ? `<button class="item-btn" data-equip="${it.id}">Equip</button>`
            : `<button class="item-btn buy" data-buy="${it.id}"${state.balance < it.price ? ' disabled' : ''}>${CHIP_ICON} ${fmt(it.price)}</button>`;
        return `<div class="item-card${equipped ? ' on' : ''}">
          <div class="item-art ${it.kind}"><img src="${itemArt(it)}" alt=""><span class="swatch">${swatch}</span></div>
          <div class="item-name">${it.name}</div>
          <div class="item-tag">${it.tag}</div>
          ${btn}
        </div>`;
      })
      .join('');
    for (const b of grid.querySelectorAll('[data-buy]')) {
      b.addEventListener('click', () => {
        if (buy(b.dataset.buy)) {
          bal();
          render();
        }
      });
    }
    for (const b of grid.querySelectorAll('[data-equip]')) {
      b.addEventListener('click', () => {
        const id = b.dataset.equip;
        if (id.startsWith('fit-')) state.outfitId = id;
        else state.gearId = id;
        save();
        onEquip?.();
        render();
      });
    }
  };
  for (const b of el.querySelectorAll('.stab')) {
    b.addEventListener('click', () => {
      tab = b.dataset.tab;
      render();
    });
  }
  el.querySelector('#shop-close').addEventListener('click', () => {
    el.remove();
    releaseItemArt();
    onClose?.();
  });
  bal();
  render();
  return el;
}

// ---------------------------------------------------------------- race ----
export class RaceHud {
  /** @param {object} format tonight's format (formats.js) — sets the badge and the judged readouts */
  constructor(format) {
    this.format = format;
    const judged = format && format.scored !== 'time';
    const solo = !!(format && format.solo);
    const el = document.createElement('div');
    el.id = 'race-ui';
    el.innerHTML = `
      <div id="countdown" class="hidden"></div>
      <div class="race-top">
        <div class="hud-l">
          <div class="panel" id="rank-box">${solo ? '<div class="pos solo">SOLO</div><div class="of">run</div>' : '<div class="pos">–</div><div class="of">of 5</div>'}</div>
          <div class="panel" id="format-box">${format ? FORMAT_ICON[format.id] ?? '' : ''}${format ? format.short : 'RACE'}</div>
          <div class="panel" id="clock-box"${format && format.scored === 'style' ? ' style="display:none"' : ''}><div class="clk">0:00.00</div><div class="unit">time</div></div>
          <div class="panel" id="mini-board"${solo ? ' style="display:none"' : ''}></div>
        </div>
        <div class="hud-r">
          <div class="panel" id="speed-box"><div class="spd">0</div><div class="unit">km/h</div></div>
          <div class="panel" id="style-box"${judged ? '' : ' style="display:none"'}><div class="sty">0</div><div class="unit">style</div></div>
        </div>
      </div>
      <div class="panel" id="progress-wrap">
        <div id="progress-bar"><div id="progress-fill"></div></div>
        <div class="plabel">to finish</div>
      </div>
      <div id="trick-toast"></div>
      <div id="stumble-flash"></div>
      <div class="controls-hint" id="controls-hint"></div>`;
    ui().appendChild(el);
    this.el = el;

    const touch = matchMedia('(pointer: coarse)').matches;
    el.querySelector('#controls-hint').textContent = touch
      ? 'pull ⬅➡ carve · pull ⬆ + hold tuck · pull ⬇ + hold brake · swipe in air for tricks'
      : 'A/D carve · hold W tuck · hold S brake · tap WASD in air for tricks';
    setTimeout(() => {
      const h = el.querySelector('#controls-hint');
      if (h) h.style.opacity = '0';
    }, 9000);

    this._toastTimer = null;
  }

  countdown(text) {
    const c = this.el.querySelector('#countdown');
    c.classList.remove('hidden');
    c.textContent = text;
    // retrigger the pop animation
    c.style.animation = 'none';
    void c.offsetWidth;
    c.style.animation = '';
    if (text === '') c.classList.add('hidden');
  }

  update({ rank, speed, progress, board, style = 0, solo = false, clock = 0 }) {
    this.el.querySelector('#clock-box .clk').textContent = fmtTime(Math.max(0, clock));
    const sfx = ORD[rank - 1] || 'th';
    if (!solo) this.el.querySelector('#rank-box .pos').innerHTML = `${rank}<small>${sfx}</small>`;
    this.el.querySelector('#speed-box .spd').textContent = Math.round(speed * 3.6);
    this.el.querySelector('#style-box .sty').textContent = Math.round(style);
    this.el.querySelector('#progress-fill').style.width = `${Math.min(100, progress * 100).toFixed(1)}%`;
    if (board) {
      const judged = this.format && this.format.scored !== 'time';
      this.el.querySelector('#mini-board').innerHTML = board
        .map(
          (r) => `<div class="row${r.me ? ' me' : ''}">
            <span class="dot" style="background:${hex(r.color)}"></span>
            <span class="nm">${r.name}</span>${judged && r.pts != null ? `<span class="pts">${Math.round(r.pts)}</span>` : ''}${r.done ? '🏁' : ''}</div>`
        )
        .join('');
    }
  }

  trickToast(main, sub = '') {
    const t = this.el.querySelector('#trick-toast');
    t.innerHTML = `${main}${sub ? `<small>${sub}</small>` : ''}`;
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 1400);
  }

  stumbleFlash(reason) {
    const f = this.el.querySelector('#stumble-flash');
    f.classList.add('show');
    this.trickToast('OOF!', reason);
    setTimeout(() => f.classList.remove('show'), 500);
  }

  destroy() {
    clearTimeout(this._toastTimer);
    this.el.remove();
  }
}

// ------------------------------------------------------ shared markup ----
const cupHead = (kicker) => `
  <div class="cup-head">
    <span class="cup-crest">${CUP_CREST}</span>
    <span class="cup-name">Fresh Pow <b>Cup</b></span>
    <span class="cup-kicker">${kicker}</span>
  </div>`;

const sponsorRow = () => `<div class="sponsors">${SPONSORS.map((s) => `<span>${s}</span>`).join('')}</div>`;

/** Venue ticket: the course art with the flag, place, name and prize overlaid. */
const ticket = (ev) => `
  <div class="ev-shot" style="background-image:url('events/${ev.id}.jpg')">
    <div class="ev-shot-fade"></div>
    <div class="ev-flag">${ev.nation ?? ev.flag} <span>${ev.place}</span></div>
    ${topPrize(ev) >= 6 ? '<div class="ev-ribbon">Major</div>' : ''}
    <div class="ev-shot-foot">
      <div class="ev-name">${ev.name}</div>
      <div class="ev-top">Top prize <b>&times;${topPrize(ev)}</b></div>
    </div>
  </div>`;

const prizeTable = (ev) => `
  <div class="ev-table">
    ${ev.table
      .map((r) => `<span class="ev-cell ${podium(r.pos)}"><i>${r.pos}${ORD[r.pos - 1]}</i><b>&times;${r.mult}</b></span>`)
      .join('')}
  </div>`;

const statChips = (format) => `
  <div class="stat-chips">
    <span><i>Course</i><b>${format.length.toLocaleString()} m</b></span>
    <span><i>Vert</i><b>${Math.round(format.length * 0.5).toLocaleString()} m</b></span>
    <span><i>Field</i><b>5</b></span>
    <span><i>Scored on</i><b>${format.scored === 'time' ? 'Time' : format.scored === 'both' ? 'Time + Style' : 'Style'}</b></span>
  </div>`;

const formatLine = (format, cls = '') => `
  <div class="ev-format ${cls}">
    <span class="fmt-ico">${FORMAT_ICON[format.id] ?? ''}</span>
    <span class="fmt-name">${format.name}</span>
    <span class="fmt-tag">${format.tag}</span>
  </div>`;

// -------------------------------------------------------- event roller ----

/**
 * Slot-machine draw for tonight's event: cycles venue cards fast, decelerates
 * over ~2 s, locks onto the chosen event with its prize table, spins the
 * format reel, then continues.
 */
export function showEventRoller(events, chosen, formats, format, onDone) {
  const el = document.createElement('div');
  el.id = 'event-roller';
  el.innerHTML = `
    <div class="ev-card${topPrize(chosen) >= 6 ? ' ev-hype' : ''}">
      ${cupHead("Tonight's event")}
      <div class="ev-window" id="ev-window"></div>
      <div class="ev-detail" id="ev-detail"></div>
      ${sponsorRow()}
    </div>`;
  ui().appendChild(el);

  const win = el.querySelector('#ev-window');
  const detail = el.querySelector('#ev-detail');
  const card = el.querySelector('.ev-card');

  // venue action shots as card art; preload so the reel never flickers blank
  for (const ev of events) {
    const img = new Image();
    img.src = `events/${ev.id}.jpg`;
  }

  // spin: ease out from 70 ms ticks to a stop on the chosen event
  const reel = [...events].sort(() => Math.random() - 0.5);
  let i = 0;
  let delay = 70;
  const spin = () => {
    win.innerHTML = ticket(reel[i % reel.length]);
    i++;
    delay *= 1.16;
    if (delay < 330) {
      setTimeout(spin, delay);
    } else {
      // lock it in
      win.innerHTML = ticket(chosen);
      card.classList.add('ev-locked');
      detail.innerHTML = `<div class="ev-tag">${chosen.tag}</div>${prizeTable(chosen)}`;
      // second reel: the format, spun quickly and locked in under the venue
      const fmtEl = document.createElement('div');
      fmtEl.className = 'ev-format-slot';
      detail.appendChild(fmtEl);
      const fr = [...formats].sort(() => Math.random() - 0.5);
      let fi = 0;
      let fd = 60;
      const fspin = () => {
        fmtEl.innerHTML = formatLine(fr[fi % fr.length]);
        fi++;
        fd *= 1.22;
        if (fd < 300) setTimeout(fspin, fd);
        else {
          fmtEl.innerHTML = formatLine(format, 'fmt-locked') + statChips(format);
          // hold the locked card, then out — timed from the format lock, so a
          // slow device that stretches the reels still shows the result
          setTimeout(() => {
            el.classList.add('ev-out');
            setTimeout(() => {
              el.remove();
              onDone();
            }, 450);
          }, 2600);
        }
      };
      fspin();
    }
  };
  spin();
  return el;
}

// ------------------------------------------------------------- results ----
export function showResults({ event, format, standings, playerPos, bet, payout, style, reveal = false, onAgain, onLodge }) {
  const el = document.createElement('div');
  el.id = 'results';
  const sfx = ORD[playerPos - 1];
  const net = payout - bet;
  const scored = format?.scored ?? 'time';
  const solo = !!format?.solo;
  // what the sheet was judged on
  const mine = standings.find((r) => r.me)?.score;
  let scoreLine = `<div class="score-line">Style points <b>${fmt(style)}</b></div>`;
  if (mine && scored === 'both') {
    scoreLine = `<div class="score-line">Time ${fmt(mine.timePts)} + Style ${fmt(mine.style)} = <b>${fmt(mine.total)}</b></div>`;
  } else if (mine && scored === 'style') {
    scoreLine = `<div class="score-line">Judges' score <b>${fmt(mine.total)}</b>${mine.total <= 0 ? ' — no tricks landed' : ''}</div>`;
  } else if (mine && solo) {
    scoreLine = `<div class="score-line">Your time <b>${fmtTime(mine.time)}</b></div>`;
  }
  // every rider's number: the judged total, the combined breakdown, or the time
  const cell = (r) => {
    if (!r.score) return '';
    if (scored === 'both') return `<span class="sc"><small>${fmt(r.score.timePts)} + ${fmt(r.score.style)}</small>${fmt(r.score.total)}</span>`;
    if (scored === 'style') return `<span class="sc">${fmt(r.score.total)}</span>`;
    if (solo || r.score.time != null) return `<span class="sc">${fmtTime(r.score.time)}</span>`;
    return '';
  };
  // a solo run's sheet is posted one rider at a time, last place first
  const rv = reveal ? ' rv' : '';
  el.innerHTML = `
    <div class="panel results-card${event && topPrize(event) >= 6 ? ' ev-hype' : ''}">
      ${cupHead('Official results')}
      ${event ? ticket(event) : ''}
      ${format ? formatLine(format) : ''}
      <div class="big-pos ${podium(playerPos)}${rv ? ' rv-late' : ''}">${playerPos}<small>${sfx}</small></div>
      <div class="payout-line${net < 0 ? ' loss' : ''}${rv ? ' rv-late' : ''}">
        Bet ${fmt(bet)} &rarr; paid <b>${fmt(payout)}</b> chips
      </div>
      ${scoreLine}
      <ul class="standings">
        ${standings
          .map(
            (r) => `<li class="${r.me ? 'me ' : ''}${podium(r.pos)}${rv}" data-pos="${r.pos}">
              <span class="p">${r.pos}<small>${ORD[r.pos - 1]}</small></span>
              <span class="dot" style="background:${hex(r.color)}"></span>
              <span class="nm">${r.name}</span>
              ${cell(r)}
              ${r.me ? `<span class="mult">&times;${r.mult}</span>` : ''}
            </li>`
          )
          .join('')}
      </ul>
      <div class="results-btns">
        <button id="res-lodge">Back to Lodge</button>
        <button id="res-again" class="primary">Race Again</button>
      </div>
      ${sponsorRow()}
    </div>`;
  ui().appendChild(el);
  if (reveal) {
    // post the sheet from the back of the field to the winner, then the
    // player's placing and the payout
    const rows = [...el.querySelectorAll('.standings li')].sort((a, b) => Number(b.dataset.pos) - Number(a.dataset.pos));
    rows.forEach((li, i) => setTimeout(() => li.classList.add('in'), 500 + i * 750));
    setTimeout(() => el.querySelectorAll('.rv-late').forEach((n) => n.classList.add('in')), 500 + rows.length * 750 + 200);
  }
  el.querySelector('#res-again').addEventListener('click', () => {
    el.remove();
    onAgain();
  });
  el.querySelector('#res-lodge').addEventListener('click', () => {
    el.remove();
    onLodge();
  });
  return el;
}
