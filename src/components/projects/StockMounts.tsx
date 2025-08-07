const StockMounts = () => {
  return (
    <div className="bg-base-200 rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[220px]">
      <h3 className="text-2xl font-bold text-secondary mb-2">StockMounts</h3>
      <div className="w-full flex justify-center mb-4">
        <a
          href="https://stockmounts.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img
            src="/Stockmounts.png"
            alt="StockMounts preview"
            className="w-full h-full object-cover rounded-lg shadow hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
      <div className="text-primary mb-4">
        <p className="mb-4 text-justify">
          StockMounts is a full-stack web application for stock prediction and
          trading note management. It uses machine learning models to generate
          stock forecasts and provides secure, authenticated user accounts.
        </p>
        <ul className="list-disc list-outside space-y-2 mt-4 pl-4 text-sm text-gray-400">
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
      <div className="flex gap-3 mt-auto">
        <a
          href="https://stockmounts.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary font-semibold"
        >
          Website
        </a>
        <a
          href="https://github.com/Cloudyday56/StockMounts"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline font-semibold"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default StockMounts;
