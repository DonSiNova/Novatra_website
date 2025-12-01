import { Brain, Workflow, LineChart, CloudCog, TrendingUp, Factory, Database, Cpu, Box, Briefcase, Zap, Wifi } from "lucide-react";

const AboutSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI, ML & Deep Learning",
      description: "Advanced machine learning and deep learning models tailored for industrial applications"
    },
    {
      icon: Workflow,
      title: "Agentic AI Workflows",
      description: "Autonomous intelligent systems that adapt and optimize in real-time"
    },
    {
      icon: LineChart,
      title: "Sensor Data Analysis",
      description: "Time and frequency domain analysis for comprehensive insights"
    },
    {
      icon: CloudCog,
      title: "Cloud Integration",
      description: "Seamless AWS, Azure, and Google Cloud deployment and management"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasting and automation to prevent issues before they occur"
    },
    {
      icon: Factory,
      title: "Smart Manufacturing",
      description: "Industry 4.0 solutions and digital transformation for production excellence"
    },
    {
      icon: Database,
      title: "Industrial Analytics",
      description: "Data-driven insights that drive operational efficiency and performance"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Real-time data processing at the edge for immediate actionable insights"
    },
    {
      icon: Box,
      title: "Industrial Simulation",
      description: "Digital twins and optimization for manufacturing processes"
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Professional proposal preparation that transforms raw ideas into industry-ready submissions"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation solutions for enhanced productivity and reduced costs"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Connected device ecosystems for comprehensive industrial intelligence"
    }
  ];

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Capabilities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bridge AI, industry, and innovation to deliver transformative solutions. 
            Our expertise spans cutting-edge technology and deep industrial knowledge, 
            making the dream of industrial intelligence a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-xl p-8 border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent group-hover:from-accent group-hover:to-accent/80 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
