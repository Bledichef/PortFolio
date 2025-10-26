import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function ArticleEcommerce() {
  return (
    <>
      <Helmet>
        <title>Les 5 erreurs à éviter lors de la création d'un site e-commerce | Guillaume Colin</title>
        <meta name="description" content="Découvrez les erreurs courantes qui peuvent faire échouer votre boutique en ligne et comment les éviter pour maximiser vos ventes et conversions." />
        <meta name="keywords" content="erreurs e-commerce, boutique en ligne, vente en ligne, optimisation e-commerce, conversion, UX e-commerce" />
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
              <span>24 Octobre 2025</span>
              <span className="mx-2">•</span>
              <span>12 min de lecture</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Les 5 erreurs à éviter lors de la création d'un site e-commerce
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Découvrez les erreurs courantes qui peuvent faire échouer votre boutique en ligne et comment les éviter 
              pour maximiser vos ventes et conversions. Guide pratique basé sur mon expérience avec de nombreux clients.
            </p>
          </motion.div>

          {/* Contenu de l'article */}
          <motion.article 
            className="prose prose-lg prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Pourquoi ces erreurs sont fatales</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Créer un site e-commerce qui convertit n'est pas simple. 70% des boutiques en ligne échouent dans les 
              deux premières années, souvent à cause des mêmes erreurs répétées. Voici les 5 erreurs les plus 
              courantes que j'observe chez mes clients et comment les éviter.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Erreur #1 : Négliger l'expérience utilisateur mobile</h2>
            
            <div className="bg-red-600/20 p-6 rounded-xl mb-8 border border-red-500/30">
              <h3 className="text-xl font-semibold mb-4 text-red-400">❌ Ce qu'il ne faut PAS faire</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Site non responsive ou mal adapté mobile</li>
                <li>• Boutons trop petits pour les doigts</li>
                <li>• Formulaire de commande compliqué sur mobile</li>
                <li>• Images qui ne s'adaptent pas à l'écran</li>
              </ul>
            </div>

            <div className="bg-green-600/20 p-6 rounded-xl mb-8 border border-green-500/30">
              <h3 className="text-xl font-semibold mb-4 text-green-400">✅ La solution</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Design mobile-first obligatoire</li>
                <li>• Boutons minimum 44px de hauteur</li>
                <li>• Processus de commande simplifié</li>
                <li>• Test sur vrais appareils mobiles</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Erreur #2 : Processus de commande trop complexe</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Chaque étape supplémentaire dans le processus de commande fait perdre 10% de clients. 
              Un processus à 5 étapes = 50% de clients perdus !
            </p>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Processus optimal</h3>
              <ol className="text-slate-300 space-y-3">
                <li><strong>1. Panier :</strong> Ajout produit → Voir panier</li>
                <li><strong>2. Informations :</strong> Email + adresse de livraison</li>
                <li><strong>3. Paiement :</strong> Choix méthode + validation</li>
                <li><strong>4. Confirmation :</strong> Résumé + email de confirmation</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Erreur #3 : Manque de confiance et sécurité</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-red-400">❌ Signaux de méfiance</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Pas de certificat SSL visible</li>
                  <li>• Aucun avis client</li>
                  <li>• Informations de contact cachées</li>
                  <li>• Design amateur ou daté</li>
                  <li>• Pas de politique de retour claire</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">✅ Signaux de confiance</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Certificat SSL + badges sécurité</li>
                  <li>• Avis clients authentiques</li>
                  <li>• Contact facilement accessible</li>
                  <li>• Design professionnel moderne</li>
                  <li>• Politique de retour transparente</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Erreur #4 : Images produits de mauvaise qualité</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Les images représentent 60% de la décision d'achat. Des images floues, mal éclairées ou peu nombreuses 
              font fuir les clients avant même qu'ils lisent la description.
            </p>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Checklist images produits</h3>
              <ul className="text-slate-300 space-y-2">
                <li>✅ <strong>Minimum 3-5 photos</strong> par produit</li>
                <li>✅ <strong>Haute résolution</strong> (minimum 1000px)</li>
                <li>✅ <strong>Éclairage uniforme</strong> et professionnel</li>
                <li>✅ <strong>Fond neutre</strong> ou contexte d'usage</li>
                <li>✅ <strong>Zoom disponible</strong> sur les détails</li>
                <li>✅ <strong>Images cohérentes</strong> dans tout le catalogue</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Erreur #5 : Négliger le SEO et le marketing</h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Créer un site e-commerce sans stratégie marketing, c'est comme ouvrir une boutique dans une rue déserte. 
              Personne ne vous trouvera !
            </p>

            <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 p-6 rounded-xl mb-8 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Stratégie marketing essentielle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                <div>
                  <p><strong>SEO :</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Mots-clés produits optimisés</li>
                    <li>• Descriptions riches et uniques</li>
                    <li>• Structure URL claire</li>
                    <li>• Temps de chargement optimisé</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Marketing :</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Google Ads ciblés</li>
                    <li>• Réseaux sociaux actifs</li>
                    <li>• Email marketing automatisé</li>
                    <li>• Programmes d'affiliation</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Bonus : Les 3 KPIs à surveiller</h2>
            
            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
              <ol className="text-slate-300 space-y-4">
                <li>
                  <strong>1. Taux de conversion :</strong> 
                  <span className="text-orange-400">Objectif : 2-3% minimum</span>
                  <br />
                  <span className="text-sm text-slate-400">Nombre de commandes / Nombre de visiteurs</span>
                </li>
                <li>
                  <strong>2. Panier moyen :</strong> 
                  <span className="text-orange-400">Objectif : Augmenter de 20% par an</span>
                  <br />
                  <span className="text-sm text-slate-400">Chiffre d'affaires / Nombre de commandes</span>
                </li>
                <li>
                  <strong>3. Taux d'abandon panier :</strong> 
                  <span className="text-orange-400">Objectif : Moins de 70%</span>
                  <br />
                  <span className="text-sm text-slate-400">Paniers abandonnés / Paniers créés</span>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-400">Conclusion</h2>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Éviter ces 5 erreurs courantes peut transformer votre site e-commerce d'un échec en succès. 
              L'expérience utilisateur, la confiance, et le marketing sont les piliers d'une boutique en ligne qui convertit. 
              Prenez le temps de bien faire les choses dès le départ, cela vous fera gagner du temps et de l'argent.
            </p>

            {/* CTA */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                Besoin d'aide pour votre e-commerce ?
              </h3>
              <p className="text-slate-300 mb-6">
                Je vous accompagne dans la création de votre boutique en ligne qui convertit vraiment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:colinguillaume641@yahoo.fr"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Devis e-commerce
                </motion.a>
                <motion.a
                  href="https://wa.me/33666742480?text=Bonjour, j'ai lu votre article sur les erreurs e-commerce et j'aimerais créer ma boutique en ligne"
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

export default ArticleEcommerce;
