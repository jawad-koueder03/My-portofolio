import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* ===== Logo + Name ===== */}
        <a href="#home" className="navbar__brand" aria-label="Go to home">
          <span className="navbar__logo">JK</span>
          <span className="navbar__brand-text">
            <span className="navbar__name">Jawad Koueder</span>
            <span className="navbar__role">Front-End Developer</span>
          </span>
        </a>

        {/* ===== Desktop Navigation ===== */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ===== Actions ===== */}
        <div className="navbar__actions">
          <a
            href="/assets/jawad-koueder-cv.pdf"
            className="navbar__cv-btn"
            download
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>

          <button
            type="button"
            className={`navbar__toggle ${isMenuOpen ? "is-open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleLinkClick}
        links={navLinks}
      />
    </header>
  );
}

export default Navbar;