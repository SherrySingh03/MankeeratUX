import Image from 'next/image';

type Props = {
  src: string;
  caption?: string;
  fullWidth?: boolean;
};

export default function Figure({ src, caption, fullWidth }: Props) {
  return (
    <figure className={`my-10 ${fullWidth ? '-mx-10' : ''} mx-auto rounded-3xl bg-neutral-100`}>
      {/* width/height=0 + w-full h-auto renders at natural aspect ratio */}
      <Image
        src={src}
        alt={caption ?? ''}
        width={0}
        height={0}
        sizes={fullWidth ? '80vw' : '720px'}
        className="w-full h-auto rounded-xl md:px-30 md:py-10 py-5"
      />
      {caption && (
        <figcaption className="text-lg pb-10 text-center text-neutral-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
