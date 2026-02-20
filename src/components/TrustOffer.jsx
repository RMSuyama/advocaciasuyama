import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';

const TrustOffer = () => {
    return (
        <section className="py-16 md:py-24 bg-black px-4 font-inter">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-[40px] p-10 md:p-16 text-center mb-16 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                    <div className="bg-primary text-white inline-block px-8 py-2.5 rounded-full text-[10px] font-black tracking-widest mb-8">
                        OFERTA ÚNICA
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black mb-10 leading-tight tracking-tight">
                        Recupere o controle da sua vida hoje.
                    </h2>

                    <div className="mb-12">
                        <span className="line-through text-neutral-700 text-lg md:text-xl block mb-1 font-light">De R$ 79,00</span>
                        <div className="flex justify-center items-baseline gap-1.5 text-accent">
                            <span className="text-xl md:text-2xl font-light">R$</span>
                            <span className="text-5xl md:text-7xl font-black leading-none tracking-tighter">39,90</span>
                        </div>
                        <p className="text-neutral-500 text-base md:text-lg mt-4 font-light italic">Pagamento único. Acesso imediato ao material.</p>
                    </div>

                    <Link
                        to="/checkout"
                        className="bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-black uppercase tracking-wider hover:bg-accent transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] animate-pulse"
                    >
                        QUERO PARAR DE ME ABANDONAR
                    </Link>

                    <p className="mt-12 text-base md:text-lg text-neutral-500 max-w-md mx-auto italic font-light leading-relaxed">
                        Se você já chegou até aqui, algo em você sabe que precisa mudar. Não se deixe para depois novamente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Garantia Total", desc: "7 dias para testar sem riscos." },
                        { icon: Calendar, title: "Acesso Vitalício", desc: "O material será seu para sempre." },
                        { icon: Lock, title: "Checkout Seguro", desc: "Processado por Mercado Pago." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-left">
                            <item.icon className="text-accent shrink-0" size={24} />
                            <div>
                                <h4 className="text-base font-black mb-0.5"> {item.title} </h4>
                                <p className="text-neutral-500 text-xs leading-relaxed"> {item.desc} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustOffer;
