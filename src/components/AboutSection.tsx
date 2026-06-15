import { Award, Users, Leaf, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const stats = [
  { icon: Clock, value: '20+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Leaf, value: '1000+', label: 'Projects Completed' },
  { icon: Award, value: '100%', label: 'Client Satisfaction' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 relative">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <SectionHeading
              subtitle="Our Heritage"
              title="Transforming Abu Dhabi's Urban Landscape Since 2005"
              subtitleColor="secondary"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Al Jazyah Trading, we believe that every space has the potential to become 
              a green sanctuary. For over two decades, we have been at the forefront of 
              landscaping and garden design in Abu Dhabi, bringing life, color, and serenity 
              to homes, businesses, and public spaces.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive approach covers everything from delicate garden design to 
              robust infrastructure work, including carpentry, plumbing, electrical, and 
              irrigation systems. We don't just plant gardens—we create living ecosystems 
              that thrive in the UAE's unique climate.
            </p>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-4 border-secondary italic text-foreground font-serif text-lg">
              "A garden is a silent loyal friend & a great listener."
              <div className="mt-2 text-sm text-muted-foreground not-italic font-sans">
                — Al Jazyah Motto
              </div>
            </blockquote>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-full bg-accent mb-4">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="mt-20 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Why Choose Al Jazyah?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary">01</span>
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">End-to-End Solutions</h4>
              <p className="text-muted-foreground text-sm">
                From initial design to ongoing maintenance, we handle every aspect of your landscaping needs.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary">02</span>
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Climate Expertise</h4>
              <p className="text-muted-foreground text-sm">
                Two decades of experience in UAE's climate means we know exactly what thrives here.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary">03</span>
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Quality Craftsmanship</h4>
              <p className="text-muted-foreground text-sm">
                Skilled artisans ensuring every detail from tiles to irrigation is executed flawlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
