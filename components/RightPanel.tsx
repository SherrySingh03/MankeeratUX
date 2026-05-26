'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import ProjectList from '@/components/ProjectList';
import type { Project } from '@/lib/projects';

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease, delay },
  };
}

function Nav() {
  return (
    <motion.nav
      className="flex items-center justify-between mb-12"
      {...fadeUp(0)}
    >
      {/* Logo: solid circle */}
      <div
        className="w-5 h-5 rounded-full shrink-0"
        style={{ backgroundColor: '#FF57F9' }}
        aria-label="Mankeerat Singh"
      />

      <div className="flex items-center gap-7 text-sm text-neutral-500">
        <Link
          href="/about"
          className="hover:text-neutral-900 transition-colors duration-150"
          data-cursor="link"
        >
          about
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors duration-150"
          data-cursor="link"
        >
          resume
        </a>
      </div>
    </motion.nav>
  );
}

function IntroSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-start gap-4">
        {/* Left: name + role */}
        <div>
          {/* Name hover: English ↔ Punjabi */}
          <div className="group relative cursor-default mb-1 select-none">
            <h1
              className="text-3xl font-bold leading-tight
                        opacity-100 group-hover:opacity-0
                        transition-opacity duration-300 pointer-events-none"
              style={{ fontFamily: 'var(--font-bitter), Georgia, serif' }}
              // {...fadeUp(0.1)}
            >
              mankeerat singh
            </h1>
            {/* Punjabi overlay — fades in on hover */}
            <h1
              className="
                text-3xl font-bold leading-tight
                absolute top-0 left-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 pointer-events-none
              "
              aria-hidden
            >
              ਮਨਕੀਰਤ ਸਿੰਘ
            </h1>
          </div>

          <motion.p
            className="text-sm text-neutral-500"
            {...fadeUp(0.2)}
          >
            designer at KnowMeQ
          </motion.p>
        </div>

        {/* Right: currently + location */}
        <motion.div
          className="text-right shrink-0"
          {...fadeUp(0.2)}
        >
          <p className="text-sm text-neutral-400">currently</p>
          <p className="text-sm text-neutral-500">Toronto, Canada</p>
        </motion.div>
      </div>
    </section>
  );
}

type Props = {
  onHover: (project: Project | null) => void;
};

export default function RightPanel({ onHover }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLenis(
    wrapperRef as React.RefObject<HTMLElement | null>,
    contentRef as React.RefObject<HTMLElement | null>
  );

  return (
    <div
      ref={wrapperRef}
      className="w-full md:w-1/2 h-screen overflow-hidden bg-white"
    >
      <div ref={contentRef} className="px-10 py-8">
        <Nav />
        <IntroSection />
        <motion.div {...fadeUp(0.4)}>
          <ProjectList onHover={onHover} />
        </motion.div>
      </div>
    </div>
  );
}
