
import { Download, Github, Monitor, Apple, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import {
  DOWNLOAD_URL,
  MAC_DOWNLOAD_URL,
  LINUX_DOWNLOAD_URL,
  GITHUB_URL,
  APP_VERSION,
} from "./constants";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-24">
            {/* Background glow effects */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 h-60 w-60 rounded-full bg-secondary/20 blur-[120px]" />

            {/* Heading */}
            <h2 className="relative text-4xl font-extrabold tracking-tight md:text-6xl">
              Ready to take back{" "}
              <span className="text-gradient">your time?</span>
            </h2>

            <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Track activity, understand your productivity, and build better
              focus habits with TimeBoard. Free, private, and lightweight.
            </p>

            {/* Download buttons */}
            <div className="relative mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Windows */}
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-background/20 p-5">
                <Monitor className="h-8 w-8" />

                <div>
                  <h3 className="font-semibold">Windows</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Windows 10 &amp; 11
                  </p>
                </div>

                <Button
                  asChild
                  variant="hero"
                  size="xl"
                  className="w-full"
                >
                  <a href={DOWNLOAD_URL}>
                    <Download className="h-5 w-5" />
                    Download .exe
                  </a>
                </Button>
              </div>

              {/* macOS */}
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-background/20 p-5">
                <Apple className="h-8 w-8" />

                <div>
                  <h3 className="font-semibold">macOS</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Apple Silicon (ARM64)
                  </p>
                </div>

                <Button
                  asChild
                  variant="hero"
                  size="xl"
                  className="w-full"
                >
                  <a href={MAC_DOWNLOAD_URL}>
                    <Download className="h-5 w-5" />
                    Download .dmg
                  </a>
                </Button>

                <span className="text-xs text-muted-foreground">
                  Experimental · Testing needed
                </span>
              </div>

              {/* Linux */}
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-background/20 p-5">
                <Terminal className="h-8 w-8" />

                <div>
                  <h3 className="font-semibold">Linux</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    x64 · AppImage
                  </p>
                </div>

                <Button
                  asChild
                  variant="hero"
                  size="xl"
                  className="w-full"
                >
                  <a href={LINUX_DOWNLOAD_URL}>
                    <Download className="h-5 w-5" />
                    Download AppImage
                  </a>
                </Button>

                <span className="text-xs text-muted-foreground">
                  Experimental · Testing needed
                </span>
              </div>
            </div>

            {/* Version and GitHub */}
            <div className="relative mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Version {APP_VERSION} · No account required · Data stored locally
              </p>

              <Button asChild variant="glass" size="xl">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
