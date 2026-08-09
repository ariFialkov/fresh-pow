// Generates public/icons/icon-192.png and icon-512.png without any dependencies:
// draws a simple mountain scene into an RGBA buffer and encodes it as a PNG by hand.
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

const CRC_TABLE = new Int32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c;
});
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(type, data) {
  const out = Buffer.alloc(8 + data.length + 4);
  out.writeUInt32BE(data.length, 0);
  out.write(type, 4, 'ascii');
  data.copy(out, 8);
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length);
  return out;
}
function encodePNG(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const lerp = (a, b, t) => a + (b - a) * t;
function inTri(px, py, ax, ay, bx, by, cx, cy) {
  const s = (ax - cx) * (py - cy) - (ay - cy) * (px - cx);
  const t = (bx - ax) * (py - ay) - (by - ay) * (px - ax);
  if (s !== 0 && t !== 0 && s > 0 !== t > 0) return false;
  const d = (cx - bx) * (py - by) - (cy - by) * (px - bx);
  return d === 0 || (d > 0) === (s + t >= 0);
}

function drawIcon(size) {
  const px = Buffer.alloc(size * size * 4);
  const put = (x, y, r, g, b) => {
    const i = (y * size + x) * 4;
    px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = 255;
  };
  const S = size;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const ty = y / S;
      // sky gradient
      let r = lerp(0x24, 0x8f, ty), g = lerp(0x63, 0xd0, ty), b = lerp(0xa8, 0xff, ty);
      // sun
      const dx = x - S * 0.76, dy = y - S * 0.22;
      if (dx * dx + dy * dy < (S * 0.09) ** 2) { r = 0xff; g = 0xe8; b = 0x9a; }
      // back peak (light blue)
      if (inTri(x, y, S * 0.62, S * 0.34, S * 0.05, S * 0.95, S * 1.15, S * 0.95)) {
        r = 0xc4; g = 0xdd; b = 0xf2;
        if (y > S * 0.55 && x > S * 0.5) { r = 0xa8; g = 0xc4; b = 0xde; } // shaded face
      }
      // front peak (white)
      if (inTri(x, y, S * 0.34, S * 0.24, S * -0.18, S * 0.95, S * 0.86, S * 0.95)) {
        r = 0xf7; g = 0xfb; b = 0xff;
        if (x > S * 0.34 && y > S * 0.4) { r = 0xd8; g = 0xe6; b = 0xf4; }
      }
      put(x, y, Math.round(r), Math.round(g), Math.round(b));
    }
  }
  return encodePNG(S, S, px);
}

const outDir = path.resolve(import.meta.dirname, '../public/icons');
fs.mkdirSync(outDir, { recursive: true });
for (const size of [192, 512]) {
  fs.writeFileSync(path.join(outDir, `icon-${size}.png`), drawIcon(size));
  console.log(`wrote icons/icon-${size}.png`);
}
