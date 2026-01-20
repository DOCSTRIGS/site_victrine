import Hero from '../components/Hero';
import HomeHighlights from '../components/HomeHighlights';
import DevelopmentGallery from '../components/DevelopmentGallery';
import CTASection from '../components/CTASection';

function HomePage() {
  return (
    <>
      <Hero />
      <DevelopmentGallery />
      <HomeHighlights />
      <CTASection />
    </>
  );
}

export default HomePage;
