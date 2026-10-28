import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'uz', name: "O'zbekcha", short: 'UZ' },
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'ru', name: 'Русский', short: 'RU' },
];

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current =
    languages.find((l) => i18n.language?.startsWith(l.code)) || languages[0];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const change = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((v) => !v)}
        className="icon-btn h-9 px-3 gap-1.5 text-[11px] font-bold tracking-wider"
        aria-label="Change language"
        aria-expanded={open}
      >
        <span className="text-main">{current.short}</span>
        <ChevronDown
          className={`w-3 h-3 opacity-60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 mt-2 w-44 rounded-2xl p-1.5 z-[70] overflow-hidden"
            style={{
              background: 'var(--glass-strong)',
              border: '1px solid var(--line)',
              backdropFilter: 'blur(26px) saturate(180%)',
              WebkitBackdropFilter: 'blur(26px) saturate(180%)',
              boxShadow: 'var(--shadow)',
            }}
          >
            {languages.map((lang) => {
              const active = lang.code === current.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => change(lang.code)}
                  className={`w-full px-3 py-2.5 rounded-xl text-left text-[13px] flex items-center justify-between transition-colors ${
                    active ? 'text-main font-semibold' : 'text-dim hover:text-main'
                  }`}
                  style={
                    active
                      ? { background: 'color-mix(in srgb, var(--accent) 14%, transparent)' }
                      : undefined
                  }
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold tracking-wider"
                      style={{ background: 'var(--field)', border: '1px solid var(--line)' }}>
                      {lang.short}
                    </span>
                    {lang.name}
                  </span>
                  {active && <Check className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
