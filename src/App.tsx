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

export default function App() {
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
