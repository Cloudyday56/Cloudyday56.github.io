import {useEffect, useState} from "react";

const SECTIONS = ["intro", "experience", "projects", "links"] as const;
const LABELS: Record<string, string> = {
    intro: "Bio",
    experience: "Experience",
    projects: "Projects",
    links: "Social",
};

const Navbar = ({activeSection}: { activeSection?: string }) => {
    const [active, setActive] = useState<string>("intro");

    useEffect(() => {
        if (activeSection) {
            setActive(activeSection);
        }
    }, [activeSection]);

    return (
        <nav
            className="w-full h-14 md:h-16 px-4 md:px-10 bg-base-200/70 backdrop-blur-md border-b border-base-300/60 shadow-lg fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300">

            {/* Logo */}
            <a className="flex items-center gap-2 group">
                <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9 md:w-10 md:h-10 text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M8 2c.5 1.5-.5 2.5 0 4"
                          className="group-hover:-translate-y-1 transition-transform duration-500"/>
                    <path d="M12 2c.5 1.5-.5 2.5 0 4"
                          className="group-hover:-translate-y-0.5 transition-transform duration-500 delay-75"/>
                    <path d="M5 8h10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"/>
                    <path d="M16 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1"/>
                </svg>
            </a>

            <ul className="hidden md:flex gap-8 text-base font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {SECTIONS.map((id) => (
                    <li key={id} className="relative">
                        <a
                            href={`#${id}`}
                            className={`transition-colors duration-200 pb-1 ${
                                active === id ? "text-primary" : "text-gray-400 hover:text-gray-200"
                            }`}
                        >
                            {LABELS[id]}
                            {active === id && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"/>
                            )}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="md:hidden flex gap-4 text-sm font-medium">
                {SECTIONS.map((id) => (
                    <li key={id} className="relative">
                        <a
                            href={`#${id}`}
                            className={`transition-colors duration-200 pb-0.5 ${
                                active === id ? "text-primary" : "text-gray-400"
                            }`}
                        >
                            {LABELS[id]}
                            {active === id && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"/>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
