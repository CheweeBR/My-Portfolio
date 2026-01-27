// src/constants/sobremim.js
// Variantes de animação para a seção Sobre Mim

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    }
  }
};

export const itemVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 120 
    }
  }
};

export const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3]
  },
  transition: {
    duration: 8,
    repeat: Infinity
  }
};