import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BrandCard } from '@/components/BrandCard';
import { brands, searchCigars } from '@/data/cigarData';
import { MokaLogo } from '@/components/MokaLogo';
import heroImage from '@/assets/hero-cigars.jpg';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            {/* Logo */}
            <div className="flex justify-center">
              <MokaLogo size="xl" className="animate-glow" />
            </div>

            {/* Hero Text */}
            <div className="space-y-4">
              <h1 className="text-hero font-heading text-luxury">
                Heritage. Ritual. Refinement.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the world's finest cigars through our luxury encyclopedia. 
                Explore premium Cuban cigars, heritage stories, and perfect pairings.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search cigars, brands, flavours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-32 h-14 text-lg glass border-primary/30 focus:border-primary"
                />
                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg"
                  className="absolute right-2 top-2"
                >
                  Search <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">{brands.length}</div>
                <div className="text-sm text-muted-foreground">Premium Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Curated Cigars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Stories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Featured Collection</span>
            </div>
            <h2 className="text-4xl font-heading font-bold">
              Prestigious <span className="text-luxury">Cuban Brands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of the world's most prestigious cigar brands, 
              each with their own unique heritage and character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={brand.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/brands">
              <Button variant="hero" size="lg">
                Explore All Brands <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center glass border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Advanced Search</h3>
                <p className="text-muted-foreground">
                  Find your perfect cigar with our sophisticated filtering system.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Heritage Stories</h3>
                <p className="text-muted-foreground">
                  Discover the rich history and cultural significance behind each cigar.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <ArrowRight className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Perfect Pairings</h3>
                <p className="text-muted-foreground">
                  Expert recommendations for spirits, wines, and accompaniments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};