import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Scale } from 'lucide-react';

const BRReflexos = () => {
    return (
        <section id="bonificacao-resultado" className="w-full max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <TrendingUp className="w-3 h-3" />
                        Direito Consolidado
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 leading-tight">
                        Bonificação por Resultado (BR): Análise de seus <span className="text-accent italic">Reflexos na Remuneração</span>.
                    </h2>
                    <p className="text-slate-400 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                        A Bonificação por Resultado (LC 1.245/14) possui caráter remuneratório reconhecido pela justiça, integrando a remuneração do servidor para todos os fins.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {[
                            { title: "13º Salário", desc: "Reflexos no cálculo da gratificação natalina." },
                            { title: "Férias + 1/3", desc: "Inclusão na base de cálculo do terço constitucional." },
                            { title: "Licença-Prêmio", desc: "Base de cálculo para períodos indenizados." },
                            { title: "Abono de Permanência", desc: "Incidência conforme entendimento jurisprudencial." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300">
                                <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                                <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-navy/50 border-l-4 border-accent p-3 rounded-r-lg">
                        <p className="text-[10px] md:text-xs font-medium text-white/90">
                            <strong>Precedente do TJSP:</strong> PUIL nº 0000014-33.2022.8.26.9016 pacificou que a BR compõe a remuneração do servidor.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 relative"
                >
                    <div className="bg-gradient-to-br from-card to-navy p-1 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-10 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                                    <Scale className="text-primary w-5 h-5" />
                                </div>
                                <div className="text-right">
                                    <span className="block text-[10px] text-slate-500 uppercase font-bold">Base Legal</span>
                                    <span className="text-xs font-semibold">CF/88 Art. 7 e 39</span>
                                </div>
                            </div>

                            <blockquote className="text-base md:text-lg text-white/80 border-l-4 border-primary pl-4 md:pl-6 py-2 italic font-serif">
                                "É possível buscar a análise dos reflexos não pagos nos últimos 5 anos e a adequação da base de cálculo para o futuro."
                            </blockquote>

                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                    <p className="text-sm text-slate-400">Recupere reflexos não pagos dos últimos 5 anos.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                    <p className="text-sm text-slate-400">Garanta a incidência correta para os próximos meses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BRReflexos;
