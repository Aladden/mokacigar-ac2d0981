// Encyclopedia Page - Luxury Cuban Cigar Knowledge Base
import { useState } from 'react';
import { Search, Book, Award, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'vitola' | 'flavor' | 'production' | 'history' | 'general';
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Vitola',
    definition: 'The specific size and shape of a cigar, defined by its length and ring gauge. Each vitola has unique smoking characteristics.',
    category: 'vitola'
  },
  {
    term: 'Ring Gauge',
    definition: 'The diameter of a cigar measured in 64ths of an inch. For example, a ring gauge of 50 means the cigar is 50/64 inches in diameter.',
    category: 'vitola'
  },
  {
    term: 'Habanos',
    definition: 'The official term for Cuban cigars made from tobacco grown in Cuba. Protected denomination of origin.',
    category: 'general'
  },
  {
    term: 'Torcedor',
    definition: 'A highly skilled cigar roller who hand-crafts premium cigars. Masters can take years to train.',
    category: 'production'
  },
  {
    term: 'Robusto',
    definition: 'A popular vitola typically measuring 4⅛ to 5½ inches with a ring gauge of 48-52. Offers a concentrated flavor experience.',
    category: 'vitola'
  },
];

const chapters = [
  {
    title: 'The History of Cuban Cigars',
    content: `Cuban cigars represent the pinnacle of cigar craftsmanship, with a rich history spanning over 500 years. The story begins with Christopher Columbus's arrival in Cuba in 1492, where he observed the indigenous Taíno people smoking rolled tobacco leaves.

By the 18th century, Cuba had established itself as the world's premier tobacco producer. The unique combination of Cuban soil (particularly the red clay of Vuelta Abajo), climate, and generational expertise creates tobacco of unparalleled quality.`
  },
];

export function Encyclopedia() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGlossary = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-b from-card to-background border-b border-primary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Book className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="font-heading text-4xl md:text-6xl text-primary mb-4">
              The Cigar Encyclopedia
            </h1>
            <p className="text-xl text-muted-foreground">
              Your comprehensive guide to Cuban cigar heritage, knowledge, and appreciation
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="chapters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="chapters">Chapters</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
          </TabsList>

          <TabsContent value="chapters" className="space-y-6">
            {chapters.map((chapter, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    {chapter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{chapter.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="glossary">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder="Search glossary terms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card border-primary/30"
                  />
                </div>
              </div>

              <ScrollArea className="h-[600px]">
                <div className="space-y-4 pr-4">
                  {filteredGlossary.map((item, idx) => (
                    <Card key={idx} className="border-primary/20">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-heading text-xl text-primary">
                            {item.term}
                          </CardTitle>
                          <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary capitalize">
                            {item.category}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-foreground/70">
                          {item.definition}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
