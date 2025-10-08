// Luxury Brand Hero Component
import { motion } from 'framer-motion';
import { Calendar, Award, Map } from 'lucide-react';
import { BrandHistory } from '@/utils/brandHistories';
import { Badge } from './ui/badge';

interface BrandHeroProps {
  brand: BrandHistory;
  cigarCount: number;
  currentCount: number;
  discontinuedCount: number;
}

export function BrandHero({ brand, cigarCount, currentCount, discontinuedCount }: BrandHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      {/* Hero Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(45 100% 65% / 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative p-8 md:p-12 lg:p-16">
        {/* Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 text-luxury"
        >
          {brand.name}
        </motion.h1>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Est. {brand.founded}</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{cigarCount} Vitolas</span>
          </div>
          {brand.strength && (
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Map className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{brand.strength}</span>
            </div>
          )}
        </motion.div>

        {/* Current vs Discontinued */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3 mb-8"
        >
          <Badge variant="default" className="text-sm px-4 py-1">
            {currentCount} Current
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-1">
            {discontinuedCount} Discontinued
          </Badge>
        </motion.div>

        {/* Heritage Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl space-y-4"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {brand.heritage}
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            {brand.description}
          </p>
          <div className="mt-6 p-6 glass rounded-xl border-l-4 border-primary">
            <p className="text-sm font-medium text-primary mb-2">Signature Character</p>
            <p className="text-base text-foreground/90 leading-relaxed">
              {brand.signature}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gold Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </motion.div>
  );
}
