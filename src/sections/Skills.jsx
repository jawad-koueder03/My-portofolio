import "./Skills.css";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import { skillsData } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <SectionTitle
          label="Skills"
          title="Tools I Use & Technologies I'm Exploring"
          subtitle="The right tools make great work possible."
        />

        {/* ===== Groups Grid ===== */}
        <div className="skills__grid">
          {Object.entries(skillsData).map(([key, group]) => (
            <div key={key} className="skills__group">
              {/* ===== Group Header ===== */}
              <div className="skills__group-header">
                <h3 className="skills__group-title">{group.title}</h3>
                <span
                  className={`skills__badge skills__badge--${group.badgeVariant}`}
                >
                  {group.badge}
                </span>
              </div>

              {/* ===== Skills Badges ===== */}
              <div className="skills__badges">
                {group.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={<IconComponent />}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;