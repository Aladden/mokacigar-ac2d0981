import { cn } from "@/lib/utils";
import mokaLogoOfficial from "@/assets/moka-logo-official.png";

interface MokaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-24'
};

export const MokaLogo = ({ className, size = 'md' }: MokaLogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={mokaLogoOfficial} 
        alt="MokaCigar London" 
        className={cn(sizeClasses[size], "w-auto object-contain")}
      />
    </div>
  );
};