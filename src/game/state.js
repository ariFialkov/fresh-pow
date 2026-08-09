// Persistent player state (virtual chips only — no real money anywhere).
const KEY = 'freshpow_save_v1';

export const START_BALANCE = 1000;
export const BET_CHIPS = [10, 25, 50, 100, 250];

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (typeof s.balance === 'number' && s.balance >= 0) return s;
    }
  } catch {
    /* corrupted or unavailable storage -> fresh save */
  }
  return { balance: START_BALANCE, gearId: 'board-midnight', bet: 25, name: 'You' };
}

export const state = load();

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* private mode etc. — play on without persistence */
  }
}

/** Broke? The lodge comps you back to a playable stack. */
export function needsTopUp() {
  return state.balance < BET_CHIPS[0];
}

export function topUp() {
  state.balance += 500;
  save();
}
