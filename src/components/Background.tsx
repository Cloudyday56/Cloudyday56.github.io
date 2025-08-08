import { useRef, useEffect } from "react";

// Animated wavy mesh network background using canvas
const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;

    // Responsive resize
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

    // Mesh config for left side
    const leftCols = 10;
    const leftRows = 7;
    const leftWidth = Math.min(width * 0.45, 600);
    const leftNodeSpacingX = leftWidth / (leftCols - 1);
    const leftNodeSpacingY = height / (leftRows + 1);
    type Node = { baseX: number; baseY: number; phase: number };
    const nodes: Node[] = [];
    for (let y = 0; y < leftRows; y++) {
      for (let x = 0; x < leftCols; x++) {
        nodes.push({
          baseX: x * leftNodeSpacingX + 40,
          baseY: (y + 1) * leftNodeSpacingY,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    // Small cluster in top right
    const clusterCols = 4;
    const clusterRows = 2;
    const clusterSpacingX = 60;
    const clusterSpacingY = 60;
    const clusterStartX = width - clusterCols * clusterSpacingX - 40;
    const clusterStartY = 40;
    for (let y = 0; y < clusterRows; y++) {
      for (let x = 0; x < clusterCols; x++) {
        nodes.push({
          baseX: clusterStartX + x * clusterSpacingX,
          baseY: clusterStartY + y * clusterSpacingY,
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
      // Draw lines for left mesh
      ctx.save();
      ctx.strokeStyle = "rgba(255, 200, 40, 0.18)";
      ctx.lineWidth = 2;
      for (let i = 0; i < leftCols * leftRows; i++) {
        const a = animatedNodes[i];
        // Connect to right
        if ((i + 1) % leftCols !== 0) {
          const b = animatedNodes[i + 1];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        // Connect to below
        if (i + leftCols < leftCols * leftRows) {
          const b = animatedNodes[i + leftCols];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      // Draw lines for top right cluster
      const clusterOffset = leftCols * leftRows;
      for (let i = clusterOffset; i < animatedNodes.length; i++) {
        const a = animatedNodes[i];
        // Connect to right
        if ((i - clusterOffset + 1) % clusterCols !== 0) {
          const b = animatedNodes[i + 1];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        // Connect to below
        if (i + clusterCols < animatedNodes.length) {
          const b = animatedNodes[i + clusterCols];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      ctx.restore();
      // Draw nodes
      for (const n of animatedNodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 200, 40, 0.45)";
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
