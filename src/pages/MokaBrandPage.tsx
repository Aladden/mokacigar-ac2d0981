// Luxury Brand Detail Page with Filters and Animations
import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MokaCigarCard } from '@/components/MokaCigarCard';
import { BrandHero } from '@/components/BrandHero';
import { CigarFilters, FilterStatus, SortOption } from '@/components/CigarFilters';
import { getCigarsByBrand } from '@/utils/mokaCigarLoader';
import { getBrandHistory } from '@/utils/brandHistories';
import { ProcessedCigar } from '@/types/mokaCigar';

export default function MokaBrandPage() {
  const { brandName } = useParams<{ brandName: string }>();
  const [cigars, setCigars] = useState<ProcessedCigar[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');

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

  // Filter and sort cigars
  const filteredAndSortedCigars = useMemo(() => {
    let filtered = [...cigars];

    // Apply status filter
    if (statusFilter === 'current') {
      filtered = filtered.filter(c => c.status === 'Current');
    } else if (statusFilter === 'discontinued') {
      filtered = filtered.filter(c => c.status === 'Discontinued');
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'year':
          const yearA = a.releaseYear === 'Pre-1960' ? '1900' : a.releaseYear || '9999';
          const yearB = b.releaseYear === 'Pre-1960' ? '1900' : b.releaseYear || '9999';
          return yearA.localeCompare(yearB);
        case 'ringGauge':
          return (b.ringGauge || 0) - (a.ringGauge || 0);
        case 'length':
          return (b.lengthMm || 0) - (a.lengthMm || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [cigars, statusFilter, sortBy]);

  const currentCount = cigars.filter(c => c.status === 'Current').length;
  const discontinuedCount = cigars.filter(c => c.status === 'Discontinued').length;

  const brandHistory = getBrandHistory(displayName);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-3xl font-heading text-luxury">Loading...</div>
        </motion.div>
      </div>
    );
  }

  if (!brandName || cigars.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4 text-luxury">Brand Not Found</h1>
          <Link to="/">
            <Button variant="outline" className="hover-lift">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="ghost" className="hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Brands
            </Button>
          </Link>
        </motion.div>

        {/* Brand Hero Section */}
        {brandHistory && (
          <BrandHero
            brand={brandHistory}
            cigarCount={cigars.length}
            currentCount={currentCount}
            discontinuedCount={discontinuedCount}
          />
        )}

        {/* Filters */}
        <CigarFilters
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={cigars.length}
          filteredCount={filteredAndSortedCigars.length}
        />

        {/* Cigars Grid with Stagger Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAndSortedCigars.map((cigar, index) => (
            <motion.div
              key={cigar.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <MokaCigarCard cigar={cigar} className="hover-lift" />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedCigars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              No cigars match your current filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
