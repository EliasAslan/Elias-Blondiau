import { Link } from 'react-router-dom';
import { CONTACT, EDUCATION_LINKS } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ContactLinks, Placeholder } from '../components/layout';

export default function About() {
  const { t } = useLanguage();
  return (
    <>
      <section className="detail-hero" aria-labelledby="about-h">
        <div className="wrap narrow">
          <h1 id="about-h">{t.about.title}</h1>
          <p className="lead">{t.about.intro1}</p>
          <p>{t.about.intro2}</p>
          <div className="shot photo" role="note">
            <p className="placeholder-title">{t.about.photoLabel}</p>
            <p>{t.about.photoBody}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="path-h">
        <div className="wrap narrow">
          <div className="card">
            <h2 id="path-h">{t.education.title}</h2>
            <p>{t.about.eduBody}</p>
            <ul className="edu-links">
              <li>
                <a
                  href={EDUCATION_LINKS.efz}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.education.efzName}
                  <span className="sr-only"> {t.projects.openNewTab}</span>
                </a>
              </li>
              <li>
                <a
                  href={EDUCATION_LINKS.bmTals}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.education.bmName}
                  <span className="sr-only"> {t.projects.openNewTab}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="training-h">
        <div className="wrap narrow story">
          <h2 id="training-h" className="plain-h">
            {t.about.trainingTitle}
          </h2>
          <p>{t.about.trainingBody}</p>
          <p className="note">{t.about.trainingGoals}</p>

          <h2 className="plain-h">{t.about.scoutsTitle}</h2>
          <p>{t.about.scoutsBody}</p>
          <p className="hero-links">
            <Link className="btn" to="/projects/pfadi-siders">
              {t.projects.pfadi.title}
            </Link>
          </p>

          <h2 className="plain-h">{t.about.tinkeringTitle}</h2>
          <p>{t.about.tinkeringBody}</p>
          <p className="hero-links">
            <Link className="btn" to="/projects">
              {t.home.allProjects}
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="values-h">
        <div className="wrap narrow">
          <div className="card card-values">
            <h2 id="values-h">{t.about.valuesTitle}</h2>
            <ul className="check-list">
              {t.about.values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Placeholder title={t.about.readingTitle} body={t.about.readingBody} />
          <p className="hero-links">
            <a className="btn primary" href={`mailto:${CONTACT.email}`}>
              {t.about.contactCta}
            </a>
          </p>
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
