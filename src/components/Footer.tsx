// Luxury Footer Component - MokaCigar Encyclopedia
import { Link } from 'react-router-dom';
import { MokaLogo } from './MokaLogo';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const brandLinks = [
    'Cohiba',
    'Montecristo',
    'Partagás',
    'Romeo y Julieta',
    'Hoyo de Monterrey',
    'H. Upmann',
  ];

  return (
    <footer className="w-full border-t border-primary/20 bg-gradient-to-b from-background to-card">
      {/* Gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="font-heading text-2xl text-primary mb-4">
            Join Our Circle of Connoisseurs
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to receive exclusive updates on rare releases, heritage stories, and curated pairings.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card/50 border-primary/30 text-foreground"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <MokaLogo size="md" className="mb-4" />
            <p className="text-sm text-muted-foreground font-body">
              Heritage. Ritual. Refinement.
            </p>
          </div>

          {/* Featured Brands */}
          <div>
            <h4 className="font-heading text-lg text-primary mb-4">Brands</h4>
            <ul className="space-y-2">
              {brandLinks.map((brand) => (
                <li key={brand}>
                  <Link
                    to={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading text-lg text-primary mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/brands" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  All Brands
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-primary mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/70">
                MokaCigar London
              </li>
              <li>
                <a 
                  href="https://www.mokacigar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Visit Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MokaCigar Encyclopedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
