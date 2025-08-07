// Projects
// StockMounts
// GM-platform
// other side projects

import StockMounts from "./projects/StockMounts";
import GMplatform from "./projects/GM-platform";
import TeaChat from "./projects/TeaChat";
import FitBuddy from "./projects/FitBuddy";

const Projects = () => {

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 py-16 w-full">
      <p className="font-montserrat text-6xl text-primary max-w-3xl mb-8">
        Recent Projects
      </p>
      {/* Main project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <StockMounts />
        <GMplatform />
      </div>

      {/* Side projects */}
      <div className="flex flex-col gap-4">
        <FitBuddy />
        <TeaChat />
      </div>
    </div>
  );
};

export default Projects;
