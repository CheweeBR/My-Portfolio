// src/components/Timeline/TimelineCard.jsx
// Card com informações detalhadas de cada etapa da timeline

import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon } from './icons';

const TimelineCard = ({ item, isHovered, colors }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`
        w-full md:max-w-lg bg-zinc-900/90 backdrop-blur-md 
        border rounded-3xl p-6 md:p-8 
        relative overflow-hidden group cursor-pointer 
        transition-all duration-300
      `}
      style={{
        borderColor: `${colors.hex}30`,
        boxShadow: isHovered 
          ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${colors.hex}30`
          : `0 10px 30px -10px rgba(0, 0, 0, 0.3), 0 0 20px ${colors.hex}15`
      }}
    >

      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 blur-3xl"
        style={{ 
          background: `linear-gradient(to bottom right, ${colors.hex}, ${colors.hex}80)` 
        }}
      />

      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered ? { x: '200%', opacity: 0.1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />

      <div className="relative z-10">

        <motion.span
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`
            inline-block px-4 py-1.5 rounded-full text-xs font-bold 
            ${colors.bg} ${colors.text} border mb-4
            backdrop-blur-sm
          `}
          style={{ borderColor: `${colors.hex}30` }}
        >
          {item.phase}
        </motion.span>

        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
        >
          {item.title}
        </motion.h3>

        <motion.blockquote 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`${colors.text} italic text-sm md:text-base mb-4 pl-4 border-l-2`}
          style={{ borderColor: `${colors.hex}50` }}
        >
          {item.quote}
        </motion.blockquote>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-slate-300 text-sm md:text-base leading-relaxed mb-4"
        >
          {item.story}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <span className="text-base">🎭</span> {item.emotion}
          </span>
          <span className="text-slate-700">•</span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <span className="text-base">🎯</span> {item.milestone}
          </span>
        </motion.div>

        {item.highlight && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className={`${colors.bg} rounded-xl p-3 mb-4 backdrop-blur-sm border`}
            style={{ borderColor: `${colors.hex}30` }}
          >
            <p className={`text-xs font-bold ${colors.text} flex items-center gap-2`}>
              <span className="text-base">✨</span> {item.highlight}
            </p>
          </motion.div>
        )}

        {/* GitHub Link */}
        {item.link && (
          <motion.a
            href={item.link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`
              inline-flex items-center gap-2 px-4 py-2 
              ${colors.bg} rounded-lg 
              text-xs font-medium ${colors.text} 
              transition-all hover:border-opacity-60
              backdrop-blur-sm border
            `}
            style={{ borderColor: `${colors.hex}30` }}
          >
            <GitHubIcon />
            {item.link.label}
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineCard;