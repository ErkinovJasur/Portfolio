import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';

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

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'weather',
      category: 'web',
      badge: '⚡ Real-time API',
      title: t('projects.items.weather.title'),
      desc: t('projects.items.weather.desc'),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkpuYj5wBCIKVGz7yfHA2byivg0uEt3IX7QxddEaSbtxY0fzWZRvY1Jk&s=10',
      tags: ['React', 'OpenWeather API', 'Tailwind CSS', 'Lucide Icons'],
      liveUrl: 'https://weatherappclaudegemini.netlify.app/',
      githubUrl: 'https://github.com/ErkinovJasur/Weather-app',
    },
    {
      id: 'uninest',
      category: 'react',
      badge: '🔥 Featured Platform',
      title: "UniNest",
      desc: t('projects.items.uniikost.desc'),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0P_7-zSRe2-OoTJScRNohlE8fl5mcDCXt-5gYky3ww&s=10',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
      liveUrl: 'https://uninestapp.netlify.app/',
      githubUrl: '/',
    },
    {
      id: 'currency',
      category: 'tools',
      badge: '⚡ Live Rates',
      title: t('projects.items.currency.title'),
      desc: t('projects.items.currency.desc'),
      image: '/projects/currency.svg',
      tags: ['React', 'Exchange Rates API', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://adorable-banoffee-efa0d9.netlify.app/',
      githubUrl: 'https://github.com/ErkinovJasur/Currency-convertor',
    },
    {
      id: 'contact',
      category: 'web',
      badge: '💼 CRM System',
      title: t('projects.items.contact.title'),
      desc: t('projects.items.contact.desc'),
      image: '/projects/contact.svg',
      tags: ['React', 'CRM System', 'Tailwind CSS', 'State Management'],
      liveUrl: 'https://effulgent-bonbon-a52042.netlify.app/',
      githubUrl: 'https://portfolio-jade-three-43.vercel.app/',
    }
  ];

  const filterTabs = [
    { key: 'all', label: t('projects.filter_all') },
    { key: 'react', label: t('projects.filter_react') },
    { key: 'web', label: t('projects.filter_web') },
    { key: 'tools', label: t('projects.filter_tools') },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold tracking-widest text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 uppercase mb-3">
          {t('projects.label')}
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          {t('projects.title_part1')}{' '}
          <span className="gradient-text">{t('projects.title_part2')}</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid with Ultra-Modern Card Styling */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <AnimatePresence>
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-w-[400px] group relative rounded-3xl bg-white dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-400/60 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Browser Style Frame Header */}
                <div className="bg-slate-100 dark:bg-slate-950 px-4 py-2.5 border-b border-slate-200/90 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block shadow-xs" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-2.5 h-2.5 text-pink-500" />
                    <span>{proj.badge}</span>
                  </div>
                </div>

                {/* Real Mockup Image with smooth hover zoom */}
                <div className="h-52 w-full relative overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 font-normal">
                    {proj.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 group-hover:border-purple-200 dark:group-hover:border-purple-900/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-gradient py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20 cursor-pointer text-white"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span className="text-white">{t('projects.live_demo')}</span>
                </a>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 shadow-xs transition-all"
                  title="Source code"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t('projects.source_code')}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
