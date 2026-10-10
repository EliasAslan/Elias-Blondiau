export const CONTACT = {
  email: 'e3953s@duck.com',
  github: 'https://github.com/EliasAslan',
  githubLabel: 'github.com/EliasAslan',
  linkedin: 'https://www.linkedin.com/in/elias-blondiau-172b6a442/',
} as const;

/** Verified live demos (checked Oct 2026; all resolve). */
export const DEMOS = {
  pfadi: 'https://pfadi-siders-updated.vercel.app/',
  calisthenics: 'https://refreshing-apex-form-flow.base44.app/',
  emvs: 'https://em-vs-study-hub.vercel.app/',
} as const;

/** Verified public source repositories (github.com/EliasAslan). */
export const REPOS = {
  /** EMVS Study Hub source. Public JavaScript repository. */
  emvs: 'https://github.com/EliasAslan/EMVs-studyHub',
  /** BEN.SUSTAIN fork. Public fork of openGym. */
  benFork: 'https://github.com/EliasAslan/benOpenGym',
} as const;

/** Verified upstream project for BEN.SUSTAIN (AGPL-3.0). */
export const UPSTREAM = {
  repo: 'https://github.com/DuarteSantos8/openGym',
  site: 'https://opengym.ch',
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
