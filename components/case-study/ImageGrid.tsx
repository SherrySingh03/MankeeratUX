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
  wideFirst?: boolean; // cols=2 only: first image 70%, second 30%
};

export default function ImageGrid({ cols, images = [], aspect = '4/5', wideFirst = false }: Props) {
  if (!images.length) return null;

  if (cols === 2 && wideFirst) {
    return (
      <div className="flex items-stretch md:gap-6 gap-2">
        {images.map((img, i) => {
          const isSecond = i === 1;
          return (
            <figure
              key={i}
              className={`min-w-0${isSecond ? ' flex flex-col' : ''}`}
              style={{ flex: i === 0 ? '0 0 70%' : '1' }}
            >
              <div
                className={`relative w-full rounded-xl overflow-hidden bg-neutral-100${isSecond ? ' flex-1 min-h-0' : ''}`}
                style={isSecond ? undefined : { aspectRatio: aspect }}
              >
                <Image
                  src={img.src}
                  alt={img.caption ?? ''}
                  fill
                  className="object-contain p-6"
                  sizes={i === 0 ? '70vw' : '30vw'}
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
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="grid md:gap-6 gap-2"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {images.map((img, i) => (
        <figure key={i}>
          <div
            className="relative w-full rounded-xl overflow-hidden bg-neutral-100"
            style={{ aspectRatio: aspect }}
          >
            <Image
              src={img.src}
              alt={img.caption ?? ''}
              fill
              className="object-contain p-6"
              sizes="30vw"
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
