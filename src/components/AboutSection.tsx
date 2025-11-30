const AboutSection = () => {
  const capabilities = [
    {
      number: "01",
      title: "AI, ML & Deep Learning",
      description: "Advanced machine learning and deep learning models tailored for industrial applications"
    },
    {
      number: "02",
      title: "Agentic AI Workflows",
      description: "Autonomous intelligent systems that adapt and optimize in real-time"
    },
    {
      number: "03",
      title: "Sensor Data Analysis",
      description: "Time and frequency domain analysis for comprehensive insights"
    },
    {
      number: "04",
      title: "Cloud Integration",
      description: "Seamless AWS, Azure, and Google Cloud deployment and management"
    },
    {
      number: "05",
      title: "Predictive Analytics",
      description: "Forecasting and automation to prevent issues before they occur"
    },
    {
      number: "06",
      title: "Smart Manufacturing",
      description: "Industry 4.0 solutions and digital transformation for production excellence"
    },
    {
      number: "07",
      title: "Industrial Analytics",
      description: "Data-driven insights that drive operational efficiency and performance"
    },
    {
      number: "08",
      title: "Edge Computing",
      description: "Real-time data processing at the edge for immediate actionable insights"
    },
    {
      number: "09",
      title: "Industrial Simulation",
      description: "Digital twins and optimization for manufacturing processes"
    },
    {
      number: "10",
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization of industrial systems"
    },
    {
      number: "11",
      title: "Process Automation",
      description: "Intelligent automation solutions for enhanced productivity and reduced costs"
    },
    {
      number: "12",
      title: "IoT Integration",
      description: "Connected device ecosystems for comprehensive industrial intelligence"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 hover:bg-secondary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="space-y-3">
                <div className="text-xs font-mono text-accent tracking-wider">
                  {capability.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
              
              {/* Subtle hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
