import PortfolioShell from "../components/portfolio/PortfolioShell.jsx";
import ProjectPreviewCard from "../components/portfolio/ProjectPreviewCard.jsx";
import { usePortfolioContent } from "../components/portfolio/usePortfolioContent.js";

export default function Projetos() {
  const content = usePortfolioContent();

  return (
    <PortfolioShell>
      <div className="mx-auto max-w-5xl px-2">
        <section className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {content.sectionLabels.projects}
          </p>
          <h1 className="mixed-title text-4xl text-[var(--fg)] sm:text-5xl">
            <span className="portfolio-serif italic">{content.pageHeadings.projects.accent}</span>{" "}
            <span className="text-[var(--muted-strong)]">{content.pageHeadings.projects.rest}</span>
          </h1>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {content.pageHeadings.projects.description}
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {content.projects.map((project) => (
            <ProjectPreviewCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </PortfolioShell>
  );
}
