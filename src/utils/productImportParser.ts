/**
 * Utility to parse and transform Moka product import data
 * into the MokaCigar Encyclopedia format
 */

import type { CigarVitola, CigarBrand } from '@/types/cigar';

interface ImportRow {
  Sku: string;
  Brand: string;
  'Brand Line': string;
  Name: string;
  Description: string;
  Assets: string;
  Package: string;
  'Shape Format': string;
  Intensity: string;
  'Ring Gauge': string;
  'Cigar Length CM': string;
  'Cigar Length IN': string;
  'Cigar Diameter CM': string;
}

// Transform imported products into CigarVitola format
export function transformProductToCigar(row: ImportRow, brandId: string): CigarVitola | null {
  if (!row.Name || !row.Brand) return null;

  const cigarName = row.Name
    .replace(row.Brand, '')
    .replace(/^[\s-]+/, '')
    .replace(/\s*-\s*(Varnished\s)?(Box|SLB|SBN|Tins|Dark Varnished Box)?\s*$/i, '')
    .trim();

  const id = row.Name.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const ringGauge = parseInt(row['Ring Gauge']) || 0;
  const lengthMm = parseFloat(row['Cigar Length CM']) ? parseFloat(row['Cigar Length CM']) * 10 : 0;
  const lengthInches = parseFloat(row['Cigar Length IN']) || 0;

  // Determine packaging
  const packaging: Array<{ type: 'box' | 'tube' | 'jar' | 'cabinet' | 'dress_box' | 'slide_lid' | 'bundle'; count: number }> = [];
  const packageCount = parseInt(row.Package) || 1;
  
  if (row.Name.toLowerCase().includes('tube') || row.Name.toLowerCase().includes('tubos')) {
    packaging.push({ type: 'tube', count: packageCount });
  } else if (row.Name.toLowerCase().includes('tin')) {
    packaging.push({ type: 'jar', count: packageCount });
  } else if (row.Name.toLowerCase().includes('slb')) {
    packaging.push({ type: 'slide_lid', count: packageCount });
  } else if (row.Name.toLowerCase().includes('sbn')) {
    packaging.push({ type: 'box', count: packageCount });
  } else {
    packaging.push({ type: 'box', count: packageCount });
  }

  // Map intensity to strength and flavor profile
  const intensityMap: Record<string, { strength: string; flavour: string }> = {
    'Light': { strength: 'Light', flavour: 'Light' },
    'Medium to Full': { strength: 'Medium to Full', flavour: 'Medium to Full' },
    '2': { strength: 'Medium to Full', flavour: 'Medium to Full' }
  };

  const intensity = intensityMap[row.Intensity] || { strength: 'Medium', flavour: 'Medium' };

  return {
    id,
    name: cigarName,
    brand: brandId,
    vitola: row['Shape Format'] || 'Robusto',
    length: lengthMm,
    lengthInches,
    ringGauge,
    smokingTime: calculateSmokingTime(lengthMm, ringGauge),
    flavourProfile: intensity.flavour as any,
    strength: intensity.strength as any,
    description: row.Description || `Premium Cuban cigar from ${row.Brand}`,
    heritage: `Part of the ${row['Brand Line'] || row.Brand} collection`,
    tastingNotes: generateTastingNotes(row.Brand, intensity.strength),
    image: `/images/cigars/${id}.jpg`,
    releaseType: 'standard' as const,
    isDiscontinued: false,
    isLimited: false,
    productionStatus: 'current' as const,
    packaging,
    pairings: {
      spirits: generatePairings(row.Brand, intensity.strength),
      wine: [],
      coffee: [],
      cocktails: []
    },
    rarity: 'common' as const
  };
}

function calculateSmokingTime(lengthMm: number, ringGauge: number): string {
  const minutes = Math.round((lengthMm / 10) * 2.5 + (ringGauge / 10) * 1.5);
  if (minutes < 30) return '20-30 minutes';
  if (minutes < 45) return '30-45 minutes';
  if (minutes < 60) return '45-60 minutes';
  if (minutes < 75) return '60-75 minutes';
  return '75-90 minutes';
}

function generateTastingNotes(brand: string, strength: string): string[] {
  const notes: Record<string, string[]> = {
    'Cohiba': ['Cedar', 'Leather', 'Coffee', 'Cream', 'Honey'],
    'Montecristo': ['Wood', 'Nuts', 'Leather', 'Cocoa', 'Spice'],
    'Partagas': ['Earth', 'Wood', 'Pepper', 'Leather', 'Coffee'],
    'Romeo y Julieta': ['Floral', 'Cedar', 'Honey', 'Nuts', 'Vanilla'],
    'Trinidad': ['Spice', 'Cedar', 'Chocolate', 'Nuts', 'Cream'],
    'San Cristobal de la Habana': ['Wood', 'Earth', 'Spice', 'Coffee', 'Cedar'],
    'Vegas Robaina': ['Earth', 'Leather', 'Coffee', 'Wood', 'Spice'],
    'Ramon Allones': ['Spice', 'Earth', 'Wood', 'Coffee', 'Chocolate']
  };

  return notes[brand] || ['Wood', 'Leather', 'Spice', 'Coffee', 'Earth'];
}

function generatePairings(brand: string, strength: string): string[] {
  if (strength.includes('Full')) {
    return ['Cognac', 'Dark Rum', 'Single Malt Whisky', 'Aged Bourbon'];
  } else if (strength.includes('Medium')) {
    return ['Rum', 'Whisky', 'Cognac', 'Armagnac'];
  }
  return ['Light Rum', 'Irish Whiskey', 'Champagne'];
}

// Group products by brand
export function groupProductsByBrand(products: CigarVitola[]): Map<string, CigarVitola[]> {
  const grouped = new Map<string, CigarVitola[]>();
  
  products.forEach(product => {
    const existing = grouped.get(product.brand) || [];
    grouped.set(product.brand, [...existing, product]);
  });
  
  return grouped;
}
