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
              I have experience in full stack web development, where I work with
              APIs, databases and UI/UX design. Related skills:
            </p>
            <ul className="list-none text-base text-gray-300 pl-8 mb-2 mt-2">
              <li>
                - Frontend frameworks (
                <span className="text-gray-500 font-medium">React</span>,
                <span className="text-gray-500 font-medium">Vite</span>,
                <span className="text-gray-500 font-medium">Next.js</span>)
              </li>
              <li>
                - UI/UX design with{" "}
                <span className="text-gray-500 font-medium">Tailwind CSS</span>,{" "}
                <span className="text-gray-500 font-medium">DaisyUI</span>
              </li>
              <li>
                - Backend APIs with{" "}
                <span className="text-gray-500 font-medium">Node.js</span>,{" "}
                <span className="text-gray-500 font-medium">Express</span>,{" "}
                <span className="text-gray-500 font-medium">REST APIs</span>
              </li>
              <li>
                - User & data management (
                <span className="text-gray-500 font-medium">Convex</span>,{" "}
                <span className="text-gray-500 font-medium">MongoDB</span>,{" "}
                <span className="text-gray-500 font-medium">Clerk</span>)
              </li>
              <li>
                - Production & Deployment (
                <span className="text-gray-500 font-medium">Render</span>,{" "}
                <span className="text-gray-500 font-medium">Vercel</span>,{" "}
                <span className="text-gray-500 font-medium">Docker</span>)
              </li>
            </ul>
            <div className="flex flex-row gap-2 mt-2">
              <img
                src="https://skillicons.dev/icons?i=react,nextjs,vite,tailwind,express,nodejs,postman&theme=dark"
                alt="Web Dev Skills"
                className="h-12"
              />
              <img
                src="/Convex.png"
                alt="Convex"
                className="h-12 w-12 rounded-xl bg-[#fbfcfc] p-1"
              />
              <img
                src="/Clerk.png"
                alt="Clerk"
                className="h-12 w-12 rounded-xl bg-[#fefefe] p-1"
              />
              <img
                src="https://skillicons.dev/icons?i=mongodb,docker&theme=dark"
                alt="Web Dev Skills 2"
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
              learned tools like GameMaker, Godot, Aseprite and Blender along my
              game making journey. Related skills:
            </p>
            <ul className="list-none text-base text-gray-300 pl-8 mb-2 mt-2">
              <li>
                - 2D game development with{" "}
                <span className="text-gray-500 font-medium">
                  GameMaker Studio 2
                </span>
                , <span className="text-gray-500 font-medium">Godot</span>
              </li>
              <li>
                - Pixel art & asset creation using{" "}
                <span className="text-gray-500 font-medium">Aseprite</span>
              </li>
              <li>
                - 3D modeling {" "}
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
                src="https://skillicons.dev/icons?i=py,java,github,sklearn&theme=dark"
                alt="SWE Skills"
                className="h-12"
              />
            </div>
          </div>

          {/* Other */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-secondary">Other</h3>
            <p className="text-base text-gray-300">
              I am a fast learner, collaborative team member, and creative
              problem-solver. I follow best practices when developing and enjoy
              exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
