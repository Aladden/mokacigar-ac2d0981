import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const IntroductionAficionado = () => {
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
              Getting Started
            </span>
            <h1 className="font-serif text-5xl font-bold mt-2 mb-4">
              An Introduction to the Aficionado's World
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the rich culture and tradition of cigar appreciation
            </p>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-primary">
              The world of premium cigars is one of timeless tradition, exquisite craftsmanship, and profound sensory experience. For centuries, cigars have been more than mere tobacco products—they represent moments of contemplation, celebration, and communion among enthusiasts who appreciate the finer things in life.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Art of the Aficionado</h2>
            <p>
              To be a cigar aficionado is to embrace a journey of continuous discovery. It means developing a discerning palate that can distinguish between the subtle nuances of different tobacco blends, understanding the significance of terroir, and appreciating the skill that goes into every hand-rolled masterpiece.
            </p>

            <p>
              The true aficionado knows that smoking a premium cigar is not merely about consumption—it's about the ritual, the experience, and the moment. It's about taking time to slow down in our fast-paced world and savoring something that has been crafted with care and expertise.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">A Culture of Craftsmanship</h2>
            <p>
              Every premium cigar tells a story. From the fertile tobacco fields where the leaves are grown, to the skilled hands of the torcedores (cigar rollers) who transform those leaves into works of art, each step in the process matters. The cigar you hold has been years in the making, with seeds carefully selected, plants meticulously tended, leaves expertly fermented and aged, and the final product lovingly crafted.
            </p>

            <p>
              Understanding this journey transforms the smoking experience. When you know that the wrapper leaf may have been aged for five years, that the binder was selected from a specific priming, and that the master blender spent years perfecting the combination of fillers, you appreciate the cigar on an entirely new level.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Ritual of Enjoyment</h2>
            <p>
              The cigar ritual begins long before the first puff. It starts with selection—choosing the right cigar for the moment, the occasion, and your mood. A robust Maduro might be perfect for an evening of contemplation, while a milder Connecticut shade could complement a morning coffee.
            </p>

            <p>
              Next comes the examination. A true aficionado will inspect the cigar, feeling its construction, checking for firmness and uniformity, and appreciating the oily sheen of a well-aged wrapper. The pre-light draw, taken after cutting, offers the first hints of what's to come—subtle flavors and aromas that promise the experience ahead.
            </p>

            <p>
              The lighting itself is an art form. Whether using a cedar spill, wooden matches, or a quality butane lighter, the goal is to achieve an even burn that will last throughout the smoke. Patience is key—rushing this step can compromise the entire experience.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Building Your Palate</h2>
            <p>
              Like wine appreciation or gourmet cuisine, developing your cigar palate is a journey that rewards patience and attention. Begin with milder cigars to understand basic flavor profiles—notes of cedar, nuts, cream, and mild spices. As your palate develops, you'll start to detect more subtle nuances: hints of cocoa, leather, coffee, earth, and various spice notes.
            </p>

            <p>
              Keep a journal of your experiences. Note the cigar's name, size, wrapper type, and your impressions. Did the flavor profile change from the first third to the last? What foods or beverages paired well with it? These notes will help you identify your preferences and expand your horizons.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Community of Enthusiasts</h2>
            <p>
              One of the greatest joys of being a cigar aficionado is the community you join. Cigar lounges around the world serve as gathering places where strangers become friends, united by their shared appreciation. Conversations flow as freely as the smoke, covering everything from business to philosophy, sports to world events.
            </p>

            <p>
              This community transcends borders and backgrounds. Whether in a lounge in New York, a terrace in Havana, or a private club in London, cigar enthusiasts share a common language and mutual respect for the leaf.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Respect and Responsibility</h2>
            <p>
              Being an aficionado also means understanding the responsibilities that come with the hobby. This includes respecting non-smokers, being mindful of where and when you smoke, and understanding the health considerations associated with cigar enjoyment.
            </p>

            <p>
              It also means supporting the artisans and farmers who make this passion possible. Choosing authentic, premium cigars from reputable sources ensures that your enjoyment supports sustainable practices and fair compensation for those who pour their expertise into every cigar.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Your Journey Begins</h2>
            <p>
              Whether you're taking your first steps into the world of premium cigars or deepening your existing appreciation, remember that there's always more to learn, more to experience, and more to enjoy. Each cigar is a new adventure, each smoke a new story.
            </p>

            <p>
              This encyclopedia is designed to be your companion on this journey, offering insights into everything from basic terminology to advanced blending techniques, from the history of tobacco cultivation to the latest trends in the industry. Use it as a reference, a guide, and an inspiration to continue exploring this remarkable world.
            </p>

            <p className="text-lg font-semibold italic border-l-4 border-primary pl-6 my-8">
              Welcome to the world of the cigar aficionado. May your journey be filled with discovery, enjoyment, and memorable moments.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};