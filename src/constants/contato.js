// src/constants/contato.js
// Variantes de animação para a seção de Contato

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.1 
    }
  }
};

export const itemVariants = {
  hidden: { 
    y: 30, 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }
  }
};

export const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3]
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut"
  }
};