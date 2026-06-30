import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import socials from "../data/socials";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <span className="hero-tag">
            FULL STACK DEVELOPER • DELHI, INDIA
          </span>

          <h1>
            Building Modern
            <br />
            <span className="gradient-text">Web Experiences</span>
          </h1>

          <h2>
            Hi, I'm <span className="hero-name">{portfolio.name}</span>.
          </h2>

          <p>
            I build scalable full-stack web applications using React,
            Java, Spring Boot, Node.js and modern web technologies.
            Passionate about creating clean user experiences and solving
            challenging Data Structures & Algorithms problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}

export default Hero;