/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CurrentlySection } from './components/CurrentlySection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LearningSection } from './components/LearningSection';
import { OutsideSection } from './components/OutsideSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('elias_portfolio_lang');
    return saved === 'de' ? 'de' : 'en';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('elias_portfolio_lang', lang);
  };

  // Section observer for updating active nav state
  useEffect(() => {
    const sections = ['about', 'currently', 'projects', 'skills', 'learning', 'outside', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D] font-sans selection:bg-[#E8E4D8] selection:text-[#2D2D2D]">
      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero currentLang={currentLang} />
        <CurrentlySection currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <ProjectsSection currentLang={currentLang} />
        <SkillsSection currentLang={currentLang} />
        <LearningSection currentLang={currentLang} />
        <OutsideSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
