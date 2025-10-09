// Brand Logo Component - displays brand logos from GitHub and MokaCigar
import { useState } from 'react';
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  brandName: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-12',
  md: 'h-20',
  lg: 'h-32'
};

// GitHub brand logos from your repository
const GITHUB_BRANDS_BASE = 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images/brands';
const MOKA_BRAND_BASE_URL = 'https://mokacigar.com/wp-content/uploads/2025/05';

// Map brand names to their logo filenames (both GitHub and MokaCigar)
const brandLogoMap: Record<string, string> = {
  'cohiba': 'Cohiba_Logo_Gold_320x320_crop_center__1_-removebg-preview.png',
  'montecristo': 'Montecristo_Logo_Gold_320x320_crop_center-removebg-preview.png',
  'partagas': 'Partagas_Logo_Gold_320x320_crop_center-removebg-preview.png',
  'romeo-y-julieta': 'Romeo_y_Julieta_Logo_Gold_320x320_crop_center-removebg-preview.png',
  'hoyo-de-monterrey': 'Hoyo_de_Monterrey_Logo_Gold_320x320_crop_center-removebg-preview.png',
  'h-upmann': 'H_Upmann_Logo_Gold_320x320_crop_center-removebg-preview.png',
  'bolivar': 'Bolivar_Logo_Gold_320x320_crop_center-removebg-preview.png',
  'trinidad': 'Trinidad_Logo_Gold_320x320_crop_center-removebg-preview.png',
};

export const BrandLogo = ({ brandName, className, size = 'md' }: BrandLogoProps) => {
  const normalizedName = brandName.toLowerCase().replace(/\s+/g, '-');
  const logoFilename = brandLogoMap[normalizedName];
  const [imageError, setImageError] = useState(false);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);
  
  // Try GitHub first, then MokaCigar
  const getLogoUrl = () => {
    if (!logoFilename) return null;
    
    if (fallbackAttempt === 0) {
      // Try GitHub brands folder first
      return `${GITHUB_BRANDS_BASE}/${normalizedName}.png`;
    } else if (fallbackAttempt === 1) {
      // Then try MokaCigar
      return `${MOKA_BRAND_BASE_URL}/${logoFilename}`;
    }
    return null;
  };

  const logoUrl = getLogoUrl();
  
  if (!logoUrl || imageError) {
    // Fallback to text if no logo found or all attempts failed
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <span className={cn("font-heading text-primary uppercase", sizeClasses[size].replace('h-', 'text-'))}>
          {brandName}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img 
        src={logoUrl} 
        alt={`${brandName} logo`} 
        className={cn(sizeClasses[size], "w-auto object-contain")}
        onError={() => {
          if (fallbackAttempt < 1) {
            setFallbackAttempt(fallbackAttempt + 1);
          } else {
            setImageError(true);
          }
        }}
      />
    </div>
  );
};
