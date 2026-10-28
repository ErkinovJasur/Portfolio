import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Bot,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Users,
  Layers,
  FolderGit2,
  Building2,
  Zap,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

function CountUp({ target, suffix = '', duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    const end = parseInt(target, 10);
    if (Number.isNaN(end)) return;
    const steps = 34;
    const inc = end / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(cur));
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="gradient-text">
      {count}
      {suffix}
    </span>
  );
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: 13, suffix: '', label: t('about.stats.tasks'), icon: CheckCircle2 },
    { value: 1, suffix: '', label: t('about.stats.team'), icon: Users },
    { value: 8, suffix: '+', label: t('about.stats.tech'), icon: Layers },
    { value: 6, suffix: '+', label: t('about.stats.projects'), icon: FolderGit2 },
  ];

  const skillCategories = [
    {
      title: t('about.categories.frontend'),
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js', 'Vite', 'Framer Motion'],
    },
    {
      title: t('about.categories.database'),
      icon: Database,
      skills: ['Supabase', 'JSON / REST API', 'Local Storage'],
    },
    {
      title: t('about.categories.devops'),
      icon: Cloud,
      skills: ['Vercel', 'Netlify', 'GitHub Pages', 'CI/CD Basics'],
    },
    {
      title: t('about.categories.tools'),
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Chrome DevTools', 'NPM'],
    },
    {
      title: t('about.categories.ai'),
      icon: Bot,
      skills: ['Claude', 'ChatGPT', 'Gemini', 'GitHub Copilot', 'Codex'],
    },
    {
      title: 'Design & Motion',
      icon: Sparkles,
      skills: ['UI/UX', 'Responsive Design', 'Micro-interactions', 'Design Systems'],
    },
  ];

  const coreValues = [
    { title: t('about.values.clean'), desc: t('about.values.clean_desc'), icon: ShieldCheck },
    { title: t('about.values.responsive'), desc: t('about.values.responsive_desc'), icon: Smartphone },
    { title: t('about.values.performance'), desc: t('about.values.performance_desc'), icon: Zap },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-16 sm:mb-20">
          <span className="eyebrow mb-4">{t('about.label')}</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-main mt-4">
            {t('about.title_part1')}{' '}
            <span className="gradient-text">{t('about.title_part2')}</span>
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid lg:grid-cols-12 gap-5 mb-6">
          <motion.div {...fade()} className="lg:col-span-7 surface rounded-[2rem] p-7 sm:p-10 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-16 w-56 h-56 rounded-full blur-3xl"
              style={{ background: 'var(--glow)' }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)', border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)' }}>
                  <Sparkles className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-main">
                  {t('about.who_title')}
                </h3>
              </div>
              <p className="text-dim text-[15px] sm:text-[16px] leading-relaxed mb-7">
                {t('about.who_desc')}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-5" style={{ borderTop: '1px solid var(--line)' }}>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-dim mr-1">Focus</span>
                {['React Ecosystem', 'Modern UI/UX', 'Tailwind CSS', 'State Management'].map((tag) => (
                  <span key={tag} className="chip text-[11px]">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  {...fade(i * 0.06)}
                  className="surface surface-hover rounded-[1.5rem] p-5 sm:p-6 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--accent) 22%, transparent)' }}>
                    <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-bold mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[11px] sm:text-xs text-dim font-medium leading-snug">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div key={i} {...fade(i * 0.07)} className="surface surface-hover rounded-[1.5rem] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--accent) 22%, transparent)' }}>
                    <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h4 className="font-heading font-semibold text-[15px] text-main">{val.title}</h4>
                </div>
                <p className="text-[13px] text-dim leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills */}
        <motion.div {...fade()} className="mb-6">
          <div className="flex items-center gap-3 mb-6 mt-14">
            <Layers className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-main">
              {t('about.skills_title')}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  {...fade(i * 0.04)}
                  className="surface surface-hover rounded-[1.5rem] p-5"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--accent) 22%, transparent)' }}>
                      <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    </div>
                    <h4 className="font-heading font-semibold text-[14px] text-main">{cat.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s} className="chip text-[11px] py-1 px-2.5">{s}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Journey */}
        <motion.div {...fade()} className="surface rounded-[2rem] p-7 sm:p-10 mt-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)', border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)' }}>
              <GraduationCap className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-main">
              {t('about.journey_title')}
            </h3>
          </div>

          <div className="relative pl-7 border-l" style={{ borderColor: 'var(--line)' }}>
            <div className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500" />
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-heading font-semibold text-lg text-main flex items-center gap-2">
                <Building2 className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                {t('about.journey_school')}
              </span>
              <span className="chip text-[10px] uppercase tracking-wider">2024 — Present</span>
            </div>
            <p className="text-[13px] font-semibold mb-3" style={{ color: 'var(--accent)' }}>
              {t('about.journey_role')}
            </p>
            <p className="text-[14px] text-dim leading-relaxed mb-5 max-w-3xl">
              {t('about.journey_desc')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'State Management', 'Git & GitHub', 'Clean Architecture'].map((tag) => (
                <span key={tag} className="chip text-[11px] py-1 px-2.5">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
