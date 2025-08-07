
const StockMounts = () => {
  
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 1. Title */}
      <h3 className="text-3xl font-bold text-secondary text-center">
        StockMounts
      </h3>

      {/* 2. Image and Features Row */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        <a
          href="https://stockmounts.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:w-2/5 w-full max-w-xl"
        >
          <img
            src="/Stockmounts.png"
            alt="StockMounts preview"
            className="w-full h-auto aspect-video object-cover rounded-lg shadow hover:opacity-80 transition-opacity border border-base-300"
          />
        </a>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm text-gray-400 bg-base-200 rounded-lg p-4 w-full md:w-2/5 max-w-md">
          <li>
            Developed with MongoDB, Express, React, and Node.js (MERN stack)
          </li>
          <li>
            Secure user authentication, including GitHub OAuth integration
          </li>
          <li>
            Stock price prediction using machine learning models (scikit-learn,
            Random Forest) trained on Yahoo Finance datasets
          </li>
          <li>Personal trading note creation, editing, and management</li>
          <li>Modern, responsive UI built with Tailwind CSS</li>
        </ul>
      </div>

      {/* 3. Description Row */}
      <div className="w-full max-w-3xl">
        <p className="text-primary text-base text-justify">
          StockMounts is a full-stack web application for stock prediction and
          trading note management. It uses machine learning models to generate
          stock forecasts and provides secure, authenticated user accounts.
        </p>
      </div>

      {/* 4. Buttons Row */}
      <div className="flex gap-4 mt-2 justify-center">
        <a
          href="https://stockmounts.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary font-semibold"
        >
          Website
        </a>
        <a
          href="https://github.com/Cloudyday56/StockMounts"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline font-semibold"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default StockMounts;
