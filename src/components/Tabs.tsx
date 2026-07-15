import type { CSSProperties } from 'react';
import { tabs, planetColors } from '../constants';
import type { PlanetName, TabKey } from '../types';

interface TabsProps {
  activePlanetName: PlanetName;
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
  compact?: boolean;
}

function Tabs({ activePlanetName, activeTab, onChangeTab, compact = false }: TabsProps) {
  const color = planetColors[activePlanetName];

  return (
    <div className={compact ? 'mobile-tabs' : 'tabs'}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            className={isActive ? 'is-active' : ''}
            type="button"
            style={{ '--active-color': color } as CSSProperties}
            onClick={() => onChangeTab(tab.key)}
          >
            {!compact && <span>{String(index + 1).padStart(2, '0')}</span>}
            {compact ? tab.shortLabel : tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;