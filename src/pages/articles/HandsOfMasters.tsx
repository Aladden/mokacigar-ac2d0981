import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HandsOfMasters = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/library">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Library
          </Button>
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Craftsmanship
            </span>
            <h1 className="font-serif text-5xl font-bold mt-2 mb-4">
              The Hands of the Masters - Craftsmanship and Production
            </h1>
            <p className="text-xl text-muted-foreground">
              The meticulous process behind every premium cigar
            </p>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-primary">
              Behind every premium cigar lies thousands of hours of human expertise, from seed to smoke. The journey from tobacco plant to finished cigar involves countless decisions, refined techniques passed down through generations, and the skilled hands of masters who have dedicated their lives to the craft.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Torcedor's Art</h2>
            <p>
              The torcedor (cigar roller) is the heart of cigar production. Becoming a master torcedor requires years of training and practice. In Cuba, apprentices spend months learning to roll just the filler before being allowed to apply a wrapper. It can take 2-3 years before a roller is trusted with premium brands.
            </p>

            <p>
              A skilled torcedor can roll 100-150 cigars per day while maintaining exacting standards. Each cigar must meet strict specifications for weight, length, ring gauge, and construction quality. The torcedor's hands move with practiced efficiency, yet each cigar is individually crafted with care and precision.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Quality Control</h2>
            <p>
              Multiple quality checks ensure only the finest cigars reach consumers. Inspectors examine construction, appearance, draw, and weight. Cigars that don't meet standards are rejected. In premium factories, quality control is rigorous, with some facilities rejecting up to 20% of production.
            </p>

            <p className="text-lg font-semibold italic border-l-4 border-primary pl-6 my-8">
              Every premium cigar represents the culmination of agricultural expertise, fermentation mastery, blending artistry, and rolling skill—a testament to human craftsmanship in its finest form.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};