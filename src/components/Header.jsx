import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-indigo-400">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-400">À propos</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-indigo-400">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
