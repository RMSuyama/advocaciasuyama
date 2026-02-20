import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-12 md:py-20 lg:py-24">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] text-accent uppercase border border-accent/20 rounded-lg bg-accent/5">
                        DIREITO TRIBUTÁRIO REGIONAL
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter text-white">
                        Professor Estadual: <br />
                        <span className="text-accent">Recupere o IR</span> <br />
                        do seu Auxílio-Transporte
                    </h1>

                    <p className="max-w-xl mx-auto text-base md:text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                        Atuação especializada em Registro/SP para garantir a restituição de valores descontados indevidamente (QM) nos últimos 5 anos.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a
                            href="#contato"
                            className="px-8 py-4 bg-white text-navy font-black rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-white/5 text-sm w-full sm:w-auto"
                        >
                            QUERO ANALISAR MEU CASO
                        </a>
                        <a
                            href="#office"
                            className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto text-sm"
                        >
                            Conheça o Escritório
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-accent rounded-full"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
