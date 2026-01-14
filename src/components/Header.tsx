import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string, path?: string) => {
    setIsMobileMenuOpen(false);

    // If it's a page route (About, Gallery)
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
      return;
    }

    // Interior scroll links (Home, Services, Contact)
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', id: 'home', path: '/' }, // Handle as special case
    { label: 'About', id: 'about', path: '/about' },
    { label: 'Services', id: 'services' }, // Scroll to section
    { label: 'Gallery', id: 'gallery', path: '/gallery' },
    { label: 'Contact', id: 'contact' }, // Scroll to section
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigation('home', '/')}
        >
          <div className="relative">
            <Leaf
              className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'
                }`}
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'
              }`}>
              Al Jazyah
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
              Green Oasis
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.id, item.path)}
              className={`text-sm font-medium tracking-wide transition-all hover:opacity-70 ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavigation('contact')}
            className={`rounded-full px-6 font-semibold transition-all duration-300 ${isScrolled
              ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
              : 'bg-white text-primary hover:bg-white/90'
              }`}
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-xl animate-fade-in-down">
          <nav className="container-luxury py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.id, item.path)}
                className="text-left font-medium py-3 px-4 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 mt-2">
              <Button
                onClick={() => handleNavigation('contact')}
                className="w-full rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
