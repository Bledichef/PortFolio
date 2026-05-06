import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ContactButton from "../components/ContactButton";

function Home() {
  const offers = [
    {
      title: "Audit Flux et Automatisation",
      subtitle: "Vous savez que vos équipes perdent du temps, mais pas où ni combien. Cet audit le chiffre.",
      price: "490 € HT",
      duration: "1 semaine",
      features: [
        "Cartographie complète de vos process manuels",
        "Identification des frictions et points de retraitement",
        "Plan d'automatisation chiffré avec priorités"
      ]
    },
    {
      title: "Automatisation Workflow Métier",
      subtitle: "Un process manuel identifié remplacé par une application qui tourne sans intervention.",
      price: "À partir de 2 490 € HT",
      duration: "3 à 5 semaines",
      features: [
        "Web app, API ou app mobile conçue et livrée sur mesure",
        "Connexion à vos outils existants : CRM, facturation, compta, paiement",
        "Livraison cadencée, soir et weekend, suivi à chaque jalon"
      ]
    },
    {
      title: "Apps mobile et SaaS sur mesure",
      subtitle: "Un produit à construire ou à faire évoluer, de la maquette au déploiement.",
      price: "Sur devis",
      duration: "Selon périmètre",
      features: [
        "Applications web, mobiles ou SaaS de bout en bout",
        "Stack React, TypeScript, Node.js, Python, .NET, React Native",
        "De la conception au lancement en production"
      ]
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Échange de 30 minutes",
      description: "On parle de votre process. Si l'automatisation est pertinente et rentable, je vous le dis directement."
    },
    {
      number: "2",
      title: "Audit flux",
      description: "Je cartographie vos étapes manuelles, identifie les points de friction et chiffre le gain attendu."
    },
    {
      number: "3",
      title: "Devis fixe",
      description: "Vous recevez un devis fixe avec périmètre, délai et prix. Pas de régie, pas de facturation à l'heure."
    },
    {
      number: "4",
      title: "Livraison cadencée",
      description: "Je développe et livre par étapes, soir et weekend. Vous suivez l'avancement à chaque jalon."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Guillaume Colin, développeur qui automatise les workflows manuels des PME</title>
        <meta name="description" content="J'automatise vos process manuels avec des web apps, API et apps mobile sur mesure. React, Node, Python. Forfait court, livraison soir et weekend." />
        <meta name="keywords" content="automatisation workflow PME, développeur full-stack freelance, React, Node.js, Python, web app sur mesure, Guillaume Colin" />
      </Helmet>
      <div className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-400/5 rounded-full blur-lg"></div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vos équipes ressaisissent encore les mêmes données entre vos outils. Je transforme ce process manuel en workflow logiciel qui tourne tout seul.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            React, TypeScript, Node.js, Python, FastAPI, .NET, React Native
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              title="Découvrez mes créations web - Sites vitrines, e-commerce et applications"
            >
              Voir mes créations
            </motion.a>
            <motion.a
              href="/services"
              className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Mes offres
            </motion.a>
          </motion.div>
        </div>

        {/* Section Mes offres */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 relative">
            Mes offres
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-orange-400 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{offer.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{offer.subtitle}</p>
                <ul className="mb-4 flex-grow space-y-2">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0 font-bold">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-blue-400 font-bold text-lg">{offer.price}</p>
                  <p className="text-slate-400 text-sm">{offer.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Cas concret */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 relative">
            Un cas concret
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400"></div>
          </h2>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 border-l-4 border-l-orange-400">
            <p className="text-slate-300 leading-relaxed text-lg">
              Sur un projet récent, 4 personnes intervenaient manuellement sur chaque dossier, délai moyen plusieurs semaines. Après automatisation, dossier traité en moins de 15 minutes sans intervention humaine.
            </p>
          </div>
        </motion.div>

        {/* Section Comment ça se passe */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 relative">
            Comment ça se passe
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 flex gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              Prêt à transformer votre idée en réalité ?
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton variant="orange" />
              <motion.a
                href="https://wa.me/33666742480?text=Bonjour, je suis intéressé par vos services de développement web"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp
              </motion.a>
              <motion.a
                href="tel:+33666742480"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Appeler maintenant
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
