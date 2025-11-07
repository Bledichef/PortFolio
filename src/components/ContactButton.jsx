import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ContactButton({ 
  children = "📧 Me contacter", 
  className = "px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold",
  variant = "default" // "default", "orange", "green"
}) {
  const navigate = useNavigate();

  // Variantes de style prédéfinies
  const variantClasses = {
    default: "px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold",
    orange: "px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold",
    green: "px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold",
  };

  const finalClassName = className || variantClasses[variant];

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <motion.button
      onClick={handleClick}
      className={finalClassName}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export default ContactButton;

