import { useState } from "react";

const GMplatform = () => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="w-full h-full"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    minHeight: "340px",
                }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 w-full flex flex-col items-center gap-4 bg-base-200/80 backdrop-blur-sm p-6 rounded-2xl border border-base-300 shadow-xl h-full justify-between"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="w-full flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center font-montserrat">
                            GM-platform
                        </h3>
                        <div className="w-full overflow-hidden rounded-xl border border-base-300">
                            <a href="https://github.com/Cloudyday56/GM-platform" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden">
                                <img
                                    src="/GM-platform.png"
                                    alt="GM-platform preview"
                                    className="w-full h-auto aspect-[16/10] object-cover"
                                />
                            </a>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base text-justify leading-relaxed">
                            A pixel art 2D platformer made with GameMaker Studio 2 and Aseprite. Collect keys,
                            navigate levels, and master special movement mechanics.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-2 justify-center w-full">
                        <a href="https://github.com/Cloudyday56/GM-platform" target="_blank" rel="noopener noreferrer"
                            className="px-5 py-2 text-sm font-semibold rounded-lg bg-secondary text-primary-content hover:opacity-90 transition-all">
                            Repo
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Hover for details →</p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 w-full flex flex-col items-center justify-center gap-5 bg-base-200/90 backdrop-blur-sm p-6 rounded-2xl border border-secondary/30 shadow-xl h-full"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-2xl font-bold text-secondary font-montserrat">Stack & Details</h3>
                    <div className="grid grid-cols-2 gap-3 w-full max-w-xs text-sm">
                        {[
                            { label: "Engine", value: "GameMaker Studio 2" },
                            { label: "Art", value: "Aseprite" },
                            { label: "Language", value: "GML" },
                            { label: "Team", value: "3 contributors" },
                            { label: "Genre", value: "Platformer" },
                            { label: "Status", value: "Completed" },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-base-300/60 rounded-lg p-3 flex flex-col gap-0.5">
                                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{label}</span>
                                <span className="text-primary font-medium">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a href="https://github.com/Cloudyday56/GM-platform" target="_blank" rel="noopener noreferrer"
                            className="px-5 py-2 text-sm font-semibold rounded-lg bg-secondary text-primary-content hover:opacity-90 transition-all">
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GMplatform;
