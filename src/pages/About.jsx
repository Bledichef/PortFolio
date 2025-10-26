import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faLaptopCode, faCloud, faCreditCard, faLock, faToolbox } from '@fortawesome/free-solid-svg-icons';

function About() {
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

  return (
    <div className="bg-gray-900 text-white h-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Effet d'arrière-plan avec des formes flottantes */}
      <motion.div
        className="absolute w-96 h-96 bg-indigo-700 rounded-full top-10 left-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute w-72 h-72 bg-indigo-600 rounded-full bottom-10 right-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -360, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      ></motion.div>

      {/* Titre de la section */}
      <motion.h2
        className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-12 z-10 font-poppins tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        À propos de moi
      </motion.h2>

      {/* Contenu de la section avec fond transparent */}
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 bg-opacity-70 p-10 rounded-xl shadow-xl z-10"
        initial="hidden"
        animate={controls}
        variants={variants}
        ref={ref}
      >
        <p className="text-xl font-semibold mb-6 text-white">
          Créateur de sites web professionnels | Spécialiste en solutions digitales
        </p>
        <p className="text-lg mb-4 text-gray-300 leading-relaxed">
          Avec plusieurs années d'expérience dans la création de sites web, je vous accompagne de A à Z dans vos projets digitaux. De l'idée initiale à la mise en ligne, je m'occupe de tout : design, développement, hébergement et maintenance. Mon objectif ? Créer des sites qui fonctionnent parfaitement et qui vous font gagner des clients.
        </p>
        <p className="text-lg mb-4 text-gray-300 leading-relaxed">
          J'ai développé des solutions variées : des sites vitrines pour restaurants, des outils d'intelligence artificielle pour l'analyse de CV, et des systèmes de gestion de rendez-vous. Chaque projet est unique et adapté aux besoins spécifiques de mes clients. Je maîtrise les paiements en ligne, l'intégration d'outils d'IA, et la création d'interfaces intuitives.
        </p>
        <p className="text-lg mb-6 text-gray-300 leading-relaxed">
          Passionné par l'innovation et toujours à l'affût des dernières tendances web, je m'engage à vous livrer des solutions modernes et performantes. Votre réussite est ma priorité, et je mets tout en œuvre pour créer des sites qui dépassent vos attentes.
        </p>

        {/* Compétences clés */}
        <p className="text-2xl font-bold mb-4 text-white">Mes domaines d'expertise :</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-indigo-600" /> Sites web modernes:
            </span>
            Design responsive, interfaces intuitives
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faServer} className="mr-2 text-indigo-600" /> Applications sur mesure:
            </span>
            Systèmes de gestion, outils métier
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faCloud} className="mr-2 text-indigo-600" /> Hébergement & maintenance:
            </span>
            Mise en ligne, suivi, mises à jour
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2 text-indigo-600" /> Paiements en ligne:
            </span>
            Boutiques e-commerce, systèmes de facturation
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faLock} className="mr-2 text-indigo-600" /> Sécurité & confidentialité:
            </span>
            Protection des données, authentification
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faToolbox} className="mr-2 text-indigo-600" /> Intégrations avancées:
            </span>
            IA, APIs externes, automatisation
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
