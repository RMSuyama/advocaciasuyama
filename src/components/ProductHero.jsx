import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductHero.css';

const ProductHero = () => {
    return (
        <section className="product-hero">
            <div className="container">
                <div className="hero-content-wrapper">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="impact-header"
                    >
                        <span className="pre-headline">Pare por 3 minutos. Leia isso.</span>
                        <h1 className="main-headline">Pare de se abandonar e recupere sua dignidade emocional</h1>
                        <p className="sub-headline">Se você sente que está se perdendo de si mesmo, este site não vende um ebook. Ele oferece uma saída.</p>

                        <Link to="/checkout" className="cta-button primary-cta animate-pulse">
                            QUERO VOLTAR PRA MIM
                        </Link>
                    </motion.div>

                    <div className="dor-espelhamento section-margin">
                        <h3>Você sente que:</h3>
                        <ul className="dor-list">
                            <li><span>→</span> vive no automático, como se estivesse apenas assistindo sua vida?</li>
                            <li><span>→</span> está sempre cansado, mesmo após uma noite inteira de sono?</li>
                            <li><span>→</span> se cobra demais por coisas que não consegue controlar?</li>
                            <li><span>→</span> perdeu o prazer pelas coisas simples que antes amava?</li>
                            <li><span>→</span> está sempre se deixando para depois para agradar aos outros?</li>
                        </ul>

                        <div className="consciencia-block">
                            <p className="consciencia-text">Isso não é preguiça. Não é drama. Não é fraqueza.</p>
                            <p className="consciencia-punchline">É <strong>esgotamento emocional silencioso</strong> por autoabandono.</p>
                        </div>
                    </div>

                    <div className="quebra-crenca-premium">
                        <p>Você não precisa de "mais força de vontade".</p>
                        <p className="crenca-msg">Você precisa de <strong>clareza, espaço mental e uma nova reorganização interna.</strong></p>
                        <p className="crenca-sub">A maioria das pessoas não está doente. Está apenas sobrecarregada e sozinha nos próprios pensamentos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
