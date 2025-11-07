// Configuration EmailJS pour l'envoi des messages de contact
// Les valeurs sont chargées depuis les variables d'environnement

// Vérification que les variables d'environnement sont définies
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  console.error('❌ Configuration EmailJS manquante. Vérifiez vos variables d\'environnement :');
  console.error('   - REACT_APP_EMAILJS_SERVICE_ID');
  console.error('   - REACT_APP_EMAILJS_TEMPLATE_ID');
  console.error('   - REACT_APP_EMAILJS_PUBLIC_KEY');
}

export const EMAILJS_CONFIG = {
  SERVICE_ID: SERVICE_ID || '',
  TEMPLATE_ID: TEMPLATE_ID || '',
  PUBLIC_KEY: PUBLIC_KEY || '',
};

// Template d'email pour les messages de contact
export const CONTACT_EMAIL_TEMPLATE = {
  to_email: 'colinguillaume641@yahoo.fr',
  from_name: 'Portfolio Guillaume Colin',
  subject: 'Nouveau message de contact - Portfolio',

  // Fonction pour générer les paramètres du template
  getTemplateParams: (contactData) => ({
    to_email: 'colinguillaume641@yahoo.fr',
    from_name: contactData.name || 'Visiteur anonyme',
    from_email: contactData.email,
    subject: contactData.subject || 'Contact depuis le site',
    
    // Contenu de l'email formaté
    message: `
Nouveau message reçu depuis votre portfolio :

👤 Nom : ${contactData.name || 'Non fourni'}
📧 Email : ${contactData.email || 'Non fourni'}
📝 Sujet : ${contactData.subject || 'Sans sujet'}

💬 Message :
${contactData.message || 'Aucun message'}

🕒 Date : ${new Date().toLocaleString('fr-FR')}

---
Message automatique depuis guillaume-colin.com
    `.trim(),
    
    // Variables individuelles pour le template EmailJS
    user_name: contactData.name || 'Visiteur anonyme',
    user_email: contactData.email || 'Non fourni',
    message_subject: contactData.subject || 'Contact depuis le site',
    message_content: contactData.message || 'Aucun message',
    timestamp: new Date().toLocaleString('fr-FR'),
  })
};

