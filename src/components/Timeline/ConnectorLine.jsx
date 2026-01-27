// src/components/Timeline/ConnectorLine.jsx
// Linha conectora com gradiente entre os nós da timeline

import React from 'react';
import { motion } from 'framer-motion';
import { colorSchemes } from '../../constants/timeline';

const ConnectorLine = ({ fromColor, toColor, isLast }) => {
  const fromHex = colorSchemes[fromColor]?.hex || colorSchemes.blue.hex;
  const toHex = colorSchemes[toColor]?.hex || fromHex;
  
  // Não renderiza linha no último item
  if (isLast) return null;
  
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ 
        transformOrigin: "top",
        background: `linear-gradient(to bottom, ${fromHex}, ${toHex})`
      }}
      className={`
        absolute left-[31px] md:left-1/2 md:-translate-x-1/2 
        w-1 rounded-full 
        top-16 md:top-20 
        h-[calc(100%-2.5rem)] md:h-[calc(100%-3.5rem)]
      `}
    />
  );
};

export default ConnectorLine;