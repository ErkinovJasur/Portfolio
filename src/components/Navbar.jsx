import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangSwitcher from './LangSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home'), id: 'home' },
    { href: '#about', label: t('nav.about'), id: 'about' },
    { href: '#projects', label: t('nav.projects'), id: 'projects' },
    { href: '#contact', label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-black/5 dark:shadow-black/40'
            : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/70 shadow-sm'
        }`}
      >
        {/* Brand New Modern Logo */}
        <a href="#home" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-[2px] shadow-sm group-hover:scale-105 group-hover:shadow-purple-500/30 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center text-cyan-400 group-hover:text-pink-400 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Erkinov <span className="gradient-text">Jasur</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'text-white font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-full shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden md:flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <LangSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800 dark:text-slate-200" /> : <Menu className="w-5 h-5 text-slate-800 dark:text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-2 max-w-5xl mx-auto p-3 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-sm'
                    : 'text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className={activeSection === link.id ? 'text-white' : 'text-slate-800 dark:text-slate-300'}>
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
