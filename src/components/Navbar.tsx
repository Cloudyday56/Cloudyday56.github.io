const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between h-16 2xl:h-20 px-6 pl-10 pr-10 bg-base-200/60 backdrop-blur border-b border-gray-700/30 fixed top-0 left-0 z-50">
      {/* Left Icon */}
      <div className="flex items-center gap-2">
        <a href="#">
          <img
            src="favicon2.svg"
            alt="Logo"
            className="w-12 h-12 2xl:w-[70px] 2xl:h-[70px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
      {/* Navigation Links */}
      <ul className="flex gap-8 2xl:gap-12 text-base 2xl:text-2xl font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
      {/* View Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm btn-primary font-semibold 2xl:text-xl 2xl:px-6"
      >
        View Resume
      </a>
    </nav>
  );
};

export default Navbar;
