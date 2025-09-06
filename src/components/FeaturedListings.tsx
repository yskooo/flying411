import { useState } from 'react';
import { sampleListings, getListingsByCategory } from '../data/sampleListings';
import { MapPin, Calendar, ArrowRight, Phone } from 'lucide-react';

const FeaturedListings = () => {
  const [activeTab, setActiveTab] = useState('Aircraft');
  const tabs = ['Aircraft', 'Engines', 'Parts', 'Services'];

  const currentListings = getListingsByCategory(activeTab);

  return (
    <section id="featured" className="py-12 lg:py-16 bg-surface" style={{ marginTop: '50px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-display text-foreground mb-4">Featured Listings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium aircraft, engines, parts, and services from verified sellers worldwide.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-background text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentListings.map((listing) => (
            <div key={listing.id} className="card-clean group cursor-pointer">
              <div className="aspect-[4/3] bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {listing.title}
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">{listing.price}</span>
                      {listing.year && (
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{listing.year}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{listing.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {listing.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-border">
                  <button className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors w-full sm:w-auto">
                    <span className="font-medium text-sm">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="btn-accent flex items-center justify-center space-x-2 text-sm px-4 py-2 w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All {activeTab}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;