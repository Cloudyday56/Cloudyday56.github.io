// Fields of interest
// related Skills

// web dev - MERN stack, Next.js, Tailwind CSS
// game dev - Blender, GameMaker, Godot
// SWE - Python, Scikit-learn, Random Forest

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SWE from "./skills/SWE";
import WebDev from "./skills/WebDev";
import GameDev from "./skills/GameDev";
import Other from "./skills/Other";

// skill sections to display
const sections = [
  { key: "web", component: <WebDev /> },
  { key: "game", component: <GameDev /> },
  { key: "swe", component: <SWE /> },
  { key: "other", component: <Other /> },
];

const Skills = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<number | null>(null);

  // Scroll handler for wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent default scroll within skills sections
      const atFirst = currentIdx === 0;
      const atLast = currentIdx === sections.length - 1;
      if (scrollTimeout.current) {
        e.preventDefault();
        return;
      }
      // Set timeout immediately to block further scrolls
      let moved = false;
      if (e.deltaY > 0 && !atLast) {
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setCurrentIdx((idx) => Math.min(idx + 1, sections.length - 1));
        moved = true;
      } else if (e.deltaY < 0 && !atFirst) {
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setCurrentIdx((idx) => Math.max(idx - 1, 0));
        moved = true;
      }
      // Always prevent default
      if (moved) {
        e.preventDefault();
      }
    };
    const ref = containerRef.current;
    if (ref) ref.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (ref) ref.removeEventListener("wheel", handleWheel);
    };
  }, [currentIdx]);

  return (
    <div
      id="skills"
      ref={containerRef}
      className="flex flex-col min-h-[60vh] max-w-7xl mx-auto bg-base-800 px-4 w-full gap-12"
      tabIndex={0}
    >
      <div className="pt-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Interests & Skills Title */}
          <div className="md:w-1/3 w-full flex-shrink-0">
            <p className="font-montserrat text-6xl text-primary mb-8 md:mb-0 md:sticky md:top-32">
              Interests & Skills
            </p>
          </div>
          {/* Right: Animated Skills Section + Dot Indicator */}
          <div className="md:w-2/3 w-full flex flex-col gap-10 min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={sections[currentIdx].key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full"
              >
                {sections[currentIdx].component}
              </motion.div>
            </AnimatePresence>
            {/* Dot Indicator */}
            <div className="flex justify-center items-center gap-3 mt-8 z-10">
              {sections.map((section, idx) => (
                <button
                  key={section.key}
                  aria-label={`Go to ${section.key} skills`}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-200
                    ${
                      idx === currentIdx
                        ? "bg-primary border-primary scale-125"
                        : "bg-base-200 border-base-300 hover:border-primary"
                    }`}
                  style={{ outline: "none" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
