import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductHero = () => {
    return (
        <div className="bg-dark text-white font-inter h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
            {/* 1. Impact Section - VIEW 1 */}
            <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-dark snap-start">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
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
                            className="group relative bg-white text-dark px-10 md:px-12 py-3.5 md:py-4 rounded-full text-sm md:text-base font-black uppercase tracking-widest transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            <span className="relative z-10">QUERO VOLTAR PRA MIM</span>
                            <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-0"></div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. Identification Section - VIEW 2 */}
            <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-dark snap-start">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="container mx-auto max-w-2xl w-full"
                >
                    <div className="bg-card border border-white/5 p-6 md:p-10 rounded-[30px] shadow-2xl backdrop-blur-sm group hover:border-white/10 transition-colors duration-700">
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
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-3 text-sm md:text-base text-neutral-300 leading-relaxed italic"
                                >
                                    <span className="text-primary font-black">→</span>
                                    {text}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-sm text-muted font-light mb-1">Isso não é preguiça. Não é drama. Não é fraqueza.</p>
                            <p className="text-xl md:text-2xl font-black text-white leading-tight">
                                É <span className="border-b-2 border-primary">esgotamento emocional silencioso</span> por autoabandono.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 3. Belief Section - VIEW 3 */}
            <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-dark snap-start">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="container mx-auto max-w-2xl text-center"
                >
                    <div className="text-2xl md:text-3xl font-light leading-snug space-y-4">
                        <p>Você não precisa de "mais força de vontade".</p>
                        <p className="text-accent font-medium">
                            Você precisa de <span className="text-xl md:text-2xl text-white font-black">clareza, espaço mental e uma nova reorganização interna.</span>
                        </p>
                        <p className="text-base md:text-lg text-muted font-normal pt-10 max-w-lg mx-auto">
                            A maioria das pessoas não está doente. Está apenas sobrecarregada e sozinha nos próprios pensamentos.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ProductHero;
