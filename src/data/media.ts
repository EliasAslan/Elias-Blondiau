import type { ProjectSlug } from './site';

/**
 * Image slots for user-supplied media.
 *
 * How to add an image: save the file under `public/` using the exact
 * filename below (e.g. `public/shots/pfadi-hero-desktop.png`), rebuild,
 * and the site shows it automatically — no code change needed.
 * Until the file exists, a labelled placeholder is shown instead.
 *
 * Recommended: PNG for screenshots, JPG for photos, each under ~500 KB.
 */
export interface MediaSlotDef {
  /** Path relative to `public/` (and to the deployed site root). */
  file: string;
  /** CSS aspect-ratio the slot reserves. */
  ratio: string;
}

export const SHOTS: Record<ProjectSlug, MediaSlotDef[]> = {
  'pfadi-siders': [
    { file: 'shots/pfadi-hero-desktop.png', ratio: '16 / 9' },
    { file: 'shots/pfadi-stufen-mobile.png', ratio: '9 / 19' },
  ],
  'calisthenics-app': [
    { file: 'shots/cal-session-desktop.png', ratio: '16 / 9' },
    { file: 'shots/cal-session-mobile.png', ratio: '9 / 19' },
  ],
  'emvs-study-hub': [
    { file: 'shots/emvs-heute-desktop.png', ratio: '16 / 9' },
    { file: 'shots/emvs-schwachstellen-mobile.png', ratio: '9 / 19' },
  ],
  'ben-sustain': [
    { file: 'shots/ben-home-desktop.png', ratio: '16 / 9' },
    { file: 'shots/ben-workout-mobile.png', ratio: '9 / 19' },
  ],
};

export const PHOTOS: Record<'about' | 'beyond', MediaSlotDef> = {
  about: { file: 'photos/about-portrait.jpg', ratio: '4 / 3' },
  beyond: { file: 'photos/beyond.jpg', ratio: '4 / 3' },
};
