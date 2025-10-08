// Brand Logo Component - displays brand logos from MokaCigar
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

// Map brand names to their logo filenames on mokacigar.com
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

const MOKA_BRAND_BASE_URL = 'https://mokacigar.com/wp-content/uploads/2025/05';

export const BrandLogo = ({ brandName, className, size = 'md' }: BrandLogoProps) => {
  const normalizedName = brandName.toLowerCase().replace(/\s+/g, '-');
  const logoFilename = brandLogoMap[normalizedName];
  
  if (!logoFilename) {
    // Fallback to text if logo not found
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <span className={cn("font-heading text-primary", sizeClasses[size])}>
          {brandName}
        </span>
      </div>
    );
  }

  const logoUrl = `${MOKA_BRAND_BASE_URL}/${logoFilename}`;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img 
        src={logoUrl} 
        alt={`${brandName} logo`} 
        className={cn(sizeClasses[size], "w-auto object-contain")}
        onError={(e) => {
          // Fallback to text on error
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="font-heading text-primary">${brandName}</span>`;
          }
        }}
      />
    </div>
  );
};
