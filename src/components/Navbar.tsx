import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Globe } from 'lucide-react';
import { Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.about },
    { id: 'currently', label: t.currently },
    { id: 'projects', label: t.projects },
    { id: 'skills', label: t.skills },
    { id: 'learning', label: t.learning },
    { id: 'outside', label: t.outside },
    { id: 'contact', label: t.contact },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E8E4D8] shadow-xs'
          : 'bg-[#F9F7F2]/80 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 border-b border-[#E8E4D8]/60">
          {/* Logo / Personal Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="nav-logo"
            className="group flex items-center gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#A67C52] rounded-lg p-1"
          >
            <span className="font-serif text-2xl font-semibold tracking-tight text-[#2D2D2D] group-hover:text-[#A67C52] transition-colors">
              elias.
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#8C887D] font-mono font-medium border border-[#E8E4D8] px-2 py-0.5 rounded bg-[#F0EDE4]">
              v.01
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleScrollTo(link.id)}
                  className={`text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#2D2D2D] font-semibold border-b-2 border-[#2D2D2D] pb-1'
                      : 'text-[#6B675B] hover:text-[#2D2D2D] pb-1'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            {/* Editorial Language Toggle */}
            <div
              id="language-switcher"
              className="flex items-center space-x-2 text-xs font-mono font-medium"
              role="group"
              aria-label={t.changeLanguage}
            >
              <button
                id="lang-btn-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`cursor-pointer transition-colors ${
                  currentLang === 'en'
                    ? 'text-[#2D2D2D] font-bold underline underline-offset-4 decoration-[#A67C52]'
                    : 'text-[#8C887D] hover:text-[#2D2D2D]'
                }`}
                aria-pressed={currentLang === 'en'}
              >
                EN
              </button>
              <span className="text-[#C4C1B6] select-none">|</span>
              <button
                id="lang-btn-de"
                type="button"
                onClick={() => onLanguageChange('de')}
                className={`cursor-pointer transition-colors ${
                  currentLang === 'de'
                    ? 'text-[#2D2D2D] font-bold underline underline-offset-4 decoration-[#A67C52]'
                    : 'text-[#8C887D] hover:text-[#2D2D2D]'
                }`}
                aria-pressed={currentLang === 'de'}
              >
                DE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#6B675B] hover:text-[#2D2D2D] hover:bg-[#F0EDE4] focus:outline-hidden focus:ring-2 focus:ring-[#A67C52]"
              aria-expanded={mobileMenuOpen}
              aria-label={t.toggleMenu}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-[#E8E4D8] bg-[#F9F7F2] px-4 pt-3 pb-6 space-y-2 shadow-md"
        >
          <div className="py-2 px-3 mb-2 rounded-lg bg-[#F0EDE4] text-xs font-mono text-[#6B675B] flex items-center justify-between border border-[#E8E4D8]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {t.status}
            </span>
            <span className="text-[#8C887D]">Visp, CH</span>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleScrollTo(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider font-medium transition-colors ${
                  isActive
                    ? 'bg-[#F0EDE4] text-[#2D2D2D] font-semibold border border-[#E8E4D8]'
                    : 'text-[#6B675B] hover:text-[#2D2D2D] hover:bg-[#F0EDE4]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
