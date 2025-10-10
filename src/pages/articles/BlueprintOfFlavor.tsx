import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlueprintOfFlavor = () => {
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
              Fundamentals
            </span>
            <h1 className="font-serif text-5xl font-bold mt-2 mb-4">
              The Blueprint of Flavor - Formats and Vitolas
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding cigar sizes, shapes, and their impact on taste
            </p>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-primary">
              The size and shape of a cigar—its vitola—is far more than a matter of aesthetics or smoking duration. The dimensions of a cigar fundamentally influence its flavor delivery, smoking characteristics, and overall experience. Understanding vitolas is essential for any aficionado seeking to match the right cigar to the right moment.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Science of Size</h2>
            <p>
              Cigars are measured in two dimensions: length and ring gauge. Length is measured in inches, while ring gauge represents the diameter in 64ths of an inch. Thus, a cigar with a 52 ring gauge is 52/64ths of an inch in diameter, or about 0.81 inches.
            </p>

            <p>
              These measurements aren't arbitrary—they're the blueprint that determines how the cigar will smoke. The ratio between length and ring gauge affects everything from burn time to flavor intensity, from the temperature of the smoke to how the blend's components are expressed.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">How Size Affects Flavor</h2>
            
            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">Ring Gauge and Blend Ratio</h3>
            <p>
              A cigar's ring gauge determines the ratio of wrapper to filler tobacco. In a thin cigar, the wrapper comprises a larger percentage of the total tobacco, making its flavor more prominent. Conversely, in a thick cigar, the filler blend dominates, allowing the blender to create more complex flavor profiles through varied filler combinations.
            </p>

            <p>
              This is why the same blend can taste noticeably different in various ring gauges. A Churchill (typically 7 × 48) and a Robusto (typically 5 × 50) of the same marca may share identical tobacco, but the Robusto's thicker ring gauge will emphasize the filler blend's complexity, while the Churchill's thinner gauge will showcase more of the wrapper's characteristics.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">Length and Temperature</h3>
            <p>
              Length affects the temperature at which smoke reaches your palate. A longer cigar allows smoke more time to cool, resulting in a smoother, more refined delivery. Shorter cigars tend to smoke hotter, which can intensify flavors but also increase harshness, especially as you approach the final third.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Classic Vitolas</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Robusto (5 × 50)</h3>
                <p>
                  Perhaps the most popular modern vitola, the Robusto offers an ideal balance. Its substantial ring gauge allows for complex blending while its moderate length provides a satisfying 45-60 minute smoke. The Robusto's thick diameter emphasizes the filler blend, making it an excellent choice for experiencing a marca's core flavor profile. The format is forgiving of construction variations and tends to maintain an even burn.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Corona (5.5 × 42-44)</h3>
                <p>
                  The Corona is considered by many purists to be the perfect vitola for evaluating a cigar's true character. Its moderate ring gauge provides a good balance between wrapper and filler, while its length allows flavors to develop fully without the smoke becoming overly hot. Many Cuban marcas were originally designed around the Corona format.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Churchill (7 × 47-49)</h3>
                <p>
                  Named after Winston Churchill, this longer format provides an extended smoking experience of 60-90 minutes. The Churchill's length allows for excellent smoke cooling, delivering flavors with exceptional smoothness. The thinner ring gauge (compared to modern preferences) showcases the wrapper tobacco while still allowing for complex filler blends.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Toro (6 × 50-52)</h3>
                <p>
                  A modern favorite, the Toro offers the complexity of a thick ring gauge with a length that's substantial but not overly long. Smoking time is typically 60-75 minutes. The Toro's generous dimensions give blenders maximum flexibility, allowing for intricate combinations of filler tobaccos while maintaining consistent flavor delivery.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Lancero (7.5 × 38-40)</h3>
                <p>
                  The Lancero is the connoisseur's choice—a challenging format to produce well but rewarding when done right. Its thin ring gauge means the wrapper dominates, so only the finest wrapper leaves are used. The long length provides excellent smoke cooling. A well-made Lancero offers refined, elegant flavors and requires impeccable construction to maintain proper draw and even burn.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Petit Corona (4.5 × 42)</h3>
                <p>
                  An excellent choice for a shorter smoking session (30-40 minutes) without sacrificing complexity. Despite its compact size, a well-made Petit Corona delivers a full flavor experience, making it perfect for a morning smoke or when time is limited.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Double Corona (7.5-8 × 49-52)</h3>
                <p>
                  For those with time to spare, the Double Corona offers an extended journey through a blend's evolution. The combination of length and generous ring gauge allows flavors to develop slowly and fully, with plenty of room for complex filler arrangements. Plan for 90-120 minutes of smoking time.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Figurado Shapes</h2>
            <p>
              While parejos (straight-sided cigars) are most common, figurados (irregular shapes) offer unique smoking experiences:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Torpedo/Pyramid</h3>
                <p>
                  Characterized by a pointed head and wider foot, torpedoes concentrate smoke as it travels through the tapered head, potentially intensifying flavors. The pointed cap must be cut carefully to maintain the proper draw. Well-made torpedoes showcase the roller's skill, as the tapered shape is more challenging to construct properly.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Belicoso</h3>
                <p>
                  Similar to a torpedo but shorter and with a more rounded, less pronounced taper. The format typically measures around 5-5.5 inches with a 50-52 ring gauge at the foot. The slightly tapered head focuses the smoke while the substantial ring gauge allows for complex blending.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Perfecto</h3>
                <p>
                  Tapered at both ends with a bulge in the middle, the perfecto is a classic Cuban shape that's fallen somewhat out of favor but remains a testament to rolling skill. The changing ring gauge throughout the cigar's length creates an evolving smoking experience as different ratios of wrapper to filler are encountered.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Salomones</h3>
                <p>
                  A dramatic figurado, long and thick in the center with tapering at both ends. These showcase cigars require exceptional skill to produce and offer a unique smoking progression as the ring gauge changes from head to foot.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Choosing the Right Vitola</h2>
            
            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">For the Occasion</h3>
            <p>
              Consider your available time. A Petit Corona or Robusto suits a brief respite, while a Churchill or Double Corona is ideal for an unhurried evening. Ring gauge affects smoking time as well—thicker cigars generally burn more slowly.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">For the Experience Level</h3>
            <p>
              Beginners often find medium ring gauges (46-50) most forgiving. Very thin cigars can be challenging to keep lit and may smoke hot, while very thick cigars can be overwhelming in flavor intensity and require significant time commitment.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">For the Blend Expression</h3>
            <p>
              If you want to showcase a particular wrapper tobacco, choose a thinner ring gauge. For complex filler blends, opt for thicker formats. Some blends are specifically designed for particular vitolas and may not translate as well to other sizes.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Modern Trend</h2>
            <p>
              Contemporary preferences have shifted toward thicker ring gauges, with 54-60 becoming increasingly common. These "gordo" formats allow for extremely complex blending and extended smoking times. However, traditional aficionados often prefer classic dimensions, arguing that excessively thick cigars can overwhelm the palate and don't showcase the wrapper tobacco effectively.
            </p>

            <p>
              There's no right answer—personal preference and the specific blend should guide your choice. The best approach is to try the same marca in different vitolas to understand how size affects your experience.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Understanding the Factory Names</h2>
            <p>
              Many cigars use Cuban factory names (Habanos SA nomenclature) regardless of where they're made. These names like "Hermosos No. 4" or "Coronas Gordas" once referred to specific production formats. Understanding these traditional names helps navigate cigar catalogs and communicate with retailers, though they're used less strictly in modern cigar production.
            </p>

            <p className="text-lg font-semibold italic border-l-4 border-primary pl-6 my-8">
              The vitola you choose is not merely a matter of smoking duration—it's a fundamental decision that shapes the entire experience. By understanding how size and shape influence flavor delivery, you can make informed choices that enhance your enjoyment and allow you to experience each blend as the creator intended.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};