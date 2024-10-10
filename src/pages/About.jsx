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
          Développeur Web Full-Stack | React | Node.js | DevOps
        </p>
        <p className="text-lg mb-4 text-gray-300 leading-relaxed">
          Fort d'une solide expérience dans le développement web, j'ai acquis une expertise solide dans la gestion complète des projets, de la réflexion à la mise en production. Je maîtrise aussi bien le back-end en Node.js avec Sequelize pour les bases de données, que le front-end en React, en gérant le style avec CSS, Sass, et Tailwind.
        </p>
        <p className="text-lg mb-4 text-gray-300 leading-relaxed">
          Mon parcours m'a amené à travailler avec Azure, notamment sur la gestion des repositories DevOps, la mise en place de pipelines CI/CD pour le déploiement sur des App Services, ainsi que la gestion des tâches et tickets. J'ai également une expérience en intégration de paiements avec Stripe, la gestion d’échanges de données entre le back-end et des APIs d’intelligence artificielle telles qu'OpenAI, ainsi que l’implémentation de la gestion des utilisateurs avec MSAL, en lien direct avec un tenant.
        </p>
        <p className="text-lg mb-6 text-gray-300 leading-relaxed">
          Toujours curieux et passionné par l’apprentissage de nouveaux outils et technologies, j'aime explorer de nouvelles solutions pour améliorer mes compétences et mes projets.
        </p>

        {/* Compétences clés */}
        <p className="text-2xl font-bold mb-4 text-white">Compétences clés :</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faServer} className="mr-2 text-indigo-600" /> Back-end :
            </span>
            Node.js, Sequelize
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-indigo-600" /> Front-end :
            </span>
            React, CSS, Sass, Tailwind
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faCloud} className="mr-2 text-indigo-600" /> DevOps:
            </span>
            Azure, App Services, Pipelines CI/CD
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2 text-indigo-600" /> API & Paiements :
            </span>
            Stripe, OpenAI, Brevo, Mailchimp
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faLock} className="mr-2 text-indigo-600" /> Authentification :
            </span>
            MSAL, Azure AD
          </li>
          <li className="text-lg text-gray-300 flex items-center">
            <span className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg font-semibold mr-2 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faToolbox} className="mr-2 text-indigo-600" /> Outils :
            </span>
            GitHub, DevOps, Azure, Postman
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
