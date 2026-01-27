// src/components/SobreMim/TechBadge.jsx
// Badge clicável de tecnologia com link para documentação

import { motion } from 'framer-motion';
import { techLinks } from '../../data/techData';

const TechBadge = ({ name, colorClass }) => {
  const url = techLinks[name] || "#"; 

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-3 py-1.5 rounded-md text-xs font-bold border 
        ${colorClass} bg-opacity-10 backdrop-blur-sm 
        cursor-pointer inline-block no-underline hover:brightness-110
      `}
    >
      {name}
    </motion.a>
  );
};

export default TechBadge;