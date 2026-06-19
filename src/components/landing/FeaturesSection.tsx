import {
  Activity,
  LineChart,
  Target,
  FileBarChart,
  ShieldCheck,
  Feather,
} from "lucide-react";
import { Reveal, motion } from "./Reveal";

const FEATURES = [
  {
    icon: Activity,
    title: "Activity Tracking",
    desc: "Track every application you use, automatically and in real time.",
  },
  {
    icon: LineChart,
    title: "Productivity Analytics",
    desc: "Understand exactly where your time goes with rich, visual insights.",
  },
  {
    icon: Target,
    title: "Focus Monitoring",
    desc: "Measure productive vs distracting time and protect your deep work.",
  },
  {
    icon: FileBarChart,
    title: "Reports Dashboard",
    desc: "Daily, weekly, and monthly insights that reveal your real patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    desc: "All data stored locally on your machine. No accounts, no cloud.",
  },
  {
    icon: Feather,
    title: "Lightweight Desktop App",
    desc: "Runs efficiently in the background without slowing you down.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Features
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient">master your time</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A focused toolkit that turns raw activity into clear, actionable
            productivity insights.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card group relative h-full overflow-hidden rounded-2xl p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.82_0.18_152/55%)]">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold">{feature.title}</h3>
                <p className="relative mt-2 text-muted-foreground">{feature.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
