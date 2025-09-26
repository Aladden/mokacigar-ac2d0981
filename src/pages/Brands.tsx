import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/cigarData';

export const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Legendary 
            <span className="block text-primary-glow">Cuban Brands</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the world's most prestigious cigar brands, each with their own 
            unique heritage, character, and centuries of master craftsmanship.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Explore Each Brand's Story
          </h2>
          <p className="text-muted-foreground">
            Click on any brand to discover their unique cigars, learn about their heritage, 
            and find the perfect smoke for your taste preferences.
          </p>
        </div>
      </section>
    </div>
  );
};