// MokaCigar Card Component with carousel support and detail modal

import { ExternalLink, Award, Calendar, Info } from 'lucide-react';
import { ProcessedCigar } from '@/types/mokaCigar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { CigarDetailModal } from './CigarDetailModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images/cigars';

// Generate fallback image URLs with different variations
const generateImageFallbacks = (cigarName: string): string[] => {
  const normalized = cigarName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  return [
    `${GITHUB_BASE_URL}/${normalized}.jpg`,
    `${GITHUB_BASE_URL}/${normalized}.jpeg`,
    `${GITHUB_BASE_URL}/${cigarName.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    `${GITHUB_BASE_URL}/${cigarName.toLowerCase().replace(/\s+/g, '-')}.jpeg`,
  ];
};

interface MokaCigarCardProps {
  cigar: ProcessedCigar;
  className?: string;
}

export function MokaCigarCard({ cigar, className = '' }: MokaCigarCardProps) {
  const [imageErrors, setImageErrors] = useState<Map<number, number>>(new Map());
  const [showDetailModal, setShowDetailModal] = useState(false);
  const hasMultipleImages = cigar.imageUrls.length > 1;

  const handleImageError = (idx: number, currentUrl: string) => {
    const currentAttempt = imageErrors.get(idx) || 0;
    const fallbacks = generateImageFallbacks(cigar.name);
    
    // Try fallbacks if we haven't exhausted them
    if (currentAttempt < fallbacks.length) {
      setImageErrors(new Map(imageErrors).set(idx, currentAttempt + 1));
      return fallbacks[currentAttempt];
    }
    
    return '/placeholder.svg';
  };

  const getImageUrl = (originalUrl: string, idx: number): string => {
    const attempt = imageErrors.get(idx) || 0;
    if (attempt > 0) {
      const fallbacks = generateImageFallbacks(cigar.name);
      return fallbacks[attempt - 1] || originalUrl;
    }
    return originalUrl;
  };

  return (
    <div
      className={`group relative rounded-xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        background: 'linear-gradient(145deg, hsl(0 0% 8%), hsl(0 0% 12%))',
        border: '1px solid hsl(45 100% 65% / 0.2)',
      }}
    >
      {/* Image Section */}
      <div className="relative h-64 bg-black">
        {hasMultipleImages ? (
          <Carousel className="w-full h-full">
            <CarouselContent>
              {cigar.imageUrls.map((url, idx) => (
                <CarouselItem key={idx}>
                  <img
                    src={getImageUrl(url, idx)}
                    alt={`${cigar.name} - Image ${idx + 1}`}
                    className="w-full h-64 object-contain"
                    onError={(e) => {
                      const newUrl = handleImageError(idx, e.currentTarget.src);
                      e.currentTarget.src = newUrl;
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/80 border-[#B79E59] text-[#B79E59] hover:bg-[#B79E59] hover:text-black" />
            <CarouselNext className="right-2 bg-black/80 border-[#B79E59] text-[#B79E59] hover:bg-[#B79E59] hover:text-black" />
          </Carousel>
        ) : (
          <img
            src={getImageUrl(cigar.imageUrls[0] || '/placeholder.svg', 0)}
            alt={cigar.name}
            className="w-full h-64 object-contain"
            onError={(e) => {
              const newUrl = handleImageError(0, e.currentTarget.src);
              e.currentTarget.src = newUrl;
            }}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header with Status Badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 
            className="font-heading text-xl transition-colors flex-1"
            style={{ color: '#B79E59' }}
          >
            {cigar.name}
          </h3>
          {cigar.status && (
            <Badge 
              variant={cigar.status === 'Current' ? 'default' : 'secondary'}
              className="shrink-0"
            >
              {cigar.status}
            </Badge>
          )}
        </div>

        {/* Factory Name & Vitola */}
        {(cigar.factoryName || cigar.vitola) && (
          <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: '#D4AF37' }}>
            {cigar.factoryName && (
              <span className="flex items-center gap-1">
                <Award size={14} />
                {cigar.factoryName}
              </span>
            )}
            {cigar.vitola && cigar.factoryName && <span>•</span>}
            {cigar.vitola && <span>{cigar.vitola}</span>}
          </div>
        )}

        {/* Release Year */}
        {cigar.releaseYear && (
          <div className="flex items-center gap-1 mb-3 text-xs" style={{ color: '#B79E59' }}>
            <Calendar size={14} />
            <span>Released: {cigar.releaseYear}</span>
          </div>
        )}

        <p className="text-sm mb-4" style={{ color: '#D4AF37' }}>
          {cigar.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          {/* Length */}
          {cigar.lengthMm && (
            <div>
              <span className="text-gray-400">Length:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.lengthInches}" ({cigar.lengthMm}mm)
              </span>
            </div>
          )}
          
          {/* Ring Gauge - prefer encyclopedia data */}
          {cigar.ringGauge && (
            <div>
              <span className="text-gray-400">Ring Gauge:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.ringGauge}
              </span>
            </div>
          )}

          {/* Intensity */}
          <div>
            <span className="text-gray-400">Intensity:</span>
            <span className="ml-2" style={{ color: '#B79E59' }}>
              {cigar.intensity}
            </span>
          </div>

          {/* Construction */}
          {cigar.construction && (
            <div>
              <span className="text-gray-400">Construction:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.construction}
              </span>
            </div>
          )}

          {/* Enjoyment Time */}
          {cigar.enjoymentTime && (
            <div>
              <span className="text-gray-400">Time:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.enjoymentTime}
              </span>
            </div>
          )}

          {/* Shape Format (fallback if no vitola) */}
          {cigar.shapeFormat && !cigar.vitola && (
            <div>
              <span className="text-gray-400">Shape:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.shapeFormat}
              </span>
            </div>
          )}
        </div>

        {/* Notes Section */}
        {cigar.notes && (
          <div className="mb-4 p-3 rounded border border-[#B79E59]/20 bg-[#B79E59]/5">
            <p className="text-xs" style={{ color: '#D4AF37' }}>
              <span className="font-semibold" style={{ color: '#B79E59' }}>Notes: </span>
              {cigar.notes}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => setShowDetailModal(true)}
            className="flex-1 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition-all"
          >
            <Info className="w-4 h-4 mr-2" />
            Details
          </Button>
          {cigar.pdfUrl && (
            <Button
              asChild
              variant="outline"
              className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
            >
              <a
                href={cigar.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <CigarDetailModal 
        cigar={cigar}
        open={showDetailModal}
        onOpenChange={setShowDetailModal}
      />
    </div>
  );
}
