// ─── ALMANAC DATA ─────────────────────────────────────────────────────────────
//
// Source: GPX tracks recorded on Garmin inReach, all 9 days.
// State mileage derived via point-in-polygon from GPS coordinates (haversine).
// GPS total: 3,571 mi. Odometer total: 3,753 mi (confirmed Day 9 truck photo).
// Difference accounts for city driving, park roads, Airbnb dirt road, warm-up
// idle miles, and GPS signal gaps.
//
// ─────────────────────────────────────────────────────────────────────────────

export interface StateEntry {
  name: string;
  abbrev: string;
  miles: number;
  days: number[];
  primaryRoads: string[];
  towns: string[];
  note: string;
}

export interface HighwayEntry {
  route: string;
  name: string;
  states: string[];
  days: number[];
  note: string;
}

export interface ElevationWaypoint {
  label: string;
  state: string;
  elevFt: number;
  day: number;
  note?: string;
}

export interface GeographyEntry {
  name: string;
  type: 'river' | 'mountain' | 'desert' | 'canyon' | 'park' | 'basin' | 'sea';
  states: string[];
  days: number[];
  note: string;
}

export interface TownEntry {
  name: string;
  state: string;
  day: number;
  role: 'overnight' | 'lunch' | 'stop' | 'drive-through';
  note?: string;
}

// ─── STATES ──────────────────────────────────────────────────────────────────

