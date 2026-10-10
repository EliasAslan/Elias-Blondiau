import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function RestDay() {
  const { t } = useLanguage();
  return (
    <>
      <section className="detail-hero" aria-labelledby="rest-h">
        <div className="wrap narrow">
          <p className="status live">{t.eggs.restEyebrow}</p>
          <h1 id="rest-h">{t.eggs.restTitle}</h1>
          <p className="lead">{t.eggs.restIntro}</p>
        </div>
      </section>
      <section aria-labelledby="plan-h">
        <div className="wrap narrow">
          <div className="card card-values">
            <h2 id="plan-h">{t.eggs.restTitle}</h2>
            <ul className="check-list">
              {t.eggs.restPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="hero-links">
            <Link className="btn primary" to="/">
              {t.eggs.restBack}
            </Link>
            <Link className="btn" to="/projects">
              {t.home.allProjects}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
