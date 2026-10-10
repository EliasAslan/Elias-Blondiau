import { Link, useParams } from 'react-router-dom';
import { PROJECT_SLUGS, type ProjectSlug } from '../data/site';
import { getProjectEntry } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { Placeholder, ProjectCard } from '../components/layout';

const DETAIL_KEYS = {
  'pfadi-siders': 'pfadi',
  'calisthenics-app': 'cal',
  'emvs-study-hub': 'emvs',
  'ben-sustain': 'ben',
} as const;

function isProjectSlug(slug: string | undefined): slug is ProjectSlug {
  return !!slug && (PROJECT_SLUGS as string[]).includes(slug);
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  if (!isProjectSlug(slug)) {
    return (
      <section aria-labelledby="missing-h">
        <div className="wrap narrow">
          <p>
            <Link className="back-link" to="/projects">
              ← {t.detail.back}
            </Link>
          </p>
          <h2 id="missing-h">{t.detail.notFoundTitle}</h2>
          <p>{t.detail.notFoundBody}</p>
          <p className="hero-links">
            <Link className="btn primary" to="/projects">
              {t.detail.notFoundCta}
            </Link>
          </p>
        </div>
      </section>
    );
  }

  const entry = getProjectEntry(t, slug)!;
  const detail = t.detail[DETAIL_KEYS[slug]];
  const statusClass =
    slug === 'emvs-study-hub' ? 'wip' : slug === 'ben-sustain' ? 'mod' : 'live';
  const others = PROJECT_SLUGS.filter((s) => s !== slug);

  return (
    <>
      <section className="detail-hero" aria-labelledby="detail-h">
        <div className="wrap narrow">
          <p>
            <Link className="back-link" to="/projects">
              ← {t.detail.back}
            </Link>
          </p>
          <p className={`status ${statusClass}`}>{entry.status}</p>
          <h2 id="detail-h">{entry.title}</h2>
          <p className="lead">{entry.body}</p>
          <p>{detail.extra}</p>
        </div>
      </section>

      <section aria-labelledby="contrib-h">
        <div className="wrap narrow">
          <div className="detail-grid">
            <div className="card">
              <h3 id="contrib-h">{t.detail.contribution}</h3>
              <ul className="check-list">
                {detail.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="card card-state">
              <h3>{t.detail.state}</h3>
              <p>{detail.stateBody}</p>
              {entry.note && <p className="note">{entry.note}</p>}
              {entry.url && entry.cta && (
                <>
                  <h3 className="links-h">{t.detail.links}</h3>
                  <p className="hero-links">
                    <a
                      className="btn primary"
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {entry.cta}
                      <span className="sr-only"> {t.projects.openNewTab}</span>
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="detail-grid">
            <Placeholder
              title={t.detail.comingScreens}
              body={t.detail.comingScreensBody}
            />
            <Placeholder
              title={t.detail.comingTech}
              body={t.detail.comingTechBody}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="more-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="more-h">{t.detail.back}</h2>
          </div>
          <div className="projects">
            {others.slice(0, 2).map((s) => (
              <ProjectCard key={s} slug={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
