import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Users } from 'lucide-react';

const OfficeInfo = () => {
    return (
        <section id="office" className="w-full max-w-7xl mx-auto py-12 px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Atuação Especializada em <span className="text-accent italic">Registro/SP</span> e Região
                        </h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            O Escritório de Advocacia Rafael Suyama possui sua base em Registro, no Vale do Ribeira, atendendo com proximidade e dedicação os servidores públicos da região e de todo o estado de São Paulo.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center border border-accent/20">
                                    <MapPin className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Localização Estratégica</h4>
                                    <p className="text-muted text-sm">Sediado em Registro, facilitando o atendimento presencial e digital.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center border border-accent/20">
                                    <Award className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Expertise Regional</h4>
                                    <p className="text-muted text-sm">Conhecimento profundo das demandas dos professores da rede estadual.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                            >
                                IR PARA PÁGINA PRINCIPAL
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="aspect-square bg-card border border-white/5 rounded-3xl p-12 flex flex-col justify-center items-center text-center">
                            <Users className="w-16 h-16 text-accent/40 mb-6" />
                            <h3 className="text-4xl font-black mb-4">RAFAEL SUYAMA</h3>
                            <p className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-8">Advocacia de Confiança</p>
                            <div className="w-20 h-1 bg-accent mx-auto"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OfficeInfo;
