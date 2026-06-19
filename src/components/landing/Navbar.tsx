import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL } from "./constants";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-page">
        <div
          className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-card" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl">
              <img src={logo} alt="TimeBoard logo" className="h-6 w-6 rounded-sm object-contain" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">TimeBoard</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="hero" size="lg">
              <a href={DOWNLOAD_URL}>
                <Download className="h-4 w-4" />
                Download
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-1">
              <a href={DOWNLOAD_URL}>
                <Download className="h-4 w-4" />
                Download for Windows
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
