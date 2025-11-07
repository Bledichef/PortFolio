import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactButton from "../components/ContactButton";

// Images des projets via services de capture d'écran en ligne

function Portfolio() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, rotate: -2, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    { 
        title: "Cv Analyzer", 
        description: "Cv Analyzer est une application innovante qui utilise l'intelligence artificielle pour analyser et améliorer les CV. En quelques secondes, elle génère des recommandations personnalisées pour augmenter les chances de succès des candidats.", 
        imgSrc: "https://image.thum.io/get/width/1200/https://www.cv-analyse.fr",
        url: "https://www.cv-analyse.fr",
        tags: ["Chatbot IA", "IA intégrée", "Paiements crédit"]
    },
    {
        title: "Le Village",
        description: "Le Village est un site vitrine conçu pour le restaurant Le Village, situé à Guyancourt. Ce site présente le menu, les événements spéciaux, et permet aux clients de découvrir l'atmosphère chaleureuse du restaurant.",
        imgSrc: "https://image.thum.io/get/width/1200/https://le-village-bay.vercel.app/",
        url: "https://le-village-bay.vercel.app/",
        tags: ["Géolocalisation", "Galerie photos", "Design moderne"]
      },
      
    { 
        title: "OKRDV", 
        description: "OKRDV est un outil de gestion de planning professionnel qui permet aux professionnels de créer et générer une page en ligne pour la prise de réservation et la gestion de planning. Une fois qu'un client prend un rendez-vous, le professionnel peut l'accepter ou le refuser. Une fois validé, un email automatique est envoyé avec un fichier ICS pour intégrer le RDV dans tous les gestionnaires de planning.", 
        imgSrc: "https://mini.s-shot.ru/1200x800/PNG/1200/Z100/?https://www.okrdv.eu", 
        url: "https://www.okrdv.eu/",
        tags: ["Pages personnalisables", "Ajout automatique RDV", "Gestion planning"]
    },
  ];

  return (
    <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Quelques Créations
        </motion.h1>

        {/* CTA principal */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations. Chaque projet est unique et adapté aux besoins spécifiques de mes clients.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/services"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📋 Voir mes services
            </motion.a>
            <ContactButton variant="orange">💬 Discutons de votre projet</ContactButton>
          </motion.div>
        </motion.div>

        {/* Contenu de la section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-orange-400 group"
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Image avec overlay */}
            <div className="relative overflow-hidden">
                       <motion.img
                         src={project.imgSrc}
                         alt={`Capture d'écran du projet ${project.title} - ${project.description.substring(0, 100)}...`}
                         className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Bouton overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg"
                >
                  Voir le site
                </a>
              </div>
            </div>
            
            {/* Contenu de la carte */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags technologiques */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      tagIndex === 0 ? 'bg-blue-600/20 text-blue-400 border-blue-600/30' :
                      tagIndex === 1 ? 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30' :
                      'bg-orange-600/20 text-orange-400 border-orange-600/30'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Lien discret */}
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
              >
                <span>Visiter le site</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
        </motion.div>

        {/* CTA après projets */}
        <motion.div
          className="text-center mt-16 bg-slate-800 p-8 rounded-xl border border-slate-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton variant="orange">📧 Demander un devis</ContactButton>
            <motion.a
              href="https://wa.me/33666742480?text=Bonjour, j'ai vu vos créations et je souhaite discuter de mon projet"
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
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
