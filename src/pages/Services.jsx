import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFileAlt, faHandshake, faRocket, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const steps = [
    {
      icon: faComments,
      title: "1. Consultation gratuite",
      description: "Nous discutons de votre projet, vos objectifs et vos besoins spécifiques. Cette première rencontre (30 min) est entièrement gratuite.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: faFileAlt,
      title: "2. Devis personnalisé",
      description: "Je vous envoie un devis détaillé sous 48h avec toutes les fonctionnalités, délais et prix. Aucune surprise, tout est transparent.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: faHandshake,
      title: "3. Validation du projet",
      description: "Une fois le devis validé, nous signons un contrat clair et je commence immédiatement le travail sur votre projet.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: faCog,
      title: "4. Développement",
      description: "Je développe votre site/app en gardant un contact régulier. Vous pouvez suivre l'avancement et donner votre avis à chaque étape.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: faRocket,
      title: "5. Mise en ligne",
      description: "Votre site est mis en ligne, testé et optimisé. Je vous forme à son utilisation et vous accompagne dans les premiers pas.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: faCheckCircle,
      title: "6. Suivi & maintenance",
      description: "Je reste disponible pour les mises à jour, corrections et améliorations. Votre site évolue avec vos besoins.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const services = [
    {
      title: "Sites vitrines & E-commerce",
      description: "Présentez votre entreprise ou vendez en ligne avec des sites modernes et performants.",
      features: ["Design responsive", "Paiements sécurisés", "Gestion des stocks", "SEO optimisé"],
      price: "À partir de 1 500€"
    },
    {
      title: "Applications web sur mesure",
      description: "Outils métier complexes pour automatiser vos processus et gérer vos données.",
      features: ["Base de données sécurisée", "API personnalisées", "Interface d'administration", "Système de permissions"],
      price: "À partir de 3 000€"
    },
    {
      title: "Automatisation & Intégrations",
      description: "Automatisez vos tâches répétitives et connectez vos outils entre eux pour gagner en efficacité.",
      features: ["Relances automatiques (email/SMS)", "Intégrations API", "Workflows automatisés", "Notifications intelligentes"],
      price: "Sur devis"
    }
  ];

  return (
    <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/8 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-500/8 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-400/5 rounded-full blur-lg"></div>
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mes Services
        </motion.h1>

        {/* Section Comment ça marche */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={controls}
          variants={variants}
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-xl shadow-xl hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <FontAwesomeIcon icon={step.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-white">{step.title}</h3>
                <p className="text-slate-300 text-center leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA après Comment ça marche */}
        <motion.div
          className="text-center mb-16 bg-slate-800 p-8 rounded-xl border border-slate-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Le processus est simple et transparent. Contactez-moi pour une consultation gratuite et découvrez comment transformer votre idée en réalité.
          </p>
          <motion.a
            href="mailto:colinguillaume641@yahoo.fr"
            className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Consultation gratuite
          </motion.a>
        </motion.div>

        {/* Section Solutions d'automatisation */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Solutions d'automatisation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">📧 Relances automatiques</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Automatisez vos relances clients avec des emails et SMS personnalisés. Plus jamais de client oublié !
              </p>
              <ul className="text-slate-300">
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  Emails automatiques personnalisés
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  SMS de relance programmés
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  Suivi des ouvertures et clics
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  Templates personnalisables
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">🔗 Intégrations API</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Connectez vos outils entre eux pour synchroniser vos données et automatiser vos workflows.
              </p>
              <ul className="text-slate-300">
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  Synchronisation de données
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  Webhooks et notifications
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  Import/Export automatisé
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  APIs sécurisées sur mesure
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Services principaux */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Mes services principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-xl shadow-xl hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-emerald-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 mb-2 flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                </div>
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
            <a
              href="mailto:colinguillaume641@yahoo.fr"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              📧 Envoyer un email
            </a>
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
  );
}

export default Services;
