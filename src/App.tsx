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
import { PROJECT_SLUGS } from './data/site';
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
          (target.isContentEditable ||
            ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(target.tagName)))
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
      /* Console unavailable. Nothing to greet. */
    }
  }, [lang, t]);
  return null;
}

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function DetailTitle() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  useEffect(() => {
    const entry = (PROJECT_SLUGS as string[]).includes(slug ?? '')
      ? getProjectEntry(t, slug as (typeof PROJECT_SLUGS)[number])
      : undefined;
    if (entry) {
      document.title = `${entry.title} | Elias Blondiau`;
      setMetaDescription(`${entry.title} | ${t.meta.projectSuffix}. ${entry.body}`);
    } else {
      document.title = t.meta.notFound;
      setMetaDescription(t.meta.descriptions.notFound);
    }
  }, [slug, lang, t]);
  return null;
}

function RouteMeta() {
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();
  useEffect(() => {
    if (pathname === '/') {
      document.title = t.meta.home;
      setMetaDescription(t.meta.descriptions.home);
    } else if (pathname === '/projects') {
      document.title = t.meta.projects;
      setMetaDescription(t.meta.descriptions.projects);
    } else if (pathname === '/about') {
      document.title = t.meta.about;
      setMetaDescription(t.meta.descriptions.about);
    } else if (pathname === '/rest-day') {
      document.title = `${t.eggs.restTitle} | Elias Blondiau`;
      setMetaDescription(t.eggs.restIntro);
    } else if (!pathname.startsWith('/projects/')) {
      document.title = t.meta.notFound;
      setMetaDescription(t.meta.descriptions.notFound);
    }
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
