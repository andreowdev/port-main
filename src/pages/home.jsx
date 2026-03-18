import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import PortfolioShell from "../components/portfolio/PortfolioShell.jsx";
import ProjectPreviewCard from "../components/portfolio/ProjectPreviewCard.jsx";
import SectionDivider from "../components/portfolio/SectionDivider.jsx";
import SpotifyPanel from "../components/portfolio/SpotifyPanel.jsx";
import { usePortfolioContent } from "../components/portfolio/usePortfolioContent.js";
import { useSound } from "../components/portfolio/SoundProvider.jsx";

const iconMap = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Home() {
  const content = usePortfolioContent();
  const { playMascot } = useSound();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openExperienceIndex, setOpenExperienceIndex] = useState(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.emailAddress);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = content.emailHref;
    }
  };

  const handleToggleExperience = (index) => {
    setOpenExperienceIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <PortfolioShell>
      <div className="mx-auto max-w-4xl px-2">
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <button
              type="button"
              onClick={playMascot}
              className="text-left text-xs leading-tight text-[var(--muted)] transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
              aria-label={content.hero.mascotLabel}
            >
              <pre className="mascot-entry">
                <code>{String.raw`  /\_/\\`}</code>
                <code>{String.raw`
 ( o.o )`}</code>
                <code>{String.raw`
 /  ^  \\`}</code>
                <code className="tracking-[-0.3em]">
                  {" "}
                  <span className="tail-wave">~</span>
                  <span className="tail-wave" style={{ animationDelay: "0.15s" }}>
                    ~
                  </span>
                  <span className="tail-wave" style={{ animationDelay: "0.3s" }}>
                    ~
                  </span>
                  <span className="tail-wave" style={{ animationDelay: "0.45s" }}>
                    ~
                  </span>
                  <span className="tail-wave" style={{ animationDelay: "0.6s" }}>
                    ~
                  </span>
                </code>
              </pre>
            </button>

            <span className="ml-auto text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:text-sm">
              {content.hero.note}
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-semibold leading-none text-[var(--fg)] sm:text-6xl lg:text-7xl">
            <span className="block tracking-[-0.1em]">{content.hero.roleAccent}</span>
            <span className="block tracking-[-0.08em] text-[var(--muted-strong)]">
              {content.hero.roleRest}
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            {content.hero.lead}{" "}
            <span className="portfolio-serif text-[var(--fg)] italic">
              {content.hero.leadHighlight}
            </span>
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {content.hero.status}
          </p>
        </section>

        <SectionDivider />

        <section className="mb-12 grid gap-12 md:grid-cols-[1.2fr_1px_1fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.sectionLabels.about}
            </p>
            <div className="space-y-5 editorial-copy">
              <p>{content.introSummary}</p>
              <p>{content.aboutBody}</p>
            </div>
          </div>

          <div className="hidden w-px self-stretch bg-[var(--line)] md:block" />

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.sectionLabels.connect}
            </p>

            <ul className="flex flex-col gap-3">
              {content.connectLinks.map((link) => {
                const Icon = iconMap[link.label];

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        {Icon ? <Icon size={16} className="shrink-0" /> : null}
                        <span className="min-w-0">
                          <span className="block text-sm text-[var(--fg)]">{link.label}</span>
                          <span className="block truncate text-xs text-[var(--muted)]">{link.value}</span>
                        </span>
                      </span>
                      <ArrowUpRight size={16} className="shrink-0 opacity-60" />
                    </a>
                  </li>
                );
              })}

              <li>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex w-full items-center justify-between gap-3 border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-left text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Mail size={16} className="shrink-0" />
                    <span className="min-w-0">
                      <span className="block text-sm text-[var(--fg)]">{content.emailLabel}</span>
                      <span className="block truncate text-xs text-[var(--muted)]">
                        {copiedEmail ? content.copiedEmailLabel : content.emailAddress}
                      </span>
                    </span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                    {copiedEmail ? content.copiedEmailLabel : content.copyEmailLabel}
                  </span>
                </button>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={content.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 text-sm text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
              >
                <FileText size={16} />
                {content.primaryCtaLabel}
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-[var(--line)] px-4 py-2.5 text-sm text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:bg-[var(--panel)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:bg-[var(--panel)] focus-visible:text-[var(--fg)] focus:outline-none"
              >
                {content.secondaryCtaLabel}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="mb-12">
          <header className="mb-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.experience.label}
            </p>
            <h2 className="mixed-title text-3xl text-[var(--fg)] sm:text-4xl">
              <span className="portfolio-serif italic">{content.experience.titleAccent}</span>{" "}
              <span className="text-[var(--muted-strong)]">{content.experience.titleRest}</span>
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              {content.experience.range}
            </p>
          </header>

          <div className="border-y border-[var(--line)]">
            {content.experience.items.map((item, index) => {
              const isOpen = openExperienceIndex === index;

              return (
                <article key={`${item.company}-${item.role}`} className="border-b border-[var(--line)] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => handleToggleExperience(index)}
                    className="grid w-full gap-4 py-5 text-left transition-colors duration-200 hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none md:grid-cols-[auto_1fr_auto_auto] md:items-center md:gap-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        "mt-1.5 h-2.5 w-2.5 border transition-colors md:mt-0",
                        isOpen
                          ? "border-[var(--fg)] bg-[var(--fg)]"
                          : "border-[var(--muted)] bg-transparent",
                      ].join(" ")}
                    />

                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="portfolio-serif text-2xl italic text-[var(--fg)]">
                        {item.company}
                      </span>
                      <span className="text-sm text-[var(--muted-strong)]">{item.role}</span>
                    </div>

                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)] md:text-right">
                      {item.period}
                    </p>

                    <ChevronDown
                      size={16}
                      className={[
                        "shrink-0 text-[var(--muted)] transition-transform duration-200",
                        isOpen ? "rotate-180 text-[var(--fg)]" : "",
                      ].join(" ")}
                    />
                  </button>

                  {isOpen ? (
                    <div className="pb-5 pl-6 md:pl-8">
                      <div className="max-w-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
                        <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                          <span>{item.type}</span>
                          <span>{item.location}</span>
                        </div>

                        <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>

                        <p className="mt-5 text-xs text-[var(--muted)]">{item.stack.join(" / ")}</p>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <SectionDivider />

        <section className="mb-12">
          <SpotifyPanel copy={content.spotify} />
        </section>

        <SectionDivider />

        <section className="mb-12">
          <header className="mb-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.sectionLabels.projects}
            </p>
            <h2 className="mixed-title text-3xl text-[var(--fg)] sm:text-4xl">
              <span className="portfolio-serif italic">{content.projectsTitle.accent}</span>{" "}
              <span className="text-[var(--muted-strong)]">{content.projectsTitle.rest}</span>
            </h2>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {content.projects.slice(0, 3).map((project) => (
              <ProjectPreviewCard key={project.title} project={project} />
            ))}
          </div>

          <Link
            to="/projetos"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
          >
            {content.viewAllProjectsLabel}
            <ArrowRight size={16} />
          </Link>
        </section>

        <SectionDivider />

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.sectionLabels.tools}
            </p>
            <div className="flex flex-wrap gap-2">
              {content.currentTools.map((tool) => (
                <span
                  key={tool}
                  className="border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--muted)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mb-4 mt-8 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.sectionLabels.workflow}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {content.toolDescription}
            </p>
          </div>

          <div className="border border-[var(--line)] bg-[var(--panel)] p-6 backdrop-blur-md sm:p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.workAvailability.label}
            </p>
            <h3 className="text-2xl leading-tight text-[var(--fg)]">
              {content.workAvailability.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {content.workAvailability.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={content.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--panel-solid)] px-4 py-2.5 text-sm text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
              >
                <FileText size={16} />
                {content.primaryCtaLabel}
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-[var(--line)] px-4 py-2.5 text-sm text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:bg-[var(--panel-solid)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:bg-[var(--panel-solid)] focus-visible:text-[var(--fg)] focus:outline-none"
              >
                {content.secondaryCtaLabel}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PortfolioShell>
  );
}
