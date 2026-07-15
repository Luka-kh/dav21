import { useMemo, useState } from 'react';
import planetsJson from './data/data.json';
import Header from './components/Header';
import Tabs from './components/Tabs';
import PlanetImage from './components/PlanetImage';
import PlanetInfo from './components/PlanetInfo';
import Stats from './components/Stats';
import type { Planet, PlanetName, TabKey } from './types';

const planets = planetsJson as Planet[];

function App() {
  const [activePlanetName, setActivePlanetName] = useState<PlanetName>('Mercury');
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [menuOpen, setMenuOpen] = useState(false);

  const activePlanet = useMemo(
    () => planets.find((planet) => planet.name === activePlanetName) ?? planets[0],
    [activePlanetName],
  );

  function handlePlanetSelect(name: PlanetName) {
    setActivePlanetName(name);
    setActiveTab('overview');
    setMenuOpen(false);
  }

  return (
    <div className="app" id="top">
      <Header
        planets={planets}
        activePlanet={activePlanet}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onSelectPlanet={handlePlanetSelect}
      />

      {!menuOpen && (
        <>
          <div className="mobile-tabs-wrapper">
            <Tabs
              compact
              activePlanetName={activePlanet.name}
              activeTab={activeTab}
              onChangeTab={setActiveTab}
            />
          </div>

          <main className="main-content">
            <PlanetImage planet={activePlanet} activeTab={activeTab} />
            <PlanetInfo planet={activePlanet} activeTab={activeTab} onChangeTab={setActiveTab} />
          </main>

          <Stats planet={activePlanet} />
        </>
      )}
    </div>
  );
}

export default App;