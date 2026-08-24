const SECTIONS = [
    { id: "intro", label: "Bio" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "links", label: "Social" },
];

interface SectionDotsProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

const SectionDots = ({ activeSection, onNavigate }: SectionDotsProps) => {
    return (
        <nav
            className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 items-center"
            aria-label="Section navigation"
        >
            {SECTIONS.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => {
                        onNavigate(id);
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    aria-label={`Go to ${label}`}
                    className={`group relative flex items-center justify-end transition-all duration-300`}
                >
                    {/* Tooltip label */}
                    <span className="absolute right-6 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-base-200/80 px-2 py-0.5 rounded-md">
                        {label}
                    </span>
                    {/* Dot */}
                    <span
                        className={`block rounded-full transition-all duration-300 ${
                            activeSection === id
                                ? "w-3 h-3 bg-secondary shadow-[0_0_6px_2px_theme(colors.secondary/50%)]"
                                : "w-2 h-2 bg-gray-500 group-hover:bg-gray-300"
                        }`}
                    />
                </button>
            ))}
        </nav>
    );
};

export default SectionDots;
