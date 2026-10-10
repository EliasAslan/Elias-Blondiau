import React, { useState } from 'react';
import { Language } from './types/portfolio';
import { translations } from './data/translations';

const CONTACT = {
  email: 'e3953s@duck.com',
  github: 'https://github.com/EliasAslan',
  linkedin: 'https://www.linkedin.com/in/elias-blondiau-172b6a442/',
};

const SKILL_GROUPS: { key: 'learning' | 'exploring' | 'stronger'; items: string[] }[] = [
  { key: 'learning', items: ['HTML & CSS', 'Java', 'Git & GitHub', 'Python'] },
  { key: 'exploring', items: ['JavaScript', 'TypeScript', 'React & Vite', 'SQL & Supabase'] },
  { key: 'stronger', items: ['AI-assisted development'] },
];

const STRENGTHS: Record<Language, string[]> = {
  en: [
    'Describing the result I want and guiding AI toward it.',
    'Testing features and reporting bugs.',
    'Reviewing proposed changes and judging whether they make sense.',
    'Breaking larger projects into manageable phases.',
    'Making small code changes.',
    'Setting up deployments and troubleshooting build failures.',
  ],
  de: [
    'Das gewünschte Ergebnis beschreiben und die KI dorthin steuern.',
    'Features testen und Fehler melden.',
    'Vorgeschlagene Änderungen prüfen und beurteilen, ob sie sinnvoll sind.',
    'Grössere Projekte in machbare Phasen aufteilen.',
    'Kleine Code-Änderungen selbst machen.',
    'Deployments einrichten und Build-Fehler beheben.',
  ],
};

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      return localStorage.getItem('elias_portfolio_lang') === 'de' ? 'de' : 'en';
    } catch {
      return 'en';
    }
  });
  const t = translations[lang];

  const setLanguage = (l: Language) => {
    setLang(l);
    try {
      localStorage.setItem('elias_portfolio_lang', l);
    } catch {
      /* ignore */
    }
  };

  return (
    <div id="portfolio-root" className="min-h-screen">
      <a className="skip-link" href="#main">
        {lang === 'en' ? 'Skip to content' : 'Zum Inhalt springen'}
      </a>

      <header className="sticky top-0 z-10 border-b-2" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-ink)' }}>
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
          <a href="#top" className="font-display font-extrabold text-xl no-underline">
            Elias Blondiau
          </a>
          <div className="flex items-center gap-5">
            <nav aria-label="Main">
              <ul className="flex gap-1 list-none m-0 p-0">
                {(
                  [
                    ['#projects', t.nav.projects],
                    ['#skills', t.nav.skills],
                    ['#contact', t.nav.contact],
                  ] as const
                ).map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block px-3 py-1.5 font-bold no-underline border-2 border-transparent hover:border-current"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div role="group" aria-label={t.nav.changeLanguage} className="flex items-center gap-2 text-sm font-bold">
              {(['en', 'de'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(l)}
                  aria-pressed={lang === l}
                  className="cursor-pointer uppercase bg-transparent border-none p-1"
                  style={{
                    color: lang === l ? 'var(--color-ink)' : 'var(--color-muted)',
                    textDecoration: lang === l ? 'underline' : 'none',
                    textDecorationThickness: 3,
                    textUnderlineOffset: 4,
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <div id="top" className="py-[clamp(3rem,9vw,7rem)]">
          <div className="wrap">
            <h1
              className="hero-rise font-display font-extrabold leading-[0.9] max-w-[15ch]"
              style={{ color: 'var(--color-cobalt)', fontSize: 'clamp(2.75rem,10.5vw,8.5rem)', letterSpacing: '-0.035em' }}
            >
              <span className="block">{t.hero.line1}</span> <span className="block">{t.hero.line2}</span>
            </h1>
            <div className="grid gap-8 mt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
              <div className="max-w-[36rem]">
                <p className="text-xl">{t.hero.copy1}</p>
                <p className="text-xl">{t.hero.copy2}</p>
                <p className="flex flex-wrap gap-4 mt-6">
                  <a className="btn btn-primary" href="#projects">
                    {t.hero.ctaProjects}
                  </a>
                  <a className="btn" href="#contact">
                    {t.hero.ctaContact}
                  </a>
                </p>
              </div>
              <div
                className="sticker-pop font-display font-bold text-xl leading-tight max-w-[17rem] p-4 -rotate-3"
                style={{
                  background: 'var(--color-marker)',
                  color: 'var(--color-ink)',
                  border: '2px solid var(--color-ink)',
                  boxShadow: '6px 6px 0 var(--color-ink)',
                }}
                aria-hidden="true"
              >
                {t.hero.sticker}
                <small className="block mt-2 font-body font-normal text-[0.95rem] leading-snug">
                  {t.hero.stickerSmall}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-h" className="py-[clamp(3rem,7vw,6rem)]">
          <div className="wrap">
            <div className="mb-10">
              <h2 id="projects-h" style={{ fontSize: 'clamp(2.25rem,6vw,4.5rem)' }}>
                {t.projects.title}
              </h2>
              <p className="mt-4" style={{ color: 'var(--color-muted)' }}>
                {t.projects.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-12 items-start">
              {t.projects.items.map((p, i) => (
                <article
                  key={p.title}
                  id={`project-${i}`}
                  className={`card-brutal ${['p-pfadi', 'p-cal', 'p-emvs', 'p-ben'][i] ?? ''}`}
                  style={
                    i === 0
                      ? { background: 'var(--color-cobalt)', color: '#fff' }
                      : i === 2
                        ? { borderStyle: 'dashed', boxShadow: 'none' }
                        : undefined
                  }
                >
                  <p className={`status-dot status-${p.statusKind}`}>{p.status}</p>
                  <h3 style={{ fontSize: i === 0 ? 'clamp(2.25rem,5vw,4rem)' : 'clamp(1.75rem,3.2vw,2.5rem)', marginBottom: '0.75rem' }}>
                    {p.title}
                  </h3>
                  <p>{p.body}</p>
                  <dl className="grid gap-4 mt-6">
                    <div className="grid gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] items-start">
                      <dt className="role-tag role-tag-mine">{t.projects.myPart}</dt>
                      <dd className="m-0">
                        {'mineList' in p && p.mineList ? (
                          <ul className="list-none m-0 p-0">
                            {p.mineList.map((m) => (
                              <li key={m} className="mt-1.5 first:mt-0">{m}</li>
                            ))}
                          </ul>
                        ) : (
                          'mine' in p && p.mine
                        )}
                      </dd>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] items-start opacity-70">
                      <dt className="text-xs font-bold uppercase tracking-widest pt-1">{t.projects.withAI}</dt>
                      <dd className="m-0 text-sm">{p.ai}</dd>
                    </div>
                  </dl>
                  {'note' in p && p.note && (
                    <p
                      className="mt-5 px-4 py-3 text-base"
                      style={{ borderLeft: '6px solid var(--color-marker)', background: 'rgba(255,255,255,0.14)' }}
                    >
                      {p.note}
                    </p>
                  )}
                  {'url' in p && p.url && (
                    <p className="mt-7">
                      <a
                        className="btn"
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={i === 0 ? { background: 'var(--color-marker)' } : undefined}
                      >
                        {'cta' in p && p.cta}
                        <span className="sr-only"> {t.projects.openNewTab}</span>
                      </a>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" aria-labelledby="skills-h" className="py-[clamp(3rem,7vw,6rem)] border-y-2" style={{ borderColor: 'var(--color-ink)' }}>
          <div className="wrap">
            <div className="mb-10">
              <h2 id="skills-h" style={{ fontSize: 'clamp(2.25rem,6vw,4.5rem)' }}>
                {t.skills.title}
              </h2>
              <p className="mt-4" style={{ color: 'var(--color-muted)' }}>
                {t.skills.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 items-end">
              {SKILL_GROUPS.map((g, gi) => (
                <div
                  key={g.key}
                  className="p-6 border-2"
                  style={{
                    background: g.key === 'stronger' ? 'var(--color-marker)' : 'var(--color-card)',
                    borderColor: 'var(--color-ink)',
                    color: 'var(--color-ink)',
                    marginLeft: gi > 0 ? '-2px' : undefined,
                    marginTop: gi > 0 ? '-2px' : undefined,
                    minHeight: g.key === 'exploring' ? '24rem' : g.key === 'learning' ? '17rem' : undefined,
                  }}
                >
                  <h3 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', marginBottom: '0.5rem' }}>
                    {t.skills[g.key]}
                  </h3>
                  <p className="text-base mb-5" style={{ color: g.key === 'stronger' ? 'var(--color-ink)' : 'var(--color-muted)' }}>
                    {t.skills[`${g.key}Meaning` as 'learningMeaning' | 'exploringMeaning' | 'strongerMeaning']}
                  </p>
                  <ul className="list-none m-0 p-0">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="font-display font-bold text-[1.35rem] leading-tight py-2 border-t-2 last:border-b-2"
                        style={{ borderColor: 'var(--color-ink)' }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  {g.key === 'stronger' && (
                    <ul className="m-0 p-0 list-none mt-6">
                      {STRENGTHS[lang].map((s) => (
                        <li key={s} className="relative pl-6 mt-2.5 text-[1.05rem] leading-snug">
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.5em] w-2.5 h-2.5"
                            style={{ background: 'var(--color-ink)' }}
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-base max-w-[60ch]" style={{ color: 'var(--color-muted)' }}>
              {t.skills.caption}
            </p>

            <div className="card-brutal mt-10" style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}>
              <h3 className="text-2xl mb-2">{t.outside.title}</h3>
              <p className="m-0">{t.outside.body}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-h" className="py-[clamp(3rem,7vw,6rem)]">
          <div className="wrap">
            <h2 id="contact-h" style={{ color: 'var(--color-cobalt)', fontSize: 'clamp(2.5rem,8vw,6.5rem)', lineHeight: 0.92, maxWidth: '12ch' }}>
              {t.contact.title}
            </h2>
            <ul className="list-none m-0 p-0 mt-10 grid gap-5 max-w-[40rem]">
              {(
                [
                  [t.contact.email, `mailto:${CONTACT.email}`, CONTACT.email, false],
                  [t.contact.github, CONTACT.github, 'github.com/EliasAslan', true],
                  [t.contact.linkedin, CONTACT.linkedin, 'Elias Blondiau on LinkedIn', true],
                ] as const
              ).map(([k, href, label, external]) => (
                <li key={k} className="grid gap-4 pt-4 border-t-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] items-baseline" style={{ borderColor: 'var(--color-ink)' }}>
                  <span className="font-bold" style={{ color: 'var(--color-muted)' }}>{k}</span>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="font-display font-bold break-all"
                    style={{ fontSize: 'clamp(1.15rem,3.4vw,1.75rem)' }}
                  >
                    {label}
                    {external && <span className="sr-only"> {t.projects.openNewTab}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t-2 py-6 pb-10" style={{ borderColor: 'var(--color-ink)', color: 'var(--color-muted)' }}>
        <div className="wrap">
          <p className="m-0">{t.footer.line}</p>
        </div>
      </footer>
    </div>
  );
}
