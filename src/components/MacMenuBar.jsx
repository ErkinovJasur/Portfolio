import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wifi,
  Battery,
  SlidersHorizontal,
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  RotateCcw,
  User,
  Layers,
  FolderGit2,
  Calendar,
  Mail,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangSwitcher from './LangSwitcher';
import ControlCenter from './ControlCenter';
import { AppleLogo } from './Icons';
import { navItems, profile } from '../data/content';

export default function MacMenuBar({ onOrder }) {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState('home');
  const [time, setTime] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const appleMenuRef = useRef(null);

  // Live Tashkent Clock & Date
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        setTime(
          new Intl.DateTimeFormat(i18n.language, {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Tashkent',
          }).format(now)
        );

        setDateStr(
          new Intl.DateTimeFormat(i18n.language, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZone: 'Asia/Tashkent',
          }).format(now)
        );
      } catch {
        setTime('15:00');
        setDateStr('');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, [i18n.language]);

  // Active section spy
  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) current = id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close Apple menu on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (appleMenuRef.current && !appleMenuRef.current.contains(e.target)) {
        setAppleMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <header
        className="apple-glass fixed inset-x-0 top-0 z-50 h-[40px] border-b select-none transition-colors duration-300"
        style={{ borderColor: 'var(--line)' }}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-3 sm:px-4">
          {/* Left: Apple Menu + Navigation */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Apple Logo Dropdown */}
            <div className="relative" ref={appleMenuRef}>
              <button
                type="button"
                onClick={() => setAppleMenuOpen((v) => !v)}
                className="flex h-7 w-7 items-center justify-center rounded-[6px] text-main transition-colors hover:bg-[var(--surface-2)] active:scale-95"
                aria-label="Apple Menu"
                aria-expanded={appleMenuOpen}
              >
                <AppleLogo className="h-3.5 w-3.5" />
              </button>

              <AnimatePresence>
                {appleMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="apple-glass absolute left-0 top-9 z-[80] w-56 rounded-[14px] p-1.5 shadow-2xl border"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--line-strong)',
                    }}
                  >
                    <a
                      href="#about"
                      onClick={() => setAppleMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-[8px] px-3 py-1.5 text-[12px] text-main hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <User className="h-3.5 w-3.5 opacity-70" />
                      {profile.name} haqida
                    </a>
                    <a
                      href="#skills"
                      onClick={() => setAppleMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-[8px] px-3 py-1.5 text-[12px] text-main hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <Layers className="h-3.5 w-3.5 opacity-70" />
                      Tizim ko'nikmalari...
                    </a>
                    <a
                      href="#projects"
                      onClick={() => setAppleMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-[8px] px-3 py-1.5 text-[12px] text-main hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <FolderGit2 className="h-3.5 w-3.5 opacity-70" />
                      Loyihalar vitrinasi...
                    </a>
                    <a
                      href="#contact"
                      onClick={() => setAppleMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-[8px] px-3 py-1.5 text-[12px] text-main hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 opacity-70" />
                      Xabarlar & Aloqa
                    </a>

                    <div className="my-1 h-px bg-[var(--line)]" />

                    <button
                      type="button"
                      onClick={() => {
                        setAppleMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex w-full items-center gap-2.5 rounded-[8px] px-3 py-1.5 text-[12px] text-main hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <RotateCcw className="h-3.5 w-3.5 opacity-70" />
                      Yuqoriga qaytish
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Monogram Name */}
            <a
              href="#home"
              className="hidden items-center gap-1.5 px-2 py-1 text-[13px] font-bold tracking-tight text-main sm:flex"
            >
              <span>{profile.name}</span>
            </a>

            {/* Section Links */}
            <nav aria-label="macOS Menu Navigation" className="hidden items-center md:flex">
              {navItems.map((id) => {
                const isSelected = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`rounded-[6px] px-2.5 py-1 text-[12px] transition-colors ${
                      isSelected
                        ? 'font-semibold text-main bg-[var(--surface-2)] shadow-xs'
                        : 'font-medium text-dim hover:text-main hover:bg-[var(--surface-translucent)]'
                    }`}
                  >
                    {t(`nav.${id}`)}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right: macOS Status Area */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Live Beacon - Available */}
            <div
              className="hidden lg:flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10.5px] font-medium"
              style={{ background: 'var(--surface-2)', border: '1px solid var(--line)' }}
              title={t('hero.status')}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-dim truncate max-w-[130px]">{t('hero.status')}</span>
            </div>

            {/* Wi-Fi & Battery */}
            <div className="hidden sm:flex items-center gap-2 px-1 text-dim">
              <span title="Wi-Fi Connected">
                <Wifi className="h-3.5 w-3.5" />
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium font-mono" title="Battery: 100%">
                <Battery className="h-4 w-4 text-emerald-400" />
                <span>100%</span>
              </span>
            </div>

            {/* Tashkent Live Clock */}
            <div className="flex items-center text-[11.5px] font-medium text-main px-1 font-mono">
              <span className="hidden md:inline mr-1 text-dim">{dateStr}</span>
              <span>{time}</span>
            </div>

            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LangSwitcher />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Control Center Icon */}
            <button
              type="button"
              onClick={() => setControlCenterOpen((v) => !v)}
              className="flex h-7 w-7 items-center justify-center rounded-[6px] text-main hover:bg-[var(--surface-2)] transition-colors active:scale-95"
              title="Control Center"
              aria-label="Control Center"
              aria-expanded={controlCenterOpen}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
            </button>

            {/* Quick Order CTA */}
            <button
              type="button"
              onClick={onOrder}
              className="btn-primary group h-7 gap-1 px-3 text-[11px] font-semibold hidden sm:inline-flex"
            >
              <Sparkles className="h-3 w-3" />
              <span>{t('order.cta_short')}</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-7 w-7 items-center justify-center rounded-[6px] text-main md:hidden"
              aria-label={t('common.menu')}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Control Center Dropdown */}
      <ControlCenter
        open={controlCenterOpen}
        onClose={() => setControlCenterOpen(false)}
        onOrder={onOrder}
      />

      {/* Mobile macOS Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="apple-glass fixed inset-0 z-[90] flex flex-col p-5 md:hidden"
            style={{ background: 'var(--surface)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: 'var(--line)' }}>
              <div className="flex items-center gap-2">
                <AppleLogo className="h-5 w-5 text-main" />
                <span className="font-bold text-[16px] text-main">{profile.name}</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-2)] text-main"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="mt-4 flex flex-col gap-1.5 flex-1">
              {navItems.map((id, index) => {
                const isSelected = active === id;
                return (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-[16px] p-3 text-[17px] font-semibold transition-all ${
                      isSelected
                        ? 'bg-[var(--accent)] text-white shadow-md'
                        : 'text-main hover:bg-[var(--surface-2)]'
                    }`}
                  >
                    <span>{t(`nav.${id}`)}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-4 border-t space-y-3" style={{ borderColor: 'var(--line)' }}>
              <div className="flex items-center justify-between">
                <LangSwitcher />
                <ThemeToggle />
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrder();
                }}
                className="btn-primary w-full py-3 text-[14px]"
              >
                <Sparkles className="h-4 w-4" />
                {t('order.cta')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
