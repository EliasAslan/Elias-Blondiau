import { useEffect, useRef, useState } from 'react';
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
          <nav className="site-nav" aria-label={t.nav.main}>
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

export function FooterNotes() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const total = t.eggs.footerNotes.length + 1;
  const cycle = () => setIndex((i) => (i + 1) % total);
  return (
    <p className="foot-notes">
      <button
        type="button"
        className="foot-egg"
        onClick={cycle}
        aria-label={t.eggs.footerButton}
        title={t.eggs.footerButton}
      >
        ⁂
      </button>{' '}
      <span aria-live="polite">
        {index < t.eggs.footerNotes.length ? (
          t.eggs.footerNotes[index]
        ) : (
          <>
            {t.eggs.footerRestBefore}{' '}
            <Link to="/rest-day">{t.eggs.footerRestLink}</Link>
            {t.eggs.footerRestAfter}
          </>
        )}
      </span>
    </p>
  );
}

export function RoutePalette() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const routes = [
    {
      to: '/',
      names: ['home', 'start', t.nav.home],
    },
    {
      to: '/projects',
      names: ['projects', 'projekte', 'alle projekte', 'all projects', t.nav.projects],
    },
    {
      to: '/about',
      names: ['about', 'beyond code', 'code', 'über mich', t.nav.about],
    },
  ];
  const q = query.trim().toLowerCase();
  const matches =
    q === '' ? routes : routes.filter((r) => r.names.some((n) => n.toLowerCase().includes(q)));
  return (
    <div className="palette">
      <p className="muted">{t.eggs.paletteHint}</p>
      <label className="palette-label" htmlFor="route-palette">
        {t.eggs.paletteLabel}
      </label>
      <input
        id="route-palette"
        className="palette-input"
        type="text"
        value={query}
        autoComplete="off"
        placeholder={t.eggs.palettePlaceholder}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setQuery('');
            e.currentTarget.blur();
          }
        }}
      />
      {matches.length > 0 ? (
        <ul className="palette-list" aria-live="polite">
          {matches.map((r) => (
            <li key={r.to}>
              <Link className="btn" to={r.to}>
                {r.names[r.names.length - 1]}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted" aria-live="polite">
          {t.eggs.paletteNone}
        </p>
      )}
    </div>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="wrap foot-grid">
        <p>{t.footer.line}</p>
        <FooterNotes />
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

export function Placeholder({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="placeholder" role="note">
      <p className="placeholder-title">{title}</p>
      <p>{body}</p>
    </div>
  );
}

/**
 * Image slot that shows a user-supplied file from `public/` when it exists
 * and a labelled placeholder (with the expected filename) until then.
 */
export function MediaSlot({
  file,
  alt,
  ratio,
  label,
  body,
  frameClass,
}: {
  file: string;
  alt: string;
  ratio: string;
  label: string;
  body: string;
  frameClass?: string;
}) {
  const { t } = useLanguage();
  const [missing, setMissing] = useState(true);
  useEffect(() => {
    setMissing(true);
    const img = new Image();
    img.onload = () => setMissing(false);
    img.src = `${import.meta.env.BASE_URL}${file}`;
  }, [file]);
  if (missing) {
    return (
      <div className={`shot${frameClass ? ` ${frameClass}` : ''}`} role="note">
        <p className="placeholder-title">{label}</p>
        <p>{body}</p>
        <p className="muted shot-file">
          {t.media.expected} <code className="code-chip">{file}</code>
        </p>
      </div>
    );
  }
  return (
    <img
      src={`${import.meta.env.BASE_URL}${file}`}
      alt={alt}
      loading="lazy"
      style={{ aspectRatio: ratio }}
      className={`media-img${frameClass ? ` ${frameClass}` : ''}`}
    />
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

export function CopyButton({ text }: { text: string }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
      } catch {
        /* clipboard unavailable — label still describes the command */
      }
      area.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={copy}
      aria-label={`${t.detail.copy}: ${text}`}
      aria-live="polite"
    >
      {copied ? t.detail.copied : t.detail.copy}
    </button>
  );
}
