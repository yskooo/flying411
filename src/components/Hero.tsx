import { Search } from 'lucide-react';
import heroCockpit from '../assets/hero-cockpit.jpg';

const Hero = () => {
  return (
    <>
      {/* Video Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/-zEjnJmitXw?autoplay=1&mute=1&loop=1&playlist=-zEjnJmitXw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover"
            style={{ 
              width: '100vw', 
              height: '100vh',
              transform: 'scale(1.2)',
              transformOrigin: 'center center'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Centered Title Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Your Global Aviation Marketplace
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                Buy and sell aircraft, engines, parts, and aviation services worldwide with confidence and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-16 pb-12 pt-16 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border rounded-lg p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <select className="search-field w-full rounded-md">
                  <option value="">Category</option>
                  <option value="aircraft">Aircraft</option>
                  <option value="engines">Engines</option>
                  <option value="parts">Parts</option>
                  <option value="services">Services</option>
                </select>
              </div>
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Make, model, or keyword — e.g. Cessna 172"
                  className="search-field w-full rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City, country or radius"
                  className="search-field w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Aviation Marketplace</span>
              </button>
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                10,000+ Premium Listings
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;