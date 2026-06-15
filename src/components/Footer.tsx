import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-foreground text-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 border-b border-white/10 pb-6 md:pb-8 lg:pb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/icons/logo.jpg"
                alt="Al Jazyah Logo"
                className="w-12 h-12 object-contain rounded-xl"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-white">Al Jazyah</span>
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-400/80 font-semibold">Trading</span>
              </div>
            </div>
            <p className="text-white/70 max-w-xs leading-relaxed text-sm">
              Adorning your green life with premium landscaping and plant supplies across the UAE.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-3 border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0">
            <h4 className="text-lg font-serif font-semibold text-white tracking-wide">Contact Us</h4>
            <div className="space-y-4 text-sm text-white/80">
              <a href="tel:+971507000913" className="flex items-center gap-3 hover:text-emerald-400 transition-colors group/contact">
                <div className="p-2 rounded-lg bg-white/5 group-hover/contact:bg-emerald-400/10 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400 group-hover/contact:scale-110 transition-transform" />
                </div>
                <span>+971 50 700 0913</span>
              </a>
              <a href="mailto:info@aljazyahtrading.com" className="flex items-center gap-3 hover:text-emerald-400 transition-colors group/contact">
                <div className="p-2 rounded-lg bg-white/5 group-hover/contact:bg-emerald-400/10 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400 group-hover/contact:scale-110 transition-transform" />
                </div>
                <span>info@aljazyahtrading.com</span>
              </a>
              <div className="flex items-start gap-3 group/contact">
                <div className="p-2 rounded-lg bg-white/5 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="leading-relaxed">Mina Irani Market<br />Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3 border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0 md:border-t-0 md:pt-0">
            <h4 className="text-lg font-serif font-semibold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'About Us', href: '/about' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group/link"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 group-hover/link:bg-emerald-400 group-hover/link:scale-125 transition-all duration-300" />
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 pt-6 md:pt-8">
          <p>© {currentYear} Al Jazyah Trading. All rights reserved.</p>
          <p>
            Designed & Powered by{" "}
            <a
              href="https://my-portfolio-4x77.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 underline underline-offset-4 transition-colors font-medium"
            >
              Creative One
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
