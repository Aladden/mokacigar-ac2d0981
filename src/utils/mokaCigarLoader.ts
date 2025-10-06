// Utility to load and process MokaCigar dataset

import { MokaCigarProduct, ProcessedCigar, BrandGroup } from '@/types/mokaCigar';
import mokaDataset from '@/data/mokacigar_dataset.json';

// Process raw dataset into usable format
export function processCigarData(data: MokaCigarProduct[]): ProcessedCigar[] {
  return data.map((item, index) => {
    // Parse image URLs (could be comma-separated)
    const imageUrls = item.image_urls
      ? item.image_urls.split(',').map(url => url.trim())
      : [];

    // Generate unique ID from brand and name
    const id = `${item.Brand.toLowerCase().replace(/\s+/g, '-')}-${index}`;

    // Normalize intensity to string
    const intensity = typeof item.Intensity === 'number' 
      ? `${item.Intensity}/5` 
      : item.Intensity || 'Not specified';

    return {
      id,
      brand: item.Brand,
      name: item.Name,
      description: item.Description,
      package: item.Package,
      tobaccoRegion: item["Tobacco Region"],
      shapeFormat: item["Shape Format"],
      intensity,
      cigarBody: item["Cigar Body"],
      enjoymentTime: item["Enjoyment Time"],
      taste: item.Taste,
      ringGauge: item["Ring Gauge"],
      imageUrls,
      pdfUrl: item.pdf_url,
      backgroundColor: '#000000',
      borderColor: '#B79E59',
    };
  });
}

// Group cigars by brand
export function groupCigarsByBrand(cigars: ProcessedCigar[]): BrandGroup[] {
  const brandMap = new Map<string, ProcessedCigar[]>();

  cigars.forEach(cigar => {
    const existing = brandMap.get(cigar.brand) || [];
    brandMap.set(cigar.brand, [...existing, cigar]);
  });

  return Array.from(brandMap.entries())
    .map(([name, cigars]) => ({
      name,
      cigars,
      cigarCount: cigars.length,
      description: `Premium ${name} cigars from Cuba`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Load all data
export function loadMokaCigarData() {
  const processedCigars = processCigarData(mokaDataset as MokaCigarProduct[]);
  const brands = groupCigarsByBrand(processedCigars);
  
  return {
    cigars: processedCigars,
    brands,
    totalCigars: processedCigars.length,
    totalBrands: brands.length,
  };
}

// Get cigars for specific brand
export function getCigarsByBrand(brandName: string): ProcessedCigar[] {
  const { cigars } = loadMokaCigarData();
  return cigars.filter(c => c.brand === brandName);
}

// Search cigars
export function searchCigars(query: string): ProcessedCigar[] {
  const { cigars } = loadMokaCigarData();
  const lowerQuery = query.toLowerCase();
  
  return cigars.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) ||
    c.brand.toLowerCase().includes(lowerQuery) ||
    c.description.toLowerCase().includes(lowerQuery) ||
    c.shapeFormat?.toLowerCase().includes(lowerQuery)
  );
}
