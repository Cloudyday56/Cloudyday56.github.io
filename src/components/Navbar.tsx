const Navbar = () => {
  return (
    <nav className="w-full h-16 2xl:h-20 px-2 md:px-6 md:pl-10 md:pr-10 bg-base-200/60 backdrop-blur border-b border-gray-700/30 fixed top-0 left-0 z-50 flex items-center justify-between">
      {/* Mobile layout: stacked rows inside navbar */}
      <div className="md:hidden flex flex-row w-full items-center justify-between h-full px-4">
        <a href="#">
          <img
            src="favicon2.svg"
            alt="Logo"
            className="w-12 h-12 rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary font-semibold"
        >
          View Resume
        </a>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-center gap-2">
        <a href="#">
          <img
            src="favicon2.svg"
            alt="Logo"
            className="w-12 h-12 2xl:w-[70px] 2xl:h-[70px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
      <ul className="hidden md:flex gap-8 2xl:gap-12 text-base 2xl:text-2xl font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <li>
          <a href="#intro" className="hover:text-primary transition-colors">
            Bio
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#links" className="hover:text-primary transition-colors">
            Social
          </a>
        </li>
      </ul>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline btn btn-sm btn-primary font-semibold md:py-2 2xl:text-xl 2xl:px-6 2xl:py-0"
      >
        View Resume
      </a>
    </nav>
  );
};

export default Navbar;
