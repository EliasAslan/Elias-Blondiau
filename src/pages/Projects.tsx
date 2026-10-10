import { PROJECT_SLUGS } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ProjectCard } from '../components/layout';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="projects-h">
      <div className="wrap">
        <div className="section-head page-head">
          <h2 id="projects-h">{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        </div>
        <div className="projects">
          {PROJECT_SLUGS.map((slug) => (
            <ProjectCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
