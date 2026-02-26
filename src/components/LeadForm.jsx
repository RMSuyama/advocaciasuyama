import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3001/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                console.error('Erro ao enviar lead');
                alert('Erro ao enviar. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            alert('Erro de conexão com o servidor.');
        }
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
        <section id="contato" className="py-8 px-4 bg-dark">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl mx-auto bg-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="p-8 md:p-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                            Receba <span className="text-accent italic">Informações Jurídicas</span>
                        </h2>
                        <p className="text-muted text-xs mb-8 leading-relaxed max-w-sm mx-auto">
                            Mantenha-se atualizado sobre temas relevantes do direito dos servidores públicos e questões tributárias.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input name="nome" type="text" className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white text-xs" placeholder="Nome (Opcional)" />
                            </div>

                            <div>
                                <input required name="email" type="email" className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white text-xs" placeholder="Email" />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 bg-white text-navy font-bold py-3 rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl uppercase text-xs tracking-wider"
                            >
                                INSCREVER-SE
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-[9px] text-muted/60 mt-4 leading-relaxed italic px-4">
                                Ao se inscrever, você receberá conteúdos informativos relacionados à área de atuação do escritório.
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadForm;
