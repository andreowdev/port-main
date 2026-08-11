import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import CalBookingPanel from "../components/portfolio/CalBookingPanel.jsx";
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
    <div className="contact-page">
      <section className="aqua-panel contact-window">
        <div className="aqua-window-title">
          <span>{content.sectionLabels.contact}</span>
          <div aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="contact-window-body">
          <div className="contact-heading">
            <span>{content.methodsLabel}</span>
            <h1>{content.contactCopy.titleAccent} {content.contactCopy.titleRest}</h1>
            <p>{content.contactCopy.description}</p>
          </div>

          <div className="contact-links">
            <a
              href={content.emailHref}
              className="contact-link"
            >
              <span>
                <Mail size={16} />
                <span>
                  <strong>{content.emailLabel}</strong>
                  <small>{content.emailAddress}</small>
                </span>
              </span>
              <ArrowUpRight size={16} />
            </a>

            {content.connectLinks.map((link) => {
              const Icon = iconMap[link.label];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>
                    {Icon ? <Icon size={16} /> : null}
                    <span>
                      <strong>{link.label}</strong>
                      <small>{link.description}</small>
                    </span>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <CalBookingPanel copy={content.scheduleCopy} />
    </div>
  );
}
