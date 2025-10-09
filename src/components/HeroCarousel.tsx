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