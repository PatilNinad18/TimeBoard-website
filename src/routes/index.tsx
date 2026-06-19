import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Screenshots } from "@/components/landing/Screenshots";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TimeBoard — Take Control of Your Time" },
      {
        name: "description",
        content:
          "TimeBoard is a lightweight, private desktop app to track activity, analyze productivity, and build better focus habits. Free for Windows.",
      },
      { property: "og:title", content: "TimeBoard — Take Control of Your Time" },
      {
        property: "og:description",
        content:
          "Track activity, analyze productivity, and build better focus habits with TimeBoard.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <DashboardShowcase />
      <HowItWorks />
      <Screenshots />
      <PrivacySection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
