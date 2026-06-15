import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Award, Users, Leaf, Clock, Sprout, Palette, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
const heroImage = '/image/hero-landscape_4.webp';

const stats = [
    { icon: Clock, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Leaf, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' },
];

const About = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Mini Hero - Updated to match Home Hero Style */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="About Al Jazyah"
                        className="w-full h-full object-cover animate-scale-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
                </div>
                <div className="relative z-10 container-luxury text-center px-4 animate-fade-up">
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90 font-semibold">
                        The Al Jazyah Story
                    </p>
                    <h1 className="heading-display mb-6 text-white drop-shadow-md">
                        Weaving <span className="italic">Nature</span> into Urban Life
                    </h1>
                    <p className="text-lg md:text-xl text-white/95 font-light max-w-2xl mx-auto leading-relaxed">
                        More than landscapers, we are architects of serenity. Transforming arid spaces into thriving, sustainable ecosystems since 2005.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding relative">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                        {/* Valid Semantic Content */}
                        <div className="animate-fade-up">
                            <SectionHeading
                                subtitle="Our Heritage"
                                title="Transforming Abu Dhabi's Urban Landscape"
                            />
                            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                At Al Jazyah Trading, we believe that every space has the potential to become
                                a green sanctuary. For over two decades, we have been at the forefront of
                                landscaping and garden design in Abu Dhabi, bringing life, color, and serenity
                                to homes, businesses, and public spaces.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                                Our comprehensive approach covers everything from delicate garden design to
                                robust infrastructure work, including carpentry, plumbing, electrical, and
                                irrigation systems. We don't just plant gardens—we create living ecosystems
                                that thrive in the UAE's unique climate.
                            </p>

                            <blockquote className="relative pl-6 border-l-4 border-primary italic text-foreground font-serif text-xl">
                                "A garden is a silent loyal friend & a great listener."
                                <div className="mt-2 text-sm text-muted-foreground not-italic font-sans font-semibold">
                                    — Al Jazyah Motto
                                </div>
                            </blockquote>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="luxury-card p-8 text-center group"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="inline-flex p-4 rounded-full bg-primary/5 mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <stat.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mission & Vision Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mb-24">
                        {/* Mission */}
                        <div className="luxury-card p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-125" />
                            <h3 className="font-serif text-3xl font-bold mb-4 text-primary relative z-10">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed relative z-10">
                                To enhance the quality of life in Abu Dhabi by creating sustainable, breathtaking outdoor living spaces that blend modern aesthetics with the restorative power of nature. We aim to be the region's most trusted partner in landscape innovation.
                            </p>
                        </div>
                        {/* Vision */}
                        <div className="luxury-card p-10 relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-tr-full transition-transform duration-500 group-hover:scale-125" />
                            <h3 className="font-serif text-3xl font-bold mb-4 text-secondary relative z-10">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed relative z-10">
                                To envision a greener UAE where every urban structure is complemented by thriving flora. We strive to set new benchmarks in horticultural excellence and sustainable landscaping practices across the Middle East.
                            </p>
                        </div>
                    </div>

                    {/* Our Design Philosophy */}
                    <div className="text-center md:px-20">
                        <h2 className="heading-section mb-12">Our Design Philosophy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
                            {[
                                {
                                    icon: Leaf,
                                    title: 'Harmony',
                                    desc: 'Creating landscapes that seamlessly blend with the natural environment and local ecosystem.'
                                },
                                {
                                    icon: Sprout,
                                    title: 'Innovation',
                                    desc: 'Pioneering sustainable techniques and modern design languages for the future of Abu Dhabi.'
                                },
                                {
                                    icon: ShieldCheck,
                                    title: 'Legacy',
                                    desc: 'Building enduring outdoor spaces that grow more beautiful with time, serving generations.'
                                }
                            ].map((value, i) => (
                                <div key={i} className="luxury-card p-8 hover:-translate-y-2 transition-transform duration-500 group">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <h4 className="font-serif text-xl font-bold mb-3">{value.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default About;
