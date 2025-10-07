// Brand Detail Page for MokaCigar Encyclopedia

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MokaCigarCard } from '@/components/MokaCigarCard';
import { getCigarsByBrand } from '@/utils/mokaCigarLoader';
import { ProcessedCigar } from '@/types/mokaCigar';

export default function MokaBrandPage() {
  const { brandName } = useParams<{ brandName: string }>();
  const [cigars, setCigars] = useState<ProcessedCigar[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const displayName = brandName
    ? brandName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : '';

  useEffect(() => {
    if (displayName) {
      getCigarsByBrand(displayName).then(data => {
        setCigars(data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [displayName]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="text-center">
          <div className="text-2xl" style={{ color: '#B79E59' }}>Loading...</div>
        </div>
      </div>
    );
  }

  if (!brandName || cigars.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4" style={{ color: '#B79E59' }}>
            Brand Not Found
          </h1>
          <Link to="/">
            <Button 
              className="bg-transparent border text-[#B79E59] hover:bg-[#B79E59] hover:text-black"
              style={{ borderColor: '#B79E59' }}
            >
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-8">
          <Button 
            variant="ghost" 
            className="text-[#B79E59] hover:bg-[#B79E59]/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Brands
          </Button>
        </Link>

        {/* Brand Header */}
        <div className="mb-12">
          <h1 
            className="font-heading text-5xl md:text-6xl mb-4"
            style={{ color: '#B79E59' }}
          >
            {displayName}
          </h1>
          <p className="text-xl" style={{ color: '#D4AF37' }}>
            Premium Cuban cigars from {displayName}
          </p>
          <div className="mt-4 text-lg" style={{ color: '#B79E59' }}>
            {cigars.length} {cigars.length === 1 ? 'cigar' : 'cigars'} in collection
          </div>
        </div>

        {/* Cigars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cigars.map((cigar) => (
            <MokaCigarCard key={cigar.id} cigar={cigar} />
          ))}
        </div>
      </div>
    </div>
  );
}
