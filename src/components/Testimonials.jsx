import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Restaurant Le Village",
      text: "Guillaume a créé un site magnifique pour notre restaurant. Le résultat dépasse nos attentes et nous avons vu une augmentation de 40% de nos réservations en ligne.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      company: "Entrepreneur",
      text: "L'application OKRDV m'a fait gagner énormément de temps dans la gestion de mes rendez-vous. Interface intuitive et fonctionnalités parfaites.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "RH Manager",
      text: "CV Analyzer est révolutionnaire ! L'IA donne des conseils précis et nos candidats ont de bien meilleurs résultats. Un outil indispensable.",
      rating: 5
    }
  ];

  return (
    <div className="bg-slate-800 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ce que disent mes clients
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-700 p-6 rounded-xl border border-slate-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-slate-600 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
