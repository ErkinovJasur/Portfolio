import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  AlertCircle,
  MessageSquare,
  MapPin,
} from 'lucide-react';
import { profile } from '../data/content';
import SectionHeading from './SectionHeading';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(null);

  const validateField = (field, values = form) => {
    const value = values[field].trim();
    if (field === 'name' && value.length < 2) return t('contact.errors.name');
    if (field === 'email' && !emailPattern.test(value)) return t('contact.errors.email');
    if (field === 'message' && value.length < 10) return t('contact.errors.message');
    return '';
  };

  const validateAll = () => ({
    name: validateField('name'),
    email: validateField('email'),
    message: validateField('message'),
  });

  const onChange = (field, value) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, next) }));
    }
  };

  const onBlur = (field) => {
    setErrors((prev) => ({ ...prev, [field]: validateField(field) }));
  };

  const submit = (event) => {
    event.preventDefault();
    const next = validateAll();
    setErrors(next);
    if (next.name || next.email || next.message) return;

    const text = [
      'Portfolio orqali yangi xabar:',
      '',
      `Ism: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n');

    window.open(
      `${profile.telegramUrl}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const copy = (value, key) => {
    navigator.clipboard?.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  const contactItems = [
    {
      key: 'telegram',
      title: 'Telegram',
      value: profile.telegram,
      href: profile.telegramUrl,
      icon: TelegramIcon,
      color: '#C8925A',
    },
    {
      key: 'email',
      title: t('contact.email'),
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      copyable: true,
      color: '#D9A877',
    },
    {
      key: 'linkedin',
      title: 'LinkedIn',
      value: profile.linkedin,
      href: profile.linkedinUrl,
      icon: LinkedinIcon,
      color: '#C8925A',
    },
    {
      key: 'phone',
      title: t('contact.phone'),
      value: profile.phone,
      href: profile.phoneHref,
      icon: Phone,
      copyable: true,
      color: '#D9A877',
    },
    {
      key: 'github',
      title: 'GitHub',
      value: profile.github,
      href: profile.githubUrl,
      icon: GithubIcon,
      color: '#9E8D7F',
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <motion.div {...fade()}>
          <SectionHeading
            index="05"
            label={t('contact.label')}
            title={
              <>
                {t('contact.title_part1')}{' '}
                <span className="font-serif-accent text-[var(--accent)] font-normal italic">
                  {t('contact.title_part2')}
                </span>
              </>
            }
            description={t('contact.subtitle')}
          />
        </motion.div>

        {/* Contact Container */}
        <motion.div
          {...fade(0.06)}
          className="brown-card mt-12 overflow-hidden border shadow-2xl"
          style={{ borderColor: 'var(--line)' }}
        >
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            {/* Left: Contact Info */}
            <div className="p-6 sm:p-9 lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--accent)]"
                    style={{ background: 'var(--surface-2)' }}
                  >
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  <h4 className="font-heading text-[17px] font-bold text-main">
                    {t('footer.contact')}
                  </h4>
                </div>

                <p className="mt-2 text-[13px] text-dim">
                  Bir klik orqali bog'laning yoki ma'lumotlarni nusxa oling.
                </p>

                <div className="mt-6 space-y-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.key}
                        className="flex items-center justify-between gap-3 rounded-xl p-3 border transition-colors hover:border-[var(--line-strong)]"
                        style={{
                          background: 'var(--surface-2)',
                          borderColor: 'var(--line)',
                        }}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#18110D] shadow-xs"
                            style={{
                              background: 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)',
                            }}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <span className="block text-[10px] font-mono font-semibold text-dim uppercase tracking-wider">
                              {item.title}
                            </span>
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="mt-0.5 block truncate text-[13.5px] font-bold text-main hover:text-[var(--accent)] transition-colors"
                            >
                              {item.value}
                            </a>
                          </div>
                        </div>

                        {item.copyable ? (
                          <button
                            type="button"
                            onClick={() => copy(item.value, item.key)}
                            className="icon-btn h-8 w-8 shrink-0"
                            title={t('common.copy')}
                          >
                            {copied === item.key ? (
                              <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn h-8 w-8 shrink-0"
                            title={item.title}
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status pill & location */}
              <div
                className="rounded-xl p-4 border flex items-center justify-between gap-3"
                style={{
                  background: 'var(--surface-translucent)',
                  borderColor: 'var(--line)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A877] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C8925A]" />
                  </span>
                  <div className="text-[12px]">
                    <span className="font-bold text-main block">{t('hero.status')}</span>
                    <span className="text-dim text-[11px]">Javob berish vaqti: tezkor</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11.5px] font-mono text-dim">
                  <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>Toshkent</span>
                </div>
              </div>
            </div>

            {/* Right: Modern Contact Form */}
            <div className="p-6 sm:p-9 lg:col-span-7">
              <h4 className="font-heading text-[18px] font-bold text-main">
                {t('contact.form_title')}
              </h4>
              <p className="mt-1 text-[13px] text-dim">
                Xabaringiz to'g'ridan-to'g'ri Telegramimga yetib boradi.
              </p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-main mb-1.5">
                    {t('contact.form_name')}
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    onBlur={() => onBlur('name')}
                    placeholder={t('contact.form_name_placeholder')}
                    className={`field ${errors.name ? 'field-error' : ''}`}
                    maxLength={80}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-main mb-1.5">
                    {t('contact.form_email')}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => onChange('email', e.target.value)}
                    onBlur={() => onBlur('email')}
                    placeholder={t('contact.form_email_placeholder')}
                    className={`field ${errors.email ? 'field-error' : ''}`}
                    maxLength={120}
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-main mb-1.5">
                    {t('contact.form_message')}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => onChange('message', e.target.value)}
                    onBlur={() => onBlur('message')}
                    placeholder={t('contact.form_message_placeholder')}
                    className={`field ${errors.message ? 'field-error' : ''}`}
                    maxLength={1000}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-[11.5px] text-rose-400 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-[14px] font-semibold rounded-xl"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t('contact.form_submit')}</span>
                  </button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl p-3.5 text-center text-[12.5px] font-semibold border"
                    style={{
                      background: 'rgba(200, 146, 90, 0.15)',
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    ✓ {t('contact.form_success')}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
