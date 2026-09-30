import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const INK = "#1a1816";
const PAPER = "#f3efe8";
const PAPER_DEEP = "#ddd5c9";
const WOOD = "#8a5a33";

const images = [
  { name: "hero.jpg", w: 1200, h: 1500, label: "Hero", sub: "Walnut & steel dining table" },
  { name: "work-1.jpg", w: 1200, h: 1500, label: "Work 01", sub: "Floating walnut shelves" },
  { name: "work-2.jpg", w: 1200, h: 1500, label: "Work 02", sub: "Oak & steel entry bench" },
  { name: "work-3.jpg", w: 1200, h: 1500, label: "Work 03", sub: "Welded steel table base" },
  { name: "work-4.jpg", w: 1200, h: 1500, label: "Work 04", sub: "Steel handrail, oak cap" },
  { name: "work-5.jpg", w: 1200, h: 1500, label: "Work 05", sub: "Live-edge coffee table" },
  { name: "work-6.jpg", w: 1200, h: 1500, label: "Work 06", sub: "Sanding a walnut top" },
  { name: "detail-1.jpg", w: 1000, h: 1000, label: "Detail 01", sub: "TIG weld close-up" },
  { name: "detail-2.jpg", w: 1000, h: 1000, label: "Detail 02", sub: "Walnut grain, oil finish" },
  { name: "workshop.jpg", w: 2100, h: 900, label: "Workshop", sub: "Custom 77 · Denver shop" },
];

const scale = (img) => Math.min(img.w, img.h) / 500;

const escapeXml = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]
  );

function svgFor({ w, h, label, sub }) {
  const s = scale({ w, h });
  const titleSize = Math.round(64 * s);
  const subSize = Math.round(26 * s);
  const tagSize = Math.round(20 * s);
  const gap = Math.round(28 * s);
  const inset = Math.round(28 * s);

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${PAPER}"/>
      <stop offset="1" stop-color="${PAPER_DEEP}"/>
    </linearGradient>
    <pattern id="lines" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="28" height="28" fill="none"/>
      <line x1="0" y1="0" x2="0" y2="28" stroke="${INK}" stroke-opacity="0.045" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#lines)"/>
  <rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}"
        fill="none" stroke="${INK}" stroke-opacity="0.18" stroke-width="${Math.max(2, Math.round(2 * s * 2))}"/>
  <text x="${w / 2}" y="${h / 2 - gap}" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="${titleSize}" font-weight="600" letter-spacing="${Math.round(2 * s * 2)}"
        fill="${INK}" text-anchor="middle" dominant-baseline="middle">${escapeXml(label)}</text>
  <text x="${w / 2}" y="${h / 2 + gap * 1.6}" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="${subSize}" letter-spacing="${Math.round(1.5 * s * 2)}"
        fill="${WOOD}" text-anchor="middle" dominant-baseline="middle">${escapeXml(sub)}</text>
  <text x="${w / 2}" y="${h - inset - Math.round(18 * s * 2)}" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="${tagSize}" letter-spacing="${Math.round(3 * s * 2)}"
        fill="${INK}" fill-opacity="0.45" text-anchor="middle" dominant-baseline="middle">PLACEHOLDER · REPLACE WITH PHOTO</text>
</svg>`;
}

await mkdir("public/images", { recursive: true });

for (const img of images) {
  await sharp(Buffer.from(svgFor(img)))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`public/images/${img.name}`);
  console.log(`created public/images/${img.name} (${img.w}x${img.h})`);
}
