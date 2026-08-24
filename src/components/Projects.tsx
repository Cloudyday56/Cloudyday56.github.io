import StockMounts from "./projects/StockMounts";
import GMplatform from "./projects/GM-platform";

const Projects = () => {
  return (
      <div
          id="projects"
          className="flex flex-col items-center justify-center py-16 px-4 max-w-7xl mx-auto w-full md:min-h-screen"
      >
        <h2 className="font-montserrat text-4xl md:text-6xl text-primary font-bold mb-12 text-center">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl items-stretch">
          <StockMounts />
          <GMplatform />
        </div>
      </div>
  );
};

export default Projects;