import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Ruler, Target, Wine, Coffee, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cigars, getBrandById } from '@/data/cigarData';

export const CigarDetail = () => {
  const { cigarId } = useParams<{ cigarId: string }>();
  const cigar = cigars.find(c => c.id === cigarId);
  const brand = cigar ? getBrandById(cigar.brand) : undefined;

  if (!cigar || !brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-heading">Cigar Not Found</h1>
          <Link to="/">
            <Button variant="luxury">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getFlavourColor = (flavour: string) => {
    switch (flavour) {
      case 'Light': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Light to Medium': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Medium to Full': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Full': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to={`/brand/${cigar.brand}`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {brand.name}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cigar Image */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-gradient-card rounded-2xl overflow-hidden border border-primary/20">
              <img 
                src={cigar.image} 
                alt={`${brand.name} ${cigar.name}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/api/placeholder/600/800';
                }}
              />
            </div>

            {/* Brand Logo */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-card rounded-full p-4 flex items-center justify-center border border-primary/20">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain filter brightness-110"
                  onError={(e) => {
                    e.currentTarget.src = '/api/placeholder/150/150';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Cigar Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-primary font-medium uppercase tracking-wider">
                {brand.name}
              </p>
              <h1 className="text-4xl font-heading font-bold text-luxury">
                {cigar.name}
              </h1>
              <Badge variant="outline" className="text-sm border-primary/30">
                {cigar.vitola}
              </Badge>
            </div>

            {/* Specifications */}
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center space-y-2">
                    <Ruler className="h-6 w-6 mx-auto text-primary" />
                    <div className="text-2xl font-bold text-primary">{cigar.length}mm</div>
                    <div className="text-sm text-muted-foreground">Length</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Target className="h-6 w-6 mx-auto text-primary" />
                    <div className="text-2xl font-bold text-primary">{cigar.ringGauge}</div>
                    <div className="text-sm text-muted-foreground">Ring Gauge</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Clock className="h-6 w-6 mx-auto text-primary" />
                    <div className="text-sm font-medium text-primary text-center">
                      {cigar.smokingTime}
                    </div>
                    <div className="text-sm text-muted-foreground">Smoking Time</div>
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <div className="flex justify-center">
                    <Badge 
                      variant="outline" 
                      className={`text-lg px-4 py-2 ${getFlavourColor(cigar.flavourProfile)}`}
                    >
                      <Star className="mr-2 h-4 w-4" />
                      {cigar.flavourProfile}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  {cigar.description}
                </p>
              </CardContent>
            </Card>

            {/* Heritage Story */}
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Heritage Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  {cigar.heritage}
                </p>
              </CardContent>
            </Card>

            {/* Pairings */}
            {(cigar.pairings.spirits || cigar.pairings.wine || cigar.pairings.coffee || cigar.pairings.cocktails) && (
              <Card className="glass border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Perfect Pairings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cigar.pairings.spirits && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Wine className="mr-2 h-4 w-4" />
                        Spirits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cigar.pairings.spirits.map((spirit, index) => (
                          <Badge key={index} variant="secondary">
                            {spirit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {cigar.pairings.wine && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Wine className="mr-2 h-4 w-4" />
                        Wine & Beer
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cigar.pairings.wine.map((wine, index) => (
                          <Badge key={index} variant="secondary">
                            {wine}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {cigar.pairings.cocktails && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Wine className="mr-2 h-4 w-4" />
                        Cocktails
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cigar.pairings.cocktails.map((cocktail, index) => (
                          <Badge key={index} variant="secondary">
                            {cocktail}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {cigar.pairings.coffee && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Coffee className="mr-2 h-4 w-4" />
                        Coffee & Tea
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cigar.pairings.coffee.map((beverage, index) => (
                          <Badge key={index} variant="secondary">
                            {beverage}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};