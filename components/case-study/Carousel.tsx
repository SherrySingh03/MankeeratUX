import Image from 'next/image';

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
  if (!images.length) return null;

  return (
    <div className="mt-10">
      <div
        className="flex gap-5 overflow-x-auto pb-6"
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
              <figcaption className="mt-4 text-base font-semibold text-neutral-800 text-center">
                {img.caption}
              </figcaption>
            )}
            {img.description && (
              <p className="mt-1 text-sm text-neutral-500 leading-relaxed text-center">
                {img.description}
              </p>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
