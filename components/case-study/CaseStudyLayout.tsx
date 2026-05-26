'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  role: string;
  stats: string;
  color: string;
  hero: string;
  badge?: string;
  heroFit?: 'cover' | 'contain';
  sections: { id: string; label: string }[];
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  title,
  description,
  role,
  stats,
  color,
  hero,
  badge,
  heroFit = 'cover',
  sections,
  children,
}: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [navVisible, setNavVisible] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setNavVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -60% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-white">

      {/* Top nav */}
      <header className="flex items-center justify-between px-10 py-8">
        <Link href="/">
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: color }}
            aria-label="Home"
          />
        </Link>
        <div className="flex items-center gap-7 text-sm text-neutral-500">
          <Link
            href="/about"
            className="hover:text-neutral-900 transition-colors"
            data-cursor="link"
          >
            about
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
            data-cursor="link"
          >
            resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <div ref={heroRef} className="px-10 mb-12 pt-4">
        <div
          className={`relative w-full rounded-2xl overflow-hidden ${heroFit === 'contain' ? 'bg-neutral-100' : 'bg-neutral-900'}`}
          style={{ height: '60vh' }}
        >
          <Image
            src={hero}
            alt={title}
            fill
            className={heroFit === 'contain' ? 'object-contain p-6' : 'object-cover'}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>
      </div>

      {/* Title + Role/Stats row */}
      <div className="flex items-start justify-between px-10 mb-6">
        <h1
          className="leading-tight"
          style={{
            fontFamily: 'var(--font-bitter), Georgia, serif',
            fontStyle: 'italic',
            fontSize: '3rem',
          }}
        >
          {title}
        </h1>
        {badge && (
          <Image
            src={badge}
            width={80}
            height={10}
            alt=''
          />
        )}
      </div>

      {/* Divider */}
      <div className="px-10 mb-10">
        <div className="border-t border-neutral-200" />
      </div>

      {/* Description */}
      <div className="px-10 mr-20 mb-16 flex justify-between gap-30">
        <div>
          <p
            className="text-xl text-neutral-600 leading-relaxed"
            style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
          >
            {description}
          </p>
        </div>
        <div>
        <div className="flex items-baseline gap-3 justify-end">
            <span
              className="text-3xl text-neutral-400"
              style={{ fontFamily: 'var(--font-bitter), Georgia, serif', fontStyle: 'italic' }}
            >
              Role
            </span>
            <span className="text-lg text-neutral-700">{role}</span>
          </div>
          <div className="flex items-baseline gap-3 justify-end">
            <span
              className="text-3xl text-neutral-400"
              style={{ fontFamily: 'var(--font-bitter), Georgia, serif', fontStyle: 'italic' }}
            >
              Stats
            </span>
            <span className="text-xl text-neutral-700">
              <strong className="font-semibold">{stats}</strong>
            </span>
          </div>
          </div>
      </div>
      

      {/* Main: sticky nav + content */}
      <div className="px-10 flex gap-0 pb-40">

        {/* Sticky nav */}
        <nav
          className="sticky top-8 self-start shrink-0 pt-1 transition-opacity duration-300"
          style={{
            width: '15vw',
            pointerEvents: navVisible ? 'auto' : 'none',
          }}
        >
          <Link
            href="/"
            className="text-lg text-neutral-400 hover:text-neutral-700 transition-colors block mb-16"
            data-cursor="link"
          >
            Back
          </Link>
          <ul className="space-y-6">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  data-cursor="link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-lg leading-snug block transition-colors duration-150 ${
                    activeId === id
                      ? 'text-neutral-900'
                      : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main
          className="flex-1 border-l border-neutral-200 pl-16"
        >
          {children}
        </main>

      </div>
    </div>
  );
}
