import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Code2, Moon, SunMedium } from "lucide-react";
import { flushSync } from "react-dom";
import { useSound } from "./SoundProvider.jsx";

const THEME_STORAGE_KEY = "andreo@theme";

function getStoredTheme() {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme || "dark";
}

export default function PortfolioShell({ children }) {
  const location = useLocation();
  const { enabled, toggleEnabled } = useSound();
  const [theme, setTheme] = useState(() => getStoredTheme());
  const navRef = useRef(null);
  const themeToggleRef = useRef(null);
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
    switchToDarkMode: "switch to dark mode",
    switchToLightMode: "switch to light mode",
  };

  const navItems = useMemo(
    () => [
      { label: "home", to: "/" },
      { label: "work", to: "/projetos" },
      { label: "contact", to: "/contato" },
    ],
    [],
  );

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

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

  const applyTheme = (nextTheme) => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    flushSync(() => setTheme(nextTheme));
  };

  const handleThemeToggle = () => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const buttonBounds = themeToggleRef.current?.getBoundingClientRect();
    const originX = buttonBounds ? buttonBounds.left + buttonBounds.width / 2 : window.innerWidth / 2;
    const originY = buttonBounds ? buttonBounds.top + buttonBounds.height / 2 : 0;
    const endRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    );

    root.style.setProperty("--theme-origin-x", `${originX}px`);
    root.style.setProperty("--theme-origin-y", `${originY}px`);
    root.style.setProperty("--theme-reveal-radius", `${endRadius}px`);

    if (!document.startViewTransition || prefersReducedMotion) {
      applyTheme(nextTheme);
      return;
    }

    root.dataset.themeTransition = nextTheme;

    const transition = document.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.finished.finally(() => {
      delete root.dataset.themeTransition;
    });
  };

  return (
    <div className="portfolio-shell">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:bg-[var(--fg)] focus-visible:px-4 focus-visible:py-2 focus-visible:text-[var(--bg)] focus-visible:outline-none"
      >
        {uiText.skipToContent}
      </a>

      <header
        className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg-soft)] backdrop-blur-md"
        style={{ boxShadow: "0 18px 30px -14px var(--shadow-overlay)" }}
      >
        <div className="mx-auto flex h-12 w-full max-w-5xl items-center gap-4 px-4 md:px-8">
          <NavLink
            to="/"
            aria-label={uiText.brandHome}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--panel)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--line-strong)] hover:text-[var(--fg)] focus-visible:border-[var(--line-strong)] focus-visible:text-[var(--fg)] focus:outline-none"
          >
            <Code2 size={16} />
          </NavLink>

          <nav
            ref={navRef}
            className="relative flex min-w-0 flex-1 overflow-x-auto border-x border-[var(--line)] hide-scrollbar"
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
                    "relative z-10 flex shrink-0 items-center px-4 py-3 text-sm transition-colors duration-200 focus:outline-none",
                    isActive ? "text-[var(--fg)]" : "text-[var(--muted)] hover:text-[var(--fg)] focus-visible:text-[var(--fg)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 bg-[var(--line)] transition-[left,width,opacity] duration-300 ease-out"
              style={{
                left: pillStyle.left,
                opacity: pillStyle.opacity,
                width: pillStyle.width,
              }}
            />
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              ref={themeToggleRef}
              type="button"
              onClick={handleThemeToggle}
              className="group relative flex h-9 w-9 items-center justify-center overflow-hidden text-[var(--muted)] transition-colors duration-200 hover:text-[var(--fg)] focus-visible:text-[var(--fg)] focus:outline-none"
              aria-label={theme === "dark" ? uiText.switchToLightMode : uiText.switchToDarkMode}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[var(--line)] opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-active:scale-95"
              />
              <span className="relative block h-4 w-4">
                <SunMedium
                  size={16}
                  className={[
                    "absolute inset-0 transition-all duration-300 ease-out",
                    theme === "dark"
                      ? "translate-y-0 scale-100 rotate-0 opacity-100"
                      : "-translate-y-2 scale-75 -rotate-45 opacity-0",
                  ].join(" ")}
                />
                <Moon
                  size={16}
                  className={[
                    "absolute inset-0 transition-all duration-300 ease-out",
                    theme === "dark"
                      ? "translate-y-2 scale-75 rotate-45 opacity-0"
                      : "translate-y-0 scale-100 rotate-0 opacity-100",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 md:px-8 md:py-20">
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
