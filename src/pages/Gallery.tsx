import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Badge } from '@/components/ui/badge';
import indoorPlantsImg from '@/assets/indoor-plants.jpg';
import outdoorGardenImg from '@/assets/outdoor-garden.jpg';
import irrigationImg from '@/assets/irrigation.jpg';
import waterFeatureImg from '@/assets/water-feature.jpg';
import heroImage from '@/assets/hero-landscape.jpg';
import interlockImg from '@/assets/interlock-tiles.jpg';
import beforeGardenImg from '@/assets/before_garden.png';
import afterGardenImg from '@/assets/after_garden.png';
import galleryHeroImg from '@/assets/gallery-hero.jpg';
import BeforeAfter from '@/components/BeforeAfter';

type MaintenanceLevel = 'Low' | 'Medium' | 'High';

interface Plant {
    id: number;
    name: string;
    category: string;
    image: string;
    maintenance: MaintenanceLevel;
    description: string;
}

const plants: Plant[] = [
    {
        id: 1,
        name: 'Bird of Paradise',
        category: 'Indoor Statement Pieces',
        image: indoorPlantsImg,
        maintenance: 'Medium',
        description: 'Dramatic tropical plant with stunning orange and blue flowers.',
    },
    {
        id: 2,
        name: 'Natural Turf Garden',
        category: 'Natural Grass Turf',
        image: outdoorGardenImg,
        maintenance: 'Medium',
        description: 'Lush green lawn perfect for the UAE climate with proper irrigation.',
    },
    {
        id: 3,
        name: 'Monstera Deliciosa',
        category: 'Indoor Statement Pieces',
        image: indoorPlantsImg,
        maintenance: 'Low',
        description: 'Iconic split-leaf plant that adds tropical elegance to any space.',
    },
    {
        id: 4,
        name: 'Garden Water Feature',
        category: 'Decorative Elements',
        image: waterFeatureImg,
        maintenance: 'Low',
        description: 'Elegant fountain installations for a serene garden atmosphere.',
    },
    {
        id: 5,
        name: 'Hardy Outdoor Shrubs',
        category: 'Outdoor Hardies',
        image: outdoorGardenImg,
        maintenance: 'Low',
        description: 'Drought-resistant shrubs perfect for Abu Dhabi\'s climate.',
    },
    {
        id: 6,
        name: 'Irrigation Systems',
        category: 'Garden Infrastructure',
        image: irrigationImg,
        maintenance: 'Low',
        description: 'Smart irrigation solutions for efficient water management.',
    },
];

const categories = ['All', 'Indoor Statement Pieces', 'Outdoor Hardies', 'Natural Grass Turf', 'Decorative Elements', 'Garden Infrastructure'];

const maintenanceBadgeVariant = (level: MaintenanceLevel) => {
    switch (level) {
        case 'Low':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'Medium':
            return 'bg-amber-100 text-amber-800 border-amber-200';
        case 'High':
            return 'bg-red-100 text-red-800 border-red-200';
        default:
            return '';
    }
};

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#products') {
            const element = document.getElementById('products');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const filteredPlants = activeCategory === 'All'
        ? plants
        : plants.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Mini Hero - Updated to match Home Hero Style */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={galleryHeroImg}
                        alt="Our Projects Gallery"
                        className="w-full h-full object-cover animate-scale-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
                </div>
                <div className="relative z-10 container-luxury text-center px-4 animate-fade-up">
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90 font-semibold">
                        Our Portfolio
                    </p>
                    <h1 className="heading-display mb-6 text-white drop-shadow-md">
                        Where <span className="italic">Design</span> Meets Nature
                    </h1>
                    <p className="text-lg md:text-xl text-white/95 font-light max-w-2xl mx-auto leading-relaxed">
                        A curated collection of our most breathtaking transformations. From private desert oases to sprawling corporate greens.
                    </p>
                </div>
            </section>

            {/* Transformation Showcase - Before & After */}
            <section className="py-20 bg-background">
                <div className="container-luxury mb-12">
                    <div className="text-center"> {/* Centered for this section specifically as it spans full width generally, but let's keep it consistent or leave as center if best */}
                        {/* Actually, user requested "same design look" which implies left align. BUT Before/After is often central. Let's try standard left align for consistency request. */}
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <p className="uppercase tracking-widest text-primary text-sm font-bold mb-3">See the Difference</p>
                                <h2 className="heading-section text-foreground">Transforming Spaces</h2>
                            </div>
                            <div className="hidden md:block h-px bg-border flex-grow ml-12 mb-4" />
                        </div>
                    </div>
                </div>
                <div className="container-luxury">
                    <BeforeAfter
                        beforeImage={beforeGardenImg}
                        afterImage={afterGardenImg}
                        beforeLabel="Before: Barren Plot"
                        afterLabel="After: Tropical Oasis"
                    />
                </div>
            </section>



            {/* Gallery Grid Section */}
            <section id="products" className="py-20 bg-background">
                <div className="container-luxury">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-white text-muted-foreground hover:bg-gray-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPlants.map((plant) => (
                            <div key={plant.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Badge className={maintenanceBadgeVariant(plant.maintenance)}>
                                        {plant.maintenance}
                                    </Badge>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white/80 text-xs uppercase tracking-wider mb-2">{plant.category}</p>
                                    <h3 className="text-2xl font-serif text-white mb-2">{plant.name}</h3>
                                    <p className="text-white/90 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {plant.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Gallery;
