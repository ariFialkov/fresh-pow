# Fresh Pow ⛷️

A 3D "simulated multiplayer" betting racing game for mobile and desktop, installable as a PWA.
Five riders drop down a procedurally generated mountain — you control one of them, the other
four are bots that join the lobby like real players and race around you.

> **Virtual chips only.** There is no real money anywhere in this game.

## Play it

**https://arifialkov.github.io/fresh-pow/**

Deploys are automatic: every push to the default branch runs
[`deploy.yml`](.github/workflows/deploy.yml), which builds the app and force-pushes `dist/`
to the `gh-pages` branch. One-time setup if the link 404s: repo **Settings → Pages →
Source: "Deploy from a branch" → Branch: `gh-pages` / `(root)` → Save**.

On your phone, open the link and "Add to Home Screen" to install it as a PWA.

## How it works

### The betting core (deterministic outcome)

The racing *feels* like a skill game, but the result is drawn before the gates open:

- **RTP is 96%.** Right before the countdown, the player's finishing position (1–5) is drawn
  from the paytable in [`src/game/rtp.js`](src/game/rtp.js):

  | Position | Probability | Multiplier |
  |----------|-------------|------------|
  | 1st      | 15%         | ×3.2       |
  | 2nd      | 20%         | ×1.4       |
  | 3rd      | 20%         | ×0.7       |
  | 4th      | 20%         | ×0.3       |
  | 5th      | 25%         | ×0.0       |

  Expected value = `Σ p·mult` = **0.96** — prizes scale linearly with the bet.

- **Bots are pacing controllers, not racers** ([`src/game/bots.js`](src/game/bots.js)).
  Through the race they shuffle dramatically around the player using seeded noise, then over
  the last quarter their target offsets smoothly flatten into the drawn finishing gaps.
  Two hard guarantees hold no matter what the player does (stops dead, stumbles, tucks the
  whole way down):
  - a bot destined to finish **behind** never crosses the line before the player;
  - a bot destined to finish **ahead** always reaches the line first (rubber-band top speed
    plus an autopilot that kicks in if the player parks mid-race).

### The game around it

- **Lobby scene** — summit vista of the *actual* course about to be raced, five start gates,
  bots "joining" one by one with fake usernames, ride selector, bet chips, paytable.
- **12 rides** — 4 skis, 4 snowboards, 4 sleds (including an ice saucer). Purely cosmetic;
  identical handling, different silhouettes/stances.
- **Procedural mountain** ([`src/game/terrain.js`](src/game/terrain.js)) — every race a fresh
  seed: meandering valley, rolls, mogul fields, kicker jumps, cliff drops, crevices, boulders,
  tree lines, course flags, finish arch. `heightAt(x,z)` is a pure function of the seed, so
  physics and rendering always agree.
- **Obstacles** — trees and boulders stumble you (brief slow + wobble); bots script their own
  stumbles for drama.
- **Tricks** — swipe (or tap WASD) in the air for spins and flips; chain swipes for combos.
  Release your tuck right at the lip for extra pop. Land mid-rotation and you crash.
  Style points are cosmetic — they never touch the payout.

## Controls

| Action | Mobile | Desktop |
|--------|--------|---------|
| Carve left/right | pull left/right | `A` / `D` |
| Tuck (speed) | pull up + hold | hold `W` |
| Brake / hard stop | pull down + hold | hold `S` |
| Tricks (airborne) | swipe any direction | tap `W`/`A`/`S`/`D` |
| Max jump pop | release tuck right at the lip | release `W` at the lip |

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the build
```

Tests (headless Chromium via Playwright):

```bash
node scripts/smoke.mjs        # boots lobby -> race, drives, fails on console errors
node scripts/e2e.mjs          # asserts finish order + payout match the pre-drawn outcome
FULL=1 node scripts/e2e.mjs   # same, but rides the whole mountain (slow headless)
node scripts/sim.mjs          # pure physics sim over a real terrain seed
node scripts/gen-icons.mjs    # regenerate PWA icons (no image deps needed)
```

## PWA

`public/manifest.webmanifest` + `public/sw.js` make the game installable and playable offline
after first load (shell precache + cache-first runtime caching of hashed assets). Deploy the
`dist/` folder to any static host — the base path is relative, so sub-path hosting (e.g.
GitHub Pages) works out of the box.

## Architecture

```
src/
  main.js            renderer, scene switching, game loop, SW registration
  game/
    rng.js           seeded PRNG + value noise (mulberry32)
    rtp.js           paytable, RTP invariant check, outcome draw
    state.js         wallet + persistence (localStorage)
    input.js         unified swipe/WASD input
    terrain.js       procedural course: heightfield, features, obstacles, meshes
    riderMesh.js     low-poly rider rigs + 12 gear models + poses
    player.js        player physics: slope accel, drag, air, tricks, stumbles
    bots.js          pacing controllers that realize the drawn outcome
    menu.js          lobby scene (joins, gear select, bet)
    race.js          race scene (countdown, camera, finish, payout)
    hud.js           DOM overlays: lobby UI, race HUD, results
    world.js         sky dome, lights, snowfall
```
