import { useState } from "react";

const GMplatform = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
      <h3 className="text-2xl font-bold text-secondary mb-2">GM-platform</h3>
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
          (game logic) and Aseprite (pixel art). Players must collect keys and
          reach the end of each level using special movement mechanics.
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
            Total death count is tracked, adding an extra layer of competition
            to the game
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
  );
};

export default GMplatform;
