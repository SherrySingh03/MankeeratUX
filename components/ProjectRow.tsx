'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

type Props = {
  project: Project;
  isBlurred: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function RowInner({ project, hovered }: { project: Project; hovered: boolean }) {
  return (
    <div className="py-5 px-4 rounded-lg">
      <motion.div
        className="flex items-center gap-3 rounded-lg"
        animate={{ x: hovered ? 5 : 0 }}
        transition={{ duration: 0.2, ease: [0.25, 0.6, 0.25, 1] }}
      >
        <motion.span
          className="text-xl shrink-0"
          style={{ fontFamily: 'Castoro, serif' }}
          animate={{ color: hovered ? project.color : '#171717' }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.span>

        <motion.div
          className="flex-1 h-px bg-neutral-200"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        />

        <motion.span
          className="text-xs text-neutral-400 shrink-0 tabular-nums"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        >
          {project.year}
        </motion.span>

        <motion.span
          className="text-sm text-neutral-700 shrink-0 -ml-6"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          aria-hidden
        >
          →
        </motion.span>
      </motion.div>

      <motion.p
        className="text-sm text-neutral-400 mt-1 leading-relaxed"
        animate={{ x: hovered ? 5 : 0 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {project.subtitle}
      </motion.p>
    </div>
  );
}

const sharedClassName = 'block rounded-xl';

export default function ProjectRow({ project, isBlurred, onMouseEnter, onMouseLeave }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => { setHovered(true); onMouseEnter(); };
  const handleLeave = () => { setHovered(false); onMouseLeave(); };

  const sharedProps = {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    'data-cursor': 'link',
    className: sharedClassName,
    style: { backgroundColor: hovered ? '#f4f4f4' : 'transparent' },
  };

  return (
    <motion.div
      animate={{
        filter: isBlurred ? 'blur(3px)' : 'blur(0px)',
        opacity: isBlurred ? 0.45 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {project.internal ? (
        <Link href={project.href} {...sharedProps}>
          <RowInner project={project} hovered={hovered} />
        </Link>
      ) : (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          {...sharedProps}
        >
          <RowInner project={project} hovered={hovered} />
        </a>
      )}
    </motion.div>
  );
}
