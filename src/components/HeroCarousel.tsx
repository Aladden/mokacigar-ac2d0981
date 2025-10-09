// Luxury Hero Carousel Component
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  imageUrl: string;
}

const heroSlides: HeroSlide[] = [
  {
    title: 'Heritage. Ritual. Refinement.',
    subtitle: 'Cuban Cigar Encyclopedia',
    description: 'Explore the world\'s finest Cuban cigars, their stories, and traditions',
    cta: 'Explore Collection',
    ctaLink: '/brands',
    imageUrl: 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images/hero1.jpg',
  },
  {
    title: 'Cohiba Legacy',
    subtitle: 'The Pinnacle of Excellence',
    description: 'Discover the most prestigious Cuban cigar brand',
    cta: 'View Cohiba',
    ctaLink: '/brand/cohiba',
    imageUrl: 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images/hero2.jpg',
  },
  {
    title: 'Montecristo Heritage',
    subtitle: 'Timeless Craftsmanship',
    description: 'Experience the legendary flavors of Montecristo',
    cta: 'View Montecristo',
    ctaLink: '/brand/montecristo',
    imageUrl: 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images/hero3.jpg',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentSlideData.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-serif text-lg text-primary/90 tracking-wider uppercase"
                >
                  {currentSlideData.subtitle}
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight"
                >
                  {currentSlideData.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-200 max-w-xl"
                >
                  {currentSlideData.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                    onClick={() => window.location.href = currentSlideData.ctaLink}
                  >
                    {currentSlideData.cta}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-primary'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
