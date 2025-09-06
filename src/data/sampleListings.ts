export interface Listing {
  id: string;
  title: string;
  price?: string;
  location: string;
  year?: string;
  image: string;
  description: string;
  category: 'Aircraft' | 'Engines' | 'Parts' | 'Services';
}

export const sampleListings: Listing[] = [
  // Aircraft
  {
    id: '1',
    title: '2018 Cessna Citation CJ3+',
    price: '$8,950,000',
    location: 'Dallas, TX',
    year: '2018',
    image: '/api/placeholder/400/300',
    description: 'Pristine condition Citation with full avionics package',
    category: 'Aircraft'
  },
  {
    id: '2', 
    title: '2020 Cirrus SR22T G6',
    price: '$895,000',
    location: 'Los Angeles, CA',
    year: '2020',
    image: '/api/placeholder/400/300',
    description: 'Low-time SR22T with G1000 NXi and CAPS system',
    category: 'Aircraft'
  },
  {
    id: '3',
    title: '1975 Beechcraft King Air 200',
    price: '$1,250,000',
    location: 'Miami, FL', 
    year: '1975',
    image: '/api/placeholder/400/300',
    description: 'Recently updated King Air with modern avionics',
    category: 'Aircraft'
  },
  
  // Engines
  {
    id: '4',
    title: 'PT6A-114A Turboprop Engine',
    price: '$750,000',
    location: 'Phoenix, AZ',
    image: '/api/placeholder/400/300',
    description: 'Overhauled PT6A with fresh hot section inspection',
    category: 'Engines'
  },
  {
    id: '5',
    title: 'Lycoming IO-540-K1G5',
    price: '$45,000',
    location: 'Denver, CO',
    image: '/api/placeholder/400/300', 
    description: 'Zero-time IO-540 with new accessories',
    category: 'Engines'
  },
  {
    id: '6',
    title: 'Continental TSIO-550-E',
    price: '$78,000',
    location: 'Seattle, WA',
    image: '/api/placeholder/400/300',
    description: 'Factory reman Continental with warranty',
    category: 'Engines'
  },

  // Parts
  {
    id: '7',
    title: 'Garmin G1000 NXi PFD',
    price: '$18,500',
    location: 'Atlanta, GA',
    image: '/api/placeholder/400/300',
    description: 'Like-new G1000 NXi primary flight display',
    category: 'Parts'
  },
  {
    id: '8',
    title: 'King Air 200 Landing Gear',
    price: '$125,000',
    location: 'Chicago, IL', 
    image: '/api/placeholder/400/300',
    description: 'Complete overhauled landing gear assembly',
    category: 'Parts'
  },
  {
    id: '9',
    title: 'Citation Cabin Interior Set',
    price: '$85,000',
    location: 'Las Vegas, NV',
    image: '/api/placeholder/400/300',
    description: 'Premium leather cabin interior for Citation CJ series',
    category: 'Parts'
  },

  // Services
  {
    id: '10',
    title: 'Annual Inspection Service',
    price: 'From $5,500',
    location: 'Oklahoma City, OK',
    image: '/api/placeholder/400/300',
    description: 'Comprehensive annual inspections by certified technicians',
    category: 'Services'
  },
  {
    id: '11',
    title: 'Avionics Installation',
    price: 'Quote Available',
    location: 'San Diego, CA',
    image: '/api/placeholder/400/300',
    description: 'Professional avionics installation and certification',
    category: 'Services'
  },
  {
    id: '12',
    title: 'Aircraft Paint & Interior',
    price: 'From $45,000',
    location: 'Wichita, KS',
    image: '/api/placeholder/400/300',
    description: 'Complete aircraft refurbishment and custom paint',
    category: 'Services'
  }
];

export const getListingsByCategory = (category: string) => {
  return sampleListings.filter(listing => listing.category === category);
};