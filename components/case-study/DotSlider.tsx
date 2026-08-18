'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

type SlideItem = {
  src: string;
  caption?: string;
};

type Props = {
  images: SlideItem[];
  aspect?: string;
};

export default function DotSlider({ images = [], aspect = '16/9' }: Props) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  if (!images.length) return null;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, images.length - 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <div className="my-10">
      {/* Card */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-neutral-100 cursor-grab active:cursor-grabbing group"
        style={{ aspectRatio: aspect, touchAction: 'pan-y' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
          >
            <Image
              src={img.src}
              alt={img.caption ?? ''}
              fill
              className="object-contain md:p-8 p-2"
              sizes="(max-width: 768px) 100vw, 720px"
              priority={i === 0}
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              disabled={current === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              disabled={current === images.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {images[current].caption && (
        <p className="mt-3 text-sm text-center text-neutral-500 italic">
          {images[current].caption}
        </p>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                backgroundColor: i === current ? '#1a1a1a' : '#d4d4d4',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
