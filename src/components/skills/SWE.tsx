const SWE = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center">
      <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2 text-center">
        SWE
      </h3>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto">
        I've built solid programming skills through both coursework and personal
        projects. Machine learning and AI has been an ongoing interest of mine,
        and I've been learning related concepts continuously. Related skills:
      </p>
      <ul className="list-none text-lg md:text-xl text-gray-300 pl-0 md:pl-8 mb-4 mt-4 max-w-2xl mx-auto">
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
      <div className="flex flex-row flex-wrap gap-3 mt-8 justify-center items-center w-full">
        <img
          src="https://skillicons.dev/icons?i=py,java,github,sklearn&theme=dark"
          alt="SWE Skills"
          className="h-14"
        />
      </div>
    </div>
  );
};

export default SWE;
