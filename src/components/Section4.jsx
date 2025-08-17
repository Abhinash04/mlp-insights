import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";

const Section4 = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex((prevState) => (prevState === index ? null : index));
  };
  const faqs = [
    {
      question: "Combien de temps prend une mission?",
      answer:
        "Une fois votre mandat reçu (généralement sous 15 à 30 jours après votre sélection), la réalisation de l'achat en ligne ne prend que quelques minutes. C'est une mission rapide que vous pouvez effectuer depuis chez vous, quand vous le souhaitez.",
    },
    {
      question: "Dois-je avancer mon propre argent?",
      answer:
        "Jamais. MLP Insight vous fournit 100% des fonds nécessaires via un mandat de paiement sécurisé à votre nom avant chaque mission. Votre rôle est d'utiliser ces fonds, pas les vôtres.",
    },
    {
      question: "Mes données personnelles sont-elles en sécurité?",
      answer:
        "Absolument. La confidentialité et la sécurité de vos données sont notre priorité. Elles sont traitées dans le respect le plus strict du RGPD, ne sont jamais partagées à des tiers sans votre consentement et servent uniquement à la gestion de nos missions.",
    },
    {
      question: "Ce programme est-il légal?",
      answer:
        "Oui. Vous intervenez en tant que prestataire de service ponctuel dans le cadre d'opérations marketing. Chaque mission est formalisée par un mandat qui précise les termes de notre collaboration, assurant une transparence et une conformité totales.",
    },
    {
      question: "Puis-je réaliser plusieurs missions par mois?",
      answer:
        "Afin de garantir l'équité, la qualité de nos opérations et la valeur de chaque intervention, chaque Partenaire Shopper est limité à une seule mission rémunérée par mois.",
    },
    {
      question: "Comment fonctionne le parrainage?",
      answer:
        "Lorsque vous nous recommandez un ami, vous recevez un lien de parrainage. S'il s'inscrit et est validé, vous recevrez automatiquement une commission de 5% sur la valeur de chacune de ses missions.",
    },
    {
      question: "Comment puis-je postuler?",
      answer:
        "Cliquez sur le bouton 'Devenir Partenaire Shopper' et remplissez notre formulaire de candidature. Notre équipe étudiera votre profil et vous recontactera dès qu'une mission correspondant à votre profil sera disponible.",
    },
  ];

  return (
    <>
      <div id="faqs"></div>
      <section className="relative bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* FAQ Heading */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Vos questions,{" "}
              <span className="text-blue-600">nos réponses.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Pour Les Futurs Partenaires Shoppers
            </p>
          </div>

          {/* FAQ Items */}
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200 ${
                  openFAQIndex === index ? "bg-white" : "bg-transparent"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:px-6 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQIndex === index}
                >
                  <span className="text-base sm:text-lg font-bold text-black pr-4">
                    {faq.question}
                  </span>
                  {openFAQIndex === index ? (
                    <AiOutlineUp className="w-4 h-4 text-black flex-shrink-0" />
                  ) : (
                    <AiOutlineDown className="w-4 h-4 text-black flex-shrink-0" />
                  )}
                </button>

                {openFAQIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    {faq.link && (
                      <a
                        href={faq.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-300 font-bold transition-colors inline-flex items-center gap-1 mb-3 text-sm"
                      >
                        <FaLink className="w-3 h-3" />
                        Video tutorial for reference
                      </a>
                    )}

                    {/* FAQ Answer */}
                    <p className="text-black font-semibold text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
