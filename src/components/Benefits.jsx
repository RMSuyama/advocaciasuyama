import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Ban, TrendingUp, ShieldCheck } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <RefreshCw className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
            title: "Restituição de IR (QM)",
            desc: "Recupere os valores de Imposto de Renda descontados do seu Auxílio-Transporte (QM) nos últimos 5 anos."
        },
        {
            icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
            title: "Reflexos da BR",
            desc: "Inclusão da Bonificação por Resultado na base de cálculo do 13º, férias e outros direitos remuneratórios."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
            title: "Tributação sobre RRA",
            desc: "Aplicação do Regime de Competência para reduzir a carga de IR sobre pagamentos acumulados da BR."
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10"></div>

            <div className="container mx-auto">
                <div className="text-center mb-4 md:mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Resumo das <span className="text-accent italic">Teses Aplicáveis</span></h2>
                </div>

                <div className="space-y-4 max-w-2xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 bg-card/50 p-3 md:p-4 rounded-3xl border border-white/5 backdrop-blur-sm"
                        >
                            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-navy rounded-2xl flex items-center justify-center border border-accent/20">
                                {benefit.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="text-base md:text-lg font-bold text-white mb-0.5">{benefit.title}</h3>
                                <p className="text-slate-400 text-[11px] md:text-xs leading-tight">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent">
                        <div className="px-6 py-1.5 bg-dark rounded-full text-xs font-medium border border-primary/20">
                            Justiça Estadual é competente conforme Súmula 447 STJ
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
