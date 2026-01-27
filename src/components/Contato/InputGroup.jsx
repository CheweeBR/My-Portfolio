// src/components/Contato/InputGroup.jsx
// Campo de input reutilizável com label e animação

import { motion } from 'framer-motion';

const InputGroup = ({ label, type, placeholder, isTextarea = false, rows = 4 }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-green-400 transition-colors">
      {label}
    </label>
    
    {isTextarea ? (
      <motion.textarea 
        whileFocus={{ 
          scale: 1.01, 
          borderColor: "rgba(74, 222, 128, 0.5)", 
          backgroundColor: "rgba(0,0,0,0.6)" 
        }}
        rows={rows}
        placeholder={placeholder} 
        required 
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none transition-all placeholder:text-slate-600 resize-none" 
      />
    ) : (
      <motion.input 
        whileFocus={{ 
          scale: 1.01, 
          borderColor: "rgba(74, 222, 128, 0.5)", 
          backgroundColor: "rgba(0,0,0,0.6)" 
        }}
        type={type} 
        placeholder={placeholder} 
        required 
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none transition-all placeholder:text-slate-600" 
      />
    )}
  </div>
);

export default InputGroup;