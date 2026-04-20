import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ContactButton from "../components/ContactButton";
import profilePhoto from "../assets/1762552491491.png";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stats = [
    { value: "4+", label: "Ans d'expérience pro" },
    { value: "10+", label: "Projets livrés" },
    { value: "2", label: "Alternants managés" },
    { value: "48h", label: "Délai de réponse max" },
  ];

  const skills = [
    { name: "React.js / TypeScript", level: 90 },
    { name: "Node.js / ASP.NET Core (.NET)", level: 85 },
    { name: "FastAPI (Python)", level: 75 },
    { name: "MongoDB / SQL", level: 80 },
    { name: "Stripe / APIs REST", level: 85 },
    { name: "Azure / Déploiement prod", level: 75 },
  ];

  const timeline = [
    {
      year: "2008 – 2020",
      title: "Carrière en restauration",
      desc: "Pâtissier, serveur puis chef de rang pendant 12 ans. Une école de rigueur, de service client et de management d'équipe.",
    },
    {
      year: "2022",
      title: "Développeur Full-Stack  HA PLUS PME",
      desc: "Reconversion réussie : développement d'applications web et mobile (React.js, React Native), APIs REST (.NET, Node.js, FastAPI), intégration Stripe & CRM Dynamics. Management technique de deux alternants.",
    },
    {
      year: "2023",
      title: "Lancement de projets SaaS perso",
      desc: "Développement et mise en production de CV Analyzer (analyse IA + paiements) et OKRDV (gestion de RDV en ligne). Deux produits 100% conçus et déployés en autonomie.",
    },
    {
      year: "2024 – aujourd'hui",
      title: "Freelance en parallèle",
      desc: "Accompagnement de clients PME et entrepreneurs sur des projets web sur mesure : sites vitrines, applications métier, e-commerce — de la conception au lancement.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>À propos - Guillaume Colin | Développeur Web Full-Stack</title>
        <meta
          name="description"
          content="Découvrez Guillaume Colin, développeur web freelance passionné. Spécialisé en React, Node.js, création de sites web et solutions d'automatisation. Accompagnement personnalisé de A à Z."
        />
        <meta
          name="keywords"
          content="à propos Guillaume Colin, développeur web freelance, React, Node.js, accompagnement projet web"
        />
      </Helmet>
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-28 h-28 bg-blue-500/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-36 h-36 bg-orange-500/8 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4">
          {/* Titre */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            À propos de moi
          </motion.h1>

          {/* Bloc identité : photo + présentation */}
          <motion.div
            className="max-w-5xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {/* Avatar / Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-orange-400 to-emerald-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
                    <img
                      src={profilePhoto}
                      alt="Guillaume Colin — Développeur Web Freelance"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Badge disponibilité */}
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-slate-900 border border-emerald-500/50 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Disponible
                </span>
              </div>
            </div>

            {/* Texte de présentation */}
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-2 text-white">Guillaume Colin</h2>
              <p className="text-orange-400 font-semibold mb-4 text-lg">
                Développeur Full-Stack  React · Node.js · .NET · Python
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Développeur Full-Stack depuis 2022 chez <span className="text-white font-medium">HA PLUS PME</span>,
                je conçois et mets en production des applications web et mobiles utilisées au quotidien.
                Intégrations Stripe, APIs REST, CRM Dynamics, management d'équipe  j'interviens sur
                l'ensemble du cycle de développement.
              </p>
              <p className="text-slate-300 leading-relaxed">
                En parallèle, j'accompagne des clients en freelance et j'ai lancé mes propres SaaS :
                CV Analyzer et OKRDV, deux produits en production. Reconverti de la restauration,
                j'apporte un regard terrain sur ce que veulent vraiment les utilisateurs.
              </p>
            </div>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            className="max-w-4xl mx-auto mb-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-orange-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-20">

            {/* Compétences */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Compétences techniques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Parcours / Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Mon parcours
              </h2>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-translate-x-px"></div>
                <div className="space-y-10">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`relative flex flex-col md:flex-row gap-6 md:gap-0 pl-12 md:pl-0 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Point central */}
                      <div className="absolute left-2.5 md:left-1/2 top-1 w-3 h-3 rounded-full bg-orange-400 border-2 border-slate-900 md:-translate-x-1.5 z-10"></div>

                      {/* Contenu */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                        <span className="inline-block text-orange-400 font-bold text-sm mb-1">
                          {item.year}
                        </span>
                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>

                      {/* Espace pour l'autre côté */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ce que je fais */}
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Ce que je fais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🌐",
                    title: "Sites web sur mesure",
                    desc: "De la conception à la mise en ligne, je crée des sites qui vous ressemblent",
                  },
                  {
                    icon: "⚡",
                    title: "Applications métier",
                    desc: "Outils personnalisés pour automatiser vos processus et gagner du temps",
                  },
                  {
                    icon: "🔧",
                    title: "Intégrations avancées",
                    desc: "Paiements, IA, APIs — j'intègre tous les outils dont vous avez besoin",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-orange-400"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Prêt à démarrer ?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Discutons de votre projet et découvrons ensemble comment je peux vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactButton variant="default" />
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
