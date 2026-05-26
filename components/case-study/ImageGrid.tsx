import Image from 'next/image';

type ImageItem = {
  src: string;
  caption?: string;
  description?: string;
};

type Props = {
  cols: 2 | 3;
  images: ImageItem[];
  aspect?: string; // e.g. '4/5', '1/1', '3/4' — defaults to '4/5'
};

export default function ImageGrid({ cols, images = [], aspect = '4/5' }: Props) {
  if (!images.length) return null;

  return (
    <div
      className="my-10 grid md:gap-6 gap-2"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {images.map((img, i) => (
        <figure key={i}>
          {/* Fixed-aspect container so every cell is the same height */}
          <div
            className="relative w-full rounded-xl overflow-hidden bg-neutral-100"
            style={{ aspectRatio: aspect }}
          >
            <Image
              src={img.src}
              alt={img.caption ?? ''}
              fill
              className="object-contain p-6"
              sizes={cols === 2 ? '30vw' : '30vw'}
            />
          </div>
          {img.caption && (
            <figcaption className="mt-3 text-sm text-center text-neutral-700 font-medium">
              {img.caption}
            </figcaption>
          )}
          {img.description && (
            <p className="mt-1 text-sm text-center text-neutral-400 leading-relaxed">
              {img.description}
            </p>
          )}
        </figure>
      ))}
    </div>
  );
}
