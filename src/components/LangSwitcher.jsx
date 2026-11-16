import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Check, Globe } from 'lucide-react';
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

  const current = languages.find((l) => i18n.language?.startsWith(l.code)) || languages[0];

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
    <div className="relative shrink-0" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="icon-btn h-8 sm:h-9 gap-1 sm:gap-1.5 px-2 sm:px-3 rounded-full text-main shrink-0"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[var(--accent)] shrink-0" />
        <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-wider">{current.short}</span>
        <ChevronDown
          className={`h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-70 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 z-[100] mt-2.5 w-44 sm:w-48 overflow-hidden rounded-2xl border p-1.5 shadow-2xl"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--line-strong)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <div className="px-2 py-1.5 mb-1 border-b" style={{ borderColor: 'var(--line)' }}>
              <span className="font-mono text-[10px] font-semibold text-dim uppercase tracking-wider block">
                Tilni tanlang / Language
              </span>
            </div>

            {languages.map((lang) => {
              const active = lang.code === current.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => change(lang.code)}
                  className="flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-[13px] font-medium transition-all"
                  style={{
                    color: active ? 'var(--accent)' : 'var(--ink)',
                    background: active ? 'var(--surface-2)' : 'transparent',
                    fontWeight: active ? '700' : '500',
                  }}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className="flex h-5 w-7 items-center justify-center font-mono text-[10px] font-bold rounded"
                      style={{
                        background: active ? 'var(--surface)' : 'var(--surface-translucent)',
                        color: active ? 'var(--accent)' : 'var(--muted)',
                        border: '1px solid var(--line)',
                      }}
                    >
                      {lang.short}
                    </span>
                    <span>{lang.name}</span>
                  </span>
                  {active && <Check className="h-4 w-4 text-[var(--accent)]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
