import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/themeStore';

export default function WarmAmbientBackground() {
  const { isDark } = useTheme();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;
    const handleMove = (e) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        setMouse({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-700"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse at 50% 0%, #201711 0%, #160F0A 100%)'
          : 'radial-gradient(ellipse at 50% 0%, #FAF5EE 0%, #F1E7DB 100%)',
      }}
    >
      {/* Top Center Warm Bronze Glow */}
      <div
        className="absolute -top-[20%] left-1/2 h-[65vw] w-[65vw] max-w-[850px] -translate-x-1/2 rounded-full opacity-30 blur-[130px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(-50% + ${mouse.x * 0.6}px), ${mouse.y * 0.6}px, 0)`,
          background: isDark
            ? 'radial-gradient(circle, rgba(200, 146, 90, 0.35) 0%, rgba(138, 86, 43, 0.18) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(200, 146, 90, 0.22) 0%, rgba(220, 180, 140, 0.12) 50%, transparent 70%)',
        }}
      />

      {/* Right Accent Caramel Orb */}
      <div
        className="absolute top-[35%] -right-[15%] h-[55vw] w-[55vw] max-w-[700px] rounded-full opacity-25 blur-[140px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${-mouse.x * 0.5}px, ${-mouse.y * 0.5}px, 0)`,
          background: isDark
            ? 'radial-gradient(circle, rgba(217, 168, 119, 0.25) 0%, rgba(110, 68, 32, 0.12) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(217, 168, 119, 0.18) 0%, rgba(230, 200, 160, 0.1) 50%, transparent 70%)',
        }}
      />

      {/* Bottom Left Subtle Warm Earth Glow */}
      <div
        className="absolute bottom-[-10%] -left-[10%] h-[50vw] w-[50vw] max-w-[650px] rounded-full opacity-20 blur-[140px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 0.4}px, ${mouse.y * 0.4}px, 0)`,
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 112, 60, 0.22) 0%, rgba(70, 42, 20, 0.1) 55%, transparent 70%)'
            : 'radial-gradient(circle, rgba(190, 140, 95, 0.14) 0%, transparent 70%)',
        }}
      />

      {/* Elegant Minimalist Micro-grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C8925A 1px, transparent 1px), linear-gradient(to bottom, #C8925A 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />

      {/* Subtle top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, rgba(22, 15, 10, 0.6), transparent)'
            : 'linear-gradient(to bottom, rgba(250, 245, 238, 0.6), transparent)',
        }}
      />
    </div>
  );
}
