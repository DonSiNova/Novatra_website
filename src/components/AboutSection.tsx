import { Factory, Database, Network, Bot, Activity, Settings, Brain, Cloud, TrendingUp, Cpu, Zap, Gauge } from "lucide-react";

const AboutSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI, ML & Deep Learning",
      description: "Advanced machine learning and deep learning models tailored for industrial applications"
    },
    {
      icon: Bot,
      title: "Agentic AI Workflows",
      description: "Autonomous intelligent systems that adapt and optimize in real-time"
    },
    {
      icon: Activity,
      title: "Sensor Data Analysis",
      description: "Time and frequency domain analysis for comprehensive insights"
    },
    {
      icon: Cloud,
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
      icon: Network,
      title: "Edge Computing",
      description: "Real-time data processing at the edge for immediate actionable insights"
    },
    {
      icon: Settings,
      title: "Industrial Simulation",
      description: "Digital twins and optimization for manufacturing processes"
    },
    {
      icon: Gauge,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization of industrial systems"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation solutions for enhanced productivity and reduced costs"
    },
    {
      icon: Cpu,
      title: "IoT Integration",
      description: "Connected device ecosystems for comprehensive industrial intelligence"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(200 100% 60%) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Capabilities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bridge AI, industry, and innovation to deliver transformative solutions. 
            Our expertise spans cutting-edge technology and deep industrial knowledge, 
            making the dream of industrial intelligence a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {capability.description}
                    </p>
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

export default AboutSection;
