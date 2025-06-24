import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-400 mb-6">Want to work together or just say hi? Drop me a message!</p>
      <a href="mailto:sachin@example.com" className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white font-semibold transition">Email Me</a>
    </section>
  );
}
