import type { CSSProperties } from 'react';

function Sk({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return <div className={`bg-neutral-200 animate-pulse rounded-xl ${className}`} style={style} />;
}

export default function HomeLoading() {
  return (
    <main className="flex w-full min-h-screen">

      {/* Left panel */}
      <aside className="hidden md:flex flex-col sticky top-0 h-screen w-1/2 bg-[#efefef] p-8">
        <div className="flex justify-between items-start">
          <Sk className="h-3 w-20" />
          <Sk className="h-3 w-12" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Sk className="w-2/3 rounded-2xl" style={{ aspectRatio: '4/3' }} />
        </div>
      </aside>

      {/* Right panel */}
      <div className="w-full md:w-1/2 h-screen bg-white px-5 sm:px-10 py-6 sm:py-8 flex flex-col">

        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <div className="w-5 h-5 rounded-full bg-neutral-300 animate-pulse" />
          <div className="flex gap-7">
            <Sk className="h-3.5 w-10" />
            <Sk className="h-3.5 w-14" />
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16 space-y-3">
          <Sk className="h-8 w-48" />
          <Sk className="h-4 w-32" />
        </div>

        {/* Project rows */}
        <div className="space-y-1 flex-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="py-5 px-4 border-t border-neutral-200 space-y-2">
              <div className="flex items-center gap-3">
                <Sk className="h-6 w-36" />
                <div className="flex-1 h-px bg-neutral-200" />
                <Sk className="h-3.5 w-8" />
              </div>
              <Sk className="h-3.5 w-56" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
