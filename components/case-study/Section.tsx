'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id?: string;
  label?: string;
  heading: ReactNode;
  children: ReactNode;
};

function toId(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function Section({ id, label, heading, children }: Props) {
  const sectionId = id ?? (typeof heading === 'string' ? toId(heading) : '');

  return (
    <motion.section
      id={sectionId}
      className="mb-15 scroll-mt-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {label && (
        <p className="text-lg text-neutral-400 mb-2 tracking-wide uppercase">
          {label}
        </p>
      )}
      <h2
        className="font-normal text-neutral-900 mb-10"
        style={{
          fontFamily: 'var(--font-outfit), system-ui, sans-serif',
          fontSize: '2.5rem',
          lineHeight: 1.1,
        }}
      >
        {heading}
      </h2>

      <div
        className="
          [&_p]:text-base [&_p]:leading-[1.5] [&_p]:text-neutral-600
          [&_strong]:font-semibold [&_strong]:text-neutral-800
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-6
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6
          [&_li]:mb-2 [&_li]:text-base [&_li]:leading-[1.5] [&_li]:text-neutral-600
          [&_a]:underline [&_a]:underline-offset-2 [&_a]:text-neutral-800
          [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-neutral-800 [&_h3]:mt-12 [&_h3]:mb-6
        "
      >
        {children}
      </div>
    </motion.section>
  );
}
