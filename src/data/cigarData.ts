// MokaCigar Encyclopedia Data Structure - Based on The Habano Encyclopedia

export interface CigarBrand {
  id: string;
  name: string;
  logo: string;
  description: string;
  heritage: string;
  country: string;
  founded?: number;
  strength: string;
  flavourProfile: string;
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
  strength: 'Light' | 'Light to Medium' | 'Medium' | 'Medium to Full' | 'Full';
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
    heritage: 'Created in 1966 exclusively for President Fidel Castro and as a diplomatic gift for visiting heads of state and dignitaries. The tobacco undergoes an additional, third fermentation in barrels, a unique process that lends the blend an unparalleled smoothness. The name itself is the ancient Taíno word for the rolled tobacco leaves Columbus first saw.',
    country: 'Cuba',
    founded: 1966,
    strength: 'Medium to Full',
    flavourProfile: 'Complex and refined, with characteristic notes of grass, bean, and a creamy smoothness, evolving into richer leather and spice notes in the fuller-bodied expressions.'
  },
  {
    id: 'montecristo',
    name: 'Montecristo',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Montecristo_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'The most recognized Cuban cigar brand worldwide.',
    heritage: 'Established in 1935, Montecristo is the best-selling and most recognized Habano brand in the world. Its name was inspired by Alexandre Dumas\'s novel The Count of Monte Cristo, a favorite story read aloud to the torcedores as they worked. The original portfolio consisted of just five numbered vitolas, from No. 1 to No. 5, which remain the core of the brand today.',
    country: 'Cuba',
    founded: 1935,
    strength: 'Medium to Full',
    flavourProfile: 'The quintessential Cuban profile, with notes of tangy wood, coffee, cocoa, and spice, often with a signature bittersweet note.'
  },
  {
    id: 'romeo-y-julieta',
    name: 'Romeo y Julieta',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Romeo_y_Julieta_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'Romantic name, exceptional quality, beloved worldwide.',
    heritage: 'Named for Shakespeare\'s tragic lovers, Romeo y Julieta was founded in 1875. The brand achieved international fame in the early 20th century under the direction of José "Pepin" Rodríguez Fernández, a promotional genius who traveled the world entering his horse, Julieta, in races and establishing the brand among the global elite. The brand is most famously associated with Sir Winston Churchill, who became a devoted aficionado during a visit to Havana.',
    country: 'Cuba',
    founded: 1875,
    strength: 'Medium',
    flavourProfile: 'A classic, aromatic, and balanced blend with a wide range of complex flavors, including floral, nutty, herbal, and cedar notes.'
  },
  {
    id: 'partagas',
    name: 'Partagás',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/Partagas_Logo_Gold_320x320_crop_center-removebg-preview.png',
    description: 'Full-bodied cigars with complex flavours.',
    heritage: 'Founded in 1845 by Don Jaime Partagás y Ravel, this is one of the oldest and most recognizable Havana brands. The Partagás factory in Havana is a landmark and one of the most famous in Cuba. Don Jaime is also credited with being one of the first factory owners to hire a lector to read to his cigar rollers as they worked, a tradition that continues to this day.',
    country: 'Cuba',
    founded: 1845,
    strength: 'Full',
    flavourProfile: 'Rich, intense, and earthy, with strong notes of pepper, leather, wood, and spice.'
  },
  {
    id: 'h-upmann',
    name: 'H. Upmann',
    logo: 'https://mokacigar.com/wp-content/uploads/2025/05/H._UPMANN_Gold_5cf36aa4-8b37-464e-b761-7fd19af22ace_320x320_crop_center-removebg-preview.png',
    description: 'Classic brand known for refined taste.',
    heritage: 'Established in 1844 by German banker Hermann Upmann, who moved to Havana and established both a bank and a cigar factory. The bank failed in the 1920s, but the cigar brand endured, becoming one of the most respected in the world. The brand\'s boxes are famously adorned with the gold medals won at no fewer than eleven international exhibitions in the 19th century.',
    country: 'Cuba',
    founded: 1844,
    strength: 'Light to Medium',
    flavourProfile: 'Elegant and subtle, with notes of cedar, leather, coffee, and a characteristic light spice.'
  },
  {
    id: 'hoyo-de-monterrey',
    name: 'Hoyo de Monterrey',
    logo: '/api/placeholder/300/300',
    description: 'Lighter-bodied, elegant, and aromatic profile.',
    heritage: 'The Hoyo de Monterrey plantation, located in the fertile river valley of San Juan y Martínez in Vuelta Abajo, has been a source of legendary tobacco since at least 1860. José Gener, a Catalan, acquired the plantation and registered the brand name in 1865. The name literally means "the hole of Monterrey," referring to the low-lying position of the vega on the banks of the river.',
    country: 'Cuba',
    founded: 1865,
    strength: 'Light',
    flavourProfile: 'Delicate and aromatic, with complex notes of cream, cocoa, cedar, and a subtle sweetness.'
  },
  {
    id: 'trinidad',
    name: 'Trinidad',
    logo: '/api/placeholder/300/300',
    description: 'Top-secret, state-only brand, more exclusive than Cohiba.',
    heritage: 'Trinidad began its life in 1969 as a top-secret, state-only brand, produced at the legendary El Laguito factory alongside Cohiba. For decades, it was even more exclusive than Cohiba, reserved solely for Fidel Castro to give as gifts to foreign diplomats and dignitaries. It was not made available to the public until 1998, and even then, only in very limited quantities. The brand is distinguished by its unique "pigtail" cap.',
    country: 'Cuba',
    founded: 1969,
    strength: 'Medium',
    flavourProfile: 'Highly aromatic and complex, with a rich tapestry of flavors including coffee, vanilla, nuts, and a creamy, smooth finish.'
  },
  {
    id: 'bolivar',
    name: 'Bolívar',
    logo: '/api/placeholder/300/300',
    description: 'One of the strongest and most full-bodied Habanos.',
    heritage: 'Named for Simón Bolívar, the 19th-century revolutionary who liberated much of South America from Spanish rule, this brand was established in 1902. True to its namesake, Bolívar has a reputation for being one of the strongest and most full-bodied Habanos. Its powerful, rich blend is not for the novice but is deeply rewarding for the experienced palate.',
    country: 'Cuba',
    founded: 1902,
    strength: 'Full',
    flavourProfile: 'Robust and earthy, with pronounced notes of leather, spice, dark chocolate, and black pepper.'
  },
  {
    id: 'punch',
    name: 'Punch',
    logo: '/api/placeholder/300/300',
    description: 'Classic, well-balanced, medium-bodied profile.',
    heritage: 'One of the very oldest Habanos brands, Punch was registered in 1840 by a German named Stockmann, with an eye on the burgeoning British market. He named the brand after the popular satirical magazine Punch, and its mischievous mascot, Mr. Punch, still adorns the box art to this day. The brand has a long and storied history and is prized for its classic, well-balanced, medium-bodied profile.',
    country: 'Cuba',
    founded: 1840,
    strength: 'Medium',
    flavourProfile: 'A distinctively woody and aromatic profile, with notes of leather, nuts, and a subtle sweetness.'
  },
  {
    id: 'quai-dorsay',
    name: 'Quai d\'Orsay',
    logo: '/api/placeholder/300/300',
    description: 'Created for French market with lighter flavor profile.',
    heritage: 'Quai d\'Orsay is a relatively young brand, created in 1973 at the specific request of Valéry Giscard d\'Estaing, then France\'s Minister of Finance. The French state tobacco monopoly, SEITA, wanted a Cuban cigar with a lighter flavor profile to pair with French Champagne and cuisine. The brand is named after the famous Parisian avenue along the Seine where SEITA was headquartered.',
    country: 'Cuba',
    founded: 1973,
    strength: 'Light to Medium',
    flavourProfile: 'Light and aromatic, designed to pair with champagne and light cuisine.'
  },
  {
    id: 'ramon-allones',
    name: 'Ramón Allones',
    logo: '/api/placeholder/300/300',
    description: 'Complex and intense full-bodied flavor.',
    heritage: 'Founded in 1837 by the Galician immigrant Ramón Allones, this is one of the oldest brands still in production. Ramón Allones is credited with a major industry innovation: he was the first manufacturer to pack his cigars in decorative boxes adorned with colorful, lithographed labels, pioneering the cigar packaging we know today.',
    country: 'Cuba',
    founded: 1837,
    strength: 'Full',
    flavourProfile: 'Deeply complex and full-flavored, with notes of dark coffee, nuts, stewed fruits, and a signature spicy character.'
  }
];

