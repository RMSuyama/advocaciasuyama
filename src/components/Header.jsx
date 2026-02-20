import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-12 left-0 w-full z-50 py-4 px-4 font-inter pointer-events-none">
            <div className="container mx-auto max-w-lg header-content pointer-events-auto">
                {/* Minimalist Header structure maintained */}
                <div className="flex justify-center items-center bg-black/60 backdrop-blur-xl border border-white/5 py-3 rounded-full shadow-2xl">
                    {/* Logo / Branding space kept clean and minimal as requested */}
                </div>
            </div>
        </header>
    );
};

export default Header;
