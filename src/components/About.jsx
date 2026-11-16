import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Cpu,
  Palette,
  GraduationCap,
  MapPin,
  Sparkles,
  Zap,
  Code2,
  Smartphone,
  ArrowRight,
  Send,
} from 'lucide-react';
import { values, profile } from '../data/content';
import SectionHeading from './SectionHeading';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  const { t } = useTranslation();
  const focus = t('about.focus', { returnObjects: true }) || [];

  const specs = [
    {
      icon: Cpu,
      label: 'Core Stack',
      value: 'React 19 & JavaScript',
      desc: 'Zamonaviy komponentlar & tezkorlik',
    },
    {
      icon: Palette,
      label: 'Styling',
      value: 'Tailwind CSS',
      desc: 'Toza, responsiv va nafis UI',
    },
    {
      icon: GraduationCap,
      label: t('experience.types.education'),
      value: 'Mars IT School',
      desc: "Frontend Development bo'yicha",
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: profile.location,
      desc: 'Masofaviy va gibrid loyihalarga tayyor',
    },
  ];

  const valueIcons = {
    clean: Code2,
    responsive: Smartphone,
    performance: Zap,
  };

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <motion.div {...fade()}>
          <SectionHeading
            index="01"
            label={t('about.label')}
            title={
              <>
                {t('about.title_part1')}{' '}
                <span className="font-serif-accent text-[var(--accent)] font-normal italic">
                  {t('about.title_part2')}
                </span>
              </>
            }
            description="React va zamonaviy veb-texnologiyalar yordamida toza kod, qulay foydalanuvchi tajribasi va yuqori tezlikka ega veb-saytlar yarataman."
          />
        </motion.div>

        {/* Main About Story Card */}
        <motion.div
          {...fade(0.06)}
          className="brown-card mt-12 p-6 sm:p-10 border shadow-xl"
          style={{
            background: 'var(--surface)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* Elegant Monogram Avatar */}
            <div className="relative shrink-0">
              <div
                className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl shadow-xl border overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #241A13 0%, #17110C 100%)',
                  borderColor: 'var(--line-strong)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(217, 168, 119, 0.35) 0%, transparent 70%)',
                  }}
                />
                <span className="font-heading text-[28px] sm:text-[34px] font-extrabold text-[var(--accent)] tracking-tight relative z-10">
                  {profile.initials}
                </span>
              </div>

              {/* Status Badge */}
              <span
                className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-[#18110D] text-[10px] font-bold shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)',
                }}
                title="Status: Yangi loyihalarga ochiq"
              >
                ✓
              </span>
            </div>

            {/* Bio & Focus Points */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-heading text-[20px] sm:text-[24px] font-bold text-main tracking-tight">
                  {profile.name}
                </h3>
                <span
                  className="rounded-full px-3 py-0.5 text-[11px] font-semibold text-[var(--accent)] border"
                  style={{
                    background: 'var(--surface-translucent)',
                    borderColor: 'var(--line-strong)',
                  }}
                >
                  {profile.role}
                </span>
              </div>

              <p className="mt-3 text-[15px] sm:text-[16.5px] leading-[1.75] text-dim">
                {t('about.who_desc')}
              </p>

              {/* Focus tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {Array.isArray(focus) &&
                  focus.map((item) => (
                    <span key={item} className="chip text-[12px] font-medium">
                      <Sparkles className="h-3 w-3 text-[var(--accent)]" />
                      {item}
                    </span>
                  ))}
              </div>

              {/* Quick Action Links inside About */}
              <div
                className="mt-6 pt-5 border-t flex flex-wrap items-center gap-3"
                style={{ borderColor: 'var(--line)' }}
              >
                <a
                  href="#projects"
                  className="btn-primary text-[13px] py-1.5 px-4 rounded-full flex items-center gap-1.5"
                >
                  <span>Loyihalarni ko'rish</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={profile.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-[13px] py-1.5 px-4 rounded-full flex items-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>Telegram orqali yozish</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Specs Bento Grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                {...fade(0.08 + index * 0.04)}
                className="brown-card brown-card-hover p-5 border"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--line)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label text-[10.5px]">{spec.label}</span>
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--accent)]"
                    style={{ background: 'var(--surface-2)' }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-[15px] font-bold text-main tracking-tight">
                  {spec.value}
                </p>
                <p className="mt-1 text-[12px] text-dim">{spec.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Core Values Cards */}
        <div className="mt-4 grid gap-3.5 sm:grid-cols-3">
          {values.map((item, index) => {
            const Icon = valueIcons[item.id] || Sparkles;
            return (
              <motion.div
                key={item.id}
                {...fade(0.12 + index * 0.05)}
                className="brown-card brown-card-hover p-6 sm:p-7 border"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--line)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--accent)]"
                    style={{ background: 'var(--surface-2)' }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[12px] font-bold text-dim">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-[17px] font-bold text-main">
                  {t(`about.values.${item.id}`)}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-dim">
                  {t(`about.values.${item.id}_desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
