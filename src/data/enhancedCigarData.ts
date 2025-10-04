// Enhanced MokaCigar Encyclopedia Data - Ultimate Cuban Cigar Resource
// Data structure inspired by cubancigarwebsite.com but in premium Moka style

import { CigarBrand, CigarVitola, SpecialRelease, TobaccoRegion, CigarFactory, HistoricalEvent } from '@/types/cigar';

// ==== ENHANCED BRAND DATA ====
export const enhancedBrands: CigarBrand[] = [
  {
    id: 'cohiba',
    name: 'Cohiba',
    logo: '/images/brands/cohiba-logo.png',
    status: 'global',
    description: 'The most exclusive and aspirational cigar brand in the world.',
    heritage: 'The name "Cohiba" is the Taino Indian word for the bunches of tobacco leaves that Christopher Columbus first saw the natives of Cuba smoking. Born in 1966, Cohiba\'s story is the stuff of legend. It began as the personal blend for Fidel Castro, crafted by a single roller, Eduardo Rivera. These cigars were reserved for Castro himself and as diplomatic gifts for heads of state and visiting dignitaries, wrapped in mystique and unavailability. The El Laguito factory, a beautiful mansion in Havana, became its home. The tobacco for Cohiba is selected from the finest five farms in the Vuelta Abajo region and undergoes a unique third fermentation in barrels, a process that adds unparalleled smoothness and a complex aroma. When Cohiba was finally released to the public in 1982, it instantly became a symbol of luxury, power, and the pinnacle of Cuban craftsmanship.',
    timeline: [
      { year: 1966, event: 'Brand created for Fidel Castro by Eduardo Rivera' },
      { year: 1968, event: 'El Laguito factory established in Havana mansion' },
      { year: 1982, event: 'First public release with three vitolas' },
      { year: 1989, event: 'Línea 1492 introduced for 500th anniversary' },
      { year: 1992, event: 'Robustos and Coronas Especiales added' },
      { year: 2006, event: 'Behike line launched with medio tiempo leaf' },
      { year: 2010, event: 'Behike 52, 54, 56 trilogy completed' }
    ],
    founder: 'Eduardo Rivera (Master Roller)',
    factory: 'EL',
    country: 'Cuba',
    founded: 1966,
    strength: 'Medium to Full',
    flavourProfile: 'Complex and flavorful, with notes of grass, leather, and spice. The Behike line is known for its use of the rare "medio tiempo" leaf, offering a richer and more intense flavor.',
    classification: 'Premium Global Brand',
    keyDistinctions: [
      'Personal brand of Fidel Castro until 1982',
      'Unique triple fermentation process',
      'El Laguito factory exclusivity',
      'Only brand using medio tiempo leaf',
      'Most counterfeit cigar brand worldwide'
    ],
    totalVitolas: 28,
    currentVitolas: 16
  },
  {
    id: 'montecristo',
    name: 'Montecristo',
    logo: '/images/brands/montecristo-logo.png',
    status: 'global',
    description: 'The quintessential Cuban cigar experience for many, a benchmark against which all others are measured.',
    heritage: 'The story of Montecristo is a tale of literary inspiration and marketing genius. In 1935, Alonso Menéndez acquired a factory and, with his partner Pepe García, created a new brand. The name was inspired by a beloved tradition in the cigar factories: the lector, or reader, who would read novels to the rollers to break the monotony of their work. The favorite novel was Alexandre Dumas\' "The Count of Monte Cristo". Thus, "Montecristo" was born. The brand\'s iconic logo, a triangle of six swords surrounding a fleur-de-lis, was designed by its British distributor. Montecristo quickly captured the palates of smokers worldwide, with its classic No. 4 becoming the best-selling handmade cigar on the planet.',
    timeline: [
      { year: 1935, event: 'Founded by Alonso Menéndez and Pepe García' },
      { year: 1936, event: 'Iconic sword and fleur-de-lis logo created' },
      { year: 1940, event: 'No. 4 becomes bestselling Cuban cigar' },
      { year: 1959, event: 'Nationalized by Cuban government' },
      { year: 2004, event: 'Edmundo series introduced' },
      { year: 2009, event: 'Open series for mild smokers' },
      { year: 2021, event: 'Línea 1935 commemorative series' }
    ],
    founder: 'Alonso Menéndez & Pepe García',
    factory: 'H',
    country: 'Cuba',
    founded: 1935,
    strength: 'Medium to Full',
    flavourProfile: 'A classic Cuban profile with notes of coffee, cocoa, and vanilla, often with a spicy kick. The Edmundo line offers a heavier ring gauge and a richer flavor.',
    classification: 'Premium Global Brand',
    keyDistinctions: [
      'Best-selling Cuban cigar brand globally',
      'No. 4 is world\'s most popular handmade cigar',
      'Literary inspiration from Count of Monte Cristo',
      'Benchmark for classic Cuban flavor profile',
      'Most extensive vitola range in portfolio'
    ],
    totalVitolas: 32,
    currentVitolas: 19
  },
  {
    id: 'partagas',
    name: 'Partagás',
    logo: '/images/brands/partagas-logo.png',
    status: 'global',
    description: 'The story of Partagás is as rich, dark, and intense as its cigars.',
    heritage: 'Founded in 1845 by the Spanish-born Don Jaime Partagás y Ravelo, the brand is synonymous with power and deep flavor. Don Jaime was a formidable character who owned many of the best tobacco plantations in the Vuelta Abajo. His legendary Partagás factory, located behind the Capitol building in Havana, remains one of the city\'s most famous landmarks. Don Jaime was also a pioneer, experimenting with fermentation and aging techniques that are still used today. The brand\'s story has a dark twist; Don Jaime was murdered on one of his plantations in 1868, a mystery that has never been solved. His legacy is a cigar that is unapologetically robust and earthy, a true connoisseur\'s smoke that reflects the strength and passion of its founder.',
    timeline: [
      { year: 1845, event: 'Founded by Don Jaime Partagás y Ravelo' },
      { year: 1850, event: 'Partagás factory built behind Havana Capitol' },
      { year: 1868, event: 'Don Jaime murdered on plantation (unsolved)' },
      { year: 1927, event: 'Cifuentes family acquires brand' },
      { year: 1959, event: 'Nationalized by Cuban government' },
      { year: 2005, event: 'Serie D No. 6 introduced' },
      { year: 2019, event: 'Línea Maduro series launched' }
    ],
    founder: 'Don Jaime Partagás y Ravelo',
    factory: 'FPG',
    country: 'Cuba',
    founded: 1845,
    strength: 'Full',
    flavourProfile: 'Rich and intense, with dominant notes of earth, leather, and black pepper.',
    classification: 'Premium Global Brand',
    keyDistinctions: [
      'Oldest continuously produced brand',
      'Strongest flavor profile in Global brands',
      'Historic factory behind Havana Capitol',
      'Founder\'s mysterious murder in 1868',
      'Pioneer in fermentation techniques'
    ],
    totalVitolas: 24,
    currentVitolas: 14
  }
  // More brands will be added in phases
];

