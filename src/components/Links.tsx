import { useEffect, useState } from "react";

const PHRASES = ["connect!", "build things!"];

const Links = () => {
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const target = PHRASES[phraseIdx];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < target.length) {
            timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        } else if (!deleting && displayed.length === target.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % PHRASES.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, phraseIdx]);

    return (
        <div
            id="links"
            className="flex items-center justify-center w-full h-full px-4 py-6 md:py-0"
        >
            <div className="flex flex-col items-center gap-8 md:gap-10 mt-14 md:mt-0">
                <div className="text-center">
                    <h2 className="font-montserrat text-4xl md:text-7xl text-primary leading-tight">
                        Let's
                    </h2>
                    <h2 className="font-montserrat text-4xl md:text-7xl text-secondary leading-tight min-h-[1.2em]">
                        {displayed}
                        <span className="inline-block w-0.5 h-[0.85em] bg-secondary align-middle ml-0.5 animate-pulse" />
                    </h2>
                </div>

                {/* Social icons */}
                <div className="flex gap-8">
                    <a
                        href="https://github.com/Cloudyday56"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                    >
                        <div className="bg-base-200/80 backdrop-blur-sm border border-base-300 rounded-xl p-4 group-hover:border-secondary/50 group-hover:scale-110 transition-all duration-200">
                            <img src="/github-mark-white.svg" alt="GitHub" className="w-10 h-10 md:w-14 md:h-14" />
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ru-chen-aa3069327"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                    >
                        <div className="bg-base-200/80 backdrop-blur-sm border border-base-300 rounded-xl p-4 group-hover:border-secondary/50 group-hover:scale-110 transition-all duration-200">
                            <img src="/Linkedin.svg" alt="LinkedIn" className="w-10 h-10 md:w-14 md:h-14" />
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">LinkedIn</span>
                    </a>
                </div>

                <button
                    className="hidden md:flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors group mt-2"
                    onClick={() => {
                        if (window.location.hash === "#intro") {
                            window.dispatchEvent(new Event("hashchange"));
                        } else {
                            window.location.hash = "#intro";
                        }
                    }}
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                    Back to top
                </button>
            </div>
        </div>
    );
};

export default Links;
