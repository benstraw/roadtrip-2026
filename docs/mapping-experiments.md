# Mapping Experiments — Technical Notes

Road trip site. Astro static site, no framework, vanilla JS.
9 days, Philadelphia → California, Jan 30 – Feb 7 2025.
GPX source: Garmin Explore exports, one file per day.

---

## Stack

**Library:** Leaflet.js 1.9.4 + leaflet-gpx 1.7.0, both loaded via CDN (`unpkg.com`).

**Key Astro note:** All `<script>` tags on standalone pages must use the `is:inline` directive. Without it, Astro/Vite hoists and bundles scripts as ES modules, running them before CDN scripts load — producing `L is not defined` at runtime. `is:inline` preserves document order.

**Tile providers used (all free, no API key):**
| Provider | Style | URL pattern |
|---|---|---|
| Carto Dark Matter | Dark/bold | `basemaps.cartocdn.com/dark_all/` |
| Carto Voyager | Colorful, detailed | `basemaps.cartocdn.com/rastertiles/voyager/` |
| Carto Positron | Clean, minimal | `basemaps.cartocdn.com/light_all/` |
| OpenTopoMap | Terrain + contour | `tile.opentopomap.org/` |
| Stadia Watercolor | Painted texture | `tiles.stadiamaps.com/tiles/stamen_watercolor/` |
| Stadia Toner | High-contrast B&W | `tiles.stadiamaps.com/tiles/stamen_toner/` |
| ESRI NatGeo | Reference/atlas | `server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/` |
| ESRI Satellite | Aerial imagery | `server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/` |

Stadia and ESRI do not support subdomain rotation — omit `subdomains: 'abcd'` and use a plain URL with no `{s}` token.

**GPX files:** `public/maps/`, ~256KB–2MB each. Parsed client-side via `fetch` + `DOMParser`. No server-side processing.

---

## Pages

### `/mapbook` — Style Sampler
Eight maps stacked vertically, all loading the same Day 1 GPX (Philly → Charlotte, 536 mi). Purpose: compare tile aesthetics side by side. Each map is a self-contained Leaflet instance that fits bounds to the loaded track. The page is the experiment record — keep it.

**Conclusion so far:** Carto Voyager is the most readable for a road trip narrative. Dark Matter reads well at a glance but loses road detail at zoom 5–6. Watercolor is beautiful but slow to load (Stadia tile server latency).

---

### `/maptrip` — Full Trip Overview
All 9 days on Carto Voyager. Each day is a separate leaflet-gpx layer with its theme accent color. After all 9 load, bounds are combined and the map auto-fits.

Features:
- Sidebar legend (220px): colored dot, day number, date, city-to-city, mileage
- Hover on track: highlights sidebar row, shows tooltip (day, route, miles)
- Click on track: zooms to that day's bounds
- Click sidebar row: same zoom behavior
- Stats strip: 3,753 mi · 9 days · 13 states · live track-loaded counter

Leaflet layer approach: `new L.GPX(url, { async: true, polyline_options: {...} })`. The `loaded` event fires once per layer; bounds are extended across all 9 for the final `fitBounds`.

---

### `/mapwild` — Three Experiments

#### A — Speed Painting
GPX parsed manually (not via leaflet-gpx) using `fetch` + `DOMParser`. Points sampled every 5th, haversine distance calculated between adjacent samples, time delta gives mph. Each segment rendered as a separate `L.polyline` colored by speed bucket.

Speed buckets:
- `< 5 mph` → `#444` (stopped/parked)
- `5–35 mph` → `#3a86ff` (city/secondary)
- `35–60 mph` → `#ff9f1c` (highway approach)
- `60+ mph` → `#e63946` (interstate)

Speeds capped at 90 mph to filter GPS glitches (signal jumps). Base: Carto Dark Matter for contrast.

**What it shows:** The interstate corridors glow red. Texas back roads are a long orange thread. Big Bend is nearly all blue — single-lane park roads at 25 mph. Day 1's Charlotte suburbs are a blue tangle.

