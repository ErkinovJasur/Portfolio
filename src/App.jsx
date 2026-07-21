import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  CodeXml,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Star,
  Rocket,
  Zap,
  Terminal,
  Palette,
  Globe,
  Layers,
  GitBranch,
  Brain,
  Cloud,
  Send,
  Monitor,
  Cpu,
  Eye,
} from "lucide-react";

/* ────────────────────────────── CONSTANTS ────────────────────────────── */
const NAV_LINKS = [
  "Hero",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

const PROJECTS = [
  {
    name: "Weather APP",
    desc: "This is a platform that displays weather in real time.",
    techs: ["HTML", "CSS", "JavaScript", "API"],
    color: "from-blue-500 to-cyan-400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkpuYj5wBCIKVGz7yfHA2byivg0uEt3IX7QxddEaSbtxY0fzWZRvY1Jk&s=10",
    href: "https://weatherappclaudegemini.netlify.app/",
    source: "https://github.com/ErkinovJasur/Weather-app",
  },
  {
    name: "UniNest",
    desc: "A rental platform for students. Need a rental? Then choose UniNest.",
    techs: ["HTML", "JavaScript", "CSS", "API"],
    color: "from-purple-500 to-pink-400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0P_7-zSRe2-OoTJScRNohlE8fl5mcDCXt-5gYky3ww&s=10",
    href: "https://uninestapp.netlify.app/",
    source: "",
  },
  {
    name: "Currency convertor",
    desc: "A responsive and modern Currency Converter application that allows users to convert currencies instantly using real-time exchange rates. Built with React, Tailwind CSS, and a live Exchange Rate API, the project focuses on performance, clean UI, and a smooth user experience across all devices.",
    techs: ["React", "Tailwind CSS", "API", "JavaScript"],
    color: "from-cyan-500 to-blue-400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9295ZvynTY2GUSW1iaEyEhghBD0ILwV3Pxh3FYMumA&s=10",
    href: "https://adorable-banoffee-efa0d9.netlify.app/",
    source: "https://github.com/ErkinovJasur/Currency-convertor",
  },
  {
    name: "Contact APP",
    desc: "A modern Contact Management application designed to organize contacts efficiently. It supports creating, updating, deleting, and viewing contact information with real-time API communication.",
    techs: ["REST API", "CSS", "HTML", "JavaScript (Axios)"],
    color: "from-violet-500 to-purple-400",
    href: "https://effulgent-bonbon-a52042.netlify.app/",
    source: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVMzWlkVlg24_5U_ttL-bV6n_hekiUt37jpKf8C3WTw&s=10",
  },
  {
    name: "Portfolio site",
    desc: "This is a portfolio website. It contains information about me, my projects, and my contact details.",
    techs: ["React", "API", "Tailwind CSS"],
    color: "from-emerald-500 to-cyan-400",
    image: "/image.png",
    href: "/"
  },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: Monitor,
    items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React"],
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/25",
  },
  {
    title: "Database",
    icon: Database,
    items: ["Supabase"],
    color: "from-purple-500 to-pink-400",
    glow: "group-hover:shadow-purple-500/25",
  },
  {
    title: "DevOps",
    icon: Cloud,
    items: ["Vercel", "Netlify"],
    color: "from-cyan-500 to-teal-400",
    glow: "group-hover:shadow-cyan-500/25",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Figma"],
    color: "from-violet-500 to-indigo-400",
    glow: "group-hover:shadow-violet-500/25",
  },
  {
    title: "AI",
    icon: Brain,
    items: ["Claude", "ChatGPT", "Gemini", "Codex", "Chat.Z"],
    color: "from-emerald-500 to-green-400",
    glow: "group-hover:shadow-emerald-500/25",
  },
];

