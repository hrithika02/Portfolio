import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit (no backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate a delay as if contacting a server
    setTimeout(() => {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gray-950 text-white flex items-center justify-center px-6 py-20 mt-20 md:mt-0"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Have a project in mind or just want to say hello? <br />
            Drop me a message and I’ll get back to you as soon as possible!
          </p>

          <div className="mt-6 space-y-3 text-gray-300">
            <p>hrithikasridhar2@gmail.com</p>
            <p>Coimbatore, India</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </div>
    </section>
  );
}
