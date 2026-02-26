import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, FileCheck } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
            title: "1. Análise Documental",
            desc: "Avaliação de holerites e declarações de IR dos últimos 5 anos para identificar descontos indevidos."
        },
        {
            icon: <Calculator className="w-6 h-6 md:w-8 md:h-8" />,
            title: "2. Parecer e Cálculos",
            desc: "Elaboração de parecer técnico-jurídico sobre a viabilidade da demanda e estimativa dos valores."
        },
        {
            icon: <FileCheck className="w-6 h-6 md:w-8 md:h-8" />,
            title: "3. Encaminhamento Legal",
            desc: "Caso viável, propomos a medida judicial contra a Fazenda Pública para garantir seu direito."
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4">
            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Assessoria Jurídica: <span className="text-accent italic">Como Ajudamos</span></h2>
                    <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto">Análise individualizada e orientação técnica sobre as medidas cabíveis para cada servidor.</p>
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
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-dark border-4 border-navy rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="text-accent relative z-10">{step.icon}</div>
                                </div>
                                <h3 className="text-base md:text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-[10px] md:text-xs text-slate-400 leading-tight px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
