import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { DOWNLOAD_URL, GITHUB_URL } from "./constants";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 h-60 w-60 rounded-full bg-secondary/20 blur-[120px]" />

            <h2 className="relative text-4xl font-extrabold tracking-tight md:text-6xl">
              Ready to take back <span className="text-gradient">your time?</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Join focused professionals using TimeBoard to understand their days
              and build lasting habits. Free, private, and lightweight.
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href={DOWNLOAD_URL}>
                  <Download className="h-5 w-5" />
                  Download TimeBoard for Windows
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            <p className="relative mt-5 text-sm text-muted-foreground">
              Windows 10 &amp; 11 · v1.0.0 · No account required
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
