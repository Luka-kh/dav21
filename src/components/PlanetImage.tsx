import type { Planet, TabKey } from '../types';

import mercuryPlanet from '../assets/planet-mercury.svg';
import mercuryInternal from '../assets/planet-mercury-internal.svg';
import mercuryGeology from '../assets/geology-mercury.png';

import venusPlanet from '../assets/planet-venus.svg';
import venusInternal from '../assets/planet-venus-internal.svg';
import venusGeology from '../assets/geology-venus.png';

import earthPlanet from '../assets/planet-earth.svg';
import earthInternal from '../assets/planet-earth-internal.svg';
import earthGeology from '../assets/geology-earth.png';

import marsPlanet from '../assets/planet-mars.svg';
import marsInternal from '../assets/planet-mars-internal.svg';
import marsGeology from '../assets/geology-mars.png';

import jupiterPlanet from '../assets/planet-jupiter.svg';
import jupiterInternal from '../assets/planet-jupiter-internal.svg';
import jupiterGeology from '../assets/geology-jupiter.png';

import saturnPlanet from '../assets/planet-saturn.svg';
import saturnInternal from '../assets/planet-saturn-internal.svg';
import saturnGeology from '../assets/geology-saturn.png';

import uranusPlanet from '../assets/planet-uranus.svg';
import uranusInternal from '../assets/planet-uranus-internal.svg';
import uranusGeology from '../assets/geology-uranus.png';

import neptunePlanet from '../assets/planet-neptune.svg';
import neptuneInternal from '../assets/planet-neptune-internal.svg';
import neptuneGeology from '../assets/geology-neptune.png';

interface PlanetImageProps {
  planet: Planet;
  activeTab: TabKey;
}

const images = {
  Mercury: {
    planet: mercuryPlanet,
    internal: mercuryInternal,
    geology: mercuryGeology,
  },
  Venus: {
    planet: venusPlanet,
    internal: venusInternal,
    geology: venusGeology,
  },
  Earth: {
    planet: earthPlanet,
    internal: earthInternal,
    geology: earthGeology,
  },
  Mars: {
    planet: marsPlanet,
    internal: marsInternal,
    geology: marsGeology,
  },
  Jupiter: {
    planet: jupiterPlanet,
    internal: jupiterInternal,
    geology: jupiterGeology,
  },
  Saturn: {
    planet: saturnPlanet,
    internal: saturnInternal,
    geology: saturnGeology,
  },
  Uranus: {
    planet: uranusPlanet,
    internal: uranusInternal,
    geology: uranusGeology,
  },
  Neptune: {
    planet: neptunePlanet,
    internal: neptuneInternal,
    geology: neptuneGeology,
  },
};

function PlanetImage({ planet, activeTab }: PlanetImageProps) {
  const planetImages = images[planet.name];

  return (
    <div className={`planet-visual planet-visual--${planet.name.toLowerCase()}`}>
      {activeTab === 'structure' ? (
        <div className="internal-wrapper">
          <img
            className="planet-visual__main"
            src={planetImages.planet}
            alt={`${planet.name} planet`}
          />

          <img
            className="planet-visual__internal"
            src={planetImages.internal}
            alt={`${planet.name} internal structure`}
          />
        </div>
      ) : (
        <img
          className="planet-visual__main"
          src={planetImages.planet}
          alt={`${planet.name} planet`}
        />
      )}

      {activeTab === 'geology' && (
        <img
          className="planet-visual__geology"
          src={planetImages.geology}
          alt={`${planet.name} surface geology`}
        />
      )}
    </div>
  );
}

export default PlanetImage;