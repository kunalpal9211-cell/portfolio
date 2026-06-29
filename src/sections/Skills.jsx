import { motion } from "framer-motion";
import skills from "../data/skills";
import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">SKILLS</span>

          <h2 className="section-title">
            Technologies I use to build
            <span className="gradient-text"> modern applications.</span>
          </h2>

          <p className="section-subtitle">
            I enjoy working across the full stack—from creating responsive
            frontends to designing scalable backend systems and solving complex
            algorithmic problems.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              className="card skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;