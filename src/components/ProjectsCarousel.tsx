import { useNavigate } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const heroImage = "/image/hero-landscape_4.webp"; // Using existing assets for now
const outdoorGardenImg = "/image/outdoor-garden_8.webp";
const indoorPlantsImg = "/image/indoor-plants_5.webp";

const projects = [
    {
        id: 1,
        title: "The Royal Oasis Villa",
        location: "Saadiyat Island",
        description: "A comprehensive transformation featuring an infinity pool surround and tropical softscaping.",
        image: heroImage,
    },
    {
        id: 2,
        title: "Skyline Roof Garden",
        location: "Al Reem Island",
        description: "Modern minimalist rooftop sanctuary with drought-tolerant species and automated irrigation.",
        image: outdoorGardenImg,
    },
    {
        id: 3,
        title: "Corporate Green Atrium",
        location: "Global Market Square",
        description: "Interior plantscaping for a major headquarters, improving air quality and employee well-being.",
        image: indoorPlantsImg,
    },
    {
        id: 4,
        title: "Desert Zen Courtyard",
        location: "Al Ain",
        description: "Sustainable xeriscaping project blending native desert flora with contemporary hardscaping.",
        image: heroImage,
    },
];

const ProjectsCarousel = () => {
    const navigate = useNavigate();
    return (
        <section className="section-padding overflow-hidden bg-muted/30 relative">
            {/* Decorative Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-luxury relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Our Masterpieces</p>
                        <h2 className="heading-section">Featured Projects</h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-muted-foreground max-w-sm text-right">
                            Swipe to explore our award-winning transformations across the UAE.
                        </p>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 md:-ml-6">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-2/3">
                                <div className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl">
                                    {/* Background Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                                    {/* Content Overlay - Glass Effect within the slide */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end h-full">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-white/80 uppercase tracking-widest text-xs font-bold mb-2">
                                                {project.location}
                                            </p>
                                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/80 max-w-lg line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {project.description}
                                            </p>
                                            <button
                                                onClick={() => navigate('/gallery')}
                                                className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors">
                                                View Project Details <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-2 mt-8 px-4">
                        <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-white" />
                        <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default ProjectsCarousel;
