import { useState } from 'react';
import { Language } from './types/portfolio';
import { translations } from './data/translations';

const CONTACT = {
  email: 'e3953s@duck.com',
  github: 'https://github.com/EliasAslan',
  linkedin: 'https://www.linkedin.com/in/elias-blondiau-172b6a442/',
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
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>

      <header className="site-head">
        <div className="wrap">
          <a className="brand" href="#top">
            Elias Blondiau
          </a>
          <div className="head-right">
            <nav className="site-nav" aria-label="Main">
              <ul>
                <li>
                  <a href="#projects">{t.nav.projects}</a>
                </li>
                <li>
                  <a href="#skills">{t.nav.skills}</a>
                </li>
                <li>
                  <a href="#contact">{t.nav.contact}</a>
                </li>
              </ul>
            </nav>
            <div className="lang-toggle" role="group" aria-label={t.nav.changeLanguage}>
              {(['en', 'de'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(l)}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <div className="hero" id="top">
          <div className="wrap">
            <h1>
              <span>{t.hero.line1}</span> <span>{t.hero.line2}</span>
            </h1>
            <div className="hero-row">
              <div className="hero-copy">
                <p>{t.hero.copy1}</p>
                <p>{t.hero.copy2}</p>
                <div className="hero-links">
                  <a className="btn primary" href="#projects">
                    {t.hero.ctaProjects}
                  </a>
                  <a className="btn" href="#contact">
                    {t.hero.ctaContact}
                  </a>
                </div>
              </div>
              <div className="sticker" aria-hidden="true">
                {t.hero.sticker}
                <small>{t.hero.stickerSmall}</small>
              </div>
            </div>
          </div>
        </div>

        <section id="projects" aria-labelledby="projects-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projects-h">{t.projects.title}</h2>
              <p>{t.projects.subtitle}</p>
            </div>

            <div className="projects">
              <article className="card p-pfadi">
                <p className="status live">{t.projects.pfadi.status}</p>
                <h3>{t.projects.pfadi.title}</h3>
                <p>{t.projects.pfadi.body}</p>
                <dl className="roles">
                  <div>
                    <dt className="mine">{t.projects.myPart}</dt>
                    <dd>{t.projects.pfadi.mine}</dd>
                  </div>
                  <div>
                    <dt>{t.projects.withAI}</dt>
                    <dd>{t.projects.pfadi.ai}</dd>
                  </div>
                </dl>
                <p className="hero-links" style={{ marginTop: '1.75rem' }}>
                  <a
                    className="btn"
                    href={t.projects.pfadi.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.pfadi.cta}
                    <span className="sr-only"> {t.projects.openNewTab}</span>
                  </a>
                </p>
              </article>

              <article className="card p-cal">
                <p className="status live">{t.projects.cal.status}</p>
                <h3>{t.projects.cal.title}</h3>
                <p>{t.projects.cal.body}</p>
                <dl className="roles">
                  <div>
                    <dt className="mine">{t.projects.myPart}</dt>
                    <dd>
                      <ul>
                        {t.projects.cal.mine.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.projects.withAI}</dt>
                    <dd>{t.projects.cal.ai}</dd>
                  </div>
                </dl>
                <p className="hero-links" style={{ marginTop: '1.75rem' }}>
                  <a
                    className="btn"
                    href={t.projects.cal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.cal.cta}
                    <span className="sr-only"> {t.projects.openNewTab}</span>
                  </a>
                </p>
              </article>

              <article className="card p-emvs">
                <p className="status wip">{t.projects.emvs.status}</p>
                <h3>{t.projects.emvs.title}</h3>
                <p>{t.projects.emvs.body}</p>
                <dl className="roles">
                  <div>
                    <dt className="mine">{t.projects.myPart}</dt>
                    <dd>{t.projects.emvs.mine}</dd>
                  </div>
                  <div>
                    <dt>{t.projects.withAI}</dt>
                    <dd>{t.projects.emvs.ai}</dd>
                  </div>
                </dl>
                <p className="note">{t.projects.emvs.note}</p>
              </article>

              <article className="card p-ben">
                <p className="status mod">{t.projects.ben.status}</p>
                <h3>{t.projects.ben.title}</h3>
                <p>{t.projects.ben.body}</p>
                <dl className="roles">
                  <div>
                    <dt className="mine">{t.projects.myPart}</dt>
                    <dd>{t.projects.ben.mine}</dd>
                  </div>
                  <div>
                    <dt>{t.projects.withAI}</dt>
                    <dd>{t.projects.ben.ai}</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="skills" aria-labelledby="skills-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="skills-h">{t.skills.title}</h2>
              <p>{t.skills.subtitle}</p>
            </div>

            <div className="stairs">
              <div className="step step-learning">
                <h3>{t.skills.learning}</h3>
                <p className="meaning">{t.skills.learningMeaning}</p>
                <ul className="skill-list">
                  <li>HTML &amp; CSS</li>
                  <li>Java</li>
                  <li>Git &amp; GitHub</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="step step-exploring">
                <h3>{t.skills.exploring}</h3>
                <p className="meaning">{t.skills.exploringMeaning}</p>
                <ul className="skill-list">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React &amp; Vite</li>
                  <li>SQL &amp; Supabase</li>
                </ul>
              </div>
              <div className="step step-strong">
                <h3>{t.skills.stronger}</h3>
                <p className="meaning">{t.skills.strongerMeaning}</p>
                <ul className="skill-list">
                  <li>AI-assisted development</li>
                </ul>
                <ul className="strengths">
                  {t.skills.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="stairs-caption">{t.skills.caption}</p>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-h">
          <div className="wrap">
            <h2 id="contact-h">{t.contact.title}</h2>
            <ul className="contact-list">
              <li>
                <span className="k">{t.contact.email}</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <span className="k">{t.contact.github}</span>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  github.com/EliasAslan
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
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>{t.footer.line}</p>
        </div>
      </footer>
    </>
  );
}
