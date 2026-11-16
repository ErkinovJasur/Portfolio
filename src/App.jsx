import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WarmAmbientBackground from './components/WarmAmbientBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const { t } = useTranslation();
  const [orderOpen, setOrderOpen] = useState(false);

  const openOrder = useCallback(() => setOrderOpen(true), []);
  const closeOrder = useCallback(() => setOrderOpen(false), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#C8925A] selection:text-[#18110D]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-[110] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[13px] focus:font-semibold focus:text-[#18110D]"
      >
        {t('common.skip_to_content')}
      </a>

      {/* Warm Ambient Canvas */}
      <WarmAmbientBackground />

      {/* Bronze Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Modern Minimalist Glass Navbar */}
      <Navbar onOrder={openOrder} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero onOrder={openOrder} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTop />

      {/* Modern Order / Project Request Modal */}
      <OrderModal open={orderOpen} onClose={closeOrder} />
    </div>
  );
}
