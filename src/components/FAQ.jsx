import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="mb-4 border-b border-white/5 last:border-0">
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between py-4 text-left transition-colors focus:outline-none ${isOpen ? 'text-accent' : 'hover:text-accent'}`}
            >
                <span className="text-base font-semibold pr-8">{question}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
                        <p className="pb-4 text-slate-400 text-xs md:text-sm leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Qual o procedimento para iniciar uma análise de caso?",
            answer: "O primeiro passo é agendar uma consulta para que possamos analisar a documentação pertinente e discutir os detalhes do seu caso individualmente."
        },
        {
            question: "Como são definidos os honorários advocatícios?",
            answer: "Os honorários são estabelecidos conforme a tabela da OAB e definidos em contrato após análise do caso. Informaremos sobre as modalidades e elegibilidade para gratuidade de justiça na consulta."
        },
        {
            question: "Qual a documentação necessária para a análise?",
            answer: "Geralmente, solicitamos holerites e declarações de Imposto de Renda dos últimos 5 anos. Detalhes adicionais podem ser pedidos conforme a especificidade do caso."
        },
        {
            question: "Qual a fundamentação jurídica dessas teses?",
            answer: "As teses fundamentam-se na Lei nº 7.713/88, LC nº 1.245/14 e em posicionamentos dos Tribunais Superiores (STJ Súmula 447, Temas 351 STJ e 368 STF), além de precedentes do TJSP."
        }
    ];

    return (
        <section id="faq" className="w-full max-w-4xl mx-auto px-4">
            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Perguntas <span className="text-accent italic">Frequentes</span></h2>
                    <p className="text-xs md:text-sm text-slate-400">Tire suas dúvidas sobre o processo e fundamentação jurídica.</p>
                </div>

                <div className="bg-card border border-white/10 rounded-3xl p-6 shadow-2xl">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            {...faq}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
