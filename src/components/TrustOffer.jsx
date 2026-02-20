import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';

const TrustOffer = () => {
    return (
        <section className="py-24 md:py-32 bg-black px-4 font-inter">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-[50px] p-12 md:p-24 text-center mb-20 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                    <div className="bg-primary text-white inline-block px-10 py-3 rounded-full text-xs font-black tracking-widest mb-10">
                        OFERTA ÚNICA
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight tracking-tight">
                        Recupere o controle da sua vida hoje.
                    </h2>

                    <div className="mb-16">
                        <span className="line-through text-neutral-700 text-xl md:text-2xl block mb-2 font-light">De R$ 79,00</span>
                        <div className="flex justify-center items-baseline gap-2 text-accent">
                            <span className="text-2xl md:text-3xl font-light">R$</span>
                            <span className="text-6xl md:text-8xl font-black leading-none tracking-tighter">39,90</span>
                        </div>
                        <p className="text-neutral-500 text-lg md:text-xl mt-6 font-light italic">Pagamento único. Acesso imediato ao material.</p>
                    </div>

                    <Link
                        to="/checkout"
                        className="bg-white text-black px-10 md:px-16 py-5 md:py-7 rounded-full text-xl md:text-2xl font-black uppercase tracking-wider hover:bg-accent transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.15)] animate-pulse"
                    >
                        QUERO PARAR DE ME ABANDONAR
                    </Link>

                    <p className="mt-16 text-lg md:text-xl text-neutral-500 max-w-xl mx-auto italic font-light leading-relaxed">
                        Se você já chegou até aqui, algo em você sabe que precisa mudar. Não se deixe para depois novamente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { icon: ShieldCheck, title: "Garantia Total", desc: "7 dias para testar sem riscos." },
                        { icon: Calendar, title: "Acesso Vitalício", desc: "O material será seu para sempre." },
                        { icon: Lock, title: "Checkout Seguro", desc: "Processado por Mercado Pago." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 text-left">
                            <item.icon className="text-accent shrink-0" size={32} />
                            <div>
                                <h4 className="text-lg font-black mb-1"> {item.title} </h4>
                                <p className="text-neutral-500 text-sm leading-relaxed"> {item.desc} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustOffer;
