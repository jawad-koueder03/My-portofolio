import "./SkillBadge.css";

function SkillBadge({ name, icon }) {
  return (
    <div className="skill-badge">
      <div className="skill-badge__icon" aria-hidden="true">
        {icon}
      </div>
      <span className="skill-badge__name">{name}</span>
    </div>
  );
}

export default SkillBadge;