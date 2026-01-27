// src/components/Contato/ContactForm.jsx
// Formulário de contato completo

import { useState } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../constants/contato';
import InputGroup from './InputGroup';
import SubmitButton from './Submitbutton';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulando envio
    setTimeout(() => {
      setFormStatus('success');
      // Reset após sucesso
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="bg-zinc-900/80 border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl shadow-black/50"
    >
      {/* Brilho decorativo animado */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
        <h3 className="text-2xl font-bold text-white mb-2">
          Envie um email direto
        </h3>
        
        {/* Nome e Email */}
        <div className="grid grid-cols-2 gap-4">
          <InputGroup 
            label="Nome" 
            type="text" 
            placeholder="Seu nome" 
          />
          <InputGroup 
            label="Email" 
            type="email" 
            placeholder="seu@email.com" 
          />
        </div>

        {/* Assunto */}
        <InputGroup 
          label="Assunto" 
          type="text" 
          placeholder="Projeto, Dúvida ou Café?" 
        />
        
        {/* Mensagem */}
        <InputGroup 
          label="Mensagem" 
          isTextarea 
          rows={4}
          placeholder="Escreva sua mensagem aqui..." 
        />

        {/* Botão de Envio */}
        <SubmitButton status={formStatus} />
      </form>
    </motion.div>
  );
};

export default ContactForm;