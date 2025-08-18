import React from "react";
import hero from "../assets/herobg.png";

const Hero = () => {
  return (
    <>
      <div id="hero"></div>
      <section className="relative bg-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            alt="Abstract background image"
            className="w-full h-full object-cover"
            src={hero}
          />
          <div className="absolute inset-0 bg-gray-100 mix-blend-multiply opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">
              MLP Insight : Votre Croissance Digitale,
            </span>
            <span className="block text-blue-600">Notre Expertise.</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-gray-800">
            Media, Leads &amp; Performance
          </p>
          <p className="mt-6 max-w-lg mx-auto text-base text-left text-gray-700 sm:max-w-3xl">
            Nous connectons les marques ambitieuses avec une communauté de
            consommateurs qualifiés pour transformer le trafic digital en
            chiffre d’affaires mesurable et prédictible. <br />
            Notre approche unique combine acquisition média, stratégies de
            conversion et un réseau exclusif de Partenaires Shoppers pour créer
            des synergies de valeur, profitables à tous nos partenaires.
          </p>

          {/* Call-to-actions */}
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#Entreprises"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-[#013671] md:py-4 md:text-lg md:px-10"
            >
              POUR LES ENTREPRISES
            </a>
            <a
              href="#Shopper"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#013671] bg-white hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
            >
              POUR LES PARTICULIERS
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
