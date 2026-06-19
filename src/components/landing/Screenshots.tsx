import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import dashboard from "@/assets/dashboard.png";
import activity from "@/assets/activity.png";
import analytics from "@/assets/analytics.png";
import reports from "@/assets/reports.png";
import settings from "@/assets/settings.png";

const SHOTS = [
  { src: dashboard, label: "Dashboard" },
  { src: activity, label: "Activity" },
  { src: analytics, label: "Analytics" },
  { src: reports, label: "Reports" },
  { src: settings, label: "Settings" },
];

export function Screenshots() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => window.clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section id="screenshots" className="overflow-hidden py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Screenshots
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            A closer <span className="text-gradient">look inside</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {SHOTS.map((shot, i) => (
                <div
                  key={shot.label}
                  className="min-w-0 shrink-0 grow-0 basis-[88%] px-3 md:basis-[70%] lg:basis-[60%]"
                >
                  <div
                    className={`glass-card overflow-hidden rounded-2xl p-2 transition-all duration-500 ${
                      selected === i ? "opacity-100" : "opacity-40 scale-95"
                    }`}
                  >
                    <img
                      src={shot.src}
                      alt={`TimeBoard ${shot.label} screen`}
                      className="w-full rounded-xl"
                      loading="lazy"
                    />
                    <div className="px-3 py-3 text-center text-sm font-semibold">
                      {shot.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container-page mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {SHOTS.map((shot, i) => (
                <button
                  key={shot.label}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to ${shot.label}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === i ? "w-7 bg-primary" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
