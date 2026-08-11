import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Copy, FileText, Mail } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import PortfolioShell from "../components/portfolio/PortfolioShell.jsx";
import SpotifyPanel from "../components/portfolio/SpotifyPanel.jsx";
import { usePortfolioContent } from "../components/portfolio/usePortfolioContent.js";
import { Button } from "../components/ui/button.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.jsx";

export default function Home() {
  const content = usePortfolioContent();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeJob, setActiveJob] = useState(0);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.emailAddress);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = content.emailHref;
    }
  };

  return (
    <PortfolioShell>
      <div className="aqua-home">
        <section className="aqua-hero">
          <div className="aqua-panel aqua-hero-window">
            <div className="aqua-window-title">
              <span>profile.exe</span>
              <div aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="aqua-card-inner aqua-hero-layout">
              <div className="aqua-hero-main">
                <div className="aqua-hero-badge">
                  <Avatar className="aqua-profile-avatar" src="/profile-pixel.png" alt="Andreo Henrique" size="lg" />
                  <span>{content.hero.roleAccent} {content.hero.roleRest}</span>
                </div>
                <h1>Andreo Henrique</h1>
                <p className="aqua-hero-lead">{content.hero.lead} {content.hero.leadHighlight}</p>

                <div className="aqua-actions">
                  <Button asChild size="lg">
                    <a href={content.resumeHref} target="_blank" rel="noreferrer">
                      <FileText size={16} /> {content.primaryCtaLabel}
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/projetos">
                      {content.viewAllProjectsLabel} <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="aqua-hero-readme">
                <span>{content.sectionLabels.about}.txt</span>
                <p>{content.introSummary}</p>
                <small>{content.aboutBody}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="aqua-section aqua-experience-section">
          <SpotifyPanel copy={content.spotify} />
        </section>

        <section className="aqua-grid">
          <div className="aqua-panel aqua-connect-window">
            <div className="aqua-window-title">
              <span>{content.sectionLabels.connect}.app</span>
              <div aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="aqua-card-inner">
              <div className="aqua-links">
                {content.connectLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" data-service={link.label}>
                    <span className="pixel-social-icon" aria-hidden="true" />
                    <strong>{link.label}</strong>
                    <small>{link.value}</small>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
                <button type="button" onClick={handleCopyEmail} data-service="email">
                  <span className="pixel-social-icon" aria-hidden="true" />
                  <strong>{content.emailLabel}</strong>
                  <small>{copiedEmail ? content.copiedEmailLabel : content.emailAddress}</small>
                  <Copy size={16} />
                </button>
              </div>
              <div className="aqua-connect-status">
                <strong>{content.workAvailability.label}</strong>
                <span>{content.emailAddress}</span>
              </div>
            </div>
          </div>

          <div className="aqua-panel aqua-tools-window">
            <div className="aqua-window-title">
              <span>{content.sectionLabels.tools}.sys</span>
              <div aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="aqua-card-inner">
              <div className="aqua-tags">
                {content.currentTools.map((tool) => (
                  <span className="aqua-pill" key={tool}>{tool}</span>
                ))}
              </div>
              <p>{content.toolDescription}</p>
            </div>
          </div>
        </section>

        <section className="aqua-section">
          <div className="aqua-section-heading">
            <span>{content.experience.label}</span>
            <h2>{content.experience.titleAccent} {content.experience.titleRest}</h2>
          </div>

          <Tabs className="aqua-experience-tabs" value={String(activeJob)} onValueChange={(value) => setActiveJob(Number(value))}>
            <TabsList className="aqua-tabs-list">
              {content.experience.items.map((item, index) => (
                <TabsTrigger
                  key={`${item.company}-${item.role}`}
                  value={String(index)}
                >
                  {item.company}
                </TabsTrigger>
              ))}
            </TabsList>

            {content.experience.items.map((job, index) => (
              <TabsContent className="aqua-experience-content" key={`${job.company}-${job.period}`} value={String(index)}>
                <div className="aqua-card-inner">
                  <span>{job.period}</span>
                  <h3>{job.role}</h3>
                  <p>{job.details[0]}</p>
                  <div className="aqua-tags">
                    {job.stack.map((item) => (
                      <span className="aqua-pill" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="aqua-section">
          <div className="aqua-section-heading">
            <span>{content.sectionLabels.projects}</span>
            <h2>{content.projectsTitle.accent} {content.projectsTitle.rest}</h2>
          </div>

          <div className="aqua-projects">
            {content.projects.slice(0, 3).map((project) => {
              const projectLink = project.siteLink && project.siteLink !== "#" ? project.siteLink : project.repoLink;

              return (
                <div className="aqua-panel aqua-project-card" key={project.title}>
                  <div className="aqua-window-title">
                    <span>{project.title}</span>
                    <div aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                  <img src={project.image} alt={project.title} />
                  <div className="aqua-card-inner">
                    <span>{content.sectionLabels.projects}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {projectLink && projectLink !== "#" ? (
                      <Button asChild variant="secondary">
                        <a href={projectLink} target="_blank" rel="noreferrer">
                          abrir <ArrowUpRight size={16} />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="aqua-panel availability-window">
          <div className="aqua-window-title">
            <span>{content.workAvailability.label}</span>
            <div aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="aqua-card-inner aqua-cta">
            <div>
              <h2>{content.workAvailability.title}</h2>
              <p>{content.workAvailability.body}</p>
            </div>
            <Button asChild size="lg">
              <Link to="/contato">
                <Mail size={16} /> {content.secondaryCtaLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PortfolioShell>
  );
}
