function Sk({ className = '' }: { className?: string }) {
  return <div className={`bg-neutral-200 animate-pulse rounded-xl ${className}`} />;
}

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-5 sm:px-10 py-6 sm:py-8 shrink-0">
        <div className="w-5 h-5 rounded-full bg-neutral-300 animate-pulse" />
        <div className="flex gap-7">
          <Sk className="h-3.5 w-10" />
          <Sk className="h-3.5 w-14" />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 sm:px-10 py-10 sm:py-16">
        <div className="w-full max-w-sm space-y-5">

          {/* Hero text */}
          <Sk className="h-10 w-3/4" />
          <div className="space-y-2 pb-8">
            <Sk className="h-5 w-full" />
            <Sk className="h-5 w-5/6" />
            <Sk className="h-5 w-4/5" />
          </div>

          {/* Currently playing label */}
          <Sk className="h-4 w-28" />

          {/* Player card */}
          <div className="rounded-2xl bg-neutral-100 p-4">
            <Sk className="w-full rounded-xl" style={{ aspectRatio: '5/4' }} />
            <div className="mt-4 border-t border-neutral-200 pt-4 flex justify-center gap-8">
              <Sk className="h-4 w-4 rounded-full" />
              <Sk className="h-4 w-6 rounded-full" />
              <Sk className="h-4 w-4 rounded-full" />
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 sm:px-10 pb-10 sm:pb-14 shrink-0">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-20">
          {[0, 1].map((col) => (
            <div key={col} className="flex-1 space-y-3">
              <Sk className="h-3.5 w-10 mb-1" />
              <div className="border-t border-neutral-200 pt-4 space-y-3">
                {[1, 2, 3].slice(0, col === 0 ? 3 : 2).map((r) => (
                  <div key={r} className="flex justify-between gap-4">
                    <Sk className="h-3.5 w-28" />
                    <Sk className="h-3.5 w-24" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>

    </div>
  );
}
