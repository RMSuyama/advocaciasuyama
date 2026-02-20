import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductHero = () => {
    return (
        <div className="bg-dark text-white font-inter">
            {/* 1. Impact Section */}
            <section className="min-h-[70vh] flex items-center py-20 px-4 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <span className="block text-accent text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6">
                            Pare por 3 minutos. Leia isso.
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                            Pare de se abandonar e recupere sua dignidade emocional
                        </h1>
                        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed font-light">
                            Se você sente que está se perdendo de si mesmo, este site não vende um ebook. Ele oferece uma saída.
                        </p>

                        <Link
                            to="/checkout"
                            className="bg-white text-dark px-8 md:px-14 py-4 md:py-6 rounded-full text-lg md:text-xl font-black uppercase tracking-widest hover:bg-accent transition-all duration-300 hover:-translate-y-1 shadow-2xl animate-pulse"
                        >
                            QUERO VOLTAR PRA MIM
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. Identification Section */}
            <section className="py-16 md:py-24 px-4 bg-dark">
                <div className="container mx-auto max-w-3xl">
                    <div className="bg-card border border-white/5 p-8 md:p-14 rounded-[40px] shadow-2xl backdrop-blur-sm">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-10 text-white">
                            Você sente que:
                        </h3>
                        <ul className="space-y-6 mb-12">
                            {[
                                "vive no automático, como se estivesse apenas assistindo sua vida?",
                                "está sempre cansado, mesmo após uma noite inteira de sono?",
                                "se cobra demais por coisas que não consegue controlar?",
                                "perdeu o prazer pelas coisas simples que antes amava?",
                                "está sempre se deixando para depois para agradar aos outros?"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-base md:text-lg text-neutral-300 leading-relaxed italic">
                                    <span className="text-primary font-black">→</span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-10 border-t border-white/10">
                            <p className="text-lg text-muted font-light mb-2">Isso não é preguiça. Não é drama. Não é fraqueza.</p>
                            <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                                É <span className="border-b-4 border-primary">esgotamento emocional silencioso</span> por autoabandono.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Belief Section */}
            <section className="py-20 md:py-32 px-4 bg-dark text-center">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-2xl md:text-4xl font-light leading-snug space-y-4">
                        <p>Você não precisa de "mais força de vontade".</p>
                        <p className="text-accent font-medium">
                            Você precisa de <span className="text-white font-black">clareza, espaço mental e uma nova reorganização interna.</span>
                        </p>
                        <p className="text-base md:text-xl text-muted font-normal pt-10 max-w-xl mx-auto">
                            A maioria das pessoas não está doente. Está apenas sobrecarregada e sozinha nos próprios pensamentos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductHero;
