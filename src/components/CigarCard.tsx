import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Ruler, Target } from 'lucide-react';
import { Cigar, getBrandById } from '@/data/cigarData';
import { cn } from '@/lib/utils';

interface CigarCardProps {
  cigar: Cigar;
  className?: string;
}

export const CigarCard = ({ cigar, className }: CigarCardProps) => {
  const brand = getBrandById(cigar.brand);

  const getFlavourColor = (flavour: string) => {
    switch (flavour) {
      case 'Light': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Medium to Full': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Full': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <Link to={`/cigar/${cigar.id}`}>
      <Card className={cn(
        "group cursor-pointer hover-lift glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full",
        className
      )}>
        <CardHeader className="pb-3">
          <div className="aspect-[3/4] bg-gradient-card rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors">
            <img 
              src={cigar.image} 
              alt={`${brand?.name} ${cigar.name}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/400/600';
              }}
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Brand & Name */}
          <div>
            <p className="text-xs text-primary font-medium uppercase tracking-wider">
              {brand?.name}
            </p>
            <h3 className="font-heading text-lg font-semibold group-hover:text-primary-glow transition-colors">
              {cigar.name}
            </h3>
          </div>

          {/* Vitola */}
          <Badge variant="outline" className="text-xs border-primary/30">
            {cigar.vitola}
          </Badge>

          {/* Specifications */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Ruler className="h-3 w-3" />
              <span>{cigar.length}mm</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Target className="h-3 w-3" />
              <span>RG {cigar.ringGauge}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="truncate">{cigar.smokingTime}</span>
            </div>
          </div>

          {/* Flavour Profile */}
          <Badge 
            variant="outline" 
            className={cn("text-xs", getFlavourColor(cigar.flavourProfile))}
          >
            {cigar.flavourProfile}
          </Badge>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {cigar.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};