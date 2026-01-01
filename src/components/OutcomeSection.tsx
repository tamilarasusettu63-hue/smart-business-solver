import { Rocket, GraduationCap, Zap } from "lucide-react";
import { Button } from "./ui/button";

const outcomes = [
  {
    icon: GraduationCap,
    title: "Hands-on Experience",
    description: "Practical skills in applying optimization techniques to real business scenarios."
  },
  {
    icon: Zap,
    title: "Analytical Thinking",
    description: "Enhanced problem-solving abilities through mathematical modeling."
  },
  {
    icon: Rocket,
    title: "AI-Driven Decisions",
    description: "Improved decision-making skills using data-driven approaches."
  }
];

const OutcomeSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Project <span className="text-gradient">Outcome</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Transform your analytical capabilities with practical optimization skills that drive smarter business strategies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold px-10 shadow-glow hover:opacity-90 transition-opacity">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
