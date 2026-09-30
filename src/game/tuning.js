// One knob for how fast the whole mountain runs.
//
// SPEED_SCALE multiplies every top speed in the game — the player's terminal
// pace and the bots' natural and maximum paces alike — so the field stays in
// the same relative shape at the new pace and the pacing controller keeps
// working in the units it was tuned in.
//
// Acceleration is deliberately NOT scaled. Gravity down the fall line is
// unchanged, so a higher top end simply takes proportionally longer to wind
// up to. What does scale with it: anything that IS a speed (terminal pace,
// cruising pace, a boost's kick and ceiling), the decelerations the rider
// steers with (braking, scrubbing a sideways edge, sliding after a crash),
// the turn rate (so a carve holds the same radius rather than washing twice
// as wide), and the speed thresholds that drive poses and effects. What does
// not: ratios, angles, times, distances, and the height of a jump.
//
// The player's terminal speed is sqrt(G * grade / DRAG_K), so the drag
// coefficient falls as the SQUARE of this to raise the top speed linearly.
export const SPEED_SCALE = 2.25;
