import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen w-full bg-gray-950 text-white flex items-center justify-center px-6 mt-20 md:mt-0"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello, It’s Me <br />
              <span className="text-cyan-400 text-4xl">Hrithika Sridhar</span>
            </h2>
            <p className="mt-4 text-2xl font-semibold text-gray-300">
              MERN Stack Developer
            </p>
            <p className="mt-4 max-w-md text-gray-400">
              Building modern web applications with MongoDB, Express, React, and Node.js.
              Passionate about full-stack development, clean UI, smooth UX, and responsive web experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Download CV */}
              <a
                href="/RESUME.pdf" // replace with your CV path
                download
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-center"
              >
                Download CV
              </a>

              {/* Contact Me */}
              <a href="/contact" className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition">
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex gap-6 text-3xl justify-center md:justify-start text-gray-300">
  <a
    href="https://www.linkedin.com/in/hrithikasridhar/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition-colors"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/hrithika02"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition-colors"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.instagram.com/_._hrithi_._/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition-colors"
  >
    <FaInstagram />
  </a>
</div>

          </div>

          {/* Right Side - Profile */}
          <div className="relative mt-12 md:mt-0 flex justify-center items-center">
            {/* Glowing Background */}
            <div className="absolute w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-40 animate-pulse"></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Profile"
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-xl transform hover:scale-110 hover:-translate-y-3 transition duration-500"
            />
          </div>

        </div>
      </section>



    </>
  );
}
