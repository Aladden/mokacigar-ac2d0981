// MokaCigar Encyclopedia Data Structure - Based on Excel Price List

export interface CigarBrand {
  id: string;
  name: string;
  logo: string;
  description: string;
  heritage: string;
  country: string;
  founded?: number;
}

export interface Cigar {
  id: string;
  name: string;
  brand: string;
  vitola: string;
  length: number;
  ringGauge: number;
  smokingTime: string;
  flavourProfile: 'Light' | 'Light to Medium' | 'Medium' | 'Medium to Full' | 'Full';
  strength: 'Light' | 'Medium' | 'Full';
  description: string;
  heritage: string;
  image: string;
  pairings: {
    spirits?: string[];
    wine?: string[];
    coffee?: string[];
    cocktails?: string[];
  };
}

export const brands: CigarBrand[] = [
  {
    id: 'cohiba',
    name: 'Cohiba',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Cohiba_Logo_Gold_320x320_crop_center__1_-removebg-preview.png',
    description: 'Cuba\'s most prestigious cigar brand, created exclusively for diplomatic gifts.',
    heritage: 'Born in 1966 as the exclusive brand for Fidel Castro, Cohiba represents Cuban cigar excellence.',
    country: 'Cuba',
    founded: 1966
  },
  {
    id: 'montecristo',
    name: 'Montecristo',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Montecristo_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'The most recognized Cuban cigar brand worldwide.',
    heritage: 'Founded in 1935, setting the standard for premium Cuban cigars.',
    country: 'Cuba',
    founded: 1935
  },
  {
    id: 'romeo-y-julieta',
    name: 'Romeo y Julieta',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Romeo_y_Julieta_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'Romantic name, exceptional quality, beloved worldwide.',
    heritage: 'Named after Shakespeare\'s love story, crafting cigars since 1875.',
    country: 'Cuba',
    founded: 1875
  },
  {
    id: 'partagas',
    name: 'Partagás',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Partagas_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'Full-bodied cigars with complex flavours.',
    heritage: 'Founded in 1845, known for full-flavoured complexity.',
    country: 'Cuba',
    founded: 1845
  },
  {
    id: 'h-upmann',
    name: 'H. Upmann',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/H._UPMANN_Gold_5cf36aa4-8b37-464e-b761-7fd19af22ace_320x320_crop_center-removebg-preview.png',
    description: 'Classic brand known for refined taste.',
    heritage: 'Founded in 1844 by German banker Hermann Upmann.',
    country: 'Cuba',
    founded: 1844
  }
];

export const cigars: Cigar[] = [
  {
    id: 'cohiba-bhk-52',
    name: 'BHK 52',
    brand: 'cohiba',
    vitola: 'BHK',
    length: 119,
    ringGauge: 52,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The smallest BHK, awarded "Cigar of the Year".',
    heritage: 'Pinnacle of Cuban craftsmanship with Medio Tiempo leaf.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Champagne', 'Aged Rum'] }
  },
  {
    id: 'cohiba-siglo-ii',
    name: 'Siglo II',
    brand: 'cohiba',
    vitola: 'Petit Corona',
    length: 129,
    ringGauge: 42,
    smokingTime: '40-50 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'Perfect introduction to Cohiba quality.',
    heritage: 'The ideal starting point for Cohiba exploration.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Cognac'], coffee: ['Coffee'] }
  },
  {
    id: 'montecristo-no-2',
    name: 'No. 2',
    brand: 'montecristo',
    vitola: 'Pirámide',
    length: 156,
    ringGauge: 52,
    smokingTime: '60-70 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium',
    description: 'The classic torpedo that dominates this vitola.',
    heritage: 'Benchmark cigar in the Cuban industry.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Champagne', 'Port', 'Rum'] }
  }
];

export const getBrandById = (id: string) => brands.find(brand => brand.id === id);
export const getCigarsByBrand = (brandId: string) => cigars.filter(cigar => cigar.brand === brandId);
export const searchCigars = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return cigars.filter(cigar => 
    cigar.name.toLowerCase().includes(lowercaseQuery) ||
    cigar.description.toLowerCase().includes(lowercaseQuery) ||
    getBrandById(cigar.brand)?.name.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterCigars = (filters: {
  brand?: string;
  flavourProfile?: string;
  ringGauge?: string;
  length?: string;
  smokingTime?: string;
}) => {
  return cigars.filter(cigar => {
    if (filters.brand && cigar.brand !== filters.brand) return false;
    if (filters.flavourProfile && cigar.flavourProfile !== filters.flavourProfile) return false;
    return true;
  });
};