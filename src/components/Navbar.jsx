import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Command } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangSwitcher from './LangSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const pos = window.scrollY + 260;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const links = [
    { id: 'home', href: '#home', label: t('nav.home') },
    { id: 'about', href: '#about', label: t('nav.about') },
    { id: 'projects', href: '#projects', label: t('nav.projects') },
    { id: 'services', href: '#services', label: t('nav.services') },
    { id: 'contact', href: '#contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto max-w-6xl nav-shell rounded-full transition-all duration-500 ${
            scrolled ? 'py-2 px-3 sm:px-4' : 'py-2.5 px-3 sm:px-5'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Brand */}
            <a href="#home" className="flex items-center gap-2.5 pl-1 group shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  EJ
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-heading text-sm sm:text-[15px] font-semibold tracking-tight text-main">
                  Erkinov Jasur
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-dim font-medium mt-1">
                  Frontend Developer
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors ${
                    activeSection === link.id ? 'text-main' : 'text-dim hover:text-main'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent) 32%, transparent)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1.5">
                <LangSwitcher />
                <ThemeToggle />
              </div>
              <a
                href="#contact"
                className="hidden sm:inline-flex btn-primary text-[13px] px-4 py-2"
              >
                {t('hero.contact_me')}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden icon-btn w-9 h-9"
                aria-label="Open menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="absolute inset-x-3 bottom-3 rounded-[2rem] p-6"
              style={{
                background: 'var(--glass-strong)',
                border: '1px solid var(--line)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    EJ
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-heading font-semibold text-main">Erkinov Jasur</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-dim mt-1">Menu</span>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="icon-btn w-9 h-9">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-1.5 mb-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-colors ${
                      activeSection === link.id
                        ? 'text-main'
                        : 'text-dim hover:text-main'
                    }`}
                    style={
                      activeSection === link.id
                        ? {
                            background: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                            border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
                          }
                        : { border: '1px solid transparent' }
                    }
                  >
                    {link.label}
                    <Command className="w-4 h-4 opacity-40" />
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center justify-between p-2 rounded-2xl" style={{ border: '1px solid var(--line)' }}>
                <LangSwitcher />
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
