import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasShadow(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav') && !event.target.closest('button')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open on mobile
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed/Sticky Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-[100vw] bg-white z-50 transition-shadow duration-300 ${
          hasShadow ? "shadow-lg" : ""
        }`}
      >
        {/* Mobile Header */}
        <div className="lg:hidden w-full">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center flex-shrink-0">
              <div 
                className="cursor-pointer flex items-center hover:opacity-80 transition-opacity"
                onClick={() => scrollToSection("hero")}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("hero"))}
                tabIndex={0}
                role="button"
                aria-label="Go to home section"
              >
                <img
                  src={logo}
                  alt="MLP Insights"
                  className="h-10 w-auto object-contain cursor-pointer scale-200"
                />
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                onKeyDown={(e) => handleKeyDown(e, () => setMenuOpen(!menuOpen))}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <div 
                  className="cursor-pointer hover:opacity-80 transition-opacity flex items-center"
                  onClick={() => scrollToSection("hero")}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("hero"))}
                  tabIndex={0}
                  role="button"
                  aria-label="Go to home section"
                >
                  <img
                    src={logo}
                    alt="MLP Insights"
                    className="h-10 w-auto object-contain cursor-pointer scale-300"
                  />
                </div>
              </div>

              <nav className="flex items-center space-x-4 lg:space-x-8" role="navigation">
                {["Entreprises", "Shopper", "Témoignages", "faqs"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(section))}
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors duration-200 px-2 py-1 whitespace-nowrap"
                    aria-label={`Go to ${section} section`}
                  >
                    {section === "Entreprises"
                      ? "ENTREPRISES"
                      : section === "Shopper"
                      ? "SHOPPER"
                      : section === "Témoignages"
                      ? "TEMOIGNAGES"
                      : "FAQs"}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Improved Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200 ${
            menuOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0"
          }`}
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <nav
            role="navigation"
            aria-label="Mobile navigation menu"
            aria-hidden={!menuOpen}
            className="py-2"
          >
            {[
              { id: "Entreprises", label: "ENTREPRISES" },
              { id: "Shopper", label: "SHOPPER" },
              { id: "Témoignages", label: "TEMOIGNAGES" },
              { id: "faqs", label: "FAQs" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.id))}
                className="w-full text-left px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium text-sm uppercase tracking-wide transition-all duration-200 hover:border-blue-500 block"
                aria-label={`Go to ${item.label} section`}
                tabIndex={menuOpen ? 0 : -1}
                style={{
                  animationDelay: menuOpen ? `${index * 0.1}s` : '0s',
                  animation: menuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black z-40 transition-opacity duration-300"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: menuOpen ? 1 : 0
          }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Add CSS for slide-in animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;