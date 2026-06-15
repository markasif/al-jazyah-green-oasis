import { Calendar, PenTool, Shovel, HeartHandshake } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const steps = [
    {
        icon: HeartHandshake,
        title: "Consultation",
        description: "We meet to listen to your vision, understand your space, and discuss your lifestyle needs."
    },
    {
        icon: PenTool,
        title: "Design & Plan",
        description: "Our architects create detailed 3D renders and plans to visualize your future sanctuary."
    },
    {
        icon: Shovel,
        title: "Execution",
        description: "Our skilled team handles everything from hardscaping infrastructure to softscaping planting."
    },
    {
        icon: Calendar,
        title: "Care & Grow",
        description: "We provide ongoing maintenance to ensure your garden thrives and matures beautifully."
    }
];

const ProcessSection = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Creative S-Curve Path Background (Desktop) */}
            <div className="hidden lg:block absolute top-[60%] left-0 w-full -translate-y-1/2 z-0 opacity-20 pointer-events-none text-primary">
                <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"
                        d="M0,160 C320,300 420,300 720,160 C1020,20 1120,20 1440,160" />
                </svg>
            </div>

            <div className="container-luxury relative z-10">
                <SectionHeading
                    subtitle="Our Journey"
                    title="From Vision to Reality"
                    rightElement={
                        <div className="hidden md:block self-end mb-2">
                            <p className="text-muted-foreground max-w-sm text-right text-lg">
                                A seamless, creative journey tailored to transform your outdoor living.
                            </p>
                        </div>
                    }
                />

                <div className="grid md:grid-cols-4 gap-2 md:gap-4 lg:gap-6 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Dot */}
                            <div className="hidden lg:block absolute top-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-20 border-4 border-white shadow-sm" />

                            {/* Creative Card */}
                            <div className={`
                 luxury-card p-8 h-full text-center flex flex-col items-center z-10 
                 transition-all duration-500 hover:-translate-y-3
                 ${index % 2 === 0 ? 'lg:translate-y-12' : 'lg:-translate-y-12'} 
              `}>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm border border-primary/10">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Step Number Background */}
                                <div className="absolute -bottom-4 -right-4 text-7xl font-serif font-bold text-primary/5 select-none transition-colors group-hover:text-primary/10">
                                    0{index + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
