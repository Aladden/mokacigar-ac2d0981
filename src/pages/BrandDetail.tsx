import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, Factory, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CigarCard } from '@/components/CigarCard';
import { enhancedBrands, enhancedCigars } from '@/data/enhancedCigarData';

export const BrandDetail = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = enhancedBrands.find(b => b.id === brandId);
  const cigars = enhancedCigars.filter(c => c.brand === brandId);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-heading">Brand Not Found</h1>
          <Link to="/">
            <Button variant="luxury">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Brands
            </Button>
          </Link>
        </div>

        {/* Brand Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Brand Logo */}
            <div className="lg:col-span-1">
              <div className="w-48 h-48 mx-auto lg:mx-0 bg-gradient-card rounded-full p-8 flex items-center justify-center border border-primary/20">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain filter brightness-110"
                  onError={(e) => {
                    e.currentTarget.src = '/api/placeholder/300/300';
                  }}
                />
              </div>
            </div>

            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-luxury mb-4">
                  {brand.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {brand.description}
                </p>
              </div>

              {/* Brand Details */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Badge variant="outline" className="flex items-center space-x-2 px-3 py-1">
                  <MapPin className="h-3 w-3" />
                  <span>Cuba</span>
                </Badge>
                {brand.founded && (
                  <Badge variant="outline" className="flex items-center space-x-2 px-3 py-1">
                    <Calendar className="h-3 w-3" />
                    <span>Est. {brand.founded}</span>
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center space-x-2 px-3 py-1">
                  <Award className="h-3 w-3" />
                  <span className="capitalize">{brand.status}</span>
                </Badge>
                <Badge variant="default" className="flex items-center space-x-2 px-3 py-1">
                  <Users className="h-3 w-3" />
                  <span>{cigars.length} {cigars.length === 1 ? 'Cigar' : 'Cigars'}</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Summary Cards */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Founded
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary-glow">{brand.founded || 'N/A'}</p>
              <p className="text-sm text-muted-foreground mt-1">Year established</p>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Factory className="h-5 w-5 mr-2 text-primary" />
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary-glow capitalize">{brand.status}</p>
              <p className="text-sm text-muted-foreground mt-1">Production status</p>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary-glow">{cigars.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Unique vitolas</p>
            </CardContent>
          </Card>
        </div>

        {/* Heritage Story */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center text-primary">Heritage Story</h2>
            <div className="glass p-8 rounded-2xl border border-primary/20">
              <p className="text-lg leading-relaxed">
                {brand.heritage}
              </p>
            </div>
          </div>
        </div>

        {/* Cigars Collection */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Our <span className="text-luxury">{brand.name}</span> Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the exceptional range of {brand.name} cigars, each crafted with 
              the finest tobacco and traditional techniques.
            </p>
          </div>

          {cigars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cigars.map((cigar, index) => (
                <div 
                  key={cigar.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CigarCard cigar={cigar} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No cigars available for this brand at the moment.
              </p>
              <Link to="/" className="mt-4 inline-block">
                <Button variant="luxury">Explore Other Brands</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};