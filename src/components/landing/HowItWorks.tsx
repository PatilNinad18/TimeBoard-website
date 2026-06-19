import { Download, MousePointerClick, Play, Sparkles } from "lucide-react";
import { Reveal, motion } from "./Reveal";

const STEPS = [
  {
    icon: Download,
    title: "Download TimeBoard",
    desc: "Grab the free installer for Windows — no account, no sign-up required.",
  },
  {
    icon: MousePointerClick,
    title: "Install in one click",
    desc: "A fast, lightweight setup gets you running in under a minute.",
  },
  {
    icon: Play,
    title: "Start tracking automatically",
    desc: "TimeBoard quietly records your activity in the background.",
  },
  {
    icon: Sparkles,
    title: "Improve with insights",
    desc: "Review daily reports and build better focus habits over time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Up and running in <span className="text-gradient">four steps</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-5 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.82_0.18_152/55%)] md:absolute md:left-1/2 md:-translate-x-1/2">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`glass-card flex-1 rounded-2xl p-6 md:max-w-[44%] ${
                      i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.desc}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