export const cigars: Cigar[] = [
  // Cohiba Cigars
  {
    id: 'cohiba-espléndidos',
    name: 'Espléndidos',
    brand: 'cohiba',
    vitola: 'Julieta No. 2',
    length: 178,
    ringGauge: 47,
    smokingTime: '70-90 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium to Full',
    description: 'The flagship Churchill vitola of Cohiba, offering the full complexity of the blend.',
    heritage: 'Part of the original Línea Clásica, representing Cohiba\'s pinnacle of craftsmanship.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Cognac', 'Single Malt Whiskey', 'Bourbon', 'Rum', 'Port'] }
  },
  {
    id: 'cohiba-robustos',
    name: 'Robustos',
    brand: 'cohiba',
    vitola: 'Robustos',
    length: 124,
    ringGauge: 50,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium to Full',
    description: 'The perfect balance of flavor and time in Cohiba\'s portfolio.',
    heritage: 'A cornerstone of the Línea Clásica, beloved by aficionados worldwide.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Cuba Libre', 'LBV Port', 'Islay Whisky'], coffee: ['Coffee', 'Tea'] }
  },
  {
    id: 'cohiba-siglo-ii',
    name: 'Siglo II',
    brand: 'cohiba',
    vitola: 'Marevas',
    length: 129,
    ringGauge: 42,
    smokingTime: '40-50 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'Perfect introduction to Cohiba quality.',
    heritage: 'From the Línea 1492 (Siglo Series), celebrating Columbus\'s discovery of tobacco.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Cognac'], coffee: ['Coffee'] }
  },
  {
    id: 'cohiba-siglo-vi',
    name: 'Siglo VI',
    brand: 'cohiba',
    vitola: 'Cañonazo',
    length: 150,
    ringGauge: 52,
    smokingTime: '60-75 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'The largest of the Siglo series, offering extended smoking pleasure.',
    heritage: 'Represents the evolution of Cohiba\'s lighter line.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Champagne', 'XO Cognac', 'Cuban Rum'], coffee: ['Coffee', 'Tea'] }
  },
  {
    id: 'cohiba-bhk-52',
    name: 'BHK 52',
    brand: 'cohiba',
    vitola: 'Laguito No. 4',
    length: 119,
    ringGauge: 52,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The smallest BHK, featuring the rare Medio Tiempo leaf.',
    heritage: 'Pinnacle of Cuban craftsmanship with the most prized tobacco leaves.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Aged Rum', 'Scotch Whisky'], coffee: ['Robust Coffee'] }
  },

  // Montecristo Cigars
  {
    id: 'montecristo-no-2',
    name: 'No. 2',
    brand: 'montecristo',
    vitola: 'Pirámides',
    length: 156,
    ringGauge: 52,
    smokingTime: '60-70 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium to Full',
    description: 'The classic torpedo that dominates this vitola.',
    heritage: 'Benchmark cigar in the Cuban industry, part of the original numbered series.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Champagne', 'Port', 'Rum'] }
  },
  {
    id: 'montecristo-no-4',
    name: 'No. 4',
    brand: 'montecristo',
    vitola: 'Marevas',
    length: 129,
    ringGauge: 42,
    smokingTime: '40-50 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'The most popular Montecristo, offering classic Cuban character.',
    heritage: 'From the original five numbered vitolas, this remains the bestseller.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Beer', 'Red Wine'], cocktails: ['Gin & Tonic'] }
  },
  {
    id: 'montecristo-edmundo',
    name: 'Edmundo',
    brand: 'montecristo',
    vitola: 'Edmundo',
    length: 135,
    ringGauge: 52,
    smokingTime: '55-70 minutes',
    flavourProfile: 'Medium to Full',
    strength: 'Medium to Full',
    description: 'Modern addition offering fuller flavor in a comfortable size.',
    heritage: 'Named after the Count of Monte Cristo character, representing evolution.',
    image: '/api/placeholder/400/600',
    pairings: { wine: ['Red Wine'], cocktails: ['Negroni'], spirits: ['Cuban Rum'] }
  },

  // Romeo y Julieta Cigars
  {
    id: 'romeo-y-julieta-churchills',
    name: 'Churchills',
    brand: 'romeo-y-julieta',
    vitola: 'Julieta No. 2',
    length: 178,
    ringGauge: 47,
    smokingTime: '70-90 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'Named in honor of Sir Winston Churchill, the brand\'s most famous devotee.',
    heritage: 'Created to honor Churchill after his love affair with the brand began in Havana.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Blonde Beer', 'Champagne', 'Cognac'] }
  },
  {
    id: 'romeo-y-julieta-short-churchills',
    name: 'Short Churchills',
    brand: 'romeo-y-julieta',
    vitola: 'Robustos',
    length: 124,
    ringGauge: 50,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'Shorter version of the famous Churchill, perfect for any time.',
    heritage: 'Maintains the Churchill character in a more accessible format.',
    image: '/api/placeholder/400/600',
    pairings: { wine: ['Rosé'], spirits: ['Champagne'] }
  },

  // Partagás Cigars
  {
    id: 'partagas-serie-d-no-4',
    name: 'Serie D No. 4',
    brand: 'partagas',
    vitola: 'Robustos',
    length: 124,
    ringGauge: 50,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The flagship Partagás, offering intense Cuban flavor.',
    heritage: 'Represents the quintessential Partagás experience in perfect proportion.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Islay Whisky', 'Rum'], coffee: ['Coffee'] }
  },
  {
    id: 'partagas-serie-p-no-2',
    name: 'Serie P No. 2',
    brand: 'partagas',
    vitola: 'Pirámides',
    length: 156,
    ringGauge: 52,
    smokingTime: '60-75 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'Torpedo format amplifying Partagás\' legendary intensity.',
    heritage: 'Showcases how the pyramid shape concentrates the powerful Partagás blend.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Port', 'Peated Whisky', 'Rum'] }
  },
  {
    id: 'partagas-lusitanias',
    name: 'Lusitanias',
    brand: 'partagas',
    vitola: 'Prominentes',
    length: 194,
    ringGauge: 49,
    smokingTime: '90-120 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The longest regular production Partagás, for the dedicated aficionado.',
    heritage: 'For those who want the full Partagás experience over an extended session.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Port', 'Islay Whisky', 'Rum'] }
  },

  // H. Upmann Cigars
  {
    id: 'h-upmann-sir-winston',
    name: 'Sir Winston',
    brand: 'h-upmann',
    vitola: 'Julieta No. 2',
    length: 178,
    ringGauge: 47,
    smokingTime: '70-90 minutes',
    flavourProfile: 'Light to Medium',
    strength: 'Light to Medium',
    description: 'The elegant Churchill format showcasing H. Upmann refinement.',
    heritage: 'Named for the great statesman, representing diplomatic elegance.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Beer'], wine: ['White Wine'], coffee: ['Tea'] }
  },
  {
    id: 'h-upmann-magnum-50',
    name: 'Magnum 50',
    brand: 'h-upmann',
    vitola: 'Magnum 50',
    length: 160,
    ringGauge: 50,
    smokingTime: '65-80 minutes',
    flavourProfile: 'Light to Medium',
    strength: 'Light to Medium',
    description: 'Modern format offering extended enjoyment of H. Upmann\'s character.',
    heritage: 'Represents the brand\'s evolution while maintaining its classic profile.',
    image: '/api/placeholder/400/600',
    pairings: { wine: ['Merlot', 'Hearty Red Wine'] }
  },

  // Hoyo de Monterrey Cigars
  {
    id: 'hoyo-de-monterrey-epicure-no-2',
    name: 'Epicure No. 2',
    brand: 'hoyo-de-monterrey',
    vitola: 'Robustos',
    length: 124,
    ringGauge: 50,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Light',
    strength: 'Light',
    description: 'The perfect introduction to Cuban cigars, elegant and approachable.',
    heritage: 'Showcases the delicate nature of Hoyo\'s legendary plantation tobacco.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Blonde Beer', 'Champagne', 'Lowland Whisky'] }
  },
  {
    id: 'hoyo-de-monterrey-double-coronas',
    name: 'Double Coronas',
    brand: 'hoyo-de-monterrey',
    vitola: 'Prominentes',
    length: 194,
    ringGauge: 49,
    smokingTime: '90-120 minutes',
    flavourProfile: 'Light',
    strength: 'Light',
    description: 'The longest format allowing full appreciation of Hoyo\'s subtlety.',
    heritage: 'For those who appreciate the plantation\'s delicate, aromatic qualities.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Blonde Beer', 'Champagne', 'Lowland Whisky'] }
  },

  // Trinidad Cigars
  {
    id: 'trinidad-fundadores',
    name: 'Fundadores',
    brand: 'trinidad',
    vitola: 'Laguito Especial',
    length: 192,
    ringGauge: 40,
    smokingTime: '75-90 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'The original Trinidad vitola, long and elegant with signature pigtail.',
    heritage: 'The first Trinidad made available to the public, maintaining its exclusive character.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Gin & Tonic', 'Champagne', 'Aged Rum'] }
  },
  {
    id: 'trinidad-vigia',
    name: 'Vigia',
    brand: 'trinidad',
    vitola: 'Torres',
    length: 110,
    ringGauge: 54,
    smokingTime: '45-55 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'Short and thick format concentrating Trinidad\'s aromatic complexity.',
    heritage: 'Modern addition offering Trinidad\'s unique character in accessible format.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Gin & Tonic', 'Champagne', 'Calvados'] }
  },

  // Bolívar Cigars
  {
    id: 'bolivar-belicosos-finos',
    name: 'Belicosos Finos',
    brand: 'bolivar',
    vitola: 'Campanas',
    length: 140,
    ringGauge: 52,
    smokingTime: '55-70 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'Torpedo format intensifying Bolívar\'s powerful character.',
    heritage: 'Represents the revolutionary spirit with uncompromising strength.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Aged Rum', 'Peated Scotch Whisky'], wine: ['Full-Bodied Red Wine'], coffee: ['Espresso'] }
  },
  {
    id: 'bolivar-royal-coronas',
    name: 'Royal Coronas',
    brand: 'bolivar',
    vitola: 'Robustos',
    length: 124,
    ringGauge: 50,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The classic Robusto showcasing Bolívar\'s legendary intensity.',
    heritage: 'Perfect introduction to the brand\'s revolutionary strength.',
    image: '/api/placeholder/400/600',
    pairings: { coffee: ['Aromatic Coffee'], spirits: ['Rum', 'Whisky'] }
  },

  // Punch Cigars
  {
    id: 'punch-punch',
    name: 'Punch Punch',
    brand: 'punch',
    vitola: 'Coronas Gordas',
    length: 143,
    ringGauge: 46,
    smokingTime: '55-70 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'The brand\'s signature vitola, perfectly balanced and aromatic.',
    heritage: 'Embodies the playful spirit of Mr. Punch with serious quality.',
    image: '/api/placeholder/400/600',
    pairings: { wine: ['White Wine'], spirits: ['IPA'], cocktails: ['Old Fashioned'] }
  },
  {
    id: 'punch-double-coronas',
    name: 'Double Coronas',
    brand: 'punch',
    vitola: 'Prominentes',
    length: 194,
    ringGauge: 49,
    smokingTime: '90-120 minutes',
    flavourProfile: 'Medium',
    strength: 'Medium',
    description: 'Extended format for full appreciation of Punch\'s woody character.',
    heritage: 'For the aficionado who wants the complete Punch experience.',
    image: '/api/placeholder/400/600',
    pairings: { wine: ['White Wine'], spirits: ['IPA'], cocktails: ['Old Fashioned'] }
  },

  // Ramón Allones Cigars
  {
    id: 'ramon-allones-specially-selected',
    name: 'Specially Selected',
    brand: 'ramon-allones',
    vitola: 'Robustos',
    length: 124,
    ringGauge: 50,
    smokingTime: '45-60 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'Concentrated power of Ramón Allones in perfect proportion.',
    heritage: 'Continues the tradition of beautiful packaging with intense flavor.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Peated Scotch', 'Aged Rum'], wine: ['Full-bodied Red Wine'], coffee: ['Dark Coffee'] }
  },
  {
    id: 'ramon-allones-gigantes',
    name: 'Gigantes',
    brand: 'ramon-allones',
    vitola: 'Prominentes',
    length: 194,
    ringGauge: 49,
    smokingTime: '90-120 minutes',
    flavourProfile: 'Full',
    strength: 'Full',
    description: 'The largest format showcasing the brand\'s complex intensity.',
    heritage: 'For the connoisseur seeking the ultimate Ramón Allones experience.',
    image: '/api/placeholder/400/600',
    pairings: { spirits: ['Peated Scotch', 'Aged Rum'], wine: ['Full-bodied Red Wine'], coffee: ['Dark Coffee'] }
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