import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/themeStore';

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.94 }}
      onClick={toggleTheme}
      className="icon-btn relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden shrink-0"
      title={t('common.theme')}
      aria-label={t('common.theme')}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
