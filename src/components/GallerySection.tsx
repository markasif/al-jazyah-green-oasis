import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
const indoorPlantsImg = '/image/indoor-plants_5.webp';
const outdoorGardenImg = '/image/outdoor-garden_8.webp';
const irrigationImg = '/image/irrigation_7.webp';
const waterFeatureImg = '/image/water-feature_9.webp';

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

const categories = ['All', 'Indoor Statement Pieces', 'Outdoor Hardies', 'Natural Grass Turf', 'Decorative Elements'];

const maintenanceBadgeVariant = (level: MaintenanceLevel) => {
  switch (level) {
    case 'Low':
      return 'bg-secondary/20 text-secondary border-secondary/30';
    case 'Medium':
      return 'bg-amber-500/20 text-amber-700 border-amber-500/30';
    case 'High':
      return 'bg-destructive/20 text-destructive border-destructive/30';
    default:
      return '';
  }
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPlants = activeCategory === 'All' 
    ? plants 
    : plants.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">The Living Canvas</p>
          <h2 className="heading-section text-foreground mb-4">Al Jazyah's Garden Boutique</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of plants, landscaping solutions, and garden features 
            designed to thrive in Abu Dhabi's unique environment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent text-accent-foreground hover:bg-accent/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {plant.category}
                  </span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${maintenanceBadgeVariant(plant.maintenance)}`}
                  >
                    {plant.maintenance} Care
                  </Badge>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {plant.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plant.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
