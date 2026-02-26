import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '5513996267989';
    const message = encodeURIComponent('Olá! Gostaria de uma análise sobre a restituição do Imposto de Renda do meu Auxílio-Transporte.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
            title="Falar no WhatsApp"
        >
            <div className="absolute -inset-2 bg-[#25D366]/20 rounded-full animate-ping group-hover:hidden"></div>
            <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
        </motion.a>
    );
};

export default WhatsAppButton;
