import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import ArticleTechnologie from "./pages/ArticleTechnologie";
import ArticleEcommerce from "./pages/ArticleEcommerce";
import ArticleAutomatisation from "./pages/ArticleAutomatisation";
import ArticleSEOReact from "./pages/ArticleSEOReact";
import ArticleCoreWebVitals from "./pages/ArticleCoreWebVitals";

// Lazy loading pour améliorer les performances
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-slate-900"> 
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-white text-xl">Chargement...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/core-web-vitals-performance-site" element={<ArticleCoreWebVitals />} />
              <Route path="/blog/choisir-technologie-site-web-2025" element={<ArticleTechnologie />} />
              <Route path="/blog/erreurs-site-ecommerce-eviter" element={<ArticleEcommerce />} />
              <Route path="/blog/automatisation-web-gagner-temps" element={<ArticleAutomatisation />} />
              <Route path="/blog/seo-react-optimiser-google" element={<ArticleSEOReact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
