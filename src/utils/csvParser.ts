// Parse the complete Cuban cigars CSV into encyclopedia data
import csvData from '@/data/cuban_cigars_complete.csv?raw';

export interface CubanCigarCSVRow {
  Brand: string;
  'Cigar Name': string;
  'Factory Name': string;
  'Ring Gauge': string;
  'Length (mm)': string;
  'Length (inches)': string;
  'Vitola/Shape': string;
  Status: string;
  'Release Year': string;
  'Discontinued Year': string;
  Construction: string;
  Notes: string;
}

export function parseCSV(): CubanCigarCSVRow[] {
  const lines = csvData.split('\n').filter(line => line.trim());
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else current += char;
    }
    values.push(current.trim());
    
    const row: any = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx] || '';
    });
    return row as CubanCigarCSVRow;
  });
}

export function convertCSVToEncyclopediaData() {
  const rows = parseCSV();
  
  return rows
    .filter(row => row.Brand && row['Cigar Name'])
    .map(row => ({
      brand: row.Brand,
      name: row['Cigar Name'],
      factoryName: row['Factory Name'] || undefined,
      ringGauge: row['Ring Gauge'] ? parseFloat(row['Ring Gauge']) : undefined,
      lengthMm: row['Length (mm)'] ? parseFloat(row['Length (mm)']) : undefined,
      lengthInches: row['Length (inches)'] || undefined,
      vitola: row['Vitola/Shape'] || undefined,
      status: (row.Status === 'Current' || row.Status === 'Discontinued') ? row.Status as 'Current' | 'Discontinued' : undefined,
      releaseYear: row['Release Year'] || undefined,
      discontinuedYear: row['Discontinued Year'] || undefined,
      construction: row.Construction || undefined,
      notes: row.Notes || undefined,
    }));
}
