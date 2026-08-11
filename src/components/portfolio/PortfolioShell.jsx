import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSound } from "./SoundProvider.jsx";

export default function PortfolioShell({ children }) {
  const location = useLocation();
  const { i18n } = useTranslation();
  const { enabled, toggleEnabled } = useSound();
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    opacity: 0,
    width: 0,
  });

  const uiText = {
    brandHome: "Go to homepage",
    enableSounds: "enable sounds",
    muteSounds: "mute sounds",
    skipToContent: "Skip to content",
    soundLabel: "[sound]",
  };
  const isPortuguese = i18n.language?.startsWith("pt");

  const navItems = useMemo(
    () => [
      { label: isPortuguese ? "início" : "home", to: "/" },
      { label: isPortuguese ? "projetos" : "work", to: "/projetos" },
      { label: isPortuguese ? "contato" : "contact", to: "/contato" },
    ],
    [isPortuguese],
  );

  useLayoutEffect(() => {
    const activePath = navItems.find((item) => item.to === location.pathname)?.to || "/";
    const navElement = navRef.current;
    const activeElement = itemRefs.current[activePath];

    if (!navElement || !activeElement) {
      return;
    }

    const navBounds = navElement.getBoundingClientRect();
    const itemBounds = activeElement.getBoundingClientRect();

    setPillStyle({
      left: itemBounds.left - navBounds.left,
      opacity: 1,
      width: itemBounds.width,
    });
  }, [location.pathname, navItems]);

  useEffect(() => {
    const handleResize = () => {
      const activePath = navItems.find((item) => item.to === location.pathname)?.to || "/";
      const navElement = navRef.current;
      const activeElement = itemRefs.current[activePath];

      if (!navElement || !activeElement) {
        return;
      }

      const navBounds = navElement.getBoundingClientRect();
      const itemBounds = activeElement.getBoundingClientRect();

      setPillStyle({
        left: itemBounds.left - navBounds.left,
        opacity: 1,
        width: itemBounds.width,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, navItems]);

  return (
    <div className="portfolio-shell">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:bg-[var(--fg)] focus-visible:px-4 focus-visible:py-2 focus-visible:text-[var(--bg)] focus-visible:outline-none"
      >
        {uiText.skipToContent}
      </a>

      <header className="site-dock">
        <div className="site-dock-inner">
          <NavLink
            to="/"
            aria-label={uiText.brandHome}
            className="site-brand"
          >
            <Code2 size={16} />
            <span>andreo.exe</span>
          </NavLink>

          <nav
            ref={navRef}
            className="site-nav hide-scrollbar"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                ref={(element) => {
                  itemRefs.current[item.to] = element;
                }}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "site-nav-link",
                    isActive ? "active" : "",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <span
              aria-hidden="true"
              className="site-nav-pill"
              style={{
                left: pillStyle.left,
                opacity: pillStyle.opacity,
                width: pillStyle.width,
              }}
            />
          </nav>

          <button
            type="button"
            onClick={() => i18n.changeLanguage(isPortuguese ? "en" : "pt-BR")}
            className="site-lang"
          >
            {isPortuguese ? "EN" : "PT-BR"}
          </button>

          <div className="site-window-controls" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      </header>

      <main id="main-content" className="portfolio-main mx-auto w-full max-w-5xl flex-1 px-4 py-6 md:px-8 md:py-8">
        {children}
      </main>

      <footer
        className="sticky bottom-0 z-40 border-t border-[var(--line)] bg-[var(--bg-soft)] text-sm text-[var(--muted)] backdrop-blur-md"
        style={{ boxShadow: "0 -18px 30px -14px var(--shadow-overlay)" }}
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 md:px-8">
          <span>andreo.dev</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleEnabled}
              className="relative transition-colors hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
              aria-label={enabled ? uiText.muteSounds : uiText.enableSounds}
            >
              {uiText.soundLabel}
              <span
                aria-hidden="true"
                className={[
                  "absolute left-0 top-1/2 h-px w-full origin-left bg-current transition-transform duration-200",
                  enabled ? "scale-x-0" : "scale-x-100",
                ].join(" ")}
              />
            </button>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

PortfolioShell.propTypes = {
  children: PropTypes.node.isRequired,
};
