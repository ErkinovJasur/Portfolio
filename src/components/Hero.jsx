import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Terminal, CheckCircle, Flame, Copy, Check } from 'lucide-react';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const roles = t('hero.roles', { returnObjects: true }) || [
    'Frontend Dasturchi',
    'React Mutaxassisi',
    'UI/UX Ishqibozi',
    'Zamonaviy Veb Muhandisi',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyConfig = () => {
    const codeSnippet = `const developer = {
  name: "Erkinov Jasur",
  role: "Frontend Developer",
  school: "Mars IT School",
  stack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  status: "Available for projects"
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-600/15 dark:via-purple-600/15 dark:to-pink-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Live Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold shadow-sm mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-purple-700 dark:text-purple-300 font-semibold">{t('hero.badge')}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-[1.08]"
          >
            <span className="text-slate-500 dark:text-slate-400 text-2xl sm:text-4xl block font-medium mb-1">
              {t('hero.greeting')}
            </span>
            {t('hero.title_first')}{' '}
            <span className="gradient-text drop-shadow-sm">{t('hero.title_last')}</span>
          </motion.h1>

          {/* Dynamic Animated Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center gap-2 text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6"
          >
            <span className="text-purple-600 dark:text-purple-400">{t('hero.role_prefix')}</span>
            <div className="relative overflow-hidden inline-block min-w-[200px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex + i18n.language}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="gradient-text font-extrabold inline-block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8 font-normal"
          >
            {t('hero.description')}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#projects"
              className="btn-gradient px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-purple-600/30 group cursor-pointer w-full sm:w-auto"
            >
              <span className="text-white">{t('hero.view_projects')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-white" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto bg-white dark:bg-white/5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-purple-500 shadow-sm transition-all"
            >
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-slate-800 dark:text-slate-200">{t('hero.contact_me')}</span>
            </a>
          </motion.div>

          {/* Highlights Mini Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold"
          >
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300">13+ Tasks Done</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Flame className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span className="text-slate-700 dark:text-slate-300">6+ Web Projects</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-pink-500 dark:text-pink-400" />
              <span className="text-slate-700 dark:text-slate-300">100% Responsive</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 w-full"
        >
          <div className="rounded-2xl bg-slate-900/95 dark:bg-slate-950/90 border border-slate-700/80 dark:border-slate-800/90 shadow-2xl shadow-purple-950/20 overflow-hidden backdrop-blur-xl">
            {/* Terminal Window Bar */}
            <div className="px-4 py-3 bg-slate-950/80 dark:bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-300 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  {t('hero.code_title')}
                </span>
              </div>
              <button
                onClick={copyConfig}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                title="Copy snippet"
              >
                {copiedCode ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto select-text">
              <div>
                <span className="text-purple-400 font-semibold">const</span>{' '}
                <span className="text-blue-400 font-semibold">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-emerald-300">"Erkinov Jasur"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-emerald-300">"Frontend Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">school:</span>{' '}
                <span className="text-emerald-300">"Mars IT School"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">stack:</span> [
              </div>
              <div className="pl-8 text-cyan-300">
                "React", "Tailwind CSS", "JavaScript", "Framer Motion"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-slate-400">status:</span>{' '}
                <span className="text-amber-300">"Ready for new ideas 🚀"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">cleanCode:</span>{' '}
                <span className="text-pink-400">true</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <span className="text-slate-300">developer.buildNextGenWeb()</span>
                <span className="animate-pulse w-2 h-4 bg-purple-500 inline-block align-middle ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
