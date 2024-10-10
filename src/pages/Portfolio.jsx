import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CvAnalyseImage from '../assets/Cv-analyseCapture.png';
import LevillageImage from '../assets/LeVillageCapture.png';

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
        imgSrc: CvAnalyseImage,
        url: "https://www.cv-analyse.fr" 
    },
    {
        title: "Le Village",
        description: "Le Village est un site vitrine conçu pour le restaurant Le Village, situé à Guyancourt. Ce site présente le menu, les événements spéciaux, et permet aux clients de découvrir l'atmosphère chaleureuse du restaurant.",
        imgSrc: LevillageImage,
        url: "https://le-village-bay.vercel.app/"
      },
      
    { 
        title: "Projet 3", 
        description: "Description du projet 3", 
        imgSrc: "image3.jpg", 
        url: "#"
    },
  ];

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
        style={{ lineHeight: 'normal' }} 
      >
        Mes Projets
      </motion.h2>

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
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            variants={item}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <motion.img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition-opacity"
              initial={{ scale: 1.2, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a 
                href={project.url}
                className="text-indigo-400 hover:text-indigo-500 hover:underline mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir plus
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;
