import React from 'react';

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
        <div className="bg-dark text-white font-inter">
            {/* 1. Solution Section */}
            <section className="py-16 md:py-24 px-4 border-t border-white/5">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tight leading-tight">
                        O Ponto de Ruptura
                    </h2>
                    <p className="text-lg md:text-xl text-muted font-light mb-12">
                        Um processo breve, direto e profundo, focado em:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "organizar pensamentos",
                            "reduzir ansiedade",
                            "aliviar o peso emocional",
                            "retomar controle",
                            "clarear decisões"
                        ].map((point, i) => (
                            <div key={i} className="bg-card border border-white/5 px-5 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:border-accent transition-all duration-300 hover:-translate-y-1">
                                <span className="text-accent font-black mr-2">✓</span>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. How it works Section */}
            <section className="py-16 md:py-24 px-4 bg-dark">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-black mb-12 text-center tracking-tight">
                        Como funciona
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((s, i) => (
                            <div key={i} className="group bg-card border border-white/5 p-8 md:p-10 rounded-[24px] relative overflow-hidden transition-all duration-500 hover:bg-neutral-900">
                                <span className="absolute -top-3 -right-1 text-5xl font-black text-neutral-800/10 group-hover:text-neutral-700/20 transition-colors duration-500">
                                    {i + 1}
                                </span>
                                <h3 className="text-lg md:text-xl font-black text-accent mb-4 relative z-10">
                                    {s.title}
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed relative z-10 font-light">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Target Audience Section */}
            <section className="py-16 md:py-24 px-4 bg-dark">
                <div className="container mx-auto max-w-3xl">
                    <div className="bg-card border border-white/5 p-10 md:p-14 rounded-[30px] text-center shadow-inner">
                        <h2 className="text-2xl md:text-3xl font-black mb-10 tracking-tight text-white">Para quem é</h2>
                        <div className="flex flex-col items-center gap-6 mb-12">
                            {[
                                "Pessoas esgotadas que não sabem por onde começar",
                                "Pessoas confusas que sentem que a mente está um caos",
                                "Pessoas que sentem que estão se abandonando aos poucos",
                                "Pessoas que querem voltar a viver com sentido e presença"
                            ].map((text, i) => (
                                <p key={i} className="text-base md:text-lg text-neutral-300 flex items-center gap-3 italic">
                                    <span className="text-accent font-bold">✔</span> {text}
                                </p>
                            ))}
                        </div>
                        <div className="pt-10 border-t border-white/10 text-sm md:text-base text-muted">
                            <p className="mb-1"><strong className="text-white font-black text-xl block mb-3 uppercase tracking-tighter">Não é para quem quer frases bonitas.</strong></p>
                            <p className="font-light">É para quem quer mudança real.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
