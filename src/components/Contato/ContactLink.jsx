// src/components/Contato/ContactLink.jsx
// Card de link de contato/rede social

import { motion } from 'framer-motion';
import { itemVariants } from '../../constants/contato';

const ContactLink = ({ link }) => {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className={`
        group relative flex items-center gap-4 p-4 rounded-2xl 
        border border-white/5 bg-zinc-900/40 backdrop-blur-sm 
        transition-all duration-300 overflow-hidden 
        ${link.hoverBorder}
      `}
      whileHover="hover"
    >
      {/* Efeito de Shimmer no Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100`}
        initial={{ x: '-100%' }}
        variants={{
          hover: { 
            x: '100%', 
            transition: { 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear" 
            } 
          }
        }}
      />
      
      {/* Ícone com Animação */}
      <motion.div 
        className={`
          relative z-10 p-3 rounded-xl bg-zinc-950 
          border border-white/5 ${link.color}
        `}
        variants={{
          hover: { rotate: [0, -10, 10, 0], scale: 1.1 }
        }}
      >
        <Icon />
      </motion.div>

      {/* Texto */}
      <div className="flex flex-col relative z-10">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
          {link.name}
        </span>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {link.label}
        </span>
      </div>
    </motion.a>
  );
};

export default ContactLink;