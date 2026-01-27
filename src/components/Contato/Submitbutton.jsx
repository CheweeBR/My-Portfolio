// src/components/Contato/SubmitButton.jsx
// Botão de envio com estados animados (idle, sending, success)

import { motion, AnimatePresence } from 'framer-motion';
import { Spinner, IconSuccess, StaticPlane, FlyingPlane } from './icons';

const SubmitButton = ({ status }) => {
  const getButtonClasses = () => {
    switch (status) {
      case 'success':
        return 'bg-green-600 text-white cursor-default';
      case 'sending':
        return 'bg-zinc-700 text-white cursor-wait';
      default:
        return 'bg-white text-black';
    }
  };

  return (
    <motion.button
      layout
      whileHover={{ 
        scale: 1.02, 
        backgroundColor: status === 'idle' ? 'rgba(34, 197, 94, 1)' : '' 
      }}
      whileTap={{ scale: 0.98 }}
      disabled={status !== 'idle'}
      className={`
        mt-2 h-14 rounded-xl font-bold 
        flex items-center justify-center gap-3 
        transition-colors overflow-hidden relative 
        ${getButtonClasses()}
      `}
    >
      <AnimatePresence mode='wait'>
        {/* Estado: Idle */}
        {status === 'idle' && (
          <motion.div 
            key="idle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span>Enviar Mensagem</span>
            <StaticPlane />
          </motion.div>
        )}

        {/* Estado: Enviando */}
        {status === 'sending' && (
          <motion.div 
            key="sending"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <FlyingPlane />
            </div>
            <Spinner />
          </motion.div>
        )}

        {/* Estado: Sucesso */}
        {status === 'success' && (
          <motion.div 
            key="success"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span>Mensagem Enviada!</span>
            <IconSuccess />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default SubmitButton;