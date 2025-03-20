
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import DonationForm from "../donation/DonationForm";

// Logo can be replaced with custom logo image later
const LOGO_URL = "/placeholder.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDonationFormOpen, setIsDonationFormOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Library", href: "/library" },
    { name: "Education", href: "/education" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const handleOpenDonationForm = () => {
    setIsDonationFormOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* Custom logo image (can be replaced by site admin) */}
            <div className="w-10 h-10 bg-takshashil-blue rounded-md flex items-center justify-center overflow-hidden">
              <img 
                src={LOGO_URL} 
                alt="Takshashil Logo" 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '';
                  e.currentTarget.parentElement?.classList.add('fallback-logo');
                  const fallbackIcon = document.createElement('div');
                  fallbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-white"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>';
                  e.currentTarget.parentElement?.appendChild(fallbackIcon);
                }}
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-takshashil-blue font-playfair">
                Takshashil
              </span>
              <span className="text-xl text-takshashil-gold font-semibold font-playfair ml-1">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 link-underline ${
                  location.pathname === item.href
                    ? "text-takshashil-blue font-semibold"
                    : "text-gray-700 hover:text-takshashil-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="btn-primary"
              onClick={handleOpenDonationForm}
            >
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-takshashil-blue" />
              ) : (
                <Menu className="h-6 w-6 text-takshashil-blue" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-card px-2 pb-3 pt-2 mt-1 space-y-1 sm:px-3 animate-fade-in shadow-lg rounded-b-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "bg-takshashil-blue/10 text-takshashil-blue"
                      : "text-gray-700 hover:bg-takshashil-blue/10 hover:text-takshashil-blue"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-3">
                <Button 
                  className="w-full btn-primary"
                  onClick={handleOpenDonationForm}
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Donation Form Dialog */}
      <DonationForm 
        isOpen={isDonationFormOpen} 
        onClose={() => setIsDonationFormOpen(false)} 
      />
    </>
  );
};

export default Navbar;
