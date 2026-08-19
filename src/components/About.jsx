import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import {
  Code,
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
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    const totalSteps = 35;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useTranslation();

  const stats = [
    {
      value: 13,
      suffix: '',
      label: t('about.stats.tasks'),
      icon: CheckCircle2,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
      borderColor: 'border-blue-200 dark:border-blue-500/30',
    },
    {
      value: 1,
      suffix: '',
      label: t('about.stats.team'),
      icon: Users,
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/30',
    },
    {
      value: 5,
      suffix: '+',
      label: t('about.stats.tech'),
      icon: Layers,
      color: 'text-pink-500 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-500/10',
      borderColor: 'border-pink-200 dark:border-pink-500/30',
    },
    {
      value: 6,
      suffix: '+',
      label: t('about.stats.projects'),
      icon: FolderGit2,
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-500/10',
      borderColor: 'border-amber-200 dark:border-amber-500/30',
    },
  ];

  const skillCategories = [
    {
      title: t('about.categories.frontend'),
      icon: Code,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
      borderColor: 'border-blue-200 dark:border-blue-500/30',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js', 'Vite', 'Framer Motion'],
    },
    {
      title: t('about.categories.database'),
      icon: Database,
      color: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
      borderColor: 'border-emerald-200 dark:border-emerald-500/30',
      skills: ['Supabase', 'JSON / REST API', 'Local Storage'],
    },
    {
      title: t('about.categories.devops'),
      icon: Cloud,
      color: 'text-cyan-500 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-500/10',
      borderColor: 'border-cyan-200 dark:border-cyan-500/30',
      skills: ['Vercel', 'Netlify', 'GitHub Pages', 'CI/CD Basics'],
    },
    {
      title: t('about.categories.tools'),
      icon: Wrench,
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/30',
      skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Chrome DevTools', 'NPM'],
    },
    {
      title: t('about.categories.ai'),
      icon: Bot,
      color: 'text-pink-500 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-500/10',
      borderColor: 'border-pink-200 dark:border-pink-500/30',
      skills: ['Claude', 'ChatGPT', 'Gemini', 'GitHub Copilot', 'Codex', 'Chat.z'],
    },
  ];

  const coreValues = [
    {
      title: t('about.values.clean'),
      desc: t('about.values.clean_desc'),
      icon: ShieldCheck,
      color: 'text-blue-500 dark:text-blue-400',
    },
    {
      title: t('about.values.responsive'),
      desc: t('about.values.responsive_desc'),
      icon: Smartphone,
      color: 'text-purple-500 dark:text-purple-400',
    },
    {
      title: t('about.values.performance'),
      desc: t('about.values.performance_desc'),
      icon: Zap,
      color: 'text-amber-500 dark:text-amber-400',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold tracking-widest text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 uppercase mb-3">
          {t('about.label')}
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          {t('about.title_part1')}{' '}
          <span className="gradient-text">{t('about.title_part2')}</span>
        </h2>
      </motion.div>

      {/* Bento Grid Top: Who I Am & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Who I Am Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-slate-200 dark:border-slate-800 relative overflow-hidden"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {t('about.who_title')}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {t('about.who_desc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mr-1">Focus:</span>
            {['React Ecosystem', 'Modern UI/UX', 'Tailwind CSS', 'State Management'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4 Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center relative group border border-slate-200 dark:border-slate-800"
              >
                <div className={`p-2.5 rounded-xl ${stat.bgColor} ${stat.borderColor} border ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {coreValues.map((val, idx) => {
          const Icon = val.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 ${val.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {val.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {val.desc}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Tools & Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <span>{t('about.skills_title')}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card rounded-2xl p-6 relative group border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.bgColor} ${category.borderColor} border ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-300 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Learning Journey Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-7 sm:p-10 relative overflow-hidden border border-slate-200 dark:border-slate-800"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {t('about.journey_title')}
          </h3>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-400 dark:border-purple-500/40 space-y-6">
          <div className="relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-white dark:border-slate-950 shadow-md shadow-purple-500/30" />
            
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-slate-900 dark:text-white">{t('about.journey_school')}</span>
              </span>
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                2024 - Present
              </span>
            </div>

            <p className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-3">
              {t('about.journey_role')}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
              {t('about.journey_desc')}
            </p>

            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'State Management', 'Git & GitHub', 'Clean Code Architecture'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
