// Brand Card for MokaCigar Encyclopedia with Logo

import { Link } from 'react-router-dom';
import { ExternalLink, Award } from 'lucide-react';
import { BrandGroup } from '@/types/mokaCigar';
import { Button } from './ui/button';
import { BrandLogo } from './BrandLogo';
import { motion } from 'framer-motion';

interface MokaBrandCardProps {
  brand: BrandGroup;
  className?: string;
}

export function MokaBrandCard({ brand, className = '' }: MokaBrandCardProps) {
  const brandSlug = brand.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <motion.div 
      className={`group ${className}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(183,158,89,0.5)]"
        style={{
          backgroundColor: '#000000',
          border: '2px solid #B79E59',
        }}
      >
        {/* Logo Section */}
        <div className="relative h-40 flex items-center justify-center p-6 border-b border-[#B79E59]/30 bg-gradient-to-b from-black to-[#0a0a0a]">
          <BrandLogo brandName={brandSlug} size="lg" />
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B79E59] to-transparent" />
          </div>
        </div>

        <div className="p-8">
          {/* Brand Name with Icon */}
          <div className="flex items-center gap-3 mb-3">
            <h2 
              className="font-heading text-3xl transition-colors flex-1"
              style={{ color: '#B79E59' }}
            >
              {brand.name}
            </h2>
            <Award className="w-6 h-6 text-[#B79E59]/50" />
          </div>

          {/* Description */}
          <p className="text-sm mb-4 line-clamp-2" style={{ color: '#D4AF37' }}>
            {brand.description || 'Premium Cuban cigar collection'}
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

        {/* Bottom Gold Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B79E59] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
