import React from 'react';
import { Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container">
                <h2 className="section-title">O que dizem sobre o processo</h2>
                <div className="review-card">
                    <Quote className="quote-icon" size={48} />
                    <p className="review-text">
                        "Eu não estava cansada. Eu estava me perdendo. O RETORNO me deu a clareza que eu não conseguia encontrar sozinha em anos de terapia tradicional. É direto, sem rodeios e transformador."
                    </p>
                    <div className="reviewer-info">
                        <h4>Marta V.</h4>
                        <p className="reviewer-status">Processo finalizado</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
