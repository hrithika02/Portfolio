import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";

const Skills = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const skills = [
    {
      name: "React.js",
      icon: <FaReact size={50} className="text-cyan-400" />,
      experience: "2 months",
      description:
        "Developed multiple responsive SPAs using React Hooks, Context API, and component-based design.",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={50} className="text-yellow-400" />,
      experience: "1.5 years",
      description:
        "Strong grasp of ES6+, DOM manipulation, async programming, and REST API integration.",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={50} className="text-teal-400" />,
      experience: "6 months",
      description:
        "Styled modern UIs with utility-first Tailwind classes and responsive design patterns.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-green-500" />,
      experience: "1 month",
      description:
        "Built scalable backend APIs with Express, handling authentication and database integration.",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={50} className="text-gray-400" />,
      experience: "1 month",
      description:
        "Implemented RESTful API routes, middleware, and error handling for backend logic.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-green-600" />,
      experience: "2 months",
      description:
        "Designed schema models using Mongoose and managed CRUD operations for web apps.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={50} className="text-orange-500" />,
      experience: "2 years",
      description:
        "Structured accessible and SEO-friendly web pages with semantic markup.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
      experience: "2 years",
      description:
        "Created animations, layouts, and responsive designs using Flexbox and Grid.",
    },
  ];

  const certifications = [
    { title: "SQL to MongoDB", image: c1 },
    { title: "Networking Basics", image: c2 },
    { title: "Prompt Engineering", image: c3 },
    { title: "Problem Solving - DSA", image: c4 },
    { title: "SQL Database", image: c5 },
    { title: "Data Structures & Algorithms", image: c6 },
  ];

  return (
    <div className="w-full bg-gray-900 text-gray-300 ">
      {/* 🔹 Skills Section */}
      <section
        id="skills"
        className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-950 text-white px-6 py-20 mt-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                {skill.name}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                <span className="font-semibold text-white">Experience:</span>{" "}
                {skill.experience}
              </p>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔸 Certifications Section - Clickable Full View */}
      <section className="w-full bg-gray-950 py-10 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            My <span className="text-cyan-400">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="group relative bg-gray-800/60 border border-black rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-cyan-500/30 hover:-translate-y-2 transform transition-all duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-60 object-contain bg-gray-900 p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Click to view full certificate
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedCert && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              onClick={() => setSelectedCert(null)}
            >
              <div className="relative p-4 max-w-4xl w-full flex flex-col items-center">
                <button
                  className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-cyan-400 transition"
                  onClick={() => setSelectedCert(null)}
                >
                  &times;
                </button>

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-gray-700"
                />

                <h3 className="mt-6 text-2xl font-semibold text-cyan-400">
                  {selectedCert.title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Skills;
