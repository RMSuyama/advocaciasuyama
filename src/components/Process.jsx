import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, FileCheck } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "1. Análise de Documentos",
            desc: "Você nos enviará seus holerites e declarações de IR dos últimos 5 anos para analisarmos os descontos indevidos."
        },
        {
            icon: <Calculator className="w-8 h-8" />,
            title: "2. Cálculo dos Valores",
            desc: "Realizaremos o cálculo preciso de cada centavo que deve ser restituído a você, com as devidas correções."
        },
        {
            icon: <FileCheck className="w-8 h-8" />,
            title: "3. Ação Judicial",
            desc: "Entraremos com a ação contra a Fazenda Pública do Estado de São Paulo para garantir seu direito."
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto py-12 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Como funciona o <span className="text-accent italic">processo</span>?</h2>
                    <p className="text-xs md:text-sm text-slate-400">Um caminho transparente e seguro para reaver o seu dinheiro.</p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2"></div>

                    <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-dark border-4 border-navy rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="text-accent relative z-10">{step.icon}</div>
                                </div>
                                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
