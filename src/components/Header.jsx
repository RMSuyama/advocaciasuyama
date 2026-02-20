import React, { useState, useEffect } from 'react';
import LegalLogo from './LegalLogo';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="cursor-pointer" onClick={scrollToTop}>
                        <LegalLogo className="h-10 md:h-12 w-auto" />
                    </div>

                    <a
                        href="#contato"
                        className="hidden md:block px-6 py-2 border border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-navy transition-all duration-300"
                    >
                        CONSULTAR MEUS DIREITOS
                    </a>
                </div>
            </header>

            {/* Floating Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 bg-white p-4 rounded-xl shadow-2xl hover:bg-slate-100 transition-all duration-300 active:scale-95 group border-2 border-navy/10 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Voltar ao topo"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-navy">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </>
    );
};

export default Header;
