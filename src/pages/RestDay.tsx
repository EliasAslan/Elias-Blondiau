import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function RestDay() {
  const { t } = useLanguage();
  const [done, setDone] = useState<boolean[]>(() =>
    t.eggs.restPlan.map(() => false),
  );
  const toggle = (i: number) =>
    setDone((prev) => prev.map((v, j) => (j === i ? !v : v)));
  const complete = done.length > 0 && done.every(Boolean);

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
            <h2 id="plan-h">{t.eggs.restSession}</h2>
            <ul className="rest-plan">
              {t.eggs.restPlan.map((item, i) => (
                <li key={item}>
                  <label className={done[i] ? 'is-done' : undefined}>
                    <input
                      type="checkbox"
                      checked={done[i]}
                      onChange={() => toggle(i)}
                    />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
            {complete && (
              <p className="rest-stamp" aria-live="polite">
                {t.eggs.restDone}
              </p>
            )}
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
