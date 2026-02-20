import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Passo 1 — Sessão inicial",
        desc: "Uma conversa profunda para entender onde você se perdeu."
    },
    {
        title: "Passo 2 — Reorganização mental",
        desc: "Técnicas práticas para clareza, foco e redução de ansiedade."
    },
    {
        title: "Passo 3 — Plano de retomada",
        desc: "Direção clara para sua vida, rotina e decisões."
    }
];

const Features = () => {
    return (
        <>
            {/* 1. Solution Section - VIEW 4 */}
            <section className="min-h-screen flex items-center justify-center py-10 px-4 border-t border-white/5 snap-start overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="container mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-xl md:text-3xl font-black mb-6 tracking-tight leading-tight">
                        O Ponto de Ruptura
                    </h2>
                    <p className="text-base md:text-lg text-muted font-light mb-10">
                        Um processo breve, direto e profundo, focado em:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            "organizar pensamentos",
                            "reduzir ansiedade",
                            "aliviar o peso emocional",
                            "retomar controle",
                            "clarear decisões"
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-card border border-white/5 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium hover:border-accent transition-all duration-300 hover:-translate-y-1 select-none"
                            >
                                <span className="text-accent font-black mr-2">✓</span>
                                {point}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 2. How it works Section - VIEW 5 */}
            <section className="min-h-screen flex items-center justify-center py-10 px-4 bg-dark snap-start">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-xl md:text-2xl font-black mb-10 text-center tracking-tight">
                        Como funciona
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.12, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group bg-card border border-white/5 p-6 md:p-8 rounded-[20px] relative overflow-hidden transition-all duration-500 hover:bg-neutral-900 hover:border-accent/30"
                            >
                                <span className="absolute -top-2 -right-1 text-4xl font-black text-neutral-800/10 group-hover:text-neutral-700/20 transition-colors duration-500">
                                    {i + 1}
                                </span>
                                <h3 className="text-base md:text-lg font-black text-accent mb-3 relative z-10 transition-colors duration-300">
                                    {s.title}
                                </h3>
                                <p className="text-neutral-400 text-[11px] md:text-xs leading-relaxed relative z-10 font-light group-hover:text-neutral-300 transition-colors duration-300">
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Target Audience Section - VIEW 6 */}
            <section className="min-h-screen flex items-center justify-center py-10 px-4 bg-dark snap-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="container mx-auto max-w-3xl"
                >
                    <div className="bg-card border border-white/5 p-8 md:p-10 rounded-[30px] text-center shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                        <h2 className="text-xl md:text-2xl font-black mb-8 tracking-tight text-white relative z-10">Para quem é</h2>
                        <div className="flex flex-col items-center gap-4 mb-10 relative z-10">
                            {[
                                "Pessoas esgotadas que não sabem por onde começar",
                                "Pessoas confusas que sentem que a mente está um caos",
                                "Pessoas que sentem que estão se abandonando aos poucos",
                                "Pessoas que querem voltar a viver com sentido e presença"
                            ].map((text, i) => (
                                <p key={i} className="text-sm md:text-base text-neutral-300 flex items-center gap-3 italic">
                                    <span className="text-accent font-bold">✔</span> {text}
                                </p>
                            ))}
                        </div>
                        <div className="pt-8 border-t border-white/10 text-[11px] md:text-xs text-muted relative z-10">
                            <p className="mb-1"><strong className="text-white font-black text-lg block mb-2 uppercase tracking-tighter leading-tight">Não é para quem quer frases bonitas.</strong></p>
                            <p className="font-light">É para quem quer mudança real.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Features;
