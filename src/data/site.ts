export const CONTACT = {
  email: 'e3953s@duck.com',
  github: 'https://github.com/EliasAslan',
  githubLabel: 'github.com/EliasAslan',
  linkedin: 'https://www.linkedin.com/in/elias-blondiau-172b6a442/',
} as const;

export const LANG_STORAGE_KEY = 'elias_portfolio_lang';

export const EDUCATION_LINKS = {
  efz: 'https://www.berufsbildung-vs.ch/berufslehren/informatiker-in-efz-emvs-311',
  bmTals:
    'https://www.berufsbildung-vs.ch/berufsmaturitaet/bm-klassen-wissenswertes/bm-klassen/bm-technik,-architektur,-life-sciences-bm-tals-804',
} as const;

export type ProjectSlug =
  | 'pfadi-siders'
  | 'calisthenics-app'
  | 'emvs-study-hub'
  | 'ben-sustain';

export const PROJECT_SLUGS: ProjectSlug[] = [
  'pfadi-siders',
  'calisthenics-app',
  'emvs-study-hub',
  'ben-sustain',
];

export const FEATURED_SLUGS: ProjectSlug[] = ['pfadi-siders', 'calisthenics-app'];

export function projectPath(slug: ProjectSlug): string {
  return `/projects/${slug}`;
}
