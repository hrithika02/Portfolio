// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Hrithika Sridhar. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
