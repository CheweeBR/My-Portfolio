// src/sections/timeline.jsx
// Componente principal que orquestra toda a timeline

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Components
import { TimelineNode, TimelineCard, ConnectorLine, TimelineFooter } from '../components/Timeline';

// Data & Constants
import { timelineData } from '../data/timelineData';
import { colorSchemes, containerVariants, cardVariants } from '../constants/timeline';

// ==========================================
// SUB-COMPONENTES
// ==========================================

const TimelineHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="mb-16 text-center"
  >
    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
      A Jornada de um <br/>
      <motion.span 
        className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-300 to-green-100"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: '200% 200%' }}
      >
        Desenvolvedor
      </motion.span>
    </h2>
    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
      De um simples jogo em Python à liderança técnica em Fullstack. <br/>
    </p>
  </motion.div>
);

const TimelineItem = ({ 
  item, 
  index, 
  colors, 
  isLeft, 
  isHovered, 
  isLast, 
  nextItem,
  onHoverStart,
  onHoverEnd 
}) => (
  <motion.div
    variants={cardVariants}
    className="relative"
    onHoverStart={onHoverStart}
    onHoverEnd={onHoverEnd}
  >
    {/* Nó Central (Bolinha com Ano) */}
    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-20">
      <TimelineNode 
        item={item} 
        isHovered={isHovered} 
        colors={colors} 
      />
    </div>

    {/* Linha conectora */}
    <ConnectorLine 
      fromColor={item.color}
      toColor={nextItem?.color || item.color}
      isLast={isLast}
    />

    {/* Card - Layout Zigue-zague */}
    <div className={`
      flex 
      ${isLeft ? 'md:justify-start md:pr-[52%]' : 'md:justify-end md:pl-[52%]'}
      pl-20 md:pl-0 md:pr-0
      pt-2 md:pt-0
      w-full
    `}>
      <TimelineCard 
        item={item} 
        isHovered={isHovered} 
        colors={colors}
      />
    </div>
  </motion.div>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Timeline() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12 lg:py-4 flex flex-col justify-center min-h-full">
      
      {/* Header */}
      <TimelineHeader />

      {/* Timeline Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        <div className="space-y-8 md:space-y-6">
          {timelineData.map((item, index) => {
            const colors = colorSchemes[item.color];
            const isLeft = index % 2 === 0;
            const isHovered = hoveredCard === index;
            const isLast = index === timelineData.length - 1;
            const nextItem = timelineData[index + 1];

            return (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                colors={colors}
                isLeft={isLeft}
                isHovered={isHovered}
                isLast={isLast}
                nextItem={nextItem}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Footer */}
      <TimelineFooter />
    </section>
  );
}