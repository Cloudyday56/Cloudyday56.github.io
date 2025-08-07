const SWE = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-secondary">SWE</h3>
      <p className="text-base text-gray-300">
        I've built solid programming skills through both coursework and personal
        projects. Machine learning and AI has been an ongoing interest of mine,
        and I've been learning related concepts continuously. Related skills:
      </p>
      <ul className="list-none text-base text-gray-300 pl-8 mb-2 mt-2">
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
      <div className="flex flex-row gap-4 mt-2">
        <img
          src="https://skillicons.dev/icons?i=py,java,github,sklearn&theme=dark"
          alt="SWE Skills"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default SWE;
