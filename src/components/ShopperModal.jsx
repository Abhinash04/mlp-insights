import React, { useEffect } from "react";
import { X } from "lucide-react";

const ShopperModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFormRedirect = () => {
    window.open('https://forms.gle/eLAKTyqeGT6J4zpf9', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-70"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <div className="p-8 pt-12">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Devenez Partenaire Shopper
            </h2>
            <p className="text-lg text-blue-600 font-medium">
              Générez des revenus complémentaires, simplement et en toute sécurité.
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8 text-left">
            Missions simples, rapides, sans avance de frais. Remplissez le formulaire et nous vous 
            recontactons sous 48h pour votre première mission.
          </p>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={handleFormRedirect}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Je veux devenir Shopper
            </button>
            
            <button
              onClick={onClose}
              className="w-full text-gray-500 hover:text-gray-700 font-medium py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopperModal;