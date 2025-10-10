import profile from "../assets/profile.png";
export default function About() {
  return (
    <div className="w-full h-screen bg-gray-950 text-gray-300 mt-20 py-8">

      {/* About Section */}
      <section
        id="about"
        className="w-full h-70vh flex items-center justify-center px-6 py-12"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Title & Intro */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-lg leading-relaxed">
              I’m <span className="text-white font-semibold">Hrithika</span>, a passionate
              <span className="text-cyan-400"> MERN Stack Developer</span> who loves building
              dynamic, full-stack web applications with seamless performance.
            </p>
            <p className="mt-4 text-gray-400">
              I specialize in developing scalable and responsive apps using
              <span className="text-white font-medium"> MongoDB, Express, React,</span> and
              <span className="text-white font-medium"> Node.js</span>. My goal is to craft
              smooth user experiences with clean design and efficient backend logic.
            </p>
          </div>

          {/* Right Side - Profile Image */}
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

          {/* Cards Section */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Skills</h3>
              <p className="text-sm text-gray-400">
                React, JavaScript, TailwindCSS, Node.js
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Hobbies</h3>
              <p className="text-sm text-gray-400">
                Design, Reading, Exploring new tech
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Education</h3>
              <p className="text-sm text-gray-400">
                B.E. in Computer Science <br /> (SKCET)
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Experience</h3>
              <p className="text-sm text-gray-400">
                Built full-stack web applications using the MERN stack with a focus on
                clean design and smooth performance.
              </p>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
