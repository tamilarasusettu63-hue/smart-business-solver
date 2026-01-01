import { FileCode, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

const deliverables = [
  {
    icon: FileCode,
    title: "Jupyter Notebook",
    description: "Well-documented, interactive notebook with complete code implementation."
  },
  {
    icon: BookOpen,
    title: "Problem Definition",
    description: "Clear mathematical formulation with variables, objectives, and constraints."
  },
  {
    icon: Lightbulb,
    title: "Optimization Solution",
    description: "Python-based solution using PuLP for linear programming."
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description: "Result interpretation with actionable recommendations."
  }
];

const DeliverablesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Project <span className="text-gradient">Deliverables</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              A comprehensive package demonstrating the complete optimization workflow from problem definition to actionable insights.
            </p>
            
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Code Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl bg-card border border-border overflow-hidden shadow-card">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">optimization_model.py</span>
              </div>
              <pre className="p-6 text-sm font-mono overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-accent">from</span> pulp <span className="text-accent">import</span> *{"\n\n"}
                  <span className="text-muted-foreground/60"># Create the problem</span>{"\n"}
                  prob = LpProblem(<span className="text-primary">"Maximize_Profit"</span>, LpMaximize){"\n\n"}
                  <span className="text-muted-foreground/60"># Decision variables</span>{"\n"}
                  x1 = LpVariable(<span className="text-primary">"Product_A"</span>, lowBound=<span className="text-accent">0</span>){"\n"}
                  x2 = LpVariable(<span className="text-primary">"Product_B"</span>, lowBound=<span className="text-accent">0</span>){"\n\n"}
                  <span className="text-muted-foreground/60"># Objective function</span>{"\n"}
                  prob += <span className="text-accent">40</span>*x1 + <span className="text-accent">30</span>*x2{"\n\n"}
                  <span className="text-muted-foreground/60"># Constraints</span>{"\n"}
                  prob += <span className="text-accent">2</span>*x1 + x2 {"<="} <span className="text-accent">100</span>{"\n"}
                  prob += x1 + <span className="text-accent">3</span>*x2 {"<="} <span className="text-accent">90</span>{"\n\n"}
                  <span className="text-muted-foreground/60"># Solve</span>{"\n"}
                  prob.solve()
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
