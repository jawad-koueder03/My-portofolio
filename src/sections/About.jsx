import "./About.css";
import SectionTitle from "../components/SectionTitle";
import workspaceImage from "../assets/images/pexels-mikhail-nilov-9300738.jpg";
import { personal } from "../data/personal";

// ===== 3 Feature Points =====
const features = [
  {
    title: "Problem Solver",
    description: "I enjoy finding simple solutions to complex problems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: "User Focused",
    description: "I care about real users and their experience.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Always Learning",
    description: "I believe in continuous growth and improvement.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <SectionTitle
          label="About me"
          title="A Developer Who Cares About the Details"
        />

        {/* ===== Content Grid ===== */}
        <div className="about__grid">
          {/* ===== Left: Image ===== */}
          <div className="about__image-wrapper">
            <div className="about__image-frame">
              <img
                src={workspaceImage}
                alt={`${personal.name} workspace`}
                className="about__image"
                loading="lazy"
              />
            </div>

            {/* Floating Card */}
            <div className="about__float-card">
              <span className="about__float-line" aria-hidden="true" />
              <div className="about__float-text">
                <span>Good Code</span>
                <span>Coffee</span>
                <span>Better Ideas</span>
              </div>
            </div>
          </div>

          {/* ===== Right: Content ===== */}
          <div className="about__content">
            <p className="about__paragraph">
              I'm a{" "}
              <strong className="about__highlight">Front-End Developer</strong>{" "}
              who enjoys turning ideas into clean, responsive interfaces. I
              focus on <strong className="about__highlight">React</strong>, API
              integration, and user-friendly design.
            </p>

            <p className="about__paragraph">
              I care deeply about the{" "}
              <strong className="about__highlight">UI/UX</strong> side of things
              — not just the code. I believe great products come from paying
              attention to the smallest details.
            </p>

            <p className="about__paragraph">
              Currently, I'm expanding my skills toward{" "}
              <strong className="about__highlight">Full-Stack development</strong>{" "}
              by learning Node.js, Backend technologies, and databases.
            </p>

            {/* ===== Feature Points ===== */}
            <div className="about__features">
              {features.map((feature) => (
                <div key={feature.title} className="about__feature">
                  <span className="about__feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <div className="about__feature-text">
                    <h3 className="about__feature-title">{feature.title}</h3>
                    <p className="about__feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;