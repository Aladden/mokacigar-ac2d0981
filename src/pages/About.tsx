import { MokaLogo } from '@/components/MokaLogo';

export const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32">
              <MokaLogo />
            </div>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary">
            The Art of 
            <span className="block text-primary-glow">Cigar Connoisseurship</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the MokaCigar Encyclopedia - your gateway to the world's finest Cuban cigars, 
            where heritage meets craftsmanship in every perfectly rolled leaf.
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-semibold text-primary">
                Our Heritage
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At MokaCigar London, we believe that a fine cigar is more than tobacco - 
                  it's a moment of contemplation, a celebration of craftsmanship, and a 
                  connection to centuries of tradition.
                </p>
                <p>
                  Our curated collection represents the pinnacle of Cuban cigar making, 
                  featuring legendary brands like Cohiba, Montecristo, Romeo y Julieta, 
                  and Partagás - each with their own unique story and character.
                </p>
                <p>
                  From the volcanic soils of Vuelta Abajo to the skilled hands of master 
                  torcedores, every cigar in our encyclopedia carries the essence of Cuba's 
                  rich tobacco heritage.
                </p>
              </div>
            </div>
            
            <div className="glass p-8 rounded-xl border border-primary/20">
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                The Ritual of Excellence
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-primary">Selection:</strong> Each cigar is carefully chosen for its provenance and quality</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-primary">Preparation:</strong> Proper cutting and lighting enhance the smoking experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-primary">Appreciation:</strong> Savoring the complex flavours and aromas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-primary">Pairing:</strong> Complementing with fine spirits, wine, or coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl font-semibold text-primary">
            Our Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl border border-primary/20 space-y-4">
              <h3 className="font-heading text-lg font-semibold text-primary">Authenticity</h3>
              <p className="text-sm text-muted-foreground">
                We showcase only genuine Cuban cigars, each with verified provenance 
                and authentic craftsmanship that honors centuries of tradition.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-primary/20 space-y-4">
              <h3 className="font-heading text-lg font-semibold text-primary">Education</h3>
              <p className="text-sm text-muted-foreground">
                Our encyclopedia serves as your guide to understanding vitolas, 
                flavor profiles, and the rich heritage behind each cigar brand.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-primary/20 space-y-4">
              <h3 className="font-heading text-lg font-semibold text-primary">Refinement</h3>
              <p className="text-sm text-muted-foreground">
                We believe in the art of slow appreciation, where quality 
                supersedes quantity and every smoke is a moment of mindful luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Begin Your Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of premium Cuban cigars and discover 
            the perfect complement to your moments of reflection and celebration.
          </p>
          <div className="pt-4">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore Our Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};