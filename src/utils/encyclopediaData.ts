// Encyclopedia data from Cuban Cigars Encyclopedia CSV
export const encyclopediaData = [
  { brand: "Belinda", name: "Coronas", factoryName: "Coronas", ringGauge: 42, lengthMm: 142, lengthInches: "5⅝", vitola: "Corona", status: "Discontinued" as const, releaseYear: "Pre-1960", discontinuedYear: "1990s", construction: "Handmade" },
  { brand: "Belinda", name: "Petit Coronas", factoryName: "Marevas", ringGauge: 42, lengthMm: 129, lengthInches: "5⅛", vitola: "Petit Corona", status: "Discontinued" as const, releaseYear: "Pre-1960", discontinuedYear: "1990s", construction: "Handmade" },
  { brand: "Bolívar", name: "Royal Coronas", factoryName: "Robustos", ringGauge: 50, lengthMm: 124, lengthInches: "4⅞", vitola: "Robusto", status: "Current" as const, releaseYear: "1969", construction: "Handmade", notes: "Full strength" },
  { brand: "Bolívar", name: "Libertador", factoryName: "Sublimes", ringGauge: 54, lengthMm: 164, lengthInches: "6½", vitola: "Double Robusto", status: "Current" as const, releaseYear: "2013", construction: "Handmade", notes: "LCDH Exclusive" },
  { brand: "Bolívar", name: "Belicosos Finos", factoryName: "Campanas", ringGauge: 52, lengthMm: 140, lengthInches: "5½", vitola: "Pyramid", status: "Current" as const, releaseYear: "Pre-1960", construction: "Handmade", notes: "Full strength" },
  { brand: "Bolívar", name: "Bolívar Tubos No.2", factoryName: "Marevas", ringGauge: 42, lengthMm: 129, lengthInches: "5⅛", vitola: "Petit Corona", status: "Current" as const, releaseYear: "Pre-1960", construction: "Handmade", notes: "Full strength - tubes" },
  { brand: "Bolívar", name: "Coronas Junior", factoryName: "Minutos", ringGauge: 42, lengthMm: 110, lengthInches: "4⅜", vitola: "Petit Corona", status: "Current" as const, releaseYear: "Pre-1960", construction: "Handmade", notes: "Full strength" },
  { brand: "Cohiba", name: "Lanceros", factoryName: "Laguito No.1", ringGauge: 38, lengthMm: 192, lengthInches: "7½", vitola: "Long Panetela", status: "Current" as const, releaseYear: "1964", construction: "Handmade", notes: "Original diplomatic gift" },
  { brand: "Cohiba", name: "Coronas Especiales", factoryName: "Laguito No.2", ringGauge: 38, lengthMm: 152, lengthInches: "6", vitola: "Panetela", status: "Current" as const, releaseYear: "1967", construction: "Handmade" },
  { brand: "Cohiba", name: "Panetelas", factoryName: "Laguito No.3", ringGauge: 26, lengthMm: 115, lengthInches: "4½", vitola: "Small Panetela", status: "Current" as const, releaseYear: "1967", construction: "Handmade" },
  { brand: "Cohiba", name: "Espléndidos", factoryName: "Julieta No.2", ringGauge: 47, lengthMm: 178, lengthInches: "7", vitola: "Churchill", status: "Current" as const, releaseYear: "1989", construction: "Handmade" },
  { brand: "Cohiba", name: "Robustos", factoryName: "Robustos", ringGauge: 50, lengthMm: 124, lengthInches: "4⅞", vitola: "Robusto", status: "Current" as const, releaseYear: "1989", construction: "Handmade" },
  { brand: "Cohiba", name: "Siglo I", factoryName: "Perlas", ringGauge: 40, lengthMm: 102, lengthInches: "4", vitola: "Petit Corona", status: "Current" as const, releaseYear: "1994", construction: "Handmade", notes: "Siglo line" },
  { brand: "Cohiba", name: "Siglo II", factoryName: "Marevas", ringGauge: 42, lengthMm: 129, lengthInches: "5⅛", vitola: "Petit Corona", status: "Current" as const, releaseYear: "1994", construction: "Handmade", notes: "Siglo line" },
  { brand: "Cohiba", name: "BHK 52", factoryName: "Laguito No.4", ringGauge: 52, lengthMm: 119, lengthInches: "4⅝", vitola: "Petit Robusto", status: "Current" as const, releaseYear: "2010", construction: "Handmade", notes: "Behike - Medio Tiempo leaf" },
  { brand: "H.Upmann", name: "Magnum 46", factoryName: "Magnum 46", ringGauge: 46, lengthMm: 143, lengthInches: "5⅝", vitola: "Grand Corona", status: "Current" as const, releaseYear: "2008", construction: "Handmade" },
  { brand: "Montecristo", name: "No. 2", factoryName: "Piramides", ringGauge: 52, lengthMm: 156, lengthInches: "6⅛", vitola: "Pyramid", status: "Current" as const, releaseYear: "1935", construction: "Handmade", notes: "Iconic pyramid" },
  { brand: "Partagás", name: "Serie D No. 4", factoryName: "Robustos", ringGauge: 50, lengthMm: 124, lengthInches: "4⅞", vitola: "Robusto", status: "Current" as const, releaseYear: "Pre-1960", construction: "Handmade", notes: "Most popular Partagás" },
  { brand: "Romeo y Julieta", name: "Churchill", factoryName: "Julieta No.2", ringGauge: 47, lengthMm: 178, lengthInches: "7", vitola: "Churchill", status: "Current" as const, releaseYear: "1940s", construction: "Handmade", notes: "Named after Winston Churchill" },
];

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
