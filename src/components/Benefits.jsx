import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Ban, TrendingUp } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <RefreshCw className="w-10 h-10 text-primary" />,
            title: "Restituição dos Valores",
            desc: "Você pode ter de volta os valores de Imposto de Renda descontados indevidamente nos últimos 5 anos."
        },
        {
            icon: <Ban className="w-10 h-10 text-primary" />,
            title: "Cessação dos Descontos",
            desc: "Garantir que o Estado pare de descontar o IR do seu Auxílio-Transporte (QM) definitivamente no futuro."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-primary" />,
            title: "Atualização e Juros",
            desc: "Os valores serão corrigidos monetariamente (IPCA-E e SELIC) e acrescidos de juros legais. É importante notar que os valores exatos e as condições de atualização e juros serão definidos judicialmente na fase de cumprimento de sentença."
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto py-12 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10"></div>

            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">O que você pode <span className="text-accent italic">reaver</span>?</h2>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center gap-6 bg-card/50 p-6 rounded-3xl border border-white/5 backdrop-blur-sm"
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-2xl flex items-center justify-center border border-accent/20 shadow-lg shadow-accent/5">
                                {benefit.icon}
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent">
                        <div className="px-6 py-2 bg-dark rounded-full text-sm font-medium border border-primary/20">
                            Justiça Estadual é competente conforme Súmula 447 STJ
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
