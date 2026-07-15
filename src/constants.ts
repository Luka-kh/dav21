import type { PlanetName, TabKey } from './types';

export const planetColors: Record<PlanetName, string> = {
  Mercury: '#419ebb',
  Venus: '#eda249',
  Earth: '#6d2ed5',
  Mars: '#d14c32',
  Jupiter: '#d83a34',
  Saturn: '#cd5120',
  Uranus: '#1ec1a2',
  Neptune: '#2d68f0',
};

export const navDotColors: Record<PlanetName, string> = {
  Mercury: '#def4fc',
  Venus: '#f7cc7f',
  Earth: '#545bfe',
  Mars: '#ff6a45',
  Jupiter: '#ecad7a',
  Saturn: '#fccb6b',
  Uranus: '#65f0d5',
  Neptune: '#497efa',
};

export const tabs: Array<{ key: TabKey; label: string; shortLabel: string }> = [
  { key: 'overview', label: 'Overview', shortLabel: 'Overview' },
  { key: 'structure', label: 'Internal Structure', shortLabel: 'Structure' },
  { key: 'geology', label: 'Surface Geology', shortLabel: 'Surface' },
];