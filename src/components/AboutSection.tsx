import { Brain, Cloud, LineChart, Bot, Zap, Cpu } from "lucide-react";

const AboutSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "AI, ML & Deep Learning",
      description: "Advanced intelligence for complex challenges"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "AWS, Azure, GCP expertise"
    },
    {
      icon: LineChart,
      title: "Industrial Analytics",
      description: "Data-driven insights that matter"
    },
    {
      icon: Bot,
      title: "Agentic AI",
      description: "Autonomous intelligent systems"
    },
    {
      icon: Zap,
      title: "Sensor Data & Edge",
      description: "Real-time analysis at the edge"
    },
    {
      icon: Cpu,
      title: "Smart Manufacturing",
      description: "Industry 4.0 solutions"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Novatratech
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bridge AI, industry, and innovation to deliver transformative solutions. 
            Our expertise spans cutting-edge technology and deep industrial knowledge, 
            making the dream of industrial intelligence a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
