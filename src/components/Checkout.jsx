import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const Checkout = () => {
    const [paid, setPaid] = useState(false);

    const downloadPDF = () => {
        const element = document.createElement("a");
        const file = new Blob(["teste"], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "conteudo.pdf";
        document.body.appendChild(element);
        element.click();
    };

    useEffect(() => {
        // Garantir que a página comece no topo
        window.scrollTo(0, 0);

        const initMercadoPago = async () => {
            // Verificar se o script já carregou (pode demorar um pouco)
            if (!window.MercadoPago) {
                let attempts = 0;
                while (!window.MercadoPago && attempts < 10) {
                    await new Promise(r => setTimeout(r, 500));
                    attempts++;
                }
            }

            if (window.MercadoPago) {
                const mp = new window.MercadoPago('APP_USR-b31bbd5a-27d4-48ce-a1f3-5586f806cbe8', {
                    locale: 'pt-BR'
                });
                const bricksBuilder = mp.bricks();

                const settings = {
                    initialization: {
                        amount: 39.90, // Valor total
                    },
                    customization: {
                        paymentMethods: {
                            ticket: "all",
                            bankTransfer: "all",
                            creditCard: "all",
                            debitCard: "all",
                            mercadoPago: "all",
                        },
                    },
                    callbacks: {
                        onReady: () => {
                            // brick pronto
                        },
                        onSubmit: ({ selectedPaymentMethod, formData }) => {
                            // Simulação de sucesso para teste local
                            return new Promise((resolve, reject) => {
                                console.log("Simulando pagamento...", formData);
                                setTimeout(() => {
                                    setPaid(true);
                                    downloadPDF();
                                    resolve();
                                }, 2000);
                            });
                        },
                        onError: (error) => {
                            console.error(error);
                        },
                    },
                };
                window.paymentBrickController = await bricksBuilder.create(
                    'payment',
                    'paymentBrick_container',
                    settings
                );
            }
        };

        initMercadoPago();
    }, []);

    if (paid) {
        return (
            <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 text-center font-inter text-white">
                <div className="bg-neutral-900 p-12 rounded-[40px] border border-emerald-500/20 shadow-2xl max-w-lg">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/20">
                        <ShieldCheck size={40} className="text-emerald-500" />
                    </div>
                    <h2 className="text-3xl font-black mb-4 tracking-tight">Pagamento Confirmado!</h2>
                    <p className="text-neutral-400 font-light mb-10 italic">
                        O seu material já foi liberado. O download deve começar automaticamente.
                    </p>
                    <button
                        onClick={downloadPDF}
                        className="bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-neutral-200 transition-all"
                    >
                        BAIXAR NOVAMENTE
                    </button>
                    <p className="mt-8 text-[10px] text-neutral-600 uppercase tracking-widest font-bold">
                        Obrigado por confiar no processo.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark py-12 md:py-20 px-4 font-inter text-white overflow-y-auto">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                    <div className="bg-neutral-800 py-10 text-center border-b border-white/5">
                        <h2 className="text-3xl font-black mb-2 tracking-tight">Finalizar Inscrição</h2>
                        <p className="text-neutral-400 font-light text-sm italic">Ambiente seguro processado pelo Mercado Pago</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Summary Section */}
                        <div className="p-8 md:p-12 bg-neutral-900/50 border-b md:border-b-0 md:border-r border-white/5">
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

                        {/* Payment Section */}
                        <div className="p-8 md:p-12">
                            <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Pagamento Seguro</h3>

                            <div id="paymentBrick_container" className="bg-black/20 rounded-2xl p-4 min-h-[400px]">
                                <div className="flex flex-col items-center justify-center h-full text-neutral-600">
                                    <Lock size={32} className="mb-4 opacity-20" />
                                    <p className="text-xs font-bold uppercase tracking-widest">Carregando Checkout Seguro...</p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-neutral-500 text-[10px] font-bold tracking-widest uppercase italic">
                                <span>Processado por</span>
                                <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" className="h-2.5 opacity-40 contrast-0 grayscale invert" alt="Mercado Pago" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
