type StatItem = {
  value: string;
  description: string;
};

type Props = {
  color: string;
  stats: StatItem[];
};

export default function StatCallout({ color, stats = [] }: Props) {
  if (!stats.length) return null;
  return (
    <div className="md:flex gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="pl-4 flex"
          style={{ borderLeft: `3px solid ${color}` }}
        >
          <p className="text-3xl font-bold text-neutral-900">
            {stat.value}
            <span className="pl-2 text-base font-normal text-neutral-500">{stat.description}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
