import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import { navItems, socials, profile } from "../data/content";
import { SocialIcon } from "./Icons";
import { useTheme } from "../contexts/themeStore";

const languages = [
  { code: "uz", short: "UZ", label: "O'zbek" },
  { code: "en", short: "EN", label: "English" },
  { code: "ru", short: "RU", label: "Русский" },
];

export default function Navbar({ onOrder }) {
  const { t, i18n } = useTranslation();
  const { toggleTheme, isDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15);
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleOrder = () => {
    close();
    onOrder();
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "brown-glass border-b shadow-md py-2 sm:py-3"
            : "brown-glass sm:bg-transparent border-b sm:border-b-transparent shadow-xs sm:shadow-none py-2 sm:py-4.5"
        }`}
        style={{
          borderColor: "var(--line)",
        }}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-1.5 sm:gap-4 px-3 sm:px-6 md:px-8">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={close}
            className="group flex items-center gap-2 sm:gap-3 transition-transform hover:scale-[1.02] shrink-0"
          >
            <span
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-[11px] sm:text-[12px] font-bold text-[#18110D] shadow-sm transition-transform duration-300 group-hover:rotate-6 shrink-0"
              style={{
                background: "linear-gradient(135deg, #D9A877 0%, #C8925A 100%)",
                boxShadow: "0 4px 14px -3px rgba(200, 146, 90, 0.5)",
              }}
            >
              {profile.initials}
            </span>
            <div className="hidden sm:flex flex-col min-w-0">
              <span className="font-heading text-[13.5px] sm:text-[15px] font-bold tracking-tight text-main group-hover:text-[var(--accent)] transition-colors truncate max-w-[90px] min-[380px]:max-w-[125px] sm:max-w-none">
                {profile.name}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-dim truncate hidden min-[360px]:block">
                Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main"
            className="hidden lg:flex items-center gap-1 rounded-full p-1.5 border shadow-xs"
            style={{
              background: "var(--surface-translucent)",
              borderColor: "var(--line)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {navItems.map((id) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className="relative rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors duration-200"
                  style={{
                    color: isActive
                      ? "var(--nav-active-text)"
                      : "var(--nav-inactive-text)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full shadow-sm"
                      style={{
                        background: "var(--nav-pill-bg)",
                        border: "1px solid var(--nav-pill-border)",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.18,
                        duration: 0.45,
                      }}
                    />
                  )}
                  <span className="relative z-10">{t(`nav.${id}`)}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Controls: BARCHA TUGMALAR MOBILDA HAM TO'LIQ KO'RINADI */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* 1. Til tanlash tugmasi */}
            <LangSwitcher />

            {/* 2. Mavzu o'zgartirish tugmasi */}
            <ThemeToggle />

            {/* 3. Buyurtma berish tugmasi (Mobilda ham to'liq ochiq) */}
            <button
              type="button"
              onClick={handleOrder}
              className="btn-primary text-[1px] sm:text-[13px] py-5 sm:py-1.5 px-2.5 sm:px-4 rounded-full hidden sm:flex items-center gap-1 shrink-0 shadow-sm"
              title={t("order.cta")}
            >
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              <span>{t("order.cta_short")}</span>
            </button>

            {/* 4. Mobil menyu ochish tugmasi */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="icon-btn h-8 w-8 sm:h-9 sm:w-9 md:hidden shrink-0"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3.5 top-[58px] sm:top-[66px] z-50 md:hidden max-h-[calc(100vh-76px)] overflow-y-auto"
            >
              <div
                className="overflow-hidden rounded-2xl p-5 border shadow-2xl"
                style={{
                  background: "var(--mobile-menu-bg)",
                  borderColor: "var(--line-strong)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
              >
                {/* Mobile Drawer Status Bar */}
                <div
                  className="flex items-center justify-between pb-3.5 mb-3 border-b text-[11.5px]"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A877] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C8925A]" />
                    </span>
                    <span className="font-medium text-dim">
                      {t("hero.status")}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-dim text-[11px]">
                    <MapPin className="h-3 w-3 text-[var(--accent)]" />
                    Toshkent
                  </span>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-1.5">
                  {navItems.map((id, index) => {
                    const isActive = active === id;
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        onClick={close}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-all duration-200"
                        style={{
                          background: isActive
                            ? "var(--mobile-item-active-bg)"
                            : "transparent",
                          borderColor: isActive
                            ? "var(--mobile-item-active-border)"
                            : "transparent",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          color: isActive ? "var(--accent)" : "var(--ink)",
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className="font-mono text-[11px] font-bold"
                            style={{
                              color: isActive ? "var(--accent)" : "var(--dim)",
                            }}
                          >
                            0{index + 1}
                          </span>
                          <span>{t(`nav.${id}`)}</span>
                        </span>

                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{
                                background: "var(--accent)",
                                boxShadow: "0 0 8px var(--accent)",
                              }}
                            />
                          )}
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform"
                            style={{
                              opacity: isActive ? 1 : 0.4,
                              color: isActive ? "var(--accent)" : "inherit",
                            }}
                          />
                        </div>
                      </a>
                    );
                  })}
                </nav>

                {/* Mobile Quick Language & Theme Controls Row */}
                <div
                  className="mt-4 pt-4 border-t flex flex-col gap-2.5"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim">
                      {t("common.language")}:
                    </span>

                    {/* Quick Language Switcher Pills */}
                    <div
                      className="inline-flex items-center gap-1 rounded-lg p-1 border"
                      style={{
                        background: "var(--surface-2)",
                        borderColor: "var(--line)",
                      }}
                    >
                      {languages.map((l) => {
                        const isCurrent = i18n.language?.startsWith(l.code);
                        return (
                          <button
                            key={l.code}
                            type="button"
                            onClick={() => changeLanguage(l.code)}
                            className="rounded-md px-2.5 py-1 text-[11px] font-bold transition-all"
                            style={{
                              background: isCurrent
                                ? "var(--accent)"
                                : "transparent",
                              color: isCurrent ? "#18110D" : "var(--muted)",
                              boxShadow: isCurrent
                                ? "0 2px 8px -2px var(--glow)"
                                : "none",
                            }}
                          >
                            {l.short}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim">
                      {t("common.theme")}:
                    </span>

                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-[11.5px] font-semibold border transition-colors"
                      style={{
                        background: "var(--surface-2)",
                        borderColor: "var(--line)",
                        color: "var(--ink)",
                      }}
                    >
                      {isDark ? (
                        <>
                          <Moon className="h-3.5 w-3.5 text-[var(--accent)]" />
                          <span>Dark (Brown)</span>
                        </>
                      ) : (
                        <>
                          <Sun className="h-3.5 w-3.5 text-[var(--accent)]" />
                          <span>Light (Cream)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Mobile Order CTA & Socials */}
                <div
                  className="mt-4 pt-4 border-t space-y-3"
                  style={{ borderColor: "var(--line)" }}
                >
                  <button
                    type="button"
                    onClick={handleOrder}
                    className="btn-primary w-full py-3 rounded-xl text-[14px] font-bold shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>{t("order.cta")}</span>
                  </button>

                  <div className="flex items-center justify-center gap-3 pt-1">
                    {socials.map((social) => (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn h-9.5 w-9.5 rounded-full"
                        aria-label={social.name}
                        title={social.name}
                      >
                        <SocialIcon id={social.icon} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
