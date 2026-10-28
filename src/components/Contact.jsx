import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

function GithubIcon({ className = 'w-5 h-5' }) {
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

function LinkedinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const [copiedKey, setCopiedKey] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const text = `👋 New message (Portfolio):\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n💬 Message: ${form.message}`;
    window.open(`https://t.me/timurovccc?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contacts = [
    {
      key: 'phone',
      title: t('contact.phone'),
      value: '+998 90 066 68 52',
      href: 'tel:+998900666852',
      icon: Phone,
      action: 'copy',
    },
    {
      key: 'email',
      title: t('contact.email'),
      value: 'erkinovjasur80@gmail.com',
      href: 'mailto:erkinovjasur80@gmail.com',
      icon: Mail,
      action: 'copy',
    },
    {
      key: 'telegram',
      title: t('contact.telegram'),
      value: '@timurovccc',
      href: 'https://t.me/timurovccc',
      icon: Send,
      action: 'link',
    },
    {
      key: 'linkedin',
      title: t('contact.linkedin'),
      value: 'linkedin.com/in/erkinov-jasur',
      href: 'https://www.linkedin.com/in/jasur-erkinov-11bb4b3a4/',
      icon: LinkedinIcon,
      action: 'link',
    },
    {
      key: 'github',
      title: t('contact.github'),
      value: 'github.com/erkinovjasur',
      href: 'https://github.com/erkinovjasur',
      icon: GithubIcon,
      action: 'link',
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="eyebrow mb-4">{t('nav.contact')}</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-main mt-4 mb-4">
            {t('contact.title_part1')}{' '}
            <span className="gradient-text">{t('contact.title_part2')}</span>
          </h2>
          <p className="text-dim max-w-xl mx-auto text-[15px] sm:text-base">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 items-start">
          {/* Contact cards */}
          <div className="lg:col-span-6 space-y-3">
            {contacts.map((item, i) => {
              const Icon = item.icon;
              const isCopied = copiedKey === item.key;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="surface surface-hover rounded-[1.4rem] p-4 sm:p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent) 24%, transparent)',
                        color: 'var(--accent)',
                      }}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase font-semibold tracking-[0.18em] text-dim mb-0.5">
                        {item.title}
                      </span>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="font-semibold text-[13.5px] sm:text-sm text-main hover:opacity-70 transition-opacity truncate block"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  {item.action === 'copy' ? (
                    <button
                      onClick={() => copy(item.value, item.key)}
                      className="icon-btn h-9 px-3 text-[11px] font-semibold gap-1.5 shrink-0"
                      title="Copy"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="icon-btn w-9 h-9 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 surface rounded-[1.75rem] p-6 sm:p-8 relative overflow-hidden"
          >
            <div
              className="absolute -top-24 -right-20 w-56 h-56 rounded-full blur-3xl"
              style={{ background: 'var(--glow)' }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)',
                    color: 'var(--accent)',
                  }}
                >
                  <MessageSquare className="w-[18px] h-[18px]" />
                </div>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-main">
                  {t('contact.form_title')}
                </h3>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-dim mb-1.5">
                    {t('contact.form_name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t('contact.form_name_placeholder')}
                    className="field"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-dim mb-1.5">
                    {t('contact.form_email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t('contact.form_email_placeholder')}
                    className="field"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-dim mb-1.5">
                    {t('contact.form_message')}
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t('contact.form_message_placeholder')}
                    className="field resize-none"
                  />
                </div>

                <button type="submit" className="w-full btn-primary py-3.5 text-sm">
                  <Send className="w-4 h-4" />
                  {t('contact.form_submit')}
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-xl text-[12px] font-medium flex items-center gap-2"
                      style={{
                        background: 'color-mix(in srgb, #10b981 14%, transparent)',
                        border: '1px solid color-mix(in srgb, #10b981 35%, transparent)',
                        color: '#10b981',
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      {t('contact.form_success')}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
