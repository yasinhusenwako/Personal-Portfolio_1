import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border h-[100px] mt-20">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="text-sm text-muted-foreground">
            <div className="font-semibold text-foreground">
              Yasin <span className="text-primary">Husen</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Fullstack Web Developer
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Yasin Husen. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/yasinhusenwako"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yasin-husen-79a3a5364/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:yhusen636@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
