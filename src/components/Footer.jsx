import React from 'react';
import LegalLogo from './LegalLogo';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 bg-dark px-4 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    <div>
                        <LegalLogo className="h-10 w-auto mb-6" />
                        <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                            Atuação em Direito Tributário e Administrativo para Servidores Públicos. Especialistas na rede estadual de ensino de São Paulo.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-accent">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-400 text-xs">
                                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>Rua Bolívia, nº 61, Vila Ribeirópolis, CEP 11900-000, Registro/SP</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-xs">
                                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>rafaelmoreirasuyama@oabsp.org.br</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-xs">
                                <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>Inscrição OAB/SP 484.261</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-navy/30 p-4 rounded-2xl border border-white/5">
                        <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-3 text-accent/80">Aviso Legal</h4>
                        <p className="text-[9px] text-slate-500 leading-relaxed italic">
                            O conteúdo presente neste site tem caráter meramente informativo e educacional, não constituindo aconselhamento jurídico individualizado ou promessa de resultados. Para análise de casos específicos, é imprescindível a consulta a um advogado.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-[10px]">
                        © 2026 Escritório de Advocacia Rafael Suyama. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-slate-600 hover:text-accent text-[10px] transition-colors">Política de Privacidade</a>
                        <a href="#" className="text-slate-600 hover:text-accent text-[10px] transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
