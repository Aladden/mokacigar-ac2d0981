import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CigarCard } from '@/components/CigarCard';
import { BrandCard } from '@/components/BrandCard';
import { cigars, brands, searchCigars, filterCigars } from '@/data/cigarData';

export const SearchPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    flavourProfile: '',
    length: '',
    ringGauge: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState(cigars);

  // Get search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query: string = searchQuery) => {
    if (!query.trim()) {
      setResults(cigars);
      return;
    }

    const searchResults = searchCigars(query);
    const filteredResults = applyFilters(searchResults);
    setResults(filteredResults);
  };

  const applyFilters = (cigarList = results) => {
    return filterCigars({
      ...filters,
      brand: filters.brand || undefined,
      flavourProfile: filters.flavourProfile || undefined,
    }).filter(cigar => 
      !searchQuery.trim() || 
      cigarList.some(result => result.id === cigar.id)
    );
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    const baseResults = searchQuery.trim() ? searchCigars(searchQuery) : cigars;
    const filteredResults = filterCigars({
      ...newFilters,
      brand: newFilters.brand || undefined,
      flavourProfile: newFilters.flavourProfile || undefined,
    });
    
    setResults(searchQuery.trim() 
      ? filteredResults.filter(cigar => baseResults.some(result => result.id === cigar.id))
      : filteredResults
    );
  };

  const clearFilters = () => {
    setFilters({
      brand: '',
      flavourProfile: '',
      length: '',
      ringGauge: '',
    });
    performSearch();
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8 space-y-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-4">
              Discover Your Perfect <span className="text-luxury">Cigar</span>
            </h1>
            <p className="text-muted-foreground">
              Search through our curated collection of premium cigars
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search cigars, brands, flavours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && performSearch()}
                className="pl-12 h-12 glass border-primary/30 focus:border-primary"
              />
            </div>
            <Button 
              onClick={() => performSearch()}
              variant="luxury" 
              size="lg"
              className="px-8"
            >
              Search
            </Button>
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline" 
              size="lg"
              className="relative"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-8 p-6 glass border border-primary/20 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold">Filters</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Brand</label>
                <Select value={filters.brand} onValueChange={(value) => handleFilterChange('brand', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Brands</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Flavour Profile</label>
                <Select value={filters.flavourProfile} onValueChange={(value) => handleFilterChange('flavourProfile', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Flavours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Flavours</SelectItem>
                    <SelectItem value="Light">Light</SelectItem>
                    <SelectItem value="Light to Medium">Light to Medium</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Medium to Full">Medium to Full</SelectItem>
                    <SelectItem value="Full">Full</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Length</label>
                <Select value={filters.length} onValueChange={(value) => handleFilterChange('length', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Lengths" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Lengths</SelectItem>
                    <SelectItem value="short">Short (≤120mm)</SelectItem>
                    <SelectItem value="medium">Medium (121-140mm)</SelectItem>
                    <SelectItem value="long">Long (≥141mm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ring Gauge</label>
                <Select value={filters.ringGauge} onValueChange={(value) => handleFilterChange('ringGauge', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Sizes</SelectItem>
                    <SelectItem value="thin">Thin (≤42)</SelectItem>
                    <SelectItem value="medium">Medium (43-50)</SelectItem>
                    <SelectItem value="thick">Thick (≥51)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-heading font-semibold">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Cigars'}
            </h2>
            <p className="text-muted-foreground">
              {results.length} {results.length === 1 ? 'cigar' : 'cigars'} found
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {results.map((cigar, index) => (
                <div 
                  key={cigar.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CigarCard cigar={cigar} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <div className="text-6xl">🔍</div>
              <h3 className="text-xl font-heading">No cigars found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={clearFilters} variant="luxury">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};