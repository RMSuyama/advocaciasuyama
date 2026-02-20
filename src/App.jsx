import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import TrustOffer from './components/TrustOffer';
import './index.css';

const Home = () => (
  <>
    <ProductHero />
    <Features />
    <Reviews />
    <TrustOffer />
  </>
);

function App() {
  return (
    <div className="app">
      <PromoBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
