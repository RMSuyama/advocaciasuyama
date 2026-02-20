import React from 'react';

const LegalLogo = ({ className = "" }) => (
  <div className={`flex flex-col leading-tight ${className}`}>
    <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
      RAFAEL SUYAMA
    </span>
    <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.4em] uppercase">
      ADVOCACIA
    </span>
  </div>
);

export default LegalLogo;
