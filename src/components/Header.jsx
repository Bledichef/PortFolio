import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp"; 

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-indigo-400">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-400">À propos</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-indigo-400">Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-indigo-400">Portfolio</Link>
          </li>
        </ul>
      </nav>

      {/* Logo avec bordures arrondies */}
      <div>
        <img src={Logo} alt="Logo" className="h-20 w-auto rounded-lg" /> {/* Utilise "rounded-lg" pour des bords légèrement arrondis */}
      </div>
    </header>
  );
}

export default Header;
