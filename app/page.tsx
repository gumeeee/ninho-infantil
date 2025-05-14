import HeroSection from "@/components/hero-section";
import { ContentCard } from "@/components/ui/content-card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="md:w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Lançamentos!</h1>
        <ContentCard />
      </div>
    </>
  );
}
