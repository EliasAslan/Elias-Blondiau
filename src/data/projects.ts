import type { Translations } from '../i18n/LanguageContext';
import { DEMOS, REPOS, UPSTREAM } from './site';
import type { ProjectSlug } from './site';

export interface ProjectEntry {
  slug: ProjectSlug;
  title: string;
  status: string;
  body: string;
  note?: string;
  url?: string;
  cta?: string;
  cardClass: string;
  demoUrl?: string;
  repoUrl?: string;
  upstreamUrl?: string;
}

const CARD_CLASSES: Record<ProjectSlug, string> = {
  'pfadi-siders': 'p-pfadi',
  'calisthenics-app': 'p-cal',
  'emvs-study-hub': 'p-emvs',
  'ben-sustain': 'p-ben',
};

const LINKS: Record<ProjectSlug, Partial<Pick<ProjectEntry, 'demoUrl' | 'repoUrl' | 'upstreamUrl'>>> = {
  'pfadi-siders': { demoUrl: DEMOS.pfadi },
  'calisthenics-app': { demoUrl: DEMOS.calisthenics },
  'emvs-study-hub': { demoUrl: DEMOS.emvs, repoUrl: REPOS.emvs },
  'ben-sustain': { repoUrl: REPOS.benFork, upstreamUrl: UPSTREAM.repo },
};

export function getProjectEntries(t: Translations): ProjectEntry[] {
  const raw = [
    { slug: 'pfadi-siders' as const, data: t.projects.pfadi },
    { slug: 'calisthenics-app' as const, data: t.projects.cal },
    { slug: 'emvs-study-hub' as const, data: t.projects.emvs },
    { slug: 'ben-sustain' as const, data: t.projects.ben },
  ];
  return raw.map(({ slug, data }) => ({
    slug,
    title: data.title,
    status: data.status,
    body: data.body,
    note: 'note' in data ? (data.note as string) : undefined,
    url: 'url' in data ? (data.url as string) : undefined,
    cta: 'cta' in data ? (data.cta as string) : undefined,
    cardClass: CARD_CLASSES[slug],
    ...LINKS[slug],
  }));
}

export function getProjectEntry(
  t: Translations,
  slug: ProjectSlug,
): ProjectEntry | undefined {
  return getProjectEntries(t).find((p) => p.slug === slug);
}
