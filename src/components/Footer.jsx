import { useTranslation } from 'react-i18next';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profile, socials, navItems } from '../data/content';
import { SocialIcon } from './Icons';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-20 border-t pb-12 pt-16 transition-colors duration-300"
      style={{
        borderColor: 'var(--line)',
        background: 'var(--surface-translucent)',
      }}
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b"
          style={{ borderColor: 'var(--line)' }}
        >
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-[12px] font-bold text-[#18110D] shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #D9A877 0%, #C8925A 100%)',
                }}
              >
                {profile.initials}
              </span>
              <div>
                <span className="font-heading text-[17px] font-bold text-main tracking-tight block">
                  {profile.name}
                </span>
                <span className="mono-label text-[10px] text-[var(--accent)] block">
                  {profile.role}
                </span>
              </div>
            </a>

            <p className="max-w-md text-[13.5px] leading-relaxed text-dim">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-2 pt-1">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn h-9 w-9"
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon id={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="mono-label text-[11px] text-main font-bold">
              {t('footer.quick_links')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-1.5 text-[13px] text-dim hover:text-[var(--accent)] transition-colors"
                  >
                    <span>{t(`nav.${id}`)}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Info */}
          <div>
            <h4 className="mono-label text-[11px] text-main font-bold">
              {t('footer.contact')}
            </h4>
            <ul className="mt-4 space-y-2.5 text-[13px] text-dim">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-[var(--accent)] transition-colors truncate block"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="hover:text-[var(--accent)] transition-colors block"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors block"
                >
                  {profile.telegram}
                </a>
              </li>
              <li className="text-[12px] opacity-80">{profile.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-dim">
          <p>
            © {year} {profile.name}. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[var(--accent)]">
              {t('footer.built_with')}
            </span>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors font-medium"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>{t('common.back_to_top')}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
