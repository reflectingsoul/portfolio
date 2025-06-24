import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Meme Generator</h3>
          <p className="text-gray-400 mb-4">A fun React app that fetches random Indian memes using an API. Styled with Tailwind CSS.</p>
          <a href="#" className="text-pink-400 hover:underline">Live Demo</a>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">POS System</h3>
          <p className="text-gray-400 mb-4">Inventory & POS management system built with Node.js and MongoDB. UI made with React.</p>
          <a href="#" className="text-pink-400 hover:underline">View Project</a>
        </div>
      </div>
    </section>
  );
}
