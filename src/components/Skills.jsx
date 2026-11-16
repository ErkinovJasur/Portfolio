import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  Wrench,
  Bot,
  Sparkles,
  Cpu,
  Layers,
} from 'lucide-react';
import { coreSkills, skillGroups } from '../data/content';
import SectionHeading from './SectionHeading';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

const groupIcons = {
  frontend: Code,
  data: Database,
  tools: Wrench,
  ai: Bot,
};

export default function Skills() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: "Barchasi" },
    { id: 'frontend', label: t('skills.groups.frontend') },
    { id: 'data', label: t('skills.groups.data') },
    { id: 'tools', label: t('skills.groups.tools') },
    { id: 'ai', label: t('skills.groups.ai') },
  ];

  const filteredGroups =
    selectedCategory === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.id === selectedCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <motion.div {...fade()}>
          <SectionHeading
            index="02"
            label={t('skills.label')}
            title={
              <>
                {t('skills.title_part1')}{' '}
                <span className="font-serif-accent text-[var(--accent)] font-normal italic">
                  {t('skills.title_part2')}
                </span>
              </>
            }
            description={t('skills.subtitle')}
          />
        </motion.div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full p-1.5 border shadow-sm"
            style={{
              background: 'var(--surface-translucent)',
              borderColor: 'var(--line)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-200 ${
                    active
                      ? 'btn-primary text-[#18110D] shadow-md'
                      : 'text-dim hover:text-main'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12 items-start">
          {/* Core Skills with Progress Bars */}
          <motion.div
            {...fade()}
            className="brown-card p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between border"
            style={{ borderColor: 'var(--line)' }}
          >
            <div>
              <div
                className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b"
                style={{ borderColor: 'var(--line)' }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--accent)]"
                    style={{ background: 'var(--surface-2)' }}
                  >
                    <Cpu className="h-4 w-4" />
                  </span>
                  <h3 className="font-heading text-[17px] font-bold text-main">
                    {t('skills.core_title')}
                  </h3>
                </div>
                <p className="text-[12px] text-dim">{t('skills.core_desc')}</p>
              </div>

              {/* Progress bars */}
              <div className="mt-6 space-y-4">
                {coreSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-baseline justify-between gap-3 text-[13.5px]">
                      <span className="font-semibold text-main">{skill.name}</span>
                      <span className="font-mono text-[11.5px] font-bold text-[var(--accent)]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Warm bronze progress track */}
                    <div
                      className="mt-2 h-2.5 overflow-hidden rounded-full p-0.5 border"
                      style={{
                        background: 'var(--surface-2)',
                        borderColor: 'var(--line)',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{
                          duration: 0.9,
                          delay: index * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #C8925A 0%, #D9A877 70%, #F3E9DC 100%)',
                          boxShadow: '0 0 10px rgba(200, 146, 90, 0.4)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-6 pt-4 border-t flex items-center justify-between text-[11.5px] text-dim"
              style={{ borderColor: 'var(--line)' }}
            >
              <span className="flex items-center gap-1.5 font-mono">
                <Layers className="h-3.5 w-3.5 text-[var(--accent)]" />
                Frontend Proficiency
              </span>
              <span className="text-[var(--accent-sand)] font-medium font-mono">
                ● Doimiy amaliyot & yangilanish
              </span>
            </div>
          </motion.div>

          {/* Categorized Tech Badges */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filteredGroups.map((group) => {
                const Icon = groupIcons[group.id] || Sparkles;
                return (
                  <motion.div
                    key={group.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="brown-card brown-card-hover p-5 border"
                    style={{ borderColor: 'var(--line)' }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--accent)]"
                          style={{ background: 'var(--surface-2)' }}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className="font-heading text-[15px] font-bold text-main">
                          {t(`skills.groups.${group.id}`)}
                        </h4>
                      </div>
                      <span className="rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold bg-[var(--surface-2)] text-dim">
                        {group.items.length} ta
                      </span>
                    </div>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="chip text-[12px] font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
