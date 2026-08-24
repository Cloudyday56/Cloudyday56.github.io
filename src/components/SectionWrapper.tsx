import { useEffect, useRef, type ReactNode } from "react";

interface SectionWrapperProps {
    id: string;
    activeSection: string;
    onActivate: (id: string) => void;
    children: ReactNode;
}

const SectionWrapper = ({ id, activeSection, onActivate, children }: SectionWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Observe intersection for mobile natural-scroll active tracking
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) onActivate(id);
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [id, onActivate]);

    const isActive = activeSection === id;

    return (
        /*
         * Desktop: fixed-height viewport sections with CSS transition.
         * We use a combination of:
         *   - opacity  (fade in/out)
         *   - translateY (slide up when leaving, slide in from below when entering)
         *   - pointer-events none when inactive so hidden sections aren't tabbable
         *
         * Mobile (< md): plain block sections that stack and scroll normally.
         */
        <section
            id={id}
            ref={ref}
            className={[
                // Mobile: normal stacked layout
                "w-full py-6 px-4",
                // Desktop: full-viewport panel with transition
                "md:fixed md:inset-0 md:flex md:items-center md:justify-center md:py-0 md:px-0 md:pt-16",
                "md:transition-all md:duration-700 md:ease-in-out",
                isActive
                    ? "md:opacity-100 md:translate-y-0 md:pointer-events-auto md:z-10"
                    : "md:opacity-0 md:translate-y-8 md:pointer-events-none md:z-0",
            ].join(" ")}
            aria-hidden={!isActive}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
