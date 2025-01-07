import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import FullScreenScroll from './components/FullScreenScroll';
import FeaturesGrid from './components/FeaturesGrid';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FullScreenScroll/>
      <FeaturesGrid/>
      <Reviews />
      <Footer />
    </div>
  );
}
