import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const LanguageOfLeaf = () => {
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
              Knowledge
            </span>
            <h1 className="font-serif text-5xl font-bold mt-2 mb-4">
              The Language of the Leaf: A Foundational Glossary
            </h1>
            <p className="text-xl text-muted-foreground">
              Essential terminology every cigar enthusiast should know
            </p>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-primary">
              Like any specialized field, the world of premium cigars has developed its own rich vocabulary. Understanding this language is essential for any aficionado who wishes to fully appreciate, discuss, and explore cigars. This glossary provides the foundation upon which your cigar knowledge will be built.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Cigar's Anatomy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Wrapper (Capa)</h3>
                <p>
                  The outermost leaf of the cigar, and arguably its most important component. The wrapper must be flawless in appearance and contributes significantly to the cigar's flavor profile and aroma. Premium wrappers are selected from the finest tobacco leaves and often undergo years of aging. The wrapper's color, texture, and oil content are key indicators of a cigar's quality and character.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Binder (Capote)</h3>
                <p>
                  The leaf that holds the filler tobacco together and gives the cigar its shape. While less visually critical than the wrapper, the binder plays an important role in the burn characteristics and overall flavor. Quality binders ensure an even burn and complement the flavors of both wrapper and filler.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Filler (Tripa)</h3>
                <p>
                  The inner tobacco blend that makes up the bulk of the cigar. Premium cigars use long filler—whole tobacco leaves carefully arranged to ensure proper air flow and even burning. The filler blend typically combines tobaccos from different primings and sometimes different countries, each contributing specific flavor notes to create the desired profile.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Cap</h3>
                <p>
                  The small circular piece of wrapper leaf applied to the head of the cigar to keep the wrapper from unraveling. A well-applied cap is a mark of quality craftsmanship. It should be cut carefully before smoking to ensure a proper draw.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Foot</h3>
                <p>
                  The end of the cigar that you light. In most cigars, the foot is open, exposing the filler tobacco. Some cigars feature a closed foot (covered by wrapper) or a shaggy foot (where the filler extends beyond the wrapper).
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Head</h3>
                <p>
                  The end of the cigar that you smoke from, finished with the cap. The head must be cut or punched before smoking to allow proper draw.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Tobacco Types and Origins</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Cuban Seed</h3>
                <p>
                  Tobacco grown from seeds originally from Cuba, though now cultivated in various countries. Cuban seed tobacco is prized for its flavor complexity and is used in many premium cigars worldwide.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Habano</h3>
                <p>
                  Strictly speaking, a cigar made entirely in Cuba. However, the term is also used more broadly to describe Cuban-seed tobacco or cigars with Cuban-style characteristics, particularly in countries like Nicaragua and the Dominican Republic.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Ligero</h3>
                <p>
                  Tobacco from the top of the plant, receiving the most sunlight. Ligero leaves are thick, oily, and rich in flavor and strength. They burn slowly and are used sparingly in blends to add power and complexity.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Seco</h3>
                <p>
                  Tobacco from the middle of the plant. Seco leaves provide aromatic qualities and are essential for creating balance in a blend. They contribute significantly to the cigar's overall flavor profile.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Volado</h3>
                <p>
                  Tobacco from the bottom of the plant, receiving the least sunlight. These leaves are mild in flavor but excellent for combustion, ensuring the cigar burns evenly and smoothly.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Construction and Craftsmanship</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Torcedor/Torcedora</h3>
                <p>
                  A cigar roller. Master torcedores undergo years of training to perfect their craft and can roll hundreds of cigars per day while maintaining exacting quality standards. The skill of the torcedor is crucial to a cigar's construction and smoking qualities.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Bunch</h3>
                <p>
                  The combination of binder and filler tobacco before the wrapper is applied. The way the bunch is constructed affects the cigar's draw and burn characteristics.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Entubado</h3>
                <p>
                  A rolling technique where each filler leaf is rolled into a tube before being bunched together. This method creates natural air channels, ensuring excellent draw and even burning. It's more labor-intensive but produces superior smoking characteristics.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Book</h3>
                <p>
                  A traditional rolling method where filler leaves are folded like pages of a book. This is faster than entubado but requires careful execution to ensure proper draw.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Flavor and Smoking Experience</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Draw</h3>
                <p>
                  The amount of resistance you feel when pulling smoke through the cigar. A proper draw is neither too tight (requiring excessive effort) nor too loose (producing too much smoke). The draw significantly affects the smoking experience and flavor delivery.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Burn</h3>
                <p>
                  How evenly a cigar combusts. A well-made cigar should burn uniformly, creating an even ash line. Uneven burning can indicate construction issues or problems with tobacco moisture content.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Body</h3>
                <p>
                  The overall impact and intensity of the cigar's flavor on your palate. Body is often confused with strength but is actually about flavor intensity. A cigar can be full-bodied but relatively mild in nicotine strength, or vice versa.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Strength</h3>
                <p>
                  The nicotine impact of a cigar. Strength is determined primarily by the tobacco's nicotine content, particularly from ligero leaves. A strong cigar can affect you physically, potentially causing lightheadedness if you're not accustomed to it.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Complexity</h3>
                <p>
                  The range and interplay of flavors in a cigar. A complex cigar offers multiple flavor notes that evolve throughout the smoking experience, keeping your palate engaged and interested.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Balance</h3>
                <p>
                  How well the various elements of a cigar work together. A balanced cigar has no single characteristic overwhelming the others—strength, flavor, and aroma all complement each other harmoniously.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Finish</h3>
                <p>
                  The flavors and sensations that linger on your palate after you've exhaled. A long, pleasant finish is a mark of a quality cigar. The finish can reveal subtle notes not immediately apparent during the smoke itself.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Storage and Aging</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Humidor</h3>
                <p>
                  A container designed to maintain cigars at optimal humidity levels (typically 65-72% relative humidity) and temperature (65-70°F). Proper humidor storage preserves cigars and allows them to age gracefully.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Plume (Bloom)</h3>
                <p>
                  A fine, white crystalline dust that can appear on well-aged cigars stored at proper humidity. Plume is a sign of quality aging and can be easily brushed off. It should not be confused with mold, which appears fuzzy and grows in patches.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Aging</h3>
                <p>
                  The process of storing cigars over time to allow flavors to marry and mellow. While tobacco is aged before cigars are made, further aging in a humidor can enhance a cigar's characteristics. Not all cigars benefit from extensive aging, but many premium cigars improve over years of proper storage.
                </p>
              </div>
            </div>

            <p className="text-lg font-semibold italic border-l-4 border-primary pl-6 my-8">
              Mastering this vocabulary is the first step in your journey as a cigar aficionado. These terms will help you understand reviews, communicate with fellow enthusiasts, and make informed decisions when selecting cigars. As you continue your exploration, these concepts will become second nature, allowing you to focus on the joy of the experience itself.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};