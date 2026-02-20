import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-16 bg-dark px-4 font-inter snap-start">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="container mx-auto max-w-3xl"
            >
                <h2 className="text-center mb-12 md:mb-16 text-neutral-500 font-light uppercase tracking-[0.25em] text-[10px] md:text-xs">
                    O que dizem sobre o processo
                </h2>
                <div className="bg-card border border-white/5 p-10 md:p-16 rounded-[40px] text-center relative shadow-2xl backdrop-blur-sm group hover:border-accent/10 transition-colors duration-700">
                    <Quote className="text-accent mx-auto mb-8 opacity-60 group-hover:scale-110 transition-transform duration-700" size={40} />
                    <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white mb-10">
                        "Eu não estava cansada. Eu estava me perdendo. O Ponto de Ruptura me deu a clareza que eu não conseguia encontrar sozinha em anos de terapia tradicional. É direto, sem rodeios e transformador."
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <h4 className="text-lg md:text-xl font-black mb-1">Marta V.</h4>
                        <p className="text-accent font-bold uppercase tracking-widest text-[10px]">Processo finalizado</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Reviews;
