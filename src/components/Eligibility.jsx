import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Calendar } from 'lucide-react';

const Eligibility = () => {
    const criteria = [
        {
            icon: <UserCheck className="w-8 h-8 text-primary" />,
            title: "Vínculo Estadual",
            description: "Ser professor(a) da rede estadual de ensino de São Paulo."
        },
        {
            icon: <MapPin className="w-8 h-8 text-primary" />,
            title: "Receber o Auxílio",
            description: "Receber ou ter recebido o Auxílio-Transporte (QM) em seus holerites."
        },
        {
            icon: <Calendar className="w-8 h-8 text-primary" />,
            title: "Prazo Retroativo",
            description: "Ter tido descontos de IR sobre o auxílio nos últimos 5 anos."
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto py-12 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-3">Quem pode se <span className="text-accent italic">beneficiar</span> desta ação?</h2>
                    <p className="text-sm md:text-lg text-slate-400 max-w-xl mx-auto">Verifique se você se enquadra nos requisitos para iniciar o processo.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card border border-white/5 p-6 rounded-2xl hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="mb-4 inline-block p-3 bg-dark rounded-xl border border-white/5">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Eligibility;
