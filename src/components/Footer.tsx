import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/savory-synergy-logo.png";
const Footer = () => {
  return <footer className="bg-warm-brown text-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Savory Synergy" className="h-10 w-10 object-contain" />
              <div className="font-logo font-semibold text-xl">
                <span className="bg-gradient-sunset bg-clip-text text-transparent">Savory</span>{" "}
                <span className="text-warm-cream">Synergy</span>
              </div>
            </div>
            <p className="text-warm-cream/80 text-sm leading-relaxed">
              Revolutionizing food delivery by helping restaurants save up to 50% on commission fees while maintaining excellent service quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-warm-cream/80 hover:text-warm-cream transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#restaurants" className="text-warm-cream/80 hover:text-warm-cream transition-colors text-sm">
                  For Restaurants
                </a>
              </li>
              <li>
                <a href="#drivers" className="text-warm-cream/80 hover:text-warm-cream transition-colors text-sm">
                  For Drivers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-warm-cream/80 hover:text-warm-cream transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-warm-cream/80">Delivery Cost Reduction</li>
              <li className="text-warm-cream/80">Driver Network</li>
              <li className="text-warm-cream/80">Platform Integration</li>
              <li className="text-warm-cream/80">Route Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-warm-cream/80 hover:text-warm-cream transition-colors text-sm">512-293-3666</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@savorysynergy.com" className="text-warm-cream/80 hover:text-warm-cream transition-colors text-sm">savorysynergy@gmail.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-warm-cream/80 text-sm">Serving restaurants in Georgia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-cream/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-cream/60 text-sm">© 2025 Savory Synergy. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-warm-cream/60 hover:text-warm-cream transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-cream/60 hover:text-warm-cream transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;