import "./Projects.css";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <SectionTitle
          label="Featured Projects"
          title="Some Things I've Built"
          subtitle="Here are a few projects that showcase my skills and passion."
        />

        {/* ===== Projects List ===== */}
        <div className="projects__list">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;