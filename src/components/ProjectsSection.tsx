import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, FolderGit2, Info } from 'lucide-react';
import { Language, Project } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  currentLang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang }) => {
  const { projects } = portfolioData;
  const t = translations[currentLang].projects;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: t.all },
    { id: 'web', label: t.web },
    { id: 'python', label: t.python },
    { id: 'game', label: t.game },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
              <span className="text-[#A67C52] font-semibold">[04]</span>
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

          {/* Category Filter Pills */}
          <div
            className="flex items-center flex-wrap gap-1 p-1 bg-[#F0EDE4] border border-[#E8E4D8] self-start md:self-end"
            role="group"
            aria-label={t.filterByCategory}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2D2D2D] text-[#F9F7F2] font-semibold'
                    : 'text-[#6B675B] hover:text-[#2D2D2D] hover:bg-[#E8E3D7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-[#F0EDE4] border border-[#E8E4D8] hover:bg-[#E8E3D7] transition-all p-6 sm:p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Card Top: Status badge and category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-[#FFFFFF] border border-[#E8E4D8] text-[#555148]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52]" />
                    {t.statusLabels[project.status] || project.status}
                  </span>
                  <span className="text-xs font-mono text-[#8C887D] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2D2D2D] group-hover:text-[#A67C52] transition-colors mb-2.5">
                  {project.title[currentLang]}
                </h3>

                {/* Project Short Description */}
                <p className="text-sm text-[#555148] leading-relaxed mb-6">
                  {project.description[currentLang]}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#E8E4D8]">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[11px] font-mono bg-[#FFFFFF] text-[#555148] border border-[#E8E4D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    id={`project-details-btn-${project.id}`}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#2D2D2D] hover:text-[#A67C52] flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>{t.details}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#FFFFFF] border border-[#E8E4D8] text-[#555148] hover:text-[#2D2D2D] hover:bg-[#F9F7F2] transition-colors"
                        title={t.viewCode}
                        aria-label={`${t.viewCode} for ${project.title[currentLang]}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#FFFFFF] border border-[#E8E4D8] text-[#555148] hover:text-[#2D2D2D] hover:bg-[#F9F7F2] transition-colors"
                        title={t.liveDemo}
                        aria-label={`${t.liveDemo} for ${project.title[currentLang]}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Expansion Note */}
        <div className="mt-8 p-4 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center gap-3 text-xs text-[#8C887D] font-mono">
          <Info className="w-4 h-4 text-[#A67C52] shrink-0" />
          <span>{t.addMoreNote}</span>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        currentLang={currentLang}
      />
    </section>
  );
};
