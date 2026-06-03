import Image from 'next/image';

type Props = {
  image: string;
  caption: string;
};

export default function AwardBadge({ image, caption }: Props) {
  return (
    <figure className="inline-flex items-center gap-3 bg-neutral-100 rounded-xl px-5 py-3">
      <div className="relative w-11 h-11 shrink-0">
        <Image
          src={image}
          alt={caption}
          fill
          className="object-contain"
          sizes="44px"
        />
      </div>
      <figcaption className="text-sm font-medium text-neutral-700 whitespace-nowrap">
        {caption}
      </figcaption>
    </figure>
  );
}
