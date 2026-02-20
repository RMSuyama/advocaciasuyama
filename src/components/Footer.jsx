import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="guarantee-section">
                    <ShieldCheck size={48} color="#e63946" />
                    <h3>Garantia Incondicional</h3>
                    <p>Se em até 7 dias você sentir que este material não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 PULAR FORA. Todos os direitos reservados.</p>
                    <div className="payment-methods">
                        <span>Pague com Mercado Pago</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
