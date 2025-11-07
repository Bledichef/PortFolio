import React, { useState, useEffect } from "react";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Bloquer le scroll d'abord
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Remonter en haut après un court délai
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
      
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
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

    try {
      const mailtoLink = `mailto:colinguillaume641@yahoo.fr?subject=${encodeURIComponent(formData.subject || "Contact depuis le site")}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
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

  useEffect(() => {
    if (isOpen) {
      console.log('Modal should be open');
    }
  }, [isOpen]);

  if (!isOpen) {
    console.log('Modal is closed');
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed bg-black bg-opacity-50"
        onClick={onClose}
        style={{ 
          position: 'fixed',
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          zIndex: 9999,
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* Modal */}
      <div 
        className="fixed flex items-start justify-center p-4 pt-8"
        style={{ 
          position: 'fixed',
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          zIndex: 10000,
          pointerEvents: 'none',
          width: '100%',
          height: '100%'
        }}
      >
        <div 
          className="bg-slate-800 rounded-2xl p-6 w-full max-w-lg border border-slate-700/50 shadow-2xl"
          style={{ 
            maxHeight: 'calc(100vh - 4rem)',
            pointerEvents: 'auto',
            backgroundColor: '#1e293b',
            position: 'relative',
            zIndex: 10001
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-700/50">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-emerald-400">
              Contactez-moi
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white text-2xl font-light transition-all hover:rotate-90 w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-700"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>

          {/* Options de contact */}
          <div className="mb-4 p-3 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/30">
            <p className="text-slate-300 mb-2 text-xs font-medium">Ou contactez-moi directement :</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all text-xs font-medium shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                {submitStatus === "copied" ? "✓ Copié !" : "📋 Email"}
              </button>
              <a
                href="https://wa.me/33666742480?text=Bonjour Guillaume, j'aimerais discuter de mon projet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all text-xs font-medium shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+33666742480"
                className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-all text-xs font-medium shadow-lg hover:shadow-orange-500/50 hover:scale-105"
              >
                📞 Appeler
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-slate-200 mb-1.5 text-xs font-medium">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all text-sm"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-200 mb-1.5 text-xs font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all text-sm"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-slate-200 mb-1.5 text-xs font-medium">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all text-sm"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-200 mb-1.5 text-xs font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-3 py-2 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none resize-none transition-all text-sm"
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-2.5 bg-green-600/20 border border-green-500/50 rounded-lg text-green-400 text-xs flex items-center gap-2">
                <span>✓</span>
                <span>Message envoyé ! Votre client email devrait s'ouvrir.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-2.5 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 text-xs flex items-center gap-2">
                <span>✗</span>
                <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
              >
                {isSubmitting ? "Envoi..." : "📧 Envoyer"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg font-semibold transition-all border border-slate-600/50 hover:border-slate-500 text-sm"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
