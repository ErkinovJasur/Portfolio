import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function ProjectCard({ proj, index, t }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 22 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group"
    >
      <div className="surface surface-hover rounded-[1.75rem] overflow-hidden h-full flex flex-col">
        {/* Browser bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderBottom: '1px solid var(--line)', background: 'var(--field)' }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-dim">
            <Sparkles className="w-2.5 h-2.5" style={{ color: 'var(--accent)' }} />
            {proj.badge}
          </span>
        </div>

        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden" style={{ background: 'var(--bg-soft)' }}>
          <img
            src={proj.image}
            alt={proj.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80" />
          {proj.featured && (
            <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-white/15 backdrop-blur-md border border-white/20">
              <ShieldCheck className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h3 className="font-heading text-lg font-semibold text-main mb-2 flex items-center justify-between gap-3">
            <span className="truncate">{proj.title}</span>
            <ArrowUpRight className="w-4 h-4 text-dim group-hover:text-main shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="text-[13px] text-dim leading-relaxed mb-4 flex-1">{proj.desc}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {proj.tags.map((tag) => (
              <span key={tag} className="chip text-[10.5px] py-1 px-2.5">{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <a
              href={proj.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary py-2.5 text-[12px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t('projects.live_demo')}
            </a>
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2.5 px-3.5 text-[12px]"
              title="Source code"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'dachahub',
      category: 'web',
      badge: '🏡 Dacha Platform',
      title: t('projects.items.dachahub.title'),
      desc: t('projects.items.dachahub.desc'),
      image: 'https://thearabianmirror.com/wp-content/uploads/2026/09/September-Edition-2-1089x730.png',
      tags: ['React', 'Tailwind CSS', 'Vercel', 'Responsive UI'],
      liveUrl: 'https://dachahub.vercel.app/',
      githubUrl: 'https://github.com/ErkinovJasur',
      featured: true,
    },
    {
      id: 'turarzone',
      category: 'web',
      badge: '🏠 Student Housing',
      title: t('projects.items.turarzone.title'),
      desc: t('projects.items.turarzone.desc'),
      image: 'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?crop=entropy&cs=srgb&fm=jpg&ixid=NHwxMjA3fDA&ixlib=rb-4.1.0&q=85',
      tags: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
      liveUrl: 'https://turarzone.vercel.app/',
      githubUrl: 'https://github.com/ErkinovJasur',
      featured: true,
    },
    {
      id: 'uninest',
      category: 'react',
      badge: '🔥 Real Estate',
      title: 'UniNest',
      desc: t('projects.items.uniikost.desc'),
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0P_7-zSRe2-OoTJScRNohlE8fl5mcDCXt-5gYky3ww&s=10',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
      liveUrl: 'https://uninestapp.netlify.app/',
      githubUrl: 'https://github.com/ErkinovJasur',
    },
    {
      id: 'weather',
      category: 'web',
      badge: '⚡ Real-time API',
      title: t('projects.items.weather.title'),
      desc: t('projects.items.weather.desc'),
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkpuYj5wBCIKVGz7yfHA2byivg0uEt3IX7QxddEaSbtxY0fzWZRvY1Jk&s=10',
      tags: ['React', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: 'https://weatherappclaudegemini.netlify.app/',
      githubUrl: 'https://github.com/ErkinovJasur/Weather-app',
    },
    {
      id: 'currency',
      category: 'tools',
      badge: '💱 Live Rates',
      title: t('projects.items.currency.title'),
      desc: t('projects.items.currency.desc'),
      image: '/projects/currency.svg',
      tags: ['React', 'Exchange Rates API', 'Tailwind CSS'],
      liveUrl: 'https://adorable-banoffee-efa0d9.netlify.app/',
      githubUrl: 'https://github.com/ErkinovJasur/Currency-convertor',
    },
    {
      id: 'contact',
      category: 'tools',
      badge: '💼 CRM System',
      title: t('projects.items.contact.title'),
      desc: t('projects.items.contact.desc'),
      image: '/projects/contact.svg',
      tags: ['React', 'CRM System', 'State Management'],
      liveUrl: 'https://portfolio-jade-three-43.vercel.app/',
      githubUrl: 'https://github.com/ErkinovJasur',
    },
  ];

  const filters = [
    { key: 'all', label: t('projects.filter_all') },
    { key: 'web', label: t('projects.filter_web') },
    { key: 'react', label: t('projects.filter_react') },
    { key: 'tools', label: t('projects.filter_tools') },
  ];

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="eyebrow mb-4">{t('projects.label')}</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-main mt-4 mb-7">
            {t('projects.title_part1')}{' '}
            <span className="gradient-text">{t('projects.title_part2')}</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all ${
                  filter === tab.key ? 'text-white' : 'text-dim hover:text-main'
                }`}
                style={
                  filter === tab.key
                    ? {
                        background: 'linear-gradient(110deg, var(--accent-2), var(--accent), var(--accent-3))',
                        boxShadow: '0 10px 26px -12px var(--glow)',
                      }
                    : { background: 'var(--glass)', border: '1px solid var(--line)' }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} index={i} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
