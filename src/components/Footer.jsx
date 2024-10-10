import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Tu peux installer react-icons si tu ne l'as pas

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com" className="hover:text-indigo-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" className="hover:text-indigo-400">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-indigo-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
