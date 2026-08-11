import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "../ui/button.jsx";

export default function ProjectPreviewCard({ project }) {
  const primaryLink = project.siteLink && project.siteLink !== "#" ? project.siteLink : project.repoLink;
  const hasLiveLink = project.siteLink && project.siteLink !== "#";

  return (
    <article className="aqua-panel project-window">
      <div className="aqua-window-title">
        <span>{project.title}</span>
        <div aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>

      <a href={primaryLink} target="_blank" rel="noreferrer" className="project-window-preview">
        <img src={project.image} alt={project.title} />
      </a>

      <div className="project-window-body">
        <span>work</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-window-actions">
          {hasLiveLink ? (
            <Button asChild variant="secondary" size="sm">
              <a href={project.siteLink} target="_blank" rel="noreferrer">
                live <ArrowUpRight size={14} />
              </a>
            </Button>
          ) : null}

          <Button asChild variant="secondary" size="sm">
            <a href={project.repoLink} target="_blank" rel="noreferrer">
              <Github size={14} />
              github
            </a>
          </Button>
        </div>
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