#### B — Elevation Profiles
Pure SVG, no map. Each of the 9 days gets a 280×80 viewBox chart. Points sampled every 8th for performance. Series built as cumulative distance (haversine) + elevation in feet (meters × 3.28084). Area path + polyline rendered with a gradient fill using the day's theme accent color.

Stats per day: min elevation, max elevation, total gain (max−min), distance.

Notable readings:
- Day 5 (Austin → Terlingua): peaks at 5,406 ft through the Davis Mountains
- Days 6–7 (Big Bend): floor stays above 2,000 ft
- Day 9 (Tucson → LA): drops to −32 ft (Salton Sea/Coachella Valley basin)
- Days 1–2: negative minimums indicate GPS drift below sea level on flat coastal terrain

#### C — Replay
Animates the full trip drawing itself. 9 colored polylines created upfront (empty), extended point-by-point via `setLatLngs()`. A red Tacoma SVG marker moves to the leading point each frame.

**Performance problem solved:** Initial implementation removed and recreated the polyline layer on every point advance — O(n) DOM operations per frame. With ~58,000 raw GPX points this produced a 480+ second animation at any reasonable frame rate. Fix: pre-sample all 9 tracks to a max of 400 points each (3,796 total), then update in-place with `setLatLngs()`.

Speed modes:
| Button | Points per frame | Character |
|---|---|---|
| Smooth | 1 | Slow, geographic |
| Fast | 5 | Default — 45–60 sec |
| Warp | 25 | ~10 sec coast to coast |
| Instant | 0 (all at once) | Skips animation entirely |

Snap mode: toggles map following. When enabled, `map.panTo(cur, { animate: false })` each frame at zoom 8. Disable returns to full country view `[35, -95], zoom 4`.

**Truck icon:** `L.divIcon` with an inline SVG — top-down pickup silhouette, 28×16px, `#cc2200` red with dark wheel blocks. `iconAnchor: [14, 8]` centers it on the GPS point.

---

## GPX File Notes

| Day | File | Size | Notes |
|---|---|---|---|
| 1 | `Day 1 - Philly to Charlotte.gpx` | 702 KB | Clean Garmin export |
| 2 | `Day 2 - Charlotte NC to Montgomery AL.gpx` | 256 KB | Replaced incorrect file (original was LA coords from 2023) |
| 3 | `Day 3 - Montgomery AL to Jackson MS.gpx` | 429 KB | |
| 4 | `Day 4 - Jackson MS to Austin TX.gpx` | 1.5 MB | |
| 5 | `Day 5 - Austin TX to Terilingua TX.gpx` | 1.5 MB | Filename typo: "Terilingua" — matches actual file |
| 6 | `Day 6 - Big Bend National Park.gpx` | 428 KB | Park roads only |
| 7 | `Day 7 - Big Bend National Park.gpx` | 631 KB | Park roads only |
| 8 | `Day 8 - Terilingua TX to Tucson AZ.gpx` | 2 MB | Largest file; long desert haul |
| 9 | `Day 9 - Tucson AZ to Los Angeles CA.gpx` | 679 KB | |

All files in `public/maps/`. Served as static assets — no build processing.

---

## Day Theme Colors (used as track colors)

| Day | Theme | Hex |
|---|---|---|
| 1 | frozen | `#7ebcd6` |
| 2 | snowstorm | `#a0c8e0` |
| 3 | deepSouth | `#c4782a` |
| 4 | texasBayou | `#d4761e` |
| 5 | highDesert | `#e8681a` |
| 6 | bigBend | `#d4481a` |
| 7 | bigBendDrive | `#c83a0a` |
| 8 | sonoran | `#d4600a` |
| 9 | california | `#f5c400` |

---

---

## Pages (continued)

### `/mapelevation` — Linked Map + Elevation Profiles

Full-page split layout: Leaflet map (57% width) on the left, nine stacked D3 elevation profile cards on the right (scrollable). The two views are linked — hovering a profile moves a crosshair dot on the map; hovering or clicking a map track highlights the corresponding profile card.

**Why split layout instead of stacked:** Elevation data and geographic data are fundamentally different reads. Stacking them vertically (map top, profile bottom) forces the user to scroll and loses the simultaneity. A side-by-side split keeps both in peripheral vision so comparisons are immediate.

