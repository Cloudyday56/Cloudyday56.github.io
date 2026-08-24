const StockMounts = () => {
  return (
      <div className="w-full flex flex-col items-center gap-4 bg-base-200 p-6 rounded-2xl border border-base-300 shadow-xl hover:border-secondary/40 transition-all duration-300 h-full justify-between">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center font-montserrat">
            StockMounts
          </h3>

          <div className="w-full overflow-hidden rounded-xl border border-base-300">
            <a
                href="https://stockmounts.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full overflow-hidden"
            >
              <img
                  src="/Stockmounts.png"
                  alt="StockMounts preview"
                  className="w-full h-auto aspect-[16/10] object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          <p className="text-primary text-sm md:text-base text-justify leading-relaxed">
            StockMounts is a full-stack web application for stock prediction and
            trading note management. It uses machine learning models to generate
            stock forecasts and provides secure, authenticated user accounts.
          </p>
        </div>

        <div className="flex gap-4 mt-4 justify-center w-full">
          <a
              href="https://stockmounts.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm md:text-base font-semibold rounded-lg bg-primary text-black hover:opacity-90 transition-all duration-200"
          >
            Website
          </a>
          <a
              href="https://github.com/Cloudyday56/StockMounts"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm md:text-base font-semibold rounded-lg bg-secondary text-primary-content hover:opacity-90 transition-all duration-200"
          >
            Repo
          </a>
        </div>
      </div>
  );
};

export default StockMounts;