// Import all products from the Moka Product Import
import { allMokaProducts } from './allMokaProducts';

// ==== ENHANCED CIGAR VITOLAS ====
// Combining manually curated data with imported products
const manualCigars: CigarVitola[] = [
  {
    id: 'cohiba-behike-52',
    name: 'Behike 52',
    factoryName: 'Behike 52',
    brand: 'cohiba',
    vitola: 'Cervantes',
    length: 165,
    lengthInches: 6.5,
    ringGauge: 52,
    smokingTime: '90-120 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The crown jewel of the Cohiba portfolio, featuring the rare medio tiempo leaf.',
    heritage: 'Launched in 2010 as part of the Behike trilogy, this cigar represents the pinnacle of Cuban cigar making. The Behike series is the only line to use the precious medio tiempo leaf, found only in the top two leaves of shade-grown tobacco plants.',
    uniqueStory: 'The medio tiempo leaf was discovered by accident when master blenders noticed superior burning qualities in the uppermost leaves of certain plants.',
    tastingNotes: [
      'Dark chocolate and espresso',
      'Leather and cedar',
      'White pepper and spice',
      'Honey sweetness in final third',
      'Long, complex finish'
    ],
    image: '/images/cigars/cohiba-behike-52.jpg',
    boxImage: '/images/boxes/cohiba-behike-52-box.jpg',
    bandImage: '/images/bands/cohiba-behike-band.jpg',
    
    releaseType: 'limited_edition',
    launchYear: 2010,
    isDiscontinued: false,
    isLimited: true,
    productionStatus: 'current',
    
    edition: {
      name: 'Behike Trilogy',
      year: 2010,
      quantity: 4000,
      event: 'Cohiba 40th Anniversary'
    },
    
    packaging: [
      {
        type: 'box',
        count: 10,
        material: 'Lacquered wood',
        description: 'Black lacquered presentation box with gold Cohiba logo',
        year: 2010
      }
    ],
    
    bands: [
      {
        design: 'Cohiba Behike',
        years: '2010-present',
        description: 'Black band with gold Cohiba logo and red "Behike" text',
        image: '/images/bands/cohiba-behike-band.jpg'
      }
    ],
    
    pairings: {
      spirits: ['Hennessy XO', 'Macallan 25', 'Clase Azul Reposado'],
      wine: ['Château Margaux', 'Opus One', 'Dom Pérignon'],
      coffee: ['Blue Mountain Coffee', 'Kopi Luwak'],
      cocktails: ['Old Fashioned', 'Brandy Alexander']
    },
    
    rarity: 'very_rare',
    auctionNotes: 'Single cigars often sell for $100+ at auction. Complete boxes can reach $2000+.',
    fakeWarnings: [
      'Check for holographic band security features',
      'Verify box authenticity with Habanos authentication',
      'Beware of unusually low prices',
      'Authentic boxes have specific serial numbers'
    ]
  },
  {
    id: 'montecristo-no-4',
    name: 'No. 4',
    factoryName: 'Margarita',
    brand: 'montecristo',
    vitola: 'Mareva',
    length: 129,
    lengthInches: 5.1,
    ringGauge: 42,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium to Full',
    description: 'The world\'s best-selling premium handmade cigar.',
    heritage: 'Introduced shortly after the brand\'s founding in 1935, the No. 4 quickly became the benchmark for Cuban cigars. Its perfect balance of flavor, size, and smoking time made it the go-to choice for cigar lovers worldwide.',
    uniqueStory: 'More No. 4s are sold annually than any other handmade cigar in the world, with production numbers reaching into the millions.',
    tastingNotes: [
      'Coffee and dark chocolate',
      'Roasted nuts and cedar',
      'Vanilla and caramel sweetness',
      'Mild pepper and spice',
      'Smooth, creamy finish'
    ],
    image: '/images/cigars/montecristo-no-4.jpg',
    boxImage: '/images/boxes/montecristo-no-4-box.jpg',
    bandImage: '/images/bands/montecristo-classic-band.jpg',
    
    releaseType: 'standard',
    launchYear: 1935,
    isDiscontinued: false,
    isLimited: false,
    productionStatus: 'current',
    
    packaging: [
      {
        type: 'box',
        count: 25,
        material: 'Cedar',
        description: 'Classic cedar box with Montecristo logo',
        year: 1935
      },
      {
        type: 'tube',
        count: 1,
        material: 'Aluminum',
        description: 'Individual aluminum tubes for travel',
        year: 1960
      }
    ],
    
    bands: [
      {
        design: 'Classic Montecristo',
        years: '1935-present',
        description: 'White band with red and gold Montecristo logo and sword emblem',
        image: '/images/bands/montecristo-classic-band.jpg'
      }
    ],
    
    pairings: {
      spirits: ['Johnnie Walker Blue', 'Hennessy VS', 'Havana Club 7'],
      wine: ['Cabernet Sauvignon', 'Malbec', 'Champagne'],
      coffee: ['Colombian Supremo', 'Jamaican Blue Mountain'],
      cocktails: ['Cuba Libre', 'Mojito', 'Whiskey Sour']
    },
    
    rarity: 'common',
    fakeWarnings: [
      'Check band printing quality and alignment',
      'Verify consistent cigar construction',
      'Authentic boxes have proper Habanos seals'
    ]
  }
  // More cigars will be added in phases
];

