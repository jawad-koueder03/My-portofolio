import "./Hero.css";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { personal } from "../data/personal";

// ===== SVG Icons صغيرة =====
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChatIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        {/* ===== Left: Content ===== */}
        <div className="hero__content">
          {/* Greeting */}
          <span className="hero__greeting">
            <span className="hero__greeting-line" aria-hidden="true" />
            Hello, I'm {personal.name.split(" ")[0]} 👋
          </span>

          {/* Title */}
          <h1 className="hero__title">
            I Build{" "}
            <span className="text-gradient">Modern</span>
            <br />
            Web Experiences.
          </h1>

          {/* Description */}
          <p className="hero__description">{personal.description}</p>

          {/* Buttons */}
          <div className="hero__actions">
            <Button
              href="#projects"
              icon={<ArrowIcon />}
              iconPosition="right"
            >
              
              View My Work
              
            </Button>

            <Button
              variant="secondary"
              href="#contact"
              icon={<ChatIcon />}
              iconPosition="left"
            >
              Let's Talk
            </Button>
          </div>

          {/* Socials */}
          <div className="hero__socials">
            <SocialLinks links={personal.socials} variant="icons" />
          </div>
        </div>

        {/* ===== Right: Visual ===== */}
        <div className="hero__visual" aria-hidden="true">
          {/* Code Editor */}
          <div className="hero__code-window">
            <div className="hero__code-header">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__code-filename">App.jsx</span>
            </div>
            <pre className="hero__code-body">
              <code>
                <span className="code-keyword">function</span>{" "}
                <span className="code-func">Portfolio</span>() {"{"}
                {"\n  "}
                <span className="code-keyword">return</span> (
                {"\n    "}
                <span className="code-tag">&lt;div</span>{" "}
                <span className="code-attr">className</span>=
                <span className="code-string">"portfolio"</span>
                <span className="code-tag">&gt;</span>
                {"\n      "}
                <span className="code-tag">&lt;Hero</span>{" "}
                <span className="code-tag">/&gt;</span>
                {"\n    "}
                <span className="code-tag">&lt;/div&gt;</span>
                {"\n  "});
                {"\n}"}
              </code>
            </pre>
          </div>

          {/* Floating Card 1 — React */}
          <div className="hero__float-card hero__float-card--react">
            <div className="hero__float-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <ellipse cx="12" cy="12" rx="10" ry="4" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4"
                  transform="rotate(120 12 12)"
                />
              </svg>
            </div>
            <div className="hero__float-text">
              <span className="hero__float-title">React</span>
              <span className="hero__float-subtitle">Component-based</span>
            </div>
          </div>

          {/* Floating Card 2 — Clean Code */}
          <div className="hero__float-card hero__float-card--clean">
            <div className="hero__float-icon hero__float-icon--alt">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="hero__float-text">
              <span className="hero__float-title">Clean Code</span>
              <span className="hero__float-subtitle">Readable &amp; scalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;