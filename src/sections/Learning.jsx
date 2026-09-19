import "./Learning.css";
import SectionTitle from "../components/SectionTitle";
import { learningData } from "../data/learning";

function Learning() {
  return (
    <section id="learning" className="learning section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <SectionTitle
          label="Currently Exploring"
          title="Learning Today for a Better Tomorrow"
          subtitle="Expanding my skills toward Full-Stack development."
        />

        {/* ===== Items Grid ===== */}
        <div className="learning__grid">
          {learningData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.name} className="learning__item">
                <span className="learning__icon" aria-hidden="true">
                  <IconComponent size={22} />
                </span>
                <span className="learning__name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Learning;