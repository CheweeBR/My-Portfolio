// src/components/Timeline/TimelineNode.jsx
// Componente do nó circular da timeline com ícone e ano

import React from 'react';
import { motion } from 'framer-motion';
import { nodeVariants, pulseVariants } from '../../constants/timeline';

const TimelineNode = ({ item, isHovered, colors }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      variants={nodeVariants}
      className="relative"
    >
      {/* Pulse Effect */}
      <motion.div
        variants={pulseVariants}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
        className="absolute inset-0 rounded-full"
        style={{ background: colors.hex }}
      />
      
      {/* Outer Ring with Glow */}
      <motion.div
        animate={isHovered ? { 
          scale: 1.1,
          boxShadow: `0 0 30px ${colors.hex}80`
        } : { 
          scale: 1,
          boxShadow: `0 0 15px ${colors.hex}40`
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`
          w-16 h-16 md:w-20 md:h-20 rounded-full 
          bg-zinc-900 border-4
          flex flex-col items-center justify-center
          relative overflow-hidden
        `}
        style={{ borderColor: `${colors.hex}50` }}
      >
        {/* Gradient Background */}
        <motion.div
          animate={isHovered ? { opacity: 0.4 } : { opacity: 0.15 }}
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to bottom, ${colors.hex}, ${colors.hex}80)` 
          }}
        />
        
        {/* Icon */}
        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`relative z-10 ${colors.text}`}
        >
          <Icon />
        </motion.div>
        
        {/* Year */}
        <motion.p 
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          className={`
            relative z-10 text-[10px] md:text-xs 
            font-black ${colors.text} mt-0.5 tracking-wide
          `}
        >
          {item.year}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default TimelineNode;