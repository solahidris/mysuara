import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { HomeFooter } from "@/components/home/home-footer";
import { HowItWorksSection } from "@/components/home/how-it-works-section";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center bg-[var(--bg)] px-4 pt-[97px] text-[var(--ink)] sm:px-6">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <HomeFooter />
    </div>
  );
}
