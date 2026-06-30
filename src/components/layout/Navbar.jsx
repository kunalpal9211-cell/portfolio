import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import portfolio from "../../data/portfolio";
import "../../styles/Navbar.css";

const navLinks = [
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Journey", id: "experience" },
  { title: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["hero", ...navLinks.map((item) => item.id)];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "hero";

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (!el) return;

        if (window.scrollY >= el.offsetTop - 120) {
          current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container navbar-container">
          <button
            className="logo"
            onClick={() => scrollTo("hero")}
          >
            {portfolio.name}
          </button>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={active === link.id ? "nav-active" : ""}
              >
                {link.title}
              </button>
            ))}
          </nav>

          <a
            href={portfolio.resume}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
              >
                {link.title}
              </button>
            ))}

            <a
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;