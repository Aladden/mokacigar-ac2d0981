// MokaCigar Encyclopedia Home Page

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { HeroCarousel } from '@/components/HeroCarousel';
import { MokaBrandCard } from '@/components/MokaBrandCard';
import { MokaCigarCard } from '@/components/MokaCigarCard';
import { loadMokaCigarData, searchCigars } from '@/utils/mokaCigarLoader';
import { BrandGroup, ProcessedCigar } from '@/types/mokaCigar';

export default function MokaHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [brands, setBrands] = useState<BrandGroup[]>([]);
  const [totalCigars, setTotalCigars] = useState(0);
  const [totalBrands, setTotalBrands] = useState(0);
  const [searchResults, setSearchResults] = useState<ProcessedCigar[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    loadMokaCigarData().then(data => {
      setBrands(data.brands);
      setTotalCigars(data.totalCigars);
      setTotalBrands(data.totalBrands);
      setIsLoading(false);
    });
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.length > 0) {
      searchCigars(searchQuery).then(setSearchResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const showResults = searchQuery.length > 0;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="text-center">
          <div className="text-2xl" style={{ color: '#B79E59' }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Search Section */}
      <section className="py-12 px-4 border-b border-primary/20">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">
                {totalBrands}
              </div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                {totalCigars}
              </div>
              <div className="text-sm text-muted-foreground">Cigars</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" 
            />
            <Input
              type="text"
              placeholder="Search cigars, brands, or vitolas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card/50 border-primary/30 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {showResults ? (
            // Search Results
            <>
              <h2 className="font-heading text-3xl mb-8 text-primary">
                Search Results ({searchResults.length})
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((cigar) => (
                    <MokaCigarCard key={cigar.id} cigar={cigar} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    No results found for "{searchQuery}"
                  </p>
                </div>
              )}
            </>
          ) : (
            // Brand Grid
            <>
              <h2 className="font-heading text-4xl mb-8 text-primary">
                Cigar Brands
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brands.map((brand) => (
                  <MokaBrandCard key={brand.name} brand={brand} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
