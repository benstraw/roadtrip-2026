export interface DayTheme {
  name: string;
  descriptor: string;
  bg: string;
  bgDeep: string;
  surface: string;
  accent: string;
  accentSoft: string;
  text: string;
  textMuted: string;
  border: string;
  gradStart: string;
  gradEnd: string;
  heroGrad: string;
  // for the index card tilt
  tilt: string;
}

export interface Meal {
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  place: string;
  note?: string;
}

export interface Stop {
  name: string;
  note?: string;
}

export interface MusicEmbed {
  artist: string;
  note?: string;
  spotifyEmbed: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean; // hint for PIG layout
  video?: boolean; // render as <video> in grid and lightbox
}

export interface Day {
  day: number;
  slug: string;
  dayOfWeek: string;
  date: string;
  from: string;
  fromShort: string;
  to: string;
  toShort: string;
  miles: number;
  duration: string;
  theme: DayTheme;
  tagline: string;
  narrative: string[];
  highlights: string[];
  meals: Meal[];
  accommodation: string;
  stops: Stop[];
  galleryImages: GalleryImage[];
  music?: MusicEmbed;
  gpxUrl?: string;
}

// ─── THEMES ──────────────────────────────────────────────────────────────────

const frozen: DayTheme = {
  name: 'Frozen',
  descriptor: 'frozen',
  bg: '#0b1929',
  bgDeep: '#060f1a',
  surface: '#112238',
  accent: '#7ebcd6',
  accentSoft: '#4a8aaa',
  text: '#e8f4fb',
  textMuted: '#8ab4cc',
  border: '#1e3a52',
  gradStart: '#0b1929',
  gradEnd: '#1a3a55',
  heroGrad: 'linear-gradient(160deg, #0b1929 0%, #1a3a55 50%, #2a5a7a 100%)',
  tilt: '-1.5deg',
};

const snowstorm: DayTheme = {
  name: 'Snowstorm',
  descriptor: 'snowstorm',
  bg: '#111e2e',
  bgDeep: '#080e18',
  surface: '#192840',
  accent: '#a0c8e0',
  accentSoft: '#5a94b4',
  text: '#ddeef8',
  textMuted: '#7aa4be',
  border: '#223852',
  gradStart: '#111e2e',
  gradEnd: '#243555',
  heroGrad: 'linear-gradient(160deg, #111e2e 0%, #243555 50%, #3a558a 100%)',
  tilt: '1deg',
};

const deepSouth: DayTheme = {
  name: 'Deep South',
  descriptor: 'southern',
  bg: '#120a04',
  bgDeep: '#0a0502',
  surface: '#1e1008',
  accent: '#c4782a',
  accentSoft: '#8a4a1a',
  text: '#f0d8a8',
  textMuted: '#a07848',
  border: '#2e1a0a',
  gradStart: '#120a04',
  gradEnd: '#2a1508',
  heroGrad: 'linear-gradient(160deg, #120a04 0%, #2a1a08 50%, #3a2810 100%)',
  tilt: '-0.8deg',
};

const texasBayou: DayTheme = {
  name: 'Texas Bound',
  descriptor: 'texas-bound',
  bg: '#150e05',
  bgDeep: '#0a0702',
  surface: '#221606',
  accent: '#d4761e',
  accentSoft: '#9a4a10',
  text: '#f4e0c0',
  textMuted: '#a47840',
  border: '#321e08',
  gradStart: '#150e05',
  gradEnd: '#2e1a06',
  heroGrad: 'linear-gradient(160deg, #150e05 0%, #2e1a06 50%, #452808 100%)',
  tilt: '1.2deg',
};

const highDesert: DayTheme = {
  name: 'High Desert',
  descriptor: 'desert',
  bg: '#180d04',
  bgDeep: '#0e0802',
  surface: '#261406',
  accent: '#e8681a',
  accentSoft: '#aa4010',
  text: '#f9e8cc',
  textMuted: '#b07840',
  border: '#361a08',
  gradStart: '#180d04',
  gradEnd: '#321806',
  heroGrad: 'linear-gradient(160deg, #180d04 0%, #321806 40%, #5a2e0a 80%, #7a4a20 100%)',
  tilt: '-1deg',
};

const bigBend: DayTheme = {
  name: 'Big Bend',
  descriptor: 'canyon',
  bg: '#0e1220',
  bgDeep: '#070a14',
  surface: '#161c30',
  accent: '#d4481a',
  accentSoft: '#963010',
  text: '#f8e8d0',
  textMuted: '#b08060',
  border: '#222a3e',
  gradStart: '#0e1220',
  gradEnd: '#200e08',
  heroGrad: 'linear-gradient(160deg, #0e1220 0%, #200e08 40%, #3a1808 80%, #c04020 100%)',
  tilt: '0.5deg',
};

const bigBendDrive: DayTheme = {
  name: 'Canyon Drive',
  descriptor: 'canyon-night',
  bg: '#0a0e1a',
  bgDeep: '#050710',
  surface: '#121828',
  accent: '#c83a0a',
  accentSoft: '#8a2008',
  text: '#f8e5cc',
  textMuted: '#a07850',
  border: '#1e2638',
  gradStart: '#0a0e1a',
  gradEnd: '#1e0a06',
  heroGrad: 'linear-gradient(160deg, #0a0e1a 0%, #1e0a06 30%, #3a1206 60%, #b83010 100%)',
  tilt: '-1.8deg',
};

const sonoran: DayTheme = {
  name: 'Sonoran Sunset',
  descriptor: 'sonoran',
  bg: '#130a1e',
  bgDeep: '#0a0612',
  surface: '#1e1030',
  accent: '#d4600a',
  accentSoft: '#8a3808',
  text: '#f8e0d0',
  textMuted: '#a06040',
  border: '#2a1440',
  gradStart: '#130a1e',
  gradEnd: '#2a0e08',
  heroGrad: 'linear-gradient(160deg, #130a1e 0%, #2a0e08 30%, #6a2808 60%, #d46020 90%, #f09050 100%)',
  tilt: '1.5deg',
};

const california: DayTheme = {
  name: 'California',
  descriptor: 'sunshine',
  bg: '#0a1620',
  bgDeep: '#060e16',
  surface: '#0f2030',
  accent: '#f5c400',
  accentSoft: '#c09000',
  text: '#fff8e0',
  textMuted: '#a09040',
  border: '#1a3040',
  gradStart: '#0a1620',
  gradEnd: '#1a3010',
  heroGrad: 'linear-gradient(160deg, #0a1620 0%, #1a3010 20%, #284808 40%, #f5c400 80%, #ff8c00 100%)',
  tilt: '-0.5deg',
};

// ─── DAYS DATA ───────────────────────────────────────────────────────────────

