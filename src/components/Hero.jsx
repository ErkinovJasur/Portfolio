import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  Terminal,
  FileCode,
  Braces,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { profile, socials, stats } from '../data/content';
import { SocialIcon } from './Icons';

const stack = ['React 19', 'Tailwind CSS', 'JavaScript (ES6+)', 'Supabase', 'Git & GitHub', 'Vite', 'Figma', 'REST API', 'HTML5 & CSS3'];

export default function Hero({ onOrder }) {
  const { t, i18n } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const [time, setTime] = useState('');
  const [activeTab, setActiveTab] = useState('code');
  const [copiedCode, setCopiedCode] = useState(false);

  const roles = t('hero.roles', { returnObjects: true }) || ['Junior Frontend Developer'];

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(id);
  }, [roles.length]);

  useEffect(() => {
    const updateTime = () => {
      try {
        setTime(
          new Intl.DateTimeFormat(i18n.language, {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Tashkent',
          }).format(new Date())
        );
      } catch {
        setTime('');
      }
    };
    updateTime();
    const id = setInterval(updateTime, 20000);
    return () => clearInterval(id);
  }, [i18n.language]);

  const copyCode = (text) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeSnippets = {
    code: `// developer.js — Erkinov Jasur
export const developer = {
  name: "${profile.name}",
  role: "Junior Frontend Developer",
  location: "${profile.location}",
  status: "Open to new projects 🚀",
  coreStack: ["React 19", "Tailwind CSS", "JavaScript", "Supabase"],
  education: "Mars IT School (Frontend)",
  hireable: true
};`,
    json: `{
  "developer": "${profile.name}",
  "technologies": [
    "HTML5", "CSS3", "Tailwind CSS", 
    "React", "JavaScript (ES6+)", "Supabase", "Git"
  ],
  "languages": ["O'zbekcha", "English", "Русский"],
  "projects": ["DachaHub", "TurarZone", "React Supabase Starter"],
  "responsive": "100%"
}`,
    terminal: `jasur@portfolio ~ % whoami
Erkinov Jasur — Junior Frontend Developer

jasur@portfolio ~ % cat goals.txt
✓ Modern, fast & accessible web applications
✓ Clean code, minimal aesthetics & smooth UX

jasur@portfolio ~ % npm run build
✓ 2225 modules transformed.
✓ built in 1.1s — Ready for production 🚀`,
  };

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="relative mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        {/* Status Pill Badge */}
        <div className="flex flex-col items-center text-center">
         

          {/* Small Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-[13px] font-mono tracking-widest text-[var(--accent)] uppercase"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Big Modern Headline with Serif Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-5 mt-2 font-heading text-[clamp(2.8rem,7.5vw,5.6rem)] font-extrabold leading-[1.0] tracking-[-0.035em]"
          >
            <span className="block text-main">{t('hero.title_first')}</span>
            <span className="gradient-bronze-text block font-serif-accent font-normal italic tracking-normal">
              {t('hero.title_last')}
            </span>
          </motion.h1>

          {/* Dynamic Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-2 text-[15px] sm:text-[17px]"
          >
            <span className="text-dim font-medium">{t('hero.role_prefix')}</span>
            <div
              className="relative inline-flex overflow-hidden rounded-full px-3.5 py-0.5 border"
              style={{
                background: 'var(--surface-2)',
                borderColor: 'var(--line-strong)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${roleIndex}-${i18n.language}`}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.26, ease: 'easeOut' }}
                  className="font-semibold text-[var(--accent-sand)]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Slogan Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[17px] leading-relaxed text-dim"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <a href="#projects" className="btn-primary group px-6 py-2.5 text-[14px]">
              <span>{t('hero.view_projects')}</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={onOrder}
              className="btn-secondary group px-6 py-2.5 text-[14px]"
            >
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span>{t('order.cta')}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn h-10 px-3.5 gap-2 rounded-full text-[13px] font-medium"
            >
              <Send className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Telegram</span>
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-2.5"
          >
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn h-9 w-9"
                aria-label={social.name}
                title={social.name}
              >
                <SocialIcon id={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Minimalist Code & Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="brown-card mt-12 sm:mt-16 mx-auto max-w-[860px] overflow-hidden border shadow-2xl"
          style={{ borderColor: 'var(--line-strong)' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b select-none"
            style={{
              borderColor: 'var(--line)',
              background: 'var(--surface-2)',
            }}
          >
            {/* Elegant Dots */}
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E26D5C] opacity-80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D9A877] opacity-80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#6EB27B] opacity-80" />
            </div>

            {/* Window Tabs */}
            <div className="flex items-center gap-1 rounded-lg p-0.5 bg-[var(--surface)] border border-[var(--line)]">
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[11.5px] font-medium transition-all ${
                  activeTab === 'code'
                    ? 'bg-[var(--surface-2)] text-[var(--accent)] font-semibold shadow-xs'
                    : 'text-dim hover:text-main'
                }`}
              >
                <FileCode className="h-3 w-3" />
                developer.js
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('json')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[11.5px] font-medium transition-all ${
                  activeTab === 'json'
                    ? 'bg-[var(--surface-2)] text-[var(--accent)] font-semibold shadow-xs'
                    : 'text-dim hover:text-main'
                }`}
              >
                <Braces className="h-3 w-3" />
                skills.json
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[11.5px] font-medium transition-all ${
                  activeTab === 'terminal'
                    ? 'bg-[var(--surface-2)] text-[var(--accent)] font-semibold shadow-xs'
                    : 'text-dim hover:text-main'
                }`}
              >
                <Terminal className="h-3 w-3" />
                terminal
              </button>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={() => copyCode(codeSnippets[activeTab])}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium text-dim hover:text-main hover:bg-[var(--surface)] transition-colors"
              title={t('common.copy')}
            >
              {copiedCode ? (
                <>
                  <Check className="h-3 w-3 text-[var(--accent)]" />
                  <span className="text-[var(--accent)] font-semibold">{t('common.copied')}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span className="hidden sm:inline">{t('common.copy')}</span>
                </>
              )}
            </button>
          </div>

          {/* Window Code Content */}
          <div
            className="p-5 sm:p-7 overflow-x-auto font-mono text-[13px] sm:text-[13.5px] leading-relaxed"
            style={{ background: 'var(--surface)' }}
          >
            <pre className="text-main">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </motion.div>

        {/* Minimalist Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4 max-w-[860px] mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="brown-card brown-card-hover p-4 sm:p-5 text-center border"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="font-heading text-[clamp(1.8rem,3.2vw,2.4rem)] font-extrabold leading-none text-main">
                {stat.value}
                <span className="text-[var(--accent)] font-serif-accent ml-0.5">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-[11px] font-semibold text-dim uppercase tracking-wider font-mono">
                {t(`hero.stats.${stat.id}`)}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Minimalist Tech Stack Ribbon */}
        <div className="marquee mt-12 border-y py-3.5" style={{ borderColor: 'var(--line)' }}>
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-8 pr-8"
                aria-hidden={copy === 1}
              >
                {stack.map((item) => (
                  <span key={item} className="flex items-center gap-8">
                    <span className="whitespace-nowrap text-[12.5px] font-medium text-dim hover:text-[var(--accent)] transition-colors">
                      {item}
                    </span>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)] opacity-40" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
