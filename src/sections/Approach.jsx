import "./Approach.css";
import SectionTitle from "../components/SectionTitle";
import ApproachCard from "../components/ApproachCard";
import { approachData } from "../data/approach";

function Approach() {
  return (
    <section id="approach" className="approach section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <SectionTitle
          label="My Approach"
          title="What I Do"
          subtitle="From design to deployment. Focused on delivering real value."
        />

        {/* ===== Cards Grid ===== */}
        <div className="approach__grid">
          {approachData.map((item) => (
            <ApproachCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;