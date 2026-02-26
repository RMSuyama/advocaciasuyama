import React from 'react';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Eligibility from './components/Eligibility';
import BRReflexos from './components/BRReflexos';
import BRRestituicao from './components/BRRestituicao';
import Benefits from './components/Benefits';
import Process from './components/Process';
import FAQ from './components/FAQ';
import OfficeInfo from './components/OfficeInfo';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app bg-dark h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth text-white font-inter selection:bg-primary selection:text-navy">
      <Header />
      <main>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><Hero /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><AboutSection /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><OfficeInfo /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><Eligibility /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><BRReflexos /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><BRRestituicao /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><Benefits /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><Process /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><FAQ /></div>
        <div className="snap-center h-[100dvh] flex items-center justify-center py-4 md:py-8 px-4 overflow-hidden"><LeadForm /></div>
      </main>
      <div className="snap-start pt-10"><Footer /></div>
      <WhatsAppButton />
    </div>
  );
}

export default App;
