import { Droplets, Hammer, Flower2, TreeDeciduous, Wrench, Plug, Pipette, Sprout } from 'lucide-react';
import irrigationImg from '@/assets/irrigation.jpg';
import waterFeatureImg from '@/assets/water-feature.jpg';
import interlockImg from '@/assets/interlock-tiles.jpg';
import outdoorImg from '@/assets/outdoor-garden.jpg';
import indoorPlantsImg from '@/assets/indoor-plants.jpg';
import heroImage from '@/assets/hero-landscape.jpg';

const services = [
  {
    icon: TreeDeciduous,
    title: 'Soft Landscaping',
    description: 'Natural grass turf, vibrant shrubs, and ornamental trees arranged to create a living masterpiece.',
    image: outdoorImg,
    area: 'md:col-span-2', // Featured wide item
    delay: 0
  },
  {
    icon: Hammer,
    title: 'Hard Landscaping',
    description: 'Structural elegance with premium tiles, interlock, and walkways.',
    image: interlockImg,
    area: 'md:col-span-1',
    delay: 100
  },
  {
    icon: Sprout,
    title: 'Indoor Greenery',
    description: 'Breathtaking indoor plant installations for styling interior spaces.',
    image: indoorPlantsImg, // Added image
    area: 'md:col-span-1',
    delay: 200
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation',
    description: 'Automated, water-efficient systems for sustainable growth.',
    image: irrigationImg,
    area: 'md:col-span-2', // Featured wide item
    delay: 300
  },
  {
    icon: Pipette,
    title: 'Water Features',
    description: 'Serene fountains and waterfalls.',
    image: waterFeatureImg,
    area: 'md:col-span-1',
    delay: 400
  },
  {
    icon: Wrench,
    title: 'Garden Care',
    description: 'Comprehensive maintenance & styling.',
    image: heroImage, // Using hero image as placeholder for maintenance context
    area: 'md:col-span-2', // Featured wide item
    delay: 500
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-background">
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }} />

      <div className="container-luxury relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4 font-bold">What We Offer</p>
            <h2 className="heading-section mb-6">Curated Landscape Services</h2>
            <p className="text-muted-foreground text-lg">
              We blend art and horticulture to deliver comprehensive solutions, from the initial soil preparation to the final flourish.
            </p>
          </div>
          {/* Visual Balance Line */}
          <div className="hidden md:block h-px bg-border flex-grow ml-12 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                group luxury-card relative overflow-hidden cursor-pointer
                ${service.area}
              `}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Glass Icon Bubble */}
                    <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white shadow-lg">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide shadow-sm">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description - Fades in/up on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-white/80 text-sm leading-relaxed pb-2 border-l-2 border-primary pl-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
