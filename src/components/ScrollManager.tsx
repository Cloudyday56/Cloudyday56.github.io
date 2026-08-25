import {useEffect, useCallback, useRef} from "react";

const SECTIONS = ["intro", "experience", "projects", "links"];
const COOLDOWN_MS = 800;

interface ScrollManagerProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

const ScrollManager = ({activeSection, onNavigate}: ScrollManagerProps) => {
    const lastTimeRef = useRef(0);
    const navigate = useCallback(
        (direction: 1 | -1) => {
            const idx = SECTIONS.indexOf(activeSection);
            const next = idx + direction;
            if (next >= 0 && next < SECTIONS.length) {
                onNavigate(SECTIONS[next]);
                // Scroll to anchor so URL hash and IntersectionObserver stay in sync on mobile
                const el = document.getElementById(SECTIONS[next]);
                if (el) el.scrollIntoView({behavior: "smooth"});
            }
        },
        [activeSection, onNavigate]
    );

    useEffect(() => {
        const isDesktop = () => window.innerWidth >= 768;

        const canNav = () => {
            const now = Date.now();
            if (now - lastTimeRef.current > COOLDOWN_MS) {
                lastTimeRef.current = now;
                return true;
            }
            return false;
        };

        const onWheel = (e: WheelEvent) => {
            if (!isDesktop()) return;
            e.preventDefault();
            if (!canNav()) return;
            navigate(e.deltaY > 0 ? 1 : -1);
        };

        let touchStartY = 0;
        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const onTouchEnd = (e: TouchEvent) => {
            if (!isDesktop()) return;
            const delta = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) < 40) return;
            if (!canNav()) return;
            navigate(delta > 0 ? 1 : -1);
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (!isDesktop()) return;
            if (["ArrowDown", "PageDown"].includes(e.key)) {
                e.preventDefault();
                if (canNav()) navigate(1);
            }
            if (["ArrowUp", "PageUp"].includes(e.key)) {
                e.preventDefault();
                if (canNav()) navigate(-1);
            }
        };

        window.addEventListener("wheel", onWheel, {passive: false});
        window.addEventListener("touchstart", onTouchStart, {passive: true});
        window.addEventListener("touchend", onTouchEnd, {passive: true});
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [navigate]);

    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (SECTIONS.includes(hash)) onNavigate(hash);
        };
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, [onNavigate]);

    return null;
};

export default ScrollManager;