export const days: Day[] = [
  {
    day: 1,
    slug: '1',
    dayOfWeek: 'Friday',
    date: 'January 30',
    from: 'Philadelphia, PA',
    fromShort: 'Philly',
    to: 'Charlotte, NC',
    toShort: 'Charlotte',
    miles: 510,
    duration: '8 hr',
    theme: frozen,
    tagline: 'Dig out. Point south. Don\'t look back.',
    narrative: [
      'Dug the Tacoma out before seven. Ice under the tires, the street still quiet. Left while the city was sleeping.',
      'DC came and went through the windshield — monuments grey in winter fog, the Potomac barely visible. Hard pack through Virginia, roads clearing somewhere south of Richmond. The cold following us, slower than us. Last hoagie at Wawa, somewhere in Maryland, eaten in the truck.',
    ],
    highlights: [
      'Dug out before 7am — left early',
      'DC through the windshield, monuments in fog',
      'Last hoagie at Wawa, eaten in the car',
      'Ice through Virginia, clearing by the Carolinas',
    ],
    meals: [
      { type: 'Lunch', place: 'Wawa', note: 'The last real hoagie' },
      { type: 'Dinner', place: 'City BBQ', note: 'Charlotte' },
    ],
    accommodation: 'Best Western Plus Huntersville Inn & Suites Near Lake Norman',
    stops: [
      { name: 'Washington DC', note: 'Monuments grey in winter fog' },
    ],
    galleryImages: [
      { src: '/images/days/1/01_mom-goodbye.jpg', alt: 'Mom saying goodbye', caption: 'Mom. The send-off.', wide: true },
      { src: '/images/days/1/02_ben-dad-hoagie.jpg', alt: 'Dad and Ben with a hoagie', caption: 'Last hoagie before the road.' },
      { src: '/images/days/1/03_life-is-good-red-truck-hat.jpg', alt: 'Life is Good red truck hat', caption: 'Life is Good. Red truck. Seems right.' },
      { src: '/images/days/1/04_city-bbq.jpg', alt: 'City BBQ Charlotte', caption: 'City BBQ, Charlotte. Night one.' },
    ],
    gpxUrl: '/maps/Day 1 - Philly to Charlotte.gpx',
  },
  {
    day: 2,
    slug: '2',
    dayOfWeek: 'Saturday',
    date: 'January 31',
    from: 'Charlotte, NC',
    fromShort: 'Charlotte',
    to: 'Montgomery, AL',
    toShort: 'Montgomery',
    miles: 400,
    duration: '6 hr',
    theme: snowstorm,
    tagline: 'Five a.m. Half an inch. We went.',
    narrative: [
      'Five in the morning and snow was already coming down. Half an inch on the road, more coming. We decided to go.',
      'Snowed all the way through Georgia. The South under it looks wrong — Spanish moss beaded with ice, red clay frozen hard. Lunch at a Cracker Barrel near Auburn, Alabama, the place full of AU students treating it like a snow day. The other side of the highway slowed for an accident we\'d already passed. Montgomery appeared through clearing clouds. Dinner at AYA — Southern elevated, West African and Caribbean in the bones. BBQ oyster mushroom, grits, cooked greens. The right end to that day.',
    ],
    highlights: [
      '5am. Already snowing. Decided to go.',
      'Half an inch on the road at departure',
      'Snowed all day — Georgia, Alabama',
      'Cracker Barrel near Auburn — full of AU students on a snow day',
      'An accident behind us, the road clear ahead',
    ],
    meals: [
      { type: 'Lunch', place: 'Cracker Barrel', note: 'Auburn, AL — packed with AU students, snow day crowd' },
      { type: 'Dinner', place: 'AYA Soulful Dining', note: 'Elevation Hotel, Montgomery — Southern elevated, West African and Caribbean roots. BBQ oyster mushroom, grits, cooked greens.' },
    ],
    accommodation: 'Elevation Convening Center & Hotel',
    stops: [
      { name: 'Georgia state line', note: 'Snow following us the whole way' },
    ],
    galleryImages: [
      { src: '/images/days/2/20260131_101224_georgia-welcomes-the-snow.jpg', alt: 'Georgia welcomes you sign in the snow', caption: 'Georgia. In the snow. Unexpected.', wide: true },
      { src: '/images/days/2/20260131_102112-dad-snowy-truck.jpg', alt: 'Dad standing by the snow-covered Tacoma', caption: 'Dad and the Tacoma. Neither bothered by it.', wide: true },
      { src: '/images/days/2/20260131_122530-ice-caked-grill.jpg', alt: 'Ice caked on the truck grill', caption: 'The grill carrying it all the way.' },
      { src: '/images/days/2/20260131_122619-sweet-home-alabama.jpg', alt: 'Sweet Home Alabama welcome sign', caption: 'Sweet Home Alabama.' },
      { src: '/images/days/2/20260131_154221-elevate-view-east.jpg', alt: 'View east from the Elevation Hotel, Montgomery', caption: 'Montgomery, looking east.' },
      { src: '/images/days/2/20260131_154225-elevate-view-west.jpg', alt: 'View west from the Elevation Hotel, Montgomery', caption: 'Montgomery, looking west.' },
      { src: '/images/days/2/20260131_162330-ben-dad-hotel.jpg', alt: 'Ben and Dad at the Elevation Hotel', caption: 'Made it. Montgomery.' },
      { src: '/images/days/2/20260131_173447-elevate-library.jpg', alt: 'Elevation Hotel library', caption: 'The hotel library. Didn\'t expect that.' },
      { src: '/images/days/2/20260131_173626-elevate-library.jpg', alt: 'Elevation Hotel library', caption: 'Elevation Convening Center — the library.' },
      { src: '/images/days/2/20260131_173641-elevate-library.jpg', alt: 'Elevation Hotel library detail', caption: 'Good place to land after a snow day.' },
    ],
    gpxUrl: '/maps/Day 2 - Charlotte NC to Montgomery AL.gpx',
  },
  {
    day: 3,
    slug: '3',
    dayOfWeek: 'Sunday',
    date: 'February 1',
    from: 'Montgomery, AL',
    fromShort: 'Montgomery',
    to: 'Jackson, MS',
    toShort: 'Jackson',
    miles: 245,
    duration: '3.5 hr',
    theme: deepSouth,
    tagline: 'Short drive. The longest day.',
    narrative: [
      'EJI Legacy Museum first, then a ferry across the Alabama River to the sculpture garden — forty degrees, outdoor, you stay as long as you can. Bus back to EJI. Then drove to the National Memorial for Peace and Justice: 800 steel columns, one for every county where a lynching was documented, hanging from cables at eye level. You walk through slowly. There\'s no rushing it.',
      'Left Montgomery on a country road west through Alabama. Came through Selma as the afternoon went grey. Into Mississippi, into Jackson after dark. Quick dinner. That was enough.',
    ],
    highlights: [
      'EJI Legacy Museum, Montgomery',
      'Ferry across the Alabama River',
      'Sculpture garden — 40 degrees, outdoors',
      'National Memorial for Peace and Justice',
      '800 steel columns. One per county.',
      'Country road west. Through Selma.',
      'Jackson after dark',
    ],
    meals: [
      { type: 'Breakfast', place: 'Elevation Convening Center & Hotel', note: 'Big hotel breakfast before a long day' },
      { type: 'Snack', place: 'Gas station', note: 'Road snacks. No time for lunch.' },
      { type: 'Dinner', place: 'Olive Garden', note: 'Quick. Late. That was enough.' },
    ],
    accommodation: 'Best Western Plus Flowood Inn & Suites',
    stops: [
      { name: 'EJI Legacy Museum', note: 'Bryan Stevenson\'s archive. Takes time.' },
      { name: 'Alabama River ferry crossing', note: 'From EJI to the sculpture garden' },
      { name: 'EJI Peace and Justice Memorial Park', note: 'Sculpture garden — outdoors, 40 degrees, worth it' },
      { name: 'National Memorial for Peace and Justice', note: '800 hanging steel columns — one per county where a lynching was documented' },
      { name: 'Selma, AL', note: 'Passed through on the country road west' },
    ],
    galleryImages: [
      { src: '/images/days/3/20260201_085149-dad-breakfast.jpg', alt: 'Dad at breakfast', caption: 'Dad at breakfast. Montgomery.' },
      { src: '/images/days/3/20260201_092048-protest-sign-sculpture-montgomery.jpg', alt: 'Protest sign sculpture, EJI Montgomery', caption: 'Equal Justice Initiative. Montgomery.', wide: true },
      { src: '/images/days/3/20260201_125122-alabama-river-ferry.jpg', alt: 'Alabama River ferry', caption: 'Alabama River ferry. Across to the sculpture park.', wide: true },
      { src: '/images/days/3/20260201_125521-freedom-monument-sculpture-park.jpg', alt: 'Freedom Monument Sculpture Park', caption: 'Freedom Monument Sculpture Park.', wide: true },
      { src: '/images/days/3/20260201_135419-freedom-monument-sculpture-park-2.jpg', alt: 'Freedom Monument Sculpture Park', caption: 'Forty degrees. We stayed.' },
      { src: '/images/days/3/20260201_140334-freedom-monument-sculpture-park-3.jpg', alt: 'Freedom Monument Sculpture Park', caption: 'Freedom Monument Sculpture Park.' },
      { src: '/images/days/3/20260201_141416-freedom-monument-sculpture-park-harriet-tubman.jpg', alt: 'Harriet Tubman sculpture', caption: 'Harriet Tubman.' },
      { src: '/images/days/3/20260201_142852-freedom-monument-sculpture-park-rosa-parks.jpg', alt: 'Rosa Parks sculpture', caption: 'Rosa Parks.' },
      { src: '/images/days/3/20260201_143030-freedom-monument-sculpture-park-john-lewis.jpg', alt: 'John Lewis sculpture', caption: 'John Lewis.' },
      { src: '/images/days/3/20260201_143221-freedom-monument-sculpture-park-brick-makers.jpg', alt: 'The Brick Makers sculpture', caption: 'The Brick Makers.' },
      { src: '/images/days/3/20260201_143244-freedom-monument-sculpture-park-mlkjr.jpg', alt: 'Martin Luther King Jr sculpture', caption: 'Martin Luther King Jr.' },
      { src: '/images/days/3/20260201_144838-national-memorial-for-peace-and-justice-enslaved-people.jpg', alt: 'National Memorial for Peace and Justice', caption: 'National Memorial for Peace and Justice.', wide: true },
      { src: '/images/days/3/20260201_145125-national-memorial-for-peace-and-justice-wilcox-county-alabama.jpg', alt: 'Wilcox County Alabama memorial marker', caption: 'Wilcox County, Alabama.' },
      { src: '/images/days/3/20260201_145143--national-memorial-for-peace-and-justice-counties.jpg', alt: 'Memorial county markers', caption: 'Every county. Every name.' },
      { src: '/images/days/3/20260201_145334-national-memorial-for-peace-and-justice-lancaster-county.jpg', alt: 'Lancaster County memorial marker', caption: 'Lancaster County.' },
      { src: '/images/days/3/20260201_145435-national-memorial-for-peace-and-justice-going down.jpg', alt: 'Going down into the memorial', caption: 'Going down.' },
      { src: '/images/days/3/20260201_145551-national-memorial-for-peace-and-justice-we-will-remember.jpg', alt: 'We will remember', caption: 'We will remember.' },
      { src: '/images/days/3/20260201_150137-national-memorial-for-peace-and-justice-protest-walkers.jpg', alt: 'Protest walkers at the memorial', caption: 'Still walking.' },
      { src: '/images/days/3/20260201_150624-national-memorial-for-peace-and-justice-memorial-placques.jpg', alt: 'Memorial plaques', caption: 'The plaques.' },
      { src: '/images/days/3/20260201_150730-national-memorial-for-peace-and-justice-protest.jpg', alt: 'Protest imagery at the memorial', caption: 'The work continues.' },
      { src: '/images/days/3/20260201_180434-welcome-to-mississippi.jpg', alt: 'Welcome to Mississippi sign', caption: 'Mississippi. Moving again.', wide: true },
      { src: '/images/days/3/20260201_193114-evening-arrival.jpg', alt: 'Evening arrival in Jackson', caption: 'Jackson after dark.' },
    ],
    gpxUrl: '/maps/Day 3 - Montgomery AL to Jackson MS.gpx',
  },
  {
    day: 4,
    slug: '4',
    dayOfWeek: 'Monday',
    date: 'February 2',
    from: 'Jackson, MS',
    fromShort: 'Jackson',
    to: 'Austin, TX',
    toShort: 'Austin',
    miles: 550,
    duration: '8.5 hr',
    theme: texasBayou,
    tagline: 'Mississippi, Louisiana, Texas. All in a day.',
    narrative: [
      'Mississippi flat and green even in February. Crossed the river. Louisiana slower — cypress and still water and the smell of something rotting sweetly in the air. Talking about lunch through Shreveport, went a few exits past downtown, pulled off to look something up. Sam\'s Fish House was right there. Turned out to be top-rated. Oyster po\'boy, thin napkins. Pure luck, perfectly timed.',
      'Texas changed the air. Wider somehow. Austin by evening, loud and warm and smelling like cedar smoke. Rudy\'s BBQ: brisket, white bread.',
    ],
    highlights: [
      'Mississippi flat, Louisiana slower',
      'Crossing the Mississippi River',
      'Cypress and still water through the bayou',
      'Shreveport lunch — oyster po\'boy at Sam\'s',
      'Texas state line. Something shifts.',
    ],
    meals: [
      { type: 'Lunch', place: "Sam's Fish House", note: 'Shreveport — oyster po\'boy, thin napkins' },
      { type: 'Dinner', place: "Rudy's BBQ", note: 'Austin — brisket, white bread' },
    ],
    accommodation: 'Best Western Plus Austin Central',
    stops: [
      { name: 'Shreveport, LA', note: "Pulled off looking for lunch. Found Sam's Southern Eatery by accident. Top-rated. Lucky." },
      { name: 'Texas state line', note: 'Air gets wider' },
    ],
    galleryImages: [
      { src: '/images/days/4/20260202_122625-sams-southern-eatery.jpg', alt: "Sam's Southern Eatery, Shreveport", caption: "Sam's Southern Eatery, Shreveport. Pulled off lucky." },
      { src: '/images/days/4/20260202_124547dad-fried-jalepeno-crayfish-eggroll.jpg', alt: 'Dad with the fried jalapeño crayfish egg roll', caption: 'Fried jalapeño crayfish egg roll. Dad approved.' },
      { src: '/images/days/4/20260202_132728-tacoma-in-shreveport.jpg', alt: 'The Tacoma parked in Shreveport', caption: 'The Tacoma in Shreveport.', wide: true },
      { src: '/images/days/4/20260202_142955-dad-navigator.jpg', alt: 'Dad navigating', caption: 'The navigator.' },
      { src: '/images/days/4/20260202_195859-rudys-austin.jpg', alt: "Rudy's BBQ Austin", caption: "Rudy's, Austin." },
      { src: '/images/days/4/20260202_200435-rudys-austin-food.jpg', alt: "Rudy's BBQ food", caption: 'Brisket in butcher paper.' },
      { src: '/images/days/4/IMG_20260203_202755-me-driving.jpg', alt: 'Behind the wheel', caption: 'Behind the wheel.' },
      { src: '/images/days/4/IMG_20260203_202803-driving-into-sunset.jpg', alt: 'Driving into the sunset', caption: 'Sun going down over Texas.', wide: true },
    ],
    gpxUrl: '/maps/Day 4 - Jackson MS to Austin TX.gpx',
  },
  {
    day: 5,
    slug: '5',
    dayOfWeek: 'Tuesday',
    date: 'February 3',
    from: 'Austin, TX',
    fromShort: 'Austin',
    to: 'Terlingua, TX',
    toShort: 'Terlingua',
    miles: 487,
    duration: '7.5 hr',
    theme: highDesert,
    tagline: 'Hwy 190. Two lanes. Almost nobody.',
    narrative: [
      'Highway 190 the whole way — Menard, Eldorado, Iraan, Fort Stockton, Alpine. No interstate, no shortcuts. Two lanes from start to finish and almost no other vehicles. The Hill Country scrubland gave way to Chihuahuan desert somewhere past Fort Stockton, the landscape flattening and drying out, the sky getting bigger. Stopped at the Walmart in Alpine for food — felt like the entire town was in there. Just the two of us and the road after that.',
      'Terlingua is a ghost town that didn\'t finish dying. The Starlight Theatre lives inside its ruins — string lights overhead, coyotes somewhere out in the dark, a cold beer for dad. The right kind of end to a long day.',
    ],
    highlights: [
      'Highway 190 — two lanes, almost no other vehicles',
      'Menard · Eldorado · Iraan · Fort Stockton · Alpine',
      'Hill Country into Chihuahuan Desert',
      'Sky getting bigger past Fort Stockton',
      'Terlingua Ghost Town at dusk',
    ],
    meals: [
      { type: 'Breakfast', place: 'Best Western Plus Austin Central', note: 'Early — on the road by 7:30' },
      { type: 'Snack', place: 'Walmart, Alpine TX', note: 'Felt like the whole town was in there' },
      { type: 'Dinner', place: 'Starlight Theatre', note: 'String lights, coyotes somewhere out in the dark' },
    ],
    accommodation: 'Big Bend Station',
    stops: [
      { name: 'Menard', note: 'Hwy 190 begins' },
      { name: 'Eldorado', note: 'Still Hill Country' },
      { name: 'Iraan', note: 'Desert starting to take hold' },
      { name: 'Fort Stockton', note: 'Last real stop before the big empty' },
      { name: 'Alpine', note: 'Walmart stop — felt like the whole town was inside' },
      { name: 'Terlingua Ghost Town', note: 'An old mercury mining town that didn\'t finish dying' },
      { name: 'Starlight Theatre', note: 'Restaurant inside the ruin. The right kind of place.' },
    ],
    galleryImages: [
      { src: '/images/days/5/20260203_065314-heart-of-texas-waffle.jpg', alt: 'Heart of Texas waffle', caption: 'Heart of Texas waffle. Before the long road.' },
      { src: '/images/days/5/20260203_105436-lonely-road-1.jpg', alt: 'Empty two-lane highway', caption: 'Two lanes. Nothing but road.' },
      { src: '/images/days/5/20260203_105443-lonely-road-panorama.jpg', alt: 'Panorama of Hwy 190', caption: 'Hwy 190. Nothing in any direction.', wide: true },
      { src: '/images/days/5/20260203_115406-lonely-road-3.jpg', alt: 'Empty highway', caption: 'Six hours of this. We liked it.' },
      { src: '/images/days/5/20260203_121706-lonely-road-roundabout.jpg', alt: 'Roundabout on the highway', caption: 'Smallest roundabout in Texas, probably.' },
      { src: '/images/days/5/20260203_135632-lonely-road-fort-stockton.jpg', alt: 'Highway near Fort Stockton', caption: 'Fort Stockton.' },
      { src: '/images/days/5/20260203_155630-lonely-road-7.jpg', alt: 'Empty highway, late afternoon', caption: 'Still going.' },
      { src: '/images/days/5/20260203_155751-lonely-road-panorama-2.jpg', alt: 'Desert highway panorama', caption: 'Desert wide open.', wide: true },
      { src: '/images/days/5/20260203_155826-lonely-road-8.jpg', alt: 'Road toward the mountains', caption: 'Mountains on the horizon. Getting close.' },
      { src: '/images/days/5/20260203_172738-terilingua-ghost-town-cemetary.jpg', alt: 'Terlingua ghost town cemetery', caption: 'Terlingua cemetery.' },
      { src: '/images/days/5/20260203_172918-terilingua-ghost-town-cemetary.jpg', alt: 'Terlingua ghost town cemetery', caption: 'The ghost town that didn\'t finish dying.' },
      { src: '/images/days/5/20260203_174613-local-flavor.jpg', alt: 'Local flavor, Terlingua', caption: 'Local flavor.' },
      { src: '/images/days/5/20260203_180032-terilingua-ghost-town-starlight-theater-me-dad.jpg', alt: 'Dad and Ben at the Starlight Theatre', caption: 'Starlight Theatre, Terlingua. Night one.' },
    ],
    gpxUrl: '/maps/Day 5 - Austin TX to Terilingua TX.gpx',
  },
  {
    day: 6,
    slug: '6',
    dayOfWeek: 'Wednesday',
    date: 'February 4',
    from: 'Terlingua, TX',
    fromShort: 'Terlingua',
    to: 'Big Bend NP',
    toShort: 'Big Bend',
    miles: 121,
    duration: '40 min',
    theme: bigBend,
    tagline: 'First day in. Toes in the Rio Grande. Raymond.',
    narrative: [
      'The Chisos Mountain Lodge had been canceled — water out, no notice until we were already in Texas. Scrambled to find the Airbnb from the road. Checked out of Big Bend Station in the dark, gas station breakfast, egg sandwich and burrito, and into the park.',
      'Panther Junction first for the ranger talk. Then east — down to the river near the hot spring, boat launch by the village. We walked to the bank and put our feet in the Rio Grande. First time for both of us. Mexico right there on the other side. On the way to Boquillas Canyon, three coydogs crossed the road ahead and disappeared into the desert.',
      'At the canyon trailhead: a man on horseback, crossing from the Mexican side, selling empanadas and bobbleheads in the middle of a national park. We bought one. Put him on the dashboard. Named him Raymond. He rode with us the rest of the trip. The canyon itself was something else — I walked out into the river, ankle deep, low water, basically standing in Mexico.',
      'Only 2pm. Decided to keep going. Drove up to the Chisos Mountain Lodge — the place we were supposed to stay — walked around, looked down at the famous Window. Then back toward Terlingua to find the Airbnb before dark. Off-grid, two miles down an unimproved dirt road. Dark sky conservation town — no street lights, nothing. Dad spotted the old mine trail on the way and said what the hey, so we added two more miles for a last view before sunset. Made the Airbnb with light to spare. Went back to the Starlight. Came home to a sky full of stars and laid out looking up at it.',
    ],
    highlights: [
      'Chisos Lodge canceled — water out, pivoted to Airbnb',
      'Gas station breakfast — egg sandwich and burrito',
      'Panther Junction ranger talk',
      'Toes in the Rio Grande — first time for both',
      'Three coydogs crossing the road',
      'Mexican horseback vendor at Boquillas — empanadas in a national park',
      'Raymond the bobblehead — dashboard mascot, named on the spot',
      'Walked into the river. Ankle deep. Basically Mexico.',
      'Chisos Mountain Lodge visit — the one that got away',
      'Dad: "what the hey" — old mine trail added',
      'Off-grid Airbnb, dirt road, dark sky town',
      'Home after dark. Skygazing.',
    ],
    meals: [
      { type: 'Breakfast', place: 'Gas station', note: 'Egg sandwich and burrito — early, on the road' },
      { type: 'Dinner', place: 'Starlight Theatre', note: 'Night two. Back because it was good and the ghost town has limited options.' },
    ],
    accommodation: 'Terlingua Sky Airbnb — off-grid, 2 miles down an unimproved dirt road in Terlingua Ghost Town',
    stops: [
      { name: 'Panther Junction Visitor Center', note: 'Ranger talk. Park headquarters.' },
      { name: 'Rio Grande hot spring area', note: 'Boat launch near the village, east side of the park' },
      { name: 'Rio Grande bank', note: 'Toes in. First time for both. Mexico right there.' },
      { name: 'Boquillas Canyon road', note: 'Three coydogs crossed ahead of us' },
      { name: 'Boquillas Canyon', note: 'Horseback vendor from Mexico. Empanadas. Raymond. Ankle-deep in the river.' },
      { name: 'Chisos Mountain Lodge', note: 'Where we were supposed to stay. Walked around anyway.' },
      { name: 'Old Mine Trail', note: 'Dad\'s call. Two extra miles. Worth it.' },
      { name: 'Terlingua Sky Airbnb', note: 'Dark sky town. Dirt road. Stars like you\'ve never seen.' },
    ],
    galleryImages: [
      { src: '/images/days/6/20260204_074151-study-butte.jpg', alt: 'Study Butte, TX', caption: 'Study Butte. West entrance to Big Bend.' },
      { src: '/images/days/6/20260204_104426-dad-points-rocks.jpg', alt: 'Dad pointing at rock formations', caption: 'Dad reads the geology.' },
      { src: '/images/days/6/20260204_104437-open-desert.jpg', alt: 'Open desert', caption: 'Open desert.', wide: true },
      { src: '/images/days/6/20260204_104511-green-cactus.jpg', alt: 'Green cactus', caption: 'Green.' },
      { src: '/images/days/6/20260204_104526-spiky-cactus.jpg', alt: 'Spiky cactus', caption: 'Spiky.' },
      { src: '/images/days/6/20260204_104549-purple-cactus.jpg', alt: 'Purple cactus', caption: 'Purple.' },
      { src: '/images/days/6/20260204_104612-pointy-cactus.jpg', alt: 'Pointy cactus', caption: 'Pointy.' },
      { src: '/images/days/6/20260204_110623-desert-tunnel.jpg', alt: 'Desert road tunnel', caption: 'Desert tunnel.' },
      { src: '/images/days/6/20260204_113408-in-the-rio-grande.jpg', alt: 'In the Rio Grande', caption: 'Toes in the Rio Grande. Ankle-deep in Mexico.', wide: true },
      { src: '/images/days/6/20260204_121125-rio-grande-wetland-conservation-project.jpg', alt: 'Rio Grande wetland', caption: 'Rio Grande wetland.' },
      { src: '/images/days/6/20260204_122113-raymond.mp4', alt: 'Raymond the bobblehead', caption: 'Raymond. Dashboard mascot. Named on the spot.', video: true },
      { src: '/images/days/6/20260204_125022-ben-overlook.jpg', alt: 'At the overlook', caption: 'The overlook.' },
      { src: '/images/days/6/20260204_125044-dad-overlook.jpg', alt: 'Dad at the overlook', caption: 'Dad at the overlook.' },
      { src: '/images/days/6/20260204_130551-boquillos-canyon.jpg', alt: 'Boquillas Canyon', caption: 'Boquillas Canyon.', wide: true },
      { src: '/images/days/6/20260204_130648.mp4', alt: 'Boquillas Canyon video', caption: 'Boquillas Canyon.', video: true },
      { src: '/images/days/6/20260204_131038-boquillos-canyon-2.jpg', alt: 'Boquillas Canyon walls', caption: 'The left wall is Texas. The right wall is Mexico.' },
      { src: '/images/days/6/20260204_131839-boquillos-canyon-3.jpg', alt: 'Boquillas Canyon', caption: 'Boquillas Canyon.' },
      { src: '/images/days/6/20260204_134800-boquillos-canyon-parking.jpg', alt: 'Boquillas Canyon trailhead', caption: 'Boquillas Canyon trailhead.' },
      { src: '/images/days/6/20260204_142246-big-bend-signage.jpg', alt: 'Big Bend National Park sign', caption: 'Big Bend National Park.' },
      { src: '/images/days/6/20260204_150212-road-up-to-chisos.jpg', alt: 'Road up to the Chisos Mountains', caption: 'Road up to the Chisos.', wide: true },
      { src: '/images/days/6/20260204_155009-above-the-window.jpg', alt: 'Above the Window, Chisos Mountains', caption: 'Above the Window.' },
      { src: '/images/days/6/20260204_170253-ben-dad-old-mine.jpg', alt: 'Ben and Dad at the old mine', caption: 'Old Mine Trail. Dad\'s call. Two extra miles.' },
      { src: '/images/days/6/20260204_171400-upper-window.jpg', alt: 'Upper Window, Chisos Mountains', caption: 'Upper Window.' },
      { src: '/images/days/6/20260204_190618-startlight-theater-night.jpg', alt: 'Starlight Theatre at night', caption: 'Starlight Theatre, night two.' },
      { src: '/images/days/6/20260204_230641-terilingua-sky-airbnb-night-sky.jpg', alt: 'Night sky over Terlingua', caption: 'Stars over Terlingua.', wide: true },
      { src: '/images/days/6/20260204_230915-terilingua-sky-airbnb-night-sky-2.jpg', alt: 'Night sky over Terlingua', caption: 'No light. No ceiling. Just this.', wide: true },
    ],
    gpxUrl: '/maps/Day 6 - Big Bend National Park.gpx',
  },
  {
    day: 7,
    slug: '7',
    dayOfWeek: 'Thursday',
    date: 'February 5',
    from: 'Big Bend NP',
    fromShort: 'Big Bend',
    to: 'Big Bend NP',
    toShort: 'Big Bend',
    miles: 133,
    duration: 'All day',
    theme: bigBendDrive,
    tagline: 'Sky island to sea of desert. Terry Klein at the Starlight.',
    narrative: [
      'Up early, straight into the park, straight up to the Chisos Mountain Lodge. The Window Trail: five miles down through the sky island to a pouroff that frames the entire desert basin below — you\'re standing on an island of mountains looking out over a sea of nothing. Challenging hike. We took our time.',
      'Back to the truck and south on Ross Maxwell all the way to Santa Elena Canyon. The Rio Grande cuts through 1,500-foot walls on both sides — the canyon closes around you and the sky narrows to a strip. Another one you stand in and don\'t say much.',
      'Back to the Starlight for the third night running. This time there was live music — Terry Klein, a country singer from the area, playing to a room full of people who\'d all found the same ghost town at the end of the same dirt road. Caught a gorgeous sunset. Stars again after. Early to bed — crack of dawn start tomorrow, longest drive of the trip.',
    ],
    highlights: [
      'Window Trail — 5 miles, sky island to sea of desert',
      'A challenging hike. Took our time.',
      'Ross Maxwell Scenic Drive to Santa Elena Canyon',
      'Santa Elena: 1,500 ft walls, both sides, sky a thin strip above',
      'Starlight Theatre night three — Terry Klein live, country from the area',
      'Gorgeous sunset',
      'Early bed — longest day of the trip tomorrow',
    ],
    meals: [
      { type: 'Breakfast', place: 'Espresso y Poco Mas', note: 'Breakfast burrito. Terlingua.' },
      { type: 'Dinner', place: 'Starlight Theatre', note: 'Night three. Terry Klein playing live. Ghost town packed.' },
    ],
    accommodation: 'Terlingua Sky Airbnb',
    stops: [
      { name: 'Chisos Mountain Lodge', note: 'Base for the Window Trail' },
      { name: 'Window Trail', note: '5 miles. Sky island looking down into the desert basin.' },
      { name: 'Ross Maxwell Scenic Drive', note: 'South through the park to Santa Elena' },
      { name: 'Sotol Vista Overlook', note: 'Desert and river, wide open' },
      { name: 'Mule Ears Viewpoint', note: 'Twin volcanic peaks' },
      { name: 'Castolon Historic District', note: 'Old border outpost' },
      { name: 'Santa Elena Canyon', note: '1,500 ft walls on both sides. Sky narrows to a strip.' },
    ],
    music: {
      artist: 'Terry Klein',
      note: 'Playing live at the Starlight Theatre, Terlingua — night three',
      spotifyEmbed: 'https://open.spotify.com/embed/track/6au2EXVlt3xaNkTHtKKff4?utm_source=generator',
    },
    galleryImages: [
      { src: '/images/days/7/20260205_073334-terinlingua-sky-sunrise.jpg', alt: 'Sunrise over Terlingua', caption: 'Sunrise over Terlingua.', wide: true },
      { src: '/images/days/7/20260205_073404-terinlingua-sky-sunrise.jpg', alt: 'Terlingua sunrise', caption: 'Last morning at the Airbnb.' },
      { src: '/images/days/7/20260205_073411-terinlingua-sky-sunrise.jpg', alt: 'Terlingua sunrise', caption: 'Up before the sun.' },
      { src: '/images/days/7/20260205_084125-esspresso-y-poco-mas.jpg', alt: 'Espresso y Poco Mas', caption: 'Espresso y Poco Mas. Breakfast burrito before the hike.' },
      { src: '/images/days/7/20260205_084213-ghost-town-ford.jpg', alt: 'Old Ford in the ghost town', caption: 'Ghost Town Ford.' },
      { src: '/images/days/7/20260205_102034-windows-trail-1.jpg', alt: 'Window Trail', caption: 'Into the Chisos.' },
      { src: '/images/days/7/20260205_102150-windows-trail-2.jpg', alt: 'Window Trail', caption: 'The trail drops through the trees.' },
      { src: '/images/days/7/20260205_102402-windows-trail-3.jpg', alt: 'Window Trail', caption: 'Descending.' },
      { src: '/images/days/7/20260205_110612-windows-trail-5.jpg', alt: 'Window Trail', caption: 'Sky island.', wide: true },
      { src: '/images/days/7/20260205_111234-windows-trail-7.jpg', alt: 'Window Trail', caption: 'Still going.' },
      { src: '/images/days/7/20260205_111450-windows-trail-8.jpg', alt: 'Window Trail', caption: 'The desert opens below.' },
      { src: '/images/days/7/20260205_111624-windows-trail-9.jpg', alt: 'Window Trail', caption: 'Five miles. No shade.' },
      { src: '/images/days/7/20260205_113924-windows-trail-10.jpg', alt: 'Window Trail', caption: 'Window Trail.' },
      { src: '/images/days/7/20260205_120317-windows-trail-11.jpg', alt: 'Window Trail', caption: 'The pour-off ahead.' },
      { src: '/images/days/7/20260205_120524-windows-trail-12.jpg', alt: 'Window Trail', caption: 'Getting close.' },
      { src: '/images/days/7/20260205_120615-windows-trail-13.jpg', alt: 'Window Trail', caption: 'The canyon narrows.' },
      { src: '/images/days/7/20260205_121831-windows-trail-14.jpg', alt: 'Window Trail', caption: 'Almost there.' },
      { src: '/images/days/7/20260205_122143-windows-trail-15.jpg', alt: 'Window Trail pouroff', caption: 'The Window.', wide: true },
      { src: '/images/days/7/20260205_123751-windows-trail-16.jpg', alt: 'The Window — sea of desert below', caption: 'Sea of desert below.' },
      { src: '/images/days/7/20260205_132720-windows-trail-17.jpg', alt: 'At the Window', caption: 'We stood there for a while.' },
      { src: '/images/days/7/20260205_132720-windows-trail-18.jpg', alt: 'At the Window', caption: 'At the Window.' },
      { src: '/images/days/7/20260205_144406-desert-cactus.jpg', alt: 'Desert cactus', caption: 'Desert cactus.' },
      { src: '/images/days/7/20260205_151343-desert-ben-dad.jpg', alt: 'Ben and Dad in the desert', caption: 'Ross Maxwell Scenic Drive.' },
      { src: '/images/days/7/20260205_152517-desert-cactus-2.jpg', alt: 'Desert cactus', caption: 'Sonoran desert.' },
      { src: '/images/days/7/20260205_154151-desert-vista.jpg', alt: 'Desert vista', caption: 'The desert going on.', wide: true },
      { src: '/images/days/7/20260205_164921-santa-elena-canyon-1.jpg', alt: 'Santa Elena Canyon', caption: 'Santa Elena Canyon.' },
      { src: '/images/days/7/20260205_164929-santa-elena-canyon-2-panorama.jpg', alt: 'Santa Elena Canyon panorama', caption: 'The walls close in.', wide: true },
      { src: '/images/days/7/20260205_164957-santa-elena-canyon-3.jpg', alt: 'Santa Elena Canyon', caption: '1,500 feet on both sides.' },
      { src: '/images/days/7/20260205_170138-santa-elena-canyon-4-ben-dad-rabbit-ears.jpg', alt: 'Ben and Dad with rabbit ears at Santa Elena', caption: 'Rabbit ears. Santa Elena.' },
      { src: '/images/days/7/20260205_171446-santa-elena-canyon-ben-dad-high-5.jpg', alt: 'Ben and Dad high five at the canyon', caption: 'High five at the canyon.' },
      { src: '/images/days/7/20260205_181803-santa-elena-canyon-sunset.jpg', alt: 'Sunset at Santa Elena Canyon', caption: 'Santa Elena sunset.', wide: true },
      { src: '/images/days/7/20260205_190021-starlight-theater.jpg', alt: 'Starlight Theatre', caption: 'Starlight Theatre, night three.' },
      { src: '/images/days/7/20260205_221013-terilingua-sky-night-house.jpg', alt: 'Terlingua Sky Airbnb at night', caption: 'The Airbnb after dark.' },
      { src: '/images/days/7/20260205_222243-terilingua-sky-night-1.jpg', alt: 'Night sky over Terlingua', caption: 'Night sky, Terlingua.', wide: true },
      { src: '/images/days/7/20260205_232741-terilingua-sky-night-2.jpg', alt: 'Night sky over Terlingua', caption: 'Stars over the desert.', wide: true },
      { src: '/images/days/7/20260205_232940-terilingua-sky-night-3.jpg', alt: 'Night sky over Terlingua', caption: 'Last night under this sky.' },
      { src: '/images/days/7/20260205_232958-terilingua-sky-night-4.jpg', alt: 'Night sky over Terlingua', caption: 'No light for miles in any direction.' },
    ],
    gpxUrl: '/maps/Day 7 - Big Bend National Park.gpx',
  },
  {
    day: 8,
    slug: '8',
    dayOfWeek: 'Friday',
    date: 'February 6',
    from: 'Big Bend NP',
    fromShort: 'Big Bend',
    to: 'Tucson, AZ',
    toShort: 'Tucson',
    miles: 636,
    duration: '9 hr',
    theme: sonoran,
    tagline: 'Hwy 170. Marfa. El Paso. Tucson. Carne seca.',
    narrative: [
      'Breakfast burrito at Espresso y Poco Mas — good send-off from Terlingua. Then Highway 170 out of the park, following the Rio Grande through canyon country: river below, rock walls close, no guardrail. Best driving of the whole trip. A Presidio County Sheriff pulled us over on the empty highway. Warning and a laugh. Back on the road.',
      'Through a border check stop, then north to Marfa. Coffee and a trip to the post office — sent some mail. Then out to I-10 and the long run west: El Paso, across the New Mexico line, Las Cruces, and finally into Arizona as the sun dropped.',
      'Tucson at 7. I talked dad into El Chorro — the original, since 1922, packed on a Friday night. Good to stand still somewhere after 619 miles. Had the carne seca.',
    ],
    highlights: [
      'Espresso y Poco Mas — breakfast burrito, Terlingua send-off',
      'Hwy 170 — Rio Grande below, no guardrail',
      'Presidio County Sheriff — warning and a laugh',
      'Border check stop',
      'Marfa — coffee and sent some mail',
      'I-10 west: El Paso · Las Cruces · Tucson',
      'El Chorro since 1922 — talked dad into it',
      'Carne seca. Packed house. Good to stand still.',
    ],
    meals: [
      { type: 'Breakfast', place: 'Espresso y Poco Mas', note: 'Breakfast burrito. Good send-off from Terlingua.' },
      { type: 'Snack', place: 'Marfa, TX', note: 'Coffee and a post office stop' },
      { type: 'Dinner', place: 'El Chorro', note: 'Since 1922. Packed. Carne seca. Worth the convincing.' },
    ],
    accommodation: 'Best Western Gold Poppy Inn',
    stops: [
      { name: 'Highway 170 Scenic Byway', note: 'Rio Grande canyon road. No guardrail.' },
      { name: 'Presidio County Sheriff', note: 'Warning and a laugh. Moving again.' },
      { name: 'Border check stop', note: 'Routine crossing on the way out of the Big Bend corridor' },
      { name: 'Marfa, TX', note: 'Coffee. Post office. Sent some mail.' },
      { name: 'El Paso, TX', note: 'I-10 west begins' },
      { name: 'Las Cruces, NM', note: 'Crossing into New Mexico briefly' },
      { name: 'El Chorro, Tucson', note: 'Since 1922. Talked dad into it. Right call.' },
    ],
    galleryImages: [
      { src: '/images/days/8/20260206_071857-terilingua-sky-sunrise-1.jpg', alt: 'Last sunrise from the Terlingua Sky Airbnb', caption: 'Last sunrise from the Airbnb.', wide: true },
      { src: '/images/days/8/20260206_071903-terilingua-sky-sunrise-2.jpg', alt: 'Terlingua sunrise', caption: 'Terlingua at dawn.' },
      { src: '/images/days/8/20260206_074341-terilingua-sky-sunrise-3.jpg', alt: 'Terlingua sunrise', caption: 'We watched this one. Had to.' },
      { src: '/images/days/8/20260206_074400-terilingua-sky-sunrise-4.jpg', alt: 'Terlingua sunrise', caption: 'One last look.' },
      { src: '/images/days/8/20260206_075253-terilingua-sky-sunrise-5.jpg', alt: 'Terlingua sunrise', caption: 'Sun coming up over the desert.' },
      { src: '/images/days/8/20260206_075333-terilingua-sky-sunrise-6.jpg', alt: 'Terlingua sunrise before the drive', caption: 'Sunrise before the long drive.', wide: true },
      { src: '/images/days/8/20260206_092911-presidio-county-rte-170.jpg', alt: 'Highway 170, Presidio County', caption: 'Highway 170. Rio Grande below.', wide: true },
      { src: '/images/days/8/20260206_092915-presidio-county-rte-170.jpg', alt: 'Highway 170, Presidio County', caption: 'No guardrail. No cars. No problem.' },
      { src: '/images/days/8/20260206_093137-presidio-county-rte-170-dad-tourist.jpg', alt: 'Dad being a tourist on Highway 170', caption: 'Dad doing the tourist thing.' },
      { src: '/images/days/8/20260206_105210-presidio-county-rte-170-placque-first-ranch-west-texas.jpg', alt: 'Plaque: First Ranch in West Texas', caption: 'First Ranch in West Texas.' },
      { src: '/images/days/8/20260206_114645-marfa.jpg', alt: 'Marfa, TX', caption: 'Marfa.' },
      { src: '/images/days/8/20260206_114649-marfa-2.jpg', alt: 'Marfa, TX', caption: 'Marfa. Coffee and a stamp.' },
      { src: '/images/days/8/20260206_141919-welcome-nm.jpg', alt: 'Welcome to New Mexico sign', caption: 'New Mexico.', wide: true },
      { src: '/images/days/8/20260206_142146-NM-desert.jpg', alt: 'New Mexico desert', caption: 'New Mexico desert.' },
      { src: '/images/days/8/20260206_184626-el-chorro.jpg', alt: 'El Chorro, Tucson', caption: 'El Chorro, Tucson. Since 1922.' },
    ],
    gpxUrl: '/maps/Day 8 - Terilingua TX to Tucson AZ.gpx',
  },
  {
    day: 9,
    slug: '9',
    dayOfWeek: 'Saturday',
    date: 'February 7',
    from: 'Tucson, AZ',
    fromShort: 'Tucson',
    to: 'Los Angeles, CA',
    toShort: 'Los Angeles',
    miles: 490,
    duration: '7 hr',
    theme: california,
    tagline: 'The desert thins. The Pacific smell arrives.',
    narrative: [
      'Sunny Tucson morning. Snow shovel still in the back — the one we dug out with in Philadelphia eight days ago. It rode the whole way.',
      'Sonoran desert to California — the landscape running through its paces: saguaro and rock, then the Salton Sea basin flat and strange, then mountains, then coastal haze and the smell of the Pacific coming in through the vents.',
      'Lunch with Denis somewhere in the desert. Good timing for a familiar face. Then the state line. Then the feeling of it.',
      'LA welcomed us with stopped traffic in Chino Hills. The little stick shift Tacoma felt right at home — sat in it and held its own. Dinner with family at Locanda Portofino in Santa Monica, a walk from the beach. Good food. Good table. End of the road.',
    ],
    highlights: [
      'Sonoran desert running out beneath the tires',
      'Salton Sea flat and strange',
      'Lunch with Denis — a familiar face',
      'California state line',
      'Chino Hills traffic — Tacoma in its element',
      'Dinner with family — Locanda Portofino, Santa Monica',
      'A walk from the beach. End of the road.',
    ],
    meals: [
      { type: 'Lunch', place: 'With Denis', note: 'Good timing for a familiar face' },
      { type: 'Dinner', place: 'Locanda Portofino', note: 'Santa Monica. Family. A walk from the beach.' },
    ],
    accommodation: 'Home',
    stops: [
      { name: 'California State Line', note: 'The feeling of it' },
      { name: 'Lunch with Denis', note: 'Desert, somewhere' },
      { name: 'Chino Hills', note: 'Stopped traffic. Tacoma fit right in.' },
      { name: 'Locanda Portofino, Santa Monica', note: 'Dinner with family. Walk from the beach.' },
    ],
    galleryImages: [
      { src: '/images/days/9/20260207_081320-last-morning-departure-sunny-tucson.jpg', alt: 'Last morning, sunny Tucson', caption: 'Last morning. Sunny Tucson.', wide: true },
      { src: '/images/days/9/20260207_081353-still-have-snow-shovel-in-back.jpg', alt: 'Snow shovel still in the truck bed', caption: 'Snow shovel still in the back. Philadelphia to Tucson.' },
      { src: '/images/days/9/20260207_081600-dad-ready.jpg', alt: 'Dad ready to go', caption: 'Dad ready.' },
      { src: '/images/days/9/20260207_111827-d-nice-with-daughter.jpg', alt: 'Denis', caption: 'Denis.' },
      { src: '/images/days/9/20260207_134544-road-horses.jpg', alt: 'Horses by the road', caption: 'Horses on the road.', wide: true },
      { src: '/images/days/9/20260207_183023-final-mileage-3753-2.jpg', alt: 'Final trip mileage: 3,753 miles', caption: '3,753 miles.' },
      { src: '/images/days/9/20260207_212434-california-palm-tree-lined-street.jpg', alt: 'California palm tree lined street', caption: 'Palm trees. Made it.', wide: true },
    ],
    gpxUrl: '/maps/Day 9 - Tucson AZ to Los Angeles CA.gpx',
  },
];

