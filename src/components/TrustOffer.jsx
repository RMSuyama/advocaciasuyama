import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';
import './TrustOffer.css';

const TrustOffer = () => {
    return (
        <section className="trust-offer">
            <div className="container">
                <div className="offer-box">
                    <div className="offer-badge">OFERTA ÚNICA</div>
                    <h2 className="offer-title">Recupere o controle da sua vida hoje.</h2>

                    <div className="price-stack">
                        <span className="price-old">De R$ 79,00</span>
                        <div className="price-main">
                            <span className="currency">R$</span>
                            <span className="amount">39,90</span>
                        </div>
                        <p className="price-note">Pagamento único. Acesso imediato ao material.</p>
                    </div>

                    <Link to="/checkout" className="cta-button pulse-white">
                        QUERO PARAR DE ME ABANDONAR
                    </Link>

                    <p className="last-call">Se você já chegou até aqui, algo em você sabe que precisa mudar. Não se deixe para depois novamente.</p>
                </div>

                <div className="trust-badges">
                    <div className="trust-item">
                        <ShieldCheck size={32} />
                        <div>
                            <h4>Garantia Total</h4>
                            <p>7 dias para testar sem riscos.</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <Calendar size={32} />
                        <div>
                            <h4>Acesso Vitalício</h4>
                            <p>O material será seu para sempre.</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <Lock size={32} />
                        <div>
                            <h4>Checkout Seguro</h4>
                            <p>Processado por Mercado Pago.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustOffer;