// Combine manual cigars with imported products
export const enhancedCigars: CigarVitola[] = [...manualCigars, ...allMokaProducts];

// ==== SPECIAL RELEASES ====
export const specialReleases: SpecialRelease[] = [
  {
    id: 'cohiba-1966-edition-2016',
    name: '1966 Edición Limitada 2016',
    brand: 'cohiba',
    year: 2016,
    type: 'limited_edition',
    description: 'Commemorating the 50th anniversary of the Cohiba brand.',
    vitolas: ['cohiba-1966-el-2016'],
    limitedQuantity: 50000,
    story: 'Created to celebrate five decades of Cohiba excellence, this special edition features a unique vitola crafted exclusively for this release.',
    image: '/images/special/cohiba-1966-el-2016.jpg',
    packaging: {
      type: 'Lacquered box of 10',
      description: 'Premium black lacquered box with gold "1966" anniversary marking',
      image: '/images/special/cohiba-1966-el-2016-box.jpg'
    }
  }
];

// ==== TOBACCO REGIONS ====
export const tobaccoRegions: TobaccoRegion[] = [
  {
    id: 'vuelta-abajo',
    name: 'Vuelta Abajo',
    description: 'The premier tobacco-growing region of Cuba, producing the finest wrapper and filler tobaccos.',
    characteristics: 'Rich, complex flavors with excellent burning qualities. The limestone soil and microclimate create ideal conditions.',
    famousFarms: [
      'Hoyo de Monterrey',
      'El Corojo',
      'San Luis',
      'San Juan y Martínez',
      'Cuchillas de Barbacoa'
    ],
    climate: 'Tropical with dry season from November to April',
    soilType: 'Red clay over limestone bedrock',
    image: '/images/regions/vuelta-abajo.jpg'
  }
];

