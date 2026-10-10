import { Link } from 'react-router-dom';
import { EDUCATION_LINKS, FEATURED_SLUGS } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ContactLinks, ProjectCard } from '../components/layout';

function Education() {
  const { t } = useLanguage();
  const e = t.education;
  return (
    <section className="edu" aria-labelledby="edu-h">
      <div className="wrap">
        <div className="edu-card">
          <p className="status live">{e.status}</p>
          <h2 id="edu-h">{e.title}</h2>
          <p>
            {e.before}
            <a
              href={EDUCATION_LINKS.efz}
              target="_blank"
              rel="noopener noreferrer"
            >
              {e.efzName}
              <span className="sr-only"> {t.projects.openNewTab}</span>
            </a>
            {e.middle}
            <a
              href={EDUCATION_LINKS.bmTals}
              target="_blank"
              rel="noopener noreferrer"
            >
              {e.bmName}
              <span className="sr-only"> {t.projects.openNewTab}</span>
            </a>
            {e.after}
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillsSnapshot() {
  const { t } = useLanguage();
  return (
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
  );
}

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
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
                <Link className="btn primary" to="/projects">
                  {t.hero.ctaProjects}
                </Link>
                <Link className="btn" to="/about">
                  {t.home.beyondCta}
                </Link>
              </div>
            </div>
            <div className="sticker" aria-hidden="true">
              {t.hero.sticker}
              <small>{t.hero.stickerSmall}</small>
            </div>
          </div>
        </div>
      </div>

      <Education />

      <section aria-labelledby="featured-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="featured-h">{t.home.featuredTitle}</h2>
            <p>{t.home.featuredSubtitle}</p>
          </div>
          <div className="projects">
            {FEATURED_SLUGS.map((slug) => (
              <ProjectCard key={slug} slug={slug} />
            ))}
          </div>
          <p className="center-actions">
            <Link className="btn primary" to="/projects">
              {t.home.allProjects}
            </Link>
          </p>
          <p className="stairs-caption">{t.home.allProjectsNote}</p>
        </div>
      </section>

      <SkillsSnapshot />

      <section className="beyond" aria-labelledby="beyond-h">
        <div className="wrap beyond-grid">
          <div>
            <h2 id="beyond-h">{t.home.beyondTitle}</h2>
            <p>{t.home.beyondBody}</p>
            <p className="hero-links">
              <Link className="btn" to="/about">
                {t.home.beyondCta}
              </Link>
            </p>
          </div>
          <div className="shot photo" role="note" aria-label={t.home.beyondPhotoLabel}>
            <p className="placeholder-title">{t.home.beyondPhotoLabel}</p>
            <p>{t.home.beyondPhotoBody}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-h">
        <div className="wrap">
          <h2 id="contact-h">{t.contact.title}</h2>
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
