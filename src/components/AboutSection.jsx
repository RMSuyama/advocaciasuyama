import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Gavel } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="saiba-mais" className="w-full max-w-7xl mx-auto py-12 px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                            O que é o Auxílio-Transporte (QM) e por que ele <span className="text-accent italic">não deveria</span> ser tributado?
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-navy border border-accent/20 rounded-lg flex items-center justify-center">
                                    <ShieldCheck className="text-accent w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Uma Verba Indenizatória</h3>
                                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                        O Auxílio-Transporte (QM) é um valor concedido para cobrir despesas de locomoção. Ele tem caráter indenizatório.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-navy border border-accent/20 rounded-lg flex items-center justify-center">
                                    <Scale className="text-accent w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Lei e Jurisprudência ao seu Lado</h3>
                                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                        A legislação (Lei Federal nº 7.713/88) estabelece que apenas rendimentos que representam "acréscimo patrimonial" devem ser tributados.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-navy border border-accent/20 rounded-lg flex items-center justify-center">
                                    <Gavel className="text-accent w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Exemplos de Decisões</h3>
                                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                        A Súmula 447 do STJ já sedimentou o entendimento de que a verba possui natureza indenizatória.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative z-10">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>

                            <blockquote className="text-xl italic text-white/80 border-l-4 border-primary pl-6 py-2 mb-8">
                                "Verbas de natureza indenizatória não configuram acréscimo patrimonial e, portanto, não constituem fato gerador do Imposto de Renda."
                            </blockquote>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-navy/50 rounded-lg border border-white/5">
                                    <span className="font-semibold text-sm">STJ Súmula 447</span>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Consolidado</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-navy/50 rounded-lg border border-white/5">
                                    <span className="font-semibold text-sm">TJSP Jurisprudência</span>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Favorável</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-navy/50 rounded-lg border border-white/5">
                                    <span className="font-semibold text-sm">Lei Federal 7.713/88</span>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Art. 6º, I</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
