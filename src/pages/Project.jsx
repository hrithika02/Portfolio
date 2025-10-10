import bulkmailer from "../assets/bulkmailer.png";
import ecommerce from "../assets/ecommerce.png";
import movieapp from "../assets/movieapp.png";
import netflixclone from "../assets/netflixclone.png";
import appleclone from "../assets/appleclone.png";
import weatherapp from "../assets/weatherapp.png";

export default function SkillsProjects() {

  const projectList = [
    {
      title: "E-Commerce Website",
      description: "Fully responsive e-commerce site with product filters and interactive UI.",
      tech: ["React", "TailwindCSS", "JavaScript"],
      image:ecommerce,
      link: "https://ecommerce-f-6r8l.onrender.com"
    },
    {
      title: "Movie App (API)",
      description: "Movie info app fetching data from TMDB API with search and filter functionality.",
      tech: ["React", "API", "JavaScript"],
      image:movieapp,
      link: "https://movie-app-zeta-tawny.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Real-time weather app using OpenWeatherMap API with responsive design.",
      tech: ["React", "API", "CSS"],
      image: weatherapp,
      link: "https://weather-app-sepia-delta-78.vercel.app/"
    },
     {
      title: "Bulk Mailer",
      description: "Full-stack email automation app with Excel integration and real-time delivery tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: bulkmailer,
      link: "https://bulk-mail-application-3.onrender.com/"
    },
    {
      title: "Netflix Login Clone",
      description: "Clone of Netflix login page with smooth animations and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: netflixclone,
      link: "https://apple-clone-lovat-ten.vercel.app/"
    },
    {
      title:"Apple Landing Page Clone",
      description: "Responsive clone of Apple's landing page with modern design elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: appleclone,
      link: "https://your-appleclone-link.com"
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-gray-300 mt-20">
      {/* Projects Section */}
      <section id="projects" className="w-full py-14 px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-500/40 transition transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-gray-400 hover:text-cyan-400 hover:underline cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-cyan-300 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
