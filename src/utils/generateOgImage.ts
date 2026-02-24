import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const cwd = process.cwd();

// Load once at module init — re-used for every page at build time
const playfairData = (() => {
  const buf = readFileSync(join(cwd, 'src/assets/fonts/PlayfairDisplay-Bold.ttf'));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
})();

const spaceMonoData = (() => {
  const buf = readFileSync(join(cwd, 'src/assets/fonts/SpaceMono-Regular.ttf'));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
})();

const bgSrc = (() => {
  const buf = readFileSync(
    join(cwd, 'public/images/days/5/20260203_135632-lonely-road-fort-stockton.jpg')
  );
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
})();

export async function generateOgImage(title: string, subtitle?: string): Promise<Uint8Array> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0b0f14',
        },
        children: [
          // Background photo via img element
          {
            type: 'img',
            props: {
              src: bgSrc,
              width: 1200,
              height: 630,
              style: {
                position: 'absolute',
                top: 0, left: 0,
                width: 1200,
                height: 630,
                objectFit: 'cover',
                objectPosition: 'center',
              },
            },
          },
          // Dark gradient overlay — heavier at bottom for text legibility
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0, right: 0, bottom: 0, left: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.3) 100%)',
                display: 'flex',
              },
              children: '',
            },
          },
          // Text block pinned to bottom-left
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 60,
                left: 72,
                right: 72,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              },
              children: [
                // Eyebrow: site identity
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Space Mono',
                      fontSize: 15,
                      letterSpacing: 4,
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                    },
                    children: 'PHILLY \u2192 LOS ANGELES  \u00B7  2026',
                  },
                },
                // Main title
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Playfair Display',
                      fontWeight: 700,
                      fontSize: 62,
                      lineHeight: 1.1,
                      color: '#ffffff',
                    },
                    children: title,
                  },
                },
                // Tagline / subtitle
                ...(subtitle
                  ? [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontFamily: 'Space Mono',
                            fontSize: 18,
                            color: 'rgba(255,255,255,0.5)',
                            letterSpacing: 0.5,
                          },
                          children: subtitle,
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
        ],
      },
    } as any,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Playfair Display', data: playfairData, weight: 700, style: 'normal' as const },
        { name: 'Space Mono', data: spaceMonoData, weight: 400, style: 'normal' as const },
      ],
    }
  );

  return new Resvg(svg).render().asPng();
}
