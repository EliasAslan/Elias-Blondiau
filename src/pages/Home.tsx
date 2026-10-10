import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EDUCATION_LINKS, FEATURED_SLUGS } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ContactLinks, MediaSlot, ProjectCard } from '../components/layout';
import { PHOTOS } from '../data/media';

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

const STEP_ORDER = ['learning', 'exploring', 'strong'] as const;

function SkillsSnapshot() {
  const { t } = useLanguage();
  const [taps, setTaps] = useState<string[]>([]);
  const unlocked = taps.join(',') === STEP_ORDER.join(',');

  const tapStep = (step: string) => {
    setTaps((prev) => {
      const next = [...prev, step].slice(-3);
      return next;
    });
  };

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
            <button className="step-tap" type="button" onClick={() => tapStep('learning')} aria-label={`${t.skills.tapHint}: ${t.skills.learning}`}>{t.skills.tapHint}</button>
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
            <button className="step-tap" type="button" onClick={() => tapStep('exploring')} aria-label={`${t.skills.tapHint}: ${t.skills.exploring}`}>{t.skills.tapHint}</button>
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
            <button className="step-tap" type="button" onClick={() => tapStep('strong')} aria-label={`${t.skills.tapHint}: ${t.skills.stronger}`}>{t.skills.tapHint}</button>
          </div>
          {unlocked && (
            <div className="step step-secret" aria-live="polite">
              <h3>{t.eggs.fourthTitle}</h3>
              <p className="meaning">{t.eggs.fourthBody}</p>
              <p className="secret-hint">{t.eggs.fourthHint}</p>
            </div>
          )}
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
          <MediaSlot
            file={PHOTOS.beyond.file}
            alt={t.home.beyondPhotoAlt}
            ratio={PHOTOS.beyond.ratio}
            label={t.home.beyondPhotoLabel}
            body={t.home.beyondPhotoBody}
            frameClass="photo"
          />
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
