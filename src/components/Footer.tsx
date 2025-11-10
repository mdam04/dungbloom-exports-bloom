import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-full p-1.5">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">DungBloom</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Natural Growth Starts Here
            </p>
            <p className="text-xs text-secondary-foreground/60">
              100% Organic Cow Dung Powder from Tamil Nadu, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/product" className="text-sm hover:text-primary transition-colors">
                Product
              </Link>
              <Link to="/export" className="text-sm hover:text-primary transition-colors">
                Export
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>5/113, Earkolpatti, Dharmapuri 636810, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@dungbloom.com" className="hover:text-primary transition-colors">
                  contact@dungbloom.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919551805459" className="hover:text-primary transition-colors">
                  +91 9551805459
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold mb-4">Certifications</h3>
            <div className="text-sm space-y-2 text-secondary-foreground/80">
              <p>✓ 100% Organic Certified</p>
              <p>✓ Export Quality</p>
              <p>✓ MSME Registered</p>
              <p>✓ GST Compliant</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© {currentYear} DungBloom. Crafted with care in Tamil Nadu, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
