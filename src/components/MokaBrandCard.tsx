// Brand Card for MokaCigar Encyclopedia

import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { BrandGroup } from '@/types/mokaCigar';
import { Button } from './ui/button';

interface MokaBrandCardProps {
  brand: BrandGroup;
  className?: string;
}

export function MokaBrandCard({ brand, className = '' }: MokaBrandCardProps) {
  const brandSlug = brand.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`group ${className}`}>
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
        <div className="flex items-center gap-4 text-sm mb-6">
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

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link to={`/brand/${brandSlug}`} className="flex-1">
            <Button
              className="w-full bg-transparent border text-[#B79E59] hover:bg-[#B79E59] hover:text-black transition-all"
              style={{ borderColor: '#B79E59' }}
            >
              View Collection
            </Button>
          </Link>
          
          {brand.pdfUrl && (
            <Button
              asChild
              className="bg-transparent border text-[#B79E59] hover:bg-[#B79E59] hover:text-black transition-all"
              style={{ borderColor: '#B79E59' }}
            >
              <a
                href={brand.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
