# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server with hot reload (localhost:4321)
npm run build    # static build to dist/
npm run preview  # serve the built dist/ locally
```

No linter or test suite is configured.

## Architecture

Astro static site — 10 pages total, zero client-side framework. All interactivity is vanilla JS in `<script>` blocks within `.astro` files.

### Data layer

**`src/data/days.ts`** is the single source of truth. Edit here to change any trip content. It exports:
- `days: Day[]` — 9 day objects, each with theme colors, narrative text, meals, stops, gallery images
- `tripTotals` — computed aggregate stats
- `DayTheme` interface — the per-day color palette object passed into Base layout and scoped styles

Every `Day` object has a `theme: DayTheme` that drives all color on that day's page. The themes are defined as named constants at the top of `days.ts` (e.g. `frozen`, `snowstorm`, `highDesert`, `california`) and referenced by the day entries.

### Theming system

Two mechanisms work in parallel:
1. **`Base.astro`** receives `theme?: DayTheme` and injects CSS custom properties (`--bg`, `--accent`, `--text`, etc.) as inline `style` on `<body>` — this covers global styles and components that use those variables
2. **`[day].astro`** uses Astro's `define:vars` in `<style>` to expose additional per-page variables (`--heroGrad`, `--textMuted`, etc.) within scoped component styles

Index page uses its own hardcoded gold atlas palette via `:root` overrides in a `<style>` block.

### Pages and routing

- `src/pages/index.astro` — homepage timeline with alternating left/right day cards
- `src/pages/days/[day].astro` — dynamic route; `getStaticPaths()` maps each `day.slug` (strings `'1'`–`'9'`) to its `Day` object

### Components

- **`DayCard.astro`** — used only on the index, receives a `Day` and renders the tilted themed card. Tilt angle comes from `theme.tilt`.
- **`DayNav.astro`** — fixed filmstrip nav at the bottom of every day page. Receives `currentDay: number`, highlights the active frame, draws the SVG route progress line above. Keyboard `←`/`→` navigation is wired in its `<script>` via `define:vars`.
- **`Gallery.astro`** — PIG-style justified grid (`grid-auto-rows: 180px`) with a vanilla JS lightbox. `wide: true` on a `GalleryImage` spans 2 columns. Placeholder state triggered by `onerror` on images.
- **`Base.astro`** — HTML shell, Google Fonts via `@import` in `global.css`.

### Adding photos

Hero map book photo: drop `map.jpg` into `public/images/days/<N>/` — the `[day].astro` template constructs that path automatically and falls back to the SVG placeholder via `onerror`.

Gallery photos: add real paths to `galleryImages[]` in the relevant day object in `days.ts`. The `src` strings must resolve under `public/`.

### The trip

This was not a solo trip. It was a father-and-son road trip — the writer and his father, who is 80 years old. They drove his father's red 2008 Toyota Tacoma pickup — two seats, bench seat, the whole way. The father is not a passenger or a subject — he is a partner. That word matters.

These facts should inform any content written for this site:
- Pronoun is **"we"**, always. Not "I".
- The truck is specific: red 2008 Toyota Tacoma, bench seat, two of them in it. Reference it when it earns a place — the long desert miles, the snow, the bench seat with no room between them.
- The father is 80. Don't editorialize about that. Let the miles speak.
- The relationship is partnership, not caretaking. The writing should reflect that.

### Writing voice

Short declarative sentences. Let them breathe. Sensory and specific — not "it was cold" but "ice under the tires." Not "we had good food" but the name, the detail, the paper napkin. No explaining. Trust the reader to feel the weight without being told what to feel.

Taglines: fragments are fine, under ~8 words, punchy. They set the tone for the day before the narrative opens.

Narrative paragraphs: 2–4 sentences each. Stay physical and concrete. The road, the food, the weather, what the place looked like. Emotion comes from specificity, not from naming it.

Stop and meal notes: one sentence, concrete. *"Rio Grande at the bottom. Mexico on the other side."* Not *"a beautiful canyon with stunning views of the river."*

The red Tacoma is always available as a detail — especially on the hard days (snow out of Charlotte, long desert miles, the bench seat all the way). Use it when it earns its place.

Examples of the right register:
- *"Five in the morning and it was already down. Half an inch on the road, more coming. Decided to go."*
- *"Terlingua is a ghost town that didn't finish dying."*
- *"Brief. Polite. Moving again."*
- *"The left wall is Texas. The right wall is Mexico."*