// ==== CIGAR FACTORIES ====
export const cigarFactories: CigarFactory[] = [
  {
    id: 'el-laguito',
    name: 'El Laguito',
    code: 'EL',
    location: 'Havana, Cuba',
    founded: 1968,
    description: 'The exclusive home of Cohiba cigars, housed in a beautiful Art Deco mansion.',
    famousBrands: ['Cohiba', 'Trinidad'],
    specialties: ['Triple fermentation process', 'Medio tiempo leaf preparation'],
    history: 'Originally a private mansion, converted to cigar factory exclusively for Cohiba production.',
    image: '/images/factories/el-laguito.jpg'
  }
];

// ==== HISTORICAL EVENTS ====
export const historicalEvents: HistoricalEvent[] = [
  {
    id: 'cuban-revolution-1959',
    year: 1959,
    title: 'Cuban Revolution and Nationalization',
    description: 'Fidel Castro\'s government nationalizes all Cuban cigar factories and brands.',
    impact: 'Transformed the entire Cuban cigar industry, leading to the creation of state-owned Habanos S.A.',
    relatedBrands: ['all'],
    category: 'political'
  },
  {
    id: 'us-embargo-1962',
    year: 1962,
    title: 'U.S. Trade Embargo',
    description: 'President Kennedy signs the Cuban trade embargo, banning Cuban cigars in the United States.',
    impact: 'Created the legendary scarcity and mystique around Cuban cigars in the U.S. market.',
    category: 'political'
  }
];

// ==== UTILITY FUNCTIONS ====
export const getCigarsByBrand = (brandId: string): CigarVitola[] => {
  return enhancedCigars.filter(cigar => cigar.brand === brandId);
};

export const getBrandById = (brandId: string): CigarBrand | undefined => {
  return enhancedBrands.find(brand => brand.id === brandId);
};

export const getCigarById = (cigarId: string): CigarVitola | undefined => {
  return enhancedCigars.find(cigar => cigar.id === cigarId);
};

export const getSpecialReleasesByYear = (year: number): SpecialRelease[] => {
  return specialReleases.filter(release => release.year === year);
};

export const getDiscontinuedCigars = (): CigarVitola[] => {
  return enhancedCigars.filter(cigar => cigar.isDiscontinued);
};

export const getLimitedEditions = (): CigarVitola[] => {
  return enhancedCigars.filter(cigar => cigar.isLimited);
};