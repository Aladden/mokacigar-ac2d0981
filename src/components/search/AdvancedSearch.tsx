import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CigarFilters } from '@/types/cigar';
import { Search, Filter, X } from 'lucide-react';

interface AdvancedSearchProps {
  onFiltersChange: (filters: CigarFilters) => void;
  onSearch: (query: string, filters: CigarFilters) => void;
  currentFilters: CigarFilters;
}

export const AdvancedSearch = ({ onFiltersChange, onSearch, currentFilters }: AdvancedSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<CigarFilters>(currentFilters);

  const handleFilterChange = (key: keyof CigarFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleSearch = () => {
    onSearch(searchQuery, filters);
  };

  const clearFilters = () => {
    const emptyFilters: CigarFilters = {};
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const getActiveFiltersCount = () => {
    return Object.keys(filters).length;
  };

  return (
    <Card className="glass border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-primary">
          <div className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Advanced Cigar Search</span>
          </div>
          {getActiveFiltersCount() > 0 && (
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {getActiveFiltersCount()} active filters
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search Query */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Terms</Label>
          <div className="flex space-x-2">
            <Input
              id="search"
              placeholder="Search cigars, brands, vitolas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch} className="px-6">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <Separator className="bg-primary/20" />

        {/* Brand Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Brand Status</Label>
            <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any status</SelectItem>
                <SelectItem value="global">Global Brands</SelectItem>
                <SelectItem value="portfolio">Portfolio Brands</SelectItem>
                <SelectItem value="regional">Regional Brands</SelectItem>
                <SelectItem value="discontinued">Discontinued</SelectItem>
                <SelectItem value="limited">Limited Editions</SelectItem>
                <SelectItem value="pre-revolution">Pre-Revolution</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Release Type</Label>
            <Select value={filters.releaseType} onValueChange={(value) => handleFilterChange('releaseType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any release type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any release type</SelectItem>
                <SelectItem value="standard">Standard Production</SelectItem>
                <SelectItem value="limited_edition">Limited Edition</SelectItem>
                <SelectItem value="regional_edition">Regional Edition</SelectItem>
                <SelectItem value="reserva">Reserva</SelectItem>
                <SelectItem value="gran_reserva">Gran Reserva</SelectItem>
                <SelectItem value="anejados">Añejados</SelectItem>
                <SelectItem value="festival">Festival Releases</SelectItem>
                <SelectItem value="anniversary">Anniversary</SelectItem>
                <SelectItem value="lcdh">LCDH Exclusive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Production Status</Label>
            <Select value={filters.productionStatus} onValueChange={(value) => handleFilterChange('productionStatus', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any status</SelectItem>
                <SelectItem value="current">Current Production</SelectItem>
                <SelectItem value="discontinued">Discontinued</SelectItem>
                <SelectItem value="limited">Limited Availability</SelectItem>
                <SelectItem value="special">Special Releases</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="bg-primary/20" />

        {/* Flavor & Strength */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Strength</Label>
            <Select value={filters.strength} onValueChange={(value) => handleFilterChange('strength', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any strength" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any strength</SelectItem>
                <SelectItem value="Light">Light</SelectItem>
                <SelectItem value="Light to Medium">Light to Medium</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Medium to Full">Medium to Full</SelectItem>
                <SelectItem value="Full">Full</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Flavor Profile</Label>
            <Select value={filters.flavourProfile} onValueChange={(value) => handleFilterChange('flavourProfile', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any flavor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any flavor</SelectItem>
                <SelectItem value="Light">Light</SelectItem>
                <SelectItem value="Light to Medium">Light to Medium</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Medium to Full">Medium to Full</SelectItem>
                <SelectItem value="Full">Full</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="bg-primary/20" />

        {/* Size Filters */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Size Specifications</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Ring Gauge Range</Label>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={filters.ringGauge?.min || ''}
                  onChange={(e) => handleFilterChange('ringGauge', { 
                    ...filters.ringGauge, 
                    min: e.target.value ? parseInt(e.target.value) : undefined 
                  })}
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={filters.ringGauge?.max || ''}
                  onChange={(e) => handleFilterChange('ringGauge', { 
                    ...filters.ringGauge, 
                    max: e.target.value ? parseInt(e.target.value) : undefined 
                  })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Length Range (mm)</Label>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={filters.length?.min || ''}
                  onChange={(e) => handleFilterChange('length', { 
                    ...filters.length, 
                    min: e.target.value ? parseInt(e.target.value) : undefined 
                  })}
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={filters.length?.max || ''}
                  onChange={(e) => handleFilterChange('length', { 
                    ...filters.length, 
                    max: e.target.value ? parseInt(e.target.value) : undefined 
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/20" />

        {/* Launch Year */}
        <div className="space-y-2">
          <Label>Launch Year Range</Label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="From year"
              value={filters.launchYear?.min || ''}
              onChange={(e) => handleFilterChange('launchYear', { 
                ...filters.launchYear, 
                min: e.target.value ? parseInt(e.target.value) : undefined 
              })}
            />
            <Input
              type="number"
              placeholder="To year"
              value={filters.launchYear?.max || ''}
              onChange={(e) => handleFilterChange('launchYear', { 
                ...filters.launchYear, 
                max: e.target.value ? parseInt(e.target.value) : undefined 
              })}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={clearFilters}
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All Filters
          </Button>
          
          <Button onClick={handleSearch} className="bg-primary hover:bg-primary-glow">
            <Filter className="h-4 w-4 mr-2" />
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};