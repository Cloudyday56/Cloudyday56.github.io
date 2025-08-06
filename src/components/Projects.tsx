// Projects
// StockMounts
// GM-platform
// other side projects

import { useState } from "react";

const Projects = () => {

  // Modal state for image preview (GM-platform)
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 py-16 w-full">
      <p className="font-montserrat text-6xl text-primary max-w-3xl mb-8">
        Recent Projects
      </p>
      {/* Top: Two main project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
          <h3 className="text-2xl font-bold text-primary mb-2">StockMounts</h3>
          <div className="w-full flex justify-center mb-4">
            <a
              href="https://stockmounts.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <img
                src="/Stockmounts.png"
                alt="StockMounts preview"
                className="w-full h-full object-cover rounded-lg shadow hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="text-primary mb-4">
            <p className="mb-4 text-justify">
              StockMounts is a full-stack web application for stock prediction
              and trading note management, developed with the MERN stack. It
              uses machine learning models to generate stock forecasts and
              provides secure, authenticated user accounts.
            </p>
            <ul className="list-disc list-outside space-y-2 mt-4 pl-4 text-sm text-gray-400">
              <li>
                Developed with MongoDB, Express, React, and Node.js (MERN stack)
              </li>
              <li>
                Secure user authentication, including GitHub OAuth integration
              </li>
              <li>
                Stock price prediction using machine learning models
                (scikit-learn, Random Forest) trained on Yahoo Finance datasets
              </li>
              <li>Personal trading note creation, editing, and management</li>
              <li>Modern, responsive UI built with Tailwind CSS</li>
            </ul>
          </div>
          <div className="flex gap-3 mt-auto">
            <a
              href="https://stockmounts.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary font-semibold"
            >
              Website
            </a>
            <a
              href="https://github.com/Cloudyday56/StockMounts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline font-semibold"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
          <h3 className="text-2xl font-bold text-primary mb-2">GM-platform</h3>
          <div className="w-full flex justify-center mb-4">
            <a
              href="https://github.com/Cloudyday56/GM-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <img
                src="/GM-platform.png"
                alt="GM-platform preview"
                className="w-full h-full object-cover rounded-lg shadow hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="text-gray-300 mb-4">
            <p className="mb-4 text-justify">
              GM-platform is a pixel art 2D platformer game developed in
              collaboration with two other contributors using GameMaker Studio 2
              (game logic) and Aseprite (pixel art). Players must collect keys
              and reach the end of each level using special movement mechanics.
            </p>
            <ul className="list-disc list-outside space-y-2 mt-4 pl-4 text-sm text-gray-400">
              <li>
                Classic platformer mechanics: double jump, wall climbing, and
                gravity change, and more
              </li>
              <li>
                Challenging level design focused on skillful movement and timing
              </li>
              <li>
                Total death count is tracked, adding an extra layer of
                competition to the game
              </li>
              <li>
                Original art and smooth controls (coyote time and buffers) for
                engaging gameplay
              </li>
            </ul>
            {/* Game screenshots gallery */}
            <div className="flex gap-4 mt-6 overflow-x-auto">
              {["GM4.png", "GM2.png", "GM3.png"].map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setModalImg(`/${img}`)}
                  className="focus:outline-none"
                  style={{ background: "none", border: "none", padding: 0 }}
                  type="button"
                >
                  <img
                    src={`/${img}`}
                    alt={`GM-platform screenshot ${idx + 1}`}
                    className="w-48 h-32 object-contain rounded-lg shadow border border-base-300 bg-base-100"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            {/* Modal for image preview */}
            {modalImg && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={() => setModalImg(null)} // Close modal on background click
              >
                <img
                  src={modalImg}
                  alt="GM-platform full screenshot"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg border-2 border-base-300"
                  onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
                  style={{ background: "#222" }}
                />
                <button
                  className="absolute top-4 right-4 text-primary text-3xl font-bold bg-black bg-opacity-70 rounded-full px-3 py-1 hover:bg-opacity-90"
                  onClick={() => setModalImg(null)}
                  aria-label="Close preview"
                  type="button"
                >
                  ×
                </button>
              </div>
            )}
          </div>
          <div className="flex gap-3 mt-auto">
            <a
              href="https://github.com/Cloudyday56/GM-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline font-semibold"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
      {/* Bottom: List of smaller projects */}
      <div className="flex flex-col gap-4">
        {/* Side Project 1 */}
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-lg font-semibold text-primary mb-2">
              FitBuddy - Fitness AI Agent
            </span>
            <p className="text-gray-300 mb-4">
              An AI-powered fitness assistant that helps users plan and track
              workouts.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://fitbuddy-ai.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs btn-primary font-semibold"
              >
                Website
              </a>
              <a
                href="https://github.com/Cloudyday56/FitBuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs btn-outline font-semibold"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0 w-full md:w-40">
            <img
              src="/Fitbuddy1.png"
              alt="FitBuddy preview"
              className="w-full md:w-40 h-24 object-cover rounded-lg shadow"
            />
          </div>
        </div>
        {/* Side Project 2 */}
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-lg font-semibold text-primary mb-2">
              TeaChat - Chatting Web App
            </span>
            <p className="text-gray-300 mb-4">
              A real-time chat web application for group and private messaging.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://teachat.onrender.com" // Replace with actual website
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs btn-primary font-semibold"
              >
                Website
              </a>
              <a
                href="https://github.com/Cloudyday56/TeaChat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs btn-outline font-semibold"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0 w-full md:w-40">
            <img
              src="/Teachat1.png"
              alt="TeaChat preview"
              className="w-full md:w-40 h-24 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