**Libraries:** Leaflet 1.9.4 (map) + D3 v7 UMD `cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js` (profiles). Loaded via CDN, both `is:inline`. No leaflet-gpx on this page — GPX parsed directly with DOMParser.

**Data pipeline:**
1. `parseGPX(url)` → raw `[{lat, lon, ele, time}]`
2. `smooth(pts, w=5)` → 5-point rolling average on elevation (reduces Garmin GPS noise)
3. `buildSeries(rawPts)` → cumulative Haversine distance + ft elevation per point
4. `lttb(series, 480)` → Largest Triangle Three Buckets downsample to 480 points (from ~1,800–14,000 raw)

**LTTB (Largest Triangle Three Buckets):** A downsampling algorithm that preserves visual fidelity far better than simple stride sampling. Divides the data into N equal buckets and in each bucket selects the point that maximizes the area of the triangle formed with the previously selected point and the average of the next bucket. Result: peaks, valleys, and inflection points are always preserved. ~40 lines of pure JS, no CDN needed.

**Rolling average smoother:** Garmin records elevation via GPS receiver (not barometric), so values are noisy — especially on urban segments. A 5-point symmetric rolling average significantly cleans up the profile without visually distorting the shape. Applied before LTTB so the downsampler works from already-smoothed data.

**D3 profile chart (per day):**
- `d3.scaleLinear` x/y scales; x = distance in miles, y = elevation in feet
- `d3.area().curve(d3.curveMonotoneX)` for the gradient fill (y0 = bottom of chart, y1 = elevation)
- `d3.line().curve(d3.curveMonotoneX)` for the ridge line
- `linearGradient` fill: day theme color at 50% opacity at top → 3% at bottom
- Sea-level reference line: dashed `#3a7ca0` horizontal, only shown when day has points near/below sea level
- Axes: `.ea` class, grid-line tick style (no domain line), 7.5px Space Mono
- Hover: invisible `<rect>` overlay with `mousemove` → `d3.bisectLeft` on pre-built distance array → crosshair line + dot + map marker

**Active state system:** `setActive(dayNum)` / `clearActive()` — sets polyline weight/opacity across all 9 Leaflet layers simultaneously. The active day's track goes to weight 5.5/opacity 1.0; all others dim to weight 1.8/opacity 0.25.

**Load order:** All 9 GPX files fetched in parallel with `DAYS.forEach(d => parseGPX(d.gpx).then(...))`. Cards are pre-built in DOM order so they always appear Day 1–9 regardless of which network response arrives first. Profiles render as each day's data comes in.

---

### `/mapridge` — The Ridge (Joy Division / Unknown Pleasures style)

Full-page art piece. All 9 days rendered as stacked elevation ridgelines on a near-black background, inspired by Joy Division's *Unknown Pleasures* album cover (which itself was a visualization of pulsar radio emissions from Cambridge astronomy data, 1977).

**Libraries:** D3 v7 UMD only. No Leaflet — this page has no map. Purely a data visualization.

**Layout:**
- SVG fills full container width
- 9 rows, `ROW_SPACING = 72px` between baselines
- `PEAK_PX = 105px` — maximum pixels a ridge can rise above its baseline
- Total height auto-computed: `top_margin + PEAK_PX + (9-1)*72 + bottom_margin`

**x-axis:** Actual trip miles from 0 to 3,753. Day starts placed at approximate cumulative positions (536, 942, 1128, 1608, 1938, 2000, 2055, 2529). Short days (6: 62mi, 7: 55mi) appear as narrow profiles; long days (1: 536mi, 4: 480mi) span more x-width. This preserves the true shape of the trip.

**y-scale:** Global — one scale across all 9 days maps the full elevation range (−61ft to 5,784ft) to 0–105px. This is the critical choice: a global scale tells the truth. Days 1–4 are genuinely flat relative to the Big Bend days. The dramatic spike of Day 5 into the Hill Country is readable because the flat days before it are actually flat.

