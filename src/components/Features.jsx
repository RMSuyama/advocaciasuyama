import React from 'react';
import { Target, Search, RefreshCw, BarChart, ShieldCheck } from 'lucide-react';
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
        <section className="features">
            <div className="container">
                <div className="retorno-explanation">
                    <h2 className="section-title">O que é o RETORNO?</h2>
                    <p className="retorno-desc">Um processo breve, direto e profundo, focado em:</p>
                    <div className="points-grid">
                        <div className="point">✓ organizar pensamentos</div>
                        <div className="point">✓ reduzir ansiedade</div>
                        <div className="point">✓ aliviar o peso emocional</div>
                        <div className="point">✓ retomar controle</div>
                        <div className="point">✓ clarear decisões</div>
                    </div>
                </div>

                <div className="how-it-works">
                    <h2 className="section-title">Como funciona</h2>
                    <div className="steps-grid">
                        {steps.map((s, i) => (
                            <div key={i} className="step-card">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="for-who">
                    <h2>Para quem é</h2>
                    <div className="who-list">
                        <p>✔ Pessoas esgotadas</p>
                        <p>✔ Pessoas confusas</p>
                        <p>✔ Pessoas que sentem que estão se abandonando</p>
                        <p>✔ Pessoas que querem voltar a viver com sentido</p>
                    </div>
                    <p className="not-for">Não é para quem quer frases bonitas. <b>É para quem quer mudança real.</b></p>
                </div>
            </div>
        </section>
    );
};

export default Features;
