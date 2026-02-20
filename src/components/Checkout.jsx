import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Wallet, FileText, Lock } from 'lucide-react';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('pix');

    return (
        <div className="min-h-screen bg-dark py-12 md:py-20 px-4 font-inter text-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                    <div className="bg-neutral-800 py-10 text-center border-b border-white/5">
                        <h2 className="text-3xl font-black mb-2 tracking-tight">Finalizar Inscrição</h2>
                        <p className="text-neutral-400 font-light text-sm italic">Ambiente seguro processado pelo Mercado Pago</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Form Section */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                            <h3 className="text-xl font-black mb-10 border-b border-white/10 pb-4">Informações de Acesso</h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Nome Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome completo"
                                        className="w-full bg-black border border-neutral-700 py-3 px-4 rounded-xl text-white outline-none focus:border-accent font-light"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">E-mail</label>
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="w-full bg-black border border-neutral-700 py-3 px-4 rounded-xl text-white outline-none focus:border-accent font-light"
                                    />
                                    <p className="text-[10px] text-neutral-500 italic mt-2">Você receberá o seu acesso neste e-mail.</p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Forma de Pagamento</h3>
                                <div className="grid grid-cols-3 gap-3 mb-8">
                                    {[
                                        { id: 'pix', icon: Wallet, label: 'PIX' },
                                        { id: 'card', icon: CreditCard, label: 'Cartão' },
                                        { id: 'boleto', icon: FileText, label: 'Boleto' }
                                    ].map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${paymentMethod === method.id
                                                ? 'bg-primary/10 border-primary text-white scale-105'
                                                : 'bg-black border-neutral-700 text-neutral-500 hover:border-neutral-500'
                                                }`}
                                        >
                                            <method.icon size={20} />
                                            <span className="text-[10px] font-black tracking-widest uppercase">{method.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <button className="w-full bg-primary hover:bg-red-600 text-white py-5 rounded-full text-lg font-black transition-all duration-300 shadow-lg shadow-red-900/20 active:scale-95 flex items-center justify-center gap-3">
                                    <Lock size={18} />
                                    CONFIRMAR PAGAMENTO
                                </button>
                                <div className="mt-4 flex items-center justify-center gap-2 text-neutral-500 text-[10px] font-bold tracking-widest uppercase">
                                    <span>Seguro com</span>
                                    <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" className="h-2 opacity-50 contrast-0 grayscale invert" alt="Mercado Pago" />
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="p-8 md:p-12 bg-neutral-900/50">
                            <h3 className="text-xl font-black mb-10 border-b border-white/10 pb-4">Resumo da Ordem</h3>

                            <div className="space-y-6">
                                <div className="flex justify-between text-neutral-400 font-light text-base italic border-b border-white/5 pb-4">
                                    <span>Material Digital de Transformação</span>
                                    <span className="text-white font-medium">R$ 79,00</span>
                                </div>
                                <div className="flex justify-between text-accent font-light text-base italic border-b border-white/5 pb-4">
                                    <span>Desconto Especial (50%)</span>
                                    <span className="font-medium">- R$ 39,10</span>
                                </div>
                                <div className="flex justify-between items-baseline pt-4">
                                    <span className="text-white font-black text-xl uppercase tracking-tighter">Total</span>
                                    <span className="text-accent font-black text-5xl tracking-tighter">R$ 39,90</span>
                                </div>
                            </div>

                            <div className="mt-16 space-y-4">
                                <div className="flex items-center gap-4 text-emerald-500/80 bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10">
                                    <ShieldCheck size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest leading-none">Compra Protegida</span>
                                </div>
                                <p className="text-[11px] text-neutral-500 italic leading-relaxed px-2">
                                    Você tem 7 dias de garantia incondicional. Se não gostar, basta um e-mail para receber 100% do seu dinheiro de volta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
