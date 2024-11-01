import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center relative overflow-hidden p-4">
      {/* Effet d'arrière-plan avec des formes flottantes */}
      <motion.div
        className="absolute w-60 h-60 md:w-96 md:h-96 bg-indigo-700 rounded-full top-10 left-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute w-48 h-48 md:w-72 md:h-72 bg-indigo-600 rounded-full bottom-10 right-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -360, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      ></motion.div>

      {/* Texte principal avec animation type machine à écrire */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={['Je suis Guillaume C']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
        />
      </motion.h1>

      {/* Sous-texte avec animation */}
      <motion.p
        className="text-lg md:text-xl mb-8 z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Développeur Web Freelance - Spécialiste React & Tailwind CSS
      </motion.p>

      {/* Bouton avec animation */}
      <motion.a
        href="/portfolio"
        className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Découvrir mes projets
      </motion.a>

      {/* Section supplémentaire : compétences */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <p className="text-base md:text-lg font-semibold mb-4">Compétences principales :</p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {['React', 'Tailwind CSS', 'Node.js', 'Azure', 'CI/CD Pipelines', 'Sequelize', 'Stripe', 'OpenAI', 'MSAL', 'GitHub', 'DevOps', 'Postman'].map(skill => (
            <li key={skill} className="bg-indigo-600 px-3 py-1 md:px-4 md:py-2 rounded-md text-white text-sm md:text-base">
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Section supplémentaire : à propos rapide */}
      <motion.div
        className="absolute top-16 md:top-20 text-center max-w-xs md:max-w-xl mx-auto mt-6 md:mt-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Un peu plus sur moi</h3>
        <p className="text-base md:text-lg text-gray-300">
          Passionné par le développement web depuis plusieurs années. Spécialiste de React, Tailwind CSS, et Node.js, je me concentre sur la création d'expériences utilisateur fluides et des solutions backend robustes.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
