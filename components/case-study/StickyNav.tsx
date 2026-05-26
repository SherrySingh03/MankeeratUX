'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavSection = { id: string; heading: string };

type Props = { sections: NavSection[] };

export default function StickyNav({ sections }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-8 self-start w-60 shrink-0 pt-1">
      <Link
        href="/"
        className="text-base text-neutral-400 hover:text-neutral-700 transition-colors block mb-6"
      >
        ← Back
      </Link>

      <ul className="space-y-3">
        {sections.map(({ id, heading }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-base leading-snug block transition-colors duration-150 ${
                activeId === id
                  ? 'text-neutral-900 font-medium'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