export const stateData: StateEntry[] = [
  {
    name: 'Pennsylvania',
    abbrev: 'PA',
    miles: 29,
    days: [1],
    primaryRoads: ['I-95 S'],
    towns: ['Philadelphia'],
    note: 'Start of the trip. Dug the Tacoma out before seven. City still sleeping.',
  },
  {
    name: 'Delaware',
    abbrev: 'DE',
    miles: 12,
    days: [1],
    primaryRoads: ['I-95 S'],
    towns: ['Wilmington'],
    note: 'Brief crossing on I-95. Wilmington through the windshield. Gone before it registered.',
  },
  {
    name: 'Maryland',
    abbrev: 'MD',
    miles: 94,
    days: [1],
    primaryRoads: ['I-95 S'],
    towns: ['Baltimore', 'Annapolis Junction'],
    note: 'Baltimore corridor. Last hoagie at a Wawa somewhere in here, eaten in the truck.',
  },
  {
    name: 'Virginia',
    abbrev: 'VA',
    miles: 192,
    days: [1],
    primaryRoads: ['I-95 S', 'I-85 S'],
    towns: ['Arlington', 'Alexandria', 'Fredericksburg', 'Richmond', 'Petersburg'],
    note: 'DC through the windshield — monuments grey in fog. Hard pack through Virginia, roads clearing south of Richmond.',
  },
  {
    name: 'North Carolina',
    abbrev: 'NC',
    miles: 234,
    days: [1, 2],
    primaryRoads: ['I-85 S'],
    towns: ['Charlotte'],
    note: 'Two segments. Day 1: I-85 south to Charlotte. Day 2: Charlotte south through the piedmont into SC. Night 1 in Charlotte.',
  },
  {
    name: 'South Carolina',
    abbrev: 'SC',
    miles: 95,
    days: [2],
    primaryRoads: ['I-85 S'],
    towns: ['Gaffney', 'Spartanburg', 'Greenville', 'Anderson'],
    note: 'I-85 straight through. South Carolina in the snow — the foothills grey and quiet.',
  },
  {
    name: 'Georgia',
    abbrev: 'GA',
    miles: 179,
    days: [2],
    primaryRoads: ['I-85 S'],
    towns: ['Lavonia', 'Gainesville', 'Atlanta', 'LaGrange'],
    note: 'Snowed the whole way. Spanish moss beaded with ice. Red clay frozen hard. The South under it looks wrong.',
  },
  {
    name: 'Alabama',
    abbrev: 'AL',
    miles: 216,
    days: [2, 3],
    primaryRoads: ['I-85 S', 'US-80 W'],
    towns: ['Auburn', 'Montgomery', 'Selma'],
    note: 'Day 2: Auburn lunch crowd at Cracker Barrel on a snow day. Night 2 in Montgomery — AYA for dinner. Day 3: US-80 west through Selma.',
  },
  {
    name: 'Mississippi',
    abbrev: 'MS',
    miles: 161,
    days: [3, 4],
    primaryRoads: ['US-80 W', 'I-20 W'],
    towns: ['Meridian', 'Jackson'],
    note: 'Two segments. Day 3: into Jackson after dark. Day 4: flat and green even in February, leaving west on I-20.',
  },
  {
    name: 'Louisiana',
    abbrev: 'LA',
    miles: 182,
    days: [4],
    primaryRoads: ['I-20 W'],
    towns: ['Monroe', 'Shreveport'],
    note: 'Cypress and still water and the smell of something rotting sweetly in the air. Pulled off in Shreveport — found Sam\'s Southern Eatery by accident. Top-rated. Lucky.',
  },
  {
    name: 'Texas',
    abbrev: 'TX',
    miles: 1367,
    days: [4, 5, 6, 7, 8],
    primaryRoads: ['I-20 W', 'I-35 S', 'US-190 W', 'US-67 S', 'TX-118 S', 'TX-170 W', 'US-90 W', 'I-10 W'],
    towns: [
      'Marshall', 'Longview', 'Dallas', 'Waco', 'Austin',
      'Fredericksburg', 'Junction', 'Menard', 'Eldorado',
      'Iraan', 'Fort Stockton', 'Alpine', 'Study Butte',
      'Terlingua', 'Presidio', 'Marfa', 'El Paso',
    ],
    note: 'The dominant state — 5 driving days, 40% of total distance. Hill Country into Chihuahuan Desert. Big Bend. The ghost town. The canyon. The best road of the trip.',
  },
  {
    name: 'New Mexico',
    abbrev: 'NM',
    miles: 164,
    days: [8],
    primaryRoads: ['I-10 W'],
    towns: ['Las Cruces', 'Deming'],
    note: 'I-10 west from El Paso through Las Cruces and Deming to the Arizona line. High desert, 160 miles of it.',
  },
  {
    name: 'Arizona',
    abbrev: 'AZ',
    miles: 379,
    days: [8, 9],
    primaryRoads: ['I-10 W'],
    towns: ['Tucson', 'Casa Grande', 'Yuma'],
    note: 'Night 8 in Tucson — El Chorro, since 1922, packed on a Friday. Day 9: Sonoran Desert running out beneath the tires toward the California line.',
  },
  {
    name: 'California',
    abbrev: 'CA',
    miles: 246,
    days: [9],
    primaryRoads: ['I-10 W', 'I-15 N', 'I-10 W'],
    towns: ['Blythe', 'Indio', 'Palm Springs', 'Chino Hills', 'Los Angeles', 'Santa Monica'],
    note: 'Saguaro giving way to sand dunes. The Salton Sea flat and strange. Mountains. Then coastal haze and the Pacific smell through the vents. End of the road.',
  },
];

// ─── HIGHWAYS ────────────────────────────────────────────────────────────────

