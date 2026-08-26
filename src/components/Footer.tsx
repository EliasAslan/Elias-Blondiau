import React from 'react';
import { ArrowUp, Heart, MapPin } from 'lucide-react';
import { Language } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const { personal } = portfolioData;
  const t = translations[currentLang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="py-12 bg-[#F9F7F2] border-t border-[#E8E4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-serif text-lg font-normal text-[#2D2D2D]">
                {personal.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#F0EDE4] text-[#555148] border border-[#E8E4D8]">
                Informatiker EFZ
              </span>
            </div>
            <p className="text-xs text-[#8C887D] font-mono">
              {personal.workplace} • Visp, Switzerland
            </p>
          </div>

          {/* Center info */}
          <div className="text-center text-xs text-[#8C887D] font-mono">
            <span>{t.allRights}</span>
          </div>

          {/* Right action */}
          <div className="flex items-center gap-4">
            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2.5 bg-[#F0EDE4] hover:bg-[#E8E3D7] border border-[#E8E4D8] text-[#2D2D2D] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label={t.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.backToTop}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
