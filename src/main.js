import * as THREE from 'three';
import './style.css';
import { Input } from './game/input.js';
import { MenuScene, rosterFor } from './game/menu.js';
import { RaceScene } from './game/race.js';
import { randomSeed } from './game/rng.js';
import { needsTopUp, topUp, state } from './game/state.js';
import { Quality } from './game/world.js';
import { EVENTS } from './game/rtp.js';
import { showEventRoller } from './game/hud.js';
import { loadCharacters } from './game/characters.js';
import { loadProps } from './game/props.js';
import { loadAnimals } from './game/animals.js';

const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
app.appendChild(renderer.domElement);

const input = new Input(renderer.domElement);

let current = null;

function setScene(scene) {
  if (current) current.destroy();
  current = scene;
  current.resize(innerWidth, innerHeight);
}

function toMenu() {
  if (needsTopUp()) topUp(); // the lodge comps broke players back in — virtual chips only
  const seed = randomSeed();
  setScene(new MenuScene(seed, (opts) => rollThenRace(opts)));
}

/** Draw tonight's event, run the slot-machine reveal, then drop in. */
const urlq = new URLSearchParams(location.search);
function rollThenRace(opts) {
  const forced = EVENTS.find((e) => e.id === urlq.get('event'));
  const event = forced ?? EVENTS[Math.floor(Math.random() * EVENTS.length)];
  if (forced) startRace({ ...opts, event }); // dev/photo mode skips the roller
  else showEventRoller(EVENTS, event, () => startRace({ ...opts, event }));
}

function startRace(opts) {
  setScene(
    new RaceScene(opts, input, {
      onExit: (next) => {
        if (next === 'again' && state.balance >= opts.bet) {
          // quick re-race: same bet and gear, fresh mountain, roster and event
          if (needsTopUp()) topUp();
          const seed = randomSeed();
          rollThenRace({ seed, bet: opts.bet, gear: opts.gear, bots: rosterFor(seed) });
        } else {
          toMenu();
        }
      },
    })
  );
}

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  if (current) current.resize(innerWidth, innerHeight);
});

// Adaptive resolution: drop render scale on devices that can't hold frame
// rate, climb back when there's headroom. Keeps powder + dense terrain smooth
// on weak phones without touching capable hardware.
const MAX_DPR = Math.min(devicePixelRatio, 2);
let dprScale = 1;
let fpsAcc = 0;
let fpsN = 0;
let fpsTimer = 0;

const clock = new THREE.Clock();
let sinceScale = 1e9; // seconds since the render scale last moved
renderer.setAnimationLoop(() => {
  const rawDt = clock.getDelta();
  const dt = Math.min(rawDt, 0.05);

  // Resolution changes happen BEFORE this frame renders: resizing the
  // drawing buffer clears it, and a resize after render() leaves that
  // empty buffer on screen for a frame — a black flash. Hysteresis keeps a
  // scene that sits near a threshold from flip-flopping every window.
  fpsAcc += rawDt;
  fpsN++;
  fpsTimer += rawDt;
  sinceScale += rawDt;
  if (fpsTimer > 3 && fpsN > 10) {
    const fps = fpsN / fpsAcc;
    let next = dprScale;
    if (fps < 42 && Quality.shadows) {
      // shadows are the first thing to go on a struggling device
      Quality.shadows = false;
      if (current?.sun) current.sun.castShadow = false;
    } else if (fps < 40 && dprScale > 0.55 && sinceScale > 6) next = Math.max(0.55, dprScale - 0.15);
    else if (fps > 58 && dprScale < 1 && sinceScale > 20) next = Math.min(1, dprScale + 0.1);
    if (next !== dprScale) {
      dprScale = next;
      sinceScale = 0;
      renderer.setPixelRatio(MAX_DPR * dprScale);
      renderer.setSize(innerWidth, innerHeight);
    }
    fpsAcc = 0;
    fpsN = 0;
    fpsTimer = 0;
  }

  if (current) {
    current.update(dt);
    renderer.render(current.scene, current.camera);
  }
});

// character models load before the lodge opens
(async () => {
  const loadEl = document.createElement('div');
  loadEl.id = 'boot-loading';
  loadEl.textContent = 'WAXING THE GEAR…';
  document.getElementById('ui').appendChild(loadEl);
  try {
    await Promise.all([loadCharacters(), loadProps(), loadAnimals()]);
  } finally {
    loadEl.remove();
  }
  toMenu();
})();

// ---- PWA ----
if ('serviceWorker' in navigator && !location.hostname.includes('localhost')) {
  addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
