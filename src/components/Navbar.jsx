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
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setHasShadow(scrollPercent > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full top-0 bg-white px-4 sm:px-6 lg:px-8 fixed z-50 transition-shadow duration-300 ${
          hasShadow ? "shadow-lg" : ""
        }`}
      >
        {/* Mobile container with better alignment */}
        <div className="flex items-center justify-between h-16 max-w-[1120px] mx-auto lg:hidden">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <img
              src={logo}
              alt="NEO Medical Logo"
              className="h-10 sm:h-10 object-contain cursor-pointer scale-200"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          {/* Hamburger Menu Icon - Perfectly aligned */}
          <button
            className="flex items-center justify-center w-8 h-8 text-global-1 focus:outline-none focus:ring-0 shadow-none border-0 bg-transparent"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ boxShadow: "none" }}
          >
            {menuOpen ? (
              <X className="w-6 h-6 hidden" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop container */}
        <div className="hidden lg:block w-full mt-4 mb-4 sm:mt-6 sm:mb-6 max-w-[1120px] mx-auto">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-full">
              <img
                src={logo}
                alt="NEO Medical Logo"
                className="h-10 sm:h-10 object-contain cursor-pointer scale-300"
                onClick={() => scrollToSection("hero")}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center justify-end">
              <div className="flex items-center gap-10">
                {["Accueil", "Entreprises", "faqs"].map((section, index) => (
                  <button
                    key={index}
                    role="menuitem"
                    onClick={() => scrollToSection(section)}
                    className="text-base font-azeret font-semibold leading-[19px] text-global-1 transition-colors duration-200 focus:outline-none focus:ring-0"
                  >
                    {section === "Accueil"
                      ? "ACCUEIL"
                      : section === "Entreprises"
                      ? "ENTREPRISES"
                      : "FAQs"}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-global-4 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200/20">
          <div className="w-32 h-7">
            {/* <img
              src={logo}
              alt="NEO Medical Logo"
              className="w-full h-full object-contain"
            /> */}
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-8 h-8 text-global-1 rounded-full transition-colors focus:outline-none focus:ring-0 shadow-none border-0 bg-transparent"
            aria-label="Close menu"
            style={{ boxShadow: "none" }}
          >
            <svg
              className="w-6 h-6 text-global-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-6 space-y-2">
          <button
            role="menuitem"
            onClick={() => scrollToSection("Accueil")}
            className="group text-lg font-azeret font-medium text-global-1 transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-global-1"
          >
            <span className="flex items-center">
              Accueil
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          <button
            role="menuitem"
            onClick={() => scrollToSection("Entreprises")}
            className="group text-lg font-azeret font-medium text-global-1 transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-global-1"
          >
            <span className="flex items-center">
              Entreprises
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          <button
            role="menuitem"
            onClick={() => scrollToSection("faqs")}
            className="group text-lg font-azeret font-medium text-global-1 transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-global-1"
          >
            <span className="flex items-center">
              Faqs
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-center">
          <p className="text-sm text-global-3/70 font-azeret">
            © 2025 MLP Insights
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
