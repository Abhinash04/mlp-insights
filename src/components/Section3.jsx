import React from "react";
import {
  FileText,
  DollarSign,
  ShoppingBag,
  Wallet,
  ShieldCheck,
  Search,
  Calendar,
  Users,
} from "lucide-react";

const Section3 = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Candidature & Sélection",
      desc: "Vous remplissez notre formulaire. Dès qu’une mission correspond à votre profil, nous vous contactons pour vous la proposer.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Réception des Fonds",
      desc: "Nous vous envoyons un mandat de paiement sécurisé et personnel contenant tous les fonds nécessaires. Vous n’avancez jamais votre propre argent.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
      title: "Réalisation de la Mission",
      desc: "Vous utilisez 80% du montant reçu pour effectuer l’achat en ligne demandé, en suivant des instructions simples et précises.",
    },
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: "Votre Rémunération",
      desc: "Vous conservez les 20% restants du montant total. C’est votre rémunération nette et immédiate.",
    },
  ];

  const commitments = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Sécurité Garantie",
      desc: "Vos données personnelles sont confidentielles et protégées (RGPD). Le processus financier est 100% sécurisé et traçable.",
    },
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "Transparence Totale",
      desc: "Chaque mission est encadrée par un mandat qui formalise notre collaboration. Vous savez exactement quoi faire et combien vous gagnez.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Zéro Coût, Zéro Risque",
      desc: "L’inscription est gratuite et, nous insistons, vous n’utilisez jamais vos fonds personnels.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Flexibilité Maximale",
      desc: "Pour garantir la qualité, vous ne réalisez qu’une mission par mois, sans engagement à long terme.",
    },
  ];

  return (
    <>
      <div id="Entreprises"></div>
      <section className="relative bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Générez des revenus complémentaires,{" "}
              <span className="text-blue-600">
                simplement et en toute sécurité.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Rejoignez le programme Partenaire Shopper MLP Insight et soyez
              rémunéré pour réaliser des missions d'achat en ligne. Une
              opportunité flexible, transparente et sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Principle - Top on Mobile */}
            <div className="order-1 lg:order-3 lg:col-span-5 bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Le Principe:{" "}
                <span className="text-blue-600">Simple et gratifiant</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Vous achetez déjà en ligne? Nous vous offrons la possibilité de
                développer cette habitude. En tant que Shopper Partner, nous
                vous confions des missions ponctuelles: effectuer un achat
                spécifique sur le site web de l'une de nos marques partenaires.
                En échange de votre temps, vous conservez une part importante du
                budget alloué à la mission.
              </p>
            </div>

            {/* Assignment Process */}
            <div className="order-2 lg:order-1 lg:col-span-7 lg:row-span-2 bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                Processus d'affectation
              </h2>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative group flex flex-col items-center text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 hover:from-blue-50 hover:to-blue-100 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-md">
                      {step.icon}
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Referral + CTA Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Referral */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Augmentez vos revenus grâce aux parrainages
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed">
                      Pour chaque ami que vous parrainez et qui termine une
                      mission, vous gagnez une commission de 5 % sur ses
                      transactions, sans limite de gains ni de durée.
                    </p>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="text-center bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Prêt à nous rejoindre ?
                  </h2>
                  <p className="text-gray-600 text-base mb-6">
                    Les places sont limitées afin de garantir un suivi de
                    qualité. Postulez dès aujourd'hui et commencez votre
                    parcours avec nous.
                  </p>
                  <a
                    href="https://forms.gle/yourformlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-transform duration-300"
                  >
                    Remplissez le formulaire de demande
                  </a>
                </div>
              </div>
            </div>

            {/* Commitments */}
            <div className="order-3 lg:order-2 lg:col-span-5 bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                Nos engagements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commitments.map((commit, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow p-6 hover:from-blue-50 hover:to-blue-100 hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 mb-4 shadow-md">
                      {commit.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {commit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{commit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
