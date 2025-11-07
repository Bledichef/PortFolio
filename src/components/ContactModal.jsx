import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Empêcher le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

    // Utilisation de EmailJS pour envoyer l'email
    // Note: Vous devrez créer un compte EmailJS gratuit et configurer le service
    // Pour l'instant, on utilise une solution de fallback avec mailto
    try {
      // Solution temporaire : copier les infos et ouvrir mailto
      const mailtoLink = `mailto:colinguillaume641@yahoo.fr?subject=${encodeURIComponent(formData.subject || "Contact depuis le site")}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Essayer d'ouvrir le client email, sinon copier dans le presse-papier
      window.location.href = mailtoLink;
      
      // Copier aussi dans le presse-papier comme backup
      const emailText = `Nom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nEnvoyé depuis guillaume-colin.com`;
      await navigator.clipboard.writeText(emailText);
      
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus(null);
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("colinguillaume641@yahoo.fr");
      setSubmitStatus("copied");
      setTimeout(() => setSubmitStatus(null), 2000);
    } catch (error) {
      console.error("Erreur lors de la copie:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
          />
          
          {/* Modal Container - Centré verticalement et horizontalement */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl pointer-events-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              exit={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                  Contactez-moi
                </h2>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white text-2xl font-bold transition-colors"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>

              {/* Options de contact */}
              <div className="mb-4 p-3 bg-slate-700 rounded-lg">
                <p className="text-slate-300 mb-3">Ou contactez-moi directement :</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={copyEmail}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                  >
                    {submitStatus === "copied" ? "✓ Email copié !" : "📋 Copier l'email"}
                  </button>
                  <a
                    href="https://wa.me/33666742480?text=Bonjour Guillaume, j'aimerais discuter de mon projet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="tel:+33666742480"
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm"
                  >
                    📞 Appeler
                  </a>
                </div>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-orange-400 focus:outline-none"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-orange-400 focus:outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-orange-400 focus:outline-none"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-orange-400 focus:outline-none resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-600/20 border border-green-500 rounded-lg text-green-400">
                    ✓ Message envoyé ! Votre client email devrait s'ouvrir. Si ce n'est pas le cas, l'email a été copié dans votre presse-papier.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-600/20 border border-red-500 rounded-lg text-red-400">
                    ✗ Erreur lors de l'envoi. Veuillez réessayer ou utiliser une autre méthode de contact.
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "📧 Envoyer le message"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;

