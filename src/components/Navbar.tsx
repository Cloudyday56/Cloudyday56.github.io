const Navbar = () => {
  return (
      <nav className="w-full h-16 2xl:h-20 px-4 md:px-10 bg-base-200/80 backdrop-blur border-b border-base-300/80 shadow-lg fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300">

        {/* Desktop layout */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="flex items-center gap-2 group">
            <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 2xl:w-14 2xl:h-14 text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
              <path d="M8 2c.5 1.5-.5 2.5 0 4" className="group-hover:-translate-y-1 transition-transform duration-500" />
              <path d="M12 2c.5 1.5-.5 2.5 0 4" className="group-hover:-translate-y-0.5 transition-transform duration-500 delay-75" />
              <path d="M5 8h10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
              <path d="M16 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
            </svg>
          </a>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-row w-full items-center justify-between h-full px-2">
          <a href="#" className="flex items-center gap-2 group">
            <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
              <path d="M8 2c.5 1.5-.5 2.5 0 4" className="group-hover:-translate-y-1 transition-transform duration-500" />
              <path d="M12 2c.5 1.5-.5 2.5 0 4" className="group-hover:-translate-y-0.5 transition-transform duration-500 delay-75" />
              <path d="M5 8h10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
              <path d="M16 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
            </svg>
          </a>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 2xl:gap-12 text-base 2xl:text-2xl font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <li>
            <a href="#intro" className="text-gray-300 hover:text-primary hover:scale-105 transition-all">
              Bio
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-300 hover:text-primary hover:scale-105 transition-all">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-primary hover:scale-105 transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="#links" className="text-gray-300 hover:text-primary hover:scale-105 transition-all">
              Social
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;