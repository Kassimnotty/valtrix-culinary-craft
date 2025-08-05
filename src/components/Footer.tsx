import { Link } from "react-router-dom";
import { ChefHat, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-accent" />
              <span className="text-2xl font-display font-bold text-accent">
                Valtrix Chef Pro
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Professional catering services and culinary education platform. 
              Elevating your events with exceptional cuisine and training the next generation of chefs.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-accent hover:text-accent/80 cursor-pointer" />
              <Facebook className="h-5 w-5 text-accent hover:text-accent/80 cursor-pointer" />
              <Twitter className="h-5 w-5 text-accent hover:text-accent/80 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catering" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Menu Gallery
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Culinary Courses
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-accent">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">info@valtrixchefpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">123 Culinary Avenue, Food City, FC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Valtrix Chef Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;