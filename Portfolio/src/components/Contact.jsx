import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_50wig1a",   // 🔹 Replace with your EmailJS service ID
        "template_fktkmw5",  // 🔹 Replace with your EmailJS template ID
        formRef.current,
        "0cLr9NTpuk6k4NMMM"    // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message, please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-10">
          Got a project in mind or just want to say hi? Fill out the form below!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1e293b] p-8 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-700 to-purple-900"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-5 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
