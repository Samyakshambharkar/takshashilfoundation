
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-takshashil-blue text-white p-2 rounded-md">
            <BookOpen className="h-6 w-6" />
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
          <Button className="btn-primary">
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
              <Button className="w-full btn-primary">
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
