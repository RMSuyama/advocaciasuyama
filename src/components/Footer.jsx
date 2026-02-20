import React from 'react';
import LegalLogo from './LegalLogo';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 bg-dark px-4 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    <div>
                        <LegalLogo className="h-12 w-auto mb-8" />
                        <p className="text-muted leading-relaxed max-w-xs">
                            Especialistas em direito tributário para servidores públicos em Registro e Vale do Ribeira.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest text-accent/80">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <span>Rua Bolívia, nº 61, Vila Ribeirópolis, CEP 11900-000, Registro/SP</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>rafaelmoreirasuyama@oabsp.org.br</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>Inscrição OAB/SP [Número]</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-end">
                        <p className="text-muted text-sm italic">
                            "Excelência jurídica com foco na transparência e no resultado para o servidor."
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-600 text-xs">
                        © 2026 Escritório de Advocacia Rafael Suyama. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-neutral-600 hover:text-accent text-xs transition-colors">Política de Privacidade</a>
                        <a href="#" className="text-neutral-600 hover:text-accent text-xs transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
