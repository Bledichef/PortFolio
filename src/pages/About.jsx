import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  // Contrôle des animations
  const controls = useAnimation();
  
  // Utilisation de l'observation des éléments en vue
  const { ref, inView } = useInView({
    threshold: 0.1, // Animation déclenchée quand 10% de l'élément est visible
  });

  // Démarrer l'animation lorsque l'élément entre en vue
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants pour l'animation
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-100 to-gray-300 py-12 px-6 min-h-screen flex flex-col justify-center"
      initial="hidden"
      animate={controls}
      variants={variants}
      ref={ref} // Le ref permet de suivre l'élément
    >
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 border-b-4 border-indigo-600 inline-block pb-2">
        À propos de moi
      </h2>
      <motion.div
        className="max-w-4xl mx-auto text-left bg-white p-10 rounded-xl shadow-xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        <p className="text-xl font-semibold mb-6 text-gray-800">
          Développeur Web Full-Stack | React | Node.js | DevOps
        </p>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Fort d'une solide expérience dans le développement web, j'ai acquis une expertise solide dans la gestion complète des projets, de la réflexion à la mise en production. Je maîtrise aussi bien le back-end en Node.js avec Sequelize pour les bases de données, que le front-end en React, en gérant le style avec CSS, Sass, et Tailwind.
        </p>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Mon parcours m'a amené à travailler avec Azure, notamment sur la gestion des repositories DevOps, la mise en place de pipelines CI/CD pour le déploiement sur des App Services, ainsi que la gestion des tâches et tickets. J'ai également une expérience en intégration de paiements avec Stripe, la gestion d’échanges de données entre le back-end et des APIs d’intelligence artificielle telles qu'OpenAI, ainsi que l’implémentation de la gestion des utilisateurs avec MSAL, en lien direct avec un tenant.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Toujours curieux et passionné par l’apprentissage de nouveaux outils et technologies, j'aime explorer de nouvelles solutions pour améliorer mes compétences et mes projets.
        </p>
        <p className="text-2xl font-bold mb-4 text-gray-800">Compétences clés :</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="text-lg text-gray-700 flex items-center">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold mr-2 hover:bg-indigo-300 transition duration-300">
              <i className="fas fa-server"></i> Back-end :
            </span>
            Node.js, Sequelize
          </li>
          <li className="text-lg text-gray-700 flex items-center">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold mr-2 hover:bg-indigo-300 transition duration-300">
              <i className="fas fa-laptop-code"></i> Front-end :
            </span>
            React, CSS, Sass, Tailwind
          </li>
          <li className="text-lg text-gray-700 flex items-center">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold mr-2 hover:bg-indigo-300 transition duration-300">
              <i className="fas fa-cloud"></i> DevOps :
            </span>
            Azure, App Services, Pipelines CI/CD
          </li>
          <li className="text-lg text-gray-700 flex items-center">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold mr-2 hover:bg-indigo-300 transition duration-300">
              <i className="fas fa-credit-card"></i> API & Paiements :
            </span>
            Stripe, OpenAI, Brevo, Mailchimp
          </li>
          <li className="text-lg text-gray-700 flex items-center">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold mr-2 hover:bg-indigo-300 transition duration-300">
              <i className="fas fa-lock"></i> Authentification :
            </span>
            MSAL, Azure AD
          </li>
          <li className="text-lg text-gray-700 flex items-center">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold mr-2 hover:bg-indigo-300 transition duration-300">
              <i className="fas fa-toolbox"></i> Outils :
            </span>
            GitHub, DevOps, Azure, Postman
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default About;
