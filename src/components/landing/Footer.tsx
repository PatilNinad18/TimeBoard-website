import { Clock, Github } from "lucide-react";
import { GITHUB_URL, APP_VERSION } from "./constants";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl">
              <img src={logo} alt="TimeBoard logo" className="h-6 w-6 rounded-sm object-contain" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">TimeBoard</span>
          </a>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#privacy" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#download" className="transition-colors hover:text-foreground">
              Download
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} TimeBoard. All rights reserved.</p>
          <p>Version {APP_VERSION}</p>
        </div>
      </div>
    </footer>
  );
}
