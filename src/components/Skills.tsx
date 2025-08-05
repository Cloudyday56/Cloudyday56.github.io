// Fields of interest
// related Skills

// web dev - MERN stack, Next.js, Tailwind CSS
// game dev - Blender, GameMaker, Godot
// AI - Python, Scikit-learn, Random Forest

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col min-h-[60vh] max-w-7xl mx-auto bg-base-800 px-4 w-full gap-12"
    >
      <div className="pt-20">
        <p className="font-montserrat text-6xl text-primary max-w-3xl mb-8">
          Interests & Skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Web Development */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-secondary">
              Web Development
            </h3>
            <p className="text-base text-gray-300">
              I'm interested in full stack web development, where I work with
              databases and UI/UX design. I've developed several skills while
              building web apps:
            </p>
            <div className="flex flex-row gap-4 mt-2">
              <img
                src="https://skillicons.dev/icons?i=react,express,nodejs,nextjs,vite,tailwind,mongodb,postman,docker&theme=dark"
                alt="Web Dev Skills"
                className="h-12"
              />
            </div>
          </div>

          {/* Game Development */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-secondary">
              Game Development
            </h3>
            <p className="text-base text-gray-300">
              Game dev has been a new and strong interest for me. I used and
              learned tools like GameMaker, Godot, and Aseprite along my game
              making journey.
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <img
                src="/gms2.png"
                alt="GameMaker Studio 2"
                className="h-12 w-12 rounded-xl bg-[#232531] p-1"
              />
              <img
                src="/aseprite.png"
                alt="Aseprite"
                className="h-12 w-12 rounded-xl bg-[#232531] p-1"
              />
              <img
                src="https://skillicons.dev/icons?i=godot,unity&theme=dark"
                alt="Game Dev Skills"
                className="h-12"
              />
            </div>
          </div>

          {/* SWE */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-secondary">SWE</h3>
            <p className="text-base text-gray-300">
              I've developed several programming skills in-school as well as
              through personal projects. Machine learning and AI has been an
              ongoing interest of mine, and I've been learning related concepts
              continuously.
            </p>
            <div className="flex flex-row gap-4 mt-2">
              <img
                src="https://skillicons.dev/icons?i=py,java,sklearn&theme=dark"
                alt="SWE Skills"
                className="h-12"
              />
            </div>
          </div>

          {/* Other */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-secondary">Other</h3>
            <p className="text-base text-gray-300">
              Recently, I got into the world of 3D modeling and learned Blender.
            </p>
            <div className="flex flex-row gap-4 mt-2">
              {/* Skill images go here */}
              <img
                src="https://skillicons.dev/icons?i=blender&theme=dark"
                alt="Other Skills"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
