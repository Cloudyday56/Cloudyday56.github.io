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
      {/* Main project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
          <h3 className="text-2xl font-bold text-secondary mb-2">
            StockMounts
          </h3>
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
              and trading note management. It uses machine learning models to
              generate stock forecasts and provides secure, authenticated user
              accounts.
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
          <h3 className="text-2xl font-bold text-secondary mb-2">
            GM-platform
          </h3>
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
      {/* Side projects */}
      <div className="flex flex-col gap-4">
        {/* Fitbuddy */}
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-2xl font-semibold text-secondary mb-2">
              FitBuddy - Fitness AI Agent
            </span>
            <div className="text-gray-300 mb-4">
              <p className="max-w-[70%]">
                FitBuddy is an AI-powered fitness assistant developed with
                Next.js. It collects user information through an interactive
                "phone call" and generates personalized workout and diet plans
                tailored to each user's needs.
              </p>
              <ul className="list-disc list-outside space-y-1 mt-2 pl-4 text-sm text-gray-400">
                <li>User authentication and management via Clerk and Convex</li>
                <li>
                  Interactive AI "phone call" to collect user fitness goals and
                  preferences
                </li>
                <li>
                  Generates customized workout and nutrition plans using AI
                </li>
                <li>Clean, responsive UI for easy plan tracking</li>
              </ul>
            </div>
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
        {/* TeaChat */}
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-2xl font-semibold text-secondary mb-2">
              TeaChat - Chatting Web App
            </span>
            <div className="text-gray-300 mb-4">
              <p className="max-w-[70%]">
                TeaChat is a real-time chat web application built with the MERN
                stack. Users can sign in, chat privately with other users, and
                enjoy instant message updates powered by socket.io.
              </p>
              <ul className="list-disc list-outside space-y-1 mt-2 pl-4 text-sm text-gray-400">
                <li>User authentication and secure sign-in</li>
                <li>Private one-on-one chat between users</li>
                <li>Real-time messaging and updates using socket.io</li>
                <li>Simple, responsive UI for seamless chatting</li>
              </ul>
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://teachat.onrender.com"
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
