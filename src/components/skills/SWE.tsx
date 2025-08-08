const SWE = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 h-full justify-center">
      <h3 className="text-2xl md:text-5xl 2xl:text-6xl font-bold text-secondary mb-2 text-center">
        SWE
      </h3>
      <p className="text-sm md:text-xl 2xl:text-2xl text-gray-300 text-justify max-w-[295px] md:max-w-2xl 2xl:max-w-[800px] mx-auto 2xl:leading-normal">
        I've built solid programming skills through both coursework and personal
        projects. Machine learning and AI has been an ongoing interest of mine,
        and I've been learning related concepts continuously. Related skills:
      </p>
      <ul className="list-none text-sm md:text-xl 2xl:text-2xl text-gray-300 pl-0 md:pl-8 mb-2 mt-2 max-w-[220px] md:max-w-2xl mx-auto 2xl:space-y-2 text-left">
        <li>
          - Object-oriented programming (
          <span className="text-gray-500 font-medium">Java</span>,{" "}
          <span className="text-gray-500 font-medium">Python</span>)
        </li>
        <li>
          - Version control with{" "}
          <span className="text-gray-500 font-medium">Git & GitHub</span>
        </li>
        <li>- Data structures & algorithms</li>
        <li>
          - Machine learning with{" "}
          <span className="text-gray-500 font-medium">scikit-learn</span>,{" "}
          <span className="text-gray-500 font-medium">random forest</span>
        </li>
      </ul>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3 mt-4 md:mt-8 justify-center items-center w-full">
        <img
          src="https://skillicons.dev/icons?i=py,java,github,sklearn&theme=dark"
          alt="SWE Skills"
          className="h-12 md:h-14 2xl:h-24"
        />
      </div>
    </div>
  );
};

export default SWE;
