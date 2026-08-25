import {useEffect, useRef, type ReactNode} from "react";

interface SectionWrapperProps {
    id: string;
    activeSection: string;
    onActivate: (id: string) => void;
    children: ReactNode;
}

const SectionWrapper = ({id, activeSection, onActivate, children}: SectionWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) onActivate(id);
            },
            {threshold: 0.2}
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [id, onActivate]);

    const isActive = activeSection === id;

    return (
        <section
            id={id}
            ref={ref}
            className={[
                "w-full py-6 px-4",
                "md:fixed md:inset-0 md:flex md:items-center md:justify-center md:py-0 md:px-0 md:pt-16 md:pb-24",
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
