import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-primary" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, transparent 45%, hsl(200 100% 60% / 0.3) 45%, hsl(200 100% 60% / 0.3) 55%, transparent 55%)',
          backgroundSize: '80px 140px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Unlock{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Industrial Intelligence?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's transform your industrial challenges into intelligent solutions. 
            Our team is ready to help you accelerate your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white hover:opacity-90 group text-lg px-8"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground">
              Or reach us directly at{" "}
              <a 
                href="mailto:info@novatratech.com" 
                className="text-accent hover:underline font-medium"
              >
                info@novatratech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
