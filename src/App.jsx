import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 sticky top-0 bg-[#0f0f0f]/80 backdrop-blur-md z-50">
        <h1 className="text-3xl font-bold text-green-400">
          {"<Kunal />"}
        </h1>

        <div className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-5">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Kunal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-2xl text-green-400"
        >
          Aspiring Software Developer
        </motion.p>

        <p className="mt-4 text-gray-300 max-w-2xl text-lg">
          Java • DSA • MERN Stack • React Developer
        </p>

        <div className="flex gap-6 mt-8 text-4xl">
          <a
            href="https://github.com/kunalpal9211-cell"
            target="_blank"
          >
            <FaGithub className="hover:text-green-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/kunal-pal-0ab401321"
            target="_blank"
          >
            <FaLinkedin className="hover:text-green-400 transition" />
          </a>

          <a
            href="https://leetcode.com/u/Kunalfoxy/"
            target="_blank"
          >
            <SiLeetcode className="hover:text-green-400 transition" />
          </a>
        </div>

        <a
          href="#projects"
          className="mt-10 px-8 py-4 bg-green-400 text-black rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          View Projects
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-6 max-w-5xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-green-400 mb-10 text-center">
          About Me
        </h2>

        <div className="bg-[#1a1a1a] p-8 rounded-3xl shadow-lg">
          <p className="text-lg leading-9 text-gray-300">
            I’m a BTech student at Delhi Technological University
            passionate about Data Structures & Algorithms and
            full-stack web development.
          </p>

          <p className="text-lg leading-9 text-gray-300 mt-6">
            I enjoy building responsive modern applications,
            improving problem-solving skills, and learning scalable
            technologies.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-6 rounded-2xl">
              <h3 className="text-2xl text-green-400 font-bold">
                Education
              </h3>

              <p className="mt-4 text-gray-300">
                Delhi Technological University
              </p>

              <p className="text-gray-400">
                CGPA: 8.0
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-2xl">
              <h3 className="text-2xl text-green-400 font-bold">
                Skills
              </h3>

              <p className="mt-4 text-gray-300">
                Java, DSA, React, Node.js,
                Express.js, MongoDB,
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 px-6"
      >
        <h2 className="text-5xl font-bold text-center text-green-400 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-[#1a1a1a] p-8 rounded-3xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold">
              Food Delivery App
            </h3>

            <p className="mt-6 text-gray-300 leading-8">
              Full-stack MERN food delivery application with
              authentication, cart system, and backend APIs.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                MongoDB
              </span>

              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                Express
              </span>

              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                React
              </span>

              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                Node.js
              </span>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-3xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold">
              Chat Application
            </h3>

            <p className="mt-6 text-gray-300 leading-8">
              Real-time chat application using Socket.IO and
              Node.js focused on backend communication concepts.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                Socket.IO
              </span>

              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                Node.js
              </span>

              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                Express
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6"
      >
        <h2 className="text-5xl font-bold text-center text-green-400">
          Contact
        </h2>

        <div className="max-w-3xl mx-auto mt-16 bg-[#1a1a1a] p-10 rounded-3xl">

          <div className="space-y-6 text-center">
            <p className="text-2xl">
              📧 kunalpal9211@gmail.com
            </p>

            <p className="text-2xl">
              📱 8796909483
            </p>
          </div>

          <div className="flex justify-center gap-8 mt-10 text-4xl">
            <a
              href="https://github.com/kunalpal9211-cell"
              target="_blank"
            >
              <FaGithub className="hover:text-green-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-pal-0ab401321"
              target="_blank"
            >
              <FaLinkedin className="hover:text-green-400 transition" />
            </a>

            <a
              href="https://leetcode.com/u/Kunalfoxy/"
              target="_blank"
            >
              <SiLeetcode className="hover:text-green-400 transition" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;