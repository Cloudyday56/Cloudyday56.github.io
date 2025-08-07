import { useState } from "react";

const features = [
  "Classic platformer mechanics: double jump, wall climbing, gravity change, and more",
  "Challenging level design focused on skillful movement and timing",
  "Total death count is tracked, adding an extra layer of competition to the game",
  "Original art and smooth controls (coyote time and buffers) for engaging gameplay",
];

const GMplatform = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 1. Title */}
      <h3 className="text-3xl font-bold text-secondary text-center">
        GM-platform
      </h3>

      {/* 2. Image and Features Row */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        <a
          href="https://github.com/Cloudyday56/GM-platform"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:w-2/5 w-full max-w-xl"
        >
          <img
            src="/GM-platform.png"
            alt="GM-platform preview"
            className="w-full h-auto aspect-video object-cover rounded-lg shadow hover:opacity-80 transition-opacity border border-base-300"
          />
        </a>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm text-gray-400 bg-base-200 rounded-lg p-4 w-full md:w-2/5 max-w-md">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
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
