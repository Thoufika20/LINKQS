import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import linkqsLogo from "@/assets/linkqs-logo-new.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-border/40 py-0" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-5 sm:px-6 md:px-8 md:h-32">
        <a href="#" className="flex items-center gap-2">
          <img src={linkqsLogo} alt="LinKQ logo" className="h-10 w-auto object-contain sm:h-14 md:h-24" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-caption font-semibold text-foreground/80 transition-colors hover:text-foreground tracking-[0.18em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          className="text-foreground md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 glass-strong md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-[11px] font-medium text-foreground/80 transition-colors hover:text-foreground tracking-wider uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild className="w-full h-9 text-[11px]">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
