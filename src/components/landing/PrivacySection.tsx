import { ShieldCheck, UserX, CloudOff, EyeOff, Database } from "lucide-react";
import { Reveal, motion } from "./Reveal";

const POINTS = [
  { icon: UserX, label: "No account required" },
  { icon: CloudOff, label: "No cloud storage" },
  { icon: EyeOff, label: "No tracking" },
  { icon: Database, label: "Local SQLite database" },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
                <div className="absolute inset-0 animate-glow-pulse rounded-full bg-gradient-brand opacity-25 blur-3xl" />
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card animate-float flex h-44 w-44 items-center justify-center rounded-[2rem]"
                >
                  <ShieldCheck className="h-20 w-20 text-primary" strokeWidth={1.5} />
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Privacy
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                Your data never leaves{" "}
                <span className="text-gradient">your device</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                TimeBoard is built local-first. Everything stays on your machine
                — always yours, always private.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {POINTS.map((point, i) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <point.icon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{point.label}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
