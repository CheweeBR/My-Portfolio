// src/components/SobreMim/IotCard.jsx
// Card especial de IoT & Hardware

import { motion } from 'framer-motion';
import { itemVariants } from '../../constants/sobremim';
import { iotData } from '../../data/techData';
import TechBadge from './TechBadge';

const IoTCard = () => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    className="lg:col-span-2 bg-gradient-to-r from-red-900/40 to-slate-900 border border-red-500/20 p-6 rounded-2xl flex flex-col justify-center gap-4 hover:border-red-500/40 transition-colors"
  >
    {/* Header */}
    <div className="flex items-center gap-3">
      <div className="p-2 bg-red-500/10 rounded-lg">
        <iotData.icon />
      </div>
      <h3 className="text-xl font-bold text-white">{iotData.title}</h3>
    </div>

    {/* Description */}
    <p className="text-slate-400 text-sm">
      {iotData.description}
    </p>

    {/* Tech Badges */}
    <div className="flex flex-wrap gap-2 mt-2">
      {iotData.techs.map((tech) => (
        <TechBadge 
          key={tech.name} 
          name={tech.name} 
          colorClass={tech.colorClass} 
        />
      ))}
    </div>
  </motion.div>
);

export default IoTCard;