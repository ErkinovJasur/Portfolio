import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-[2.5px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #C8925A 0%, #D9A877 50%, #F3E9DC 100%)',
        boxShadow: '0 0 12px rgba(200, 146, 90, 0.65)',
      }}
    />
  );
}
