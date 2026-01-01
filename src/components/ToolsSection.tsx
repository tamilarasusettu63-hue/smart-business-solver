const tools = [
  {
    name: "Python",
    description: "Core programming language",
    color: "from-[#3776ab] to-[#ffd43b]"
  },
  {
    name: "PuLP",
    description: "Linear Programming library",
    color: "from-primary to-accent"
  },
  {
    name: "Jupyter",
    description: "Interactive notebooks",
    color: "from-[#f37626] to-[#e06c00]"
  },
  {
    name: "Operations Research",
    description: "Mathematical foundations",
    color: "from-accent to-primary"
  }
];

const ToolsSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful stack for building scalable optimization solutions.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color}`} />
              
              <h3 className="text-xl font-bold font-display mb-1">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
