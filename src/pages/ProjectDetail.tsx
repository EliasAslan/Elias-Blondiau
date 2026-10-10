import { Link, useParams } from 'react-router-dom';
import { PROJECT_SLUGS, type ProjectSlug } from '../data/site';
import { getProjectEntry } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { CopyButton, ProjectCard } from '../components/layout';

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
          <h1 id="missing-h">{t.detail.notFoundTitle}</h1>
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
  const story = t.detail.sections[DETAIL_KEYS[slug]];
  const statusClass =
    slug === 'emvs-study-hub' ? 'wip' : slug === 'ben-sustain' ? 'mod' : 'live';
  const others = PROJECT_SLUGS.filter((s) => s !== slug);
  const hasTech = 'techStack' in story && 'techSetup' in story;

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
          <h1 id="detail-h">{entry.title}</h1>
          <p className="tagline">{story.tagline}</p>
          <p className="lead">{entry.body}</p>
        </div>
      </section>

      <section aria-labelledby="why-h">
        <div className="wrap narrow story">
          <h2 id="why-h" className="plain-h">
            {t.detail.whyT}
          </h2>
          {story.why.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <h2 className="plain-h">{t.detail.decisionsT}</h2>
          <ul className="check-list">
            {story.decisions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {'features' in story && (
            <>
              <h2 className="plain-h">{t.detail.featuresT}</h2>
              <ul className="check-list">
                {story.features.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          )}
          {'inherited' in story && (
            <>
              <h2 className="plain-h">{t.detail.inheritedT}</h2>
              <ul className="check-list">
                {story.inherited.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <h2 className="plain-h">{t.detail.mineT}</h2>
              <ul className="check-list">
                {story.mine.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          )}

          <h2 className="plain-h">{t.detail.challengesT}</h2>
          <ul className="plain-list">
            {story.challenges.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="card card-state">
            <h2>{t.detail.limitsT}</h2>
            <ul className="plain-list">
              {story.limits.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>{t.detail.state}</h2>
            <p>{story.stateBody}</p>
            {entry.note && <p className="note">{entry.note}</p>}
            <h2 className="links-h">{t.detail.links}</h2>
            <ul className="link-rows">
              {entry.demoUrl && (
                <li>
                  <span>{t.projects.demoLabel}</span>
                  <a
                    href={entry.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.demoUrl.replace('https://', '').replace(/\/$/, '')}
                    <span className="sr-only"> {t.projects.openNewTab}</span>
                  </a>
                </li>
              )}
              {entry.repoUrl && (
                <li>
                  <span>{t.projects.repoLabel}</span>
                  <a
                    href={entry.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.repoUrl.replace('https://', '').replace(/\/$/, '')}
                    <span className="sr-only"> {t.projects.openNewTab}</span>
                  </a>
                </li>
              )}
              {entry.upstreamUrl && (
                <li>
                  <span>{t.projects.upstreamLabel}</span>
                  <a
                    href={entry.upstreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.upstreamUrl.replace('https://', '').replace(/\/$/, '')}
                    <span className="sr-only"> {t.projects.openNewTab}</span>
                  </a>
                </li>
              )}
              {!entry.repoUrl && <li className="muted">{t.projects.noSource}</li>}
            </ul>
          </div>

          <details className="tech">
            <summary>{t.detail.tech}</summary>
            <p className="muted">
              {hasTech ? t.detail.techVerified : t.detail.techUnverified}
            </p>
            {hasTech && (
              <>
                <ul className="tag-list">
                  {(story.techStack as string[]).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <ol className="plain-list ordered">
                  {(story.techSetup as string[]).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                {'techCommands' in story && (
                  <>
                    <h3 className="cmd-h">{t.detail.commandsT}</h3>
                    <ul className="cmd-list">
                      {(story.techCommands as string[]).map((cmd) => (
                        <li key={cmd}>
                          <code>{cmd}</code>
                          <CopyButton text={cmd} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}
          </details>

          <h2 className="plain-h">{t.detail.shots}</h2>
          <div className="detail-grid">
            {story.shots.map((shot) => (
              <div key={shot} className="shot" role="note">
                <p className="placeholder-title">{t.detail.shotPlaceholder}</p>
                <p>{shot}</p>
              </div>
            ))}
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
