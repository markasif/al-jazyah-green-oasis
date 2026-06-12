import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container-luxury">
        <div className="grid md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/icons/logo.jpg"
                alt="Al Jazyah Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold">Al Jazyah</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">Trading</span>
              </div>
            </div>
            <p className="text-white/70 max-w-xs leading-relaxed">
              Adorning your green life with premium landscaping and plant supplies across the UAE.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Contact Us</h4>
            <div className="space-y-4 text-white/80">
              <a href="tel:+971507000913" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+971 50 700 0913</span>
              </a>
              <a href="mailto:info@aljazyahtrading.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@aljazyahtrading.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Shop 29, Mina Irani Market<br />Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} Al Jazyah Trading. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
