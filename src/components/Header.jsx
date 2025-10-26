import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-16 md:h-20 w-auto rounded-lg" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-indigo-400 transition-colors duration-200">Accueil</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition-colors duration-200">À propos</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition-colors duration-200">Services</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-indigo-400 transition-colors duration-200">Portfolio</Link>
            </li>
          </ul>
        </nav>

        {/* Bouton Hamburger Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <nav className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="pt-4 space-y-3">
          <li>
            <Link 
              to="/" 
              className="block py-2 hover:text-indigo-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block py-2 hover:text-indigo-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="block py-2 hover:text-indigo-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className="block py-2 hover:text-indigo-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
