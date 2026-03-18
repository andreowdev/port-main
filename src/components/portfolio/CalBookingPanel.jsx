import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

const CAL_BOOKING_URL = "https://cal.com/andreodev/30min?overlayCalendar=true";

export default function CalBookingPanel({ copy }) {
  return (
    <section className="border border-[var(--line)] bg-[var(--panel)] px-5 py-6 sm:px-6 sm:py-8">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{copy.eyebrow}</p>
      <h2 className="mixed-title text-3xl text-[var(--fg)] sm:text-4xl">
        <span className="portfolio-serif italic">{copy.titleAccent}</span>{" "}
        <span className="text-[var(--muted-strong)]">{copy.titleRest}</span>
      </h2>
      <div className="mt-8 border border-[var(--line)] bg-[var(--panel-solid)] p-5">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{copy.availabilityLabel}</p>
        <h3 className="text-2xl leading-tight text-[var(--fg)]">{copy.availabilityTitle}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">{copy.availabilityBody}</p>
      </div>
      <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
        {copy.description}{" "}
        <a
          href={CAL_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[var(--fg)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors duration-200 hover:text-[var(--muted-strong)] focus-visible:text-[var(--muted-strong)] focus:outline-none"
        >
          {copy.cta}
          <ArrowUpRight size={14} />
        </a>
        {copy.trailing ? ` ${copy.trailing}` : ""}
      </p>
    </section>
  );
}

CalBookingPanel.propTypes = {
  copy: PropTypes.shape({
    availabilityBody: PropTypes.string.isRequired,
    availabilityLabel: PropTypes.string.isRequired,
    availabilityTitle: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    titleAccent: PropTypes.string.isRequired,
    trailing: PropTypes.string,
    titleRest: PropTypes.string.isRequired,
  }).isRequired,
};
