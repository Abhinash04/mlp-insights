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
        className={`w-screen max-w-full top-0 bg-white fixed z-50 transition-shadow duration-300 overflow-hidden ${
          hasShadow ? "shadow-lg" : ""
        }`}
        style={{ width: "100vw", maxWidth: "100vw" }}
      >
        <div className="flex items-center justify-between h-16 w-full px-3 sm:px-4 lg:hidden">
          <div className="flex items-center h-full min-w-0 max-w-[calc(100vw-60px)]">
            <img
              src={logo}
              alt="NEO Medical Logo"
              className="h-10 sm:h-10 object-contain cursor-pointer scale-200"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          <button
            className="flex items-center justify-center w-10 h-10 text-black focus:outline-none focus:ring-0 shadow-none border-0 bg-transparent"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ boxShadow: "none" }}
          >
            {menuOpen ? (
              <X className="w-5 h-5 hidden" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="hidden lg:block w-full py-4 px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center h-full">
              <img
                src={logo}
                alt="NEO Medical Logo"
                className="h-10 sm:h-10 object-contain cursor-pointer scale-300"
                onClick={() => scrollToSection("hero")}
              />
            </div>

            <nav className="flex items-center justify-end">
              <div className="flex items-center gap-10">
                {["Entreprises", "Shopper", "faqs"].map((section, index) => (
                  <button
                    key={index}
                    role="menuitem"
                    onClick={() => scrollToSection(section)}
                    className="text-base font-azeret font-semibold leading-[19px] text-black transition-colors duration-200 focus:outline-none focus:ring-0"
                  >
                    {section === "Entreprises"
                      ? "ENTREPRISES"
                      : section === "Shopper"
                      ? "SHOPPER"
                      : "FAQs"}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200/20 min-h-[80px]">
          <div className="flex-1 min-w-0"></div>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 text-black rounded-full transition-colors focus:outline-none hover:bg-gray-200/10"
            aria-label="Close menu"
          >
            <X className="w-10 h-10" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-6 space-y-2">
          {[
            { id: "Entreprises", label: "Entreprises" },
            { id: "Shopper", label: "Shopper" },
            { id: "faqs", label: "FAQs" },
          ].map((item) => (
            <button
              key={item.id}
              role="menuitem"
              onClick={() => scrollToSection(item.id)}
              className="group text-lg font-azeret font-medium text-black transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-black"
            >
              <span className="flex items-center justify-between w-full">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-center">
          <p className="text-sm text-grey-500 font-azeret">
            © 2025 MLP Insights
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
