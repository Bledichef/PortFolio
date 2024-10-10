import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CvAnalyseImage from '../assets/Cv-analyseCapture.png';
import LevillageImage from '../assets/LeVillageCapture.png';

function Portfolio() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // L'animation se déclenche lorsque 20% de l'élément est visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants pour le container global
  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3, // Décalage progressif entre les éléments
        ease: "easeInOut",
      },
    },
  };

  // Variants pour chaque projet avec animation multi-étapes
  const item = {
    hidden: { opacity: 0, y: 50, rotate: -2, scale: 0.9 }, // Entrée plus douce
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60, // Adoucit le mouvement avec effet "spring"
        damping: 10,
        duration: 0.8, // Durée plus longue pour plus de fluidité
        ease: "easeOut",
      },
    },
  };

  const projects = [
    { 
        title: "Cv Analyzer", 
        description: "Cv Analyzer est une application innovante qui utilise l'intelligence artificielle pour analyser et améliorer les CV. En quelques secondes, elle génère des recommandations personnalisées pour augmenter les chances de succès des candidats.", 
        imgSrc: CvAnalyseImage,
        url: "https://www.cv-analyse.fr"  // URL du projet Cv Analyzer
    },
    {
        title: "Le Village",
        description: "Le Village est un site vitrine conçu pour le restaurant Le Village, situé à Guyancourt. Ce site présente le menu, les événements spéciaux, et permet aux clients de découvrir l'atmosphère chaleureuse du restaurant. Grâce à un design élégant et moderne, le site offre une navigation fluide et un accès rapide aux informations importantes, telles que les horaires d'ouverture, les coordonnées et les dernières actualités.",
        imgSrc: LevillageImage,
        url: "https://le-village-bay.vercel.app/"
      },
      
    { 
        title: "Projet 3", 
        description: "Description du projet 3", 
        imgSrc: "image3.jpg", 
        url: "#"  // Ajoute l'URL ici si nécessaire
    },
  ];

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-100 to-gray-300 py-12 px-6 min-h-screen"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container} // Variantes appliquées au container global
    >
      <h2 className="text-4xl font-bold text-center mb-8">Mes Projets</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            variants={item} // Variantes appliquées à chaque projet
            whileHover={{ scale: 1.05, rotate: 2 }} // Ajout d’un effet de légère rotation et zoom au survol
          >
            <motion.img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover"
              initial={{ scale: 1.2, opacity: 0.8 }} // L'image commence en léger zoom et devient plus nette
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }} // Ajout d’un zoom doux au survol
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a 
                href={project.url} // L'URL du projet est utilisée ici
                className="text-indigo-600 hover:underline mt-4 block"
                target="_blank" // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Sécurise l'ouverture de l'URL
              >
                Voir plus
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
