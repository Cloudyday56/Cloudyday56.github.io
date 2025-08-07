const FitBuddy = () => {
  return (
    <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
      <div className="flex-1 flex flex-col justify-between">
        <span className="text-2xl font-semibold text-secondary mb-2">
          FitBuddy - Fitness AI Agent
        </span>
        <div className="text-gray-300 mb-4">
          <p className="max-w-[70%]">
            FitBuddy is an AI-powered fitness assistant developed with Next.js.
            It collects user information through an interactive "phone call" and
            generates personalized workout and diet plans tailored to each
            user's needs.
          </p>
          <ul className="list-disc list-outside space-y-1 mt-2 pl-4 text-sm text-gray-400">
            <li>User authentication and management via Clerk and Convex</li>
            <li>
              Interactive AI "phone call" to collect user fitness goals and
              preferences
            </li>
            <li>
              Generates customized workout and nutrition plans using Gemini API
            </li>
            <li>Clean, responsive UI for easy plan tracking</li>
          </ul>
        </div>
        <div className="flex gap-3 mt-auto">
          <a
            href="https://fitbuddy-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary font-semibold"
          >
            Website
          </a>
          <a
            href="https://github.com/Cloudyday56/FitBuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline font-semibold"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0 w-full md:w-40">
        <img
          src="/Fitbuddy1.png"
          alt="FitBuddy preview"
          className="w-full md:w-40 h-24 object-cover rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default FitBuddy;
