import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 border-b border-white/5 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-primary transition-colors focus:outline-none"
            >
                <span className="text-lg font-semibold pr-8">{question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-muted leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Qual o custo para entrar com a ação?",
            answer: "Nossos honorários são definidos conforme as tabelas da OAB e podem ser pactuados de forma a serem pagos ao final do processo, apenas em caso de sucesso. É possível, ainda, verificar a elegibilidade para a gratuidade de justiça. Entre em contato para uma análise personalizada sem compromisso."
        },
        {
            question: "Quanto tempo leva o processo?",
            answer: "Processos contra a Fazenda Pública variam, mas costumam levar entre 12 a 24 meses até o trânsito em julgado. A boa notícia é que uma liminar pode cessar os descontos mensais rapidamente."
        },
        {
            question: "Preciso ter todos os documentos dos últimos 5 anos?",
            answer: "É o ideal para recuperar o valor máximo. Caso falte algum holerite, podemos orientar como obter a via oficial junto ao portal do servidor ou RH da Secretaria de Educação."
        },
        {
            question: "Qual a solidez da tese jurídica?",
            answer: "A tese de não incidência de Imposto de Renda sobre o auxílio-transporte possui uma jurisprudência consolidada em tribunais superiores, como o STJ. Cada caso, no entanto, é único e será analisado individualmente por nossa equipe jurídica."
        }
    ];

    return (
        <section className="w-full max-w-4xl mx-auto py-12 px-4">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
                        <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Perguntas <span className="text-accent italic">Frequentes</span></h2>
                    <p className="text-sm md:text-lg text-slate-400">Tire suas dúvidas sobre o processo e seus direitos.</p>
                </div>

                <div className="bg-card border border-white/10 rounded-3xl p-8 shadow-2xl">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
