import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-12 left-0 w-full z-50 py-4 px-4 font-inter pointer-events-none">
            <div className="container mx-auto max-w-lg header-content pointer-events-auto">
                {/* Minimalist Header structure maintained */}
                <div className="flex justify-center items-center bg-black/60 backdrop-blur-xl border border-white/5 py-3 rounded-full shadow-2xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-accent transition-colors duration-300">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                        <path d="M12 7V17M12 7L9 10M12 7L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;
