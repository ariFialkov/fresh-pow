// Fake lobby identities for the "simulated multiplayer" bots.
export const BOT_NAMES = [
  'PowderPete', 'alpine_ana', 'YetiLars', 'carve_queen',
  'BigAirBen', 'SluffDog', 'glacier_gal', 'MogulMax',
  'heli_hank', 'IceViper', 'SnowcatSam', 'backcountry_bea',
  'AvyDodger', 'CorduroyKid', 'FirstChair', 'wax_wizard',
];

export const BOT_COLORS = [0xe86a3c, 0x53c0f0, 0xb977e8, 0x7ddb62, 0xf0c04a, 0xf07ab0, 0x8ea0ff, 0x62dbc0];

/** Pick 4 distinct bot identities with a seeded rng. */
export function pickBots(rng) {
  const names = [...BOT_NAMES];
  const colors = [...BOT_COLORS];
  const bots = [];
  for (let i = 0; i < 4; i++) {
    const n = Math.floor(rng() * names.length);
    const c = Math.floor(rng() * colors.length);
    bots.push({ name: names.splice(n, 1)[0], color: colors.splice(c, 1)[0] });
  }
  return bots;
}
