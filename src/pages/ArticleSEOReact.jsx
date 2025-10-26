import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function ArticleSEOReact() {
  return (
    <>
      <Helmet>
        <title>SEO pour développeurs : optimiser votre site React pour Google | Guillaume Colin</title>
        <meta name="description" content="Guide complet pour optimiser un site React pour les moteurs de recherche : SSR, meta tags, performance, données structurées et plus encore." />
        <meta name="keywords" content="SEO React, optimisation Google, SSR, meta tags, performance, données structurées, react-helmet" />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header de l'article */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-sm text-slate-400 mb-4">
              <span>20 Octobre 2025</span>
              <span className="mx-2">•</span>
              <span>15 min de lecture</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              SEO pour développeurs : optimiser votre site React pour Google
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Guide complet pour optimiser un site React pour les moteurs de recherche : SSR, meta tags, performance, 
              données structurées et plus encore. Techniques avancées pour dominer Google.
            </p>
          </motion.div>

          {/* Contenu de l'article */}
          <motion.article 
            className="prose prose-lg prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Le défi SEO des applications React</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              React est excellent pour créer des interfaces utilisateur dynamiques, mais il pose des défis uniques pour le SEO. 
              Les applications React traditionnelles sont des Single Page Applications (SPA) qui rendent le contenu côté client, 
              ce qui peut poser problème aux moteurs de recherche. En 2025, voici comment résoudre ces défis.
            </p>

            <div className="bg-red-600/20 p-6 rounded-xl mb-8 border border-red-500/30">
              <h3 className="text-xl font-semibold mb-4 text-red-400">⚠️ Problèmes courants avec React</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• <strong>Contenu non indexé :</strong> Google ne voit que le HTML vide</li>
                <li>• <strong>Meta tags dynamiques :</strong> Non détectés par les crawlers</li>
                <li>• <strong>URLs non crawlables :</strong> Problème de routing</li>
                <li>• <strong>Performance :</strong> Temps de chargement trop long</li>
                <li>• <strong>Contenu dupliqué :</strong> Même contenu pour toutes les URLs</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Solution #1 : Server-Side Rendering (SSR)</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Le SSR est la solution la plus efficace pour le SEO avec React. Il permet de générer le HTML complet 
              côté serveur avant de l'envoyer au navigateur, garantissant que les moteurs de recherche voient le contenu.
            </p>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">React avec optimisations SEO</h3>
              <div className="space-y-4 text-slate-300">
                <p><strong>Solutions pour React classique :</strong></p>
                <ul className="ml-4 space-y-2">
                  <li>• react-helmet pour les meta tags dynamiques</li>
                  <li>• react-snap pour le pré-rendu statique</li>
                  <li>• Optimisation manuelle des images</li>
                  <li>• Code splitting avec React.lazy</li>
                  <li>• Sitemap généré automatiquement</li>
                </ul>
                
                <div className="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-semibold">💡 Exemple concret :</p>
                  <p className="text-slate-300 mt-2">
                    Ce portfolio utilise React avec react-helmet et optimisations manuelles. Résultat : 
                    <strong> SEO optimisé</strong> et 
                    <strong> indexation parfaite par Google</strong>.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Solution #2 : Meta Tags Dynamiques</h2>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Configuration avec react-helmet</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`import { Helmet } from 'react-helmet';

function ArticlePage({ article }) {
  return (
    <>
      <Helmet>
        <title>{article.title} | Mon Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
      </Helmet>
      <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
    </>
  );
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Solution #3 : Données Structurées</h2>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Les données structurées (JSON-LD) aident Google à comprendre le contenu de votre site et 
              peuvent améliorer l'affichage dans les résultats de recherche.
            </p>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Exemple : Données structurées pour un article</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre de l'article",
  "description": "Description de l'article",
  "author": {
    "@type": "Person",
    "name": "Guillaume Colin"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GC Consulting"
  },
  "datePublished": "2025-10-20",
  "dateModified": "2025-10-20"
};

// Dans votre composant
<script type="application/ld+json">
  {JSON.stringify(structuredData)}
</script>`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Solution #4 : Optimisation des Performances</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">✅ Optimisations essentielles</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• <strong>Code splitting :</strong> Chargement à la demande</li>
                  <li>• <strong>Lazy loading :</strong> Images et composants</li>
                  <li>• <strong>Compression :</strong> Gzip/Brotli</li>
                  <li>• <strong>CDN :</strong> Distribution mondiale</li>
                  <li>• <strong>Cache :</strong> Headers optimisés</li>
                  <li>• <strong>Images :</strong> Formats modernes (WebP)</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-red-400">❌ Erreurs à éviter</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• <strong>Bundle trop lourd :</strong> &gt; 250KB</li>
                  <li>• <strong>Images non optimisées :</strong> PNG lourds</li>
                  <li>• <strong>Fonts bloquantes :</strong> Sans preload</li>
                  <li>• <strong>CSS non critique :</strong> Chargement synchrone</li>
                  <li>• <strong>JavaScript bloquant :</strong> Render blocking</li>
                  <li>• <strong>Pas de cache :</strong> Rechargement constant</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Solution #5 : URLs et Routing SEO-Friendly</h2>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Configuration React Router</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`// URLs SEO-friendly
const routes = [
  {
    path: "/blog/:slug",
    component: ArticlePage,
    // Génère : /blog/comment-optimiser-react-seo
  },
  {
    path: "/services/:service",
    component: ServicePage,
    // Génère : /services/developpement-web
  }
];

// Sitemap automatique
const generateSitemap = () => {
  const articles = getAllArticles();
  const services = getAllServices();
  
  return [
    ...articles.map(article => '/blog/' + article.slug),
    ...services.map(service => '/services/' + service.slug)
  ];
};`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Outils de Monitoring SEO</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">🔍 Google Search Console</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Indexation des pages</li>
                  <li>• Erreurs de crawl</li>
                  <li>• Performances de recherche</li>
                  <li>• Core Web Vitals</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">⚡ PageSpeed Insights</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Score de performance</li>
                  <li>• Métriques Core Web Vitals</li>
                  <li>• Suggestions d'optimisation</li>
                  <li>• Comparaison mobile/desktop</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">📊 Lighthouse</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Audit complet</li>
                  <li>• SEO, Performance, Accessibilité</li>
                  <li>• Tests automatisés</li>
                  <li>• Rapports détaillés</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Checklist SEO React</h2>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">✅ Checklist complète</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
                <div>
                  <p><strong>Technique :</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>☐ SSR ou SSG configuré</li>
                    <li>☐ Meta tags dynamiques</li>
                    <li>☐ Données structurées</li>
                    <li>☐ URLs SEO-friendly</li>
                    <li>☐ Sitemap.xml généré</li>
                    <li>☐ Robots.txt optimisé</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Performance :</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>☐ Score Lighthouse &gt; 90</li>
                    <li>☐ Core Web Vitals optimisés</li>
                    <li>☐ Images compressées</li>
                    <li>☐ Code splitting activé</li>
                    <li>☐ Cache configuré</li>
                    <li>☐ CDN activé</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Conclusion</h2>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Optimiser un site React pour le SEO nécessite une approche technique spécifique. Le SSR, les meta tags dynamiques, 
              les données structurées et l'optimisation des performances sont les piliers d'un bon référencement. 
              Avec React et les bonnes pratiques, vous pouvez créer des applications qui dominent Google.
            </p>

            {/* CTA */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                Besoin d'aide pour optimiser votre React ?
              </h3>
              <p className="text-slate-300 mb-6">
                Je vous aide à optimiser votre application React pour le SEO et les performances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:colinguillaume641@yahoo.fr"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Audit SEO gratuit
                </motion.a>
                <motion.a
                  href="https://wa.me/33666742480?text=Bonjour, j'ai lu votre article sur le SEO React et j'aimerais optimiser mon site"
                  className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.article>

          {/* Navigation */}
          <motion.div 
            className="mt-12 pt-8 border-t border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-between items-center">
              <a 
                href="/blog"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour au blog
              </a>
              <a 
                href="/services"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Mes services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ArticleSEOReact;
