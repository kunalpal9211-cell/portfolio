import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import "../styles/About.css";


function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="about-tag">ABOUT ME</span>

          <h2 className="section-title">
            Building products that are fast,
            <span className="gradient-text"> scalable</span> and
            <span className="gradient-text"> beautiful.</span>
          </h2>

          <p>
            I'm <strong>{portfolio.name}</strong>, a passionate software
            developer from <strong>{portfolio.location}</strong>. I enjoy
            solving complex algorithmic problems, designing clean user
            interfaces, and building full-stack web applications that deliver a
            great user experience.
          </p>

          <p>
            My strongest interests include React, Java, Node.js, Express,
            MongoDB, REST APIs, authentication systems, and Data Structures &
            Algorithms. I love transforming ideas into polished products.
          </p>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="card about-card">
            <div className="about-stat">
              <h2>500+</h2>
              <span>DSA Problems Solved</span>
            </div>

            <div className="about-stat">
              <h2>Full Stack</h2>
              <span>React • Node • MongoDB</span>
            </div>

            <div className="about-stat">
              <h2>AI Job Portal</h2>
              <span>Featured Project</span>
            </div>

            <div className="about-stat">
              <h2>Open Source</h2>
              <span>Always Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;