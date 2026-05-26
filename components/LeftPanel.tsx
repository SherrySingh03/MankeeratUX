'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import type { Project } from '@/lib/projects';

function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const date = now.toLocaleDateString('en-CA', { month: 'long', day: 'numeric' });
  const time = now.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <>
      <span className="text-neutral-400 text-xs tracking-wide">{date}</span>
      <span className="text-neutral-400 text-xs tracking-wide tabular-nums">{time}</span>
    </>
  );
}

type Props = {
  hoveredProject: Project | null;
};

export default function LeftPanel({ hoveredProject }: Props) {
  const [isOnPanel, setIsOnPanel] = useState(false);

  // Glow follows cursor with a soft lag (low stiffness = dreamy trailing)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glowX = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.5 });
  const glowY = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  return (
    <aside
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsOnPanel(true)}
      onMouseLeave={() => setIsOnPanel(false)}
      className="hidden md:flex flex-col sticky top-0 h-screen w-1/2 bg-[#efefef] p-8 overflow-hidden"
    >
      {/* Pink glow — only visible when no project is hovered, clipped by overflow-hidden */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,87,249,0.22) 0%, transparent 68%)',
        }}
        animate={{ opacity: !hoveredProject && isOnPanel ? 1 : 0 }}
        transition={{ opacity: { duration: 0.4 } }}
      />

      {/* Top row: date left, time right */}
      <div className="relative flex justify-between items-start">
        <LiveClock />
      </div>

      {/* Center: tagline OR project image */}
      <div className="relative flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {hoveredProject ? (
            <motion.div
              key={hoveredProject.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full h-full flex items-center justify-center p-8"
            >
              <div className="relative w-full h-full p-24">
                <Image
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  fill
                  className="object-contain drop-shadow-2xl rounded-2xl"
                  sizes="50vw"
                />
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative text-neutral-400 text-base text-center max-w-[480px] leading-relaxed"
            >
              Currently reimagining AI interactions in Edtech.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
