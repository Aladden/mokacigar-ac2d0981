import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Shield } from 'lucide-react';
import { MokaLogo } from './MokaLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useUserRole } from '@/hooks/useUserRole';

interface NavigationProps {
  onSearch: (query: string) => void;
}

export const Navigation = ({ onSearch }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { canManageContent } = useUserRole();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Brands', href: '/brands' },
    { name: 'About', href: '/about' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <MokaLogo size="xl" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            {user && canManageContent && (
              <Link 
                to="/admin" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1",
                  location.pathname === "/admin" ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Shield className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            )}
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Sign Out
              </Button>
            ) : (
              <Link 
                to="/auth" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === "/auth" ? "text-primary" : "text-muted-foreground"
                )}
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center space-x-2 max-w-sm w-full"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search cigars, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-primary/20 focus:border-primary"
              />
            </div>
            <Button type="submit" variant="luxury" size="sm">
              Search
            </Button>
          </form>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors px-2 py-1",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Admin Link */}
              {user && canManageContent && (
                <Link 
                  to="/admin" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1 px-2 py-1",
                    location.pathname === "/admin" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              )}

              {/* Mobile Auth */}
              {user ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary justify-start px-2"
                >
                  Sign Out
                </Button>
              ) : (
                <Link 
                  to="/auth" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                    location.pathname === "/auth" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
              
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search cigars, brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <Button type="submit" variant="luxury" size="sm">
                  Search
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};