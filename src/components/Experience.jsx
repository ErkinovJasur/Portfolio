import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Calendar,
  Briefcase,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
} from 'lucide-react';
import { timeline, achievements } from '../data/content';
import SectionHeading from './SectionHeading';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

const timelineIcons = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  book: BookOpen,
};

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <motion.div {...fade()}>
          <SectionHeading
            index="04"
            label={t('experience.label')}
            title={
              <>
                {t('experience.title_part1')}{' '}
                <span className="font-serif-accent text-[var(--accent)] font-normal italic">
                  {t('experience.title_part2')}
                </span>
              </>
            }
            description={t('experience.subtitle')}
          />
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12 items-start">
          {/* Timeline Card */}
          <motion.div
            {...fade()}
            className="brown-card p-6 sm:p-8 lg:col-span-7 border"
            style={{ borderColor: 'var(--line)' }}
          >
            <div
              className="flex items-center gap-2.5 pb-4 border-b"
              style={{ borderColor: 'var(--line)' }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--accent)]"
                style={{ background: 'var(--surface-2)' }}
              >
                <Calendar className="h-4 w-4" />
              </span>
              <h3 className="font-heading text-[17px] font-bold text-main">
                {t('experience.label')}
              </h3>
            </div>

            {/* Vertical Timeline */}
            <div className="mt-8 space-y-8">
              {timeline.map((item, index) => {
                const Icon = timelineIcons[item.icon] || Briefcase;
                const isWork = item.type === 'work';

                return (
                  <div key={item.id} className="relative flex gap-4 sm:gap-6 group">
                    {/* Node & vertical line */}
                    <div className="flex flex-col items-center">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#18110D] shadow-md transition-transform group-hover:scale-105"
                        style={{
                          background: isWork
                            ? 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)'
                            : 'linear-gradient(135deg, #E8C49E 0%, #B87B42 100%)',
                          boxShadow: '0 4px 14px -3px rgba(200, 146, 90, 0.45)',
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {index !== timeline.length - 1 && (
                        <div
                          className="w-[1.5px] flex-1 my-2"
                          style={{
                            background: 'linear-gradient(to bottom, var(--line-strong), var(--line))',
                          }}
                        />
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11.5px] font-bold text-[var(--accent)]">
                          {item.period}
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            background: 'var(--surface-2)',
                            color: 'var(--muted)',
                            border: '1px solid var(--line)',
                          }}
                        >
                          {t(`experience.types.${item.type}`)}
                        </span>
                      </div>

                      <h4 className="mt-1.5 font-heading text-[17px] font-bold text-main group-hover:text-[var(--accent)] transition-colors">
                        {t(`experience.timeline.${item.id}.title`)}
                      </h4>

                      <p className="mt-0.5 text-[13px] font-semibold text-[var(--accent-sand)]">
                        {t(`experience.timeline.${item.id}.org`)}
                      </p>

                      <p className="mt-2 text-[13.5px] leading-relaxed text-dim">
                        {t(`experience.timeline.${item.id}.desc`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Certificate & Achievements */}
          <div className="space-y-5 lg:col-span-5">
            {/* Certificate Card */}
            <motion.div
              {...fade(0.08)}
              className="brown-card brown-card-hover p-6 sm:p-7 relative overflow-hidden border"
              style={{ borderColor: 'var(--line)' }}
            >
              {/* Subtle background glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl"
                style={{ background: 'var(--accent)' }}
              />

              <div className="flex items-center justify-between gap-3">
                <span className="mono-label text-[11px] text-[var(--accent)] font-bold">
                  {t('experience.certificates_title')}
                </span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--accent)]"
                  style={{ background: 'var(--surface-2)' }}
                >
                  <BadgeCheck className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#18110D] shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)',
                    boxShadow: '0 4px 14px -3px rgba(200, 146, 90, 0.45)',
                  }}
                >
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-heading text-[17px] font-bold text-main">
                    {t('experience.certificate.name')}
                  </h4>
                  <p className="text-[13px] font-medium text-dim mt-0.5">
                    {t('experience.certificate.org')}
                  </p>
                </div>
              </div>

              <div
                className="mt-5 pt-3.5 border-t flex items-center gap-2"
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-[12px] font-medium text-dim">
                  {t('experience.certificate.status')}
                </span>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              {...fade(0.14)}
              className="brown-card p-6 sm:p-7 border"
              style={{ borderColor: 'var(--line)' }}
            >
              <div
                className="flex items-center justify-between pb-3.5 border-b"
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="mono-label text-[11px]">
                  {t('experience.achievements_title')}
                </span>
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {achievements.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl p-3.5 border transition-all hover:border-[var(--line-strong)]"
                    style={{
                      background: 'var(--surface-2)',
                      borderColor: 'var(--line)',
                    }}
                  >
                    <div className="font-heading text-[22px] font-extrabold leading-none text-main">
                      {item.value}
                    </div>
                    <p className="mt-2 text-[12px] font-bold text-main">
                      {t(`experience.achievements.${item.id}.title`)}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-dim">
                      {t(`experience.achievements.${item.id}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
