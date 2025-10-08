// Complete Encyclopedia data from Cuban Cigars CSV (498 entries)
import { convertCSVToEncyclopediaData } from './csvParser';

export const encyclopediaData = convertCSVToEncyclopediaData();

export function enrichCigarWithEncyclopedia(cigar: any) {
  const encyclopediaEntry = encyclopediaData.find(
    entry => entry.brand.toLowerCase() === cigar.brand.toLowerCase() && 
             entry.name.toLowerCase() === cigar.name.toLowerCase()
  );
  
  if (encyclopediaEntry) {
    return {
      ...cigar,
      ...encyclopediaEntry
    };
  }
  
  return cigar;
}
