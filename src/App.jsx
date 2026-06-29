// App.jsx
import "./styles/App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;