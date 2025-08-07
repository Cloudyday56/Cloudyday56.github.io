const WebDev = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center">
      <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2 text-center">
        Web Development
      </h3>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto">
        I have experience in full stack web development, where I work with APIs,
        databases and UI/UX design. Related skills:
      </p>
      <ul className="list-none text-lg md:text-xl text-gray-300 pl-0 md:pl-8 mb-4 mt-4 max-w-2xl mx-auto">
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
      <div className="flex flex-row flex-wrap gap-3 mt-8 justify-center items-center w-full">
        <img
          src="https://skillicons.dev/icons?i=react,nextjs,vite,tailwind,express,nodejs,postman&theme=dark"
          alt="Web Dev Skills"
          className="h-14"
        />
        <img
          src="/Convex.png"
          alt="Convex"
          className="h-14 w-14 rounded-xl bg-[#fbfcfc] p-1"
        />
        <img
          src="/Clerk.png"
          alt="Clerk"
          className="h-14 w-14 rounded-xl bg-[#fefefe] p-1"
        />
        <img
          src="https://skillicons.dev/icons?i=mongodb,docker&theme=dark"
          alt="Web Dev Skills 2"
          className="h-14"
        />
      </div>
    </div>
  );
};

export default WebDev;
