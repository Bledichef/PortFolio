import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Coordonnées de contact */}
        <div>
          <h3 className="text-lg font-semibold">Contactez-moi :</h3>
          <p>Email : <a href="mailto:colinguillaume641@yahoo.fr" className="text-blue-400 hover:text-blue-300">colinguillaume641@yahoo.fr</a></p>
          <p>Téléphone : <a href="tel:+33666742480" className="text-blue-400 hover:text-blue-300">+33 6 66 74 24 80</a></p>
        </div>

        {/* Liens sociaux */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/guillaumecolin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/Bledichef" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} GC Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
