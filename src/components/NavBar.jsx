import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./NavBar.css";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const getInitialTheme = () => {
  const saved = document.documentElement.dataset.theme;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode); theme still applies for this visit
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    if (pathname !== "/") return;
    // "top" (the hero) is observed too so no link stays highlighted after scrolling back up
    const sections = ["top", ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container navbar-inner">
        <a href="/#top" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">SS</span>
          <span className="logo-text">Sankara Subramanian</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`/#${l.id}`}
                className={pathname === "/" && active === l.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
