import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button.jsx";

const CAL_BOOKING_URL = "https://cal.com/andreodev/30min?overlayCalendar=true";

export default function CalBookingPanel({ copy }) {
  return (
    <section className="aqua-panel contact-window contact-availability">
      <div className="aqua-window-title">
        <span>{copy.eyebrow}</span>
        <div aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="contact-window-body">
        <div className="contact-heading">
          <span>{copy.availabilityLabel}</span>
          <h2>{copy.titleAccent} {copy.titleRest}</h2>
          <p>{copy.availabilityBody}</p>
        </div>

        <div className="contact-note">
          <strong>{copy.availabilityTitle}</strong>
          <p>{copy.description} {copy.trailing}</p>
        </div>

        <Button asChild>
          <a href={CAL_BOOKING_URL} target="_blank" rel="noreferrer">
            {copy.cta}
            <ArrowUpRight size={16} />
          </a>
        </Button>
      </div>
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
