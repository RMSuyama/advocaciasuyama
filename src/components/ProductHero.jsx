import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductHero = () => {
    return (
        <div className="bg-dark text-white font-inter">
            {/* 1. Impact Section */}
            <section className="min-h-[60vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-dark">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <span className="block text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            Pare por 3 minutos. Leia isso.
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-tighter bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                            Pare de se abandonar e recupere sua dignidade emocional
                        </h1>
                        <p className="text-base md:text-lg text-muted max-w-xl mb-10 leading-relaxed font-light">
                            Se você sente que está se perdendo de si mesmo, este site não vende um ebook. Ele oferece uma saída.
                        </p>

                        <Link
                            to="/checkout"
                            className="bg-white text-dark px-10 md:px-12 py-3.5 md:py-4 rounded-full text-sm md:text-base font-black uppercase tracking-widest hover:bg-accent transition-all duration-300 hover:-translate-y-1 shadow-2xl animate-pulse"
                        >
                            QUERO VOLTAR PRA MIM
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. Identification Section */}
            <section className="py-12 md:py-16 px-4 bg-dark">
                <div className="container mx-auto max-w-2xl">
                    <div className="bg-card border border-white/5 p-6 md:p-10 rounded-[30px] shadow-2xl backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-extrabold mb-8 text-white">
                            Você sente que:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "vive no automático, como se estivesse apenas assistindo sua vida?",
                                "está sempre cansado, mesmo após uma noite inteira de sono?",
                                "se cobra demais por coisas que não consegue controlar?",
                                "perdeu o prazer pelas coisas simples que antes amava?",
                                "está sempre se deixando para depois para agradar aos outros?"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 text-sm md:text-base text-neutral-300 leading-relaxed italic">
                                    <span className="text-primary font-black">→</span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-sm text-muted font-light mb-1">Isso não é preguiça. Não é drama. Não é fraqueza.</p>
                            <p className="text-xl md:text-2xl font-black text-white leading-tight">
                                É <span className="border-b-2 border-primary">esgotamento emocional silencioso</span> por autoabandono.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Belief Section */}
            <section className="py-12 md:py-20 px-4 bg-dark text-center">
                <div className="container mx-auto max-w-2xl">
                    <div className="text-xl md:text-2xl font-light leading-snug space-y-3">
                        <p>Você não precisa de "mais força de vontade".</p>
                        <p className="text-accent font-medium">
                            Você precisa de <span className="text-base md:text-xl text-white font-black">clareza, espaço mental e uma nova reorganização interna.</span>
                        </p>
                        <p className="text-sm md:text-base text-muted font-normal pt-8 max-w-lg mx-auto">
                            A maioria das pessoas não está doente. Está apenas sobrecarregada e sozinha nos próprios pensamentos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductHero;
