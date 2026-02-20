import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 md:py-20 bg-black px-4 font-inter text-white border-t border-white/5">
            <div className="container mx-auto max-w-3xl text-center">
                <div className="flex flex-col items-center mb-12">
                    <ShieldCheck size={40} className="text-primary mb-4" />
                    <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Garantia Incondicional</h3>
                    <p className="text-neutral-500 text-base font-light leading-relaxed max-w-xl">
                        Se em até 7 dias você sentir que este material não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.
                    </p>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-600 text-[10px] md:text-xs font-light italic">© 2025 PULAR FORA. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-2">
                        <span className="text-neutral-700 text-[8px] font-black uppercase tracking-widest">Pague com</span>
                        <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" className="h-1.5 opacity-30 contrast-0 grayscale invert" alt="Mercado Pago" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
