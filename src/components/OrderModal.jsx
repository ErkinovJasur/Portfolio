import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Sparkles,
  Check,
  LayoutTemplate,
  UserRound,
  Code2,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';
import { profile } from '../data/content';

const initialForm = { name: '', contact: '', type: '', budget: '', message: '' };

const typeOptions = [
  { id: 'landing', icon: LayoutTemplate },
  { id: 'portfolio', icon: UserRound },
  { id: 'webapp', icon: Code2 },
  { id: 'other', icon: HelpCircle },
];

export default function OrderModal({ open, onClose }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastText, setLastText] = useState('');
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = t('order.errors.name');
    }
    if (!form.contact.trim() || form.contact.trim().length < 3) {
      errs.contact = t('order.errors.contact');
    }
    if (!form.type) {
      errs.type = t('order.errors.type');
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = t('order.errors.message');
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const typeLabel = t(`order.types.${form.type}`);
    const text = [
      '🚀 Yangi buyurtma so\'rovi (Portfolio):',
      '',
      `Mijoz: ${form.name.trim()}`,
      `Aloqa: ${form.contact.trim()}`,
      `Loyiha turi: ${typeLabel}`,
      form.budget ? `Budjet: ${form.budget.trim()}` : null,
      '',
      'Tafsilotlar:',
      form.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    setLastText(text);
    window.open(`${profile.telegramUrl}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Panel Container */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="brown-card relative z-10 w-full max-w-[560px] my-auto max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--line-strong)',
            }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b shrink-0"
              style={{
                borderColor: 'var(--line)',
                background: 'var(--surface-2)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-[var(--accent)] border"
                  style={{
                    background: 'var(--surface)',
                    borderColor: 'var(--line)',
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span className="mono-label text-[11px] font-bold text-[var(--accent)]">
                  {t('order.badge')}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="icon-btn h-8 w-8 text-dim hover:text-main"
                aria-label={t('order.close')}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              {!submitted ? (
                <>
                  <div className="text-center">
                    <h3 className="font-heading text-[22px] sm:text-[24px] font-extrabold text-main">
                      {t('order.title')}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-dim">
                      {t('order.subtitle')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Project Type Grid */}
                    <div>
                      <label className="block text-[12px] font-semibold text-main mb-2">
                        {t('order.type')} <span className="text-[var(--accent)]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {typeOptions.map((opt) => {
                          const Icon = opt.icon;
                          const isSelected = form.type === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setForm((prev) => ({ ...prev, type: opt.id }));
                                setErrors((prev) => ({ ...prev, type: '' }));
                              }}
                              className="relative flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-200"
                              style={{
                                background: isSelected
                                  ? 'var(--mobile-item-active-bg)'
                                  : 'var(--surface-2)',
                                borderColor: isSelected
                                  ? 'var(--accent)'
                                  : 'var(--line)',
                                color: isSelected
                                  ? 'var(--accent)'
                                  : 'var(--muted)',
                                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                                boxShadow: isSelected ? '0 4px 16px -4px var(--glow)' : 'none',
                              }}
                            >
                              {isSelected && (
                                <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[#18110D]">
                                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                                </span>
                              )}
                              <Icon className="h-5 w-5 mb-2" />
                              <span className="text-[12px] font-semibold leading-tight">
                                {t(`order.types.${opt.id}`)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.type && (
                        <p className="mt-1.5 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                          <AlertCircle className="h-3 w-3" />
                          {errors.type}
                        </p>
                      )}
                    </div>

                    {/* Name & Contact Info */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[12px] font-semibold text-main mb-1.5">
                          {t('order.name')} <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm((p) => ({ ...p, name: e.target.value }));
                            setErrors((p) => ({ ...p, name: '' }));
                          }}
                          placeholder={t('order.name_placeholder')}
                          className={`field ${errors.name ? 'field-error' : ''}`}
                        />
                        {errors.name && (
                          <p className="mt-1 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[12px] font-semibold text-main mb-1.5">
                          {t('order.contact')} <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.contact}
                          onChange={(e) => {
                            setForm((p) => ({ ...p, contact: e.target.value }));
                            setErrors((p) => ({ ...p, contact: '' }));
                          }}
                          placeholder={t('order.contact_placeholder')}
                          className={`field ${errors.contact ? 'field-error' : ''}`}
                        />
                        {errors.contact && (
                          <p className="mt-1 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                            <AlertCircle className="h-3 w-3" />
                            {errors.contact}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Optional Budget */}
                    <div>
                      <label className="block text-[12px] font-semibold text-main mb-1.5">
                        {t('order.budget')}
                      </label>
                      <input
                        type="text"
                        value={form.budget}
                        onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                        placeholder={t('order.budget_placeholder')}
                        className="field"
                      />
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-[12px] font-semibold text-main mb-1.5">
                        {t('order.message')} <span className="text-[var(--accent)]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, message: e.target.value }));
                          setErrors((p) => ({ ...p, message: '' }));
                        }}
                        placeholder={t('order.message_placeholder')}
                        className={`field ${errors.message ? 'field-error' : ''}`}
                      />
                      {errors.message && (
                        <p className="mt-1 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-primary w-full py-3.5 text-[14px] font-semibold rounded-xl flex items-center justify-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>{t('order.submit')}</span>
                      </button>
                      <p className="mt-2.5 text-center text-[11px] text-dim">
                        {t('order.note')}
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl mb-4 border"
                    style={{
                      background: 'rgba(200, 146, 90, 0.15)',
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-[22px] font-bold text-main">
                    {t('order.success_title')}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-dim max-w-sm mx-auto">
                    {t('order.success_desc')}
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center">
                    <a
                      href={`${profile.telegramUrl}?text=${encodeURIComponent(lastText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2.5 px-5 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>{t('order.open_telegram')}</span>
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-secondary py-2.5 px-5 rounded-xl"
                    >
                      {t('order.close')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
