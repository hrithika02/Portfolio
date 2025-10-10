import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/HeroSection.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Project.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home/index.html" element={<Hero />} />
        <Route path="/about/index.html" element={<About />} />
        <Route path="/projects/index.html" element={<Projects />} />
        <Route path="/contact/index.html" element={<Contact />} />
        <Route path="/skills/index.html" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
