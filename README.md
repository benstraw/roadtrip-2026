# The Road — Philadelphia to California, 2025

A father and son road trip journal. Nine days. 3,445 miles. A red 2008 Toyota Tacoma.

**January 30 – February 7, 2025**
Philadelphia → Charlotte → Montgomery → Jackson → Austin → Terlingua → Big Bend → Tucson → California

Live at [rt2026.benstrawbridge.com](https://rt2026.benstrawbridge.com)

---

## Stack

- [Astro](https://astro.build) — static site generation, zero client-side framework
- Vanilla JS for all interactivity (gallery lightbox, filmstrip nav, scroll reveal)
- Google Fonts: Playfair Display, Caveat, Raleway, Space Mono

## Development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output → dist/
npm run preview  # serve dist/ locally
```

## Adding content

All trip data lives in one file: **`src/data/days.ts`**

**To add photos for a day:**
1. Drop images into `public/images/days/<N>/`
2. Add paths to the `galleryImages` array for that day in `days.ts`
3. Videos (`.mp4`) are supported — add `video: true` to the gallery item

**To add the hand-drawn map hero image:**
Drop a file named `map.jpg`, `map.webp`, or `map.png` into `public/images/days/<N>/` — detected automatically at build time.

## Deployment

Hosted on Vercel. Deploys automatically on push to `main`.

Custom domain: `rt2026.benstrawbridge.com`
