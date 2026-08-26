import React from 'react';
import { Dumbbell, Music, Mountain, Compass, Award, ArrowRight, Sparkles } from 'lucide-react';
import { Language, CalisthenicsSkill } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface OutsideSectionProps {
  currentLang: Language;
}

export const OutsideSection: React.FC<OutsideSectionProps> = ({ currentLang }) => {
  const { calisthenics } = portfolioData;
  const t = translations[currentLang].outside;

  const getStatusBadge = (status: CalisthenicsSkill['status']) => {
    switch (status) {
      case 'actively_training':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono bg-[#FFFFFF] text-[#A67C52] border border-[#E8E4D8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] animate-pulse" />
            {t.statusMap.actively_training}
          </span>
        );
      case 'mastering_form':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono bg-[#FFFFFF] text-[#2D2D2D] border border-[#E8E4D8]">
            {t.statusMap.mastering_form}
          </span>
        );
      case 'foundation':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono bg-[#FFFFFF] text-[#555148] border border-[#E8E4D8]">
            {t.statusMap.foundation}
          </span>
        );
    }
  };

  return (
    <section id="outside" className="py-20 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
            <span className="text-[#A67C52] font-semibold">[07]</span>
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

        {/* Calisthenics Main Block */}
        <div className="p-6 sm:p-8 bg-[#F0EDE4] border border-[#E8E4D8] mb-10 shadow-xs">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-9 h-9 bg-[#FFFFFF] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52] shrink-0 shadow-2xs">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-normal text-xl text-[#2D2D2D] mb-1">
                {t.calisthenicsTitle}
              </h3>
              <p className="text-sm text-[#555148] leading-relaxed max-w-3xl">
                {t.calisthenicsDesc}
              </p>
            </div>
          </div>

          {/* Calisthenics Skill Progressions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {calisthenics.map((skill, index) => (
              <div
                key={index}
                className="p-4.5 bg-[#FFFFFF] border border-[#E8E4D8] hover:bg-[#F9F7F2] transition-all flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="font-serif font-normal text-base text-[#2D2D2D]">
                      {skill.name}
                    </h4>
                    {getStatusBadge(skill.status)}
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-[#8C887D] block text-[10px] uppercase tracking-wider">
                        {t.currentProgressionLabel}
                      </span>
                      <p className="text-[#555148] mt-0.5 leading-relaxed">
                        {skill.currentProgression[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-[#E8E4D8] text-xs">
                  <span className="font-mono text-[#8C887D] block text-[10px] uppercase tracking-wider">
                    {t.targetLabel}
                  </span>
                  <p className="font-medium text-[#2D2D2D] mt-0.5">
                    {skill.target[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Interests (Piano, Personal Growth, Valais Outdoors) */}
        <div>
          <h3 className="font-serif text-xl font-normal text-[#2D2D2D] mb-6">
            {t.otherInterests.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Piano Card */}
            <div className="p-5 bg-[#FFFFFF] border border-[#E8E4D8] flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52] mb-3">
                  <Music className="w-4 h-4" />
                </div>
                <h4 className="font-medium text-sm text-[#2D2D2D] mb-1.5">
                  {t.otherInterests.piano.title}
                </h4>
                <p className="text-xs text-[#555148] leading-relaxed">
                  {t.otherInterests.piano.desc}
                </p>
              </div>
            </div>

            {/* Mindset Card */}
            <div className="p-5 bg-[#FFFFFF] border border-[#E8E4D8] flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52] mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-medium text-sm text-[#2D2D2D] mb-1.5">
                  {t.otherInterests.mindset.title}
                </h4>
                <p className="text-xs text-[#555148] leading-relaxed">
                  {t.otherInterests.mindset.desc}
                </p>
              </div>
            </div>

            {/* Outdoors / Valais Alps Card */}
            <div className="p-5 bg-[#FFFFFF] border border-[#E8E4D8] flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52] mb-3">
                  <Mountain className="w-4 h-4" />
                </div>
                <h4 className="font-medium text-sm text-[#2D2D2D] mb-1.5">
                  {t.otherInterests.mountains.title}
                </h4>
                <p className="text-xs text-[#555148] leading-relaxed">
                  {t.otherInterests.mountains.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
