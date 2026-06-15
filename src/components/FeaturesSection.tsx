import { Award, Users, Leaf, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FeaturesSection = () => {
    return (
        <section className="section-padding relative">
            <div className="container-luxury">
                <SectionHeading
                    subtitle="Why Us"
                    title="Why Choose Al Jazyah?"
                    description="We combine decades of expertise with a passion for green living to creating sustainable outdoor masterpieces."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                    <div className="luxury-card p-8 text-center bg-white group hover:bg-white/50 transition-colors">
                        <div className="icon-wrapper w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                            <Clock className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">20+ Years</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Of industry experience in the UAE market.
                        </p>
                    </div>

                    <div className="luxury-card p-8 text-center bg-white group hover:bg-white/50 transition-colors">
                        <div className="icon-wrapper w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                            <Users className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">500+ Clients</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Trusted by homeowners and businesses alike.
                        </p>
                    </div>

                    <div className="luxury-card p-8 text-center bg-white group hover:bg-white/50 transition-colors">
                        <div className="icon-wrapper w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                            <Leaf className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Eco-Friendly</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Sustainable practices for a greener future.
                        </p>
                    </div>

                    <div className="luxury-card p-8 text-center bg-white group hover:bg-white/50 transition-colors">
                        <div className="icon-wrapper w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                            <Award className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Certified</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Award-winning designs and execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
