export type PlanetName =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

export type TabKey = 'overview' | 'structure' | 'geology';

export interface PlanetInfoBlock {
  content: string;
  source: string;
}

export interface Planet {
  name: PlanetName;
  overview: PlanetInfoBlock;
  structure: PlanetInfoBlock;
  geology: PlanetInfoBlock;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}