import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  // Utilisation d'un state pour forcer un re-render
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return (
    <div className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-400/5 rounded-full blur-lg"></div>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Je crée votre site web sur mesure
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Développeur Web Freelance - Sites modernes et applications sur mesure
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="/portfolio"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Voir mes créations
          </motion.a>
          <motion.a
            href="/services"
            className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Mes services
          </motion.a>
        </motion.div>
      </div>

      {/* Section Services */}
      <motion.div
        className="mt-16 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 relative">
          Ce que je peux créer pour vous
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Sites vitrines", desc: "Présentez votre entreprise avec style" },
            { title: "Applications web", desc: "Outils métier sur mesure" },
            { title: "E-commerce", desc: "Boutiques en ligne complètes" }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-orange-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-slate-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Pourquoi me choisir */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400 relative">
          Pourquoi me choisir ?
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-blue-400"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: "🚀", title: "Rapidité", desc: "Développement rapide et mise en ligne sous 2-4 semaines" },
            { icon: "💎", title: "Qualité", desc: "Code propre, sécurisé et optimisé pour les performances" },
            { icon: "🤝", title: "Accompagnement", desc: "Suivi personnalisé de A à Z avec formation incluse" },
            { icon: "💰", title: "Prix transparent", desc: "Devis détaillé sans surprise, paiement échelonné possible" }
          ].map((item, index) => (
            <motion.div 
              key={index}
                  className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-amber-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.icon} {item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:colinguillaume641@yahoo.fr"
              className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Me contacter
            </motion.a>
            <motion.a
              href="https://wa.me/33666742480?text=Bonjour, je suis intéressé par vos services de développement web"
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
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