**Rendering order:** Days rendered bottom→top (Day 9 first, Day 1 last). Each day's path includes two fills:
1. Background fill from the ridge line down to **this row's baseline** — solid `#05090f` (page bg). Key: `y0 = baseline`, not `y0 = SVG_H`. Using SVG_H fills the entire canvas below, masking all lower rows (the original bug that caused only Day 1 to render). With `y0 = baseline`, each row's fill only masks content within its own elevation window, so taller rows behind it remain visible above their respective baselines.
2. Gradient fill between the ridge line and the day's baseline — day theme color at low opacity

**y-scale:** Diverging, not linear. A single linear scale over `[globalMinDrop, globalMaxGain]` shifts the zero-point off-baseline when the two extremes are unequal (e.g., Day 5 climbs +4,906ft but Day 9 only drops −2,630ft — a linear scale would map ele=0 to ~20px above the baseline). The fix: two separate linear scales both anchored at 0, one for positive elevation (0→PEAK_PX) and one for negative (0→−BELOW_PX). This ensures flat-terrain days sit exactly at their baselines.

**Glow effect:** SVG `<filter>` with `feGaussianBlur` (stdDeviation=1.8) merged with the source via `feMerge`. Creates a soft halo around each ridge line without requiring multiple layers.

**Annotations:**
- Day 5: tick + elevation label at the peak (Paisano Pass, 5,406 ft)
- Day 6: max elevation label inline
- Day 9: Salton Sea dip labeled in blue (`#4a8fa8`) when below sea level
- City labels at x-axis endpoints (Philadelphia, California)
- Day boundary tick marks along bottom x-axis

**Caption:** A text block below the SVG explains what the reader is looking at — the data story in plain language. The flat South, the Hill Country climb, Big Bend staying high, the Salton Sea below sea level. The visualization is designed to be legible on its own, with the caption as confirmation.

---

## Library Research Summary (conducted Feb 2026)

For future reference — evaluated in the context of: Astro static site, CDN-only, no API keys, vanilla JS.

| Library | CDN size | Best use | Verdict |
|---|---|---|---|
| D3 v7 (UMD) | ~580KB | Profiles, ridge plots, linked views | **Primary choice** — precise, flexible, vanilla-friendly |
| Leaflet 1.9.4 | ~140KB | Interactive tile maps | **Already in use** — best GPX map ecosystem |
| Leaflet-hotline | ~15KB | Color-by-value polylines | Good for elevation heatmap (future) |
| Observable Plot 0.6 | ~280KB | Ridge plots (declarative) | Viable but D3 preferred for customization |
| Three.js r170 | ~650KB | 3D ribbon visualization | High ceiling, high complexity — build last |
| Plotly.js | ~3.5MB | 3D scatter, surface plots | Too heavy for CDN use |
| Chart.js | ~200KB | Simple charts | Less flexible than D3 for custom interactions |

**Key technical insights from research:**
- LTTB downsampling is non-negotiable for D3 SVG paths (59,000 raw points → 480 for smooth rendering)
- Rolling average (5–7 point window) needed before LTTB to handle Garmin GPS elevation noise
- Days 1 and 4 contain GPS glitch points below −47m — result of signal multipath near highway overpasses; clamp or ignore for color scales
- The Salton Sea (Day 9) has 115 genuine below-sea-level points; this is real, not noise
- D3 UMD loads from `cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js` → sets `window.d3`
- Three.js requires importmap pattern for ES module imports (UMD works but deprecated)
- Stadia tile server (Stamen Watercolor/Toner) no longer uses subdomain rotation — omit `{s}` token

---

## Ideas / Future Directions

- Per-day map pages linked directly from day journal pages (currently all route icons link to `/mapbook`)
- Animate the truck icon to rotate toward heading (compute bearing between adjacent points)
- Night/day shading overlay keyed to actual timestamps in the GPX
- State-crossing markers (automatic from lat/lon boundaries or a lookup table)
- Photo pins: drop gallery images at their GPS coordinates if EXIF data is available
- Offline tile caching for the static build (pre-fetch tiles at zoom 5–8 for the route corridor)