const CONTACTS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+998 90 066 68 52",
    href: "tel:+99890066852",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "erkinovjasur80@gmail.com",
    href: "mailto:erkinovjasur80@gmail.com",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@timurovccc",
    href: "https://t.me/timurovccc",
    color: "from-cyan-500 to-blue-400",
  },
  {
    icon: BriefcaseBusiness,
    label: "LinkedIn",
    value: "Jasur Erkinov",
    href: "https://www.linkedin.com/in/jasur-erkinov-11bb4b3a4/",
    color: "from-violet-500 to-indigo-400",
  },
  {
    icon: CodeXml,
    label: "GitHub",
    value: "erkinovjasur",
    href: "https://github.com/erkinovjasur",
    color: "from-emerald-500 to-green-400",
  },
];

/* ─────────────────── MISSING ICON STUBS (Lucide doesn't have these) ─────────────────── */
function Database(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
function Wrench(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

/* ──────────────────────────── SPACE BACKGROUND ──────────────────────────── */
function SpaceBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, dpr;
    const stars = [],
      shooters = [],
      particles = [];
    let lastShoot = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      resize();
      stars.length = 0;
      const count = Math.min(Math.floor((W * H) / 2800), 1200);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.2,
          baseA: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.003 + 0.001,
          phase: Math.random() * Math.PI * 2,
          hue:
            Math.random() < 0.15
              ? 200 + Math.random() * 40
              : Math.random() < 0.1
                ? 270 + Math.random() * 30
                : 0,
          sat: Math.random() < 0.25 ? 40 + Math.random() * 40 : 0,
          dx: (Math.random() - 0.5) * 0.08,
          dy: (Math.random() - 0.5) * 0.08,
        });
      }
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2 + 0.5,
          a: Math.random() * 0.15 + 0.05,
          dx: (Math.random() - 0.5) * 0.15,
          dy: (Math.random() - 0.5) * 0.15,
          hue: 200 + Math.random() * 80,
        });
      }
    }

    function drawAurora(t) {
      const g1 = ctx.createRadialGradient(
        W * 0.2 + Math.sin(t * 0.0002) * 100,
        H * 0.15,
        0,
        W * 0.2,
        H * 0.15,
        W * 0.5,
      );
      g1.addColorStop(0, "rgba(59,130,246,0.04)");
      g1.addColorStop(0.5, "rgba(139,92,246,0.02)");
      g1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(
        W * 0.8 + Math.cos(t * 0.00015) * 80,
        H * 0.25,
        0,
        W * 0.8,
        H * 0.25,
        W * 0.45,
      );
      g2.addColorStop(0, "rgba(139,92,246,0.035)");
      g2.addColorStop(0.5, "rgba(6,182,212,0.015)");
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      const g3 = ctx.createRadialGradient(
        W * 0.5 + Math.sin(t * 0.0001) * 120,
        H * 0.7,
        0,
        W * 0.5,
        H * 0.7,
        W * 0.6,
      );
      g3.addColorStop(0, "rgba(6,182,212,0.025)");
      g3.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, W, H);
    }

    function drawStars(t) {
      for (const s of stars) {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < -5) s.x = W + 5;
        if (s.x > W + 5) s.x = -5;
        if (s.y < -5) s.y = H + 5;
        if (s.y > H + 5) s.y = -5;

        const twinkle = Math.sin(t * s.speed + s.phase) * 0.5 + 0.5;
        const a = s.baseA * (0.4 + twinkle * 0.6);
        if (s.sat > 0) {
          ctx.fillStyle = `hsla(${s.hue},${s.sat}%,75%,${a})`;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${a})`;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (s.r > 1.1 && a > 0.5) {
          ctx.fillStyle = `rgba(255,255,255,${a * 0.08})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function drawParticles(t) {
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        const pulse = Math.sin(t * 0.002 + p.x) * 0.5 + 0.5;
        ctx.fillStyle = `hsla(${p.hue},60%,65%,${p.a * (0.5 + pulse * 0.5)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawShootingStars(t) {
      if (t - lastShoot > 2000 + Math.random() * 4000) {
        lastShoot = t;
        const angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.2;
        shooters.push({
          x: Math.random() * W * 0.8,
          y: Math.random() * H * 0.3,
          len: 80 + Math.random() * 120,
          speed: 6 + Math.random() * 6,
          angle,
          life: 1,
          decay: 0.008 + Math.random() * 0.008,
        });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= s.decay;
        if (s.life <= 0) {
          shooters.splice(i, 1);
          continue;
        }

        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const grad = ctx.createLinearGradient(s.x, s.y, tx, ty);
        grad.addColorStop(0, `rgba(255,255,255,${s.life * 0.9})`);
        grad.addColorStop(0.3, `rgba(147,197,253,${s.life * 0.5})`);
        grad.addColorStop(1, "rgba(147,197,253,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        ctx.fillStyle = `rgba(255,255,255,${s.life})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(t) {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate((mx - W / 2) * 0.015, (my - H / 2) * 0.015);
      drawAurora(t);
      drawStars(t);
      drawParticles(t);
      drawShootingStars(t);
      ctx.restore();
      frameRef.current = requestAnimationFrame(loop);
    }

    init();
    frameRef.current = requestAnimationFrame(loop);
    window.addEventListener("resize", () => {
      resize();
    });
    const onMove = (e) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    /* Smooth mouse interpolation via separate rAF */
    let rafMouse;
    function smoothMouse() {
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;
      rafMouse = requestAnimationFrame(smoothMouse);
    }
    rafMouse = requestAnimationFrame(smoothMouse);

    return () => {
      cancelAnimationFrame(frameRef.current);
      cancelAnimationFrame(rafMouse);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(160deg, #030712 0%, #050816 30%, #0a0f24 60%, #060b1a 100%)",
      }}
    />
  );
}

