import React from 'react';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Eligibility from './components/Eligibility';
import Benefits from './components/Benefits';
import Process from './components/Process';
import FAQ from './components/FAQ';
import OfficeInfo from './components/OfficeInfo';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app bg-dark h-[100dvh] overflow-y-auto snap-y snap-proximity text-white font-inter selection:bg-primary selection:text-navy">
      <Header />
      <main>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><Hero /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><AboutSection /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><OfficeInfo /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><Eligibility /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><Benefits /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><Process /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><FAQ /></div>
        <div className="snap-start min-h-[100dvh] flex items-center justify-center p-4"><LeadForm /></div>
      </main>
      <div className="snap-start pt-10"><Footer /></div>
    </div>
  );
}

export default App;
