import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Animated wavy mesh network background using canvas
const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isPC = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d"); // 2-dimensional
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;

    // Adapt to different screen sizes
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    resize();
    window.addEventListener("resize", resize);

    // Organic mesh
    type Node = { baseX: number; baseY: number; phase: number };
    const nodes: Node[] = [];
    let leftNodeCount = 40,
      clusterNodeCount = 8;
    if (isMobile) {
      leftNodeCount = 14;
      clusterNodeCount = 3;
      // Top region
      for (let i = 0; i < Math.floor(leftNodeCount / 2); i++) {
        nodes.push({
          baseX: Math.random() * (width - 60) + 30,
          baseY: Math.random() * 120 + 30,
          phase: Math.random() * Math.PI * 2,
        });
      }
      // Bottom region
      for (let i = 0; i < Math.ceil(leftNodeCount / 2); i++) {
        nodes.push({
          baseX: Math.random() * (width - 60) + 30,
          baseY: height - Math.random() * 120 - 30,
          phase: Math.random() * Math.PI * 2,
        });
      }

    } else if (isPC) {
      leftNodeCount = 44;
      clusterNodeCount = 10;
      // Left region (wider and taller)
      for (let i = 0; i < leftNodeCount; i++) {
        nodes.push({
          baseX: Math.random() * Math.min(width * 0.6, 900) + 60,
          baseY: Math.random() * (height - 120) + 60,
          phase: Math.random() * Math.PI * 2,
        });
      }
      // Top right (wider and taller)
      for (let i = 0; i < clusterNodeCount; i++) {
        nodes.push({
          baseX: width - Math.random() * 340 - 60,
          baseY: Math.random() * 220 + 60,
          phase: Math.random() * Math.PI * 2,
        });
      }
    } else {
      // Laptop: original regions
      leftNodeCount = 40;
      clusterNodeCount = 8;
      for (let i = 0; i < leftNodeCount; i++) {
        nodes.push({
          baseX: Math.random() * Math.min(width * 0.45, 600) + 40,
          baseY: Math.random() * (height - 80) + 40,
          phase: Math.random() * Math.PI * 2,
        });
      }
      for (let i = 0; i < clusterNodeCount; i++) {
        nodes.push({
          baseX: width - Math.random() * 220 - 40,
          baseY: Math.random() * 120 + 40,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function animateMesh(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Animate nodes
      const animatedNodes = nodes.map((n) => {
        // Wavy y offset
        const wave = Math.sin(time / 1200 + n.phase + n.baseX / 200) * 24;
        return {
          x: n.baseX,
          y: n.baseY + wave,
        };
      });
      // Draw organic lines: connect each node to its 3 nearest neighbors
      ctx.save();
      ctx.strokeStyle = "rgba(255, 200, 40, 0.18)";
      ctx.lineWidth = 2;
      for (let i = 0; i < animatedNodes.length; i++) {
        const a = animatedNodes[i];
        // Find nearest neighbors
        const distances = animatedNodes.map((b, j) => ({
          idx: j,
          dist: Math.hypot(a.x - b.x, a.y - b.y),
        }));
        distances.sort((d1, d2) => d1.dist - d2.dist);
        for (let k = 1; k <= 3; k++) {
          const neighbor = animatedNodes[distances[k].idx];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(neighbor.x, neighbor.y);
          ctx.stroke();
        }
      }
      ctx.restore();
      // Draw nodes
      for (const n of animatedNodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 200, 40, 0.65)";
        ctx.shadowColor = "#ffd700";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      animationId = requestAnimationFrame(animateMesh);
    }
    animationId = requestAnimationFrame(animateMesh);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: "block" }}
    />
  );
};

export default Background;
