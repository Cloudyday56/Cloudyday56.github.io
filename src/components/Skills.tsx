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
        // scroll down
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setCurrentIdx((idx) => Math.min(idx + 1, sections.length - 1)); // upper bound
        moved = true;
      } else if (e.deltaY < 0 && !atFirst) {
        // scroll up
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setCurrentIdx((idx) => Math.max(idx - 1, 0)); // lower bound
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
    <>
      {/* Mobile layout: show one section at a time, switchable with arrows */}
      <div className="block md:hidden">
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            aria-label="Previous section"
            onClick={() => setCurrentIdx((idx) => Math.max(idx - 1, 0))}
            disabled={currentIdx === 0}
            className="rounded-full bg-base-300 hover:bg-primary/80 focus:bg-primary/80 transition-colors shadow-md p-2 disabled:bg-base-200 disabled:opacity-50"
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={currentIdx === 0 ? "#fbbf24" : "#f59e42"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke={currentIdx === 0 ? "#fbbf24" : "#f59e42"}
                fill={currentIdx === 0 ? "#fef3c7" : "#fff7ed"}
              />
              <polyline points="14 8 10 12 14 16" />
            </svg>
          </button>
          <p className="font-montserrat font-bold text-3xl text-gray-300 text-center">
            Interests <br /> & Skills
          </p>
          <button
            aria-label="Next section"
            onClick={() =>
              setCurrentIdx((idx) => Math.min(idx + 1, sections.length - 1))
            }
            disabled={currentIdx === sections.length - 1}
            className="rounded-full bg-base-300 hover:bg-primary/80 focus:bg-primary/80 transition-colors shadow-md p-2 disabled:bg-base-200 disabled:opacity-50"
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                currentIdx === sections.length - 1 ? "#fbbf24" : "#f59e42"
              }
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke={
                  currentIdx === sections.length - 1 ? "#fbbf24" : "#f59e42"
                }
                fill={
                  currentIdx === sections.length - 1 ? "#fef3c7" : "#fff7ed"
                }
              />
              <polyline points="10 8 14 12 10 16" />
            </svg>
          </button>
        </div>
        <div className="mt-8">{sections[currentIdx].component}</div>
      </div>

      {/* Desktop layout */}
      <div
        id="skills"
        ref={containerRef}
        className="hidden md:flex items-center justify-center min-h-screen max-w-7xl 2xl:max-w-[1900px] mx-auto bg-base-800 px-4 w-full relative"
        tabIndex={0}
      >
        <div className="flex flex-col md:flex-row gap-10 items-start w-full">
          {/* Left: Interests & Skills Title */}
          <div className="md:w-1/3 w-full flex-shrink-0 flex min-h-[500px] items-center justify-start">
            <p className="font-montserrat text-6xl 2xl:text-8xl text-primary md:mb-0 mb-8 md:sticky md:top-32">
              Interests <br />& Skills
            </p>
          </div>
          {/* Right: Animated Skills Section */}
          <div className="md:w-2/3 2xl:w-5/6 w-full flex flex-col gap-10 xl:gap-16 2xl:gap-20 min-h-[500px] 2xl:min-h-[600px] relative items-center justify-center xl:px-8 2xl:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={sections[currentIdx].key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full flex flex-col items-center justify-center"
                style={{ top: "2.5rem" }}
              >
                {sections[currentIdx].component}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dot Indicator */}
          <div className="hidden md:flex flex-col gap-4 items-center absolute right-4 top-1/2 -translate-y-1/2 z-20">
            {sections.map((section, idx) => (
              <button
                key={section.key}
                aria-label={`Go to ${section.key} skills`}
                onClick={() => setCurrentIdx(idx)}
                className={`w-3 h-3 2xl:w-5 2xl:h-5 rounded-full border-2 transition-all duration-200
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
    </>
  );
};

export default Skills;
