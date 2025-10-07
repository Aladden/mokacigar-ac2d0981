// Type definitions for MokaCigar dataset

export interface MokaCigarProduct {
  brand: string;
  name: string;
  description: string;
  package: number;
  "cigar brand": string;
  "tobacco region": string;
  "shape format": string | null;
  intensity: string | number;
  "cigar body": number;
  "enjoyment time": string | null;
  taste: string | null;
  "ring gauge": number | null;
  image: string;
  pdf_url: string;
  background_style: string;
}

export interface ProcessedCigar {
  id: string;
  brand: string;
  name: string;
  description: string;
  package: number;
  tobaccoRegion: string;
  shapeFormat: string | null;
  intensity: string;
  cigarBody: number;
  enjoymentTime: string | null;
  taste: string | null;
  ringGauge: number | null;
  imageUrls: string[];
  pdfUrl: string;
  backgroundColor: string;
  borderColor: string;
}

export interface BrandGroup {
  name: string;
  cigars: ProcessedCigar[];
  cigarCount: number;
  logo?: string;
  description?: string;
  pdfUrl?: string;
}
