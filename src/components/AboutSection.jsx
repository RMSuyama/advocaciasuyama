import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Gavel } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="saiba-mais" className="w-full max-w-7xl mx-auto px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                            Auxílio-Transporte (QM): Análise sobre a <span className="text-accent italic">Incidência do Imposto de Renda</span>
                        </h2>

                        <div className="space-y-3 md:space-y-4">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-navy border border-accent/20 rounded-lg flex items-center justify-center">
                                    <ShieldCheck className="text-accent w-3 h-3 md:w-4 md:h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-bold mb-0.5">Compreendendo a Natureza Indenizatória</h3>
                                    <p className="text-[9px] md:text-xs text-slate-400 leading-tight">
                                        O Auxílio-Transporte (QM) é um valor concedido com o objetivo de ressarcir despesas de locomoção. Sua natureza é indenizatória, não configurando acréscimo patrimonial.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-navy border border-accent/20 rounded-lg flex items-center justify-center">
                                    <Scale className="text-accent w-3 h-3 md:w-4 md:h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-bold mb-0.5">Fundamentação Legal e Tribunais</h3>
                                    <p className="text-[9px] md:text-xs text-slate-400 leading-tight">
                                        A Lei Federal nº 7.713/88 e a Súmula 447 do STJ estabelecem que o Imposto de Renda deve incidir apenas sobre acréscimo patrimonial efetivo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-navy border border-accent/20 rounded-lg flex items-center justify-center">
                                    <Gavel className="text-accent w-3 h-3 md:w-4 md:h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-bold mb-0.5">Potencial de Revisão de Descontos</h3>
                                    <p className="text-[9px] md:text-xs text-slate-400 leading-tight">
                                        Professores que observaram descontos de IR nos últimos 5 anos podem buscar análise jurídica para verificar a viabilidade de revisão.
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
                        <div className="bg-card border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative z-10">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>

                            <blockquote className="text-lg italic text-white/80 border-l-4 border-primary pl-4 md:pl-6 py-2 mb-6">
                                "O Superior Tribunal de Justiça (STJ), por meio da Súmula 447, sedimentou o entendimento de que a verba possui natureza indenizatória."
                            </blockquote>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-navy/50 rounded-lg border border-white/5">
                                    <span className="font-semibold text-sm">STJ Súmula 447</span>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Precedente</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-navy/50 rounded-lg border border-white/5">
                                    <span className="font-semibold text-sm">Lei Federal 7.713/88</span>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Art. 6º, I</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-navy/50 rounded-lg border border-white/5">
                                    <span className="font-semibold text-sm">TJSP Jurisprudência</span>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Consolidado</span>
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
