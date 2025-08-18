import { useEffect } from "react";
import { X, FileText } from "lucide-react";

const GeneralConditionModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-white" />
            <h2 className="text-xl font-semibold text-white">
              Conditions Générales
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors duration-200 p-1 hover:bg-blue-800 rounded-lg"
            aria-label="Fermer le modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                1. Éditeur du site
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le site <strong>mlp-insight.com</strong> est édité par :<br />
                · <strong>Raison sociale :</strong> MLP INSIGHT <br />
                · <strong>Forme juridique :</strong> SASU (Société par Actions
                Simplifiée Unipersonnelle) <br />
                · <strong>Siège social :</strong> 48 Rue de Brézin, 92430
                Marnes-la-Coquette <br />
                · <strong>RCS :</strong> En cours d’enregistrement à Nanterre{" "}
                <br />
                · <strong>Directeur de la publication :</strong>{" "}
                Charles-Édouard De Montmorency <br />
                · <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact.mlpinsight@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  contact.mlpinsight@gmail.com
                </a>
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                2. Hébergement du site
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le Site est hébergé par :<br />
                · <strong>Nom de l’hébergeur :</strong> [à compléter] <br />
                · <strong>Adresse :</strong> [Adresse complète] <br />
                · <strong>Contact :</strong> [Téléphone ou email]
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                3. Propriété intellectuelle
              </h3>
              <p className="text-gray-600 leading-relaxed">
                L’ensemble des éléments du Site (textes, images, graphismes,
                logos) sont la propriété exclusive de {" "}
                <strong>MLP Insight</strong>, ou font l’objet d’une autorisation
                d’utilisation. Toute reproduction, représentation, modification
                ou diffusion, même partielle, est strictement interdite sans
                autorisation écrite préalable.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              J'ai compris
            </button>
          </div>
        </div>
      </div>

      {/* Custom scrollbar + animations */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoom-in-95 {
          from {
            transform: scale(0.95);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out, zoom-in-95 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GeneralConditionModal;
