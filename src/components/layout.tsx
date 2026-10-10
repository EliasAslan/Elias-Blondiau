import { Link, NavLink } from 'react-router-dom';
import { CONTACT, projectPath } from '../data/site';
import { getProjectEntry } from '../data/projects';
import type { ProjectSlug } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-toggle" role="group" aria-label={t.nav.changeLanguage}>
      {(['en', 'de'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="brand" to="/">
          Elias Blondiau
        </Link>
        <div className="head-right">
          <nav className="site-nav" aria-label="Main">
            <ul>
              <li>
                <NavLink to="/" end>{t.nav.home}</NavLink>
              </li>
              <li>
                <NavLink to="/projects">{t.nav.projects}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t.nav.about}</NavLink>
              </li>
            </ul>
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

export function ContactLinks() {
  const { t } = useLanguage();
  return (
    <ul className="contact-list">
      <li>
        <span className="k">{t.contact.email}</span>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </li>
      <li>
        <span className="k">{t.contact.github}</span>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
          {CONTACT.githubLabel}
          <span className="sr-only"> {t.projects.openNewTab}</span>
        </a>
      </li>
      <li>
        <span className="k">{t.contact.linkedin}</span>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
          {t.contact.linkedinLabel}
          <span className="sr-only"> {t.projects.openNewTab}</span>
        </a>
      </li>
    </ul>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="wrap foot-grid">
        <p>{t.footer.line}</p>
        <ul className="foot-links">
          <li>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
          <li>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              {CONTACT.githubLabel}
              <span className="sr-only"> {t.projects.openNewTab}</span>
            </a>
          </li>
          <li>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.linkedinLabel}
              <span className="sr-only"> {t.projects.openNewTab}</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export function Placeholder({ title, body }: { title: string; body: string }) {
  return (
    <div className="placeholder" role="note">
      <p className="placeholder-title">{title}</p>
      <p>{body}</p>
    </div>
  );
}

export function ProjectCard({ slug }: { slug: ProjectSlug }) {
  const { t } = useLanguage();
  const entry = getProjectEntry(t, slug);
  if (!entry) return null;
  const statusClass =
    slug === 'emvs-study-hub' ? 'wip' : slug === 'ben-sustain' ? 'mod' : 'live';
  return (
    <article className={`card ${entry.cardClass}`}>
      <p className={`status ${statusClass}`}>{entry.status}</p>
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
      {entry.note && <p className="note">{entry.note}</p>}
      <p className="hero-links card-actions">
        <Link className="btn" to={projectPath(slug)}>
          {t.projects.details}
        </Link>
        {entry.url && entry.cta && (
          <a
            className="btn"
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {entry.cta}
            <span className="sr-only"> {t.projects.openNewTab}</span>
          </a>
        )}
      </p>
    </article>
  );
}
