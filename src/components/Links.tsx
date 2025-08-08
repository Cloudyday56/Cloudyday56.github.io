// Resume
// Social links

const Links = () => {
  return (
    <div
      id="links"
      className="flex flex-col items-center justify-center min-h-[40vh] py-12 w-full"
    >
      <h2 className="font-montserrat text-6xl 2xl:text-8xl text-primary max-w-3xl 2xl:max-w-6xl pr-72 2xl:pr-80 pb-3">
        Let's
      </h2>
      <h2 className="font-montserrat text-6xl 2xl:text-8xl text-primary max-w-3xl 2xl:max-w-6xl 2xl:pl-12">
        Connect!
      </h2>
      <div className="flex gap-8 mt-6 pl-48 2xl:pl-60">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src="cv.png"
            alt="Resume"
            className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-lg hover:scale-110 transition-transform duration-200"
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
            className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-lg hover:scale-110 transition-transform duration-200"
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
            className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Links;
