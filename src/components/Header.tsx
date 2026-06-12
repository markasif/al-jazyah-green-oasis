import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Track active section/page based on scroll intersection
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname === '/about') setActiveSection('about');
      if (location.pathname === '/gallery') setActiveSection('gallery');
      return;
    }

    const sections = ['home', 'services', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isNavigating) {
            setActiveSection(id);
          }
        },
        { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [location.pathname, isNavigating]);

  const handleNavigation = (id: string, path?: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 1000); // lock observer updates during smooth scroll

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
    { label: 'Home', id: 'home', path: '/' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery', path: '/gallery' },
    { label: 'About', id: 'about', path: '/about' },
    { label: 'Contact', id: 'contact' },
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
          <img
            src="/icons/logo.jpg"
            alt="Al Jazyah Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
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
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.id, item.path)}
                className={`relative text-sm font-medium tracking-wide transition-all pb-1.5 ${
                  isActive
                    ? (isScrolled ? 'text-primary font-semibold' : 'text-white font-semibold')
                    : (isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/80 hover:text-white')
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? 'bg-primary' : 'bg-white'
                    }`}
                  />
                )}
              </button>
            );
          })}
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
          <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/logo.jpg"
                  alt="Al Jazyah Logo"
                  className="w-8 h-8 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-foreground leading-none text-base">Al Jazyah</span>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">Green Oasis</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 py-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.id, item.path)}
                    className={`text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 text-base flex justify-between items-center ${
                      isActive
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="space-y-6 border-t border-border pt-6">
            <Button
              onClick={() => handleNavigation('contact')}
              className="w-full rounded-xl bg-primary text-white hover:bg-primary/90 py-6 text-base font-semibold shadow-md"
            >
              Get Quote
            </Button>
            
            {/* Quick Contacts inside sidebar */}
            <div className="space-y-3 text-xs text-muted-foreground">
              <p className="font-semibold uppercase tracking-wider text-[10px] text-foreground">Contact Info</p>
              <a href="tel:+971507000913" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span>📞 +971 50 700 0913</span>
              </a>
              <p className="flex items-center gap-2">
                <span>📍 Mina Irani Market, Abu Dhabi</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
