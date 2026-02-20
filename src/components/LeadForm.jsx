import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulação de envio
        setTimeout(() => setSubmitted(true), 800);
    };

    if (submitted) {
        return (
            <section id="contato" className="w-full max-w-xl mx-auto py-12 px-4">
                <div className="container mx-auto max-w-xl text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-card border border-primary/30 p-12 rounded-3xl"
                    >
                        <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Solicitação Recebida!</h2>
                        <p className="text-muted text-lg mb-8">
                            Agradecemos o contato. Nossa equipe jurídica analisará seus dados e entrará em contato via WhatsApp em breve.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-accent font-semibold hover:underline"
                        >
                            Enviar outra solicitação
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contato" className="py-24 px-4 bg-dark">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 bg-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-8 md:p-12 bg-navy flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-white leading-tight">
                            Conheça seus <span className="text-accent italic">direitos!</span>
                        </h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            Clique abaixo e preencha o formulário para que nossa equipe analise seu caso e entenda como podemos ajudá-lo a buscar a restituição do Imposto de Renda do seu Auxílio-Transporte (QM).
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                                <span className="text-sm font-medium">Análise Gratuita</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                                <span className="text-sm font-medium">Equipe Especializada</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                                <span className="text-sm font-medium">Atendimento Digital</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">Nome Completo</label>
                                <input required type="text" className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Seu nome" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">E-mail</label>
                                    <input required type="email" className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="email@exemplo.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">WhatsApp</label>
                                    <input required type="tel" className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="(00) 00000-0000" />
                                </div>
                            </div>

                            <div className="pt-4 space-y-4">
                                <p className="text-xs text-muted/60 mb-2 uppercase font-bold tracking-tighter">Perguntas Obrigatórias:</p>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input required type="checkbox" className="w-5 h-5 rounded border-white/10 bg-dark text-accent focus:ring-accent/20 cursor-pointer" />
                                    <span className="text-sm text-muted group-hover:text-white transition-colors">Sou Professor(a) da Rede Estadual de SP.</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input required type="checkbox" className="w-5 h-5 rounded border-white/10 bg-dark text-accent focus:ring-accent/20 cursor-pointer" />
                                    <span className="text-sm text-muted group-hover:text-white transition-colors">Recebo Auxílio-Transporte (QM).</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input required type="checkbox" className="w-5 h-5 rounded border-white/10 bg-dark text-accent focus:ring-accent/20 cursor-pointer" />
                                    <span className="text-sm text-muted group-hover:text-white transition-colors">Tive descontos de IR no Auxílio nos últimos 5 anos.</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 bg-white text-navy font-black py-5 rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-2xl shadow-white/5"
                            >
                                QUERO ANALISAR MEU CASO
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <p className="text-[10px] text-center text-muted/40 mt-4 leading-relaxed">
                                Ao enviar, você concorda com o processamento de seus dados para fins de análise jurídica inicial.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;
