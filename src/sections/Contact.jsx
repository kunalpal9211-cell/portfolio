import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import socials from "../data/socials";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">CONTACT</span>

          <h2 className="section-title">
            Let's Build Something
            <span className="gradient-text"> Amazing.</span>
          </h2>

          <p className="section-subtitle">
            Whether you have a project, internship opportunity or simply want
            to connect, I'd love to hear from you.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <span>Email</span>
              <a href={`mailto:${portfolio.email}`}>
                {portfolio.email}
              </a>
            </div>

            <div className="contact-item">
              <span>Location</span>
              <p>{portfolio.location}</p>
            </div>
          </div>

          <a
            href={`mailto:${portfolio.email}`}
            className="btn btn-primary"
          >
            Say Hello
          </a>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-card card">
            <h3>Find Me Online</h3>

            <div className="social-grid">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >
                    <Icon size={24} />

                    <div>
                      <h4>{social.name}</h4>
                      <span>Open Profile</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;