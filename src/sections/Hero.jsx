import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import socials from "../data/socials";
// Hero.jsx
import "../styles/Hero.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-blur hero-blur-1"></div>
      <div className="hero-blur hero-blur-2"></div>

      <div className="container hero-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-content"
        >
          <motion.span variants={item} className="hero-tag">
            Software Developer • DSA Enthusiast
          </motion.span>

          <motion.h1 variants={item}>
            Hi, I'm <span className="gradient-text">{portfolio.name}</span>
            <br />
            Building modern web experiences.
          </motion.h1>

          <motion.p variants={item}>
            I'm a software developer from {portfolio.location} with 500+
            Data Structures & Algorithms problems solved and a passion for
            building scalable, beautiful and high-performance applications.
          </motion.p>

          <motion.div variants={item} className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-card card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="card-label">Featured Project</span>

          <h3>AI Job Portal</h3>

          <p>
            A full-stack AI-powered job portal with authentication, recruiter
            dashboard, candidate dashboard, resume parsing and intelligent job
            recommendations.
          </p>

          <div className="hero-stats">
            <div>
              <h2>500+</h2>
              <span>DSA Problems</span>
            </div>

            <div>
              <h2>React</h2>
              <span>Frontend</span>
            </div>

            <div>
              <h2>Node</h2>
              <span>Backend</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;