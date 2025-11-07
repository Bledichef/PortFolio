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
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
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

  if (!isOpen) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      zIndex: 999999,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '2rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      overflowY: 'auto'
    }}>
      {/* Overlay */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        style={{ 
          position: 'relative',
          backgroundColor: '#1e293b',
          borderRadius: '1rem',
          padding: '1.5rem',
          width: '100%',
          maxWidth: '32rem',
          maxHeight: 'calc(100vh - 4rem)',
          overflowY: 'auto',
          border: '1px solid rgba(148, 163, 184, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          zIndex: 2,
          marginTop: '2rem',
          marginBottom: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(148, 163, 184, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #fb923c, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Contactez-moi
          </h2>
          <button
            onClick={onClose}
            style={{ 
              color: '#94a3b8',
              fontSize: '1.5rem',
              fontWeight: '300',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              width: '2rem',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#334155'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        {/* Options de contact */}
        <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'linear-gradient(to bottom right, rgba(51, 65, 85, 0.5), rgba(30, 41, 59, 0.5))', borderRadius: '0.75rem', border: '1px solid rgba(71, 85, 105, 0.3)' }}>
          <p style={{ color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500' }}>Ou contactez-moi directement :</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button
              onClick={copyEmail}
              style={{ 
                padding: '0.375rem 0.75rem',
                backgroundColor: '#2563eb',
                color: 'white',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              {submitStatus === "copied" ? "✓ Copié !" : "📋 Email"}
            </button>
            <a
              href="https://wa.me/33666742480?text=Bonjour Guillaume, j'aimerais discuter de mon projet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                padding: '0.375rem 0.75rem',
                backgroundColor: '#16a34a',
                color: 'white',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+33666742480"
              style={{ 
                padding: '0.375rem 0.75rem',
                backgroundColor: '#ea580c',
                color: 'white',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c2410c'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ea580c'}
            >
              📞 Appeler
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '0.375rem', fontSize: '0.75rem', fontWeight: '500' }}>
              Nom *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
              style={{ 
                width: '100%',
                padding: '0.5rem 0.75rem',
                backgroundColor: 'rgba(51, 65, 85, 0.5)',
                color: 'white',
                borderRadius: '0.5rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                fontSize: '0.875rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fb923c'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)'}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '0.375rem', fontSize: '0.75rem', fontWeight: '500' }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
              style={{ 
                width: '100%',
                padding: '0.5rem 0.75rem',
                backgroundColor: 'rgba(51, 65, 85, 0.5)',
                color: 'white',
                borderRadius: '0.5rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                fontSize: '0.875rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fb923c'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)'}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '0.375rem', fontSize: '0.75rem', fontWeight: '500' }}>
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet de votre message"
              style={{ 
                width: '100%',
                padding: '0.5rem 0.75rem',
                backgroundColor: 'rgba(51, 65, 85, 0.5)',
                color: 'white',
                borderRadius: '0.5rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                fontSize: '0.875rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fb923c'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)'}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '0.375rem', fontSize: '0.75rem', fontWeight: '500' }}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Décrivez votre projet ou votre demande..."
              style={{ 
                width: '100%',
                padding: '0.5rem 0.75rem',
                backgroundColor: 'rgba(51, 65, 85, 0.5)',
                color: 'white',
                borderRadius: '0.5rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                fontSize: '0.875rem',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fb923c'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)'}
            />
          </div>

          {submitStatus === "success" && (
            <div style={{ padding: '0.625rem', backgroundColor: 'rgba(22, 163, 74, 0.2)', border: '1px solid rgba(34, 197, 94, 0.5)', borderRadius: '0.5rem', color: '#4ade80', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>✓</span>
              <span>Message envoyé ! Votre client email devrait s'ouvrir.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div style={{ padding: '0.625rem', backgroundColor: 'rgba(220, 38, 38, 0.2)', border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: '0.5rem', color: '#f87171', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>✗</span>
              <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ 
                flex: 1,
                padding: '0.5rem 1rem',
                background: 'linear-gradient(to right, #ea580c, #f97316)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontSize: '0.875rem',
                opacity: isSubmitting ? 0.5 : 1,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {isSubmitting ? "Envoi..." : "📧 Envoyer"}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(51, 65, 85, 0.5)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(51, 65, 85, 0.7)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(51, 65, 85, 0.5)'}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
