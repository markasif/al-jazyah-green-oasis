import { Droplets, Hammer, Flower2, TreeDeciduous, Wrench, Plug, Pipette } from 'lucide-react';
import irrigationImg from '@/assets/irrigation.jpg';
import waterFeatureImg from '@/assets/water-feature.jpg';
import interlockImg from '@/assets/interlock-tiles.jpg';
import outdoorImg from '@/assets/outdoor-garden.jpg';

const services = [
  {
    icon: TreeDeciduous,
    title: 'Soft Landscaping',
    description: 'Natural grass turf, plants, shrubs, and ornamental trees to bring life to your outdoor spaces.',
    image: outdoorImg,
  },
  {
    icon: Hammer,
    title: 'Hard Landscaping',
    description: 'Tiles work, interlock fixing, pathways, and structural garden elements built to last.',
    image: interlockImg,
  },
  {
    icon: Droplets,
    title: 'Irrigation Systems',
    description: 'Efficient drip and sprinkler systems designed to keep your garden thriving in the UAE climate.',
    image: irrigationImg,
  },
  {
    icon: Pipette,
    title: 'Water Features',
    description: 'Elegant fountains, ponds, and cascading water elements for a serene ambiance.',
    image: waterFeatureImg,
  },
  {
    icon: Flower2,
    title: 'Indoor Plants',
    description: 'Curated collection of statement plants to transform your interior spaces.',
    image: null,
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Complete garden care including plumbing, electrical, and carpentry services.',
    image: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-luxury relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">What We Offer</p>
          <h2 className="heading-section text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we deliver comprehensive landscaping solutions 
            tailored to the unique demands of Abu Dhabi's climate and aesthetic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-accent to-muted flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-secondary/50" />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <service.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
