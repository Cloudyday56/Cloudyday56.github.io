const Experience = () => {
    return (
        <div
            id="experience"
            className="flex items-center justify-center w-full h-full px-4 py-6 md:py-0"
        >
            <div className="flex flex-col w-full max-w-6xl gap-6 mt-14 md:mt-0">
                <h2 className="font-montserrat text-3xl md:text-5xl text-primary font-bold text-center">
                    Experience
                </h2>

                <div
                    className="flex flex-col md:flex-row gap-6 md:gap-0 items-stretch justify-center w-full bg-base-200/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-base-300 shadow-2xl">
                    {/* Left */}
                    <div
                        className="md:w-2/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-base-300 pb-6 md:pb-0 md:pr-10">
                        <div
                            className="overflow-hidden rounded-xl border border-base-300 w-full max-w-[280px] md:max-w-[340px]">
                            <img
                                src="/TSImagine.jpg"
                                alt="TS Imagine Logo/Offices"
                                className="w-full h-auto aspect-[16/9] object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-secondary font-montserrat">
                                TS Imagine
                            </h3>
                            <p className="text-gray-400 text-sm mt-0.5">Montreal, QC</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="md:w-3/5 flex flex-col gap-7 justify-center md:pl-10">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                <h4 className="text-lg md:text-xl font-bold text-primary">DevOps Intern</h4>
                                <span
                                    className="text-sm text-secondary font-semibold shrink-0">May 2026 – Aug 2026</span>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base text-justify leading-relaxed">
                                Developed an internal release management tool using Spring Boot and Angular to
                                automate workflows. Optimized backend latency through parallel API calls, improved
                                Docker configurations, and containerized deployment baselines using Kubernetes.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {["Java Spring Boot", "Angular", "Docker", "Kubernetes", "API Integration"].map((skill) => (
                                    <span key={skill}
                                          className="px-2.5 py-1 text-xs font-semibold rounded bg-base-300 text-secondary border border-base-100">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-base-300"/>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                <h4 className="text-lg md:text-xl font-bold text-primary">Java Developer Intern</h4>
                                <span
                                    className="text-sm text-secondary font-semibold shrink-0">Sep 2025 – Dec 2025</span>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base text-justify leading-relaxed">
                                Maintained backend Java services and designed responsive web features using React
                                and TypeScript. Wrote extensive Cucumber integration tests for regressions and
                                ensured reliable product releases.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {["Java", "React", "TypeScript", "Cucumber", "Integration Testing"].map((skill) => (
                                    <span key={skill}
                                          className="px-2.5 py-1 text-xs font-semibold rounded bg-base-300 text-secondary border border-base-100">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
