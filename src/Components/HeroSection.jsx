import React from "react";

export default function HeroSection() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Sachin Kushwaha</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">Full Stack Developer & MERN Stack Enthusiast</p>
      <div className="space-x-4">
        <a href="#projects" className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white font-semibold transition">See Projects</a>
        <a href="#contact" className="border border-pink-600 hover:bg-pink-600 px-6 py-2 rounded text-white font-semibold transition">Contact Me</a>
        <a href="https://github.com/reflectingsoul" target="_blank" className="underline text-gray-300 hover:text-pink-400 font-medium transition">GitHub</a>
      </div>
    </section>
  );
}
