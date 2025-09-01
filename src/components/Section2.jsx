import { useEffect, useState } from "react";
import { TrendingUp, Target, ArrowRight, Shield, Zap, Gift, BarChart3, RefreshCw, Crosshair, Mail } from "lucide-react";

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      id: 1,
      icon: Target,
      title: "Ciblage stratégique",
      category: "Media & Acquisition",
      description:
        "Déploiement de campagnes publicitaires ultra-ciblées (Meta, TikTok, Native Ads) pour atteindre précisément votre cœur d'audience.",
    },
    {
      id: 2,
      icon: RefreshCw,
      title: "Re-ciblage de conversion",
      category: "Conversion & Transaction",
      description:
        "Activation de notre réseau de Partenaires Shoppers qualifiés pour initier des actes d'achat réels et ciblés sur votre site.",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Injection de valeur",
      category: "Performance & Optimisation",
      description:
        "Analyse des données en temps réel pour ajuster nos stratégies et garantir un retour sur investissement (ROAS) optimal.",
    },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Expertise complète",
      subtitle: "Pilotage par la donnée",
      description:
        "Analyse approfondie des métriques de performance pour guider les décisions",
    },
    {
      icon: Crosshair,
      title: "Stratégies personnalisées",
      subtitle: "Approche unique",
      description:
        "Solutions adaptées aux besoins spécifiques de chaque client",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Sécurité & Transparence",
      description: "Processus clair, traçable et conforme aux normes",
    },
    {
      icon: Zap,
      title: "Flexibilité",
      description: "Solutions modulables et adaptables à votre entreprise",
    },
    {
      icon: Gift,
      title: "Avantages exclusifs",
      description: "Programme dédié pour renforcer nos partenariats",
    },
  ];

  return (
    <>
    <div id="Entreprises"></div>
    <section className="bg-slate-50 py-20 px-4" id="business-offers" >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entreprises: Transformez votre <span className="text-blue-600">trafic</span> en{" "}
            <span className="text-blue-600">revenu tangible</span>
          </h2>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Activer.</span>{" "}
            <span className="font-semibold">Convertir.</span>{" "}
            <span className="font-semibold">Optimiser.</span>
          </p>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Notre mission est de générer des ventes réelles pour votre
            entreprise grâce à un écosystème performant où chaque action est
            orientée résultat.
          </p>
        </div>

        {/* Process Steps (horizontal on desktop) */}
        <div className="mb-20 flex flex-col lg:flex-row items-center justify-center gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative flex-1 max-w-sm bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition-all duration-300 text-center"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-blue-600 text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Category */}
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {step.category}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Features & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pourquoi nous choisir ?
            </h3>
            <div className="space-y-6 flex-1">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-blue-600 mb-1">
                        {feature.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Nos engagements</h3>
            <div className="space-y-6 flex-1">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-blue-100 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA centered below boxes */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <a
              href="mailto:contact.mlpinsight@gmail.com"
              aria-label="Demander une consultation"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Demander une consultation</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-700 font-medium">
            Prêt à transformer votre entreprise? Discutons de vos objectifs.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Section2;
