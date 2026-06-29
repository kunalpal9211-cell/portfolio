import { motion } from "framer-motion";
import experience from "../data/experience";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">JOURNEY</span>

          <h2 className="section-title">
            My Learning
            <span className="gradient-text"> Journey</span>
          </h2>

          <p className="section-subtitle">
            Every project, algorithm and technology has helped me become a
            better developer.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-card card">
                <span className="timeline-year">
                  {item.duration}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;