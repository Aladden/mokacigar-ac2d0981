import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdvancedSearch } from '@/components/search/AdvancedSearch';
import { BrandCard } from '@/components/BrandCard';
import { CigarCard } from '@/components/CigarCard';
import { CigarFilters, SearchResult } from '@/types/cigar';
import { enhancedBrands, enhancedCigars, specialReleases } from '@/data/enhancedCigarData';
import { 
  BookOpen, 
  Calendar, 
  Factory, 
  MapPin, 
  Star, 
  Filter,
  Grid3X3,
  List,
  Search
} from 'lucide-react';

export const Encyclopedia = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState<CigarFilters>({});
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [filteredCigars, setFilteredCigars] = useState(enhancedCigars);
  const [filteredBrands, setFilteredBrands] = useState(enhancedBrands);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleFiltersChange = (newFilters: CigarFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleSearch = (query: string, searchFilters: CigarFilters) => {
    // Implement comprehensive search logic
    const results: SearchResult[] = [];
    
    // Search brands
    enhancedBrands.forEach(brand => {
      if (brand.name.toLowerCase().includes(query.toLowerCase()) ||
          brand.description.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          type: 'brand',
          id: brand.id,
          name: brand.name,
          description: brand.description,
          image: brand.logo,
          relevance: brand.name.toLowerCase().includes(query.toLowerCase()) ? 2 : 1
        });
      }
    });

    // Search cigars
    enhancedCigars.forEach(cigar => {
      if (cigar.name.toLowerCase().includes(query.toLowerCase()) ||
          cigar.vitola.toLowerCase().includes(query.toLowerCase()) ||
          cigar.description.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          type: 'cigar',
          id: cigar.id,
          name: cigar.name,
          description: cigar.description,
          image: cigar.image,
          relevance: cigar.name.toLowerCase().includes(query.toLowerCase()) ? 2 : 1
        });
      }
    });

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);
    setSearchResults(results);
    applyFilters(searchFilters);
  };

  const applyFilters = (filterOptions: CigarFilters) => {
    let filteredCigarResults = enhancedCigars;
    let filteredBrandResults = enhancedBrands;

    // Apply brand status filter
    if (filterOptions.status) {
      filteredBrandResults = filteredBrandResults.filter(brand => brand.status === filterOptions.status);
      const brandIds = filteredBrandResults.map(brand => brand.id);
      filteredCigarResults = filteredCigarResults.filter(cigar => brandIds.includes(cigar.brand));
    }

    // Apply strength filter
    if (filterOptions.strength) {
      filteredCigarResults = filteredCigarResults.filter(cigar => cigar.strength === filterOptions.strength);
    }

    // Apply flavor profile filter
    if (filterOptions.flavourProfile) {
      filteredCigarResults = filteredCigarResults.filter(cigar => cigar.flavourProfile === filterOptions.flavourProfile);
    }

    // Apply production status filter
    if (filterOptions.productionStatus) {
      filteredCigarResults = filteredCigarResults.filter(cigar => cigar.productionStatus === filterOptions.productionStatus);
    }

    // Apply release type filter
    if (filterOptions.releaseType) {
      filteredCigarResults = filteredCigarResults.filter(cigar => cigar.releaseType === filterOptions.releaseType);
    }

    // Apply size filters
    if (filterOptions.ringGauge) {
      if (filterOptions.ringGauge.min) {
        filteredCigarResults = filteredCigarResults.filter(cigar => cigar.ringGauge >= filterOptions.ringGauge!.min!);
      }
      if (filterOptions.ringGauge.max) {
        filteredCigarResults = filteredCigarResults.filter(cigar => cigar.ringGauge <= filterOptions.ringGauge!.max!);
      }
    }

    if (filterOptions.length) {
      if (filterOptions.length.min) {
        filteredCigarResults = filteredCigarResults.filter(cigar => cigar.length >= filterOptions.length!.min!);
      }
      if (filterOptions.length.max) {
        filteredCigarResults = filteredCigarResults.filter(cigar => cigar.length <= filterOptions.length!.max!);
      }
    }

    // Apply launch year filter
    if (filterOptions.launchYear) {
      if (filterOptions.launchYear.min) {
        filteredCigarResults = filteredCigarResults.filter(cigar => 
          cigar.launchYear && cigar.launchYear >= filterOptions.launchYear!.min!
        );
      }
      if (filterOptions.launchYear.max) {
        filteredCigarResults = filteredCigarResults.filter(cigar => 
          cigar.launchYear && cigar.launchYear <= filterOptions.launchYear!.max!
        );
      }
    }

    setFilteredCigars(filteredCigarResults);
    setFilteredBrands(filteredBrandResults);
  };

  const getFilterSummary = () => {
    const activeFilters = Object.keys(filters).length;
    const totalResults = filteredCigars.length + filteredBrands.length;
    return {
      activeFilters,
      totalResults,
      cigars: filteredCigars.length,
      brands: filteredBrands.length
    };
  };

  const summary = getFilterSummary();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            The Ultimate
            <span className="block text-primary-glow">Cuban Cigar Encyclopedia</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the complete collection of Cuban cigars, from legendary global brands to 
            rare limited editions. Discover the heritage, craftsmanship, and stories behind 
            every cigar ever produced in Cuba.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Badge variant="secondary" className="text-sm">
              {enhancedBrands.length} Brands
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {enhancedCigars.length} Cigars
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {specialReleases.length} Special Releases
            </Badge>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-6 -mt-8">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 glass border-primary/20 bg-background/50">
              <TabsTrigger value="overview">
                <BookOpen className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="search">
                <Search className="h-4 w-4 mr-2" />
                Search
              </TabsTrigger>
              <TabsTrigger value="brands">
                <Star className="h-4 w-4 mr-2" />
                Brands
              </TabsTrigger>
              <TabsTrigger value="cigars">
                <Grid3X3 className="h-4 w-4 mr-2" />
                Cigars
              </TabsTrigger>
              <TabsTrigger value="releases">
                <Calendar className="h-4 w-4 mr-2" />
                Releases
              </TabsTrigger>
              <TabsTrigger value="heritage">
                <MapPin className="h-4 w-4 mr-2" />
                Heritage
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-primary">Global Brands</h3>
                    <p className="text-2xl font-bold text-primary-glow mt-2">
                      {enhancedBrands.filter(b => b.status === 'global').length}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Premium worldwide</p>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-primary">Active Cigars</h3>
                    <p className="text-2xl font-bold text-primary-glow mt-2">
                      {enhancedCigars.filter(c => c.productionStatus === 'current').length}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">In production</p>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-primary">Limited Editions</h3>
                    <p className="text-2xl font-bold text-primary-glow mt-2">
                      {enhancedCigars.filter(c => c.isLimited).length}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Rare releases</p>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-primary">Heritage Years</h3>
                    <p className="text-2xl font-bold text-primary-glow mt-2">180+</p>
                    <p className="text-sm text-muted-foreground mt-1">Of tradition</p>
                  </CardContent>
                </Card>
              </div>

              {/* Featured Brands Preview */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-6">
                  Featured Global Brands
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enhancedBrands.filter(b => b.status === 'global').slice(0, 6).map((brand) => (
                    <BrandCard key={brand.id} brand={brand} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Advanced Search Tab */}
            <TabsContent value="search" className="mt-8">
              <AdvancedSearch 
                onFiltersChange={handleFiltersChange}
                onSearch={handleSearch}
                currentFilters={filters}
              />
              
              {/* Search Results */}
              {(summary.activeFilters > 0 || searchResults.length > 0) && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-heading text-2xl font-semibold text-primary">
                        Search Results
                      </h2>
                      <p className="text-muted-foreground">
                        {summary.totalResults} results found 
                        {summary.activeFilters > 0 && ` with ${summary.activeFilters} filters applied`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Brands Results */}
                  {filteredBrands.length > 0 && (
                    <div className="mb-8">
                      <h3 className="font-semibold text-lg text-primary mb-4">
                        Brands ({filteredBrands.length})
                      </h3>
                      <div className={viewMode === 'grid' 
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                      }>
                        {filteredBrands.map((brand) => (
                          <BrandCard key={brand.id} brand={brand} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cigars Results */}
                  {filteredCigars.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-4">
                        Cigars ({filteredCigars.length})
                      </h3>
                      <div className={viewMode === 'grid' 
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                      }>
                        {filteredCigars.map((cigar) => (
                          <CigarCard key={cigar.id} cigar={cigar} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>

            {/* Other tabs will be implemented in subsequent phases */}
            <TabsContent value="brands" className="mt-8">
              <div className="text-center py-16">
                <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                  Brands Section Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  Complete brand directory with detailed brand pages and heritage stories.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="cigars" className="mt-8">
              <div className="text-center py-16">
                <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                  Cigars Section Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  Comprehensive cigar database with detailed specifications and reviews.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="releases" className="mt-8">
              <div className="text-center py-16">
                <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                  Special Releases Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  Complete catalog of limited editions, regional releases, and special events.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="heritage" className="mt-8">
              <div className="text-center py-16">
                <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                  Heritage Section Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  Explore tobacco regions, factories, historical events, and Cuban cigar culture.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};
