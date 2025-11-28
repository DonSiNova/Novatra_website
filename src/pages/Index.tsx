import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <Industries />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
