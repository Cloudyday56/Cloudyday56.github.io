// Resume
// Social links

const Links = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <h2 className="text-4xl text-secondary mb-4 font-bold">Let's connect!</h2>
      <div className="flex gap-12">
        <a
          href="https://github.com/Cloudyday56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github-mark-white.svg" alt="GitHub" className="w-16 h-16" />
        </a>
        <a
          href="https://www.linkedin.com/in/ru-chen-aa3069327"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Linkedin.svg" alt="LinkedIn" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
};

export default Links;
