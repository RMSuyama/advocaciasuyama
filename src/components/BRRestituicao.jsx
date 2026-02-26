import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Gavel, AlertCircle } from 'lucide-react';

const BRRestituicao = () => {
    return (
        <section id="ir-sobre-rra" className="w-full max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:order-2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                        <AlertCircle className="w-3 h-3" />
                        Imposto Retido Indevidamente
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 leading-tight">
                        Imposto de Renda sobre Rendimentos Recebidos <span className="text-primary italic">Acumuladamente (RRA)</span> da BR.
                    </h2>
                    <p className="text-slate-400 mb-6 md:mb-8 text-xs md:text-sm leading-relaxed">
                        Quando a BR é paga de forma acumulada, a Fazenda pode reter IR superior ao devido ao aplicar a alíquota sobre o total. O correto é o <span className="text-white font-semibold">Regime de Competência</span>.
                    </p>

                    <div className="space-y-3 md:space-y-4">
                        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-card/50 border border-white/5">
                            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-navy border border-primary/20 rounded-lg flex items-center justify-center">
                                <Gavel className="text-primary w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold mb-0.5">STJ Tema 351 e STF Tema 368</h3>
                                <p className="text-[10px] md:text-xs text-slate-400 leading-tight">
                                    A tributação deve seguir as alíquotas da época em que os valores deveriam ter sido pagos.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-card/50 border border-white/5">
                            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-navy border border-primary/20 rounded-lg flex items-center justify-center">
                                <Calculator className="text-primary w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold mb-0.5">Metodologia de Análise</h3>
                                <p className="text-[10px] md:text-xs text-slate-400 leading-tight">
                                    Cálculos baseados no Art. 12-A da Lei 7.713/88, com correção pelo IPCA-E e Taxa SELIC.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:order-1"
                >
                    <div className="relative p-6 md:p-8 bg-card border border-white/10 rounded-3xl shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-base md:text-lg font-bold">Competência vs. Caixa</h4>
                            <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/20">Desvio Legal</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm p-3 bg-navy/30 rounded-lg">
                                <span className="text-slate-400">Regime de Caixa (Global)</span>
                                <span className="text-red-400 font-mono italic">Retenção Maior</span>
                            </div>
                            <div className="flex justify-between items-center text-sm p-3 bg-primary/10 rounded-lg border border-primary/20">
                                <span className="text-primary font-semibold text-xs">Regime de Competência</span>
                                <span className="text-green-400 font-mono italic text-xs">Forma Correta</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-widest font-bold">
                                Lei nº 7.713/88 - Art. 12-A
                            </p>
                            <div className="inline-block px-4 py-2 bg-navy rounded-full border border-white/5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                Auditoria de RRA Disponível
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BRRestituicao;
