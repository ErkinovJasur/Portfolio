import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function StarsBackground() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!isDark) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Mouse parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Star configuration
    const STAR_COUNT = Math.min(Math.floor((width * height) / 7000), 160);
    let stars = [];

    const colors = ['#ffffff', '#e0e7ff', '#c7d2fe', '#ddd6fe', '#fbcfe8'];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
          depth: Math.random() * 0.6 + 0.4, // parallax depth
        });
      }
    };

    initStars();

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const offsetX = (mouseX - width / 2) * 0.02;
      const offsetY = (mouseY - height / 2) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // Subtle background nebula glows
      const grad1 = ctx.createRadialGradient(
        width * 0.25 + offsetX * 2,
        height * 0.25 + offsetY * 2,
        0,
        width * 0.25,
        height * 0.25,
        width * 0.4
      );
      grad1.addColorStop(0, 'rgba(59, 130, 246, 0.04)');
      grad1.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8 - offsetX * 2,
        height * 0.7 - offsetY * 2,
        0,
        width * 0.8,
        height * 0.7,
        width * 0.4
      );
      grad2.addColorStop(0, 'rgba(168, 85, 247, 0.04)');
      grad2.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      for (let star of stars) {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));

        // Parallax position
        const drawX = star.x + offsetX * star.depth * 20;
        const drawY = star.y + offsetY * star.depth * 20;

        ctx.save();
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  return <canvas id="stars-canvas" ref={canvasRef} aria-hidden="true" />;
}
