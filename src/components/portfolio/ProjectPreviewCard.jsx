import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectPreviewCard({ project }) {
  const primaryLink = project.siteLink && project.siteLink !== "#" ? project.siteLink : project.repoLink;
  const hasLiveLink = project.siteLink && project.siteLink !== "#";

  return (
    <article className="group">
      <a
        href={primaryLink}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden border border-[var(--line)] bg-[var(--panel-solid)] transition-colors duration-200 hover:border-[var(--line-strong)] focus-visible:border-[var(--line-strong)] focus:outline-none"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover opacity-70 grayscale transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:scale-105 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
          />
          <div className="project-card-gradient absolute inset-x-0 bottom-0 p-4 pt-12">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base text-[var(--fg)]">{project.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">{project.description}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-[var(--muted)] transition-opacity duration-200 group-hover:text-[var(--fg)] group-focus-visible:text-[var(--fg)]"
              />
            </div>
          </div>
        </div>
      </a>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
        {hasLiveLink ? (
          <a
            href={project.siteLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
          >
            live
            <ArrowUpRight size={14} />
          </a>
        ) : null}

        <a
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
        >
          <Github size={14} />
          github
        </a>
      </div>
    </article>
  );
}

ProjectPreviewCard.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired,
    siteLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
