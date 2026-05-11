import { ArrowRight, Rocket, Brain, Zap, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Rocket size={28} />,
    title: "SaaS Product Development",
    tagline: "From Zero to Market-Ready",
    problem: "Ideas die in development limbo — slow builds, bloated teams, missed launches.",
    solution: "End-to-end product engineering from MVP to scale, with clean architecture and growth-ready infrastructure.",
    outcome: "Ship 3x faster. Validate sooner. Scale confidently.",
    highlights: ["MVP in 6–8 weeks", "Production-grade code", "Scale to 1M+ users"],
    className: "md:col-span-2",
    accent: "primary"
  },
  {
    icon: <Brain size={28} />,
    title: "Custom AI Solutions",
    tagline: "Intelligence, Tailored to You",
    problem: "Off-the-shelf AI doesn't understand your domain, data, or customers.",
    solution: "Custom ML models and intelligent automation engineered around your data.",
    outcome: "Unlock unique competitive insights.",
    highlights: ["Custom ML models", "Predictive analytics"],
    className: "md:col-span-1",
    accent: "accent"
  },
  {
    icon: <Zap size={28} />,
    title: "AI Integration",
    tagline: "Supercharge Your Apps",
    problem: "Existing apps missing the AI layer customers now expect.",
    solution: "Drop-in AI capabilities — smart search & recommendations — without rebuilding.",
    outcome: "Modernize in weeks, not quarters.",
    highlights: ["Smart search & RAG", "Process automation"],
    className: "md:col-span-1",
    accent: "primary"
  },
  {
    icon: <Bot size={28} />,
    title: "AI Agents & Automation",
    tagline: "Work Smarter, Not Harder",
    problem: "Repetitive manual work drains your team and caps your growth.",
    solution: "Autonomous AI agents that handle data, support, and operations coordinated 24/7.",
    outcome: "Cut operational costs by 40–60%.",
    highlights: ["Autonomous agents", "Workflow orchestration", "24/7 automation"],
    className: "md:col-span-2",
    accent: "accent"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px] -z-10" />

      <div className="container relative mx-auto px-5 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
            <Zap size={14} className="text-primary" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6 sm:mb-8 leading-[1.2] sm:leading-tight">
            Services Built for <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial MVP to advanced AI-driven platforms — we provide the engineering excellence to scale your vision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className={`group relative rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 border border-border/40 overflow-hidden flex flex-col justify-between ${
                service.className
              } ${
                idx % 2 === 0 ? "glass-strong elevated-shadow" : "glass card-shadow"
              }`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition-opacity duration-500 opacity-0 group-hover:opacity-20 ${
                service.accent === 'primary' ? 'bg-primary' : 'bg-accent'
              }`} />

              <div>
                {/* Icon & Tagline */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    service.accent === 'primary' ? 'gradient-bg text-primary-foreground' : 'bg-accent text-accent-foreground'
                  }`}>
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full border border-border/50 ${
                    service.accent === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    {service.tagline}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">The Challenge</p>
                    <p className="text-muted-foreground leading-relaxed italic">"{service.problem}"</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/80">The Solution</p>
                    <p className="text-foreground/90 font-medium leading-relaxed">{service.solution}</p>
                  </div>

                  <div className={`p-4 rounded-2xl border border-border/30 bg-background/40 backdrop-blur-sm`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Outcome</p>
                    <p className="font-bold text-lg text-foreground tracking-tight">{service.outcome}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {service.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70 bg-muted/40 px-3 py-1.5 rounded-lg border border-border/20">
                      <CheckCircle2 size={12} className="text-primary" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-foreground group/link"
              >
                Start Build
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-white">
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 sm:mt-28 text-center glass rounded-[3rem] p-10 sm:p-16 elevated-shadow max-w-5xl mx-auto border border-primary/10">
          <h4 className="text-2xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to <span className="gradient-text">Develop Beyond Limits?</span>
          </h4>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Whether you have a full spec or just a rough idea, we'll help you architect and build the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild className="h-10 sm:h-16 px-8 sm:px-10 text-sm sm:text-lg w-full sm:w-auto">
              <a href="#contact">Schedule Free Discovery</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-10 sm:h-16 px-8 sm:px-10 text-sm sm:text-lg w-full sm:w-auto rounded-full">
              <a href="#about">Our Methodology</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
