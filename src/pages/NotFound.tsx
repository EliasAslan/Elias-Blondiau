import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { RoutePalette } from '../components/layout';

export default function NotFound() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  return (
    <section aria-labelledby="nf-h">
      <div className="wrap narrow">
        <div className="sticker sticker-404" aria-hidden="true">
          404
        </div>
        <h1 id="nf-h">{t.eggs.notFoundTitle}</h1>
        <p className="lead">{t.eggs.notFoundBody}</p>
        <p className="muted">{t.eggs.notFoundAside}</p>
        <p className="muted">
          {t.eggs.notFoundAt} <code className="code-chip">{pathname}</code>
        </p>
        <p className="hero-links">
          <Link className="btn primary" to="/">
            {t.nav.home}
          </Link>
          <Link className="btn" to="/projects">
            {t.detail.notFoundCta}
          </Link>
        </p>
        <RoutePalette />
      </div>
    </section>
  );
}
