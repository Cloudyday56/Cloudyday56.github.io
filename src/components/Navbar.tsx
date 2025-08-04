const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between h-16 px-6 bg-base-200/80 backdrop-blur border-b border-gray-700/30 fixed top-0 left-0 z-50">
      {/* Left Icon */}
      <div className="flex items-center gap-2">
        <a href="/">
          <img
            src="favicon2.svg"
            alt="Logo"
            className="w-12 h-12 rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
      {/* Navigation Links */}
      <ul className="flex gap-8 text-base font-medium">
        <li>
          <a href="#intro" className="hover:text-primary transition-colors">
            Intro
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#links" className="hover:text-primary transition-colors">
            Links
          </a>
        </li>
      </ul>
      {/* View Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm btn-primary font-semibold"
      >
        View Resume
      </a>
    </nav>
  );
};

export default Navbar;
