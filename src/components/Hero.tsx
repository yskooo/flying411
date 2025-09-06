import { Search } from 'lucide-react';
import heroCockpit from '../assets/hero-cockpit.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
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

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Your Global Aviation Marketplace
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Buy and sell aircraft, engines, parts, and aviation services worldwide with confidence and expertise.
            </p>
          </div>

          {/* Centered Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-6 space-y-4 max-w-4xl mx-auto">
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
            <button className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2 mx-auto">
              <Search className="w-5 h-5" />
              <span>Search Aviation Marketplace</span>
            </button>
          </div>

          {/* Stats Badge */}
          <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full text-lg font-medium">
            10,000+ Premium Listings
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;