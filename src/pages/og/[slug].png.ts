import type { APIRoute } from 'astro';
import { generateOgImage } from '../../utils/generateOgImage';
import { days } from '../../data/days';

export function getStaticPaths() {
  return [
    {
      params: { slug: 'index' },
      props: { title: 'Philly to Los Angeles', subtitle: 'Nine days. One truck. 3,581 miles.' },
    },
    {
      params: { slug: 'almanac' },
      props: { title: 'The Almanac', subtitle: 'Nine days. One truck. Philadelphia to Los Angeles.' },
    },
    {
      params: { slug: 'mapbook' },
      props: { title: 'Map Book', subtitle: 'The route, day by day.' },
    },
    ...days.map(d => ({
      params: { slug: `day-${d.day}` },
      props: {
        title: `Day ${d.day} \u2014 ${d.fromShort} \u2192 ${d.toShort}`,
        subtitle: d.tagline,
      },
    })),
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOgImage(props.title, props.subtitle);
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
