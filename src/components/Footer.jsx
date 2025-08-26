import { useState } from "react";
import logo from "../assets/logo.png";
import { CopyrightIcon } from "lucide-react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import GeneralConditionModal from "./GeneralConditionModal";

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrivacyClick = () => {
    console.log("Privacy policy clicked");
    setIsPrivacyModalOpen(true);
  };

  const handleGeneralClick = () => {
    console.log("General conditions clicked");
    setIsGeneralModalOpen(true);
  };

  return (
    <>
      <footer className="w-full bg-slate-200 px-4 sm:px-6 lg:px-14 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div className="w-[150px] h-[32px]">
              <img
                src={logo}
                alt="NEO Medical Logo"
                className="w-full h-full object-contain scale-800"
              />
            </div>
            <div className="flex items-center gap-1">
              <CopyrightIcon className="w-5 h-5 text-black" />
              <p className="text-sm text-black">
                Tous droits d'auteur sur MLP Insights
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-16">
            {/* Legal Links */}
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#Entreprises"
                  className="text-sm text-gray-700 hover:text-blue-600"
                >
                  Carrière
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleGeneralClick}
                  className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                  aria-label="Ouvrir les conditions générales"
                >
                  Conditions générales
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handlePrivacyClick}
                  className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                  aria-label="Ouvrir la politique de confidentialité"
                >
                  Politique de Confidentialité
                </button>
              </li>
            </ul>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              {["Entreprises", "Shopper", "Témoignages", "faqs"].map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-gray-700 hover:text-blue-600 text-left cursor-pointer"
                  aria-label={`Aller à la section ${section}`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <GeneralConditionModal
        isOpen={isGeneralModalOpen}
        onClose={() => setIsGeneralModalOpen(false)}
      />
    </>
  );
};

export default Footer;
