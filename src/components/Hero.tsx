import { Search } from 'lucide-react';
import heroCockpit from '../assets/hero-cockpit.jpg';

const Hero = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-hero text-foreground">
                Your Global Aviation Marketplace
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Buy and sell aircraft, engines, parts, and aviation services worldwide with confidence and expertise.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-surface border border-border rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <select className="search-field w-full rounded-l-md md:rounded-l-md">
                    <option value="">Category</option>
                    <option value="aircraft">Aircraft</option>
                    <option value="engines">Engines</option>
                    <option value="parts">Parts</option>
                    <option value="services">Services</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Make, model, or keyword — e.g. Cessna 172"
                    className="search-field w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City, country or radius"
                    className="search-field w-full rounded-r-md md:rounded-r-none"
                  />
                </div>
              </div>
              <button className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Aviation Marketplace</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-surface border border-border rounded-lg overflow-hidden">
              <img
                src={heroCockpit}
                alt="Premium aircraft cockpit view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium">
              10,000+ Listings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;