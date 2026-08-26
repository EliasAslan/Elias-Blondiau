import React from 'react';
import { Cpu, Globe, Gamepad2, Sparkles, BookOpen, Compass, Lightbulb } from 'lucide-react';
import { Language } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface LearningSectionProps {
  currentLang: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-4 h-4 text-[#A67C52]" />,
  Globe: <Globe className="w-4 h-4 text-[#A67C52]" />,
  Gamepad2: <Gamepad2 className="w-4 h-4 text-[#A67C52]" />,
  Sparkles: <Sparkles className="w-4 h-4 text-[#A67C52]" />,
};

export const LearningSection: React.FC<LearningSectionProps> = ({ currentLang }) => {
  const { learning } = portfolioData;
  const t = translations[currentLang].learning;

  return (
    <section id="learning" className="py-20 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
            <span className="text-[#A67C52] font-semibold">[06]</span>
            <span className="w-4 h-px bg-[#C4C0B2]" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] mt-2">
            {t.title}
          </h2>
          <p className="text-sm text-[#555148] mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="p-6 bg-[#F0EDE4] border border-[#E8E4D8] mb-10 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 bg-[#FFFFFF] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52] shrink-0 mt-0.5 shadow-2xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-normal text-lg text-[#2D2D2D] mb-1.5">
                {t.philosophyTitle}
              </h3>
              <p className="text-sm text-[#555148] leading-relaxed">
                {t.philosophyBody}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Active Learning Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learning.map((topic) => (
            <div
              key={topic.id}
              className="p-6 bg-[#FFFFFF] border border-[#E8E4D8] hover:bg-[#F0EDE4]/40 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center">
                    {iconMap[topic.iconName] || <BookOpen className="w-4 h-4 text-[#A67C52]" />}
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#F0EDE4] text-[#555148] border border-[#E8E4D8]">
                    {topic.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-normal text-[#2D2D2D] mb-2">
                  {topic.title[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#555148] leading-relaxed mb-4">
                  {topic.description[currentLang]}
                </p>
              </div>

              {/* Current Focus Highlight */}
              <div className="pt-3 border-t border-[#E8E4D8] text-xs">
                <span className="font-mono text-[#8C887D] block mb-1 text-[11px] uppercase tracking-wider">
                  {t.currentFocusLabel}
                </span>
                <span className="font-medium text-[#2D2D2D]">
                  {topic.currentFocus[currentLang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
