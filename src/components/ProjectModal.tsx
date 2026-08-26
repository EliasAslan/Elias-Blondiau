import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Tag, CheckCircle, Calendar, Layers } from 'lucide-react';
import { Project, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  currentLang,
}) => {
  const t = translations[currentLang].projects;

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2D2D]/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-2xl bg-[#F9F7F2] border border-[#E8E4D8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E4D8] bg-[#F0EDE4]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-mono font-medium bg-[#FFFFFF] border border-[#E8E4D8] text-[#555148]">
              {t.statusLabels[project.status] || project.status}
            </span>
            <span className="text-xs font-mono text-[#8C887D] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <button
            id="close-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6B675B] hover:text-[#2D2D2D] hover:bg-[#E8E4D8] transition-colors cursor-pointer"
            aria-label={t.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#2D2D2D] mb-2">
              {project.title[currentLang]}
            </h3>
            <p className="text-sm text-[#555148] leading-relaxed">
              {project.description[currentLang]}
            </p>
          </div>

          {project.longDescription && (
            <div className="p-4 bg-[#FFFFFF] border border-[#E8E4D8]">
              <h4 className="text-xs font-mono text-[#8C887D] uppercase tracking-wider mb-2">
                {currentLang === 'en' ? 'Background & Goal' : 'Hintergrund & Ziel'}
              </h4>
              <p className="text-sm text-[#555148] leading-relaxed">
                {project.longDescription[currentLang]}
              </p>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights[currentLang] && (
            <div>
              <h4 className="font-serif font-normal text-base text-[#2D2D2D] mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#A67C52]" />
                <span>{t.highlightsTitle}</span>
              </h4>
              <ul className="space-y-2">
                {project.highlights[currentLang].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555148]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono text-[#8C887D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.technologies}</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#F0EDE4] text-[#2D2D2D] border border-[#E8E4D8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-[#E8E4D8] bg-[#F0EDE4]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2D2D2D] text-[#F9F7F2] text-xs font-mono uppercase tracking-wider hover:bg-[#1A1A1A] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.viewCode}</span>
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFFFFF] border border-[#E8E4D8] text-[#2D2D2D] text-xs font-mono uppercase tracking-wider hover:bg-[#F9F7F2] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.liveDemo}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-[#6B675B] hover:text-[#2D2D2D] px-3 py-1.5 cursor-pointer"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
