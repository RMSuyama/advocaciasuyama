import React from 'react';
import { Quote } from 'lucide-react';

const Reviews = () => {
    return (
        <section className="py-16 md:py-24 bg-dark px-4 font-inter">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-center mb-12 md:mb-16 text-neutral-500 font-light uppercase tracking-[0.25em] text-[10px] md:text-xs">
                    O que dizem sobre o processo
                </h2>
                <div className="bg-card border border-white/5 p-10 md:p-16 rounded-[40px] text-center relative shadow-2xl backdrop-blur-sm">
                    <Quote className="text-accent mx-auto mb-8 opacity-60" size={40} />
                    <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white mb-10">
                        "Eu não estava cansada. Eu estava me perdendo. O RETORNO me deu a clareza que eu não conseguia encontrar sozinha em anos de terapia tradicional. É direto, sem rodeios e transformador."
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <h4 className="text-lg md:text-xl font-black mb-1">Marta V.</h4>
                        <p className="text-accent font-bold uppercase tracking-widest text-[10px]">Processo finalizado</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
