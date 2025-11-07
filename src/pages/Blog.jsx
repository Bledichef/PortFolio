import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Blog() {
  const articles = [
    {
      title: "Core Web Vitals : améliorer les performances de votre site (et votre classement Google)",
      excerpt: "Guide complet sur les Core Web Vitals : LCP, INP, CLS. Optimisez les performances de votre site web pour améliorer votre classement Google et l'expérience utilisateur.",
      readTime: "18 min",
      date: "28 Octobre 2025",
      slug: "core-web-vitals-performance-site",
      keywords: ["Core Web Vitals", "LCP", "INP", "CLS", "performance web", "optimisation"]
    },
    {
      title: "Comment choisir la bonne technologie pour votre site web en 2025",
      excerpt: "React, Vue.js, WordPress... Découvrez comment choisir la technologie adaptée à votre projet web selon vos besoins, budget et objectifs.",
      readTime: "8 min",
      date: "26 Octobre 2025",
      slug: "choisir-technologie-site-web-2025",
      keywords: ["technologie site web", "React", "Vue.js", "WordPress", "choisir technologie"]
    },
    {
      title: "Les 5 erreurs à éviter lors de la création d'un site e-commerce",
      excerpt: "Découvrez les erreurs courantes qui peuvent faire échouer votre boutique en ligne et comment les éviter pour maximiser vos ventes.",
      readTime: "12 min",
      date: "24 Octobre 2025",
      slug: "erreurs-site-ecommerce-eviter",
      keywords: ["erreurs e-commerce", "boutique en ligne", "vente en ligne", "optimisation e-commerce"]
    },
    {
      title: "Automatisation web : comment gagner 10h/semaine avec des outils sur mesure",
      excerpt: "Découvrez comment automatiser vos processus métier avec des solutions web personnalisées pour gagner du temps et de l'efficacité.",
      readTime: "10 min",
      date: "22 Octobre 2025",
      slug: "automatisation-web-gagner-temps",
      keywords: ["automatisation web", "gagner du temps", "outils métier", "efficacité"]
    },
    {
      title: "SEO pour développeurs : optimiser votre site React pour Google",
      excerpt: "Guide complet pour optimiser un site React pour les moteurs de recherche : SSR, meta tags, performance et plus encore.",
      readTime: "15 min",
      date: "20 Octobre 2025",
      slug: "seo-react-optimiser-google",
      keywords: ["SEO React", "optimisation Google", "SSR", "meta tags", "performance"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Conseils Développement Web | Guillaume Colin</title>
        <meta name="description" content="Articles et conseils sur le développement web, React, e-commerce, automatisation et SEO. Guillaume Colin, développeur web freelance." />
        <meta name="keywords" content="blog développement web, conseils React, e-commerce, automatisation, SEO, Guillaume Colin" />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog & Conseils
          </motion.h1>
          
          <motion.p 
            className="text-xl text-center text-slate-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez mes conseils et astuces pour réussir vos projets web
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-slate-400">{article.date}</span>
                  <span className="text-sm text-orange-400">{article.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-white hover:text-orange-400 transition-colors duration-200">
                  {article.title}
                </h2>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.keywords.slice(0, 3).map((keyword, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
                >
                  Lire l'article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-lg text-slate-300 mb-6">
              Vous avez une question spécifique ? Contactez-moi !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:colinguillaume641@yahoo.fr"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Me contacter
              </motion.a>
              <motion.a
                href="https://wa.me/33666742480?text=Bonjour, j'ai une question sur le développement web"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Blog;
