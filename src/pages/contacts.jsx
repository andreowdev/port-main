import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import CalBookingPanel from "../components/portfolio/CalBookingPanel.jsx";
import PortfolioShell from "../components/portfolio/PortfolioShell.jsx";
import { usePortfolioContent } from "../components/portfolio/usePortfolioContent.js";



const iconMap = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Contacts() {
  const content = usePortfolioContent();

  return (
    <PortfolioShell>
      <div className="mx-auto grid max-w-5xl gap-10 px-2 lg:grid-cols-[0.95fr_1.05fr]">
        <section>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {content.sectionLabels.contact}
          </p>
          <h1 className="mixed-title text-4xl text-[var(--fg)] sm:text-5xl">
            <span className="portfolio-serif italic">{content.contactCopy.titleAccent}</span>{" "}
            <span className="text-[var(--muted-strong)]">{content.contactCopy.titleRest}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {content.contactCopy.description}
          </p>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {content.methodsLabel}
            </p>

            <div className="grid gap-3">
              <a
                href={content.emailHref}
                className="group flex items-center justify-between gap-3 border border-[var(--line)] bg-[var(--panel)] px-4 py-4 text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
              >
                <span className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0" />
                  <span>
                    <span className="block text-sm text-[var(--fg)]">{content.emailLabel}</span>
                    <span className="block text-xs text-[var(--muted)]">{content.emailAddress}</span>
                  </span>
                </span>
                <ArrowUpRight size={16} className="shrink-0 opacity-60" />
              </a>

              {content.connectLinks.map((link) => {
                const Icon = iconMap[link.label];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 border border-[var(--line)] bg-[var(--panel)] px-4 py-4 text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      {Icon ? <Icon size={16} className="shrink-0" /> : null}
                      <span>
                        <span className="block text-sm text-[var(--fg)]">{link.label}</span>
                        <span className="block text-xs text-[var(--muted)]">{link.description}</span>
                      </span>
                    </span>
                    <ArrowUpRight size={16} className="shrink-0 opacity-60" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <CalBookingPanel copy={content.scheduleCopy} />
      </div>
    </PortfolioShell>
  );
}
