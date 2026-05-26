import type { CSSProperties } from 'react';

function Sk({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return <div className={`bg-neutral-200 animate-pulse rounded-xl ${className}`} style={style} />;
}

export default function CaseStudySkeleton({ color = '#e5e5e5' }: { color?: string }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="flex items-center justify-between px-5 sm:px-10 py-6 sm:py-8">
        <div className="w-5 h-5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
        <div className="flex items-center gap-7">
          <Sk className="h-3.5 w-10" />
          <Sk className="h-3.5 w-14" />
        </div>
      </header>

      {/* Hero */}
      <div className="px-5 sm:px-10 mb-8 sm:mb-12 pt-2 sm:pt-4">
        <Sk className="w-full rounded-2xl" style={{ height: 'clamp(220px, 45vw, 60vh)' }} />
      </div>

      {/* Title */}
      <div className="px-5 sm:px-10 mb-6">
        <Sk className="h-9 w-64 sm:w-80" />
      </div>

      {/* Divider */}
      <div className="px-5 sm:px-10 mb-8 sm:mb-10">
        <div className="border-t border-neutral-200" />
      </div>

      {/* Description + Role */}
      <div className="px-5 sm:px-10 mb-12 sm:mb-16 flex flex-col sm:flex-row justify-between gap-6 sm:gap-16">
        <div className="flex-1 space-y-3">
          <Sk className="h-4 w-full" />
          <Sk className="h-4 w-5/6" />
          <Sk className="h-4 w-4/5" />
        </div>
        <div className="shrink-0 space-y-3 sm:w-52">
          <Sk className="h-5 w-full" />
          <Sk className="h-5 w-3/4" />
        </div>
      </div>

      {/* Content area */}
      <div className="px-5 sm:px-10 flex gap-0 pb-24 sm:pb-40">

        {/* Nav placeholder — desktop */}
        <div className="hidden md:flex flex-col gap-4 shrink-0 pt-1" style={{ width: '15vw' }}>
          <Sk className="h-4 w-10" />
          <div className="mt-10 space-y-5">
            <Sk className="h-4 w-28" />
            <Sk className="h-4 w-24" />
            <Sk className="h-4 w-20" />
          </div>
        </div>

        {/* Content lines */}
        <div className="flex-1 md:border-l md:border-neutral-200 md:pl-16 space-y-10 pt-1">
          <div className="space-y-4">
            <Sk className="h-8 w-48" />
            <div className="space-y-3 pt-2">
              <Sk className="h-4 w-full" />
              <Sk className="h-4 w-full" />
              <Sk className="h-4 w-3/4" />
            </div>
          </div>
          <Sk className="w-full rounded-2xl" style={{ height: '280px' }} />
          <div className="space-y-4">
            <Sk className="h-8 w-56" />
            <div className="space-y-3 pt-2">
              <Sk className="h-4 w-full" />
              <Sk className="h-4 w-5/6" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
