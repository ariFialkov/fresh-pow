// All DOM overlays: lobby menu, race HUD, results. One class per screen,
// mounted into the fixed #ui layer.
import { EQUIPMENT, TYPE_LABEL } from './equipment.js';
import { BET_CHIPS, state } from './state.js';
import { topPrize } from './rtp.js';

const ui = () => document.getElementById('ui');

const fmt = (n) => (Math.round(n * 100) / 100).toLocaleString();

// ---------------------------------------------------------------- menu ----
export class MenuHud {
  /**
   * @param {object} cb { onGearChange(gear), onBetChange(bet), onStart() }
   */
  constructor(cb) {
    this.cb = cb;
    this.gearIndex = Math.max(0, EQUIPMENT.findIndex((e) => e.id === state.gearId));
    this.bet = BET_CHIPS.includes(state.bet) ? state.bet : BET_CHIPS[1];
    this.riders = [];

    const el = document.createElement('div');
    el.id = 'menu-ui';
    el.innerHTML = `
      <div class="menu-top">
        <div class="title-block">
          <h1>FRESH <span>POW</span></h1>
          <p>place your chips &middot; drop in</p>
        </div>
        <div class="panel balance-pill"><small>CHIPS</small><span class="amt" id="balance-amt"></span></div>
      </div>
      <div class="panel lobby">
        <h3 id="lobby-status">Finding riders&hellip;</h3>
        <ul id="lobby-list"></ul>
      </div>
      <div class="menu-bottom">
        <div class="panel gear-select">
          <button class="arrow" id="gear-prev" aria-label="previous ride">&#8249;</button>
          <div class="gear-info">
            <div class="gname" id="gear-name"></div>
            <div class="gtype" id="gear-type"></div>
          </div>
          <button class="arrow" id="gear-next" aria-label="next ride">&#8250;</button>
        </div>
        <div class="panel bet-row" id="bet-row"><span class="lbl">Bet</span></div>
        <button id="start-btn" disabled>Waiting&hellip;</button>
        <div class="panel paytable-hint">
          The event draw sets the prize table &mdash; top prizes up to <b>&times;12</b> &nbsp;&middot;&nbsp; 96% RTP
        </div>
      </div>`;
    ui().appendChild(el);
    this.el = el;

    el.querySelector('#gear-prev').addEventListener('click', () => this._cycleGear(-1));
    el.querySelector('#gear-next').addEventListener('click', () => this._cycleGear(1));

    const betRow = el.querySelector('#bet-row');
    for (const chips of BET_CHIPS) {
      const b = document.createElement('button');
      b.className = 'chip';
      b.textContent = chips;
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
    this._refreshBets();
    this.refreshBalance();

    // player is always first into the lobby
    this.addRider({ name: 'You', color: 0xfbbf24, me: true });
  }

  _cycleGear(dir) {
    this.gearIndex = (this.gearIndex + dir + EQUIPMENT.length) % EQUIPMENT.length;
    this._refreshGear(true);
  }

  _refreshGear(notify) {
    const g = EQUIPMENT[this.gearIndex];
    this.el.querySelector('#gear-name').textContent = g.name;
    this.el.querySelector('#gear-type').textContent = TYPE_LABEL[g.type];
    const mine = this.riders.find((r) => r.me);
    if (mine) mine.el.querySelector('.ride').textContent = g.name;
    if (notify) this.cb.onGearChange?.(g);
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
    const hex = `#${color.toString(16).padStart(6, '0')}`;
    li.innerHTML = `<span class="dot" style="background:${hex}"></span>
      <span class="who">${name}${me ? ' (you)' : ''}</span>
      <span class="ride">${gearName ?? ''}</span>`;
    this.el.querySelector('#lobby-list').appendChild(li);
    this.riders.push({ name, me, el: li });
    if (me) this._refreshGear(false);
    const n = this.riders.length;
    this.el.querySelector('#lobby-status').textContent =
      n < 5 ? `Riders ${n}/5 — waiting…` : 'Race ready!';
    if (n >= 5) {
      this._lobbyFull = true;
      this._refreshStart();
    }
  }

  _refreshStart() {
    const canAfford = state.balance >= BET_CHIPS[0];
    const ready = this._lobbyFull && canAfford && this.bet <= state.balance;
    this.startBtn.disabled = !ready;
    this.startBtn.textContent = this._lobbyFull ? (canAfford ? 'Drop In' : 'No chips!') : 'Waiting…';
  }

  get gear() {
    return EQUIPMENT[this.gearIndex];
  }

  destroy() {
    this.el.remove();
  }
}

// ---------------------------------------------------------------- race ----
export class RaceHud {
  constructor(riders /* [{name, color, me}] in lane order */) {
    const el = document.createElement('div');
    el.id = 'race-ui';
    el.innerHTML = `
      <div id="countdown" class="hidden"></div>
      <div class="race-top">
        <div class="panel" id="rank-box"><div class="pos">–</div><div class="of">of 5</div></div>
        <div class="panel" id="speed-box"><div class="spd">0</div><div class="unit">km/h</div></div>
      </div>
      <div class="panel" id="progress-wrap">
        <div id="progress-bar"><div id="progress-fill"></div></div>
        <div class="plabel">to finish</div>
      </div>
      <div class="panel" id="mini-board"></div>
      <div id="trick-toast"></div>
      <div id="stumble-flash"></div>
      <div class="controls-hint" id="controls-hint"></div>`;
    ui().appendChild(el);
    this.el = el;
    this.riders = riders;

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

  update({ rank, speed, progress, board }) {
    const sfx = ['st', 'nd', 'rd', 'th', 'th'][rank - 1] || 'th';
    this.el.querySelector('#rank-box .pos').innerHTML = `${rank}<small>${sfx}</small>`;
    this.el.querySelector('#speed-box .spd').textContent = Math.round(speed * 3.6);
    this.el.querySelector('#progress-fill').style.width = `${Math.min(100, progress * 100).toFixed(1)}%`;
    if (board) {
      this.el.querySelector('#mini-board').innerHTML = board
        .map(
          (r) => `<div class="row${r.me ? ' me' : ''}">
            <span class="dot" style="background:#${r.color.toString(16).padStart(6, '0')}"></span>
            <span class="nm">${r.name}</span>${r.done ? '🏁' : ''}</div>`
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

// -------------------------------------------------------- event roller ----

/**
 * Slot-machine draw for tonight's event: cycles venue cards fast, decelerates
 * over ~2 s, locks onto the chosen event with its prize table, then continues.
 */
export function showEventRoller(events, chosen, onDone) {
  const el = document.createElement('div');
  el.id = 'event-roller';
  el.innerHTML = `
    <div class="ev-card${topPrize(chosen) >= 6 ? ' ev-hype' : ''}">
      <div class="ev-kicker">Tonight's Event</div>
      <div class="ev-window" id="ev-window"></div>
      <div class="ev-detail" id="ev-detail"></div>
    </div>`;
  ui().appendChild(el);

  const win = el.querySelector('#ev-window');
  const detail = el.querySelector('#ev-detail');
  const card = el.querySelector('.ev-card');

  const renderTicket = (ev) => `
    <div class="ev-flag">${ev.flag}</div>
    <div class="ev-name">${ev.name}</div>
    <div class="ev-place">${ev.place}</div>
    <div class="ev-top">TOP PRIZE <b>&times;${topPrize(ev)}</b></div>`;

  // spin: ease out from 70 ms ticks to a stop on the chosen event
  const reel = [...events].sort(() => Math.random() - 0.5);
  let i = 0;
  let delay = 70;
  const spin = () => {
    win.innerHTML = renderTicket(reel[i % reel.length]);
    i++;
    delay *= 1.16;
    if (delay < 330) {
      setTimeout(spin, delay);
    } else {
      // lock it in
      win.innerHTML = renderTicket(chosen);
      card.classList.add('ev-locked');
      detail.innerHTML = `
        <div class="ev-tag">${chosen.tag}</div>
        <div class="ev-table">
          ${chosen.table
            .map((r) => `<span class="ev-cell"><i>${r.pos}${['st', 'nd', 'rd', 'th', 'th'][r.pos - 1]}</i><b>&times;${r.mult}</b></span>`)
            .join('')}
        </div>`;
      setTimeout(() => {
        el.classList.add('ev-out');
        setTimeout(() => {
          el.remove();
          onDone();
        }, 450);
      }, 2100);
    }
  };
  spin();
  return el;
}

// ------------------------------------------------------------- results ----
export function showResults({ event, standings, playerPos, bet, payout, style, onAgain, onLodge }) {
  const el = document.createElement('div');
  el.id = 'results';
  const sfx = ['st', 'nd', 'rd', 'th', 'th'][playerPos - 1];
  const net = payout - bet;
  el.innerHTML = `
    <div class="panel results-card">
      <h2>${event ? `${event.flag} ${event.name}` : 'Race Complete'}</h2>
      ${event ? `<div class="ev-place-line">${event.place}</div>` : ''}
      <div class="big-pos${playerPos <= 2 ? ' win' : ''}">${playerPos}${sfx}</div>
      <div class="payout-line${net < 0 ? ' loss' : ''}">
        Bet ${fmt(bet)} &rarr; paid <b>${fmt(payout)}</b> chips
      </div>
      <div class="style-line">Style points: ${fmt(style)}</div>
      <ul class="standings">
        ${standings
          .map(
            (r) => `<li${r.me ? ' class="me"' : ''}>
              <span class="p">${r.pos}${['st', 'nd', 'rd', 'th', 'th'][r.pos - 1]}</span>
              <span class="dot" style="background:#${r.color.toString(16).padStart(6, '0')}"></span>
              <span class="nm">${r.name}</span>
              ${r.me ? `<span class="mult">&times;${r.mult}</span>` : ''}
            </li>`
          )
          .join('')}
      </ul>
      <div class="results-btns">
        <button id="res-lodge">Back to Lodge</button>
        <button id="res-again" class="primary">Race Again</button>
      </div>
    </div>`;
  ui().appendChild(el);
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
