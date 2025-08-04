// Projects
// StockMounts
// GM-platform
// other side projects

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full" id="projects">
      {/* Top: Two main project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
          <h3 className="text-2xl font-bold text-primary mb-2">StockMounts</h3>
          <p className="text-gray-300 mb-4">
            A full-stack web app used for stock prediction and allow
            authenticated users to record their trading notes.
          </p>
          <a href="#" className="text-secondary font-semibold hover:underline">
            View Project
          </a>
        </div>
        <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
          <h3 className="text-2xl font-bold text-primary mb-2">GM-platform</h3>
          <p className="text-gray-300 mb-4">
            A 2D platformer game made with GameMaker Studio 2 (Description
            placeholder)
          </p>
          <a href="#" className="text-secondary font-semibold hover:underline">
            View Project
          </a>
        </div>
      </div>
      {/* Bottom: List of smaller projects */}
      <div className="flex flex-col gap-4">
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between items-center min-h-[80px]">
          <span className="text-lg font-semibold text-primary">
            FitBuddy - Fitness AI Agent
          </span>
          <a href="#" className="text-secondary hover:underline">
            View
          </a>
        </div>
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between items-center min-h-[80px]">
          <span className="text-lg font-semibold text-primary">
            TeaChat - Chatting Web App
          </span>
          <a href="#" className="text-secondary hover:underline">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
