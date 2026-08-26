import React, { useState } from 'react';
import { Sparkles, BookOpen, CheckCircle, Search, Terminal, Cpu, Gamepad2, Layers } from 'lucide-react';
import { Language, SkillLevel, SkillItem } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const { skills } = portfolioData;
  const t = translations[currentLang].skills;

  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const levels: { id: string; label: string; count: number }[] = [
    { id: 'all', label: currentLang === 'en' ? 'All Skills' : 'Alle Kenntnisse', count: skills.length },
    { id: 'learning', label: t.categories.learning, count: skills.filter(s => s.level === 'learning').length },
    { id: 'familiar', label: t.categories.familiar, count: skills.filter(s => s.level === 'familiar').length },
    { id: 'exploring', label: t.categories.exploring, count: skills.filter(s => s.level === 'exploring').length },
  ];

  const getTierBadge = (level: SkillLevel) => {
    switch (level) {
      case 'learning':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono bg-[#FFFFFF] text-[#A67C52] border border-[#E8E4D8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] animate-pulse" />
            {t.categories.learning}
          </span>
        );
      case 'familiar':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono bg-[#FFFFFF] text-[#2D2D2D] border border-[#E8E4D8]">
            <CheckCircle className="w-3 h-3 text-[#555148]" />
            {t.categories.familiar}
          </span>
        );
      case 'exploring':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono bg-[#FFFFFF] text-[#555148] border border-[#E8E4D8]">
            <Sparkles className="w-3 h-3 text-[#A67C52]" />
            {t.categories.exploring}
          </span>
        );
    }
  };

  const filteredSkills = selectedLevel === 'all'
    ? skills
    : skills.filter(s => s.level === selectedLevel);

  return (
    <section id="skills" className="py-20 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
              <span className="text-[#A67C52] font-semibold">[05]</span>
              <span className="w-4 h-px bg-[#C4C0B2]" />
              <span>{t.sectionBadge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] mt-2">
              {t.title}
            </h2>
            <p className="text-sm text-[#555148] mt-2 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-[#F0EDE4] border border-[#E8E4D8] self-start md:self-end">
            {levels.map((level) => (
              <button
                key={level.id}
                type="button"
                onClick={() => setSelectedLevel(level.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedLevel === level.id
                    ? 'bg-[#2D2D2D] text-[#F9F7F2] font-semibold'
                    : 'text-[#6B675B] hover:text-[#2D2D2D] hover:bg-[#E8E3D7]'
                }`}
              >
                <span>{level.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 border ${
                  selectedLevel === level.id
                    ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#444]'
                    : 'bg-[#FFFFFF] text-[#555148] border-[#E8E4D8]'
                }`}>
                  {level.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tier Explanations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-[#F0EDE4] border border-[#E8E4D8]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#A67C52]" />
              <h4 className="font-semibold text-xs text-[#A67C52] font-mono uppercase tracking-wider">
                {t.categories.learning}
              </h4>
            </div>
            <p className="text-xs text-[#555148] leading-relaxed">
              {t.categories.learningDesc}
            </p>
          </div>

          <div className="p-4 bg-[#F0EDE4] border border-[#E8E4D8]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2D2D2D]" />
              <h4 className="font-semibold text-xs text-[#2D2D2D] font-mono uppercase tracking-wider">
                {t.categories.familiar}
              </h4>
            </div>
            <p className="text-xs text-[#555148] leading-relaxed">
              {t.categories.familiarDesc}
            </p>
          </div>

          <div className="p-4 bg-[#F0EDE4] border border-[#E8E4D8]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8C887D]" />
              <h4 className="font-semibold text-xs text-[#555148] font-mono uppercase tracking-wider">
                {t.categories.exploring}
              </h4>
            </div>
            <p className="text-xs text-[#555148] leading-relaxed">
              {t.categories.exploringDesc}
            </p>
          </div>
        </div>

        {/* Skills List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4.5 bg-[#F0EDE4] border border-[#E8E4D8] hover:bg-[#E8E3D7] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm text-[#2D2D2D]">
                    {skill.name}
                  </h3>
                  {getTierBadge(skill.level)}
                </div>

                {skill.note && (
                  <p className="text-xs text-[#555148] leading-relaxed mt-2 pt-2 border-t border-[#E8E4D8]">
                    {skill.note[currentLang]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
