import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Eye,
} from 'lucide-react';
import { projects, projectFilters } from '../data/content';
import SectionHeading from './SectionHeading';
import { GithubIcon } from './Icons';

function ModernProjectCard({ project, index, t }) {
  const title = t(`projects.items.${project.id}.title`);
  const description = t(`projects.items.${project.id}.desc`);
  const primaryUrl = project.liveUrl || project.githubUrl;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full flex flex-col"
    >
      <div
        className="brown-card brown-card-hover flex h-full flex-col overflow-hidden border shadow-lg"
        style={{
          background: 'var(--surface)',
          borderColor: 'var(--line)',
        }}
      >
        {/* Project Image Preview Container */}
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden aspect-[16/10] bg-[var(--surface-2)] border-b border-[var(--line)] cursor-pointer"
          aria-label={`${title} — ${project.liveUrl ? 'Demo' : 'GitHub'}`}
        >
          <img
            src={project.image}
            alt={`${title} preview`}
            loading="lazy"
            width="1200"
            height="750"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          {/* Warm Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
            <span
              className="mono-label rounded-full px-3 py-1 text-[10.5px] font-bold tracking-wider"
              style={{
                background: 'rgba(24, 17, 13, 0.85)',
                color: 'var(--accent)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid var(--line-strong)',
              }}
            >
              {t(`projects.types.${project.category}`)}
            </span>

            {project.featured ? (
              <span
                className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)',
                  color: '#18110D',
                }}
              >
                <Sparkles className="h-2.5 w-2.5" />
                {t('projects.featured')}
              </span>
            ) : null}
          </div>

          {/* Floating Live Preview Button on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/35">
            <span className="btn-primary py-2 px-4 text-[13px] rounded-full shadow-2xl flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              <span>Ko'rish</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </a>

        {/* Project Info & Description */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title block"
          >
            <h3 className="font-heading text-[20px] font-bold text-main group-hover/title:text-[var(--accent)] transition-colors flex items-center justify-between gap-2">
              <span>{title}</span>
              <ArrowUpRight className="h-4 w-4 text-dim transition-transform duration-300 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 shrink-0" />
            </h3>
          </a>

          <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-dim">
            {description}
          </p>

          {/* Technology Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="chip text-[11.5px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons: Ko'rish & GitHub */}
          <div
            className="mt-6 flex items-center gap-3 border-t pt-4"
            style={{ borderColor: 'var(--line)' }}
          >
            {project.liveUrl ? (
              <>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 h-9 gap-1.5 text-[13px] rounded-full"
                >
                  <span>Ko'rish</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-9 gap-1.5 px-4 text-[13px] rounded-full"
                  title="GitHub Kodini ko'rish"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full h-9 gap-1.5 text-[13px] rounded-full"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Ko'rish (GitHub)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const visible =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <SectionHeading
          index="03"
          label={t('projects.label')}
          title={
            <>
              {t('projects.title_part1')}{' '}
              <span className="font-serif-accent text-[var(--accent)] font-normal italic">
                {t('projects.title_part2')}
              </span>
            </>
          }
          description={t('projects.subtitle')}
        />

        {/* Filters Bar with Smooth Sliding Pill */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div
            className="inline-flex items-center gap-1 rounded-full p-1.5 border shadow-xs"
            style={{
              background: 'var(--surface-translucent)',
              borderColor: 'var(--line)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {projectFilters.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  aria-pressed={active}
                  className="relative rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-colors duration-200"
                  style={{
                    color: active ? '#18110D' : 'var(--muted)',
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="project-tab-pill"
                      className="absolute inset-0 rounded-full shadow-sm"
                      style={{
                        background: 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)',
                      }}
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{t(`projects.filters.${tab.id}`)}</span>
                </button>
              );
            })}
          </div>

          <span className="font-mono text-[12px] font-semibold text-dim">
            {String(visible.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} loyiha
          </span>
        </div>

        {/* Project Grid */}
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <ModernProjectCard key={project.id} project={project} index={index} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