export const tripTotals = {
  miles: days.reduce((acc, d) => acc + d.miles, 0),
  // Odometer-verified total from Day 9 photo — includes city driving, park roads, side trips
  odometerMiles: 3753,
  days: days.length,
  states: ['PA', 'DE', 'MD', 'VA', 'NC', 'SC', 'GA', 'AL', 'MS', 'LA', 'TX', 'NM', 'AZ', 'CA'],
  totalMeals: days.reduce((acc, d) => acc + d.meals.length, 0),
  totalStops: days.reduce((acc, d) => acc + d.stops.length, 0),
  totalPhotos: days.reduce((acc, d) => acc + d.galleryImages.filter(g => !g.video).length, 0),
  totalVideos: days.reduce((acc, d) => acc + d.galleryImages.filter(g => g.video).length, 0),
  // Highest elevation reached: Chisos Basin, Big Bend NP (GPS-recorded, Day 6)
  highPointFt: 5784,
  highPointLabel: 'Chisos Basin, Big Bend NP',
};

// ─── PHOTO GUIDE ─────────────────────────────────────────────────────────────
//
// TO ADD PHOTOS: Drop images into /public/images/days/<day-number>/
// Then update the galleryImages array above for that day.
//
// Recommended filename convention:
//   /public/images/days/1/map.jpg        ← drawn map book photo (for hero)
//   /public/images/days/1/photo-01.jpg   ← gallery photos
//   /public/images/days/1/photo-02.jpg
//
// The hero photo slot is in src/pages/days/[day].astro → .hero-photo div.
// Uncomment and update the <img> tag there when you have the map book photos.
//
// Gallery images: update the galleryImages arrays above with real src paths.
// The lightbox and PIG grid will work automatically with any images.
//
// ─────────────────────────────────────────────────────────────────────────────
