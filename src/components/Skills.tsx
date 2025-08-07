// Fields of interest
// related Skills

// web dev - MERN stack, Next.js, Tailwind CSS
// game dev - Blender, GameMaker, Godot
// SWE - Python, Scikit-learn, Random Forest

import { useState } from "react";
import SWE from "./skills/SWE";
import WebDev from "./skills/WebDev";
import GameDev from "./skills/GameDev";
import Other from "./skills/Other";

const Skills = () => {
  const [currentSection, setCurrentSection] = useState("web");

  return (
    <div
      id="skills"
      className="flex flex-col min-h-[60vh] max-w-7xl mx-auto bg-base-800 px-4 w-full gap-12"
    >
      <div className="pt-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Interests & Skills Title */}
          <div className="md:w-1/3 w-full flex-shrink-0">
            <p className="font-montserrat text-6xl text-primary mb-8 md:mb-0 md:sticky md:top-32">
              Interests & Skills
            </p>
          </div>
          {/* Right: Skills Sections */}
          <div className="md:w-2/3 w-full flex flex-col gap-10">
            <WebDev />
            <GameDev />
            <SWE />
            <Other />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
