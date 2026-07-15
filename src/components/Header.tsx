import type { CSSProperties } from 'react';
import type { Planet, PlanetName } from '../types';
import { navDotColors, planetColors } from '../constants';

interface HeaderProps {
  planets: Planet[];
  activePlanet: Planet;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onSelectPlanet: (name: PlanetName) => void;
}

function Header({ planets, activePlanet, menuOpen, onToggleMenu, onSelectPlanet }: HeaderProps) {
  return (
    <header className="header">
      <a className="logo" href="#top" aria-label="The Planets home">
        The Planets
      </a>

      <button
        className={`menu-button ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`planet-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Planet navigation">
        {planets.map((planet) => {
          const isActive = activePlanet.name === planet.name;

          return (
            <button
              className={`planet-nav__item ${isActive ? 'is-active' : ''}`}
              key={planet.name}
              type="button"
              style={{ '--planet-color': planetColors[planet.name] } as CSSProperties}
              onClick={() => onSelectPlanet(planet.name)}
            >
              <span
                className="planet-nav__dot"
                style={{ backgroundColor: navDotColors[planet.name] }}
                aria-hidden="true"
              />
              <span>{planet.name}</span>
              <span className="planet-nav__chevron" aria-hidden="true">
                ›
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;