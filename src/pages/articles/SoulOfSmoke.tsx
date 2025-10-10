import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SoulOfSmoke = () => {
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
              Deep Dive
            </span>
            <h1 className="font-serif text-5xl font-bold mt-2 mb-4">
              The Soul of the Smoke - Tobacco and Blends
            </h1>
            <p className="text-xl text-muted-foreground">
              Exploring tobacco varieties and the art of blending
            </p>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-primary">
              At the heart of every exceptional cigar lies tobacco—not just any tobacco, but carefully selected, expertly grown, properly fermented, and skillfully aged leaves that will ultimately be blended into a harmonious whole. Understanding tobacco and blending is to understand the very soul of the cigar, the essence that transforms a bundle of leaves into an experience.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Nature of Tobacco</h2>
            <p>
              Tobacco (Nicotiana tabacum) is a plant of remarkable complexity. Like wine grapes, tobacco expresses terroir—the unique combination of soil, climate, and cultivation practices that gives each growing region its distinctive character. The same seed planted in different locations will produce dramatically different tobacco, which is why certain regions have become legendary for particular types of leaves.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Major Tobacco Growing Regions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Cuba - Vuelta Abajo</h3>
                <p>
                  The Pinar del Río region, particularly Vuelta Abajo, is considered by many to produce the world's finest tobacco. The red soil, humidity, and climate create ideal conditions for growing wrapper, binder, and filler tobaccos of exceptional quality. Tobacco from this region is known for its complexity, with flavors ranging from earth and cedar to coffee and cocoa, often with a distinctive creamy character.
                </p>
                <p>
                  Specific areas like San Luis and San Juan y Martínez are particularly prized. The tobacco grown here forms the backbone of Habanos, Cuba's premium cigars.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Nicaragua</h3>
                <p>
                  Nicaragua has emerged as one of the most important tobacco producers in the world. The country's volcanic soil imparts a distinctive richness and strength to the tobacco. Major growing regions include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Estelí:</strong> Known for producing full-bodied, robust tobacco with peppery notes and considerable strength. Estelí tobacco often forms the core of powerful blends.</li>
                  <li><strong>Condega:</strong> Produces slightly milder tobacco than Estelí, with excellent aromatic qualities and notes of chocolate and nuts.</li>
                  <li><strong>Jalapa:</strong> The most refined of Nicaragua's tobacco regions, producing elegant, complex tobacco with sweetness and floral notes, often compared to Cuban tobacco.</li>
                  <li><strong>Ometepe:</strong> An island in Lake Nicaragua with unique volcanic soil, producing distinctive tobacco with earthy, mineral characteristics.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Dominican Republic</h3>
                <p>
                  The Dominican Republic is the world's largest exporter of premium cigars and produces tobacco ranging from mild to medium-bodied. The Cibao Valley is the primary growing region, with sub-regions like:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Santiago:</strong> Produces well-balanced tobacco with natural sweetness.</li>
                  <li><strong>La Vega:</strong> Known for aromatic tobacco with nutty and cedary notes.</li>
                  <li><strong>Moca:</strong> Yields mellow, smooth tobacco ideal for Connecticut-style wrappers.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Honduras</h3>
                <p>
                  Honduran tobacco is known for its robust character and spicy notes. The Jamastran Valley and Copán regions produce full-flavored tobacco that's become increasingly popular in modern blends. Honduran tobacco often contributes strength and pepper notes to blends.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Ecuador</h3>
                <p>
                  While Ecuador doesn't produce significant filler tobacco, it's renowned for wrapper leaves, particularly Connecticut Shade grown in the Andean foothills. The unique cloud cover creates ideal conditions for growing silky, golden wrappers with subtle sweetness and elegance.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Brazil</h3>
                <p>
                  Brazilian tobacco, particularly from the Bahia region, is known for its dark Maduro wrappers and full-bodied filler tobacco. Mata Fina and Mata Norte produce distinctive tobacco with sweet, cocoa-like characteristics.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Understanding Primings</h2>
            <p>
              Tobacco leaves are harvested from different positions on the plant, called primings. Each priming receives different amounts of sunlight and develops distinct characteristics:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Volado (Bottom Leaves)</h3>
                <p>
                  The first leaves to be harvested, from the bottom of the plant. These receive the least sunlight and are the mildest. While they contribute little flavor, they're essential for combustion—helping the cigar burn properly and evenly.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Seco (Middle Leaves)</h3>
                <p>
                  From the middle of the plant, seco leaves are aromatic and flavorful without being overpowering. They provide much of the cigar's bouquet and contribute balance to the blend. These leaves are crucial for the cigar's character.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Ligero (Top Leaves)</h3>
                <p>
                  The final leaves harvested, from the top of the plant where they receive maximum sunlight. Ligero leaves are thick, oily, and rich in nicotine. They contribute strength, body, and intense flavor to a blend. Used sparingly, they add power; in excess, they can overpower more delicate notes.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Art of Blending</h2>
            <p>
              Creating a great cigar blend is akin to composing a symphony. The master blender must consider not just individual tobaccos but how they'll interact, how the blend will evolve from first light to final puff, and how different vitolas will express the same blend.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">The Blender's Palette</h3>
            <p>
              A blender might work with tobaccos from multiple countries, different primings, various ages, and diverse seed types. Each component is selected for specific characteristics it brings to the final blend:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Wrapper: Determines first impressions and contributes significantly to flavor (20-30% of the total taste)</li>
              <li>Binder: Affects burn characteristics and adds complementary flavors</li>
              <li>Filler: The heart of the cigar, often combining 3-5 different tobaccos from various regions and primings</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-primary mt-8">The Trinity of Taste</h3>
            <p>
              Great blends balance three elements:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Strength</h3>
                <p>
                  The physical impact, primarily from nicotine content. Strength can range from mild (comfortable for beginners) to full (potentially overwhelming for the uninitiated). Strength is largely determined by the amount and type of ligero in the blend.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Body</h3>
                <p>
                  The weight and intensity of flavor on the palate. A cigar can be full-bodied but relatively mild in strength, delivering intense flavors without excessive nicotine impact. Body is influenced by all three tobacco components but particularly by the filler blend.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Complexity</h3>
                <p>
                  The range and evolution of flavors throughout the smoking experience. A complex cigar reveals different notes as you smoke—perhaps starting with cedar and cream, developing coffee and cocoa in the second third, and finishing with leather and spice. Complexity comes from the interplay of different tobaccos and how they're combined.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Classic Blend Profiles</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Connecticut Shade</h3>
                <p>
                  Characterized by a golden-brown wrapper (often from Ecuador or Connecticut), these blends are typically mild to medium-bodied with creamy, nutty flavors. The Dominican Republic and Honduras often contribute filler tobaccos. These cigars are approachable for beginners while still offering complexity for experienced smokers. Classic flavor notes include cedar, nuts, cream, and subtle sweetness.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Habano/Sun Grown</h3>
                <p>
                  Using Cuban-seed wrapper grown in full sunlight (often from Nicaragua or Ecuador), these cigars are medium to full-bodied with rich, complex flavors. The darker wrapper contributes earth, spice, and sometimes sweetness. Filler blends often include Nicaraguan tobacco from multiple regions. Expect notes of earth, coffee, dark chocolate, pepper, and wood.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Maduro</h3>
                <p>
                  "Maduro" means "mature" in Spanish, referring to darker, longer-fermented wrappers (often from Connecticut Broadleaf, Brazil, or San Andrés, Mexico). These cigars typically offer sweet, rich flavors with notes of cocoa, coffee, molasses, and sometimes dark fruit. The filler blend must be robust enough to stand up to the powerful wrapper. Despite their dark appearance, many Maduros are surprisingly smooth rather than harsh.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Nicaraguan Puro</h3>
                <p>
                  Using only Nicaraguan tobacco (wrapper, binder, and filler), these cigars showcase the country's tobacco diversity. By using leaves from different regions and primings, blenders create cigars that are typically full-bodied and full-strength with robust flavors of earth, pepper, cocoa, and leather. The volcanic soil's influence is evident in the tobacco's richness.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">The Role of Fermentation and Aging</h2>
            <p>
              Raw tobacco is harsh and unsmokable. Fermentation is a controlled process that breaks down harsh elements and develops desirable flavors. Tobacco may undergo multiple fermentation cycles, with temperature and humidity carefully controlled.
            </p>

            <p>
              After fermentation, aging further mellows the tobacco and allows flavors to marry. Premium cigars use tobacco aged for a minimum of one year, often much longer. Some cigars include tobaccos aged for five years or more. This investment in time is one reason premium cigars command higher prices.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Reading the Blend</h2>
            <p>
              When examining a cigar's blend, consider:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Country of origin:</strong> Provides clues about the tobacco's base characteristics</li>
              <li><strong>Wrapper type:</strong> Strong indicator of initial flavor and visual appeal</li>
              <li><strong>Seed variety:</strong> Helps predict flavor profiles (Cuban seed, Corojo, Criollo, etc.)</li>
              <li><strong>Regional specifics:</strong> If details are provided, regions like Estelí vs. Jalapa tell you about likely strength and character</li>
              <li><strong>Puro vs. blend:</strong> Puros (single country) showcase that country's terroir; international blends can offer more complexity</li>
            </ul>

            <p className="text-lg font-semibold italic border-l-4 border-primary pl-6 my-8">
              Understanding tobacco and blending transforms how you experience cigars. You're no longer simply smoking—you're appreciating the culmination of years of agricultural expertise, fermentation skill, and blending artistry. Each puff becomes a conversation with the land, the growers, and the master blender who brought these diverse elements into perfect harmony.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};