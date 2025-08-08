// Projects
// StockMounts
// GM-platform
// other side projects

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StockMounts from "./projects/StockMounts";
import GMplatform from "./projects/GM-platform";
import TeaChat from "./projects/TeaChat";
import FitBuddy from "./projects/FitBuddy";

const projectScreens = [
  { key: "stockmounts", component: <StockMounts /> },
  { key: "gmplatform", component: <GMplatform /> },
  {
    key: "side",
    component: (
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <FitBuddy />
        <TeaChat />
      </div>
    ),
  },
];

const Projects = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atFirst = currentIdx === 0;
      const atLast = currentIdx === projectScreens.length - 1;
      if (scrollTimeout.current) {
        e.preventDefault();
        return;
      }
      let moved = false;
      if (e.deltaY > 0 && !atLast) {
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setCurrentIdx((idx) => Math.min(idx + 1, projectScreens.length - 1));
        moved = true;
      } else if (e.deltaY < 0 && !atFirst) {
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setCurrentIdx((idx) => Math.max(idx - 1, 0));
        moved = true;
      }
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

  // Mobile: 4 sections
  const mobileScreens = [
    { key: "stockmounts", component: <StockMounts /> },
    { key: "gmplatform", component: <GMplatform /> },
    { key: "fitbuddy", component: <FitBuddy /> },
    { key: "teachat", component: <TeaChat /> },
  ];

  // Desktop: 3 sections
  const desktopScreens = [
    { key: "stockmounts", component: <StockMounts /> },
    { key: "gmplatform", component: <GMplatform /> },
    {
      key: "side",
      component: (
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <FitBuddy />
          <TeaChat />
        </div>
      ),
    },
  ];

  // Track which set to use
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const screens = isMobile ? mobileScreens : desktopScreens;
  const [screenIdx, setScreenIdx] = useState(0);

  useEffect(() => {
    setScreenIdx(0); // Reset index on layout change
  }, [isMobile]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atFirst = screenIdx === 0;
      const atLast = screenIdx === screens.length - 1;
      if (scrollTimeout.current) {
        e.preventDefault();
        return;
      }
      let moved = false;
      if (e.deltaY > 0 && !atLast) {
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setScreenIdx((idx) => Math.min(idx + 1, screens.length - 1));
        moved = true;
      } else if (e.deltaY < 0 && !atFirst) {
        scrollTimeout.current = window.setTimeout(() => {
          scrollTimeout.current = null;
        }, 1000);
        setScreenIdx((idx) => Math.max(idx - 1, 0));
        moved = true;
      }
      if (moved) {
        e.preventDefault();
      }
    };
    const ref = containerRef.current;
    if (ref) ref.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (ref) ref.removeEventListener("wheel", handleWheel);
    };
  }, [screenIdx, screens.length]);

  return (
    <>
      {/* Mobile layout */}
      <div className="block md:hidden w-full">
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            aria-label="Previous project"
            onClick={() => setScreenIdx((idx) => Math.max(idx - 1, 0))}
            disabled={screenIdx === 0}
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
              stroke={screenIdx === 0 ? "#fbbf24" : "#f59e42"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke={screenIdx === 0 ? "#fbbf24" : "#f59e42"}
                fill={screenIdx === 0 ? "#fef3c7" : "#fff7ed"}
              />
              <polyline points="14 8 10 12 14 16" />
            </svg>
          </button>
          <p className="font-montserrat font-bold text-3xl text-gray-300 text-center">
            Recent <br /> Projects
          </p>
          <button
            aria-label="Next project"
            onClick={() =>
              setScreenIdx((idx) => Math.min(idx + 1, screens.length - 1))
            }
            disabled={screenIdx === screens.length - 1}
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
              stroke={screenIdx === screens.length - 1 ? "#fbbf24" : "#f59e42"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke={
                  screenIdx === screens.length - 1 ? "#fbbf24" : "#f59e42"
                }
                fill={screenIdx === screens.length - 1 ? "#fef3c7" : "#fff7ed"}
              />
              <polyline points="10 8 14 12 10 16" />
            </svg>
          </button>
        </div>
        <div className="mt-8">{screens[screenIdx].component}</div>
      </div>

      {/* Desktop layout */}
      <div
        id="projects"
        ref={containerRef}
        className="hidden md:flex items-center justify-center min-h-screen max-w-7xl 2xl:max-w-[1900px] mx-auto bg-base-800 px-4 w-full relative"
        tabIndex={0}
      >
        <div className="flex flex-col md:flex-row gap-10 items-start w-full">
          {/* Left: Projects Title */}
          <div className="md:w-1/3 w-full flex-shrink-0 flex min-h-[600px] items-center justify-start">
            <p className="font-montserrat text-6xl 2xl:text-8xl text-primary md:mb-0 mb-8 md:sticky md:top-32">
              Recent <br />
              Projects
            </p>
          </div>
          {/* Right: Animated Project Screen */}
          <div className="md:w-2/3 w-full flex flex-col gap-10 min-h-[600px] 2xl:min-h-[700px] relative items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={desktopScreens[currentIdx].key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full flex flex-col items-center"
                style={{ top: "1rem", maxHeight: "80vh", overflow: "auto" }}
              >
                {desktopScreens[currentIdx].component}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dot Indicator */}
          <div className="flex flex-col gap-3 2xl:gap-5 items-center absolute right-4 top-1/2 -translate-y-1/2 z-20">
            {desktopScreens.map((screen, idx) => (
              <button
                key={screen.key}
                aria-label={`Go to ${screen.key} project`}
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

export default Projects;
