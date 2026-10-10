import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="nf-h">
      <div className="wrap narrow">
        <h1 id="nf-h">{t.detail.notFoundTitle}</h1>
        <p>{t.detail.notFoundBody}</p>
        <p className="hero-links">
          <Link className="btn primary" to="/">
            {t.nav.home}
          </Link>
          <Link className="btn" to="/projects">
            {t.detail.notFoundCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
