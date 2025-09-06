import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
