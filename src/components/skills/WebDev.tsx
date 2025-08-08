const WebDev = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 h-full justify-center">
      <h3 className="text-2xl md:text-5xl 2xl:text-6xl font-bold text-secondary mb-2 text-center">
        Web Development
      </h3>
      <p className="text-sm md:text-xl 2xl:text-2xl text-gray-300 text-justify max-w-[295px] md:max-w-2xl 2xl:max-w-[800px] mx-auto 2xl:leading-normal">
        I have experience in full stack web development, where I work with APIs,
        databases and UI/UX design. Related skills:
      </p>
      <ul className="list-none text-sm md:text-xl 2xl:text-2xl text-gray-300 pl-0 md:pl-8 mb-2 mt-2 max-w-[220px] md:max-w-2xl mx-auto 2xl:space-y-2">
        <li>
          - Frontend frameworks (
          <span className="text-gray-500 font-medium">React</span>,
          <span className="text-gray-500 font-medium">Vite</span>,
          <span className="text-gray-500 font-medium">Next.js</span>)
        </li>
        <li>
          - UI/UX design with{" "}
          <span className="text-gray-500 font-medium">Tailwind CSS</span>,{" "}
          <span className="text-gray-500 font-medium">DaisyUI</span>
        </li>
        <li>
          - Backend APIs with{" "}
          <span className="text-gray-500 font-medium">Node.js</span>,{" "}
          <span className="text-gray-500 font-medium">Express</span>,{" "}
          <span className="text-gray-500 font-medium">REST APIs</span>
        </li>
        <li>
          - User & data management (
          <span className="text-gray-500 font-medium">Convex</span>,{" "}
          <span className="text-gray-500 font-medium">MongoDB</span>,{" "}
          <span className="text-gray-500 font-medium">Clerk</span>)
        </li>
        <li>
          - Production & Deployment (
          <span className="text-gray-500 font-medium">Render</span>,{" "}
          <span className="text-gray-500 font-medium">Vercel</span>,{" "}
          <span className="text-gray-500 font-medium">Docker</span>)
        </li>
      </ul>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3 mt-4 md:mt-8 justify-center items-center md:w-full 2xl:max-w-[800px]">
        <img
          src="https://skillicons.dev/icons?i=react,nextjs,vite,tailwind,express,nodejs,postman&theme=dark"
          alt="Web Dev Skills"
          className="h-10 md:h-14 2xl:h-24"
        />
        <img
          src="/Convex.png"
          alt="Convex"
          className="h-10 w-10 md:h-14 md:w-14 2xl:h-24 2xl:w-24 rounded-xl bg-[#fbfcfc] p-0.5 md:p-1"
        />
        <img
          src="/Clerk.png"
          alt="Clerk"
          className="h-10 w-10 md:h-14 md:w-14 2xl:h-24 2xl:w-24 rounded-xl bg-[#fefefe] p-0.5 md:p-1"
        />
        <img
          src="https://skillicons.dev/icons?i=mongodb,docker&theme=dark"
          alt="Web Dev Skills 2"
          className="h-10 md:h-14 2xl:h-24"
        />
      </div>
    </div>
  );
};

export default WebDev;
