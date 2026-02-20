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
        <header className="fixed top-8 md:top-12 left-0 w-full z-50 py-4 px-4 font-inter pointer-events-none">
            <div className="container mx-auto max-w-lg header-content pointer-events-auto">
                {/* Minimalist Header structure maintained */}
                <div className="flex justify-center items-center">
                    <button
                        onClick={scrollToTop}
                        className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-full shadow-2xl hover:bg-neutral-900 transition-all duration-300 active:scale-95 group hover:border-accent"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-accent transition-colors duration-300">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                            <path d="M12 7V17M12 7L9 10M12 7L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
