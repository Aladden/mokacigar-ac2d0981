import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CigarBrand, getCigarsByBrand } from '@/data/cigarData';
import { cn } from '@/lib/utils';

interface BrandCardProps {
  brand: CigarBrand;
  className?: string;
}

export const BrandCard = ({ brand, className }: BrandCardProps) => {
  const cigarCount = getCigarsByBrand(brand.id).length;

  return (
    <Link to={`/brand/${brand.id}`}>
      <Card className={cn(
        "group cursor-pointer hover-lift glass border-primary/20 hover:border-primary/40 transition-all duration-300",
        className
      )}>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Brand Logo */}
            <div className="w-24 h-24 rounded-full bg-gradient-card p-4 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                className="w-full h-full object-contain filter brightness-110"
                onError={(e) => {
                  e.currentTarget.src = '/api/placeholder/150/150';
                }}
              />
            </div>

            {/* Brand Info */}
            <div className="space-y-2">
              <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors">
                {brand.name}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {brand.description}
              </p>

              <div className="flex items-center justify-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  {brand.country}
                </Badge>
                {brand.founded && (
                  <Badge variant="outline" className="text-xs">
                    Est. {brand.founded}
                  </Badge>
                )}
              </div>

              <div className="pt-2">
                <Badge variant="default" className="text-xs bg-primary/20 text-primary border-primary/30">
                  {cigarCount} {cigarCount === 1 ? 'Cigar' : 'Cigars'}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};