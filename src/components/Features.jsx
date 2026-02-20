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
            <section className="py-20 md:py-32 px-4 border-t border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight leading-tight">
                        O Ponto de Ruptura
                    </h2>
                    <p className="text-xl md:text-2xl text-muted font-light mb-16">
                        Um processo breve, direto e profundo, focado em:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "organizar pensamentos",
                            "reduzir ansiedade",
                            "aliviar o peso emocional",
                            "retomar controle",
                            "clarear decisões"
                        ].map((point, i) => (
                            <div key={i} className="bg-card border border-white/5 px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium hover:border-accent transition-all duration-300 hover:-translate-y-1">
                                <span className="text-accent font-black mr-3">✓</span>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. How it works Section */}
            <section className="py-20 md:py-32 px-4 bg-dark">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-16 text-center tracking-tight">
                        Como funciona
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((s, i) => (
                            <div key={i} className="group bg-card border border-white/5 p-10 md:p-12 rounded-[32px] relative overflow-hidden transition-all duration-500 hover:bg-neutral-900">
                                <span className="absolute -top-4 -right-2 text-7xl font-black text-neutral-800/10 group-hover:text-neutral-700/20 transition-colors duration-500">
                                    {i + 1}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black text-accent mb-6 relative z-10">
                                    {s.title}
                                </h3>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed relative z-10 font-light">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Target Audience Section */}
            <section className="py-20 md:py-32 px-4 bg-dark">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-card border border-white/5 p-12 md:p-20 rounded-[40px] text-center shadow-inner">
                        <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tight">Para quem é</h2>
                        <div className="flex flex-col items-center gap-8 mb-16">
                            {[
                                "Pessoas esgotadas que não sabem por onde começar",
                                "Pessoas confusas que sentem que a mente está um caos",
                                "Pessoas que sentem que estão se abandonando aos poucos",
                                "Pessoas que querem voltar a viver com sentido e presença"
                            ].map((text, i) => (
                                <p key={i} className="text-lg md:text-xl text-neutral-300 flex items-center gap-4 italic">
                                    <span className="text-accent font-bold">✔</span> {text}
                                </p>
                            ))}
                        </div>
                        <div className="pt-12 border-t border-white/10 text-lg md:text-xl text-muted">
                            <p className="mb-2"><strong className="text-white font-black text-2xl block mb-4 uppercase tracking-tighter">Não é para quem quer frases bonitas.</strong></p>
                            <p className="font-light">É para quem quer mudança real.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
