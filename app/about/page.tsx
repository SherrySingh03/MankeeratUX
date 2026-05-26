import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — Mankeerat Singh',
  description: 'UX designer, researcher and design strategist based in Toronto.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-5 sm:px-10 py-6 sm:py-8 shrink-0">
        <Link href="/">
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: '#FF57F9' }}
            aria-label="Home"
          />
        </Link>
        <div className="flex items-center gap-7 text-sm text-neutral-500">
          <Link href="/about" className="hover:text-neutral-900 transition-colors" data-cursor="link">
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

      {/* Leaf — left (desktop only) */}
      <div
        className="hidden md:block absolute left-0 pointer-events-none select-none"
        style={{ top: '28vh', width: '22vw', height: '50vh' }}
      >
        <Image
          src="/images/about/leaf-left.png"
          alt=""
          fill
          className="object-contain object-left"
          sizes="22vw"
        />
      </div>

      {/* Leaf — right (desktop only) */}
      <div
        className="hidden md:block absolute right-0 top-20 pointer-events-none select-none"
        style={{ width: '20vw', height: '38vh' }}
      >
        <Image
          src="/images/about/leaf-right.png"
          alt=""
          fill
          className="object-contain object-right-top"
          sizes="20vw"
        />
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 sm:px-10 py-10 sm:py-16">
        <div className="w-full max-w-sm">

          {/* Hero text */}
          <h1
            className="text-3xl sm:text-4xl text-neutral-800 leading-tight mb-4 sm:mb-5"
            style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif', fontWeight: 400 }}
          >
            hey, i&apos;m{' '}
            <em style={{ fontFamily: 'var(--font-bitter), Georgia, serif' }}>Mankeerat</em>.
          </h1>

          <p
            className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-12 sm:mb-20"
            style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
          >
            A{' '}
            <em style={{ fontFamily: 'var(--font-bitter), Georgia, serif' }}>UX</em>{' '}
            designer, researcher and design strategist based in toronto and I design experiences
            that make people smile.
          </p>

          {/* Currently playing */}
          <p
            className="text-base text-neutral-400 mb-4"
            style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
          >
            Currently playing
          </p>

          <div className="rounded-2xl bg-neutral-100 py-10 px-3">
            {/* Album art */}
            <div
              className="relative w-full rounded-xl overflow-hidden bg-neutral-800 mb-0"
              style={{ aspectRatio: '5/4' }}
            >
              <Image
                src="/images/about/courtside.png"
                alt="Courtside - Karan Aujla"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 384px"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 sm:px-10 pb-10 sm:pb-14 shrink-0">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-20">

          {/* Work */}
          <div className="flex-1">
            <p className="text-sm text-neutral-400 mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>
              Work
            </p>
            <div className="border-t border-neutral-200 mb-4" />
            <div className="space-y-3">
              {[
                { company: 'KnowMeQ', role: 'UX Designer - 2025' },
                { company: 'George Brown College', role: 'UX Designer - 2023' },
                { company: 'Wongdoody – Infosys', role: 'UX Designer – 2021' },
              ].map(({ company, role }) => (
                <div key={company} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-neutral-800 shrink-0">{company}</span>
                  <span className="text-sm text-neutral-400 text-right">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex-1">
            <p className="text-sm text-neutral-400 mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>
              Socials
            </p>
            <div className="border-t border-neutral-200 mb-4" />
            <div className="space-y-3">
              {[
                {
                  label: 'linkedin',
                  display: 'linkedin.com/in/mankeeratux',
                  href: 'https://linkedin.com/in/mankeeratux',
                },
                {
                  label: 'instagram',
                  display: 'mankeerat_singh_07',
                  href: 'https://instagram.com/mankeerat_singh_07',
                },
              ].map(({ label, display, href }) => (
                <div key={label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-neutral-400 shrink-0">{label}</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-800 hover:text-neutral-400 transition-colors text-right break-all"
                    data-cursor="link"
                  >
                    {display}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
