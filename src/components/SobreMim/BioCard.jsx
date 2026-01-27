// src/components/SobreMim/BioCard.jsx
// Card de biografia pessoal

import { motion } from 'framer-motion';
import { itemVariants } from '../../constants/sobremim';
import { bioData } from '../../data/techData';

const BioCard = () => (
  <motion.div 
    variants={itemVariants}
    className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-3xl relative overflow-hidden group"
  >
    {/* Glow Effect */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"
    />

    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
      <div>
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
          Olá, sou <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            {bioData.name}
          </span>
        </h1>
        
        {/* Role & University */}
        <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-6 flex flex-wrap items-center gap-2">
          <span>{bioData.role} •</span>
          <motion.a 
            href={bioData.university.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold border-b-2 border-green-500 hover:text-white hover:border-white transition-colors cursor-pointer inline-flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {bioData.university.name}
          </motion.a>
        </p>

        {/* Content */}
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>🎓 Formado em <b>{bioData.degree}</b> na {bioData.university.name}.</p>
          
          <p className="border-l-4 border-yellow-500 pl-4 italic text-slate-400">
            "{bioData.quote}"
          </p>
          
          <p>{bioData.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default BioCard;