import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  // Utilisation d'un state pour forcer un re-render
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center relative overflow-hidden p-4">
      {/* Effet d'arrière-plan avec des formes flottantes */}
      <motion.div
        className="absolute w-40 h-40 md:w-96 md:h-96 bg-indigo-700 rounded-full top-10 left-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute w-32 h-32 md:w-72 md:h-72 bg-indigo-600 rounded-full bottom-10 right-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -360, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      ></motion.div>

      {/* Conteneur principal du texte avec une clé pour forcer le re-render */}
      <motion.div
        key={key} // Force le re-render en changeant la clé
        className="text-3xl md:text-6xl font-extrabold mb-4 z-10 text-center w-full max-w-xs md:max-w-lg leading-tight whitespace-nowrap"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={['Je crée votre site web sur mesure']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
        />
      </motion.div>

      {/* Sous-texte avec animation */}
      <motion.p
        className="text-base md:text-xl mb-8 z-10 text-center leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Développeur Web Freelance - Sites modernes et applications sur mesure
      </motion.p>

      {/* Bouton avec animation */}
      <motion.a
        href="/portfolio"
        className="px-6 py-2 md:px-8 md:py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Voir mes réalisations
      </motion.a>

      {/* Section supplémentaire : compétences */}
      <motion.div
        className="absolute bottom-24 md:bottom-20 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <p className="text-sm md:text-lg font-semibold mb-4">Ce que je peux créer pour vous :</p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {['Sites vitrines', 'Applications web', 'Systèmes de réservation', 'Outils IA', 'E-commerce', 'Sites responsive'].map(service => (
            <li key={service} className="bg-indigo-600 px-2 py-1 md:px-4 md:py-2 rounded-md text-white text-xs md:text-base">
              {service}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Section supplémentaire : à propos rapide */}
      <motion.div
        className="absolute top-32 md:top-20 text-center max-w-xs md:max-w-xl mx-auto mt-6 md:mt-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <h3 className="text-lg md:text-2xl font-semibold mb-4">Pourquoi me choisir ?</h3>
        <p className="text-sm md:text-lg text-gray-300 leading-tight">
          Je transforme vos idées en sites web professionnels qui attirent vos clients. De la conception à la mise en ligne, je m'occupe de tout pour que vous puissiez vous concentrer sur votre business.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
