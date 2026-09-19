import "./SocialLinks.css";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";

// خريطة الأيقونات — تربط اسم الشبكة بالـ Component
const ICONS = {
  github: SiGithub,
  email: SiGmail,
};

function SocialLinks({ links, variant = "icons", size = "md", className = "" }) {
  const classNames = [
    "social-links",
    `social-links--${variant}`,
    `social-links--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={classNames}>
      {links.map((link) => {
        const IconComponent = ICONS[link.icon];

        if (!IconComponent) return null;

        return (
          <li key={link.name} className="social-links__item">
            <a
              href={link.url}
              className="social-links__link"
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label || link.name}
            >
              <span className="social-links__icon">
                <IconComponent size={size === "sm" ? 18 : 20} />
              </span>

              {variant === "list" && (
                <span className="social-links__text">{link.text || link.url}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;