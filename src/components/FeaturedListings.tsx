import { useState } from 'react';
import { sampleListings, getListingsByCategory } from '../data/sampleListings';
import { MapPin, Calendar, ArrowRight, Phone } from 'lucide-react';

const FeaturedListings = () => {
  const [activeTab, setActiveTab] = useState('Aircraft');
  const tabs = ['Aircraft', 'Engines', 'Parts', 'Services'];

  const currentListings = getListingsByCategory(activeTab);

  return (
    <section id="featured" className="py-16 lg:py-24 bg-surface">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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
                  <h3 className="text-subheading text-foreground mb-2 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">{listing.price}</span>
                    <div className="flex items-center space-x-4">
                      {listing.year && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{listing.year}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{listing.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {listing.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="btn-accent flex items-center space-x-2">
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