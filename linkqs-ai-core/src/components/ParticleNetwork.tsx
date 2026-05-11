import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  pulse: number;
  hue: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    const connectionDistance = isMobile ? 100 : isTablet ? 140 : 180;
    const particleCount = isMobile ? 40 : isTablet ? 65 : 90;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleLeave = () => {
      mouseRef.current.active = false;
    };
    canvas.parentElement?.addEventListener("mousemove", handleMouse);
    canvas.parentElement?.addEventListener("mouseleave", handleLeave);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1.2,
        baseOpacity: Math.random() * 0.5 + 0.35,
        pulse: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.5 ? 233 : 262,
      });
    }

    const draw = () => {
      time += 0.01;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      // Update & draw particles
      for (const p of particles) {
        // Mouse repulsion / attraction
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 200 && mdist > 0) {
            const force = (200 - mdist) / 200;
            p.vx += (mdx / mdist) * force * 0.15;
            p.vy += (mdy / mdist) * force * 0.15;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        // Gentle drift baseline
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));

        const pulseOpacity = p.baseOpacity + Math.sin(time * 2 + p.pulse) * 0.2;

        // Glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6);
        grad.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${pulseOpacity * 0.6})`);
        grad.addColorStop(1, `hsla(${p.hue}, 80%, 60%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 62%, ${Math.min(1, pulseOpacity + 0.3)})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.4;
            const midHue = (particles[i].hue + particles[j].hue) / 2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${midHue}, 70%, 60%, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Mouse connections
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            const alpha = (1 - dist / 220) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `hsla(248, 85%, 65%, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouse);
      canvas.parentElement?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default ParticleNetwork;
