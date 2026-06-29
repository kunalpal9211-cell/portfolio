import { motion } from "framer-motion";
import projects from "../data/projects";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">PROJECTS</span>

          <h2 className="section-title">
            Featured
            <span className="gradient-text"> Work</span>
          </h2>

          <p className="section-subtitle">
            A collection of projects showcasing full-stack development,
            problem-solving and modern UI design.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;