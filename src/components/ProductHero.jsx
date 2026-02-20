import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductHero.css';

const ProductHero = () => {
    return (
        <section className="product-hero">
            <div className="container">
                <div className="product-info">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hero-image-container"
                    >
                        {/* The image provided by the user */}
                        <img src="/src/assets/ruptura.png" alt="O Ponto de Ruptura" className="ruptura-img" />
                    </motion.div>

                    <div className="identificacao section-margin">
                        <h3>Você sente que:</h3>
                        <ul className="cansado-de">
                            <li><span>→</span> vive no automático?</li>
                            <li><span>→</span> está sempre cansado?</li>
                            <li><span>→</span> se cobra demais?</li>
                            <li><span>→</span> perdeu o prazer pelas coisas simples?</li>
                            <li><span>→</span> sente que está se deixando pra depois?</li>
                        </ul>
                        <div className="esgotamento-msg">
                            <p>Isso não é preguiça. Não é drama. Não é fraqueza.</p>
                            <p className="highlight">É esgotamento emocional silencioso.</p>
                        </div>
                    </div>

                    <div className="quebra-crenca">
                        <p>Você não precisa de mais força. Você precisa de <strong>clareza, espaço mental e reorganização interna.</strong></p>
                        <p className="sub-text">A maioria das pessoas não está doente. Está sobrecarregada, confusa e sozinha nos próprios pensamentos.</p>
                    </div>

                    <Link to="/checkout" className="buy-button animate-pulse">
                        QUERO VOLTAR PRA MIM
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
