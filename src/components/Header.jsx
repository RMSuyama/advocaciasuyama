import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-center">
                    <Link to="/" className="logo-link">
                        <h1 className="logo-text">RETORNO</h1>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
