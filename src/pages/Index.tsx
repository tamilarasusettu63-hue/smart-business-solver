import HeroSection from "@/components/HeroSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ToolsSection from "@/components/ToolsSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import OutcomeSection from "@/components/OutcomeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ObjectivesSection />
      <ToolsSection />
      <DeliverablesSection />
      <OutcomeSection />
      <Footer />
    </main>
  );
};

export default Index;
