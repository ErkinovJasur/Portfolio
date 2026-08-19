import StarsBackground from './components/StarsBackground';
import Spotlight from './components/Spotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Interactive Background Elements */}
      <StarsBackground />
      <Spotlight />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Action */}
      <ScrollToTop />
    </div>
  );
}
