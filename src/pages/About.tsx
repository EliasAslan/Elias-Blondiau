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
          <h2 id="about-h">{t.about.title}</h2>
          <p className="lead">{t.about.intro1}</p>
          <p>{t.about.intro2}</p>
        </div>
      </section>

      <section aria-labelledby="path-h">
        <div className="wrap narrow">
          <div className="card">
            <h3 id="path-h">{t.about.pathTitle}</h3>
            <p>{t.about.pathBody}</p>
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

      <section aria-labelledby="interests-h">
        <div className="wrap narrow">
          <h3 id="interests-h" className="plain-h">
            {t.about.interestsTitle}
          </h3>
          <ul className="check-list">
            {t.about.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Placeholder
            title={t.about.nowTitle}
            body={`${t.about.nowBody} ${t.about.photoPlaceholder}`}
          />
          <p className="hero-links">
            <Link className="btn primary" to="/projects">
              {t.home.allProjects}
            </Link>
            <a className="btn" href={`mailto:${CONTACT.email}`}>
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
