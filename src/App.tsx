import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
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
          <Route path="/projects/:slug" element={<ProjectDetail />} />
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
        <Shell />
      </HashRouter>
    </LanguageProvider>
  );
}
