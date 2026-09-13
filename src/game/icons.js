// Inline SVG icon set for the UI: ride types, race formats and the cup crest.
// Plain strokes on currentColor so they take the text colour wherever they sit.
const svg = (body, vb = '0 0 24 24') =>
  `<svg viewBox="${vb}" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

// the three rides, drawn the same way: a few clean strokes, centred, no
// clutter — a matched pair of skis with curled tips, a plain board with
// its two bindings, a toboggan side-on
export const RIDE_ICON = {
  ski: svg('<path d="M3.5 10.5 H16.5 q2.2 0 3.8 -2.6"/><path d="M8.5 10.5 v-1.8 h2.4 v1.8"/><path d="M3.5 16.5 H16.5 q2.2 0 3.8 -2.6"/><path d="M8.5 16.5 v-1.8 h2.4 v1.8"/>'),
  board: svg('<g transform="rotate(22 12 12)"><rect x="8.2" y="2.5" width="7.6" height="19" rx="3.8"/><path d="M10.2 8.5 h3.6"/><path d="M10.2 15.5 h3.6"/></g>'),
  sled: svg('<path d="M4 15 h13 a3 3 0 0 0 0 -6"/><path d="M6 15 v-5 h9"/><path d="M4 19 h15"/>'),
};

export const FORMAT_ICON = {
  race: svg('<path d="M3 18 L10 8 L14 13 L17 10 L21 15"/><path d="M3 21 h18"/>'),
  combined: svg('<path d="M3 18 L9 9 L13 13 L19 7"/><path d="M15 3 l1.5 3 3 .5 -2.2 2.1 .5 3 -2.8 -1.5 -2.8 1.5 .5 -3 -2.2 -2.1 3 -.5z" fill="currentColor" stroke="none" transform="translate(4 -1) scale(0.5)"/><path d="M3 21 h18"/>'),
  glade: svg('<path d="M6 21 v-4"/><path d="M3 17 L6 9 L9 17z"/><path d="M18 21 v-5"/><path d="M14 16 L18 6 L22 16z"/><path d="M9 21 C11 17 13 17 15 21"/>'),
  bigair: svg('<path d="M3 20 C7 20 9 12 12 12"/><path d="M12 12 C15 12 17 4 21 4"/><path d="M12 12 l3 -8"/><circle cx="17" cy="7" r="1.6"/>'),
  halfpipe: svg('<path d="M3 5 v6 a9 9 0 0 0 18 0 V5"/><path d="M3 5 h3"/><path d="M18 5 h3"/>'),
};

// the Fresh Pow Cup crest: a peak in a shield
export const CUP_CREST = svg(
  '<path d="M12 2 L21 6 V12 C21 17 17 20.5 12 22 C7 20.5 3 17 3 12 V6 Z"/><path d="M6.5 15 L10 9.5 L12.5 12.5 L14.5 10 L17.5 15 Z" fill="currentColor" stroke="none"/><path d="M9 11 l1 -1.5 1 1.5" stroke-width="1.2"/>'
);

export const CHIP_ICON = svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>');
export const LOCK_ICON = svg('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11 V7 a4 4 0 0 1 8 0 v4"/>');
export const CHECK_ICON = svg('<path d="M5 12 l5 5 L20 7"/>');
export const SHOP_ICON = svg('<path d="M4 8 h16 l-1.5 12 h-13z"/><path d="M9 8 V6 a3 3 0 0 1 6 0 v2"/>');
