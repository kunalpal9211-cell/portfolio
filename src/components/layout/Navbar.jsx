import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Navbar.jsx
import "../../styles/Navbar.css";

const navLinks = [
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["hero", ...navLinks.map((item) => item.id)];

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;

        if (window.scrollY >= top) {
          current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container navbar-container">
          <button
            className="logo"
            onClick={() => scrollToSection("hero")}
          >
            Kunal
          </button>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={active === link.id ? "nav-active" : ""}
                onClick={() => scrollToSection(link.id)}
              >
                {link.title}
              </button>
            ))}
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
              >
                {link.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;