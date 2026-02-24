/**
 * fix-rotated-webp.mjs
 * Re-converts JPEGs that had EXIF orientation stripped during the WebP conversion.
 * Pulls originals from git history and re-encodes with .rotate() to bake in orientation.
 * Run once: node scripts/fix-rotated-webp.mjs
 */

import sharp from 'sharp';
import { execSync } from 'node:child_process';
import { writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PARENT_COMMIT = '20c7365^';
const MAX_WIDTH = 1920;
const QUALITY = 82;

// All 79 JPEGs that had non-normal EXIF orientation
const ROTATED = [
  'public/images/days/1/01_mom-goodbye.jpg',
  'public/images/days/1/02_ben-dad-hoagie.jpg',
  'public/images/days/1/03_life-is-good-red-truck-hat.jpg',
  'public/images/days/2/20260131_101224_georgia-welcomes-the-snow.jpg',
  'public/images/days/2/20260131_102112-dad-snowy-truck.jpg',
  'public/images/days/2/20260131_122619-sweet-home-alabama.jpg',
  'public/images/days/2/20260131_162330-ben-dad-hotel.jpg',
  'public/images/days/2/20260131_173447-elevate-library.jpg',
  'public/images/days/2/20260131_173641-elevate-library.jpg',
  'public/images/days/3/20260201_092048-protest-sign-sculpture-montgomery.jpg',
  'public/images/days/3/20260201_125122-alabama-river-ferry.jpg',
  'public/images/days/3/20260201_135419-freedom-monument-sculpture-park-2.jpg',
  'public/images/days/3/20260201_141416-freedom-monument-sculpture-park-harriet-tubman.jpg',
  'public/images/days/3/20260201_142852-freedom-monument-sculpture-park-rosa-parks.jpg',
  'public/images/days/3/20260201_143030-freedom-monument-sculpture-park-john-lewis.jpg',
  'public/images/days/3/20260201_143221-freedom-monument-sculpture-park-brick-makers.jpg',
  'public/images/days/3/20260201_143244-freedom-monument-sculpture-park-mlkjr.jpg',
  'public/images/days/3/20260201_145125-national-memorial-for-peace-and-justice-wilcox-county-alabama.jpg',
  'public/images/days/3/20260201_145143--national-memorial-for-peace-and-justice-counties.jpg',
  'public/images/days/3/20260201_145334-national-memorial-for-peace-and-justice-lancaster-county.jpg',
  'public/images/days/3/20260201_145551-national-memorial-for-peace-and-justice-we-will-remember.jpg',
  'public/images/days/3/20260201_150137-national-memorial-for-peace-and-justice-protest-walkers.jpg',
  'public/images/days/3/20260201_150730-national-memorial-for-peace-and-justice-protest.jpg',
  'public/images/days/3/20260201_180434-welcome-to-mississippi.jpg',
  'public/images/days/3/20260201_193114-evening-arrival.jpg',
  'public/images/days/4/20260202_122625-sams-southern-eatery.jpg',
  'public/images/days/4/20260202_124547dad-fried-jalepeno-crayfish-eggroll.jpg',
  'public/images/days/4/20260202_142955-dad-navigator.jpg',
  'public/images/days/4/20260202_200435-rudys-austin-food.jpg',
  'public/images/days/5/20260203_105436-lonely-road-1.jpg',
  'public/images/days/5/20260203_105443-lonely-road-panorama.jpg',
  'public/images/days/5/20260203_115406-lonely-road-3.jpg',
  'public/images/days/5/20260203_155630-lonely-road-7.jpg',
  'public/images/days/5/20260203_155826-lonely-road-8.jpg',
  'public/images/days/5/20260203_172738-terilingua-ghost-town-cemetary.jpg',
  'public/images/days/5/20260203_172918-terilingua-ghost-town-cemetary.jpg',
  'public/images/days/5/20260203_174613-local-flavor.jpg',
  'public/images/days/5/20260203_180032-terilingua-ghost-town-starlight-theater-me-dad.jpg',
  'public/images/days/6/20260204_104612-pointy-cactus.jpg',
  'public/images/days/6/20260204_110623-desert-tunnel.jpg',
  'public/images/days/6/20260204_113408-in-the-rio-grande.jpg',
  'public/images/days/6/20260204_121125-rio-grande-wetland-conservation-project.jpg',
  'public/images/days/6/20260204_125044-dad-overlook.jpg',
  'public/images/days/6/20260204_131038-boquillos-canyon-2.jpg',
  'public/images/days/6/20260204_131839-boquillos-canyon-3.jpg',
  'public/images/days/6/20260204_155009-above-the-window.jpg',
  'public/images/days/6/20260204_170253-ben-dad-old-mine.jpg',
  'public/images/days/6/20260204_190618-startlight-theater-night.jpg',
  'public/images/days/7/20260205_102034-windows-trail-1.jpg',
  'public/images/days/7/20260205_102150-windows-trail-2.jpg',
  'public/images/days/7/20260205_102402-windows-trail-3.jpg',
  'public/images/days/7/20260205_110612-windows-trail-5.jpg',
  'public/images/days/7/20260205_111234-windows-trail-7.jpg',
  'public/images/days/7/20260205_111450-windows-trail-8.jpg',
  'public/images/days/7/20260205_111624-windows-trail-9.jpg',
  'public/images/days/7/20260205_113924-windows-trail-10.jpg',
  'public/images/days/7/20260205_120317-windows-trail-11.jpg',
  'public/images/days/7/20260205_120524-windows-trail-12.jpg',
  'public/images/days/7/20260205_120615-windows-trail-13.jpg',
  'public/images/days/7/20260205_121831-windows-trail-14.jpg',
  'public/images/days/7/20260205_122143-windows-trail-15.jpg',
  'public/images/days/7/20260205_123751-windows-trail-16.jpg',
  'public/images/days/7/20260205_132720-windows-trail-17.jpg',
  'public/images/days/7/20260205_144406-desert-cactus.jpg',
  'public/images/days/7/20260205_151343-desert-ben-dad.jpg',
  'public/images/days/7/20260205_164921-santa-elena-canyon-1.jpg',
  'public/images/days/7/20260205_164929-santa-elena-canyon-2-panorama.jpg',
  'public/images/days/7/20260205_170138-santa-elena-canyon-4-ben-dad-rabbit-ears.jpg',
  'public/images/days/7/20260205_171446-santa-elena-canyon-ben-dad-high-5.jpg',
  'public/images/days/7/20260205_190021-starlight-theater.jpg',
  'public/images/days/8/20260206_093137-presidio-county-rte-170-dad-tourist.jpg',
  'public/images/days/8/20260206_105210-presidio-county-rte-170-placque-first-ranch-west-texas.jpg',
  'public/images/days/8/20260206_114645-marfa.jpg',
  'public/images/days/8/20260206_114649-marfa-2.jpg',
  'public/images/days/8/20260206_141919-welcome-nm.jpg',
  'public/images/days/8/20260206_184626-el-chorro.jpg',
  'public/images/days/9/20260207_081600-dad-ready.jpg',
  'public/images/days/9/20260207_134544-road-horses.jpg',
  'public/images/days/9/20260207_212434-california-palm-tree-lined-street.jpg',
];

let fixed = 0;
let failed = 0;

for (const jpgPath of ROTATED) {
  const stem = jpgPath.replace(/\.(jpg|jpeg)$/i, '');
  const webpDest = join(ROOT, `${stem}.webp`);
  const tmpJpeg = join(tmpdir(), `fix-rotate-${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`);

  // Pull original JPEG from git history
  let jpegData;
  try {
    jpegData = execSync(`git show ${PARENT_COMMIT}:${jpgPath}`, { cwd: ROOT, maxBuffer: 20 * 1024 * 1024 });
  } catch (err) {
    console.error(`  FAIL (git) ${jpgPath}: ${err.message}`);
    failed++;
    continue;
  }

  writeFileSync(tmpJpeg, jpegData);

  try {
    await sharp(tmpJpeg, { failOn: 'none' })
      .rotate()                                        // bake in EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpDest);

    console.log(`  fixed  ${jpgPath.replace('public/', '')}`);
    fixed++;
  } catch (err) {
    console.error(`  FAIL (sharp) ${jpgPath}: ${err.message}`);
    failed++;
  } finally {
    if (existsSync(tmpJpeg)) unlinkSync(tmpJpeg);
  }
}

console.log(`\n────────────────────────────────────────`);
console.log(`  Fixed  : ${fixed}`);
console.log(`  Failed : ${failed}`);
console.log(`────────────────────────────────────────`);
