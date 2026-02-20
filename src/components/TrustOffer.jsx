import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';

const TrustOffer = () => {
    return (
        <section className="py-12 md:py-20 bg-black px-4 font-inter">
            <div className="container mx-auto max-w-3xl">
                <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-[32px] p-8 md:p-12 text-center mb-12 shadow-[0_40px_80px_rgba(0,0,0,0.6)] mt-8">
                    <div className="bg-primary text-white inline-block px-6 py-2 rounded-full text-[9px] font-black tracking-widest mb-6">
                        OFERTA ÚNICA
                    </div>
                    <h2 className="text-xl md:text-3xl font-black mb-8 leading-tight tracking-tight">
                        Recupere o controle da sua vida hoje.
                    </h2>

                    <div className="mb-10">
                        <span className="line-through text-neutral-800 text-base md:text-lg block mb-1 font-light opacity-50">De R$ 79,00</span>
                        <div className="flex justify-center items-baseline gap-1 text-accent">
                            <span className="text-lg md:text-xl font-light">R$</span>
                            <span className="text-4xl md:text-6xl font-black leading-none tracking-tighter">39,90</span>
                        </div>
                        <p className="text-neutral-500 text-sm md:text-base mt-3 font-light italic">Pagamento único. Acesso imediato.</p>
                    </div>

                    <Link
                        to="/checkout"
                        className="bg-white text-black px-8 md:px-10 py-3.5 md:py-4 rounded-full text-sm md:text-base font-black uppercase tracking-wider hover:bg-accent transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-pulse"
                    >
                        QUERO PARAR DE ME ABANDONAR
                    </Link>

                    <p className="mt-8 text-sm md:text-base text-neutral-500 max-w-md mx-auto italic font-light leading-relaxed">
                        Se você já chegou até aqui, algo em você sabe que precisa mudar. Não se deixe para depois novamente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
        </section>
    );
};

export default TrustOffer;
