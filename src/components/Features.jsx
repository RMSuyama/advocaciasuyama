import React from 'react';
import './Features.css';

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
        <div className="features-page-sections">
            {/* 1. Solution Section */}
            <section className="retorno-solucao-section">
                <div className="container">
                    <h2 className="section-title">O que é o RETORNO?</h2>
                    <p className="retorno-desc">Um processo breve, direto e profundo, focado em:</p>
                    <div className="transformations-grid">
                        <div className="transform-point"><span>✓</span> organizar pensamentos</div>
                        <div className="transform-point"><span>✓</span> reduzir ansiedade</div>
                        <div className="transform-point"><span>✓</span> aliviar o peso emocional</div>
                        <div className="transform-point"><span>✓</span> retomar controle</div>
                        <div className="transform-point"><span>✓</span> clarear decisões</div>
                    </div>
                </div>
            </section>

            {/* 2. How it works Section */}
            <section className="how-it-works-section">
                <div className="container">
                    <h2 className="section-title">Como funciona</h2>
                    <div className="steps-container">
                        {steps.map((s, i) => (
                            <div key={i} className="step-card-modern">
                                <div className="step-num">{i + 1}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Target Audience Section */}
            <section className="target-audience-section">
                <div className="container">
                    <div className="target-audience-card">
                        <h2 className="section-title">Para quem é</h2>
                        <div className="audience-list">
                            <p><span>✔</span> Pessoas esgotadas que não sabem por onde começar</p>
                            <p><span>✔</span> Pessoas confusas que sentem que a mente está um caos</p>
                            <p><span>✔</span> Pessoas que sentem que estão se abandonando aos poucos</p>
                            <p><span>✔</span> Pessoas que querem voltar a viver com sentido e presença</p>
                        </div>
                        <div className="not-for-box">
                            <p><strong>Não é para quem quer frases bonitas.</strong></p>
                            <p>É para quem quer mudança real.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
