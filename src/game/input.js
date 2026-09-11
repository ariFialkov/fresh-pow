// Unified input for mobile (quad-directional swipe/pull) and desktop (WASD/arrows).
//
// Continuous state (read every frame):
//   steer  -1..1   (A/D, or horizontal pull from the touch anchor)
//   brake  bool    (hold S, or pull down and hold)
//   tuck   bool    (hold W, or pull up and hold)
// Discrete events (for tricks while airborne):
//   onSwipe(dir)   dir in 'left' | 'right' | 'up' | 'down'
// Timing helpers:
//   lastTuckRelease  performance.now() ms of the last moment tuck was let go
//                    (used for the "release at the lip for max pop" mechanic)

const SWIPE_DIST = 46; // px of fast movement that counts as a trick swipe
const HOLD_DIST_Y = 52; // px of sustained pull that engages tuck/brake
const STEER_RANGE = 75; // px of horizontal pull for full steering lock

export class Input {
  constructor(target) {
    this.steer = 0;
    this.brake = false;
    this.tuck = false;
    this.lastTuckRelease = -1e9;
    this.onSwipe = null;

    this._keys = new Set();
    this._touch = null; // { id, ax, ay, sx, sy, st } anchor + swipe segment origin

    this._onKeyDown = (e) => this._keyDown(e);
    this._onKeyUp = (e) => this._keyUp(e);
    this._onPointerDown = (e) => this._pointerDown(e);
    this._onPointerMove = (e) => this._pointerMove(e);
    this._onPointerUp = (e) => this._pointerUp(e);

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    target.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    window.addEventListener('pointercancel', this._onPointerUp);
    // a key held while the window loses focus never sends its keyup — drop
    // the held set so it can't stay stuck (and block that key's next press
    // from counting as a fresh trick swipe)
    this._onBlur = () => {
      this._keys.clear();
      this._applyKeys();
    };
    window.addEventListener('blur', this._onBlur);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('pointercancel', this._onPointerUp);
  }

  // ---------- keyboard ----------
  _keyDown(e) {
    const k = e.key.toLowerCase();
    if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
      e.preventDefault();
      if (!this._keys.has(k)) {
        // fresh press doubles as a trick swipe while airborne
        const dir = { w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right' }[k];
        if (dir && this.onSwipe) this.onSwipe(dir);
      }
      this._keys.add(k);
      this._applyKeys();
    }
  }

  _keyUp(e) {
    const k = e.key.toLowerCase();
    if (this._keys.delete(k)) this._applyKeys();
  }

  _applyKeys() {
    const has = (...ks) => ks.some((k) => this._keys.has(k));
    const left = has('a', 'arrowleft');
    const right = has('d', 'arrowright');
    this._kbSteer = (right ? 1 : 0) - (left ? 1 : 0);
    const wasTuck = this.tuck;
    this.tuck = has('w', 'arrowup');
    this.brake = has('s', 'arrowdown');
    if (wasTuck && !this.tuck) this.lastTuckRelease = performance.now();
    if (this._touch === null) this.steer = this._kbSteer;
  }

  // ---------- touch / pointer ----------
  _pointerDown(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (this._touch) return; // single-finger control
    this._touch = { id: e.pointerId, ax: e.clientX, ay: e.clientY, sx: e.clientX, sy: e.clientY, st: performance.now() };
  }

  _pointerMove(e) {
    const t = this._touch;
    if (!t || e.pointerId !== t.id) return;

    // continuous: offset from anchor
    const dx = e.clientX - t.ax;
    const dy = e.clientY - t.ay;
    this.steer = Math.max(-1, Math.min(1, dx / STEER_RANGE));
    const wasTuck = this.tuck;
    this.tuck = dy < -HOLD_DIST_Y;
    this.brake = dy > HOLD_DIST_Y;
    if (wasTuck && !this.tuck) this.lastTuckRelease = performance.now();

    // discrete: fast swipe segments for tricks
    const sdx = e.clientX - t.sx;
    const sdy = e.clientY - t.sy;
    const now = performance.now();
    if (now - t.st < 260 && Math.hypot(sdx, sdy) > SWIPE_DIST) {
      const dir = Math.abs(sdx) > Math.abs(sdy) ? (sdx > 0 ? 'right' : 'left') : (sdy > 0 ? 'down' : 'up');
      if (this.onSwipe) this.onSwipe(dir);
      t.sx = e.clientX;
      t.sy = e.clientY;
      t.st = now;
    } else if (now - t.st >= 260) {
      // stale segment — restart it so a new quick flick can register
      t.sx = e.clientX;
      t.sy = e.clientY;
      t.st = now;
    }
  }

  _pointerUp(e) {
    const t = this._touch;
    if (!t || e.pointerId !== t.id) return;
    this._touch = null;
    if (this.tuck) this.lastTuckRelease = performance.now();
    this.steer = this._kbSteer || 0;
    this.tuck = false;
    this.brake = false;
    this._applyKeys();
  }

  _kbSteer = 0;
}
