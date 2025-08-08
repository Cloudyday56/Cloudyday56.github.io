import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const highlightTech = [
  "platformer mechanics",
  "Challenging level design",
  "death count",
  "art",
  "smooth controls",
];

const features = [
  "Classic platformer mechanics: double jump, wall climbing, gravity change, and more",
  "Challenging level design focused on skillful movement and timing",
  "Total death count is tracked, adding an extra layer of competition to the game",
  "Original art and smooth controls (coyote time and buffers) for engaging gameplay",
];

function highlightFeatureText(text: string) {
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

const GMplatform = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 1. Title */}
      <h3 className="text-3xl font-bold text-secondary text-center">
        GM-platform
      </h3>

      {/* 2. Image with Features Overlay */}
      <div className="relative w-full max-w-2xl">
        <a
          href="https://github.com/Cloudyday56/GM-platform"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img
            src="/GM-platform.png"
            alt="GM-platform preview"
            className="w-full h-auto aspect-[16/6] object-cover rounded-lg shadow hover:opacity-80 transition-opacity border border-base-300"
          />
        </a>
        {/* Toggle features button */}
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="absolute top-4 right-4 bg-primary text-primary-content px-3 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-all z-10"
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
              <ul className="list-disc list-outside space-y-3 pl-6 text-sm text-gray-400 w-full max-w-xs">
                {features.map((f, i) => (
                  <li key={i}>{highlightFeatureText(f)}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2b. Game screenshots gallery */}
      <div className="flex gap-4 mt-2 overflow-x-auto w-full justify-center">
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
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="GM-platform full screenshot"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg border-2 border-base-300"
            onClick={(e) => e.stopPropagation()}
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

      {/* 3. Description Row */}
      <div className="w-full max-w-3xl">
        <p className="text-primary text-base text-justify">
          GM-platform is a pixel art 2D platformer game developed in
          collaboration with two other contributors using GameMaker Studio 2
          (game logic) and Aseprite (pixel art). Players must collect keys and
          reach the end of each level using special movement mechanics.
        </p>
      </div>

      {/* 4. Buttons Row */}
      <div className="flex gap-4 mt-2 justify-center">
        <a
          href="https://github.com/Cloudyday56/GM-platform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline font-semibold"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default GMplatform;
