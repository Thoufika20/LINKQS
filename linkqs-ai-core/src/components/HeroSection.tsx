import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      glow.style.opacity = "1";
    };

    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Particle network background */}
      <ParticleNetwork />

      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] transition-opacity duration-500 opacity-0"
      />

      {/* Ambient blurs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[160px] animate-glow-pulse" />
      <div className="absolute bottom-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-accent/8 blur-[140px] animate-glow-pulse" />

      <div className="container relative mx-auto px-5 sm:px-6 md:px-8 text-center">
        <h1 className="animate-fade-up-delay-1 mx-auto max-w-5xl text-3xl sm:text-6xl md:text-7xl font-bold text-foreground font-poppins tracking-[-0.02em] leading-[1.2] sm:leading-[1.1]">
          Develop Beyond Limits
        </h1>

        <p className="animate-fade-up-delay-2 mx-auto mt-6 sm:mt-8 max-w-3xl text-lg sm:text-xl text-muted-foreground font-inter px-2">
          We design, build, and scale modern SaaS products and AI solutions —
          from MVP to market leader.
        </p>

        <div className="animate-fade-up-delay-3 mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
          <Button variant="hero" size="lg" asChild className="h-10 px-5 sm:h-14 sm:px-8 text-sm sm:text-base">
            <a href="#contact" className="gap-2 w-full sm:w-auto">
              Start Your Project <ArrowRight size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild className="h-10 px-5 sm:h-14 sm:px-8 text-sm sm:text-base">
            <a href="#services" className="w-full sm:w-auto">Explore Services</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-delay-4 mt-10 sm:mt-16 mx-auto max-w-3xl glass rounded-2xl p-5 sm:p-8 soft-shadow">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "3x", label: "Faster with AI" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-stats gradient-text">{stat.value}</div>
                <div className="mt-1 text-caption text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