/* ─────────────────────── ANIMATED SECTION WRAPPER ─────────────────────── */
function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        filter: visible ? "blur(0)" : "blur(6px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────── MAGNETIC BUTTON ──────────────────────────── */
function MagneticBtn({ children, className = "", ...props }) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    el.style.transition = "transform 0.15s ease-out";
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.4s ease-out";
  }, []);

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────── GRADIENT TEXT ─────────────────────────── */
function GradientText({ children, className = "" }) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 ${className}`}
    >
      {children}
    </span>
  );
}

/* ═══════════════════════════ MAIN APP ═══════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Track scroll for navbar & active section */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          const sections = NAV_LINKS.map((id) =>
            document.getElementById(id),
          ).filter(Boolean);
          let current = "Hero";
          for (const sec of sections) {
            if (sec.getBoundingClientRect().top <= 200) current = sec.id;
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ──────────── NAVBAR ──────────── */
  const Navbar = (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => scrollTo("Hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
              <CodeXml size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
              Jasur<span className="text-blue-400">.dev</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
                  ${
                    activeSection === link
                      ? "text-white"
                      : "text-white/40 hover:text-white/80"
                  }`}
              >
                {activeSection === link && (
                  <span className="absolute inset-0 bg-white/[0.06] rounded-xl border border-white/[0.08]" />
                )}
                <span className="relative">{link}</span>
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <MagneticBtn
              onClick={() => scrollTo("Contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300"
            >
              <Send size={14} />
              Contact
            </MagneticBtn>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/70"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-80 pb-4" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-1 pt-3 border-t border-white/[0.06]">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300
                  ${
                    activeSection === link
                      ? "text-white bg-white/[0.06]"
                      : "text-white/40 hover:text-white/80 hover:bg-white/[0.03]"
                  }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  /* ──────────── HERO ──────────── */
  const Hero = (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[120px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.06] rounded-full blur-[100px] animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <RevealSection delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-white/60 tracking-wide">
              Frontend Developer · Mars IT School
            </span>
          </div>
        </RevealSection>

        {/* Name */}
        <RevealSection delay={100}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6">
            <span className="text-white">Erkinov</span>
            {" "}
            <GradientText>Jasur</GradientText>
          </h1>
        </RevealSection>

        {/* Subtitle */}
        <RevealSection delay={200}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/50 font-light mb-4 tracking-wide">
            Frontend Developer
          </p>
        </RevealSection>

        {/* Description */}
        <RevealSection delay={300}>
          <p className="text-sm sm:text-base text-white/30 max-w-xl mx-auto mb-10 leading-relaxed">
            Building beautiful, responsive, and modern web applications with
            React and Tailwind CSS. Turning ideas into premium digital
            experiences.
          </p>
        </RevealSection>

        {/* Buttons */}
        <RevealSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticBtn
              onClick={() => scrollTo("Projects")}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </MagneticBtn>
            <MagneticBtn
              onClick={() => scrollTo("Contact")}
              className="group flex items-center gap-3 px-8 py-4 bg-white/[0.04] border border-white/[0.1] text-white/80 font-medium rounded-2xl backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              Contact Me
              <Mail
                size={16}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </MagneticBtn>
          </div>
        </RevealSection>

        {/* Scroll indicator */}
        <RevealSection delay={600}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              Scroll
            </span>
            <ChevronDown size={16} className="text-white/20 animate-bounce" />
          </div>
        </RevealSection>
      </div>
    </section>
  );

  /* ──────────── ABOUT ──────────── */
  const About = (
    <section id="About" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
            Passionate about
            <br />
            <GradientText>creating the web</GradientText>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Glass Card - Bio */}
          <RevealSection delay={100}>
            <div className="relative group h-full">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              <div className="relative h-full p-8 sm:p-10 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                    <Zap size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Who I Am</h3>
                </div>
                <p className="text-white/50 leading-relaxed text-[15px]">
                  I'm a passionate{" "}
                  <span className="text-white/80 font-medium">
                    Frontend Developer
                  </span>{" "}
                  currently studying at{" "}
                  <span className="text-blue-400 font-medium">
                    Mars IT School
                  </span>
                  . I enjoy building beautiful, responsive and modern web
                  applications using{" "}
                  <span className="text-purple-400 font-medium">React</span> and{" "}
                  <span className="text-cyan-400 font-medium">
                    Tailwind CSS
                  </span>
                  .
                </p>
                <p className="text-white/50 leading-relaxed text-[15px] mt-4">
                  I continuously improve my skills and love creating premium
                  user interfaces that feel elegant and professional.
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                value: "13",
                label: "Years Old",
                icon: Star,
                color: "from-blue-500 to-cyan-400",
              },
              {
                value: "1",
                label: "Year Experience",
                icon: Rocket,
                color: "from-purple-500 to-pink-400",
              },
              {
                value: "5+",
                label: "Technologies",
                icon: Layers,
                color: "from-cyan-500 to-blue-400",
              },
              {
                value: "6+",
                label: "Projects Built",
                icon: Terminal,
                color: "from-violet-500 to-purple-400",
              },
            ].map((stat, i) => (
              <RevealSection key={stat.label} delay={150 + i * 80}>
                <div className="relative group h-full">
                  <div
                    className={`absolute -inset-[1px] bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <div className="relative h-full p-6 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between">
                    <stat.icon size={20} className="text-white/30 mb-4" />
                    <div>
                      <div
                        className={`text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/40 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  /* ──────────── SKILLS ──────────── */
  const Skills = (
    <section id="Skills" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
            Tools &<GradientText> Technologies</GradientText>
          </h2>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <RevealSection key={group.title} delay={gi * 100}>
              <div
                className={`group relative h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${group.glow}`}
              >
                {/* Glow border */}
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-br ${group.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm`}
                />
                <div className="relative h-full p-7 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} bg-opacity-10 flex items-center justify-center`}
                    >
                      <group.icon size={18} className="text-white/80" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 text-xs font-medium text-white/60 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:bg-white/[0.08] hover:text-white/90 hover:border-white/[0.12] transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ──────────── EXPERIENCE ──────────── */
  const Experience = (
    <section id="Experience" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
            Learning
            <br />
            <GradientText>Journey</GradientText>
          </h2>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="relative max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

            {/* Timeline Item */}
            <div className="relative pl-14 pb-2">
              {/* Dot */}
              <div className="absolute left-[11px] top-2 w-[17px] h-[17px] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-[3px] border-[#050816] shadow-lg shadow-blue-500/30" />

              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative p-7 sm:p-8 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      1 Year
                    </span>
                    <span className="text-xs text-white/30">Present</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Mars IT School
                  </h3>
                  <p className="text-sm text-purple-400 font-medium mb-4">
                    Student · Frontend Development
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Learning HTML, CSS, JavaScript, React, Tailwind CSS, Git,
                    GitHub, Figma and building modern frontend projects.
                    Developing a strong foundation in web development with a
                    focus on creating premium, responsive user interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Tailwind CSS",
                      "Git",
                      "GitHub",
                      "Figma",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] text-white/40 bg-white/[0.03] border border-white/[0.05] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );

  /* ──────────── PROJECTS ──────────── */
  const Projects = (
    <section id="Projects" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
            Selected
            <br />
            <GradientText>Works</GradientText>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, pi) => (
            <RevealSection key={proj.name} delay={pi * 80}>
              <ProjectCard project={proj} index={pi} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ──────────── CONTACT ──────────── */
  const Contact = (
    <section id="Contact" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
                Contact
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Let's <GradientText>Connect</GradientText>
            </h2>
            <p className="text-sm text-white/30 max-w-md mx-auto">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly conversation.
            </p>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {CONTACTS.map((c, ci) => (
            <RevealSection key={c.label} delay={ci * 80}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-br ${c.color} rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-sm`}
                />
                <div className="relative p-6 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <c.icon size={18} className="text-white/80" />
                  </div>
                  <div className="text-xs text-white/30 font-medium uppercase tracking-wider mb-1">
                    {c.label}
                  </div>
                  <div className="text-sm text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                    {c.value}
                  </div>
                </div>
              </a>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ──────────── FOOTER ──────────── */
  const Footer = (
    <footer className="relative py-10 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <CodeXml size={12} className="text-white" />
            </div>
            <span className="text-xs text-white/30">© 2026 Erkinov Jasur</span>
          </div>
          <p className="text-xs text-white/20">
            Made with <span className="text-blue-400">React</span> +{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );

  /* ═══════════════════════════ RENDER ═══════════════════════════ */
  return (
    <div
      className="relative min-h-screen text-white antialiased"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <SpaceBackground />
      <div className="relative z-10">
        {Navbar}
        {Hero}
        {About}
        {Skills}
        {Experience}
        {Projects}
        {Contact}
        {Footer}
      </div>
    </div>
  );
}

/* ──────────────────── PROJECT CARD (defined after App so it can use hooks) ──────────────────── */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease-out";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    card.style.transition = "transform 0.5s ease-out";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow border on hover */}
      <div
        className={`absolute -inset-[1px] bg-gradient-to-br ${project.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm`}
      />

      <div className="relative h-full bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
        <img className="h-[200px] w-[100%]" src={project.image} alt="" />
        {/* Content */}
        <div className="p-6">
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {project.name}
          </h3>
          <p className="text-xs text-white/35 leading-relaxed mb-4 line-clamp-3">
            {project.desc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techs.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.05] rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-white/[0.06] border border-white/[0.08] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white/50 bg-transparent border border-white/[0.05] rounded-xl hover:bg-white/[0.04] hover:text-white/80 hover:border-white/[0.1] transition-all duration-300"
            >
              <CodeXml size={12} />
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
