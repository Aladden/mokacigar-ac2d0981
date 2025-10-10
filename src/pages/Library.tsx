import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const articles = [
  {
    id: 'introduction-aficionado',
    title: 'An Introduction to the Aficionado\'s World',
    description: 'Discover the rich culture and tradition of cigar appreciation',
    category: 'Getting Started',
    readTime: '8 min read',
  },
  {
    id: 'language-of-leaf',
    title: 'The Language of the Leaf: A Foundational Glossary',
    description: 'Essential terminology every cigar enthusiast should know',
    category: 'Knowledge',
    readTime: '12 min read',
  },
  {
    id: 'blueprint-of-flavor',
    title: 'The Blueprint of Flavor - Formats and Vitolas',
    description: 'Understanding cigar sizes, shapes, and their impact on taste',
    category: 'Fundamentals',
    readTime: '15 min read',
  },
  {
    id: 'soul-of-smoke',
    title: 'The Soul of the Smoke - Tobacco and Blends',
    description: 'Exploring tobacco varieties and the art of blending',
    category: 'Deep Dive',
    readTime: '18 min read',
  },
  {
    id: 'hands-of-masters',
    title: 'The Hands of the Masters - Craftsmanship and Production',
    description: 'The meticulous process behind every premium cigar',
    category: 'Craftsmanship',
    readTime: '20 min read',
  },
];

export const Library = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">
            The Cigar Library
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive collection of articles exploring the world of premium cigars
          </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.id} to={`/library/${article.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};