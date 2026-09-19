import "./Footer.css";
import SocialLinks from "../components/SocialLinks";
import { personal } from "../data/personal";

// روابط التنقل
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* ===== Top Row: Brand + Nav + Socials ===== */}
        <div className="footer__top">
          {/* Brand */}
          <a href="#home" className="footer__brand" aria-label="Go to home">
            <span className="footer__logo">{personal.initials}</span>
            <span className="footer__brand-text">
              <span className="footer__name">{personal.name}</span>
              <span className="footer__role">{personal.role}</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="footer__socials">
            <SocialLinks links={personal.socials} variant="icons" size="sm" />
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="footer__divider" />

        {/* ===== Bottom Row: Copyright + Built With ===== */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {personal.name}. All rights reserved.
          </p>

          <p className="footer__built-with">
            Built with <span className="footer__heart" aria-label="love">♥</span> in React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;