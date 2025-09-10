import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Meme Generator */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Meme Generator</h3>
          <p className="text-gray-400 mb-4">
            A fun React app that fetches random Indian memes using an API. Styled with Tailwind CSS.
          </p>
          <a
            href="https://meme-website-livid.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            Live Demo
          </a>
        </div>

        {/* POS System */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">POS System</h3>
          <p className="text-gray-400 mb-4">
            Inventory & POS management system built with Node.js and MongoDB. UI made with React.
          </p>
          <a
            href="https://pos-project-kappa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Stock Edge */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Stock Edge</h3>
          <p className="text-gray-400 mb-4">
            A dynamic stock data visualizer with pagination built in React. Displays real-time market insights using APIs.
          </p>
          <a
            href="https://stock-edge.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            Explore Project
          </a>
        </div>

        {/* CCTV Dashboard */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">CCTV Dashboard</h3>
          <p className="text-gray-400 mb-4">
            A real-time CCTV monitoring dashboard built with React. Allows viewing multiple camera feeds, managing alerts, and controlling PTZ cameras.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
