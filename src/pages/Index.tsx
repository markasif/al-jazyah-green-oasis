import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import ProcessSection from '@/components/ProcessSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />

      {/* Featured Collection Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Curated Collection</p>
              <h2 className="heading-section">Signature Flora</h2>
            </div>
            <button onClick={() => navigate('/gallery#products')} className="group flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
              Explore Full Gallery <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Indoor Statement',
                name: 'Bird of Paradise',
                image: '/image/indoor-plants_5.webp',
              },
              {
                title: 'Natural Turf',
                name: 'Signature Lawn',
                image: '/image/outdoor-garden_8.webp',
              },
              {
                title: 'Decorative Feature',
                name: 'Water Sanctuary',
                image: '/image/water-feature_9.webp',
              },
            ].map((item, index) => (
              <button onClick={() => navigate('/gallery#products')} key={index} className="group luxury-card block overflow-hidden text-left w-full">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2">{item.title}</p>
                    <h3 className="font-serif text-2xl">{item.name}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProjectsCarousel />
      <ProcessSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
