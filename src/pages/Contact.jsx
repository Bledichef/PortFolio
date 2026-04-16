import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, CONTACT_EMAIL_TEMPLATE } from '../config/emailjs';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Vérifier que la configuration EmailJS est complète
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
        throw new Error('Configuration EmailJS incomplète. Veuillez contacter l\'administrateur.');
      }

      // Générer les paramètres du template
      const templateParams = CONTACT_EMAIL_TEMPLATE.getTemplateParams({
        name: formData.name,
        email: formData.email,
        subject: `[${formData.projectType || "Général"}] ${formData.budget ? `Budget: ${formData.budget}` : ""}`,
        message: formData.message,
      });

      // Envoyer l'email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus("success");
      
      // Réinitialiser le formulaire
      setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
      
      // Rediriger après 3 secondes
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@guillaume-colin.com");
      setSubmitStatus("copied");
      setTimeout(() => setSubmitStatus(null), 2000);
    } catch (error) {
      console.error("Erreur lors de la copie:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - Guillaume Colin | Développeur Web Full-Stack</title>
        <meta name="description" content="Contactez Guillaume Colin pour discuter de votre projet web. Développeur freelance spécialisé en React, Node.js et solutions d'automatisation." />
      </Helmet>
      
      <div className="bg-slate-900 text-white min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Titre */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-emerald-400">
              Contactez-moi
            </h1>
            <p className="text-xl text-slate-300">
              Discutons de votre projet et transformons vos idées en réalité
            </p>
          </motion.div>

          {/* Options de contact rapide */}
          <motion.div
            className="mb-8 p-6 bg-slate-800 rounded-xl border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 mb-4 text-center">Ou contactez-moi directement :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={copyEmail}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                {submitStatus === "copied" ? "✓ Email copié !" : "📋 Copier l'email"}
              </button>
              <a
                href="https://wa.me/33666742480?text=Bonjour Guillaume, j'aimerais discuter de mon projet web"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+33666742480"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-orange-500/50 hover:scale-105"
              >
                📞 Appeler
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            className="bg-slate-800 rounded-xl p-8 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-200 mb-2 font-medium">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-200 mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-slate-200 mb-2 font-medium">
                  Type de projet
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                >
                  <option value="">-- Sélectionnez un type --</option>
                  <option value="Site vitrine">Site vitrine</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Application web">Application web sur mesure</option>
                  <option value="Automatisation">Automatisation / Intégration</option>
                  <option value="Refonte">Refonte de site existant</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-slate-200 mb-2 font-medium">
                  Budget envisagé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                >
                  <option value="">-- Sélectionnez un budget --</option>
                  <option value="Moins de 500€">Moins de 500€</option>
                  <option value="500€ – 1 500€">500€ – 1 500€</option>
                  <option value="1 500€ – 3 000€">1 500€ – 3 000€</option>
                  <option value="3 000€ – 5 000€">3 000€ – 5 000€</option>
                  <option value="Plus de 5 000€">Plus de 5 000€</option>
                  <option value="À définir">À définir ensemble</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-200 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none resize-none transition-all"
                  placeholder="Décrivez votre projet ou votre demande en détail..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg text-green-400 flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  <span>Message envoyé avec succès ! Vous serez redirigé vers l'accueil dans quelques secondes...</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 flex items-center gap-2">
                  <span className="text-lg">✗</span>
                  <span>Erreur lors de l'envoi. Veuillez réessayer ou utiliser une autre méthode de contact.</span>
                </div>
              )}

              {submitStatus === "copied" && (
                <div className="p-4 bg-blue-600/20 border border-blue-500/50 rounded-lg text-blue-400 flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  <span>Email copié dans le presse-papier !</span>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Envoi en cours..." : "📧 Envoyer le message"}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg font-semibold transition-all border border-slate-600/50 hover:border-slate-500"
                >
                  Annuler
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;

