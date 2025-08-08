const highlightTech = ["Clerk", "Convex", "Gemini API"];
const features = [
  "User authentication and management via Clerk and Convex",
  "Interactive AI 'phone call' to collect user fitness goals and preferences",
  "Generates customized workout and nutrition plans using Gemini API",
  "Clean, responsive UI for easy plan tracking",
];

function highlightFeatureText(text: string) {
  let result: (string | React.ReactNode)[] = [text];
  highlightTech.forEach((tech) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const split = part.split(tech);
      if (split.length === 1) return [part];
      const arr: (string | React.ReactNode)[] = [];
      split.forEach((seg, i) => {
        arr.push(seg);
        if (i < split.length - 1) {
          arr.push(
            <span className="text-primary font-semibold" key={tech + i}>
              {tech}
            </span>
          );
        }
      });
      return arr;
    });
  });
  return result;
}

const FitBuddy = () => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      {/* Top row: Title and Buttons */}
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="text-2xl 2xl:text-3xl font-bold text-secondary text-left">
          FitBuddy - Fitness AI Agent
        </h3>
        <div className="flex gap-3 2xl:gap-5 pr-8">
          <a
            href="https://fitbuddy-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary font-semibold 2xl:px-4 2xl:text-xl"
          >
            Website
          </a>
          <a
            href="https://github.com/Cloudyday56/FitBuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary font-semibold 2xl:px-4 2xl:text-xl"
          >
            Repo
          </a>
        </div>
      </div>

      {/* Middle row: Image and Features */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="block md:w-2/5 w-full max-w-md">
          <img
            src="/Fitbuddy1.png"
            alt="FitBuddy preview"
            className="w-full h-auto aspect-video 2xl:min-w-[400px] object-cover rounded-lg shadow border border-base-300"
          />
        </div>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm 2xl:text-lg text-gray-400 bg-base-200 rounded-lg p-4 w-full md:w-2/5 max-w-xs 2xl:max-w-md">
          {features.map((f, i) => (
            <li key={i}>{highlightFeatureText(f)}</li>
          ))}
        </ul>
      </div>

      {/* Bottom row: Description */}
      <div className="w-full max-w-3xl 2xl:max-w-5xl px-8">
        <p className="text-primary text-base text-justify 2xl:text-xl 2xl:leading-normal">
          FitBuddy is an AI fitness assistant developed with Next.js. It
          collects user information through an interactive "phone call" and
          generates workout and diet plans tailored to each user's needs.
        </p>
      </div>
    </div>
  );
};

export default FitBuddy;
