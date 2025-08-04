// Fields of interest
// related Skills

// web dev - MERN stack, Next.js, Tailwind CSS
// game dev - Blender, GameMaker, Godot
// AI - Python, Scikit-learn, Random Forest

const Skills = () => {
  return (
    <div className="flex flex-col min-h-[60vh] max-w-7xl mx-auto bg-base-800 px-0 py-8 w-full gap-12">
      <div className="pl-8 pt-20">
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
              {/* Skill images go here */}
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
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
            <div className="flex flex-row gap-4 mt-2">
              {/* Skill images go here */}
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
            </div>
          </div>
          {/* SWE */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-secondary">SWE</h3>
            <p className="text-base text-gray-300">
              I've developed several programming skills in-school as well as through personal
              projects.
              Machine learning and AI has been an ongoing interest of mine, and
              I've been learning related concepts continuously.
            </p>
            <div className="flex flex-row gap-4 mt-2">
              {/* Skill images go here */}
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
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
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
              <div className="w-12 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-500">
                img
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
