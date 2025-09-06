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
    description: 'Immaculate Citation CJ3+ with only 850 flight hours. Features Garmin G3000 glass cockpit, fully enclosed lavatory, refreshment center, and premium leather interior. Annual inspection current through 2025.',
    category: 'Aircraft'
  },
  {
    id: '2', 
    title: '2020 Cirrus SR22T G6',
    price: '$895,000',
    location: 'Los Angeles, CA',
    year: '2020',
    image: '/api/placeholder/400/300',
    description: 'Exceptional SR22T G6 with 320 total time. Equipped with Perspective+ avionics, synthetic vision technology, air conditioning, and TKS ice protection. Complete logbooks and perfect maintenance history.',
    category: 'Aircraft'
  },
  {
    id: '3',
    title: '1975 Beechcraft King Air 200',
    price: '$1,250,000',
    location: 'Miami, FL', 
    year: '1975',
    image: '/api/placeholder/400/300',
    description: 'Completely remanufactured King Air 200 with 4,200 TTAF. Recent PT6A-41 engine overhauls, Pro Line 21 avionics upgrade, new paint and interior. Ideal for charter or corporate use.',
    category: 'Aircraft'
  },
  {
    id: '13',
    title: '2019 Diamond DA40 NG',
    price: '$485,000',
    location: 'Phoenix, AZ',
    year: '2019',
    image: '/api/placeholder/400/300',
    description: 'Modern training aircraft with G1000 NXi, autopilot, and diesel engine efficiency. Perfect for flight schools or personal use with exceptional fuel economy and modern avionics.',
    category: 'Aircraft'
  },
  {
    id: '14',
    title: '2021 Piper M350',
    price: '$1,195,000',
    location: 'Seattle, WA',
    year: '2021',
    image: '/api/placeholder/400/300',
    description: 'Nearly new M350 with advanced G3000 touchscreen avionics, known ice certification, and pressurized cabin. Features premium interior, five-blade Hartzell propeller, and comprehensive warranty coverage.',
    category: 'Aircraft'
  },
  {
    id: '15',
    title: '2017 Mooney Acclaim Ultra',
    price: '$695,000',
    location: 'Austin, TX',
    year: '2017',
    image: '/api/placeholder/400/300',
    description: 'High-performance Acclaim Ultra with turbocharged continental engine. G1000 NXi avionics, TKS ice protection, and known for exceptional speed and efficiency. Meticulously maintained with complete records.',
    category: 'Aircraft'
  },
  
  // Engines
  {
    id: '4',
    title: 'PT6A-114A Turboprop Engine',
    price: '$750,000',
    location: 'Phoenix, AZ',
    image: '/api/placeholder/400/300',
    description: 'Factory overhauled PT6A-114A with zero hours since major overhaul. Includes fresh hot section inspection, new accessories, and comprehensive 2-year warranty. Complete with all logbooks and 8130 forms.',
    category: 'Engines'
  },
  {
    id: '5',
    title: 'Lycoming IO-540-K1G5',
    price: '$45,000',
    location: 'Denver, CO',
    image: '/api/placeholder/400/300', 
    description: 'Brand new IO-540-K1G5 engine with zero time since new. Features fuel injection, 300 HP output, and comes with new Hartzell constant speed propeller. Perfect for Piper Saratoga or Cherokee Six applications.',
    category: 'Engines'
  },
  {
    id: '6',
    title: 'Continental TSIO-550-E',
    price: '$78,000',
    location: 'Seattle, WA',
    image: '/api/placeholder/400/300',
    description: 'Factory remanufactured Continental TSIO-550-E with turbocharging system. 310 HP rated with intercooling and dual magnetos. Includes 2-year unlimited warranty and complete installation kit.',
    category: 'Engines'
  },
  {
    id: '16',
    title: 'Rolls-Royce 250-C30R/3',
    price: '$425,000',
    location: 'Houston, TX',
    image: '/api/placeholder/400/300',
    description: 'Freshly overhauled RR250 turboshaft engine for helicopter applications. 650 SHP rating with FADEC control system. Includes all accessories, mount hardware, and comprehensive test cell data.',
    category: 'Engines'
  },
  {
    id: '17',
    title: 'Pratt & Whitney JT15D-5',
    price: '$1,850,000',
    location: 'Kansas City, MO',
    image: '/api/placeholder/400/300',
    description: 'Low-time JT15D-5 turbojet engine from Citation fleet. 2,900 lbf thrust with exceptional fuel efficiency. Recently completed C-check with all ADs complied. Ideal for Citation CJ series aircraft.',
    category: 'Engines'
  },
  {
    id: '18',
    title: 'Rotax 912ULS Sport Engine',
    price: '$22,500',
    location: 'Orlando, FL',
    image: '/api/placeholder/400/300',
    description: 'Light sport aircraft engine with 650 hours total time. Features dual ignition, integrated gearbox, and excellent reliability record. Complete with engine mount and all accessories for LSA installation.',
    category: 'Engines'
  },

  // Parts
  {
    id: '7',
    title: 'Garmin G1000 NXi PFD',
    price: '$18,500',
    location: 'Atlanta, GA',
    image: '/api/placeholder/400/300',
    description: 'Pristine G1000 NXi primary flight display with synthetic vision technology and weather radar capability. Includes installation hardware, configuration cards, and 90-day warranty. Perfect upgrade from legacy G1000.',
    category: 'Parts'
  },
  {
    id: '8',
    title: 'King Air 200 Landing Gear',
    price: '$125,000',
    location: 'Chicago, IL', 
    image: '/api/placeholder/400/300',
    description: 'Complete overhauled main and nose landing gear assembly for King Air 200 series. Fresh from certified repair station with new seals, bearings, and actuators. Includes wheels, brakes, and tires.',
    category: 'Parts'
  },
  {
    id: '9',
    title: 'Citation Cabin Interior Set',
    price: '$85,000',
    location: 'Las Vegas, NV',
    image: '/api/placeholder/400/300',
    description: 'Luxurious leather cabin interior package for Citation CJ1/CJ2 series. Features executive seating for 6 passengers, premium Corinthian leather, LED lighting, and custom cabinetry. Professional installation available.',
    category: 'Parts'
  },
  {
    id: '19',
    title: 'Bendix King KFC 225 Autopilot',
    price: '$35,000',
    location: 'Nashville, TN',
    image: '/api/placeholder/400/300',
    description: 'Complete KFC 225 flight control system with altitude hold, heading select, and approach coupling. Includes flight director, servo actuators, and control panel. Recently serviced with 8130 tags.',
    category: 'Parts'
  },
  {
    id: '20',
    title: 'Honeywell TFE731-2 Accessories',
    price: '$45,000',
    location: 'Tulsa, OK',
    image: '/api/placeholder/400/300',
    description: 'Complete accessory package for TFE731-2 engines including starter-generator, fuel control unit, ignition system, and oil pumps. All units overhauled to service limits with fresh warranties.',
    category: 'Parts'
  },
  {
    id: '21',
    title: 'Cessna 172 Instrument Panel',
    price: '$8,500',
    location: 'Dayton, OH',
    image: '/api/placeholder/400/300',
    description: 'Modern instrument panel for Cessna 172 with cutouts for G500 TXi, GTN 650, and standard flight instruments. Powder-coated aluminum construction with professional wiring harness included.',
    category: 'Parts'
  },

  // Services
  {
    id: '10',
    title: 'Annual Inspection Service',
    price: 'From $5,500',
    location: 'Oklahoma City, OK',
    image: '/api/placeholder/400/300',
    description: 'FAA certified annual inspections by experienced A&P mechanics. Comprehensive 100+ point inspection includes engine borescope, compression tests, and detailed squawk list. Mobile service available within 100nm radius.',
    category: 'Services'
  },
  {
    id: '11',
    title: 'Avionics Installation',
    price: 'Quote Available',
    location: 'San Diego, CA',
    image: '/api/placeholder/400/300',
    description: 'Professional avionics installation and STC certification by Garmin authorized dealers. Specializing in G1000 NXi upgrades, GTN series GPS, and autopilot systems. FAA 337 forms and flight testing included.',
    category: 'Services'
  },
  {
    id: '12',
    title: 'Aircraft Paint & Interior',
    price: 'From $45,000',
    location: 'Wichita, KS',
    image: '/api/placeholder/400/300',
    description: 'Complete aircraft refurbishment including strip and repaint, custom interior design, and carpet replacement. 20+ years experience with corporate jets and piston aircraft. Full warranty on all work.',
    category: 'Services'
  },
  {
    id: '22',
    title: 'Pre-Purchase Inspection',
    price: 'From $3,500',
    location: 'Van Nuys, CA',
    image: '/api/placeholder/400/300',
    description: 'Thorough pre-purchase inspections by independent A&P/IA mechanics. Includes logbook review, test flight, engine analysis, and detailed written report. Available nationwide with 48-hour turnaround.',
    category: 'Services'
  },
  {
    id: '23',
    title: 'Aircraft Management',
    price: 'From $2,500/month',
    location: 'Scottsdale, AZ',
    image: '/api/placeholder/400/300',
    description: 'Full-service aircraft management including scheduling, maintenance coordination, insurance, and regulatory compliance. Experienced team manages 50+ aircraft with 24/7 support and cost optimization.',
    category: 'Services'
  },
  {
    id: '24',
    title: 'Engine Overhaul Service',
    price: 'Quote Available',
    location: 'Greensboro, NC',
    image: '/api/placeholder/400/300',
    description: 'Complete engine overhaul services for piston and turbine engines. FAR 145 certified repair station with climate-controlled facilities. Specializing in Continental, Lycoming, and PT6A engines with warranty coverage.',
    category: 'Services'
  }
];

export const getListingsByCategory = (category: string) => {
  return sampleListings.filter(listing => listing.category === category);
};