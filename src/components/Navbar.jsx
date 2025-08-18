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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav') && !event.target.closest('button')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
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
      {/* Main Navbar - Strict viewport constraints */}
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full bg-white z-50 transition-all duration-300 overflow-hidden ${
          hasShadow ? "shadow-lg" : ""
        }`}
        style={{ maxWidth: '100vw' }}
      >
        {/* Mobile Header - Ultra strict constraints */}
        <div className="lg:hidden w-full max-w-full overflow-hidden">
          <div className="flex items-center justify-between h-16 px-2 sm:px-3 w-full max-w-full min-w-0">
            {/* Logo Container - Constrained */}
            <div className="flex items-center min-w-0 flex-shrink overflow-hidden max-w-[calc(100vw-4rem)]">
              <div 
                className="cursor-pointer flex items-center min-w-0 overflow-hidden"
                onClick={() => scrollToSection("hero")}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("hero"))}
                tabIndex={0}
                role="button"
                aria-label="Go to home section"
              >
                {/* <img
                  src={logo}
                  alt="MLP Insights"
                  className="h-12 sm:h-10 w-auto max-w-full object-contain cursor-pointer flex-shrink-0 scale-150"
                  style={{ maxHeight: '40px', maxWidth: 'calc(100vw - 5rem)' }}
                  onClick={() => scrollToSection("hero")}
                /> */}
                <img
                src={logo}
                alt="MLP Insights"
                className="h-24 sm:h-24 object-contain cursor-pointer"
                onClick={() => scrollToSection("hero")}
              />
              </div>
            </div>

            {/* Menu Button - Fixed size */}
            <div className="flex-shrink-0 ml-2">
              <button
                className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
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

        {/* Desktop Header - Proper constraints */}
        <div className="hidden lg:block w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-center h-16 w-full min-w-0">
              <div className="flex-shrink-0 min-w-0">
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
                    className="h-10 w-auto max-w-full object-contain cursor-pointer scale-300"
                    style={{ maxHeight: '40px' }}
                    onClick={() => scrollToSection("hero")}
                  />
                </div>
              </div>

              <nav className="flex items-center space-x-4 lg:space-x-8 min-w-0" role="navigation">
                {["Entreprises", "Shopper", "faqs"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(section))}
                    className="text-gray-700 hover:text-blue-600 font-medium text-xs lg:text-sm uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 lg:px-2 py-1 whitespace-nowrap"
                    aria-label={`Go to ${section} section`}
                  >
                    {section === "Entreprises"
                      ? "ENTREPRISES"
                      : section === "Shopper"
                      ? "SHOPPER"
                      : "FAQs"}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Constrained */}
        <nav
          className={`lg:hidden w-full max-w-full bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
            menuOpen 
              ? "max-h-80 opacity-100 scale-y-100" 
              : "max-h-0 opacity-0 scale-y-95"
          }`}
          role="navigation"
          aria-label="Mobile navigation menu"
          aria-hidden={!menuOpen}
        >
          <div className="px-3 py-2 w-full max-w-full overflow-hidden">
            {[
              { id: "Entreprises", label: "ENTREPRISES" },
              { id: "Shopper", label: "SHOPPER" },
              { id: "faqs", label: "FAQs" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.id))}
                className="w-full max-w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium text-sm uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset border-l-4 border-transparent hover:border-blue-500 rounded-r block overflow-hidden"
                aria-label={`Go to ${item.label} section`}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span className="truncate block">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;