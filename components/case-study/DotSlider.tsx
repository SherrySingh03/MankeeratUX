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
        className="relative w-full rounded-2xl overflow-hidden bg-neutral-100 cursor-grab active:cursor-grabbing"
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
