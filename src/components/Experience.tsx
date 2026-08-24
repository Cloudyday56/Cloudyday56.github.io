const Experience = () => {
    return (
        <div
            id="experience"
            className="flex flex-col items-center justify-center py-16 px-4 max-w-7xl mx-auto w-full md:min-h-screen"
        >
            <h2 className="font-montserrat text-4xl md:text-6xl text-primary font-bold mb-12 text-center">
                Experience
            </h2>

            <div
                className="flex flex-col md:flex-row gap-10 items-stretch justify-center w-full max-w-5xl bg-base-200 p-6 md:p-8 rounded-2xl border border-base-300 shadow-xl">
                {/* Left */}
                <div
                    className="md:w-2/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-base-300 pb-6 md:pb-0 md:pr-8">
                    <div
                        className="overflow-hidden rounded-xl border border-base-300 w-full max-w-[280px] md:max-w-none">
                        <img
                            src="/TSImagine.jpg"
                            alt="TS Imagine Logo/Offices"
                            className="w-full h-auto aspect-square object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="text-2xl font-bold text-secondary font-montserrat">
                            TS Imagine
                        </h3>
                        <p className="text-gray-400 text-sm">Montreal, QC</p>
                    </div>
                </div>

                {/* Right */}
                <div className="md:w-3/5 flex flex-col gap-8 justify-center">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                            <h4 className="text-xl font-bold text-primary">
                                DevOps Intern
                            </h4>
                            <span className="text-sm text-secondary font-semibold">
                May 2026 – Aug 2026
              </span>
                        </div>
                        <p className="text-primary text-sm md:text-base text-justify leading-relaxed">
                            Developed an internal release management tool using Spring Boot and Angular to automate
                            workflows. Optimized backend latency through parallel API calls, improved Docker
                            configurations, and containerized deployment baselines using Kubernetes.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {["Java Spring Boot", "Angular", "Docker", "Kubernetes", "API Integration"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-semibold rounded bg-base-300 text-secondary border border-base-100"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-base-300 my-1"/>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                            <h4 className="text-xl font-bold text-primary">
                                Java Developer Intern
                            </h4>
                            <span className="text-sm text-secondary font-semibold">
                Sep 2025 – Dec 2025
              </span>
                        </div>
                        <p className="text-primary text-sm md:text-base text-justify leading-relaxed">
                            Maintained backend Java services and designed responsive web features using React and
                            TypeScript. Wrote extensive Cucumber integration tests for regressions and ensured reliable
                            product releases.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {["Java", "React", "TypeScript", "Cucumber", "Integration Testing"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-semibold rounded bg-base-300 text-secondary border border-base-100"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;