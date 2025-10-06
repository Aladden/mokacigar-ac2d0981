// Brand Card for MokaCigar Encyclopedia

import { Link } from 'react-router-dom';
import { BrandGroup } from '@/types/mokaCigar';

interface MokaBrandCardProps {
  brand: BrandGroup;
  className?: string;
}

export function MokaBrandCard({ brand, className = '' }: MokaBrandCardProps) {
  const brandSlug = brand.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link
      to={`/brand/${brandSlug}`}
      className={`block group ${className}`}
    >
      <div
        className="relative rounded-lg p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(183,158,89,0.4)]"
        style={{
          backgroundColor: '#000000',
          border: '2px solid #B79E59',
        }}
      >
        {/* Brand Name */}
        <h2 
          className="font-heading text-3xl mb-3 transition-colors"
          style={{ color: '#B79E59' }}
        >
          {brand.name}
        </h2>

        {/* Description */}
        <p className="text-sm mb-4" style={{ color: '#D4AF37' }}>
          {brand.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm">
          <div>
            <span className="text-gray-400">Cigars:</span>
            <span className="ml-2 font-semibold" style={{ color: '#B79E59' }}>
              {brand.cigarCount}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Region:</span>
            <span className="ml-2" style={{ color: '#B79E59' }}>
              Cuba
            </span>
          </div>
        </div>

        {/* Hover indicator */}
        <div 
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm"
          style={{ color: '#B79E59' }}
        >
          View Collection →
        </div>
      </div>
    </Link>
  );
}
