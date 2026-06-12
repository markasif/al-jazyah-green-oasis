const heroImage = '/image/hero-landscape_4.webp';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    navigate('/gallery#products');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        <video
          key="hero-video-local"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          preload="auto"
          className="w-full h-full object-cover animate-scale-in"
        >
          <source src="/video/hero-video.webm" type="video/webm" />
          <source src="/video/hero-video.mp4" type="video/mp4" />
          <track kind="captions" src="" label="No audio captions" />
          {/* Fallback Image */}
          <img
            src={heroImage}
            alt="Luxury landscaping in Abu Dhabi"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Premium Overlay - Kept consistent but optimized for video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-primary-foreground px-4 pt-32">
        <div className="animate-fade-up">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-primary-foreground/90 font-semibold">
            Since 2005 • Abu Dhabi, UAE
          </p>
          <h1 className="heading-display mb-6 text-primary-foreground drop-shadow-md">
            Adorning the <span className="italic">Green Life</span> of Yours
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/95 font-light leading-relaxed">
            Landscaping & Garden Designing • Indoor and Outdoor Plants Supply
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
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
              onClick={handleExplore}
              className="btn-hero-outline"
            >
              Explore Products
            </button>
          </div>

          {/* Mouse Scroll Indicator - Positioned in flow to prevent overlap */}
          <div
            className="mt-16 flex justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={scrollToServices}
          >
            <div className="mouse-indicator">
              <div className="mouse-wheel" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave/Gradient REMOVED as per user request */}
    </section>
  );
};

export default HeroSection;
