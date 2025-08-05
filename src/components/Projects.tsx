// Projects
// StockMounts
// GM-platform
// other side projects

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 py-16 w-full">
      <p className="font-montserrat text-6xl text-primary max-w-3xl mb-8">
        Recent Projects
      </p>
      {/* Top: Two main project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
          <h3 className="text-2xl font-bold text-primary mb-2">StockMounts</h3>
          <div className="w-full flex justify-center mb-4">
            <img
              src="/Stockmounts.png"
              alt="StockMounts preview"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
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
          <div className="w-full flex justify-center mb-4">
            <img
              src="/GM-platform.png"
              alt="GM-platform preview"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
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
        {/* Side Project 1 */}
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-lg font-semibold text-primary mb-2">
              FitBuddy - Fitness AI Agent
            </span>
            <p className="text-gray-300 mb-4">
              An AI-powered fitness assistant that helps users plan and track
              workouts. (Description placeholder)
            </p>
            <a href="#" className="text-secondary hover:underline mt-auto">
              View Project
            </a>
          </div>
          <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0 w-full md:w-40">
            <img
              src="/Fitbuddy1.png"
              alt="FitBuddy preview"
              className="w-full md:w-40 h-24 object-cover rounded-lg shadow"
            />
          </div>
        </div>
        {/* Side Project 2 */}
        <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-lg font-semibold text-primary mb-2">
              TeaChat - Chatting Web App
            </span>
            <p className="text-gray-300 mb-4">
              A real-time chat web application for group and private messaging.
              (Description placeholder)
            </p>
            <a href="#" className="text-secondary hover:underline mt-auto">
              View Project
            </a>
          </div>
          <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0 w-full md:w-40">
            <img
              src="/Teachat1.png"
              alt="TeaChat preview"
              className="w-full md:w-40 h-24 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
