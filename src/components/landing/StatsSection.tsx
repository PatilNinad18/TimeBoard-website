import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Activity, BarChart3, CalendarDays, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: Activity, value: 100, suffix: "%", label: "Activity Tracking" },
  { icon: BarChart3, value: 24, suffix: "/7", label: "Focus Analytics" },
  { icon: CalendarDays, value: 3, suffix: "x", label: "Daily Reports" },
  { icon: ShieldCheck, value: 0, suffix: "", label: "Local Privacy", display: "Local" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-border/60 py-16">
      <div className="container-page">
        <Reveal className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Built for focused professionals
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="glass-card group flex flex-col items-center rounded-2xl px-4 py-7 text-center transition-transform duration-300 hover:-translate-y-1">
                <stat.icon className="mb-3 h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl font-extrabold md:text-4xl">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <Counter to={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
