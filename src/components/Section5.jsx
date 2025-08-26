import PropTypes from "prop-types";

const testimonialList = [
  {
    quote:
      "Merci à MLP Insight, grâce à eux nous avons enfin transformé nos campagnes publicitaires en ventes réelles. Le suivi est clair, les résultats concrets : +38% de chiffre d'affaires en 2 mois. Une vraie valeur ajoutée!",
    author: "Julien R.",
    role: "Responsable Marketing – NeoCosmetics",
  },
  {
    quote:
      "J'étais sceptique au début, mais dès ma première mission, j'ai gagné 100 € sans avancer un centime. Aujourd'hui, avec le parrainage, je touche régulièrement des bonus en plus de mes missions. C'est devenu mon petit revenu fixe chaque mois.",
    author: "Laura M.",
    role: "22 ans, étudiante en droit",
  },
  {
    quote:
      "Super simple : je reçois les fonds, je fais l'achat, je garde ma part. En plus j'ai parrainé 3 amis, et ça me fait une vraie différence dans mon budget étudiant.",
    author: "Amine B.",
    role: "20 ans, étudiant en commerce",
  },
  {
    quote:
      "Ce n'est pas énorme, mais ça fait toujours plaisir. C'est rapide, sécurisé, et ça me paye mes sorties du week-end sans effort.",
    author: "Clara S.",
    role: "24 ans, jeune active",
  },
];

const TestimonialItem = ({ testimonial }) => (
  <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg bg-white transition-all duration-200 p-6 h-full">
    <blockquote className="text-black font-semibold text-sm sm:text-base leading-relaxed mb-4">
      {testimonial.quote}
    </blockquote>
    <cite className="not-italic">
      <p className="text-base sm:text-lg font-bold text-black">
        — {testimonial.author}
      </p>
      <p className="text-sm sm:text-base text-gray-600 font-medium">
        {testimonial.role}
      </p>
    </cite>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Section5 = () => {
  return (
    <>
      <div id="Témoignages"></div>
      <section className="relative bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Testimonials Heading */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Ils nous font <span className="text-blue-600">confiance.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Témoignages de nos partenaires et clients
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mx-auto mt-8 max-w-6xl space-y-4 md:mt-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {testimonialList.map((testimonial, i) => (
              <div key={i} className="w-full">
                <TestimonialItem testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
