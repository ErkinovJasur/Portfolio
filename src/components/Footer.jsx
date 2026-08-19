import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-heading font-bold text-base text-slate-900 dark:text-white">
            Erkinov <span className="gradient-text">Jasur</span>
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('footer.copyright')}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>{t('footer.built_with')}</span>
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </footer>
  );
}
