import { Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary-foreground" />
            <span className="font-serif text-xl font-bold text-primary-foreground">
              Al Jazyah Trading
            </span>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm text-center">
            © {currentYear} Al Jazyah Trading. All rights reserved.
          </p>

          {/* Tagline */}
          <p className="text-primary-foreground/60 text-sm italic">
            Adorning the green life of yours
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
