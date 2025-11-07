import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ContactButton from "../components/ContactButton";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Combien coûte la création d'un site web ?",
      answer: "Les prix varient selon la complexité : sites vitrines à partir de 1 500€, e-commerce à partir de 3 000€, applications sur mesure sur devis. Je propose toujours un devis détaillé et transparent."
    },
    {
      question: "Combien de temps faut-il pour créer un site ?",
      answer: "Un site vitrine simple : 2-3 semaines. Un e-commerce : 4-6 semaines. Une application complexe : 6-12 semaines. Je respecte toujours les délais convenus."
    },
    {
      question: "Proposez-vous la maintenance après livraison ?",
      answer: "Oui ! Je propose des contrats de maintenance incluant mises à jour, sauvegardes, sécurité et support technique. Tarifs à partir de 100€/mois."
    },
    {
      question: "Mes données seront-elles sécurisées ?",
      answer: "Absolument. J'utilise les dernières technologies de sécurité, certificats SSL, sauvegardes automatiques et respecte le RGPD. Vos données sont protégées."
    },
    {
      question: "Puis-je modifier le contenu moi-même ?",
      answer: "Pour les sites vitrines, les modifications se font directement dans le code. Je vous forme aux bases si vous le souhaitez, ou je peux effectuer toutes les modifications pour vous. Pour les e-commerce, un panneau d'administration est inclus."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Nous établissons ensemble un cahier des charges détaillé que vous validez avant le début du projet. Ce document définit précisément ce qui doit être livré. Si le livrable correspond au cahier des charges validé, le projet est considéré comme terminé. En cas de problème technique ou de non-conformité au cahier des charges, je corrige sans frais supplémentaires."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Questions fréquentes | Guillaume Colin</title>
        <meta name="description" content="Réponses aux questions fréquentes sur le développement web, tarifs, délais, maintenance et sécurité. Guillaume Colin, développeur web freelance." />
        <meta name="keywords" content="FAQ développement web, tarifs site web, délais création site, maintenance site web, sécurité données" />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Questions fréquentes
          </motion.h1>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-xl mb-4 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-700 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <span className={`text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-lg text-slate-300 mb-6">
              Vous avez d'autres questions ? N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton variant="default" />
              <motion.a
                href="https://wa.me/33666742480?text=Bonjour, j'ai une question sur vos services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
