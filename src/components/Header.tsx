import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = ["Drone Inspections", "LiDAR Services", "Aviation"];
  const industries = [
    "Energy & Utilities",
    "Oil & Gas",
    "Defense",
    "Forestry & Conservation",
    "Government & Public Agencies",
    "Infrastructure & Transportation",
    "Construction & Engineering",
    "Mining & Aggregates",
    "Precision Agriculture",
    "Property Development",
    "Public Safety",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-background/60 backdrop-blur-lg border-b border-border/30"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal to-teal-bright rounded-lg flex items-center justify-center">
              <span className="text-navy-dark font-bold text-xl">V</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              VOLATUS AEROSPACE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItem label="Equipment" />
            <NavItem label="Services" items={services} />
            <NavItem label="Industries" items={industries} />
            <NavItem label="Academy" />
            <NavItem label="Investors" />
            <NavItem label="About" />
          </div>

          {/* Contact Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:8338652887" className="flex items-center space-x-2 text-muted-foreground hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">833-865-2887</span>
            </a>
            <Button className="bg-gold hover:bg-gold/90 text-navy-dark font-semibold">
              CONTACT US
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="py-4 space-y-3">
              <MobileNavItem label="Equipment" />
              <MobileNavItem label="Services" items={services} />
              <MobileNavItem label="Industries" items={industries} />
              <MobileNavItem label="Academy" />
              <MobileNavItem label="Investors" />
              <MobileNavItem label="About" />
              <div className="pt-4 border-t border-border">
                <a href="tel:8338652887" className="block px-4 py-2 text-gold font-semibold">
                  📞 833-865-2887
                </a>
                <Button className="w-full mx-4 mt-2 bg-gold hover:bg-gold/90 text-navy-dark font-semibold">
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavItem = ({ label, items }: { label: string; items?: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      <button 
        onClick={() => items && setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
        aria-expanded={items ? isOpen : undefined}
        aria-haspopup={items ? "true" : undefined}
      >
        <span>{label}</span>
        {items && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
      </button>

      {items && isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto z-50"
          role="menu"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({ label, items }: { label: string; items?: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => items && setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-foreground hover:bg-secondary transition-colors"
        aria-expanded={items ? isOpen : undefined}
        aria-haspopup={items ? "true" : undefined}
      >
        <span className="font-medium">{label}</span>
        {items && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
      </button>
      {items && isOpen && (
        <div
          className="bg-secondary/50 overflow-hidden"
          role="menu"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
