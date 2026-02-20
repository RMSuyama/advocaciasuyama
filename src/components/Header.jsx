import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const scrollToTop = () => {
        const container = document.querySelector('.home-scroll-container');
        if (container) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 p-6 pointer-events-none">
                <div className="container mx-auto flex justify-between items-center pointer-events-auto">
                    <Link to="/" className="group">
                        <img src="/logo.svg" className="h-8 w-8 brightness-200 group-hover:scale-110 transition-transform" alt="Logo" />
                    </Link>
                </div>
            </header>

            {/* Floating Scroll to Top - Fixed at bottom right */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-full shadow-2xl hover:bg-neutral-900 transition-all duration-300 active:scale-95 group hover:border-accent"
                aria-label="Voltar ao topo"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-accent transition-colors duration-300">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </>
    );
};

export default Header;
