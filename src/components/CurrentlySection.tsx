import React from 'react';
import { GraduationCap, Code2, Compass, Activity, Sparkles } from 'lucide-react';
import { Language } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface CurrentlySectionProps {
  currentLang: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-4 h-4 text-[#A67C52]" />,
  Code2: <Code2 className="w-4 h-4 text-[#A67C52]" />,
  Compass: <Compass className="w-4 h-4 text-[#A67C52]" />,
  Activity: <Activity className="w-4 h-4 text-[#A67C52]" />,
};

export const CurrentlySection: React.FC<CurrentlySectionProps> = ({ currentLang }) => {
  const { currently } = portfolioData;
  const t = translations[currentLang].currently;

  return (
    <section id="currently" className="py-14 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
              <span className="text-[#A67C52] font-semibold">[02]</span>
              <span className="w-4 h-px bg-[#C4C0B2]" />
              <span>{t.statusIndicator}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D]">
              {t.title}
            </h2>
          </div>
          <p className="text-sm text-[#555148] max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Clean Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currently.map((item) => (
            <div
              key={item.id}
              id={`currently-item-${item.id}`}
              className="p-5 bg-[#F0EDE4] border border-[#E8E4D8] hover:bg-[#E8E3D7] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 bg-[#FFFFFF] border border-[#E8E4D8] flex items-center justify-center mb-3.5 shadow-2xs">
                  {iconMap[item.iconName] || <Sparkles className="w-4 h-4 text-[#A67C52]" />}
                </div>
                <h3 className="font-medium text-sm text-[#2D2D2D] mb-1.5">
                  {item.label[currentLang]}
                </h3>
              </div>
              <p className="text-xs text-[#555148] leading-relaxed pt-2.5 border-t border-[#E8E4D8]">
                {item.description[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
