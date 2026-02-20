import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, ArrowRight } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="checkout-container"
                >
                    <div className="checkout-header">
                        <h2>Finalizar Inscrição</h2>
                        <p>Inicie seu processo de RETORNO agora.</p>
                    </div>

                    <div className="checkout-content">
                        <div className="checkout-form">
                            <h3>Seus Dados</h3>
                            <div className="input-group">
                                <label>Nome Completo</label>
                                <input type="text" placeholder="Como você quer ser chamado?" />
                            </div>
                            <div className="input-group">
                                <label>E-mail</label>
                                <input type="email" placeholder="seu@email.com" />
                            </div>

                            <h3 className="section-margin">Pagamento</h3>
                            <div className="payment-options">
                                <div className="payment-method active">
                                    <CreditCard size={24} />
                                    <span>Cartão de Crédito</span>
                                </div>
                                <div className="payment-method">
                                    <Wallet size={24} />
                                    <span>PIX (Acesso Imediato)</span>
                                </div>
                            </div>

                            <button className="confirm-btn">
                                CONFIRMAR PAGAMENTO <ArrowRight size={20} />
                            </button>
                            <p className="mp-badge">Processado por <strong>Mercado Pago</strong></p>
                        </div>

                        <div className="order-summary">
                            <h3>Resumo</h3>
                            <div className="summary-item">
                                <span>RETORNO - Programa Completo</span>
                                <span>R$ 39,90</span>
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>R$ 39,90</span>
                            </div>
                            <div className="trust-points">
                                <p>✓ Acesso imediato</p>
                                <p>✓ Garantia de 7 dias</p>
                                <p>✓ Ambiente seguro</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Checkout;
