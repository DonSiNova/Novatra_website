import { Heart, Car, Zap } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Medical Devices",
      description: "Predictive analytics, quality monitoring, and digital compliance for healthcare innovation.",
      features: ["Predictive Analytics", "Quality Control", "Regulatory Compliance"]
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Smart manufacturing, sensor-driven optimization, and automotive AI solutions.",
      features: ["Smart Manufacturing", "Process Optimization", "AI Integration"]
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Predictive maintenance, energy efficiency, and reliability solutions for power systems.",
      features: ["Predictive Maintenance", "Energy Efficiency", "System Reliability"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Delivering specialized AI and analytics solutions across critical sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
