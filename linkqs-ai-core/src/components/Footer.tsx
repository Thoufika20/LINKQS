import { Linkedin } from "lucide-react";
import linkqsLogo from "@/assets/linkqs-logo-new.png";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 sm:py-16">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a href="#" className="flex items-center gap-2">
              <img
                src={linkqsLogo}
                alt="LinKQ logo"
                className="h-16 w-auto object-contain sm:h-20 mix-blend-multiply"
              />
            </a>
            <p className="text-caption max-w-xs text-center text-muted-foreground md:text-left">
              Building the future of AI-first software products. From MVP to market leader.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/company/linkqs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://x.com/linkqs_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
            </div>
            <p className="text-caption text-muted-foreground">
              &copy; {new Date().getFullYear()} LinKQ. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#services" className="text-caption font-medium transition-colors hover:text-primary">Services</a>
            <a href="#about" className="text-caption font-medium transition-colors hover:text-primary">About</a>
            <a href="#contact" className="text-caption font-medium transition-colors hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
