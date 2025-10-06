// Type definitions for MokaCigar dataset

export interface MokaCigarProduct {
  Brand: string;
  Name: string;
  Description: string;
  Package: number;
  "Cigar Brand": string;
  "Tobacco Region": string;
  "Shape Format": string | null;
  Intensity: string | number;
  "Cigar Body": number;
  "Enjoyment Time": string | null;
  Taste: string | null;
  "Ring Gauge": number | null;
  image_urls: string;
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
