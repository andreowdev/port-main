import PortfolioShell from "../components/portfolio/PortfolioShell.jsx";
import ProjectPreviewCard from "../components/portfolio/ProjectPreviewCard.jsx";
import { usePortfolioContent } from "../components/portfolio/usePortfolioContent.js";

export default function Projetos() {
  const content = usePortfolioContent();

  return (
    <PortfolioShell>
      <div className="projects-page">
        <section className="projects-page-heading">
          <span>{content.sectionLabels.projects}</span>
          <h1>{content.pageHeadings.projects.accent} {content.pageHeadings.projects.rest}</h1>
          <p>{content.pageHeadings.projects.description}</p>
        </section>

        <div className="projects-page-grid">
          {content.projects.map((project) => (
            <ProjectPreviewCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </PortfolioShell>
  );
}
