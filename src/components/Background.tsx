import {motion} from "framer-motion";
import {useEffect, useRef} from "react";

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
        for (let i = 0; i < 55; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.3,
                dx: (Math.random() - 0.5) * 0.25,
                dy: (Math.random() - 0.5) * 0.25,
                alpha: Math.random() * 0.4 + 0.1,
            });
        }

        let animId: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(120, 200, 220, ${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            }
            animId = requestAnimationFrame(draw);
        };
        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black">
            <motion.div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                initial={{opacity: 0, scale: 1.05}}
                animate={{opacity: 0.75, scale: 1}}
                transition={{duration: 1.8, ease: "easeOut"}}
                style={{
                    backgroundImage: "url('/blue-green-painting.png')",
                    filter: "brightness(0.85) contrast(1.05) saturate(1.0)",
                }}
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/60"/>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"/>
        </div>
    );
};

export default Background;
