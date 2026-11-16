import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';
import {
  FinderIcon,
  UserMemojiIcon,
  SettingsIcon,
  SafariIcon,
  NotesIcon,
  MessagesIcon,
  TerminalAppIcon,
  TelegramIcon,
  GithubIcon,
} from './Icons';
import { profile } from '../data/content';

export default function MacDock({ onOrder }) {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const probe = window.scrollY + window.innerHeight * 0.4;
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dockItems = [
    { id: 'home', label: t('nav.home'), icon: FinderIcon, href: '#home' },
    { id: 'about', label: t('nav.about'), icon: UserMemojiIcon, href: '#about' },
    { id: 'skills', label: t('nav.skills'), icon: SettingsIcon, href: '#skills' },
    { id: 'projects', label: t('nav.projects'), icon: SafariIcon, href: '#projects' },
    { id: 'experience', label: t('nav.experience'), icon: NotesIcon, href: '#experience' },
    { id: 'contact', label: t('nav.contact'), icon: MessagesIcon, href: '#contact' },
    { id: 'divider-1', isDivider: true },
    {
      id: 'order',
      label: t('order.cta'),
      icon: TerminalAppIcon,
      onClick: onOrder,
      badge: '★',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      icon: () => (
        <div className="flex h-full w-full items-center justify-center rounded-[18px] bg-sky-500 text-white shadow-md">
          <TelegramIcon className="h-6 w-6" />
        </div>
      ),
      href: profile.telegramUrl,
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: () => (
        <div className="flex h-full w-full items-center justify-center rounded-[18px] bg-zinc-800 text-white shadow-md border border-white/20">
          <GithubIcon className="h-6 w-6" />
        </div>
      ),
      href: profile.githubUrl,
      external: true,
    },
    { id: 'divider-2', isDivider: true },
    {
      id: 'top',
      label: t('common.back_to_top'),
      icon: () => (
        <div className="flex h-full w-full items-center justify-center rounded-[18px] bg-[var(--surface-2)] text-main shadow-md border border-[var(--line)]">
          <ArrowUp className="h-5 w-5" />
        </div>
      ),
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
  ];

  return (
    <nav
      aria-label="macOS Dock"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none max-w-[96vw]"
    >
      <div
        className="apple-glass flex items-end gap-1.5 sm:gap-2 px-3 py-2 rounded-[24px] border shadow-2xl transition-all"
        style={{
          borderColor: 'var(--line-strong)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {dockItems.map((item, idx) => {
          if (item.isDivider) {
            return (
              <div
                key={item.id}
                className="my-auto mx-0.5 sm:mx-1 h-8 w-px bg-[var(--line-strong)] opacity-60"
              />
            );
          }

          const isHovered = hoveredIndex === idx;
          const isNeighbor =
            hoveredIndex !== null && Math.abs(hoveredIndex - idx) === 1;

          let scale = 1;
          if (isHovered) scale = 1.35;
          else if (isNeighbor) scale = 1.15;

          const isActive = activeSection === item.id;
          const IconComponent = item.icon;

          const content = (
            <motion.div
              className="relative flex flex-col items-center cursor-pointer group"
              animate={{ scale }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className="apple-glass pointer-events-none absolute -top-11 z-50 whitespace-nowrap rounded-[10px] px-2.5 py-1 text-[11px] font-semibold text-main shadow-lg border border-[var(--line)]"
                    style={{ background: 'var(--surface)' }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon Container */}
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform active:scale-90">
                <IconComponent className="h-full w-full drop-shadow-md" />

                {item.badge && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[9px] font-bold text-white shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Active App Indicator Dot */}
              <div
                className={`mt-1 h-1 w-1 rounded-full transition-opacity ${
                  isActive ? 'bg-main opacity-90 shadow-sm' : 'opacity-0'
                }`}
                style={{ backgroundColor: 'var(--ink)' }}
              />
            </motion.div>
          );

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="outline-none"
                aria-label={item.label}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={item.onClick}
              className="outline-none bg-transparent border-0 p-0"
              aria-label={item.label}
            >
              {content}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
