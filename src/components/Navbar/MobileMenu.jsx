import "./MobileMenu.css";

function MobileMenu({ isOpen, onClose, links }) {
  return (
    <div
      className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}
      aria-hidden={!isOpen}
    >
      <nav className="mobile-menu__nav" aria-label="Mobile navigation">
        <ul className="mobile-menu__links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-menu__link"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/assets/jawad-koueder-cv.pdf"
          className="mobile-menu__cv"
          download
          onClick={onClose}
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
      </nav>
    </div>
  );
}

export default MobileMenu;