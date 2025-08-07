const WebDev = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-secondary">Web Development</h3>
      <p className="text-base text-gray-300">
        I have experience in full stack web development, where I work with APIs,
        databases and UI/UX design. Related skills:
      </p>
      <ul className="list-none text-base text-gray-300 pl-8 mb-2 mt-2">
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
      <div className="flex flex-row gap-2 mt-2">
        <img
          src="https://skillicons.dev/icons?i=react,nextjs,vite,tailwind,express,nodejs,postman&theme=dark"
          alt="Web Dev Skills"
          className="h-12"
        />
        <img
          src="/Convex.png"
          alt="Convex"
          className="h-12 w-12 rounded-xl bg-[#fbfcfc] p-1"
        />
        <img
          src="/Clerk.png"
          alt="Clerk"
          className="h-12 w-12 rounded-xl bg-[#fefefe] p-1"
        />
        <img
          src="https://skillicons.dev/icons?i=mongodb,docker&theme=dark"
          alt="Web Dev Skills 2"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default WebDev;
