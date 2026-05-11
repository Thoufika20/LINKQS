import { Target, Zap, Shield, Users } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Product-First Thinking",
    description: "We don't just write code — we build products that solve real problems and drive business outcomes.",
  },
  {
    icon: Zap,
    title: "AI-Native Approach",
    description: "Every solution we build is designed with AI at its core, not as an afterthought.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Quality",
    description: "Clean architecture, rigorous testing, and scalable infrastructure from day one.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We embed with your team. Transparent communication, shared goals, and aligned incentives.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-caption font-medium text-primary mb-3 tracking-widest uppercase">About LinkQs</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-[1.2] sm:leading-tight">
              An AI-First <span className="gradient-text">Product Company</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              LinkQs is a modern software product development company specializing in SaaS and AI solutions. We partner with startups and enterprises to build intelligent, scalable products that create real value.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team combines deep engineering expertise with product strategy to deliver solutions that don't just work — they win in the market. Every pixel, every interaction, every moment of delight — designed with intention.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-4 rounded-xl glass p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:shadow-primary/8 hover:scale-[1.01] card-shadow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <pillar.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-foreground">{pillar.title}</h3>
                  <p className="text-caption text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
