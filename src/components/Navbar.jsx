import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 z-50 shadow-md">
      <div className="p-6 flex justify-end items-center max-w-7xl mx-auto text-2xl mt-5">

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {["Home", "About","Skills","Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="relative hover:text-cyan-400 transition duration-300"
            >
              {item}
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-300 px-6 py-4 space-y-4">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="block hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
