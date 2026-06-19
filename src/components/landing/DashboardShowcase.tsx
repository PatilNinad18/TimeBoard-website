import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "./Reveal";

const FOCUS = [40, 62, 55, 78, 70, 88, 82];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ACTIVITY = [30, 45, 38, 60, 52, 70, 48, 65, 80, 58, 72, 90];
const TOP_APPS = [
  { name: "Google Chrome", time: "28m", pct: 90, color: "bg-secondary" },
  { name: "TimeBoard", time: "20m", pct: 64, color: "bg-primary" },
  { name: "Visual Studio Code", time: "7m", pct: 24, color: "bg-primary" },
  { name: "Windows Explorer", time: "3m", pct: 12, color: "bg-secondary" },
];

function ScoreRing() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const r = 70;
  const circ = 2 * Math.PI * r;
  const score = 46;

  return (
    <div className="relative flex items-center justify-center">
      <svg ref={ref} width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
        <circle cx="90" cy="90" r={r} fill="none" stroke="oklch(1 0 0 / 8%)" strokeWidth="14" />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.82 0.18 152)" />
            <stop offset="100%" stopColor="oklch(0.72 0.12 184)" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="90"
          cy="90"
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: circ * (1 - score / 100) } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-extrabold">{score}%</span>
        <span className="text-xs text-muted-foreground">Productive</span>
      </div>
    </div>
  );
}

function FocusChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const max = Math.max(...FOCUS);
  return (
    <div ref={ref} className="flex h-32 items-end justify-between gap-2">
      {FOCUS.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <motion.div
            className="w-full rounded-t-md bg-gradient-brand"
            initial={{ height: 0 }}
            animate={inView ? { height: `${(v / max) * 100}%` } : {}}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ minHeight: 4 }}
          />
          <span className="text-[10px] text-muted-foreground">{DAYS[i]}</span>
        </div>
      ))}
    </div>
  );
}

function ActivityGraph() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const w = 320;
  const h = 90;
  const max = Math.max(...ACTIVITY);
  const step = w / (ACTIVITY.length - 1);
  const pts = ACTIVITY.map((v, i) => [i * step, h - (v / max) * (h - 10)]);
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.18 152 / 35%)" />
          <stop offset="100%" stopColor="oklch(0.82 0.18 152 / 0%)" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#areaGrad)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="oklch(0.82 0.18 152)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

function Bar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function DashboardShowcase() {
  return (
    <section id="dashboard" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[160px]" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Live Dashboard
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Your productivity, <span className="text-gradient">visualized</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A real-time command center for your focus — scores, trends, and the
            apps that shape your day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-card grid gap-5 rounded-3xl p-5 md:grid-cols-3 md:p-7">
            <div className="glass-card flex flex-col items-center justify-center rounded-2xl p-6">
              <h3 className="mb-4 self-start text-sm font-semibold text-muted-foreground">
                Productivity Score
              </h3>
              <ScoreRing />
            </div>

            <div className="glass-card rounded-2xl p-6 md:col-span-2">
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
                Focus Time — This Week
              </h3>
              <FocusChart />
            </div>

            <div className="glass-card rounded-2xl p-6 md:col-span-2">
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
                Daily Activity
              </h3>
              <ActivityGraph />
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="mb-5 text-sm font-semibold text-muted-foreground">
                Top Applications
              </h3>
              <div className="space-y-4">
                {TOP_APPS.map((app, i) => (
                  <div key={app.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{app.name}</span>
                      <span className="text-muted-foreground">{app.time}</span>
                    </div>
                    <Bar pct={app.pct} color={app.color} delay={i * 0.12} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
