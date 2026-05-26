'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const [isLarge, setIsLarge] = useState(false);
  const [visible, setVisible] = useState(false);

  // useSpring bypasses React re-renders — position updates go straight to the DOM
  const x = useSpring(rawX, { stiffness: 800, damping: 50, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 800, damping: 50, mass: 0.2 });

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsLarge(!!el.closest('a, button, [data-cursor="link"]'));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [rawX, rawY, visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: isLarge ? 40 : 8,
        height: isLarge ? 40 : 8,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        width: { type: 'spring', stiffness: 400, damping: 28 },
        height: { type: 'spring', stiffness: 400, damping: 28 },
        opacity: { duration: 0.15 },
      }}
    />
  );
}
