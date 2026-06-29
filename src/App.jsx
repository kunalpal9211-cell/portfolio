// App.jsx
import "./styles/App.css";
import Experience from "./sections/Experience";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./components/layout/Footer";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Experience/>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;