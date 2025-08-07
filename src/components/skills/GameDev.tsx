const GameDev = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-secondary">Game Development</h3>
      <p className="text-base text-gray-300">
        Game dev has been a new and strong interest for me. I used and learned
        tools like GameMaker, Godot, Aseprite and Blender along my game making
        journey. Related skills:
      </p>
      <ul className="list-none text-base text-gray-300 pl-8 mb-2 mt-2">
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
      <div className="flex flex-row gap-2 mt-2">
        <img
          src="/gms.png"
          alt="GameMaker Studio 2"
          className="h-12 w-12 rounded-xl bg-[#232531] p-0.5"
        />
        <img
          src="/aseprite.png"
          alt="Aseprite"
          className="h-12 w-12 rounded-xl bg-[#b1b1b8] p-1"
        />
        <img
          src="https://skillicons.dev/icons?i=godot,blender&theme=dark"
          alt="Game Dev Skills"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default GameDev;
