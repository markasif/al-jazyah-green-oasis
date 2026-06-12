import { ArrowRight } from 'lucide-react';
const projectImage = '/image/outdoor-garden_8.webp';

const FeaturedProject = () => {
    return (
        <section className="relative h-[80vh] flex items-center overflow-hidden">
            {/* Parallax Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={projectImage}
                    alt="Featured Luxury Villa Landscape"
                    className="w-full h-full object-cover attachment-fixed grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container-luxury relative z-10 text-white">
                <div className="max-w-2xl">
                    <p className="text-sm md:text-base uppercase tracking-[0.25em] mb-4 text-white/90 font-semibold animate-fade-up">
                        Featured Masterpiece
                    </p>
                    <h2 className="heading-display mb-6 text-white text-5xl md:text-7xl leading-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
                        The Royal <span className="italic font-light">Oasis</span> Villa
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
                        A comprehensive transformation in Saadiyat, featuring an infinity pool surround, tropical softscaping, and automated ambient lighting.
                    </p>

                    <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        View Case Study <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;
