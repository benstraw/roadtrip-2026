/**
 * compress-images.mjs
 * Converts all JPEG gallery images to WebP (max 1920px wide, 82% quality).
 * Replaces originals in-place — .jpg → .webp, same filename stem.
 * Run once: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, unlink, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const IMAGES_DIR = new URL('../public/images/days', import.meta.url).pathname;
const MAX_WIDTH = 1920;
const QUALITY = 82;

// The OG background image — keep as JPEG so satori can embed it reliably
const OG_IMAGE = '20260203_135632-lonely-road-fort-stockton.jpg';

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;
let skipped = 0;

async function processDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
      if (entry.name === OG_IMAGE) {
        console.log(`  skip (OG)  ${entry.name}`);
        skipped++;
        continue;
      }
      await convertToWebP(fullPath, entry.name);
    }
  }
}

async function convertToWebP(srcPath, name) {
  const stem = basename(name, extname(name));
  const destPath = join(srcPath, '..', `${stem}.webp`);

  const beforeSize = (await stat(srcPath)).size;

  try {
    await sharp(srcPath, { failOn: 'none' })
      .rotate()                                         // bake in EXIF orientation before resize
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(destPath);
  } catch (err) {
    console.log(`  SKIP (err) ${name}: ${err.message}`);
    skipped++;
    return;
  }

  const afterSize = (await stat(destPath)).size;
  const saving = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(0);

  totalBefore += beforeSize;
  totalAfter += afterSize;
  converted++;

  console.log(
    `  ${mb(beforeSize).padStart(7)} → ${mb(afterSize).padStart(7)}  -${saving}%  ${name}`
  );

  // Remove the original JPEG
  await unlink(srcPath);
}

function mb(bytes) {
  return bytes >= 1_000_000
    ? `${(bytes / 1_000_000).toFixed(1)}MB`
    : `${(bytes / 1_000).toFixed(0)}KB`;
}

console.log(`Converting JPEGs in ${IMAGES_DIR}\n`);
await processDir(IMAGES_DIR);

console.log(`
────────────────────────────────────────
  Converted : ${converted} images
  Skipped   : ${skipped} (OG image kept as JPEG)
  Before    : ${mb(totalBefore)}
  After     : ${mb(totalAfter)}
  Saved     : ${mb(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)
────────────────────────────────────────
`);

console.log('Now update src/data/days.ts — replace .jpg/.jpeg with .webp in galleryImages paths.');
