import healthcareImg from "@/assets/healthcare-industry.jpg";
import automotiveImg from "@/assets/automotive-industry.jpg";
import energyImg from "@/assets/energy-industry.jpg";

const Industries = () => {
  const industries = [
    {
      image: healthcareImg,
      title: "Healthcare",
      description: "We deliver advanced predictive analytics, real-time quality monitoring, and comprehensive digital compliance solutions that empower healthcare organizations to enhance patient outcomes, optimize operational efficiency, and maintain stringent regulatory standards. Employing ML, DL, and AI integration for medical devices and pharmaceutical applications across all stages of development and deployment.",
      features: ["ML & DL Integration", "Medical Devices", "Pharmaceutical AI"]
    },
    {
      image: automotiveImg,
      title: "Automotive",
      description: "Our smart manufacturing solutions integrate sensor-driven optimization, artificial intelligence, and advanced analytics to transform automotive production lines, enabling manufacturers to achieve unprecedented levels of quality control, process efficiency, and real-time decision-making throughout the entire vehicle lifecycle from design to delivery.",
      features: ["Smart Manufacturing", "Process Optimization", "Cybersecurity"]
    },
    {
      image: energyImg,
      title: "Energy",
      description: "We provide comprehensive predictive maintenance frameworks, energy efficiency optimization, and advanced reliability solutions that enable power generation and distribution companies to maximize uptime, reduce operational costs, minimize environmental impact, and ensure continuous, reliable delivery of energy across critical infrastructure networks.",
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
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Industry Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                <div className="relative p-8 -mt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
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
