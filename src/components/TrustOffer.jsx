import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustOffer = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-16 bg-black px-4 font-inter snap-start">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="container mx-auto max-w-3xl"
            >
                <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-[32px] p-6 md:p-10 text-center mb-8 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group hover:border-accent/20 transition-all duration-700">
                    <div className="bg-primary text-white inline-block px-6 py-2 rounded-full text-[9px] font-black tracking-widest mb-6">
                        OFERTA ÚNICA
                    </div>
                    <h2 className="text-xl md:text-2xl font-black mb-6 leading-tight tracking-tight">
                        Recupere o controle da sua vida hoje.
                    </h2>

                    <div className="mb-8">
                        <span className="line-through text-neutral-800 text-sm md:text-base block mb-1 font-light opacity-50">De R$ 79,00</span>
                        <div className="flex justify-center items-baseline gap-1 text-accent">
                            <span className="text-base md:text-lg font-light">R$</span>
                            <span className="text-3xl md:text-5xl font-black leading-none tracking-tighter">39,90</span>
                        </div>
                        <p className="text-neutral-500 text-[10px] md:text-xs mt-2 font-light italic opacity-80">Pagamento único. Acesso imediato.</p>
                    </div>

                    <Link
                        to="/checkout"
                        className="group relative inline-block bg-white text-black px-6 md:px-8 py-3 md:py-3.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    >
                        <span className="relative z-10">QUERO PARAR DE ME ABANDONAR</span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-lg group-hover:opacity-40 transition-opacity animate-pulse"></div>
                    </Link>

                    <p className="mt-8 text-sm md:text-base text-neutral-500 max-w-md mx-auto italic font-light leading-relaxed">
                        Se você já chegou até aqui, algo em você sabe que precisa mudar. Não se deixe para depois novamente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {[
                        { icon: ShieldCheck, title: "Garantia Total", desc: "7 dias para testar sem riscos." },
                        { icon: Calendar, title: "Acesso Vitalício", desc: "O material será seu para sempre." },
                        { icon: Lock, title: "Checkout Seguro", desc: "Processado por Mercado Pago." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-left">
                            <item.icon className="text-accent shrink-0" size={20} />
                            <div>
                                <h4 className="text-sm font-black mb-0.5"> {item.title} </h4>
                                <p className="text-neutral-600 text-[10px] leading-relaxed"> {item.desc} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TrustOffer;
