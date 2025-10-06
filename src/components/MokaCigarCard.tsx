// MokaCigar Card Component with carousel support

import { ExternalLink } from 'lucide-react';
import { ProcessedCigar } from '@/types/mokaCigar';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface MokaCigarCardProps {
  cigar: ProcessedCigar;
  className?: string;
}

export function MokaCigarCard({ cigar, className = '' }: MokaCigarCardProps) {
  const hasMultipleImages = cigar.imageUrls.length > 1;

  return (
    <div
      className={`group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(183,158,89,0.4)] ${className}`}
      style={{
        backgroundColor: cigar.backgroundColor,
        border: `1px solid ${cigar.borderColor}`,
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
                    src={url}
                    alt={`${cigar.name} - Image ${idx + 1}`}
                    className="w-full h-64 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
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
            src={cigar.imageUrls[0] || '/placeholder.svg'}
            alt={cigar.name}
            className="w-full h-64 object-contain"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 
          className="font-heading text-xl mb-2 transition-colors"
          style={{ color: '#B79E59' }}
        >
          {cigar.name}
        </h3>

        <p className="text-sm mb-4" style={{ color: '#D4AF37' }}>
          {cigar.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          {cigar.shapeFormat && (
            <div>
              <span className="text-gray-400">Vitola:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.shapeFormat}
              </span>
            </div>
          )}
          
          <div>
            <span className="text-gray-400">Intensity:</span>
            <span className="ml-2" style={{ color: '#B79E59' }}>
              {cigar.intensity}
            </span>
          </div>

          {cigar.ringGauge && (
            <div>
              <span className="text-gray-400">Ring Gauge:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.ringGauge}
              </span>
            </div>
          )}

          {cigar.enjoymentTime && (
            <div>
              <span className="text-gray-400">Time:</span>
              <span className="ml-2" style={{ color: '#B79E59' }}>
                {cigar.enjoymentTime}
              </span>
            </div>
          )}
        </div>

        {/* Read More Button */}
        {cigar.pdfUrl && (
          <Button
            asChild
            className="w-full bg-transparent border text-[#B79E59] hover:bg-[#B79E59] hover:text-black transition-all"
            style={{ borderColor: '#B79E59' }}
          >
            <a
              href={cigar.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Read More</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
