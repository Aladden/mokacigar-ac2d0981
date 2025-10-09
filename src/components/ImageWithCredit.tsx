// Image component with automatic fallback and credit display
import { useState } from 'react';
import { getImageFallbacks, ImageSource } from '@/utils/imageSourcer';

interface ImageWithCreditProps {
  brandName: string;
  cigarName?: string;
  alt: string;
  className?: string;
  showCredit?: boolean;
}

export function ImageWithCredit({
  brandName,
  cigarName,
  alt,
  className = '',
  showCredit = true,
}: ImageWithCreditProps) {
  const fallbacks = getImageFallbacks(brandName, cigarName);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const currentSource = fallbacks[currentIndex];

  const handleImageError = () => {
    if (currentIndex < fallbacks.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setImageLoaded(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={currentSource.url}
        alt={alt}
        className={className}
        onError={handleImageError}
        onLoad={() => setImageLoaded(true)}
      />
      {showCredit && imageLoaded && currentSource.credit && (
        <div className="absolute bottom-0 right-0 bg-black/70 px-2 py-1 text-xs text-primary/70">
          {currentSource.credit}
        </div>
      )}
    </div>
  );
}
