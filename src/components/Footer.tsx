import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Novatratech Logo" className="h-10 w-10" />
              <div>
                <div className="text-xl font-bold">Novatratech LTD</div>
                <div className="text-xs opacity-80">Industrial Intelligence</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Transforming industrial dreams into intelligent solutions through 
              advanced AI, machine learning, and data-driven analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Home
              </Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                About Us
              </Link>
              <a href="#industries" className="block text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Industries
              </a>
              <a href="#capabilities" className="block text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Capabilities
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@novatratech.co.uk" 
                className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all group"
              >
                <Mail className="w-4 h-4" />
                <span>info@novatratech.co.uk</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/novatratech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all group"
              >
                <Linkedin className="w-4 h-4" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center space-y-2">
          <p className="text-sm opacity-70">
            © {currentYear} Novatratech LTD. All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            Company Registration Number: 6720861 | Registered in England and Wales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
