import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Moon,
  Sun,
  Globe,
  Wifi,
  Sparkles,
  ExternalLink,
  Send,
  Volume2,
  CheckCircle2,
  ShieldCheck,
  Laptop,
} from 'lucide-react';
import { useTheme } from '../contexts/themeStore';
import { profile } from '../data/content';

const languages = [
  { code: 'uz', name: "O'zbekcha", short: 'UZ' },
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'ru', name: 'Русский', short: 'RU' },
];

export default function ControlCenter({ open, onClose, onOrder }) {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  const currentLang = languages.find((l) => i18n.language?.startsWith(l.code)) || languages[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="apple-card fixed right-4 top-12 z-[100] w-[320px] rounded-[24px] p-3.5 shadow-2xl backdrop-blur-3xl sm:right-8"
          style={{
            background: isDark ? 'rgba(28, 28, 32, 0.88)' : 'rgba(255, 255, 255, 0.92)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.45)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-2 pb-2 border-b" style={{ borderColor: 'var(--line)' }}>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[var(--accent)] text-[10px] text-white">
                
              </span>
              <span className="text-[12px] font-semibold tracking-tight text-main">
                Control Center
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-[10.5px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>

          {/* Grid toggles */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex flex-col justify-between rounded-[18px] p-3 text-left transition-all hover:brightness-105 active:scale-95"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                border: '1px solid var(--line)',
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ background: isDark ? '#5e5ce6' : '#ff9500' }}
                >
                  {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
                </span>
                <span className="text-[10px] font-semibold text-dim uppercase">
                  {isDark ? 'Dark' : 'Light'}
                </span>
              </div>
              <div className="mt-3">
                <span className="block text-[11px] font-semibold text-main">{t('common.theme')}</span>
                <span className="block text-[9.5px] text-dim">
                  {isDark ? 'Dark Mode' : 'Light Mode'}
                </span>
              </div>
            </button>

            {/* Availability */}
            <div
              className="flex flex-col justify-between rounded-[18px] p-3 text-left"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                border: '1px solid var(--line)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="mt-3">
                <span className="block text-[11px] font-semibold text-main">Status</span>
                <span className="block text-[9.5px] text-emerald-400 font-medium truncate">
                  {t('hero.status')}
                </span>
              </div>
            </div>
          </div>

          {/* Language Segmented Control */}
          <div
            className="mt-2.5 rounded-[18px] p-2.5"
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              border: '1px solid var(--line)',
            }}
          >
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-main">
                <Globe className="h-3.5 w-3.5 text-[var(--accent)]" />
                {t('common.language')}
              </span>
              <span className="text-[10px] font-medium text-dim">{currentLang.name}</span>
            </div>
            <div
              className="grid grid-cols-3 gap-1 rounded-[12px] p-1"
              style={{ background: isDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.06)' }}
            >
              {languages.map((l) => {
                const active = l.code === currentLang.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => i18n.changeLanguage(l.code)}
                    className="rounded-[9px] py-1.5 text-center text-[11px] font-medium transition-all"
                    style={{
                      background: active ? 'var(--accent)' : 'transparent',
                      color: active ? '#ffffff' : 'var(--muted)',
                      boxShadow: active ? '0 2px 6px rgba(0, 113, 227, 0.4)' : 'none',
                    }}
                  >
                    {l.short}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Telegram CTA */}
          <div className="mt-2.5 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOrder();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-[16px] py-2.5 text-[11.5px] font-semibold text-white transition-all hover:brightness-110 active:scale-98"
              style={{
                background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                boxShadow: '0 4px 14px rgba(0, 113, 227, 0.35)',
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t('order.cta')}
            </button>
            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-[16px] transition-all hover:brightness-110 active:scale-95"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
              }}
              title="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>

          {/* Device Profile info */}
          <div className="mt-3 flex items-center justify-between px-2 pt-2 border-t text-[10px] text-dim" style={{ borderColor: 'var(--line)' }}>
            <span className="flex items-center gap-1">
              <Laptop className="h-3 w-3" />
              Erkinov Jasur — MacBook
            </span>
            <span>Tashkent, UZ</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
