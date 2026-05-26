'use client';

import { useState } from 'react';
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

  if (!images.length) return null;

  return (
    <div className="my-10">
      {/* Card — all images stacked, only current is opaque */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-neutral-100"
        style={{ aspectRatio: aspect }}
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
              className="object-contain p-8"
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
