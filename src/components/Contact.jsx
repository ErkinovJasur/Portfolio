import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Telegramga xabarni tayyorlash va to'g'ridan-to'g'ri jo'natish (chat ochish)
    const text = `👋 Yangi xabar (Portfolio Saytdan):\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n💬 Xabar: ${formData.message}`;
    const telegramUrl = `https://t.me/erkinov_jasur?text=${encodeURIComponent(text)}`;
    
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contacts = [
    {
      key: 'phone',
      title: t('contact.phone'),
      value: '+998 90 066 68 52',
      href: 'tel:+998900666852',
      icon: Phone,
      color: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
      borderColor: 'border-emerald-200 dark:border-emerald-500/30',
      actionType: 'copy',
    },
    {
      key: 'email',
      title: t('contact.email'),
      value: 'erkinovjasur80@gmail.com',
      href: 'mailto:erkinovjasur80@gmail.com',
      icon: Mail,
      color: 'text-pink-500 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-500/10',
      borderColor: 'border-pink-200 dark:border-pink-500/30',
      actionType: 'copy',
    },
    {
      key: 'telegram',
      title: t('contact.telegram'),
      value: '@timurovccc',
      href: 'https://t.me/timurovccc',
      icon: Send,
      color: 'text-sky-500 dark:text-sky-400',
      bgColor: 'bg-sky-50 dark:bg-sky-500/10',
      borderColor: 'border-sky-200 dark:border-sky-500/30',
      actionType: 'link',
    },
    {
      key: 'linkedin',
      title: t('contact.linkedin'),
      value: 'linkedin.com/in/erkinov-jasur',
      href: 'https://www.linkedin.com/in/jasur-erkinov-11bb4b3a4/',
      icon: LinkedinIcon,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
      borderColor: 'border-blue-200 dark:border-blue-500/30',
      actionType: 'link',
    },
    {
      key: 'github',
      title: t('contact.github'),
      value: 'github.com/erkinovjasur',
      href: 'https://github.com/erkinovjasur',
      icon: GithubIcon,
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/30',
      actionType: 'link',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          {t('contact.title_part1')}{' '}
          <span className="gradient-text">{t('contact.title_part2')}</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
          {t('contact.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Cards */}
        <div className="lg:col-span-6 space-y-4">
          {contacts.map((item, idx) => {
            const Icon = item.icon;
            const isCopied = copiedKey === item.key;

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card rounded-2xl p-5 flex items-center justify-between group border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.borderColor} border ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                      {item.title}
                    </span>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>

                {item.actionType === 'copy' ? (
                  <button
                    onClick={() => copyToClipboard(item.value, item.key)}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 hover:bg-purple-100 dark:hover:bg-purple-600/20 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/40 transition-colors cursor-pointer text-xs flex items-center gap-1.5 font-semibold"
                    title="Copy to clipboard"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 hover:bg-purple-100 dark:hover:bg-purple-600/20 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/40 transition-colors cursor-pointer"
                    title="Open link"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Interactive Direct Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 relative"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              {t('contact.form_title')}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5">
                {t('contact.form_name')}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('contact.form_name_placeholder')}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5">
                {t('contact.form_email')}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('contact.form_email_placeholder')}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5">
                {t('contact.form_message')}
              </label>
              <textarea
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('contact.form_message_placeholder')}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-gradient py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30"
            >
              <Send className="w-4 h-4 text-white" />
              <span className="text-white">{t('contact.form_submit')}</span>
            </button>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>{t('contact.form_success')}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
