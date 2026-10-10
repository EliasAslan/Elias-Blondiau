import { useEffect, useRef } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { getProjectEntry } from './data/projects';
import { SiteFooter, SiteHeader } from './components/layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';
import RestDay from './pages/RestDay';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

const EGG_WORD = 'sustain';

function EggKey() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const buffer = useRef('');
  useEffect(() => {
    buffer.current = '';
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        (target &&
          (target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.tagName === 'SELECT' ||
            target.isContentEditable))
      ) {
        return;
      }
      if (/^[a-zA-Z]$/.test(e.key)) {
        buffer.current = (buffer.current + e.key.toLowerCase()).slice(-EGG_WORD.length);
        if (buffer.current === EGG_WORD) {
          buffer.current = '';
          navigate('/rest-day');
        }
      } else if (e.key === 'Escape') {
        buffer.current = '';
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, pathname]);
  return null;
}

function ConsoleGreeting() {
  const { lang, t } = useLanguage();
  useEffect(() => {
    try {
      const [headline, ...rest] = t.eggs.console;
      console.log(
        `%c ${headline} `,
        'background:#FFD84A;color:#0E1A40;font-weight:bold;padding:.3rem .6rem;',
      );
      for (const line of rest) console.log(line);
    } catch {
      /* console unavailable — nothing to greet */
    }
  }, [lang, t]);
  return null;
}

function DetailTitle() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  useEffect(() => {
    const entry =
      slug === 'pfadi-siders' ||
      slug === 'calisthenics-app' ||
      slug === 'emvs-study-hub' ||
      slug === 'ben-sustain'
        ? getProjectEntry(t, slug)
        : undefined;
    document.title = entry ? `${entry.title} — Elias Blondiau` : t.meta.notFound;
  }, [slug, lang, t]);
  return null;
}

function RouteMeta() {
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();
  useEffect(() => {
    if (pathname === '/') document.title = t.meta.home;
    else if (pathname === '/projects') document.title = t.meta.projects;
    else if (pathname === '/about') document.title = t.meta.about;
    else if (pathname === '/rest-day')
      document.title = `${t.eggs.restTitle} — Elias Blondiau`;
    else if (!pathname.startsWith('/projects/'))
      document.title = t.meta.notFound;
  }, [pathname, lang, t]);
  return null;
}

function Shell() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:slug"
            element={
              <>
                <DetailTitle />
                <ProjectDetail />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/rest-day" element={<RestDay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <RouteMeta />
        <EggKey />
        <ConsoleGreeting />
        <Shell />
      </HashRouter>
    </LanguageProvider>
  );
}
