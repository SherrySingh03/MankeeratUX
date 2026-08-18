'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type CarouselItem = {
  src: string;
  caption?: string;
  description?: string;
};

type Props = {
  images: CarouselItem[];
  aspect?: string;
  cardWidth?: string; // e.g. '80%' for landscape, '32%' for portrait phone grid
};

export default function Carousel({ images = [], aspect = '16/9', cardWidth = '80%' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstImageBoxRef = useRef<HTMLDivElement>(null);
  const [arrowCenter, setArrowCenter] = useState<number | null>(null);

  useEffect(() => {
    const imageBox = firstImageBoxRef.current;
    if (!imageBox) return;
    const updateCenter = () => setArrowCenter(imageBox.offsetTop + imageBox.offsetHeight / 2);
    updateCenter();
    const observer = new ResizeObserver(updateCenter);
    observer.observe(imageBox);
    return () => observer.disconnect();
  }, [images, aspect, cardWidth]);

  if (!images.length) return null;

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('figure');
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.8) + 20; // + gap-5

    // scroll-snap-type blocks smooth scrollBy in some browsers (the scroll silently no-ops),
    // so snapping is disabled for the duration of the animated scroll and restored after.
    el.style.scrollSnapType = 'none';
    const restoreSnap = () => {
      el.style.scrollSnapType = 'x mandatory';
      clearTimeout(fallbackTimer);
    };
    el.addEventListener('scrollend', restoreSnap, { once: true });
    const fallbackTimer = setTimeout(restoreSnap, 700);

    el.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  return (
    <div className="mt-6 relative group">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto py-6"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          touchAction: 'pan-x',
        }}
      >
        {images.map((img, i) => (
          <figure
            key={i}
            className="shrink-0"
            style={{ width: cardWidth, scrollSnapAlign: 'start' }}
          >
            {/* Image card */}
            <div
              ref={i === 0 ? firstImageBoxRef : undefined}
              className="relative w-full rounded-2xl overflow-hidden bg-neutral-100"
              style={{ aspectRatio: aspect }}
            >
              <Image
                src={img.src}
                alt={img.caption ?? ''}
                fill
                className="object-contain md:p-10 p-2"
                sizes="60vw"
              />
            </div>

            {/* Text below card */}
            {img.caption && (
              <figcaption className="mt-4 text-lg font-semibold text-neutral-800" style={{textAlign: img.description ? 'left': 'center'}}>
                {img.caption}
              </figcaption>
            )}
            {img.description && (
              <div>
                <div className="my-2">
                  <div className="border-t border-neutral-200" />
              </div>
              <p className="mt-1 text-sm text-neutral-500 leading-relaxed text-start">
                {img.description}
              </p>
              </div>
            )}
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByCard(-1)}
        style={arrowCenter !== null ? { top: arrowCenter } : undefined}
        className="absolute left-2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByCard(1)}
        style={arrowCenter !== null ? { top: arrowCenter } : undefined}
        className="absolute right-2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
