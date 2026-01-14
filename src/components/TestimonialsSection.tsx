import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "The transformation of our villa garden is nothing short of magical. The team understood exactly what we wanted—a modern yet lush retreat.",
        author: "Fatima Al Mansouri",
        location: "Khalifa City A",
        rating: 5
    },
    {
        quote: "Professional, timely, and incredibly creative. The irrigation system they installed has saved us so much water while keeping the lawn perfect.",
        author: "James Anderson",
        location: "Saadiyat Island",
        rating: 5
    },
    {
        quote: "From the initial 3D design to the final planting, the attention to detail was impressive. Highly recommended for anyone wanting a premium garden.",
        author: "Mohammed Al Qubaisi",
        location: "Al Raha Gardens",
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="section-padding bg-background relative">
            <div className="container-luxury">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Client Stories</p>
                        <h2 className="heading-section">Trusted by Abu Dhabi Families</h2>
                    </div>
                    <div className="hidden md:block h-px bg-border flex-grow ml-12 mb-4" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="luxury-card p-8 md:p-10 flex flex-col">
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-muted-foreground italic leading-relaxed mb-8 flex-grow">
                                "{testimonial.quote}"
                            </p>

                            <div className="border-t border-border/40 pt-6 mt-auto">
                                <h4 className="font-serif text-lg font-bold text-foreground">
                                    {testimonial.author}
                                </h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                                    {testimonial.location}
                                </p>
                                <div className="flex gap-1 mt-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-sm">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
