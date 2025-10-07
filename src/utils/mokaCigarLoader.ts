// Utility to load and process MokaCigar dataset

import { MokaCigarProduct, ProcessedCigar, BrandGroup } from '@/types/mokaCigar';
import { getBrandPDF } from '@/data/brandPDFs';

const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public';
const DATASET_URL = 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/mokacigar_dataset.json';

let cachedData: MokaCigarProduct[] | null = null;

// Fetch dataset from GitHub
async function fetchDataset(): Promise<MokaCigarProduct[]> {
  if (cachedData) return cachedData;
  
  try {
    const response = await fetch(DATASET_URL);
    if (!response.ok) throw new Error('Failed to fetch dataset');
    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error('Error fetching dataset:', error);
    return [];
  }
}

// Process raw dataset into usable format
export function processCigarData(data: MokaCigarProduct[]): ProcessedCigar[] {
  return data
    .filter(item => item.brand && item.name) // Skip items with null brand or name
    .map((item, index) => {
      // Handle single image field and convert relative to absolute
      const imageUrl = item.image?.trim() || '';
      const imageUrls = imageUrl
        ? [imageUrl.startsWith('/') ? `${GITHUB_BASE_URL}${imageUrl}` : imageUrl]
        : [];

      // Generate unique ID from brand and name
      const id = `${item.brand.toLowerCase().replace(/\s+/g, '-')}-${index}`;

      // Normalize intensity to string
      const intensity = typeof item.intensity === 'number' 
        ? `${item.intensity}/5` 
        : item.intensity || 'Not specified';

      return {
        id,
        brand: item.brand,
        name: item.name,
        description: item.description || '',
        package: item.package || 0,
        tobaccoRegion: item["tobacco region"] || 'Cuba',
        shapeFormat: item["shape format"],
        intensity,
        cigarBody: item["cigar body"] || 0,
        enjoymentTime: item["enjoyment time"],
        taste: item.taste,
        ringGauge: item["ring gauge"],
        imageUrls,
        pdfUrl: item.pdf_url || '',
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
      pdfUrl: getBrandPDF(name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Load all data
export async function loadMokaCigarData() {
  const dataset = await fetchDataset();
  const processedCigars = processCigarData(dataset);
  const brands = groupCigarsByBrand(processedCigars);
  
  return {
    cigars: processedCigars,
    brands,
    totalCigars: processedCigars.length,
    totalBrands: brands.length,
  };
}

// Get cigars for specific brand
export async function getCigarsByBrand(brandName: string): Promise<ProcessedCigar[]> {
  const { cigars } = await loadMokaCigarData();
  return cigars.filter(c => c.brand === brandName);
}

// Search cigars
export async function searchCigars(query: string): Promise<ProcessedCigar[]> {
  const { cigars } = await loadMokaCigarData();
  const lowerQuery = query.toLowerCase();
  
  return cigars.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) ||
    c.brand.toLowerCase().includes(lowerQuery) ||
    c.description.toLowerCase().includes(lowerQuery) ||
    c.shapeFormat?.toLowerCase().includes(lowerQuery)
  );
}
