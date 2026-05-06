import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFileAlt, faHandshake, faRocket, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ContactButton from "../components/ContactButton";

function Services() {
  const services = [
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
      subtitle: "Un process manuel identifié remplacé par une application, une API ou une app mobile qui tourne sans intervention.",
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
      subtitle: "Vous avez un produit à construire ou à faire évoluer. Je prends en charge la conception et le développement complet.",
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
      icon: faComments,
      title: "Échange de 30 minutes",
      description: "On parle de votre process. Si l'automatisation est pertinente et rentable, je vous le dis directement.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: faFileAlt,
      title: "Audit flux",
      description: "Je cartographie vos étapes manuelles, identifie les points de friction et chiffre le gain attendu.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: faHandshake,
      title: "Devis fixe",
      description: "Vous recevez un devis fixe avec périmètre, délai et prix. Pas de régie, pas de facturation à l'heure.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: faRocket,
      title: "Livraison cadencée",
      description: "Je développe et livre par étapes, soir et weekend. Vous suivez l'avancement à chaque jalon.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Automatisation workflows PME | Guillaume Colin</title>
        <meta name="description" content="Audit Flux 490 € HT, Automatisation Workflow Métier à partir de 2 490 € HT. Je remplace vos process manuels par des applications qui tournent toutes seules." />
      </Helmet>
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-500/8 rounded-full blur-xl"></div>
        <div className="container mx-auto px-4">

          {/* Titre principal */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mes offres
          </motion.h1>

          {/* Section 3 offres */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 p-8 rounded-xl shadow-xl hover:bg-slate-700 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-orange-400 flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm">{service.subtitle}</p>
                  <ul className="mb-6 flex-grow space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-slate-700 space-y-3">
                    <div>
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-slate-400 text-sm ml-2">{service.duration}</span>
                    </div>
                    <ContactButton variant="orange">Demander un devis</ContactButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section Comment ça se passe */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Comment ça se passe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 p-6 rounded-xl shadow-xl hover:bg-slate-700 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <FontAwesomeIcon icon={step.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center text-white">{step.title}</h3>
                  <p className="text-slate-300 text-center leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section Contact */}
          <motion.div
            className="text-center bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Contactez-moi pour une consultation gratuite et découvrez comment je peux transformer vos idées en réalité digitale.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <ContactButton variant="default">📧 Envoyer un email</ContactButton>
              <a
                href="https://wa.me/33666742480?text=Bonjour, je souhaite une consultation gratuite pour mon projet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+33666742480"
                className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition duration-300 font-semibold"
              >
                📞 Appeler maintenant
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default Services;