export const highways: HighwayEntry[] = [
  {
    route: 'I-95 S',
    name: 'Interstate 95',
    states: ['PA', 'DE', 'MD', 'VA'],
    days: [1],
    note: 'Philadelphia south through Wilmington, Baltimore, and Washington. Monuments grey in winter fog.',
  },
  {
    route: 'I-85 S',
    name: 'Interstate 85',
    states: ['VA', 'NC', 'SC', 'GA', 'AL'],
    days: [1, 2],
    note: 'The spine of the trip\'s first two days. Charlotte south through the Carolinas, Georgia, into Alabama — snowed most of the way.',
  },
  {
    route: 'US-80 W',
    name: 'Jefferson Davis Highway',
    states: ['AL', 'MS'],
    days: [3],
    note: 'Country road west from Montgomery through Selma. The old road. Slower and better for it.',
  },
  {
    route: 'I-20 W',
    name: 'Interstate 20',
    states: ['MS', 'LA', 'TX'],
    days: [3, 4],
    note: 'Jackson west through the Louisiana bayou to Shreveport and into East Texas.',
  },
  {
    route: 'I-35 S',
    name: 'Interstate 35',
    states: ['TX'],
    days: [4],
    note: 'Dallas/Fort Worth south through Waco to Austin. Texas getting bigger.',
  },
  {
    route: 'US-190 / TX-190 W',
    name: 'Lone Star Highway',
    states: ['TX'],
    days: [5],
    note: 'The road of Day 5. Two lanes from Menard through Eldorado, Iraan, Fort Stockton. Almost no other vehicles. Chihuahuan Desert taking hold past Fort Stockton.',
  },
  {
    route: 'US-67 / US-90 S',
    name: 'Trans-Pecos Highway',
    states: ['TX'],
    days: [5],
    note: 'Fort Stockton south to Alpine, then west toward the Big Bend corridor.',
  },
  {
    route: 'TX-118 S',
    name: 'State Highway 118',
    states: ['TX'],
    days: [5, 6],
    note: 'Alpine south through Study Butte into Big Bend National Park.',
  },
  {
    route: 'Ross Maxwell Scenic Drive',
    name: 'Ross Maxwell Scenic Drive',
    states: ['TX'],
    days: [7],
    note: 'Park road south through Big Bend to Santa Elena Canyon. Castolon, Sotol Vista, Mule Ears. The canyon at the end.',
  },
  {
    route: 'TX-170 W',
    name: 'El Camino Del Rio',
    states: ['TX'],
    days: [8],
    note: 'The River Road. Big Bend to Presidio following the Rio Grande — river below, rock walls close, no guardrail. Best driving of the whole trip.',
  },
  {
    route: 'US-90 W / I-10 W',
    name: 'Interstate 10',
    states: ['TX', 'NM', 'AZ', 'CA'],
    days: [8, 9],
    note: 'Marfa to El Paso, then the long run west: New Mexico, Arizona, California. I-10 carried the last two days of the trip.',
  },
];

// ─── ELEVATION WAYPOINTS ─────────────────────────────────────────────────────
// Established survey elevations for named waypoints along the route.

export const elevationWaypoints: ElevationWaypoint[] = [
  { label: 'Philadelphia, PA', state: 'PA', elevFt: 39, day: 1 },
  { label: 'Baltimore, MD', state: 'MD', elevFt: 20, day: 1 },
  { label: 'Richmond, VA', state: 'VA', elevFt: 166, day: 1 },
  { label: 'Charlotte, NC', state: 'NC', elevFt: 751, day: 1, note: 'Night 1' },
  { label: 'Atlanta, GA', state: 'GA', elevFt: 1050, day: 2 },
  { label: 'Montgomery, AL', state: 'AL', elevFt: 221, day: 2, note: 'Night 2' },
  { label: 'Jackson, MS', state: 'MS', elevFt: 287, day: 3, note: 'Night 3' },
  { label: 'Shreveport, LA', state: 'LA', elevFt: 181, day: 4, note: 'Oyster po\'boy stop' },
  { label: 'Austin, TX', state: 'TX', elevFt: 489, day: 4, note: 'Night 4' },
  { label: 'Menard, TX', state: 'TX', elevFt: 1963, day: 5, note: 'Hwy 190 begins' },
  { label: 'Eldorado, TX', state: 'TX', elevFt: 2533, day: 5 },
  { label: 'Iraan, TX', state: 'TX', elevFt: 2133, day: 5 },
  { label: 'Fort Stockton, TX', state: 'TX', elevFt: 2952, day: 5, note: 'Last real stop before the big empty' },
  { label: 'Alpine, TX', state: 'TX', elevFt: 4475, day: 5, note: 'Walmart stop' },
  { label: 'Terlingua / Study Butte, TX', state: 'TX', elevFt: 2461, day: 5, note: 'Nights 5–7 (ghost town)' },
  { label: 'Chisos Basin, Big Bend NP', state: 'TX', elevFt: 5784, day: 6, note: 'TRIP HIGH POINT' },
  { label: 'Window Trail — pour-off', state: 'TX', elevFt: 5772, day: 7 },
  { label: 'Santa Elena Canyon', state: 'TX', elevFt: 1880, day: 7, note: '1,500 ft walls above the river' },
  { label: 'Marfa, TX', state: 'TX', elevFt: 4688, day: 8, note: 'Coffee. Post office.' },
  { label: 'El Paso, TX', state: 'TX', elevFt: 3740, day: 8 },
  { label: 'Las Cruces, NM', state: 'NM', elevFt: 3908, day: 8 },
  { label: 'Tucson, AZ', state: 'AZ', elevFt: 2389, day: 8, note: 'Night 8' },
  { label: 'Yuma, AZ', state: 'AZ', elevFt: 141, day: 9 },
  { label: 'Salton Sea, CA', state: 'CA', elevFt: -227, day: 9, note: 'Below sea level' },
  { label: 'Santa Monica, CA', state: 'CA', elevFt: 52, day: 9, note: 'End of the road' },
];

