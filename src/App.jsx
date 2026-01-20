import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* barre blanche + contenu centré comme IDS */}
      <div className="mx-auto max-w-6xl">
        <Navbar />
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/forfaits" element={<PricingPage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
