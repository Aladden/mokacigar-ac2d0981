// MokaCigar Encyclopedia Data Structure

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
  length: number; // in mm
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
  price?: {
    single?: number;
    box?: number;
  };
}

// Extracted from the PDF menu and data sources
export const brands: CigarBrand[] = [
  {
    id: 'cohiba',
    name: 'Cohiba',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Cohiba_Logo_Gold_320x320_crop_center__1_-removebg-preview.png',
    description: 'Cuba\'s most prestigious cigar brand, originally created for diplomatic gifts.',
    heritage: 'Born in 1966 as the exclusive brand for Fidel Castro and Cuba\'s political elite, Cohiba represents the pinnacle of Cuban cigar craftsmanship.',
    country: 'Cuba',
    founded: 1966
  },
  {
    id: 'montecristo',
    name: 'Montecristo',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Montecristo_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'The most recognized Cuban cigar brand worldwide, named after Alexandre Dumas\' famous novel.',
    heritage: 'Founded in 1935, Montecristo has become synonymous with premium Cuban cigars, setting the standard for quality and consistency.',
    country: 'Cuba',
    founded: 1935
  },
  {
    id: 'hoyo-monterrey',
    name: 'Hoyo de Monterrey',
    logo: '/api/placeholder/150/150',
    description: 'Light and elegant cigars from the famous Vuelta Abajo region.',
    heritage: 'Established in 1865, this brand takes its name from a famous tobacco plantation in Cuba\'s premier growing region.',
    country: 'Cuba',
    founded: 1865
  },
  {
    id: 'h-upmann',
    name: 'H. Upmann',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/H._UPMANN_Gold_5cf36aa4-8b37-464e-b761-7fd19af22ace_320x320_crop_center-removebg-preview.png',
    description: 'A classic brand known for its consistent quality and refined taste.',
    heritage: 'Founded by Hermann Upmann in 1844, this German banker\'s passion for premium tobacco created one of Cuba\'s most enduring brands.',
    country: 'Cuba',
    founded: 1844
  },
  {
    id: 'partagas',
    name: 'Partagás',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Partagas_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'Full-bodied cigars with complex flavours and rich character.',
    heritage: 'Founded by Jaime Partagás in 1845, known for producing some of the most full-bodied and complex cigars in the Cuban portfolio.',
    country: 'Cuba',
    founded: 1845
  },
  {
    id: 'romeo-julieta',
    name: 'Romeo y Julieta',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Romeo_y_Julieta_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'Romantic name, exceptional quality, beloved by cigar connoisseurs worldwide.',
    heritage: 'Named after Shakespeare\'s timeless love story, this brand has been crafting exceptional cigars since 1875.',
    country: 'Cuba',
    founded: 1875
  }
];

