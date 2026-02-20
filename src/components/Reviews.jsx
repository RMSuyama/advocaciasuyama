import React from 'react';
import { Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container">
                <h2 className="section-title">Leituras transformadoras</h2>
                <div className="review-card">
                    <Quote size={40} className="quote-icon" />
                    <p className="review-text">
                        "Eu sentia que estava me apagando aos poucos. Este guia não foi apenas uma leitura, foi o empurrão que eu precisava para parar de me autossabotar. Saí com clareza e, pela primeira vez em anos, sinto paz."
                    </p>
                    <div className="reviewer-info">
                        <h4>Ana Clara S.</h4>
                        <p className="reviewer-status">Leitora do Ebook</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
