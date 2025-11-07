import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <>
      <Helmet>
        <title>À propos - Guillaume Colin | Développeur Web Full-Stack</title>
        <meta name="description" content="Découvrez Guillaume Colin, développeur web freelance passionné. Spécialisé en React, Node.js, création de sites web et solutions d'automatisation. Accompagnement personnalisé de A à Z." />
        <meta name="keywords" content="à propos Guillaume Colin, développeur web freelance, React, Node.js, accompagnement projet web" />
      </Helmet>
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-blue-500/8 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-20 w-36 h-36 bg-orange-500/8 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          À propos de moi
        </motion.h1>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Qui je suis */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Qui je suis
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Développeur web passionné qui transforme vos idées en sites web performants et modernes.
            </p>
          </motion.div>

          {/* Ce que je fais */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
              Ce que je fais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: "🌐", 
                  title: "Sites web sur mesure", 
                  desc: "De la conception à la mise en ligne, je crée des sites qui vous ressemblent" 
                },
                { 
                  icon: "⚡", 
                  title: "Applications métier", 
                  desc: "Outils personnalisés pour automatiser vos processus et gagner du temps" 
                },
                { 
                  icon: "🔧", 
                  title: "Intégrations avancées", 
                  desc: "Paiements, IA, APIs - j'intègre tous les outils dont vous avez besoin" 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-orange-400"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pourquoi me choisir */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Pourquoi me choisir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: "🚀", 
                  title: "Rapide & efficace", 
                  desc: "Votre site en ligne sous 2-4 semaines avec un code optimisé" 
                },
                { 
                  icon: "🤝", 
                  title: "Accompagnement total", 
                  desc: "De l'idée au lancement, je vous guide à chaque étape" 
                },
                { 
                  icon: "💎", 
                  title: "Qualité garantie", 
                  desc: "Code propre, sécurisé et maintenu dans le temps" 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-amber-400"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              Prêt à démarrer ?
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Discutons de votre projet et découvrons ensemble comment je peux vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:colinguillaume641@yahoo.fr"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Me contacter
              </motion.a>
              <motion.a
                href="https://wa.me/33666742480?text=Bonjour Guillaume, j'aimerais discuter de mon projet web"
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
                className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Appeler
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
    </>
  );
}

export default About;