// Extracted from the cigar menu PDF
export const cigars: Cigar[] = [
  {
    id: 'cohiba-bhk-52',
    name: 'BHK 52',
    brand: 'cohiba',
    vitola: 'BHK',
    length: 120,
    ringGauge: 52,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'La Línea BHK swept all before it when the three sizes were launched in 2010. The smallest, the BHK 52, was awarded the prestigious "Cigar of the Year" by Cigar Aficionado magazine.',
    heritage: 'A stunning and unique taste from Havana, representing the pinnacle of modern Cuban cigar making with the exclusive Medio Tiempo leaf.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Champagne', 'Aged Rum', 'Lowland Whisky'],
    }
  },
  {
    id: 'cohiba-bhk-54',
    name: 'BHK 54',
    brand: 'cohiba',
    vitola: 'BHK',
    length: 140,
    ringGauge: 54,
    smokingTime: '60-75 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'This stout model boasts a diameter of 54⁄64ths of an inch, which leaves plenty of room for the fourth component in the filler - the Medio Tiempo leaf.',
    heritage: 'The number of a BHK stands for its ring gauge, bringing startling intensity to the flavour through innovative blending techniques.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Champagne', 'XO Cognac', 'Aged Rum'],
    }
  },
  {
    id: 'cohiba-bhk-56',
    name: 'BHK 56',
    brand: 'cohiba',
    vitola: 'BHK',
    length: 166,
    ringGauge: 56,
    smokingTime: '75-90 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'One of the widest girths to be found within the entire Havana portfolio, allowing for a magnificent array of flavours to drench the palate.',
    heritage: 'The ultimate expression of luxury and indulgence, representing the absolute pinnacle of Cuban cigar craftsmanship.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Champagne', 'XO Cognac', 'Armagnac'],
    }
  },
  {
    id: 'cohiba-exquisito',
    name: 'Exquisito',
    brand: 'cohiba',
    vitola: 'Exquisito',
    length: 127,
    ringGauge: 36,
    smokingTime: '30-40 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium',
    description: 'A cigar for any time of day with plenty of taste to stimulate any palate.',
    heritage: 'The favourite size of Emilia Tamayo, the former director of El Laguito, home of Cohiba and the first woman to manage a cigar factory.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Bourbon'],
      cocktails: ['Gin & Tonic'],
      coffee: ['Coffee']
    }
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
    description: 'This Mareva or Petit Corona size provides the ideal introduction to the taste, quality and style of Cohiba.',
    heritage: 'The perfect starting point for exploring Cohiba - start here, then explore the rest of the magnificent range.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Cognac'],
      wine: ['Beer'],
      coffee: ['Coffee']
    }
  },
  {
    id: 'cohiba-robusto',
    name: 'Robusto',
    brand: 'cohiba',
    vitola: 'Robusto',
    length: 124,
    ringGauge: 50,
    smokingTime: '50-60 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium',
    description: 'The cigar that sparked the Robusto revolution from 1989 onwards and remains firmly in the vanguard of this important vitola.',
    heritage: 'Rich, deep, spicy and not to be missed - this cigar changed the industry and remains a benchmark for the Robusto format.',
    image: '/api/placeholder/400/600',
    pairings: {
      cocktails: ['Cuba Libre'],
      wine: ['LBV Port'],
      spirits: ['Islay Whisky']
    }
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
    description: 'If ever one brand has come to dominate a particular vitola, this is the classic Pirámide or "torpedo" size.',
    heritage: 'Easy burning, well constructed and full of faithful Montecristo flavours. A true benchmark cigar within the Cuban cigar industry.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Champagne', 'Port', 'Rum'],
    }
  },
  {
    id: 'montecristo-no-4',
    name: 'No. 4',
    brand: 'montecristo',
    vitola: 'Petit Corona',
    length: 129,
    ringGauge: 42,
    smokingTime: '40-50 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium',
    description: 'Simply the most popular individual handmade cigar in the UK.',
    heritage: 'Its rich, tangy, medium to full flavour acts as the benchmark for smokers embarking on their Havana journey. Many return to it again and again.',
    image: '/api/placeholder/400/600',
    pairings: {
      spirits: ['Rum', 'Whisky'],
      wine: ['Red Wine'],
    }
  },
  {
    id: 'montecristo-edmundo',
    name: 'Edmundo',
    brand: 'montecristo',
    vitola: 'Edmundo',
    length: 135,
    ringGauge: 52,
    smokingTime: '55-65 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium',
    description: 'Named after Alexandre Dumas\' hero Edmundo Dantes in "The Count of Montecristo".',
    heritage: 'The Edmundo was one of the first extra heavy gauge, parejo (straight) sizes produced in Cuba in the 21st century. Big and rewarding.',
    image: '/api/placeholder/400/600',
    pairings: {
      wine: ['Red Wine'],
      cocktails: ['Negroni'],
      spirits: ['Cuban Rum']
    }
  },
  {
    id: 'hoyo-epicure-2',
    name: 'Epicure No. 2',
    brand: 'hoyo-monterrey',
    vitola: 'Robusto',
    length: 124,
    ringGauge: 50,
    smokingTime: '50-60 minutes',
    flavourProfile: 'Light',
    strength: 'Light',
    description: 'The Robusto of choice for many cigar epicureans.',
    heritage: 'Formerly presented without any band, now it sports no less than two, so its identity is clear. A refined and elegant smoke.',
    image: '/api/placeholder/400/600',
    pairings: {
      wine: ['Champagne', 'Blonde Beer'],
      spirits: ['Lowland Whisky']
    }
  },
  {
    id: 'h-upmann-half-corona',
    name: 'Half Corona',
    brand: 'h-upmann',
    vitola: 'Half Corona',
    length: 90,
    ringGauge: 44,
    smokingTime: '25-30 minutes',
    flavourProfile: 'Light to Medium',
    strength: 'Light',
    description: 'The first 3½ inch (90mm) Havana to be introduced since the Second World War.',
    heritage: 'Its forebear, called the Half-a-Corona, was in its day the biggest selling Havana size by far. Perfect for a quick, refined smoke.',
    image: '/api/placeholder/400/600',
    pairings: {
      wine: ['White Wine'],
      spirits: ['Beer'],
      coffee: ['Tea']
    }
  }
];

// Helper functions
export const getBrandById = (id: string): CigarBrand | undefined => 
  brands.find(brand => brand.id === id);

export const getCigarsByBrand = (brandId: string): Cigar[] => 
  cigars.filter(cigar => cigar.brand === brandId);

export const searchCigars = (query: string): Cigar[] => {
  const lowercaseQuery = query.toLowerCase();
  return cigars.filter(cigar => 
    cigar.name.toLowerCase().includes(lowercaseQuery) ||
    cigar.description.toLowerCase().includes(lowercaseQuery) ||
    cigar.heritage.toLowerCase().includes(lowercaseQuery) ||
    getBrandById(cigar.brand)?.name.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterCigars = (filters: {
  brand?: string;
  flavourProfile?: string;
  ringGauge?: string;
  length?: string;
  smokingTime?: string;
}): Cigar[] => {
  return cigars.filter(cigar => {
    if (filters.brand && cigar.brand !== filters.brand) return false;
    if (filters.flavourProfile && cigar.flavourProfile !== filters.flavourProfile) return false;
    // Add more filter logic as needed
    return true;
  });
};