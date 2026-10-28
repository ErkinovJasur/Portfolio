import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket,
  LayoutTemplate,
  Building2,
  ShoppingCart,
  Code2,
  Sparkles,
  Check,
  ArrowRight,
  Clock,
  ClipboardList,
  PenTool,
  CodeXml,
  RocketIcon,
  X,
} from 'lucide-react';

const icons = [LayoutTemplate, Rocket, Building2, ShoppingCart, Code2, Sparkles];
const stepIcons = [ClipboardList, PenTool, CodeXml, RocketIcon];

export default function Services() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  const items = t('services.items', { returnObjects: true });
  const addons = t('services.addons', { returnObjects: true });
  const steps = t('services.steps', { returnObjects: true });

  if (!Array.isArray(items)) return null;
  const picked = selected !== null ? items[selected] : null;

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="eyebrow mb-4">{t('services.label')}</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-main mt-4 mb-4">
            {t('services.title_part1')}{' '}
            <span className="gradient-text">{t('services.title_part2')}</span>
          </h2>
          <p className="text-dim max-w-2xl mx-auto text-[15px] sm:text-base">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isPicked = selected === i;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(i)}
                className={`relative surface surface-hover rounded-[1.75rem] p-6 flex flex-col cursor-pointer ${
                  item.popular ? 'lg:-translate-y-2' : ''
                }`}
                style={
                  isPicked
                    ? {
                        borderColor: 'color-mix(in srgb, var(--accent) 65%, transparent)',
                        boxShadow: '0 30px 70px -28px var(--glow), 0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent)',
                      }
                    : item.popular
                    ? {
                        borderColor: 'color-mix(in srgb, var(--accent) 45%, transparent)',
                        boxShadow: '0 30px 70px -30px var(--glow)',
                      }
                    : undefined
                }
              >
                {item.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(110deg, var(--accent-2), var(--accent), var(--accent-3))',
                      boxShadow: '0 8px 20px -8px var(--glow)',
                    }}
                  >
                    {t('services.popular')}
                  </span>
                )}

                {isPicked && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: 'linear-gradient(110deg, var(--accent-2), var(--accent), var(--accent-3))',
                      boxShadow: '0 6px 16px -6px var(--glow)',
                    }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.span>
                )}

                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: 'color-mix(in srgb, var(--accent) 13%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent) 26%, transparent)',
                    color: 'var(--accent)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-heading text-lg font-semibold text-main mb-1.5">{item.name}</h3>
                <p className="text-[12.5px] text-dim leading-relaxed mb-5 min-h-[40px]">{item.desc}</p>

                <div className="flex items-end gap-1.5 mb-1">
                  <span className="font-heading text-[1.7rem] font-bold text-main leading-none">
                    {item.price}
                  </span>
                  {item.unit && <span className="text-[11px] text-dim font-medium mb-0.5">{item.unit}</span>}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-dim mb-5">
                  <Clock className="w-3 h-3" />
                  {t('services.timeline')}: {item.delivery}
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px] text-dim">
                      <span
                        className="mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'color-mix(in srgb, var(--accent) 16%, transparent)' }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: 'var(--accent)' }} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(isPicked ? null : i);
                  }}
                  className={`py-2.5 text-[12px] w-full ${isPicked ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {isPicked ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      {t('services.selected')}
                    </>
                  ) : (
                    <>
                      {t('services.select')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Selection summary */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            {picked ? (
              <motion.div
                key="picked"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="surface rounded-[1.75rem] p-6 sm:p-7 relative overflow-hidden"
                style={{ borderColor: 'color-mix(in srgb, var(--accent) 45%, transparent)' }}
              >
                <div
                  className="absolute -top-24 -right-20 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                  style={{ background: 'var(--glow)' }}
                />
                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="min-w-0">
                    <span className="eyebrow mb-3">{t('services.selected_title')}</span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-main mb-1.5">
                      {picked.name}
                    </h3>
                    <p className="text-[13px] text-dim mb-4 max-w-xl">{picked.desc}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip text-[11px]">
                        <Clock className="w-3 h-3" />
                        {picked.delivery}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4 shrink-0">
                    <div className="text-left sm:text-right">
                      <div className="flex items-end gap-1.5">
                        <span className="font-heading text-3xl sm:text-4xl font-bold gradient-text leading-none">
                          {picked.price}
                        </span>
                        {picked.unit && (
                          <span className="text-[12px] text-dim font-medium mb-1">{picked.unit}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="#contact" className="btn-primary px-6 py-3 text-[13px]">
                        {t('services.contact')}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelected(null)}
                        className="icon-btn w-10 h-10"
                        aria-label={t('services.clear')}
                        title={t('services.clear')}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="surface rounded-[1.5rem] px-6 py-5 flex items-center justify-center gap-2.5 text-center"
              >
                <Sparkles className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <p className="text-[13px] text-dim">{t('services.hint')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="surface rounded-[1.75rem] p-6 sm:p-8 mt-6"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            <h3 className="font-heading font-semibold text-base text-main">{t('services.addons_title')}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {Array.isArray(addons) &&
              addons.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl"
                  style={{ background: 'var(--field)', border: '1px solid var(--line)' }}
                >
                  <span className="text-[12px] text-dim">{a.name}</span>
                  <span className="text-[11.5px] font-semibold text-main whitespace-nowrap">{a.price}</span>
                </div>
              ))}
          </div>
          <p className="text-[11.5px] text-dim mt-4">* {t('services.note')}</p>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12"
        >
          <div className="text-center mb-7">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-main">
              {t('services.process_title')}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.isArray(steps) &&
              steps.map((s, i) => {
                const StepIcon = stepIcons[i % stepIcons.length];
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="surface rounded-[1.4rem] p-5 relative overflow-hidden"
                  >
                    <span
                      className="absolute top-3 right-4 font-heading text-3xl font-bold opacity-10"
                      style={{ color: 'var(--accent)' }}
                    >
                      0{i + 1}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent) 24%, transparent)',
                        color: 'var(--accent)',
                      }}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-semibold text-[14px] text-main mb-1.5">{s.title}</h4>
                    <p className="text-[12px] text-dim leading-relaxed">{s.desc}</p>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
