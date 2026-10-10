import { useEffect } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
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
        <Shell />
      </HashRouter>
    </LanguageProvider>
  );
}
