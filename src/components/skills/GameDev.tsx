const GameDev = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 h-full justify-center">
      <h3 className="text-2xl md:text-5xl 2xl:text-6xl font-bold text-secondary mb-2 text-center">
        Game Development
      </h3>
      <p className="text-sm text-justify md:text-xl 2xl:text-2xl text-gray-300 max-w-[295px] md:max-w-2xl 2xl:max-w-[1000px] mx-auto 2xl:leading-normal">
        Game dev has been a new and strong interest for me. I used and learned
        tools like GameMaker, Godot, Aseprite and Blender along my game making
        journey. Related skills:
      </p>
      <ul className="list-none text-sm md:text-xl 2xl:text-2xl text-gray-300 pl-0 md:pl-8 mb-2 mt-2 max-w-[220px] md:max-w-2xl mx-auto 2xl:space-y-2 text-left">
        <li>
          - 2D game development with{" "}
          <span className="text-gray-500 font-medium">GameMaker Studio 2</span>,{" "}
          <span className="text-gray-500 font-medium">Godot</span>
        </li>
        <li>
          - Pixel art & asset creation using{" "}
          <span className="text-gray-500 font-medium">Aseprite</span>
        </li>
        <li>
          - 3D modeling{" "}
          <span className="text-gray-500 font-medium">Blender</span>
        </li>
        <li>- Level design and playtesting</li>
        <li>- Collaboration with artists and developers</li>
      </ul>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3 mt-4 md:mt-8 justify-center items-center w-full">
        <img
          src="/gms.png"
          alt="GameMaker Studio 2"
          className="h-12 w-12 md:h-14 md:w-14 2xl:h-24 2xl:w-24 rounded-xl bg-[#232531] p-0.5"
        />
        <img
          src="/aseprite.png"
          alt="Aseprite"
          className="h-12 w-12 md:h-14 md:w-14 2xl:h-24 2xl:w-24 rounded-xl bg-[#b1b1b8] p-0.5 md:p-1"
        />
        <img
          src="https://skillicons.dev/icons?i=godot,blender&theme=dark"
          alt="Game Dev Skills"
          className="h-12 md:h-14 2xl:h-24"
        />
      </div>
    </div>
  );
};

export default GameDev;