// ─── GEOGRAPHY ───────────────────────────────────────────────────────────────

export const geography: GeographyEntry[] = [
  {
    name: 'Potomac River',
    type: 'river',
    states: ['VA', 'MD'],
    days: [1],
    note: 'DC in winter fog. Barely visible from the highway.',
  },
  {
    name: 'Alabama River',
    type: 'river',
    states: ['AL'],
    days: [3],
    note: 'Crossed by ferry from EJI Legacy Museum to the sculpture garden.',
  },
  {
    name: 'Mississippi River',
    type: 'river',
    states: ['MS', 'LA'],
    days: [4],
    note: 'Crossed on Day 4. Mississippi flat and green even in February.',
  },
  {
    name: 'Rio Grande',
    type: 'river',
    states: ['TX', 'NM'],
    days: [6, 7, 8],
    note: 'Three days along or near the river. Toes in on Day 6 — first time for both. Walked ankle-deep into it at Boquillas Canyon. TX-170 follows the canyon on Day 8.',
  },
  {
    name: 'Appalachian Foothills',
    type: 'mountain',
    states: ['VA', 'NC', 'SC', 'GA', 'AL'],
    days: [1, 2],
    note: 'Piedmont and foothills framing the I-85 corridor southward.',
  },
  {
    name: 'Chisos Mountains',
    type: 'mountain',
    states: ['TX'],
    days: [6, 7],
    note: 'Sky island in the middle of Big Bend. Chisos Basin at 5,784 ft — the trip\'s high point. Window Trail looking out over the desert basin.',
  },
  {
    name: 'Davis Mountains',
    type: 'mountain',
    states: ['TX'],
    days: [5, 8],
    note: 'Texas\'s highest range, west of Alpine and Marfa. The backdrop coming and going.',
  },
  {
    name: 'Guadalupe Mountains',
    type: 'mountain',
    states: ['TX', 'NM'],
    days: [8],
    note: 'Visible from I-10 heading toward El Paso. Highest point in Texas at 8,751 ft.',
  },
  {
    name: 'Chihuahuan Desert',
    type: 'desert',
    states: ['TX', 'NM'],
    days: [5, 6, 7, 8],
    note: 'Largest desert in North America. Took hold past Fort Stockton on Day 5. Five days total in its terrain.',
  },
  {
    name: 'Sonoran Desert',
    type: 'desert',
    states: ['AZ', 'CA'],
    days: [8, 9],
    note: 'Tucson east and west. Saguaro cactus. Then the desert running out toward California.',
  },
  {
    name: 'Santa Elena Canyon',
    type: 'canyon',
    states: ['TX'],
    days: [7],
    note: '1,500-foot walls on both sides of the Rio Grande. The left wall is Texas. The right wall is Mexico. Sky narrows to a strip.',
  },
  {
    name: 'Boquillas Canyon',
    type: 'canyon',
    states: ['TX'],
    days: [6],
    note: 'Where the horseback vendor crossed from Mexico. Ankle-deep in the river. Raymond purchased here.',
  },
  {
    name: 'Big Bend National Park',
    type: 'park',
    states: ['TX'],
    days: [6, 7],
    note: '801,163 acres. Two full days. Panther Junction, Chisos Mountains, both canyons, the river.',
  },
  {
    name: 'Salton Sea',
    type: 'sea',
    states: ['CA'],
    days: [9],
    note: 'Flat and strange. 227 feet below sea level. The landscape\'s last surprise before the mountains and the coast.',
  },
];

