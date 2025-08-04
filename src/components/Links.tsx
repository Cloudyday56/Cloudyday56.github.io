// Resume
// Social links

const Links = () => {
  return (
    <div className="flex flex-col items-end justify-end min-h-[40vh] py-12 pr-40 w-full">
      <h2 className="font-montserrat text-7xl text-primary max-w-3xl mb-4 pr-60">
        Let's
      </h2>
      <h2 className="font-montserrat text-7xl text-primary max-w-3xl mb-4 pr-8">
        Connect!
      </h2>
      <div className="flex gap-8 mt-6">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src="cv.png"
            alt="Resume"
            className="w-16 h-16 rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://github.com/Cloudyday56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="github-mark-white.svg"
            alt="GitHub"
            className="w-16 h-16 rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ru-chen-aa3069327"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="Linkedin.svg"
            alt="LinkedIn"
            className="w-16 h-16 rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Links;
