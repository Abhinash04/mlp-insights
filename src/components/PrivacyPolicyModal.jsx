import { useEffect } from "react";
import {
  X,
  Shield,
  Database,
  Clock,
  Lock,
  UserCheck,
  Cookie,
  ChevronRight,
  Mail,
  Building,
  Users,
} from "lucide-react";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-white" />
              <h2 className="text-xl font-semibold text-white">
                Politique de Confidentialité
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
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-8">
            {/* Section 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    1. Collecte des données personnelles
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Dans le cadre de son activité, MLP Insight collecte des
                    données personnelles via ses formulaires pour les finalités
                    suivantes :
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Building className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Formulaire Entreprise :
                        </p>
                        <p className="text-gray-600 text-sm">
                          nom, société, e-mail, téléphone pour répondre aux
                          demandes commerciales.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <Users className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Formulaire Partenaire Shopper :
                        </p>
                        <p className="text-gray-600 text-sm">
                          nom, prénom, e-mail, ville, et autres informations
                          nécessaires à l'évaluation et à la gestion des
                          candidatures et des missions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    2. Finalité et base légale du traitement
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "Gérer les candidatures au programme Partenaire Shopper.",
                      "Assurer la gestion administrative et opérationnelle des missions.",
                      "Répondre aux demandes de contact.",
                      "Communiquer des informations relatives à nos services.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-green-600 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    3. Durée de conservation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les données sont conservées pour une durée n'excédant pas
                    celle nécessaire aux finalités pour lesquelles elles sont
                    traitées. Les données des candidats non retenus sont
                    conservées pour une durée maximale de{" "}
                    <span className="font-semibold text-orange-600">
                      24 mois
                    </span>{" "}
                    pour d'éventuelles futures missions, sauf demande de
                    suppression de leur part.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    4. Sécurité et partage des données
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    MLP Insight met en œuvre des mesures de sécurité pour
                    protéger vos données.{" "}
                    <span className="font-semibold text-red-600">
                      Aucune donnée personnelle n'est vendue, louée ou cédée
                    </span>{" "}
                    à des tiers à des fins commerciales.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    5. Vos droits
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Conformément au Règlement (UE) 2016/679 (RGPD), vous
                    disposez d'un droit d'accès, de rectification, de
                    suppression, de portabilité de vos données, ainsi qu'un
                    droit à la limitation du traitement.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <a
                      href="mailto:contact.mlpinsight@gmail.com"
                      className="text-purple-600 font-medium hover:text-purple-800"
                    >
                      contact.mlpinsight@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <Cookie className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    6. Cookies
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Le Site peut utiliser des cookies de mesure d'audience (ex:
                    Google Analytics) de manière anonyme pour améliorer
                    l'expérience utilisateur. Vous pouvez refuser l'utilisation
                    de ces cookies via les paramètres de votre navigateur.
                  </p>
                </div>
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
      </div>

      <style>{`
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
  .animate-in {
    animation: fade-in 0.3s ease-out, zoom-in-95 0.3s ease-out;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes zoom-in-95 {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
  }
`}</style>
    </>
  );
};

export default PrivacyPolicyModal;
