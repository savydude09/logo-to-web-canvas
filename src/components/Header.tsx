import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/savory-synergy-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Savory Synergy" 
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="font-heading font-bold text-xl lg:text-2xl text-foreground">
              Savory Synergy
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#restaurants" className="text-foreground hover:text-primary transition-colors font-medium">
              For Restaurants
            </a>
            <a href="#drivers" className="text-foreground hover:text-primary transition-colors font-medium">
              For Drivers
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-warm transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#restaurants" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                For Restaurants
              </a>
              <a 
                href="#drivers" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                For Drivers
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button size="sm" className="bg-gradient-primary hover:shadow-warm transition-all">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;