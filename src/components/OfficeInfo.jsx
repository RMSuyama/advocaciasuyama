import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Users } from 'lucide-react';

const OfficeInfo = () => {
    return (
        <section id="office" className="w-full max-w-7xl mx-auto px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">
                            Atuação Especializada em <span className="text-accent italic">Registro/SP</span> e Região
                        </h2>
                        <p className="text-muted text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                            O Escritório de Advocacia Rafael Suyama possui sua base em Registro, no Vale do Ribeira, atendendo com proximidade e dedicação os servidores públicos da região e de todo o estado de São Paulo.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-dark rounded-xl flex items-center justify-center border border-accent/20">
                                    <MapPin className="text-accent w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">Localização Estratégica</h4>
                                    <p className="text-muted text-[10px] md:text-xs">Sediado em Registro, facilitando o atendimento presencial e digital.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-dark rounded-xl flex items-center justify-center border border-accent/20">
                                    <Award className="text-accent w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">Expertise Regional</h4>
                                    <p className="text-muted text-[10px] md:text-xs">Conhecimento profundo das demandas dos professores da rede estadual.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
                            >
                                IR PARA PÁGINA PRINCIPAL
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-card border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center">
                            <Users className="w-12 h-12 text-accent/40 mb-4" />
                            <h3 className="text-2xl md:text-3xl font-black mb-2">RAFAEL SUYAMA</h3>
                            <p className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Advocacia de Confiança</p>
                            <div className="w-16 h-1 bg-accent mx-auto"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-accent/20 rounded-tr-2xl"></div>
                        <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-accent/20 rounded-bl-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OfficeInfo;
