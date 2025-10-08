// Brand histories extracted from Cuban Cigar Data Enrichment document

export interface BrandHistory {
  name: string;
  founded: string;
  heritage: string;
  description: string;
  signature: string;
  strength?: string;
}

export const brandHistories: Record<string, BrandHistory> = {
  "Cohiba": {
    name: "Cohiba",
    founded: "1966",
    heritage: "Created in 1966 as a diplomatic gift for Fidel Castro, Cohiba represents the pinnacle of Cuban cigar excellence. Originally reserved exclusively for Cuban government officials and foreign diplomats, it was first released commercially in 1982. The name comes from the Taíno word for tobacco.",
    description: "Cohiba is the flagship brand of Habanos S.A. and remains the most prestigious Cuban cigar brand worldwide. Known for its exceptional construction and unique triple fermentation process.",
    signature: "The legendary Cohiba uses the rare 'Medio Tiempo' leaf from the top of the tobacco plant in its premium Behike line, offering unmatched complexity and strength.",
    strength: "Medium to Full"
  },
  "Montecristo": {
    name: "Montecristo",
    founded: "1935",
    heritage: "Named after the protagonist of Alexandre Dumas' novel 'The Count of Monte Cristo,' which was traditionally read aloud to cigar rollers. Montecristo quickly became synonymous with premium Cuban cigars and remains one of the world's best-selling brands.",
    description: "Renowned for perfect construction, balanced flavor, and exceptional consistency. The No. 2 pyramid and No. 4 petit corona are among the most iconic cigars ever created.",
    signature: "Montecristo cigars are celebrated for their medium-bodied complexity with perfect balance between strength and flavor, featuring earthy, woody notes with hints of coffee and leather.",
    strength: "Medium"
  },
  "Partagás": {
    name: "Partagás",
    founded: "1845",
    heritage: "Founded by Don Jaime Partagás in 1845, this is one of Cuba's oldest and most respected brands. The original factory in downtown Havana, La Corona, still produces these legendary cigars using traditional methods.",
    description: "Famous for robust, full-bodied cigars with rich earthy flavors. The Serie D No. 4 is considered by many aficionados to be the benchmark robusto vitola.",
    signature: "Full-bodied strength with complex earth, leather, coffee, and spice notes. Known for exceptional aging potential.",
    strength: "Full"
  },
  "Romeo y Julieta": {
    name: "Romeo y Julieta",
    founded: "1875",
    heritage: "Established in 1875, Romeo y Julieta gained worldwide fame through its association with Winston Churchill, who was a devoted enthusiast. The Churchill vitola was named in his honor and remains one of the most famous cigar formats.",
    description: "Offers an extensive portfolio with over 40 vitolas. Known for medium-bodied, aromatic cigars with exceptional smoothness and elegance.",
    signature: "Refined, balanced profile with cedar, floral notes, and subtle sweetness. Perfect for both novices and experienced smokers.",
    strength: "Light to Medium"
  },
  "H. Upmann": {
    name: "H. Upmann",
    founded: "1844",
    heritage: "Founded by German banker Hermann Upmann in 1844, who used cigars as a calling card for his banking business. The brand quickly gained prestige among European aristocracy and remains a symbol of refined taste.",
    description: "Characterized by elegant, light to medium-bodied cigars with refined complexity. The Magnum series represents modern innovation while maintaining traditional excellence.",
    signature: "Smooth, refined smoke with floral, honey, and subtle wood notes. Exceptional morning or daytime cigar.",
    strength: "Light to Medium"
  },
  "Hoyo de Monterrey": {
    name: "Hoyo de Monterrey",
    founded: "1865",
    heritage: "Named after a famous tobacco plantation in Cuba's Vuelta Abajo region. The 'Hoyo' (hole or depression) refers to the valley where the finest tobacco was grown.",
    description: "Celebrated for aromatic, light to medium-bodied cigars with exceptional balance. The Epicure No. 2 is widely regarded as one of the finest robustos available.",
    signature: "Delicate yet complex profile with floral, herbal, and subtle spice notes. Ideal for refined palates.",
    strength: "Light to Medium"
  },
  "Bolívar": {
    name: "Bolívar",
    founded: "1901",
    heritage: "Named after the South American revolutionary leader Simón Bolívar. Established in 1901, the brand embodies strength and character, appealing to those who prefer powerful, full-bodied cigars.",
    description: "Known for producing some of Cuba's strongest cigars with intense flavor and complexity. The Belicosos Finos is a legendary pyramid format.",
    signature: "Full-bodied intensity with earth, leather, dark chocolate, and pepper notes. Not for the faint of heart.",
    strength: "Full"
  },
  "Cuaba": {
    name: "Cuaba",
    founded: "1996",
    heritage: "Launched in 1996 as Cuba's first brand exclusively dedicated to figurado shapes (torpedo, perfecto, pyramid). The name comes from a Taíno word for a flaming bush used to light cigars.",
    description: "Unique brand offering only traditional Cuban figurado formats. Each vitola showcases the exceptional skill of Cuban torcedores (cigar rollers).",
    signature: "Medium-bodied with complex flavor development due to varying ring gauges. Earthy, woody notes with hints of cocoa.",
    strength: "Medium"
  },
  "Diplomáticos": {
    name: "Diplomáticos",
    founded: "1966",
    heritage: "Created in 1966 for the French market, Diplomáticos offers excellent value while maintaining high quality standards. It shares the same factory and blend profile as Montecristo.",
    description: "Medium-bodied cigars with excellent construction and consistency. Popular among those seeking Montecristo-style quality at more accessible prices.",
    signature: "Smooth, balanced smoke with cedar, nuts, and subtle sweetness. Excellent introduction to Cuban cigars.",
    strength: "Medium"
  }
};

export function getBrandHistory(brandName: string): BrandHistory | undefined {
  return brandHistories[brandName];
}
