import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI and industrial intelligence"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparent, ethical, and reliable solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Delivering robust systems that perform when it matters most"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Long-term collaboration focused on your sustained success"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Novatratech
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              We make the dream of industrial intelligence come true
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 animate-fade-in">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
              <p>
                Novatratech LTD was founded on a singular vision: to bridge the gap between 
                advanced artificial intelligence and complex industrial challenges. In an era 
                where data is abundant but actionable insights are scarce, we recognized the 
                need for specialized solutions that truly understand the industrial landscape.
              </p>
              <p>
                Our journey began with a deep understanding of the challenges faced by industries 
                in medical devices, automotive manufacturing, and energy sectors. We saw companies 
                struggling to harness the power of their sensor data, to predict failures before 
                they occurred, and to optimize processes that had remained unchanged for decades.
              </p>
              <p>
                Today, Novatratech stands at the intersection of cutting-edge AI technology and 
                industrial expertise. We don't just implement solutions—we transform operations. 
                Our team combines deep learning specialists, industrial engineers, and cloud 
                architects to deliver systems that are both technologically advanced and 
                practically effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
              Our Mission
            </h2>
            <p className="text-2xl text-foreground font-light mb-8 animate-fade-in">
              "We make the dream of industrial intelligence come true."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              We believe that every industrial operation, no matter how complex, can benefit 
              from intelligent automation and data-driven decision making. Our mission is to 
              make advanced AI and machine learning accessible, practical, and transformative 
              for industries that power our modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed space-y-4">
              Our team is composed of seasoned professionals who bring together the rigour of academic research
              and the depth of real-world industry experience. This strong combination allows us to approach
              complex challenges with both scientific precision and practical insight.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              By uniting academic excellence with industry-driven thinking, we deliver solutions that are robust,
              innovative, and strategically aligned with the needs of modern organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
       <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Digital Transformation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Novatratech, we don't just deliver projects—we build partnerships. We're 
              committed to your long-term success, working alongside you to continuously 
              optimize, innovate, and grow. When you succeed, we succeed.
            </p>
            <div className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg">
              <p className="text-xl font-semibold">
                Let's build the future of industrial intelligence together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
