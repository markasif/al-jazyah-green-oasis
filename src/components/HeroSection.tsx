import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-landscape.jpg';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury landscaping in Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-primary-foreground px-4">
        <div className="animate-fade-up">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-primary-foreground/80">
            Since 2005 • Abu Dhabi, UAE
          </p>
          <h1 className="heading-display mb-6 text-primary-foreground">
            Adorning the <span className="italic">Green Life</span> of Yours
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90 font-light">
            Landscaping & Garden Designing • Indoor and Outdoor Plants Supply
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero"
            >
              Request a Quote
            </button>
            <button
              onClick={scrollToServices}
              className="btn-hero-outline"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-float"
          onClick={scrollToServices}
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
