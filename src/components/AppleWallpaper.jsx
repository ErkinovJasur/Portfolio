import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/themeStore';

export default function AppleWallpaper() {
  const { isDark } = useTheme();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;
    const handleMove = (e) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
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
          ? 'radial-gradient(ellipse at 50% 0%, #0d1117 0%, #06070a 100%)'
          : 'radial-gradient(ellipse at 50% 0%, #ffffff 0%, #f3f4f8 100%)',
      }}
    >
      {/* Dynamic ambient macOS Aura blobs */}
      <div
        className="absolute -top-[25%] left-[10%] h-[75vw] w-[75vw] max-w-[900px] rounded-full opacity-60 mix-blend-screen blur-[120px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 0.8}px, ${mouse.y * 0.8}px, 0)`,
          background: isDark
            ? 'radial-gradient(circle, rgba(10, 132, 255, 0.28) 0%, rgba(94, 92, 230, 0.16) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 113, 227, 0.18) 0%, rgba(175, 82, 222, 0.1) 45%, transparent 70%)',
        }}
      />

      <div
        className="absolute top-[20%] -right-[15%] h-[60vw] w-[60vw] max-w-[800px] rounded-full opacity-50 mix-blend-screen blur-[130px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${-mouse.x * 0.6}px, ${-mouse.y * 0.6}px, 0)`,
          background: isDark
            ? 'radial-gradient(circle, rgba(100, 210, 255, 0.2) 0%, rgba(48, 176, 199, 0.12) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(50, 173, 230, 0.14) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)',
        }}
      />

      <div
        className="absolute bottom-[-10%] left-[20%] h-[55vw] w-[55vw] max-w-[700px] rounded-full opacity-40 mix-blend-screen blur-[140px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 0.5}px, ${mouse.y * 0.5}px, 0)`,
          background: isDark
            ? 'radial-gradient(circle, rgba(175, 82, 222, 0.18) 0%, rgba(255, 55, 95, 0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 149, 0, 0.1) 0%, rgba(255, 45, 85, 0.06) 50%, transparent 70%)',
        }}
      />

      {/* Subtle Apple fine grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top subtle vignette */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, rgba(6, 7, 10, 0.4), transparent)'
            : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
        }}
      />
    </div>
  );
}
