// src/components/SobreMim/icons.jsx
// Ícones SVG animados para as categorias de tecnologia

import { motion } from 'framer-motion';

export const IconIoT = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-white">
    <motion.rect 
      x="4" y="4" width="16" height="16" rx="2" 
      initial={{ pathLength: 0, opacity: 0.2 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path 
      d="M9 9h6v6H9z" 
      fill="currentColor" 
      animate={{ opacity: [0.3, 1, 0.3] }} 
      transition={{ duration: 1.5, repeat: Infinity }} 
      className="text-red-500" 
      style={{ stroke: 'none' }}
    />
    <motion.path 
      d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" 
      strokeLinecap="round" 
      className="text-slate-500"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
  </svg>
);

export const IconBackend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "12px 12px" }}
    >
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </motion.g>
  </svg>
);

export const IconFrameworks = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <motion.path 
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      animate={{ y: [0, -1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

export const IconFrontend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <motion.path d="M8 21h8" strokeLinecap="round" />
    <motion.path d="M12 17v4" strokeLinecap="round" />
    <motion.path 
      d="M6 8h2M6 12h8" 
      strokeLinecap="round" 
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

export const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <motion.ellipse cx="12" cy="5" rx="9" ry="3" />
    <motion.path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeLinecap="round" />
    <motion.path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeLinecap="round" />
    <motion.circle 
      cx="18" cy="18" r="1" fill="currentColor" 
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      stroke="none"
    />
  </svg>
);

export const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <g transform="translate(1, 1) scale(0.92)">
      <motion.path 
        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <motion.path 
        d="M12 17v-4" 
        strokeLinecap="round"
        animate={{ y: [0, -3], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.path 
        d="M10 15l2-2 2 2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ y: [0, -3], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </g>
  </svg>
);