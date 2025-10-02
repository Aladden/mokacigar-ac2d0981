// Enhanced type definitions for the MokaCigar Encyclopedia
// Based on comprehensive Cuban cigar database structure

export type BrandStatus = 'global' | 'multi-regional' | 'portfolio' | 'regional' | 'discontinued' | 'limited' | 'pre-revolution' | 'exclusive';
export type ReleaseType = 'standard' | 'limited_edition' | 'regional_edition' | 'reserva' | 'gran_reserva' | 'anejados' | 'festival' | 'anniversary' | 'lcdh';
export type FactoryCode = 'EL' | 'JLP' | 'BM' | 'FPG' | 'H' | 'HM' | 'LF' | 'PM' | 'RP' | 'other';

export interface CigarBrand {
  id: string;
  name: string;
  logo: string;
  status: BrandStatus;
  description: string;
  heritage: string;
  timeline?: Array<{
    year: number;
    event: string;
  }>;
  founder?: string;
  factory: FactoryCode;
  country: string;
  founded?: number;
  discontinued?: number;
  strength: string;
  flavourProfile: string;
  classification: string;
  keyDistinctions: string[];
  totalVitolas?: number;
  currentVitolas?: number;
}

export interface CigarVitola {
  id: string;
  name: string;
  factoryName?: string; // Factory production name if different
  brand: string;
  vitola: string;
  length: number; // in mm
  lengthInches: number;
  ringGauge: number;
  smokingTime: string;
  flavourProfile: 'Light' | 'Light to Medium' | 'Medium' | 'Medium to Full' | 'Full';
  strength: 'Light' | 'Light to Medium' | 'Medium' | 'Medium to Full' | 'Full';
  description: string;
  heritage: string;
  uniqueStory?: string;
  tastingNotes: string[];
  image: string;
  boxImage?: string;
  bandImage?: string;
  
  // Production details
  releaseType: ReleaseType;
  launchYear?: number;
  discontinuedYear?: number;
  isDiscontinued: boolean;
  isLimited: boolean;
  productionStatus: 'current' | 'discontinued' | 'limited' | 'special';
  
  // Special edition details
  edition?: {
    name: string;
    year: number;
    quantity?: number;
    region?: string;
    event?: string;
  };
  
  // Packaging varieties
  packaging: Array<{
    type: 'box' | 'tube' | 'jar' | 'cabinet' | 'dress_box' | 'slide_lid' | 'bundle';
    count: number;
    material?: string;
    description?: string;
    year?: number;
  }>;
  
  // Band variants
  bands?: Array<{
    design: string;
    years: string;
    description: string;
    image?: string;
    isCounterfeit?: boolean;
  }>;
  
  pairings: {
    spirits?: string[];
    wine?: string[];
    coffee?: string[];
    cocktails?: string[];
  };
  
  // Collector information
  rarity: 'common' | 'uncommon' | 'rare' | 'very_rare' | 'legendary';
  auctionNotes?: string;
  fakeWarnings?: string[];
}

export interface SpecialRelease {
  id: string;
  name: string;
  brand: string;
  year: number;
  type: ReleaseType;
  description: string;
  vitolas: string[]; // IDs of included vitolas
  limitedQuantity?: number;
  region?: string;
  event?: string;
  story: string;
  image?: string;
  packaging: {
    type: string;
    description: string;
    image?: string;
  };
}

export interface TobaccoRegion {
  id: string;
  name: string;
  description: string;
  characteristics: string;
  famousFarms: string[];
  climate: string;
  soilType: string;
  image?: string;
}

export interface CigarFactory {
  id: string;
  name: string;
  code: FactoryCode;
  location: string;
  founded: number;
  description: string;
  famousBrands: string[];
  specialties: string[];
  history: string;
  image?: string;
}

export interface HistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  impact: string;
  relatedBrands?: string[];
  category: 'industry' | 'political' | 'brand' | 'innovation';
}

// Filter and search interfaces
export interface CigarFilters {
  brand?: string;
  status?: BrandStatus;
  releaseType?: ReleaseType;
  strength?: string;
  flavourProfile?: string;
  productionStatus?: string;
  launchYear?: {
    min?: number;
    max?: number;
  };
  ringGauge?: {
    min?: number;
    max?: number;
  };
  length?: {
    min?: number;
    max?: number;
  };
  rarity?: string;
  factory?: FactoryCode;
}

export interface SearchResult {
  type: 'brand' | 'cigar' | 'special_release' | 'factory' | 'region';
  id: string;
  name: string;
  description: string;
  image?: string;
  relevance: number;
}