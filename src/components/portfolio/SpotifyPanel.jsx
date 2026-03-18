import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpRight, Disc3 } from "lucide-react";
import { getCurrentlyPlaying, getLastPlayedTrack } from "../hooks/useSpotify.js";

const REFRESH_INTERVAL = 20000;

function formatPlayedAt(playedAt) {
  if (!playedAt) {
    return null;
  }

  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(playedAt));
  } catch {
    return null;
  }
}

export default function SpotifyPanel({ copy }) {
  const [track, setTrack] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const fetchTrack = async () => {
      setStatus((currentStatus) => (currentStatus === "ready" ? currentStatus : "loading"));

      let trackData = await getCurrentlyPlaying();

      if (!trackData || trackData.message) {
        trackData = await getLastPlayedTrack();
      }

      if (!isMounted) {
        return;
      }

      setTrack(trackData);
      setStatus(trackData?.message ? "error" : "ready");
    };

    fetchTrack();
    const intervalId = window.setInterval(fetchTrack, REFRESH_INTERVAL);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const playedAtLabel = useMemo(() => formatPlayedAt(track?.playedAt), [track?.playedAt]);

  return (
    <div className="border border-[var(--line)] bg-[var(--panel)] p-5 backdrop-blur-md sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{copy.label}</p>
          <h3 className="mt-3 text-2xl text-[var(--fg)]">
            <span className="portfolio-serif italic">{copy.titleAccent}</span>{" "}
            <span className="text-[var(--muted-strong)]">{copy.titleRest}</span>
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">{copy.description}</p>
        </div>

        <a
          href={copy.profileHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 border border-[var(--line)] px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
        >
          spotify
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="mt-6 border border-[var(--line)] bg-[var(--panel-solid)] p-4 sm:p-5">
        {status === "loading" ? (
          <div className="grid gap-4 sm:grid-cols-[96px_1fr]">
            <div className="aspect-square animate-pulse bg-[var(--line)]" />
            <div className="space-y-3">
              <div className="h-3 w-24 animate-pulse bg-[var(--line)]" />
              <div className="h-6 w-2/3 animate-pulse bg-[var(--line)]" />
              <div className="h-4 w-1/2 animate-pulse bg-[var(--line)]" />
              <div className="h-4 w-3/4 animate-pulse bg-[var(--line)]" />
            </div>
          </div>
        ) : status === "error" || !track ? (
          <div className="flex flex-col gap-3 text-sm text-[var(--muted)]">
            <span className="inline-flex w-fit items-center gap-2 border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.18em]">
              <Disc3 size={14} />
              spotify
            </span>
            <p>{track?.message || copy.fallbackMessage}</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-[112px_1fr]">
            <div className="overflow-hidden border border-[var(--line)] bg-[var(--panel)]">
              {track.albumImage ? (
                <img
                  src={track.albumImage}
                  alt={`${track.album} cover`}
                  className="aspect-square h-full w-full object-cover"
                />
              ) : (
                <div className="flex aspect-square items-center justify-center text-[var(--muted)]">
                  <Disc3 size={24} />
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={[
                    "inline-flex items-center gap-2 border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em]",
                    track.status === "playing"
                      ? "border-emerald-400/40 text-emerald-300"
                      : "border-[var(--line)] text-[var(--muted)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      track.status === "playing" ? "bg-emerald-300" : "bg-[var(--muted)]",
                    ].join(" ")}
                  />
                  {track.status === "playing" ? copy.playingLabel : copy.recentLabel}
                </span>

                {playedAtLabel && track.status !== "playing" ? (
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {copy.playedAtPrefix} {playedAtLabel}
                  </span>
                ) : null}
              </div>

              <h4 className="mt-4 text-xl text-[var(--fg)]">{track.name}</h4>
              <p className="mt-1 text-sm text-[var(--muted-strong)]">{track.artists}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{track.album}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                {track.externalUrl ? (
                  <a
                    href={track.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
                  >
                    {copy.trackLinkLabel}
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}

                <a
                  href={copy.profileHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
                >
                  {copy.profileLabel}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SpotifyPanel.propTypes = {
  copy: PropTypes.shape({
    description: PropTypes.string.isRequired,
    fallbackMessage: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    playedAtPrefix: PropTypes.string.isRequired,
    playingLabel: PropTypes.string.isRequired,
    profileHref: PropTypes.string.isRequired,
    profileLabel: PropTypes.string.isRequired,
    recentLabel: PropTypes.string.isRequired,
    titleAccent: PropTypes.string.isRequired,
    titleRest: PropTypes.string.isRequired,
    trackLinkLabel: PropTypes.string.isRequired,
  }).isRequired,
};
