import { useEffect, useCallback } from "react";

const SECTIONS = ["intro", "experience", "projects", "links"];
const COOLDOWN_MS = 800; // debounce between section jumps

interface ScrollManagerProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

/**
 * ScrollManager
 *
 * On desktop (md+) this intercepts wheel, touch swipe, and keyboard
 * arrow/PageUp/PageDown events to navigate between full-screen sections
 * instead of normal scroll. On mobile it does nothing so natural scroll works.
 */
const ScrollManager = ({ activeSection, onNavigate }: ScrollManagerProps) => {
    const navigate = useCallback(
        (direction: 1 | -1) => {
            const idx = SECTIONS.indexOf(activeSection);
            const next = idx + direction;
            if (next >= 0 && next < SECTIONS.length) {
                onNavigate(SECTIONS[next]);
                // Scroll to anchor so URL hash and IntersectionObserver stay in sync on mobile
                const el = document.getElementById(SECTIONS[next]);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        },
        [activeSection, onNavigate]
    );

    useEffect(() => {
        // Only intercept on desktop
        const isDesktop = () => window.innerWidth >= 768;

        let lastTime = 0;
        const canNav = () => {
            const now = Date.now();
            if (now - lastTime > COOLDOWN_MS) { lastTime = now; return true; }
            return false;
        };

        const onWheel = (e: WheelEvent) => {
            if (!isDesktop()) return;
            e.preventDefault();
            if (!canNav()) return;
            navigate(e.deltaY > 0 ? 1 : -1);
        };

        let touchStartY = 0;
        const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
        const onTouchEnd = (e: TouchEvent) => {
            if (!isDesktop()) return;
            const delta = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) < 40) return;
            if (!canNav()) return;
            navigate(delta > 0 ? 1 : -1);
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (!isDesktop()) return;
            if (["ArrowDown", "PageDown"].includes(e.key)) { e.preventDefault(); if (canNav()) navigate(1); }
            if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); if (canNav()) navigate(-1); }
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchend", onTouchEnd, { passive: true });
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [navigate]);

    // Also handle anchor hash changes (e.g. navbar clicks)
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
