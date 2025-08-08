import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const highlightTech = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "GitHub OAuth",
  "scikit-learn",
  "Random Forest",
  "Tailwind CSS",
];

const features = [
  "Developed with MongoDB, Express, React, and Node.js (MERN stack)",
  "Secure user authentication, including GitHub OAuth integration",
  "Stock price prediction using machine learning models (scikit-learn, Random Forest) trained on Yahoo Finance datasets",
  "Personal trading note creation, editing, and management",
  "Modern, responsive UI built with Tailwind CSS",
];

function highlightFeatureText(text: string) {
  // Replace tech keywords with highlighted spans
  let result: (string | React.ReactNode)[] = [text];
  highlightTech.forEach((tech) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const split = part.split(tech);
      if (split.length === 1) return [part];
      const arr: (string | React.ReactNode)[] = [];
      split.forEach((seg, i) => {
        arr.push(seg);
        if (i < split.length - 1) {
          arr.push(
            <span className="text-primary font-semibold" key={tech + i}>
              {tech}
            </span>
          );
        }
      });
      return arr;
    });
  });
  return result;
}

const StockMounts = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 1. Title */}
      <h3 className="text-3xl 2xl:text-5xl font-bold text-secondary text-center">
        StockMounts
      </h3>

      {/* 2. Image */}
      <div className="relative w-full max-w-2xl 2xl:max-w-4xl">
        <a
          href="https://stockmounts.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img
            src="/Stockmounts.png"
            alt="StockMounts preview"
            className="w-full h-auto aspect-[16/10] object-cover rounded-lg shadow hover:opacity-80 transition-opacity border border-base-300"
          />
        </a>

        {/* Toggle features button */}
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="absolute top-4 right-4 bg-primary text-primary-content 2xl:text-xl px-3 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-all z-10"
        >
          {showFeatures ? "Hide features" : "Click for more"}
        </button>

        {/* Features Overlay */}
        <AnimatePresence>
          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 h-full w-full md:w-1/2 bg-base-200/90 flex items-center justify-center p-4 rounded-lg backdrop-blur-sm"
            >
              <ul className="list-disc list-outside space-y-3 pl-6 text-sm 2xl:text-lg text-gray-400 w-full max-w-xs 2xl:max-w-md">
                {features.map((f, i) => (
                  <li key={i}>{highlightFeatureText(f)}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Description Row */}
      <div className="w-full max-w-3xl 2xl:max-w-5xl">
        <p className="text-primary text-base text-justify 2xl:text-2xl 2xl:leading-normal">
          StockMounts is a full-stack web application for stock prediction and
          trading note management. It uses machine learning models to generate
          stock forecasts and provides secure, authenticated user accounts.
        </p>
      </div>

      {/* 4. Buttons Row */}
      <div className="flex gap-4 mt-2 justify-center 2xl:gap-8">
        <a
          href="https://stockmounts.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary font-semibold 2xl:px-8 2xl:text-2xl"
        >
          Website
        </a>
        <a
          href="https://github.com/Cloudyday56/StockMounts"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary font-semibold 2xl:px-8 2xl:text-2xl"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default StockMounts;
