import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import TrustOffer from './components/TrustOffer';

const Home = () => {
  useEffect(() => {
    // Garantir que ao carregar a Home, o scroll comece no topo
    const scrollContainer = document.querySelector('.home-scroll-container');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }, []);

  return (
    <div className="home-scroll-container h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-dark">
      <ProductHero />
      <Features />
      <Reviews />
      <TrustOffer />
      <footer className="snap-start">
        <Footer />
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="app bg-dark min-h-screen text-white font-inter">
      <PromoBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
