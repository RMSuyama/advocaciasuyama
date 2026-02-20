import React from 'react';
import { Quote } from 'lucide-react';

const Reviews = () => {
    return (
        <section className="py-24 md:py-32 bg-dark px-4 font-inter">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-center mb-16 md:mb-24 text-neutral-500 font-light uppercase tracking-[0.25em] text-xs md:text-sm">
                    O que dizem sobre o processo
                </h2>
                <div className="bg-card border border-white/5 p-12 md:p-24 rounded-[60px] text-center relative shadow-2xl backdrop-blur-sm">
                    <Quote className="text-accent mx-auto mb-10 opacity-60" size={60} />
                    <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-white mb-12">
                        "Eu não estava cansada. Eu estava me perdendo. O RETORNO me deu a clareza que eu não conseguia encontrar sozinha em anos de terapia tradicional. É direto, sem rodeios e transformador."
                    </p>
                    <div className="pt-8 border-t border-white/5">
                        <h4 className="text-xl md:text-2xl font-black mb-1">Marta V.</h4>
                        <p className="text-accent font-bold uppercase tracking-widest text-xs">Processo finalizado</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
