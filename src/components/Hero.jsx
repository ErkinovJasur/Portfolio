import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Sparkles,
  Terminal,
  CheckCircle2,
  Flame,
  Copy,
  Check,
  MapPin,
  Circle,
} from 'lucide-react';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const roles = t('hero.roles', { returnObjects: true }) || [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Craftsman',
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((p) => (p + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  const copyCode = () => {
    const code = `const developer = {
  name: "Erkinov Jasur",
  role: "Frontend Developer",
  school: "Mars IT School",
  stack: ["React", "Tailwind CSS", "Framer Motion"],
  status: "available"
};`;
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 pt-32 pb-20 sm:pt-36"
    >
      {/* Ambient orbs */}
      <div className="glow-orb w-[420px] h-[420px] bg-indigo-500/30 top-[-8%] left-[8%]" />
      <div
        className="glow-orb w-[380px] h-[380px] bg-pink-500/25 bottom-[5%] right-[6%]"
        style={{ animationDelay: '7s' }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] bg-purple-500/25 top-[45%] left-[45%]"
        style={{ animationDelay: '13s' }}
      />

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 mx-auto w-full max-w-6xl grid lg:grid-cols-12 gap-14 lg:gap-10 items-center"
      >
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('hero.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl font-bold tracking-tight mb-5 text-main"
          >
            <span className="block text-[1.35rem] sm:text-3xl font-medium mb-2 text-dim tracking-tight">
              {t('hero.greeting')}
            </span>
            {t('hero.title_first')}{' '}
            <span className="gradient-text">{t('hero.title_last')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-2 text-lg sm:text-2xl font-semibold mb-6 h-9"
          >
            <span className="text-dim font-medium text-base sm:text-lg">{t('hero.role_prefix')}</span>
            <div className="relative overflow-hidden inline-flex text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex + i18n.language}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="gradient-text font-bold"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-xl text-[15px] sm:text-[17px] leading-relaxed mb-9 text-dim"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-10"
          >
            <a href="#projects" className="btn-primary px-7 py-3.5 text-sm w-full sm:w-auto group">
              {t('hero.view_projects')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary px-7 py-3.5 text-sm w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              {t('hero.contact_me')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-[12px] sm:text-[13px] font-medium text-dim"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              13+ Tasks Done
            </span>
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-500" />
              6+ Web Projects
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              100% Responsive
            </span>
          </motion.div>
        </div>

        {/* Right - layered glass profile */}
        <motion.div
          style={{ y: yCard }}
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="relative w-full max-w-[390px]">
            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-3 sm:-right-6 z-20 chip px-3 py-2 text-[11px]"
              style={{ background: 'var(--glass-strong)' }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              Tashkent, UZ
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-2 sm:-left-5 z-20 chip px-3 py-2 text-[11px]"
              style={{ background: 'var(--glass-strong)' }}
            >
              <Circle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />
              Open to work
            </motion.div>

            {/* Main card */}
            <div className="surface rounded-[2rem] p-6 sm:p-7 relative overflow-hidden">
              <div
                className="absolute -top-24 -right-20 w-56 h-56 rounded-full blur-3xl"
                style={{ background: 'var(--glow)' }}
              />

              <div className="relative flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-70" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white font-heading font-bold text-xl"
                      style={{ background: 'var(--bg-soft)' }}>
                      <span className="gradient-text">EJ</span>
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-[3px]"
                    style={{ borderColor: 'var(--bg-soft)' }} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-main truncate">
                    Erkinov Jasur
                  </h3>
                  <p className="text-[12px] text-dim">Frontend Developer</p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </div>
                </div>
              </div>

              <div className="hairline mb-5" />

              <div className="flex flex-wrap gap-1.5 mb-5">
                {['React', 'Tailwind', 'Framer Motion', 'Vite', 'JavaScript'].map((s) => (
                  <span key={s} className="chip text-[11px] py-1 px-2.5">{s}</span>
                ))}
              </div>

              {/* mini terminal */}
              <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--field)', border: '1px solid var(--line)' }}>
                <div className="flex items-center justify-between px-3.5 py-2.5" style={{ borderBottom: '1px solid var(--line)' }}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    <span className="ml-2 text-[10px] font-mono text-dim flex items-center gap-1.5">
                      <Terminal className="w-3 h-3" />
                      {t('hero.code_title')}
                    </span>
                  </div>
                  <button onClick={copyCode} className="text-dim hover:text-main transition-colors" title="Copy">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="p-3.5 text-[10.5px] sm:text-[11.5px] leading-relaxed font-mono overflow-x-auto text-dim">
{`const `}<span className="text-indigo-500">developer</span>{` = {
  name: `}<span className="text-emerald-500">"Erkinov Jasur"</span>{`,
  role: `}<span className="text-emerald-500">"Frontend Developer"</span>{`,
  school: `}<span className="text-emerald-500">"Mars IT School"</span>{`,
  status: `}<span className="text-pink-500">"available"</span>{`
};`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-dim"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-7"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
