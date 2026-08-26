import React from 'react';
import { Hammer, Sparkles, Compass, CheckCircle2, MapPin, Building2, Quote } from 'lucide-react';
import { Language } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const { personal } = portfolioData;
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-20 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Badge, and Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
                <span className="text-[#A67C52] font-semibold">[03]</span>
                <span className="w-4 h-px bg-[#C4C0B2]" />
                <span>{t.sectionBadge}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] mt-2 mb-4 leading-tight">
                {t.title}
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-[#555148] text-base leading-relaxed">
              {personal.bioParagraphs[currentLang].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Personal Quote Card in Editorial Style */}
            <blockquote className="p-5 bg-[#F0EDE4] border border-[#E8E4D8] border-l-2 border-l-[#A67C52] text-[#2D2D2D] mt-4">
              <p className="font-serif italic text-base sm:text-lg leading-snug">
                {t.quote}
              </p>
              <span className="block mt-2 text-xs font-mono text-[#8C887D]">
                — Elias Blondiau, Visp
              </span>
            </blockquote>
          </div>

          {/* Right Column: Key Pillars & Apprenticeship Context Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Apprenticeship Snapshot Card */}
            <div className="p-6 bg-[#F0EDE4] border border-[#E8E4D8] shadow-xs">
              <div className="flex items-center justify-between border-b border-[#E8E4D8] pb-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C887D]">
                  DOSSIER &bull; CONTEXT
                </span>
                <Building2 className="w-4 h-4 text-[#A67C52]" />
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D2D2D] block">
                      {t.highlightRole}
                    </span>
                    <span className="text-xs text-[#555148]">
                      {personal.workplaceDetail[currentLang]}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D2D2D] block">
                      {t.highlightLocation}
                    </span>
                    <span className="text-xs text-[#555148]">
                      Kanton Wallis (Valais), Switzerland
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D2D2D] block">
                      {t.focusArea}
                    </span>
                    <span className="text-xs text-[#555148]">
                      {t.focusDescription}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Personal Traits */}
            <div className="space-y-3">
              {t.keyTraits.map((trait, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#FFFFFF] border border-[#E8E4D8] flex items-start gap-3.5 shadow-2xs"
                >
                  <div className="w-7 h-7 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52] shrink-0 mt-0.5">
                    {index === 0 && <Hammer className="w-3.5 h-3.5" />}
                    {index === 1 && <Compass className="w-3.5 h-3.5" />}
                    {index === 2 && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#2D2D2D]">
                      {trait.title}
                    </h4>
                    <p className="text-xs text-[#555148] mt-0.5 leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
