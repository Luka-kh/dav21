import type { Planet } from '../types';

interface StatsProps {
  planet: Planet;
}

function Stats({ planet }: StatsProps) {
  const stats = [
    { label: 'Rotation Time', value: planet.rotation },
    { label: 'Revolution Time', value: planet.revolution },
    { label: 'Radius', value: planet.radius },
    { label: 'Average Temp.', value: planet.temperature },
  ];

  return (
    <section className="stats" aria-label={`${planet.name} statistics`}>
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <h2>{stat.label}</h2>
          <p>{stat.value}</p>
        </article>
      ))}
    </section>
  );
}

export default Stats;