// ─── TOWNS CATALOG ───────────────────────────────────────────────────────────

export const townsCatalog: TownEntry[] = [
  // Day 1
  { name: 'Philadelphia', state: 'PA', day: 1, role: 'stop', note: 'Start. Dug out before 7am.' },
  { name: 'Wilmington', state: 'DE', day: 1, role: 'drive-through', note: 'I-95 south. Gone in twelve miles.' },
  { name: 'Washington DC', state: 'VA/MD', day: 1, role: 'drive-through', note: 'Monuments grey in winter fog' },
  { name: 'Charlotte', state: 'NC', day: 1, role: 'overnight', note: 'Night 1. City BBQ.' },
  // Day 2
  { name: 'Auburn', state: 'AL', day: 2, role: 'lunch', note: 'Cracker Barrel — full of AU students on a snow day' },
  { name: 'Montgomery', state: 'AL', day: 2, role: 'overnight', note: 'Night 2. AYA Soulful Dining.' },
  // Day 3
  { name: 'Selma', state: 'AL', day: 3, role: 'drive-through', note: 'Country road west' },
  { name: 'Jackson', state: 'MS', day: 3, role: 'overnight', note: 'Night 3. Arrived after dark.' },
  // Day 4
  { name: 'Shreveport', state: 'LA', day: 4, role: 'lunch', note: "Sam's Southern Eatery — oyster po'boy, found by luck" },
  { name: 'Austin', state: 'TX', day: 4, role: 'overnight', note: "Night 4. Rudy's BBQ." },
  // Day 5
  { name: 'Fredericksburg', state: 'TX', day: 5, role: 'drive-through', note: 'Hill Country' },
  { name: 'Menard', state: 'TX', day: 5, role: 'drive-through', note: 'Hwy 190 begins' },
  { name: 'Eldorado', state: 'TX', day: 5, role: 'drive-through', note: 'Still Hill Country' },
  { name: 'Iraan', state: 'TX', day: 5, role: 'drive-through', note: 'Desert starting to take hold' },
  { name: 'Fort Stockton', state: 'TX', day: 5, role: 'stop', note: 'Last real stop before the big empty' },
  { name: 'Alpine', state: 'TX', day: 5, role: 'stop', note: 'Walmart — felt like the whole town was inside' },
  { name: 'Terlingua', state: 'TX', day: 5, role: 'overnight', note: "Nights 5–7. Ghost town. Starlight Theatre." },
  // Day 6
  { name: 'Study Butte', state: 'TX', day: 6, role: 'drive-through', note: 'West entrance to Big Bend' },
  { name: 'Big Bend NP', state: 'TX', day: 6, role: 'stop', note: 'Panther Junction, Rio Grande, Boquillas Canyon' },
  // Day 7
  { name: 'Big Bend NP', state: 'TX', day: 7, role: 'stop', note: 'Window Trail + Ross Maxwell + Santa Elena Canyon' },
  // Day 8
  { name: 'Presidio', state: 'TX', day: 8, role: 'drive-through', note: 'At the end of Hwy 170' },
  { name: 'Marfa', state: 'TX', day: 8, role: 'stop', note: 'Coffee. Post office. Sent some mail.' },
  { name: 'El Paso', state: 'TX', day: 8, role: 'drive-through', note: 'I-10 west begins' },
  { name: 'Las Cruces', state: 'NM', day: 8, role: 'drive-through', note: 'Briefly into New Mexico on I-10' },
  { name: 'Tucson', state: 'AZ', day: 8, role: 'overnight', note: "Night 8. El Chorro, since 1922." },
  // Day 9
  { name: 'Yuma', state: 'AZ', day: 9, role: 'drive-through', note: 'Sonoran Desert running out' },
  { name: 'Chino Hills', state: 'CA', day: 9, role: 'drive-through', note: 'Stopped traffic. Tacoma fit right in.' },
  { name: 'Santa Monica', state: 'CA', day: 9, role: 'overnight', note: 'End of the road. Locanda Portofino. Walk from the beach.' },
];
