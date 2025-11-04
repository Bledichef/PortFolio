import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";

function ArticleCoreWebVitals() {
  return (
    <>
      <Helmet>
        <title>Core Web Vitals : améliorer les performances de votre site (et votre classement Google) | Guillaume Colin</title>
        <meta name="description" content="Guide complet sur les Core Web Vitals : LCP, INP, CLS. Optimisez les performances de votre site web pour améliorer votre classement Google et l'expérience utilisateur." />
        <meta name="keywords" content="Core Web Vitals, LCP, INP, CLS, performance web, optimisation site, Google ranking, PageSpeed, Lighthouse" />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Fil d'Ariane */}
          <Breadcrumb
            items={[
              { label: "Accueil", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: "Core Web Vitals : améliorer les performances de votre site (et votre classement Google)" }
            ]}
          />
          
          {/* Header de l'article */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-sm text-slate-400 mb-4">
              <span>28 Octobre 2025</span>
              <span className="mx-2">•</span>
              <span>18 min de lecture</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Core Web Vitals : améliorer les performances de votre site (et votre classement Google)
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Les Core Web Vitals sont devenus des facteurs de classement Google majeurs en 2025. Découvrez comment optimiser 
              LCP, INP et CLS pour améliorer vos performances, votre SEO et l'expérience de vos utilisateurs.
            </p>
          </motion.div>

          {/* Contenu de l'article */}
          <motion.article 
            className="prose prose-lg prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Pourquoi les Core Web Vitals sont critiques en 2025</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Depuis 2021, Google utilise les Core Web Vitals comme facteurs de classement dans ses résultats de recherche. 
              En 2025, ces métriques sont devenues encore plus importantes : un site lent peut perdre jusqu'à <strong>50% de son trafic organique</strong>. 
              Mais au-delà du SEO, une mauvaise performance impacte directement vos conversions et votre taux de rebond.
            </p>

            <div className="bg-red-600/20 p-6 rounded-xl mb-8 border border-red-500/30">
              <h3 className="text-xl font-semibold mb-4 text-red-400">⚠️ Impact réel des mauvaises performances</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• <strong>Perte de trafic :</strong> -50% de visiteurs si votre site met plus de 3 secondes à charger</li>
                <li>• <strong>Baisse des conversions :</strong> -20% de conversions par seconde de délai supplémentaire</li>
                <li>• <strong>Classement Google :</strong> Sites lents rétrogradés dans les résultats de recherche</li>
                <li>• <strong>Expérience utilisateur :</strong> 53% des utilisateurs quittent un site qui met plus de 3 secondes</li>
                <li>• <strong>Coût publicitaire :</strong> Google Ads pénalise les sites avec de mauvais Core Web Vitals</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Les 3 Core Web Vitals expliqués</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Google mesure trois métriques principales qui reflètent l'expérience utilisateur réelle. Voici comment les comprendre et les optimiser.
            </p>

            {/* LCP */}
            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">1. LCP (Largest Contentful Paint) - Temps de chargement</h3>
              <p className="text-slate-300 mb-4">
                Le LCP mesure le temps nécessaire pour afficher le plus grand élément visible sur votre page (image, vidéo, bloc de texte).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-bold text-lg">✅ Bon</p>
                  <p className="text-slate-300 text-sm mt-2">&lt; 2.5 secondes</p>
                </div>
                <div className="bg-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-400 font-bold text-lg">⚠️ À améliorer</p>
                  <p className="text-slate-300 text-sm mt-2">2.5 - 4 secondes</p>
                </div>
                <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                  <p className="text-red-400 font-bold text-lg">❌ Mauvais</p>
                  <p className="text-slate-300 text-sm mt-2">&gt; 4 secondes</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-white mt-6">Optimisations LCP :</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>• <strong>Optimiser les images :</strong> WebP, compression, dimensions adaptées</li>
                <li>• <strong>CDN :</strong> Utiliser un Content Delivery Network</li>
                <li>• <strong>Preload :</strong> Précharger les ressources critiques</li>
                <li>• <strong>Server-side rendering :</strong> SSR pour React/Vue</li>
                <li>• <strong>Cache :</strong> Mettre en cache les ressources statiques</li>
                <li>• <strong>Éliminer les ressources bloquantes :</strong> CSS et JS non critiques</li>
              </ul>

              <div className="mt-6 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                <p className="text-blue-400 font-semibold">💡 Exemple concret :</p>
                <p className="text-slate-300 mt-2">
                  Une image de 2MB non optimisée peut prendre 4-5 secondes à charger. En la compressant en WebP et en redimensionnant, 
                  vous pouvez réduire le LCP à moins de 1 seconde.
                </p>
              </div>
            </div>

            {/* INP */}
            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">2. INP (Interaction to Next Paint) - Réactivité</h3>
              <p className="text-slate-300 mb-4">
                L'INP mesure le temps entre une interaction utilisateur (clic, toucher, frappe) et l'affichage visuel de la réponse. 
                Cette métrique a remplacé le FID (First Input Delay) en 2024.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-bold text-lg">✅ Bon</p>
                  <p className="text-slate-300 text-sm mt-2">&lt; 200ms</p>
                </div>
                <div className="bg-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-400 font-bold text-lg">⚠️ À améliorer</p>
                  <p className="text-slate-300 text-sm mt-2">200 - 500ms</p>
                </div>
                <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                  <p className="text-red-400 font-bold text-lg">❌ Mauvais</p>
                  <p className="text-slate-300 text-sm mt-2">&gt; 500ms</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-white mt-6">Optimisations INP :</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>• <strong>Code JavaScript optimisé :</strong> Éviter les boucles lourdes</li>
                <li>• <strong>Débouncing/Throttling :</strong> Limiter les événements fréquents</li>
                <li>• <strong>Web Workers :</strong> Déplacer les tâches lourdes hors du thread principal</li>
                <li>• <strong>Lazy loading :</strong> Charger les composants à la demande</li>
                <li>• <strong>Optimiser les event listeners :</strong> Utiliser event delegation</li>
                <li>• <strong>Réduire le JavaScript :</strong> Code splitting, tree shaking</li>
              </ul>

              <div className="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                <p className="text-green-400 font-semibold">💡 Exemple concret :</p>
                <p className="text-slate-300 mt-2">
                  Un formulaire qui met 800ms à répondre à un clic est frustrant. En optimisant le JavaScript et en utilisant 
                  le debouncing, vous pouvez réduire l'INP à moins de 150ms.
                </p>
              </div>
            </div>

            {/* CLS */}
            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">3. CLS (Cumulative Layout Shift) - Stabilité visuelle</h3>
              <p className="text-slate-300 mb-4">
                Le CLS mesure la stabilité visuelle de votre page. Un score élevé signifie que les éléments se déplacent pendant le chargement, 
                créant une mauvaise expérience utilisateur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-bold text-lg">✅ Bon</p>
                  <p className="text-slate-300 text-sm mt-2">&lt; 0.1</p>
                </div>
                <div className="bg-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-400 font-bold text-lg">⚠️ À améliorer</p>
                  <p className="text-slate-300 text-sm mt-2">0.1 - 0.25</p>
                </div>
                <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                  <p className="text-red-400 font-bold text-lg">❌ Mauvais</p>
                  <p className="text-slate-300 text-sm mt-2">&gt; 0.25</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-white mt-6">Optimisations CLS :</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>• <strong>Dimensions d'images :</strong> Définir width et height sur toutes les images</li>
                <li>• <strong>Réservations d'espace :</strong> Utiliser des placeholders pour le contenu dynamique</li>
                <li>• <strong>Fonts :</strong> Précharger les polices ou utiliser font-display: swap</li>
                <li>• <strong>Publicités :</strong> Réserver l'espace pour les bannières publicitaires</li>
                <li>• <strong>Contenu dynamique :</strong> Éviter d'insérer du contenu au-dessus du contenu existant</li>
                <li>• <strong>Animations :</strong> Utiliser transform et opacity plutôt que width/height</li>
              </ul>

              <div className="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
                <p className="text-purple-400 font-semibold">💡 Exemple concret :</p>
                <p className="text-slate-300 mt-2">
                  Une image sans dimensions définies fait "sauter" le contenu lors du chargement. En définissant width="800" height="600", 
                  le navigateur réserve l'espace et évite le layout shift.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Comment mesurer vos Core Web Vitals</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">🔍 Google Search Console</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Données réelles des utilisateurs</li>
                  <li>• Rapports détaillés par page</li>
                  <li>• Historique des performances</li>
                  <li>• Comparaison mobile/desktop</li>
                </ul>
                <p className="text-slate-400 text-sm mt-4">Accès : search.google.com/search-console</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">⚡ PageSpeed Insights</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Score de performance 0-100</li>
                  <li>• Métriques Core Web Vitals</li>
                  <li>• Suggestions d'optimisation</li>
                  <li>• Test mobile et desktop</li>
                </ul>
                <p className="text-slate-400 text-sm mt-4">Accès : pagespeed.web.dev</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">📊 Lighthouse (Chrome DevTools)</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Audit complet en local</li>
                  <li>• Performance, SEO, Accessibilité</li>
                  <li>• Détails techniques précis</li>
                  <li>• Rapports exportables</li>
                </ul>
                <p className="text-slate-400 text-sm mt-4">F12 → Onglet Lighthouse</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">🌐 Web Vitals Extension</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Extension Chrome/Firefox</li>
                  <li>• Mesure en temps réel</li>
                  <li>• Visualisation directe</li>
                  <li>• Idéal pour le développement</li>
                </ul>
                <p className="text-slate-400 text-sm mt-4">Chrome Web Store</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Checklist d'optimisation complète</h2>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">✅ Optimisations essentielles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white mb-3">LCP (Performance) :</p>
                  <ul className="ml-4 space-y-1">
                    <li>☐ Images optimisées (WebP, compression)</li>
                    <li>☐ CDN configuré</li>
                    <li>☐ Preload des ressources critiques</li>
                    <li>☐ Cache browser activé</li>
                    <li>☐ CSS/JS non critiques déplacés</li>
                    <li>☐ Server-side rendering (si applicable)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3">INP (Réactivité) :</p>
                  <ul className="ml-4 space-y-1">
                    <li>☐ JavaScript optimisé et minifié</li>
                    <li>☐ Debouncing sur les événements</li>
                    <li>☐ Web Workers pour tâches lourdes</li>
                    <li>☐ Lazy loading des composants</li>
                    <li>☐ Event delegation implémentée</li>
                    <li>☐ Code splitting activé</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3">CLS (Stabilité) :</p>
                  <ul className="ml-4 space-y-1">
                    <li>☐ Dimensions définies sur toutes les images</li>
                    <li>☐ Placeholders pour contenu dynamique</li>
                    <li>☐ Fonts préchargées</li>
                    <li>☐ Espace réservé pour publicités</li>
                    <li>☐ Animations avec transform/opacity</li>
                    <li>☐ Pas d'insertion de contenu au-dessus</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3">Général :</p>
                  <ul className="ml-4 space-y-1">
                    <li>☐ Compression Gzip/Brotli</li>
                    <li>☐ HTTPS activé</li>
                    <li>☐ Headers de cache configurés</li>
                    <li>☐ Réduction des requêtes HTTP</li>
                    <li>☐ Minification CSS/JS/HTML</li>
                    <li>☐ Monitoring continu</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Exemples de code pour optimiser</h2>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Optimisation LCP : Image avec dimensions</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`<!-- ❌ Mauvais : Image sans dimensions -->
<img src="hero.jpg" alt="Hero image" />

<!-- ✅ Bon : Dimensions définies -->
<img 
  src="hero.jpg" 
  alt="Hero image"
  width="1200"
  height="600"
  loading="lazy"
/>

<!-- ✅ Excellent : Image responsive avec srcset -->
<img 
  src="hero.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 1200px"
  alt="Hero image"
  width="1200"
  height="600"
  loading="eager"
/>`}
              </pre>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Optimisation INP : Debouncing</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`// ❌ Mauvais : Fonction appelée à chaque frappe
function handleSearch(e) {
  const query = e.target.value;
  fetchResults(query); // Trop d'appels API
}

// ✅ Bon : Debouncing pour limiter les appels
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedSearch = debounce((query) => {
  fetchResults(query);
}, 300);

// Utilisation
input.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});`}
              </pre>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Optimisation CLS : Préchargement de fonts</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`<!-- ✅ Précharger les fonts critiques -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />

<!-- CSS avec font-display: swap -->
@font-face {
  font-family: 'Main Font';
  src: url('/fonts/main.woff2') format('woff2');
  font-display: swap; /* Affiche le texte immédiatement */
}

/* Fallback pour éviter le CLS */
body {
  font-family: 'Main Font', Arial, sans-serif;
}

/* Utiliser font-display: optional pour les fonts non critiques */
@font-face {
  font-family: 'Decorative Font';
  src: url('/fonts/decorative.woff2') format('woff2');
  font-display: optional;
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Impact sur le SEO et les conversions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-600/20 p-6 rounded-xl border border-green-500/30">
                <h3 className="text-xl font-semibold mb-4 text-green-400">📈 Impact SEO</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• <strong>Classement Google :</strong> Sites rapides mieux classés</li>
                  <li>• <strong>Featured Snippets :</strong> Meilleure chance d'apparaître</li>
                  <li>• <strong>Mobile-First :</strong> Critère majeur pour le mobile</li>
                  <li>• <strong>Google Ads :</strong> Meilleure qualité = coût réduit</li>
                  <li>• <strong>Indexation :</strong> Crawling plus efficace</li>
                </ul>
              </div>

              <div className="bg-blue-600/20 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">💰 Impact Business</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• <strong>Conversions :</strong> +10% pour chaque seconde gagnée</li>
                  <li>• <strong>Taux de rebond :</strong> -20% avec un site rapide</li>
                  <li>• <strong>Engagement :</strong> +40% de temps sur site</li>
                  <li>• <strong>Abandons panier :</strong> -15% pour e-commerce</li>
                  <li>• <strong>Satisfaction :</strong> Expérience utilisateur améliorée</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Conclusion</h2>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Les Core Web Vitals ne sont plus optionnels en 2025. Ils impactent directement votre classement Google, 
              vos conversions et la satisfaction de vos utilisateurs. Optimiser LCP, INP et CLS n'est pas seulement une 
              question technique, c'est un investissement dans la réussite de votre site web.
            </p>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">📊 Objectifs à atteindre</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                  <p className="text-2xl font-bold text-green-400 mb-2">LCP</p>
                  <p className="text-slate-300">&lt; 2.5s</p>
                </div>
                <div className="text-center p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                  <p className="text-2xl font-bold text-green-400 mb-2">INP</p>
                  <p className="text-slate-300">&lt; 200ms</p>
                </div>
                <div className="text-center p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                  <p className="text-2xl font-bold text-green-400 mb-2">CLS</p>
                  <p className="text-slate-300">&lt; 0.1</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                Besoin d'optimiser les performances de votre site ?
              </h3>
              <p className="text-slate-300 mb-6">
                Je vous aide à améliorer vos Core Web Vitals et à booster votre classement Google avec un audit complet et des optimisations sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:colinguillaume641@yahoo.fr?subject=Audit Core Web Vitals"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Audit performance gratuit
                </motion.a>
                <motion.a
                  href="https://wa.me/33666742480?text=Bonjour, j'aimerais optimiser les Core Web Vitals de mon site"
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

export default ArticleCoreWebVitals;

