import { Target, Brain, Code2, BarChart3 } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Understand Problems",
    description: "Analyze real-world business optimization challenges and identify key decision factors."
  },
  {
    icon: Brain,
    title: "Formulate Models",
    description: "Define decision variables, objective functions, and constraints mathematically."
  },
  {
    icon: Code2,
    title: "Implement in Python",
    description: "Apply Linear Programming concepts programmatically using PuLP library."
  },
  {
    icon: BarChart3,
    title: "Analyze Results",
    description: "Solve and interpret optimization results for actionable business insights."
  }
];

const ObjectivesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Project <span className="text-gradient">Objectives</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A structured approach to mastering business optimization through hands-on implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={objective.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <objective.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{objective.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
