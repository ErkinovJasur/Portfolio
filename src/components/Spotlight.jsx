import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Spotlight() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const { isDark } = useTheme();

  useEffect(() => {
    if (!isDark) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDark]);

  if (!isDark) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.07), rgba(59, 130, 246, 0.03), transparent 80%)`,
      }}
    />
  );
}
