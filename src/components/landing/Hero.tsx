import { motion } from "motion/react";
import { Download, ArrowRight, Activity, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { DOWNLOAD_URL } from "./constants";
import logo from "@/assets/logo.png";
// import dashboardImg from "@/assets/image-6.png.asset.json";
import analytics from "@/assets/anayltics-dark.png";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden md:block absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] animate-glow-pulse" />
        <div className="hidden md:block absolute right-[8%] top-[30%] h-[360px] w-[360px] rounded-full bg-secondary/20 blur-[130px] animate-glow-pulse" />
      </div>
      <ParticleBackground />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Now available for Windows · v1.0.0
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mx-auto flex w-full max-w-full flex-col items-center gap-3 rounded-3xl bg-white/5 px-4 py-4 text-center backdrop-blur-xl sm:px-6 sm:py-6 md:max-w-[900px] md:flex-row md:text-left"
          >
            <img src={logo} alt="TimeBoard logo" className="h-10 w-10 rounded-xl object-contain" />
            <h1 className="text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Take Control of <span className="text-gradient">Your Time</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl"
          >
            Track activity, analyze productivity, and build better focus habits
            with TimeBoard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl">
              <a href={DOWNLOAD_URL}>
                <Download className="h-5 w-5" />
                Download for Windows
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#features">
                View Features
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="relative mx-auto mt-16 max-w-5xl [perspective:1600px]"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-30 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-2xl p-2">
            <img
              src={analytics}
              alt="TimeBoard analytics dashboard showing productivity score, time distribution and app usage breakdown"
              className="w-full rounded-xl"
              loading="eager"
              width={1916}
              height={983}
            />
          </div>

          {/* Floating productivity cards */}
          <FloatingCard
            className="-left-4 top-16 md:-left-12"
            icon={<Target className="h-5 w-5 text-primary" />}
            label="Focus Score"
            value="46%"
            delay={0.7}
          />
          <FloatingCard
            className="-right-4 top-32 md:-right-10"
            icon={<TrendingUp className="h-5 w-5 text-secondary" />}
            label="Productive Time"
            value="0h 27m"
            delay={0.9}
          />
          <FloatingCard
            className="-left-2 bottom-10 md:-left-14"
            icon={<Activity className="h-5 w-5 text-primary" />}
            label="Sessions"
            value="228"
            delay={1.1}
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  label,
  value,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease }}
      className={`absolute hidden animate-float md:block ${className}`}
    >
      <div className="glass-card flex items-center gap-3 rounded-xl px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
          {icon}
        </span>
        <div className="text-left">
          <div className="text-[11px] text-muted-foreground">{label}</div>
          <div className="text-base font-bold">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}
