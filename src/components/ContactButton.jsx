import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

function ContactButton({ 
  children = "📧 Me contacter", 
  className = "px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold",
  variant = "default" // "default", "orange", "green"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Variantes de style prédéfinies
  const variantClasses = {
    default: "px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold",
    orange: "px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold",
    green: "px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold",
  };

  const finalClassName = className || variantClasses[variant];

  const handleOpenModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={handleOpenModal}
        className={finalClassName}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default ContactButton;

