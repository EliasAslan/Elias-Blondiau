import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, MapPin, Sparkles, Terminal, Mail, BookOpen } from 'lucide-react';
import { Language } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const { personal } = portfolioData;
  const t = translations[currentLang];
  const [swissTime, setSwissTime] = useState<string>('');

  // Update Swiss local time (CET/CEST) dynamically
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setSwissTime(new Intl.DateTimeFormat('de-CH', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E8E4D8]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Apprenticeship & Location Header */}
            <div
              id="hero-status-pill"
              className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-4 flex flex-wrap items-center gap-2"
            >
              <span className="text-[#A67C52] font-semibold">[01]</span>
              <span className="w-4 h-px bg-[#C4C0B2]" />
              <span className="font-medium text-[#2D2D2D]">{personal.role[currentLang]}</span>
              <span>&bull;</span>
              <span className="text-[#555148]">{personal.workplace}</span>
            </div>

            {/* Full Name & Title */}
            <h1
              id="hero-name"
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#2D2D2D] leading-[1.08] mb-6"
            >
              {personal.name}
            </h1>

            {/* Core Personal Statement in Editorial Quote Style */}
            <blockquote
              id="hero-headline"
              className="border-l-2 border-[#A67C52] pl-4 my-2 font-serif text-xl sm:text-2xl text-[#555148] italic leading-snug max-w-2xl"
            >
              «{personal.heroHeadline[currentLang]}»
            </blockquote>

            <p
              id="hero-subheadline"
              className="text-base sm:text-lg text-[#555148] leading-relaxed my-6 max-w-2xl"
            >
              {personal.heroSubheadline[currentLang]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-projects"
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 bg-[#2D2D2D] hover:bg-[#1A1A1A] text-[#F9F7F2] text-xs uppercase tracking-wider font-semibold transition-all shadow-xs flex items-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C4C0B2] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-cta-about"
                type="button"
                onClick={() => scrollTo('about')}
                className="px-6 py-3 bg-[#F0EDE4] hover:bg-[#E8E3D7] border border-[#E8E4D8] text-[#2D2D2D] text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#8C887D]" />
                <span>{t.hero.ctaAbout}</span>
              </button>

              <button
                id="hero-cta-contact"
                type="button"
                onClick={() => scrollTo('contact')}
                className="px-4 py-3 text-[#555148] hover:text-[#2D2D2D] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.hero.ctaContact}</span>
              </button>
            </div>
          </div>

          {/* Right Card / Profile Dossier Card */}
          <div className="lg:col-span-4 w-full">
            <div
              id="hero-profile-card"
              className="p-6 bg-[#F0EDE4] border border-[#E8E4D8] shadow-xs flex flex-col justify-between"
            >
              {/* Card Header with editorial marker */}
              <div className="flex items-center justify-between border-b border-[#E8E4D8] pb-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C887D]">
                  FIG. 01 &bull; PROFILE DOSSIER
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50/60 px-2 py-0.5 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Profile Avatar / Future Image Architecture */}
              <div className="flex flex-col items-center text-center my-2">
                <div className="relative w-24 h-24 bg-[#FFFFFF] border border-[#E8E4D8] flex items-center justify-center overflow-hidden mb-4 shadow-2xs group">
                  <img
                    src="/images/profile.jpg"
                    alt="Elias Blondiau"
                    className="w-full h-full object-cover hidden"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex flex-col items-center justify-center text-[#2D2D2D]">
                    <span className="font-serif font-semibold text-3xl tracking-tight text-[#2D2D2D]">
                      EB
                    </span>
                  </div>
                </div>

                <h3 className="font-serif font-semibold text-lg text-[#2D2D2D]">
                  {personal.name}
                </h3>
                <p className="text-xs text-[#8C887D] font-mono mt-0.5">
                  {personal.workplace}
                </p>
              </div>

              {/* Metadata Details */}
              <div className="mt-4 pt-4 border-t border-[#E8E4D8] space-y-2.5 text-xs font-mono text-[#555148]">
                <div className="flex items-center justify-between">
                  <span className="text-[#8C887D] uppercase tracking-wider text-[10px]">Location</span>
                  <span className="text-[#2D2D2D] font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#A67C52]" /> Visp, Schweiz
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8C887D] uppercase tracking-wider text-[10px]">Program</span>
                  <span className="text-[#2D2D2D] font-medium">Informatiker EFZ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8C887D] uppercase tracking-wider text-[10px]">Local Time</span>
                  <span className="text-[#2D2D2D] font-medium font-mono">
                    {swissTime ? `${swissTime} CET` : 'Visp (UTC+1)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
