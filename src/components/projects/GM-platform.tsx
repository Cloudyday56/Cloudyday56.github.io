const GMplatform = () => {
  return (
      <div className="w-full flex flex-col items-center gap-4 bg-base-200 p-6 rounded-2xl border border-base-300 shadow-xl hover:border-secondary/40 transition-all duration-300 h-full justify-between">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center font-montserrat">
            GM-platform
          </h3>

          <div className="w-full overflow-hidden rounded-xl border border-base-300">
            <a
                href="https://github.com/Cloudyday56/GM-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full overflow-hidden"
            >
              <img
                  src="/GM-platform.png"
                  alt="GM-platform preview"
                  className="w-full h-auto aspect-[16/10] object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          <p className="text-primary text-sm md:text-base text-justify leading-relaxed">
            GM-platform is a pixel art 2D platformer game developed in
            collaboration with two other contributors using GameMaker Studio 2
            (game logic) and Aseprite (pixel art). Players must collect keys and
            reach the end of each level using special movement mechanics.
          </p>
        </div>

        <div className="flex gap-4 mt-4 justify-center w-full">
          <a
              href="https://github.com/Cloudyday56/GM-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm md:text-base font-semibold rounded-lg bg-secondary text-primary-content hover:opacity-90 transition-all duration-200"
          >
            Repo
          </a>
        </div>
      </div>
  );
};

export default GMplatform;