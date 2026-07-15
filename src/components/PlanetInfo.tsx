import type { Planet, TabKey } from '../types';
import Tabs from './Tabs';

interface PlanetInfoProps {
  planet: Planet;
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
}

function PlanetInfo({ planet, activeTab, onChangeTab }: PlanetInfoProps) {
  const content = planet[activeTab];

  return (
    <section className="planet-info" aria-live="polite">
      <h1>{planet.name}</h1>

      <p>{content.content}</p>

      <a className="source-link" href={content.source} target="_blank" rel="noreferrer">
        <span>Source :</span> <strong>Wikipedia</strong>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10.8 0H1.2C.54 0 0 .54 0 1.2v9.6c0 .66.54 1.2 1.2 1.2h9.6c.66 0 1.2-.54 1.2-1.2V1.2c0-.66-.54-1.2-1.2-1.2ZM9 9H3V3h2v1H4v4h4V7h1v2Zm0-3H8V4.7L5.7 7 5 6.3 7.3 4H6V3h3v3Z"
          />
        </svg>
      </a>

      <Tabs activePlanetName={planet.name} activeTab={activeTab} onChangeTab={onChangeTab} />
    </section>
  );
}

export default PlanetInfo;